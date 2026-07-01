import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

// Auto-generates the sidebar from the docs file tree.
// Add a new .md file to any folder → it shows up automatically.
//   - Title:  frontmatter `title:` → first `# H1` → filename
//   - Order:  numeric filename prefix (01_, 2_, 01강 …) then Korean-aware A→Z
//   - Landing page: a folder's index.md / README.md becomes its group link
// Only the top-level SECTIONS below need hand-editing (rarely).

const SECTIONS = [
  { dir: "software-engineering", text: "Software Engineering" },
  { dir: "law", text: "법학" },
  { dir: "논문", text: "논문" },
  { dir: "articles", text: "Articles" },
  { dir: "개인적인", text: "개인적인" },
];

// Folder-name → display label overrides. Anything not listed is Title-Cased
// (english, hyphen-split) or kept verbatim (korean).
const LABELS = {
  "back-end": "Back-End",
  devops: "DevOps",
  golang: "Go",
  javascript: "JavaScript",
  kubernetes: "Kubernetes",
  nest: "Nest",
  db: "DB",
  "githb-action": "github-action",
  grafana: "Grafana",
  "회생_파산": "회생/파산"
};

// Pin folders/files to the top of a group, in the listed order. Key = the
// group's path (relDir); value = child names in the order you want them.
// Anything not listed keeps the normal numeric-prefix → 가나다 auto-sort below.
const PINNED = {
  "software-engineering": ["back-end"],
};

function labelOf(name) {
  if (LABELS[name]) return LABELS[name];
  if (/^[a-z][a-z-]*$/.test(name)) // english words only (no digits) → Title Case
    return name
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
  return name;
}

function titleOf(absFile, fallback) {
  const src = readFileSync(absFile, "utf8");
  const fm = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (fm) {
    const t = fm[1].match(/^title:\s*(.+)$/m);
    if (t) return t[1].trim().replace(/^["']|["']$/g, "");
  }
  const h1 = src.match(/^#\s+(.+)$/m);
  return h1 ? h1[1].trim() : fallback;
}

const orderKey = (name) => {
  const m = name.match(/^(\d+)/);
  return m ? Number(m[1]) : Infinity;
};

function buildChildren(absDir, relDir) {
  const pins = PINNED[relDir] || [];
  const pinOf = (name) => {
    const i = pins.indexOf(name);
    return i === -1 ? Infinity : i;
  };
  const items = [];
  for (const e of readdirSync(absDir, { withFileTypes: true })) {
    if (e.name.startsWith(".")) continue;
    if (e.isDirectory()) {
      const rel = `${relDir}/${e.name}`;
      const abs = join(absDir, e.name);
      const group = {
        text: labelOf(e.name),
        collapsible: pinOf(e.name) === Infinity, // pinned → always expanded, shown immediately
        children: buildChildren(abs, rel),
      };
      if (["index.md", "README.md"].some((f) => existsSync(join(abs, f))))
        group.link = `/${rel}/`;
      items.push({ ...group, _p: pinOf(e.name), _o: orderKey(e.name), _n: e.name });
    } else if (e.name.endsWith(".md") && !/^(index|README)\.md$/i.test(e.name)) {
      const base = e.name.replace(/\.md$/, "");
      items.push({
        text: titleOf(join(absDir, e.name), base),
        link: `/${relDir}/${base}`,
        _p: pinOf(e.name),
        _o: orderKey(e.name),
        _n: e.name,
      });
    }
  }
  items.sort((a, b) => a._p - b._p || a._o - b._o || a._n.localeCompare(b._n, "ko"));
  return items.map(({ _p, _o, _n, ...rest }) => rest);
}

export function buildSidebar(docsDir) {
  return SECTIONS.map((s) => {
    const abs = join(docsDir, s.dir);
    const group = {
      text: s.text,
      collapsible: true,
      children: buildChildren(abs, s.dir),
    };
    if (["index.md", "README.md"].some((f) => existsSync(join(abs, f))))
      group.link = `/${s.dir}/`;
    return group;
  });
}
