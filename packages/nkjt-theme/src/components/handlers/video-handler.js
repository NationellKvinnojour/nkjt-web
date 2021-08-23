export const videoHandler = {
  pattern: "/joursamtal-via-webb/",
  func: ({ state }) => {
    state.source.data["/joursamtal-via-webb/"].isVideoPage = true
  }
}
