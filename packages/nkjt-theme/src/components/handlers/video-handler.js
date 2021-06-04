const videoHandler = {
  pattern: "/video/",
  func: ({ state }) => {
    state.source.data["/video/"].isVideoPage = true
  }
}

export default videoHandler
