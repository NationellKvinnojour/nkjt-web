export const homePageHandler = {
  pattern: "/hem/",
  func: ({ state }) => {
    state.source.data["/hem/"].isHomePage = true
  }
}
