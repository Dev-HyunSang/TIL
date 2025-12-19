import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",
  base: "til.hyunsang.dev/",
  title: "HyunSang's Today I Learned",
  description: "Cyber Security, Software Engineering, and Law",

  theme: defaultTheme({
    logo: null,
    navbar: [],
    sidebar: [
      {
        text: "법학",
        collapsible: true,
        children: [
          {
            text: "형사법",
            children: [
              {
                text: "체포",
                link: "/law/형사법/체포",
              },
              {
                text: "영장",
                link: "/law/형사법/영장"
              },
              {
                text: "약식기소",
                link: "/law/형사법/약식기소"
              }
            ],
          },
          {
            text: "민사법",
            children: [
              {
                text: "부동산 관련",
                children: [
                  {
                    text: "임대차계약",
                    link: "/law/민사법/부동산/임대차계약"
                  }
                ]
              },
              {
                text: "자연인(自然人)",
                link: "/law/민사법/1_자연인.md",
              },
              {
                text: "행위능력(行爲能力)",
                link: "/law/민사법/2_행위능력",
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
            text: '법학전문석사과정',
            children: [
              { text: '입학', link: '/law/법학전문석사과정/로스쿨_입학' },
            ],
          },
        ],
      },
      {
        text: "논문",
        link: "/논문/index",
        collapsible: true,
        children: [
          {
            text: "철학",
            children: [
              { text: '행복에 관한 철학적 고찰', link: "/논문/철학/행복론/행복에-관한-철학적-고찰" },
              { text: '우리는 사랑을 어떻게 경험하고 의미화 하는가?', link: '/논문/철학/사랑/우리는-사랑을-어떻게-경험하고-의미화-하는가' }
            ]
          },
          {
            text: "법철학",
            children: [
              { text: "법에 있어서의 인간상에 관한 고찰", link: "/논문/법철학/법에-있어서의-인간상에-관한-고찰" }
            ]
          }
        ]
      },
      {
        text: "Software Engineering",
        collapsible: true,
        children: [
          {
            text: "Back-End",
            children: [
              { text: "사용자 인증", link: "/software-engineering/back-end/auth.md" },
              { text: "JWKS(JSON Web Key Set)", link: "/software-engineering/back-end/jwks.md" },
            ],
          },
          {
            text: "개인적인",
            children: [
              { text: "맥북 개발환경 설정", link: "/software-engineering/personal/macbook-setup.md" },
            ],
          }
        ],
      },
      {
        text: "Articles",
        collapsible: true,
        children: [
          {
            text: "Software Engineering",
            link: "/articles/software-engineering.md",
          },
          {
            text: "백엔드 개발",
            link: "/articles/백엔드-개발"
          },
          {
            text: "NestJS",
            link: "/articles/nestjs"
          },
          {
            text: "사이버 보안",
            link: "/articles/cyber-security"
          },
          {
            text: "개인정보보호",
            link: "/articles/개인정보보호"
          },
          {
            text: "Web Hacking",
            link: "/articles/web-hacking.md",
          },
          {
            text: "Android Reverse Engineering",
            link: "/articles/android-reverse-engineering.md"
          },
          {
            text: "OSINT",
            link: "/articles/OSINT.md",
          }
        ],
      },
      {
        text: "개인적인",
        collapsible: true,
        children: [
          { text: "인상 깊은 영상들", link: "/개인적인/인상-깊은" },
          { text: "커리어", link: "/개인적인/커리어" }
        ]
      }
    ],
  }),

  bundler: viteBundler(),
});
