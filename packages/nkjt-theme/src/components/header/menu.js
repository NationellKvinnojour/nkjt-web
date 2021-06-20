import React from "react"
import { styled, connect, Global } from "frontity"

import { CloseIcon, HamburgerIcon } from "./menu-icon"
import MenuModal from "./menu-modal"

const MobileMenu = ({ state, actions }) => {
  const { isMobileMenuOpen } = state.theme
  const parentItems = state.source.get(`/menu/${state.theme.menuUrl}/`).items

  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu}>
          {isMobileMenuOpen ? (
              <>
                  {/* Add some style to the body when menu is open,
                  to prevent body scroll */}
                  <Global styled={{ body: { overflowY: "hidden" }}} />
                  <CloseIcon color="white" size="20px" />
              </>
          ) : (
              <HamburgerIcon color="white" size="30px" />
          )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal />}
    </>
  )
}

const MenuToggle = styled.button`
  position: absolute;
  right: 25px;
  top: 15px;
  background: transparent;
  border: 0;
  color: white;
  z-index: 5;
  height: 40px;
  width: 40px;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default connect(MobileMenu)
