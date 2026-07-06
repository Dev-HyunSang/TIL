// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeObsidian from "starlight-theme-obsidian";

// 본문 첫 h1 제거 — title(frontmatter 또는 첫 h1 자동 주입)과 중복되므로
function stripFirstH1() {
  return (tree) => {
    const i = tree.children.findIndex(
      (n) => n.type === "heading" && n.depth === 1
    );
    if (i !== -1) tree.children.splice(i, 1);
  };
}

export default defineConfig({
  markdown: {
    remarkPlugins: [stripFirstH1],
  },
  integrations: [
    starlight({
      title: "HyunSang's TIL",
      description: "Cyber Security, Software Engineering, and Law",
      defaultLocale: "root",
      locales: {
        root: { label: "한국어", lang: "ko" },
      },
      plugins: [
        starlightThemeObsidian({
          graphConfig: {
            nodeCurrentStyle: {
              shapeSize: 25
            }
          }
        }),
      ],
    }),
  ],
});
