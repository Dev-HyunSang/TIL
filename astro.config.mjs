// @ts-check
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightThemeObsidian from "starlight-theme-obsidian";

export default defineConfig({
  site: "https://til.hyunsang.dev",
  markdown: {},
  // starlight-site-graph가 브라우저에서 micromatch(내부 picomatch@2.3.1)를 그대로 import하는데,
  // 해당 버전이 모듈 최상단에서 가드 없이 process.platform/process.version을 참조해
  // "ReferenceError: process is not defined"로 크래시함. 빌드 타임에 리터럴로 치환해 우회.
  vite: {
    define: {
      "process.platform": JSON.stringify(process.platform),
      "process.version": JSON.stringify(process.version),
    },
    // vite.define은 optimizeDeps(esbuild 사전 번들링)에는 자동 전파되지 않아 별도로 지정해야 함.
    optimizeDeps: {
      esbuildOptions: {
        define: {
          "process.platform": JSON.stringify(process.platform),
          "process.version": JSON.stringify(process.version),
        },
      },
    },
  },
  integrations: [
    starlight({
      title: "HyunSang's TIL",
      description: "Cyber Security, Software Engineering, and Law",
      // 배열 순서 = 사이드바 순서. label = 표시될 그룹 이름.
      // 펼쳐둘 그룹만 collapsed: false.
      sidebar: [
        { label: "Daily Log", collapsed: false, items: [
          { label: "Overview", link: "daily-log/" },
          { autogenerate: { directory: "daily-log" } },
        ] },
        { label: "Software Engineering", collapsed: true, items: [
          { label: "Overview", link: "software-engineering/" },
          { autogenerate: { directory: "software-engineering" } },
        ] },
        { label: "Network", collapsed: true, items: [
          { label: "Overview", link: "network/" },
          { autogenerate: { directory: "network" } },
        ] },
        { label: "Cyber Security", collapsed: true, items: [
          { label: "Overview", link: "cyber-security/" },
          { autogenerate: { directory: "cyber-security" } },
        ] },
        { label: "Law", collapsed: true, items: [
          { label: "Overview", link: "law/" },
          { autogenerate: { directory: "law" } },
        ] },
        { label: "Articles", collapsed: true, items: [
          { label: "Overview", link: "articles/" },
          { autogenerate: { directory: "articles" } },
        ] },
        { label: "논문", collapsed: true, items: [
          { label: "Overview", link: "논문/" },
          { autogenerate: { directory: "논문" } },
        ] },
        { label: "개인적인", collapsed: true, items: [
          { label: "Overview", link: "개인적인/" },
          { autogenerate: { directory: "개인적인" } },
        ] },
      ],
      defaultLocale: "root",
      locales: {
        root: { label: "한국어", lang: "ko" },
      },
      plugins: [
        starlightThemeObsidian({
          graphConfig: {
            depth: -1,
            nodeCurrentStyle: {
              shapeSize: 25
            }
          }
        }),
      ],
    }),
  ],
});
