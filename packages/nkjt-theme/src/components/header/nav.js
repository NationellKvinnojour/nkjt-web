  
import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Nav = ({ state }) => {
  const parentItems = state.source.get(`/menu/${state.theme.menuUrl}/`).items;

  return (
    <NavContainer>
      {parentItems.map((item) => {
        const childItems = item.child_items;
          return (
            <NavMenu key={item.ID}>
              <NavItem className="parent-navitem">
                <Link link={item.url}>
                  {item.title}
                </Link>
                {item.child_items && (
                  <>
                    <NavArrow></NavArrow>                  
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
                    );
                  })}
                </ChildMenu>
              )}
            </NavMenu>
          );
      })}
    </NavContainer>
  );
};

export default connect(Nav);

// Main nav container
const NavContainer = styled.nav`  
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  position: relative;
  display: inline-block;
`;

const NavItem = styled.div`
  padding: 5px 18px;
  margin: 0 16px;
  &.parent-navitem {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: #e07c3e;
    border-radius: 20px;
  }
  &.child-navitem {
    font-size: 15px;
    display: flex;
    background-color: #fff;
    width: 100%;
    padding: 10px 18px;
    &:hover{
      background-color: #f2f2f2;
      border-radius: 0;
    }
  }
`;

const NavArrow = styled.span`
  width: 0;
	height: 0;
	border-left: 7px solid transparent;
	border-right: 7px solid transparent;
	border-top: 10px solid #555;
  margin-left: 7px;
  transition: 0.4s;
`;

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
`;