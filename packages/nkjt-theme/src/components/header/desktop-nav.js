import React from "react"
import { connect, styled } from "frontity"
import Link from "../link"

import theme from "../themeColors"

const DesktopNav = ({ state }) => {
  const parentItems = state.source.get(`/menu/${state.theme.menuUrl}/`).items
  const activeLink = state.theme.activeLink.replace(/\//g, "")

  // Send parent-link
  const findActiveLink = (item) => {
    let parent = ""

    // Check if the parent has child items
    if (item.child_items) {
      // Check the child + parent if it's the active one. If it is, change parent
      // variable to the parent in question
      item.child_items.forEach((childItem => {
        if (childItem.slug === activeLink || item.slug === activeLink) {
          parent = item.slug
        }
      }))
      // Return if the parent is the slug?? what
      return parent === item.slug
    } else {
      //Else return if the item.slug is active
      return activeLink === item.slug
    }
  }

  return (
    <NavContainer>
      {parentItems.map((item) => {
        // findActiveLink(item)
        const childItems = item.child_items
          return (
            <NavMenu key={item.ID}>
              <ParentNavItem activeLink={findActiveLink(item)}>
                <StyledLink link={item.url}>
                  {item.title}
                </StyledLink>
                {childItems && (
                  <>
                    <NavArrow />                  
                  </>
                )}
              </ParentNavItem>
              {childItems && (
                <ChildMenu>
                  {childItems.map((childItem) => {
                    return (
                      <ChildNavItem key={childItem.ID}>
                        <StyledLink link={childItem.url}>{childItem.title}</StyledLink>
                      </ChildNavItem>
                    )
                  })}
                </ChildMenu>
              )}
            </NavMenu>
          )
      })}
    </NavContainer>
  )
}

export default connect(DesktopNav)

// Main nav container
const NavContainer = styled.nav`  
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 100px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

const NavMenu = styled.div`
  position: relative;
  display: inline-block;
`

const NavItem = styled.div`
  padding: 5px 18px;
  margin: 0 16px;
  &:hover {
    background-color: #e07c3e;
    border-radius: 20px;
  }
  a {
    font-weight: normal;
  }
  a:hover {
    color: black;
  }
`

const ParentNavItem = styled(NavItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.activeLink && theme.yellow};
  border-radius: 20px;
`

const ChildNavItem = styled(NavItem)`
  font-size: 15px;
  display: flex;
  background-color: #fff;
  width: 100%;
  padding: 10px 18px;
  &:hover {
    background-color: #f2f2f2;
    border-radius: 0;
  }
`

const StyledLink = styled(Link)`
  width: 100%;
`

const NavArrow = styled.span`
  width: 0;
	height: 0;
	border-left: 7px solid transparent;
	border-right: 7px solid transparent;
	border-top: 10px solid #555;
  margin-left: 7px;
  transition: 0.4s;
`

// Child Nav menu
const ChildMenu = styled.span`
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  text-align: left;
  background-color: #fff;
  
  ${NavMenu}:hover & {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
