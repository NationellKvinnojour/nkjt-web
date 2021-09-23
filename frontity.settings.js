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
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          // What your homepage is set as in wordpress dashboard
          homepage: "/hem",
          postsPage: 'senaste-nytt',
          // Below you need to write your wordpress url
          // url: "http://localhost:8888",
          url: "https://api.nkjt.se/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
  ]
}

export default settings
