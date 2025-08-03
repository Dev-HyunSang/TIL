export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"HyunSang's I Learned"} }],
  ["/articles/software-engineering.html", { loader: () => import(/* webpackChunkName: "articles_software-engineering.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/articles/software-engineering.html.js"), meta: {"title":"Software Enginnering Articels"} }],
  ["/software-engineering/back-end/auth.html", { loader: () => import(/* webpackChunkName: "software-engineering_back-end_auth.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/software-engineering/back-end/auth.html.js"), meta: {"title":"Auth"} }],
  ["/law/%EB%AF%BC%EC%82%AC%EB%B2%95/%EC%9E%90%EC%97%B0%EC%9D%B8.html", { loader: () => import(/* webpackChunkName: "law_민사법_자연인.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/law/민사법/자연인.html.js"), meta: {"title":"민사총칙 - 자연인(自然人)"} }],
  ["/law/%ED%8C%90%EB%A1%80/%EB%AF%BC%EC%82%AC%EB%B2%95.html", { loader: () => import(/* webpackChunkName: "law_판례_민사법.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/law/판례/민사법.html.js"), meta: {"title":"민사법 판례"} }],
  ["/law/%ED%8C%90%EB%A1%80/%ED%97%8C%EC%9E%AC.html", { loader: () => import(/* webpackChunkName: "law_판례_헌재.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/law/판례/헌재.html.js"), meta: {"title":"헌법재판소 판결"} }],
  ["/law/%ED%8C%90%EB%A1%80/%ED%98%95%EC%82%AC%EB%B2%95.html", { loader: () => import(/* webpackChunkName: "law_판례_형사법.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/law/판례/형사법.html.js"), meta: {"title":"형사법 판례"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
