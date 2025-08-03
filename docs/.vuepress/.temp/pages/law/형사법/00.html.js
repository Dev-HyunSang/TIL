import comp from "/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/law/형사법/00.html.vue"
const data = JSON.parse("{\"path\":\"/law/%ED%98%95%EC%82%AC%EB%B2%95/00.html\",\"title\":\"형법\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1754036629000,\"contributors\":[{\"name\":\"HyunSang Park\",\"username\":\"\",\"email\":\"me@hyunsang.dev\",\"commits\":1}],\"changelog\":[{\"hash\":\"efd395a28689e0f8e2f9c1eaf23f129e2a092bfa\",\"time\":1754036629000,\"email\":\"me@hyunsang.dev\",\"author\":\"HyunSang Park\",\"message\":\"first commit\"}]},\"filePathRelative\":\"law/형사법/00.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
