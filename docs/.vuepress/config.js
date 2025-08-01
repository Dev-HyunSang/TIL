import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",

  title: "HyunSang's Today I Learned",
  description: "Cyber Security, Software Engineering, and Law",

  theme: defaultTheme({
    logo: null,
    navbar: [],
    sidebar: [
      {
        text: "형법",
        link: "/law/형법/00.md",
        children: [{ text: "형법 제1장 총강", link: "/law/형법/01.md" }],
      },
      {
        text: "철학",
        link: "/philosophy/철학/index.md",
        children: [
          {
            text: "우리 사회는 공정한가?",
            link: "/philosophy/우리-사회는-공정한가.md",
          },
        ],
      },
    ],
  }),

  bundler: viteBundler(),
});
