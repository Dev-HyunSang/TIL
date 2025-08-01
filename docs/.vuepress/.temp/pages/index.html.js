import comp from "/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"HyunSang's Today I Learnd\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"HyunSang's Today I Learnd\"},\"headers\":[{\"level\":2,\"title\":\"이런 분야들을 공부합니다.\",\"slug\":\"이런-분야들을-공부합니다\",\"link\":\"#이런-분야들을-공부합니다\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
