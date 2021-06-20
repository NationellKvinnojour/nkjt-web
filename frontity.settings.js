const settings = {
  name: "nkjt-project",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "NKJT",
      description: "Nationell kvinnojour och stöd på teckenspråk"
    }
  },
  packages: [
    {
      name: "nkjt-theme",
      state: {
        theme: {
          menu: [],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          // What your homepage is set as in wordpress dashboard
          homepage: "/",
          // Below you need to write your wordpress url
          // url: "http://localhost:8888",
          url: "http://nkjt.se.linux348.unoeuro-server.com/"
          // url: "http://hippiekick.byethost3.com/",
          // api: "http://hippiekick.byethost3.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
}

export default settings