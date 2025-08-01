export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"HyunSang's Today I Learnd"} }],
  ["/philosophy/%EC%9A%B0%EB%A6%AC-%EC%82%AC%ED%9A%8C%EB%8A%94-%EA%B3%B5%EC%A0%95%ED%95%9C%EA%B0%80.html", { loader: () => import(/* webpackChunkName: "philosophy_우리-사회는-공정한가.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/philosophy/우리-사회는-공정한가.html.js"), meta: {"title":"우리 사회는 공정한가"} }],
  ["/law/%ED%98%95%EC%82%AC%EB%B2%95/00.html", { loader: () => import(/* webpackChunkName: "law_형사법_00.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/law/형사법/00.html.js"), meta: {"title":"형법"} }],
  ["/law/%ED%98%95%EC%82%AC%EB%B2%95/01.html", { loader: () => import(/* webpackChunkName: "law_형사법_01.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/law/형사법/01.html.js"), meta: {"title":"형법 제1편 총칙"} }],
  ["/law/%ED%8C%90%EB%A1%80/%EB%AF%BC%EC%82%AC%EB%B2%95.html", { loader: () => import(/* webpackChunkName: "law_판례_민사법.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/law/판례/민사법.html.js"), meta: {"title":"민사법 판례"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/law/%ED%8C%90%EB%A1%80/%ED%98%95%EC%82%AC%EB%B2%95.html", { loader: () => import(/* webpackChunkName: "law_판례_형사법.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/law/판례/형사법.html.js"), meta: {"title":""} }],
  ["/law/%ED%8C%90%EB%A1%80/%ED%97%8C%EC%9E%AC.html", { loader: () => import(/* webpackChunkName: "law_판례_헌재.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/law/판례/헌재.html.js"), meta: {"title":"헌법재판소"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
