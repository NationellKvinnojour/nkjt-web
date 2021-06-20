import React from "react"
import { styled, connect } from "frontity"

import Link from "../link"

const MenuModal = ({ state }) => {
  const parentItems = state.source.get(`/menu/${state.theme.menuUrl}/`).items

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {parentItems.map((item) => {
          const childItems = item.child_items
          return (
            <NavMenu key={item.ID}>
              <NavItem>
                <Link link={item.url}>
                  {item.title}
                </Link>
                {item.child_items && (
                  <>
                    <NavArrow />                  
                  </>
                )}
              </NavItem>
              {item.child_items && (
                <ChildMenu>
                  {childItems.map((childItem) => {
                    return (
                      <NavItem key={childItem.ID} className="child-navitem">
                        <Link link={childItem.url}>{childItem.title}</Link>
                      </NavItem>
                    )
                  })}
                </ChildMenu>
              )}
            </NavMenu>
          )
        })}
      </MenuContent>
    </>
  )
}

const MenuOverlay = styled.div`
  background-color: #583666;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`

const MenuContent = styled.div`
  z-index: 3;
  padding: 60px 0 0 20px;

  @media(min-width: 720px) {
    padding: 60px 0 0 60px;
  }
`

const NavMenu = styled.div`
  padding-bottom: 40px;
`

const NavItem = styled.div`
  padding-bottom: 15px;
  font-size: 22px;
  display: flex;
  align-items: center;
`

const NavArrow = styled.span`
  width: 0;
	height: 0;
	border-left: 7px solid transparent;
	border-right: 7px solid transparent;
	border-top: 10px solid #fff;
  margin-left: 7px;
  transition: 0.4s;
`

// Child Nav menu
const ChildMenu = styled.span`
  z-index: 1;
  text-align: left;
  a {
    color: white;
    margin-left: 20px;
  }
`


export default connect(MenuModal)
