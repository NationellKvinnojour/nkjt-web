const adminHandler = {
  pattern: "/admin/",
  func: ({ state }) => {
    state.source.data["/admin/"].isAdminPage = true;
  }
}

export default adminHandler
