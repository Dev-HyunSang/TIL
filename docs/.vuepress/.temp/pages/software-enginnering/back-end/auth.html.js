import comp from "/Users/park.hyunsang/dev/personal/TIL/docs/.vuepress/.temp/pages/software-enginnering/back-end/auth.html.vue"
const data = JSON.parse("{\"path\":\"/software-enginnering/back-end/auth.html\",\"title\":\"Auth\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Session\",\"slug\":\"session\",\"link\":\"#session\",\"children\":[]},{\"level\":2,\"title\":\"JWT\",\"slug\":\"jwt\",\"link\":\"#jwt\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"software-enginnering/back-end/auth.md\"}")
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
