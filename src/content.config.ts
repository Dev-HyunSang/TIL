import fs from "node:fs";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

// 기존 docs/ 문서를 그대로 사용. frontmatter title이 없으면
// 본문 첫 `# 제목` 또는 파일명을 title로 주입한다.
const base = glob({ base: "./src/content/docs", pattern: "**/*.md" });

export const collections = {
  docs: defineCollection({
    loader: {
      name: "til-docs",
      load: (ctx) =>
        base.load({
          ...ctx,
          parseData: ({ id, data, filePath }) => {
            if (!data.title && filePath) {
              const src = fs.readFileSync(filePath, "utf-8");
              const h1 = src.match(/^#\s+(.+)$/m)?.[1]?.trim();
              data = { ...data, title: h1 ?? id.split("/").pop() ?? id };
            }
            return ctx.parseData({ id, data, filePath });
          },
        }),
    },
    schema: docsSchema(),
  }),
};
