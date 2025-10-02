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
              { text: "헌법 재판소", link: "/law/판례/헌재" },
              { text: "민사법", link: "/law/판례/민사법" },
              { text: "형사법", link: "/law/판례/형사법" },
            ],
          },
          {
            text: "법령",
            children: [
              { text: "전기통신사업법", link: "/law/법령/전기통신사업법" },
            ],
          },
          {
            text: '법학전문석사과정',
            children: [
              { text: '입학', link: '/law/법학전문석사과정/로스쿨_입학'},
            ],
          },
        ],
      },
      {
        text: "논문",
        link: "/논문/index",
        children: [
          {
                text: "철학",
                children: [
                  { text: '행복에 관한 철학적 고찰', link: "/논문/철학/행복론/행복에-관한-철학적-고찰" },
                ]
              },
              { text: "법철학", 
                children: [
                { text: "법에 있어서의 인간상에 관한 고찰", link: "/논문/법철학/법에-있어서의-인간상에-관한-고찰"}
              ]}
          ]}, 
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
