import Root from "./components/index"
import image from "@frontity/html2react/processors/image"
import iframe from "@frontity/html2react/processors/iframe"
import link from "@frontity/html2react/processors/link"

import menuHandler from "./components/handlers/menu-handler"
import videoHandler from "./components/handlers/video-handler"
import adminHandler from "./components/handlers/admin-handler"
import homePageHandler from "./components/handlers/home-page-handler"

const nkjtTheme = {
  name: "nkjt-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      menuUrl: "navbar-menu",
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
      colors: []
    },
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false
      },
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch(`/menu/${state.theme.menuUrl}`)
      },
      init: ({ libraries }) => {
        libraries.html2react.processors.push(image)
        libraries.source.handlers.push(videoHandler, adminHandler, homePageHandler, menuHandler)
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link, image, iframe]
    },
    source: {
      handlers: [menuHandler],
    }
  },
}

export default nkjtTheme
