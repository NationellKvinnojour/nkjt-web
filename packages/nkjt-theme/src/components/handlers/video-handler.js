const videoHandler = {
  pattern: "/joursamtal-via-webb/",
  func: ({ state }) => {
    state.source.data["/joursamtal-via-webb/"].isVideoPage = true
  }
}

export default videoHandler
