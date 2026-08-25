# HyunSang's TIL

Astro Starlight로 만든 개인 TIL(Today I Learned) 문서 사이트. <https://til.hyunsang.dev>

## 구조

`src/content/docs/` 아래 디렉토리가 사이드바 그룹이 됨 (`astro.config.mjs`의 `sidebar` 참고).

```text
src/content/docs/
├── daily-log/            # 날짜별 작업 로그
├── software-engineering/ # 언어/프레임워크별 기술 문서
├── cyber-security/
├── law/
├── articles/             # 링크 모음
└── 개인적인/
```

## 새 문서 작성 예시

해당 카테고리 디렉토리에 `.mdx` 파일을 만들고 아래 형식을 따름 (예: `software-engineering/javascript/what-is-the-package-manager.mdx`).

```mdx
---
title: "패키지 매니저란?"
---

- 본 문서는 [주제]가 무엇인지에 대한 문서임.
- 본 문서를 작성하며, 참고한 자료는 아래와 같음.
    - [참고 자료 제목](https://example.com)

## 소제목

- 내용 설명.

\`\`\`js
// 필요하면 코드 예시
\`\`\`
```

- `title`은 사이드바에 표시될 제목.
  - **frontmatter에 `title`을 반드시 명시할 것.** 생략하면 `content.config.ts`의 커스텀 로더가 본문 첫 `# 제목`(없으면 파일명)을 title로 대신 채워 넣어 사이트 자체는 문제없이 보이지만, `starlight-site-graph`는 Astro 로더를 거치지 않고 파일의 raw frontmatter만 직접 읽기 때문에 그래프 노드 라벨이 `%EB%8F%84%EC%84%9C...` 같은 퍼센트 인코딩 문자열로 깨져 표시됨.
- 파일명은 영문 kebab-case 권장 (URL 슬러그가 됨).
- `daily-log/`는 예외로 월별 파일(`2026-07.mdx`) 하나에 날짜별 항목을 append하는 방식:

```mdx
---
title: "2026.07."
---

## 2026.07.07.(화)

- [작성한 문서 링크](/software-engineering/javascript/what-is-the-package-manager) 작성.
    - [참고 자료](https://example.com) 참고하여 작성함.
```

## 그래프 (starlight-site-graph)

`starlight-theme-obsidian`이 내부적으로 `starlight-site-graph` 플러그인을 감싸서 자동 등록함. 별도 설치 불필요, 이미 활성화되어 있음.

### 전역 설정 — `astro.config.mjs`

```js
starlightThemeObsidian({
  graphConfig: {
    depth: 3,               // 현재 페이지 기준 몇 단계 이웃까지 표시할지 (기본 1, -1은 전체)
    depthDirection: "both", // both / incoming / outgoing
    nodeCurrentStyle: {
      shapeSize: 25,
    },
  },
}),
```

주요 옵션:

- `depth`, `depthDirection`: 그래프에 표시할 연결 범위
- `renderArrows`, `renderLabels`, `renderExternal`, `renderUnresolved`: 렌더링 여부
- `nodeInclusionRules`: glob 패턴으로 그래프에 포함/제외할 페이지 지정 (예: `["!daily-log/**", "**/*"]`)
- `nodeDefaultStyle` / `nodeCurrentStyle` / `nodeVisitedStyle` / `nodeExternalStyle`: 노드 모양·색·크기
- `visibilityRules` (전역 전용): 어떤 경로에서 그래프 사이드바를 보여줄지

### 페이지별 설정 — frontmatter `graph` 필드

문서별로 전역 설정을 덮어쓰고 싶을 때:

```mdx
---
title: 예시 문서
graph:
  visible: true # 이 페이지에서 그래프 표시 여부 (전역 규칙보다 우선)
  depth: 2
  nodeStyle:
    shapeColor: "#ff6b6b"
---
```

관련 frontmatter 필드:

- `links: ["path/to/other-page"]` — 자동 추출 링크 외에 수동으로 연결 추가
- `tags: ["network", "security"]` — 태그 (전역에서 `tagRenderMode`를 `node`/`same`/`both`로 켜면 반영)
- `backlinks: { visible: false }` — 해당 페이지의 백링크 컴포넌트 표시 여부

## 개발

```bash
npm run dev      # 로컬 개발 서버
npm run build    # 정적 빌드
npm run preview  # 빌드 결과 미리보기
```
