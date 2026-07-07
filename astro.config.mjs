// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeObsidian from "starlight-theme-obsidian";

export default defineConfig({
  markdown: {},
  integrations: [
    starlight({
      title: "HyunSang's TIL",
      description: "Cyber Security, Software Engineering, and Law",
      // 배열 순서 = 사이드바 순서. label = 표시될 그룹 이름.
      // 펼쳐둘 그룹만 collapsed: false.
      sidebar: [
        { label: "Software Engineering", collapsed: true, items: [{ autogenerate: { directory: "software-engineering" } }]},
        { label: "Cyber Security", collapsed: true, items: [{ autogenerate: { directory: "cyber-security"  } }] },
        { label: "Law", collapsed: true, items: [{ autogenerate: { directory: "law" } }] },
        { label: "Articles", collapsed: true, items: [{ autogenerate: { directory: "articles" } }] },
        { label: "논문", collapsed: true, items: [{ autogenerate: { directory: "논문" } }] },
        { label: "개인적인", collapsed: true, items: [{ autogenerate: { directory: "개인적인" } }] },
      ],
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
