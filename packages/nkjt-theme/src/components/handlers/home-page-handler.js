const homePageHandler = {
  pattern: "/hem/",
  func: ({ state }) => {
    state.source.data["/hem/"].isHomePage = true
  }
}

export default homePageHandler
