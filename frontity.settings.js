const settings = {
  name: "nkjt-project",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "NKJT",
      description: "Nationella kvinnorjour för kvinnor som talar teckenspråk"
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
          url: "http://hippiekick.byethost3.com/",
          // "api": "http://127.0.0.1:10080/wordpress/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;