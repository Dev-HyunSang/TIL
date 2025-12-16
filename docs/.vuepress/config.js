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
            text: "법령",
            children: [
              {
                text: "형사법",
                children: [
                  { text: "형법", link: "/law/법령/형사법/형법"},
                  { text: "폭력행위처벌법 (폭처법)", link: "/law/법령/형사법/폭력행위처벌법"},
                  { text: "특정범죄가중법 (특가법)", link: "/law/법령/형사법/특정범죄가중법"},
                  { text: "특정경제범죄법 (특경법)", link: "/law/법령/형사법/특경경제범죄법"},
                  { text: "도로교통법", link: "/law/법령/형사법/도로교통법" },
                ]
              },
              {
                text: "민사법",
                children: [
                  { text: "민법", link: "/law/법령/민사법/민법"},
                  { text: "채권추심법", link: "/law/법령/민사법/채권추심법"}
                ]
              },
              {
                text: "부동산",
                children: [
                  { text: "주택임대차보호법", link: "/law/법령/부동산/주택임대차보호법"},
                  { text: "부동산거래신고법", link: "/law/법령/부동산/부동산거래신고법"}
                ]
              },

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
        collapsible: true,
        children: [
          {
                text: "철학",
                children: [
                  { text: '행복에 관한 철학적 고찰', link: "/논문/철학/행복론/행복에-관한-철학적-고찰" },
                  { text: '우리는 사랑을 어떻게 경험하고 의미화 하는가?', link: '/논문/철학/사랑/우리는-사랑을-어떻게-경험하고-의미화-하는가'}
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
              { text: "사용자 인증", link: "/software-engineering/back-end/auth.md" },
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
        children: [
          {
            text: "Software Engineering",
            link: "/articles/software-engineering.md",
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
            link: "/articles/personal-information-protection"
          },
          {
            text: "Web Hacking",
            link: "/articles/web-hacking.md",
          },
          { text: "Android Reverse Engineering",
            link: "/articles/android-reverse-engineering.md"
          },
          {
            text: "OSINT",
            link: "/articles/OSINT.md",
          }
        ],
      },
    ],
  }),

  bundler: viteBundler(),
});
