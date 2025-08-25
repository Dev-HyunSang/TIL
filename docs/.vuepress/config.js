import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",
  base: "/TIL/",
  title: "HyunSang's Today I Learned",
  description: "Cyber Security, Software Engineering, and Law",

  theme: defaultTheme({
    logo: null,
    navbar: [],
    sidebar: [
      {
        text: "법학",
        link: "/law/법학/index.md",
        children: [
          {
            text: "형사법",
            children: [
              {
                text: "체포",
                link: "/law/형사법/체포.md",
              },
            ],
          },
          {
            text: "민사법",
            children: [
              {
                text: "자연인(自然人)",
                link: "/law/민사법/자연인.md",
              },
              {
                text: "권리(支配權)",
                link: "/law/민사법/권리.md",
              },
            ],
          },
          {
            text: "판례 연구소",
            children: [
              { text: "헌법 재판소", link: "/law/판례/헌재.md" },
              { text: "민사법", link: "/law/판례/민사법.md" },
              { text: "형사법", link: "/law/판례/형사법.md" },
            ],
          },
        ],
      },
      {
        text: "Software Engineering",
        children: [
          {
            text: "Back-End",
            children: [
              { text: "Auth", link: "/software-engineering/back-end/auth.md" },
            ],
          },
        ],
      },
      {
        text: "articles",
        children: [
          {
            text: "Software Engineering",
            link: "/articles/software-engineering.md",
          },
          {
            text: "Web Hacking",
            link: "/articles/web-hacking.md",
          },
        ],
      },
    ],
  }),

  bundler: viteBundler(),
});
