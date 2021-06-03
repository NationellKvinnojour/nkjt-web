const settings = {
  name: "nkjt-project",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "NKJT",
      description: "Nationell kvinnorjour och stöd på teckenspråk"
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
          homepage: "/hem",
          // Below you need to write your wordpress url
          // api: "http://hippiekick.byethost3.com/wp-json",
          api: "http://127.0.0.1:10080/wordpress/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;