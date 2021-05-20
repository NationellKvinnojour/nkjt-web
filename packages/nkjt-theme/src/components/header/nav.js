import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Nav = ({ state }) => {
    const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
    console.log(items);

    return (
        <NavContainer>
            <p>Nav item</p>
            {/* Need to uncomment this code when the wordpress menu is inserted into the wordpress api see this tutorial https://www.youtube.com/watch?v=BMJn0RZ2I9s */}
            {/* {items.map((item) => {
                if(!item.child_items) {
                    return (
                        <NavItem key={item.ID}>
                            <Link link={item.url}>{item.title}</Link>
                        </NavItem>
                    );
                } else {
                    const childItems = items.child_items;
                    return (
                        <NavItemWithChild ley={item.ID}>
                            <NavItem key={item.ID}>
                                <Link link={item.url}>{item.title}</Link>
                            </NavItem>
                            <ChildMenu>
                                {childItems.map((childItem) => {
                                    return (
                                        <NavItem key={childItem.ID}>
                                            <Link link={childItem.url}>{childItem.title}</Link>
                                        </NavItem>
                                    );
                                })}
                            </ChildMenu>
                        </NavItemWithChild>
                    );
                }
             })}             */}
        </NavContainer>
    );
};

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow: hidden;
  border: 1px solid red;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;

const NavItemWithChild = styled.div`
  background: pink;
`;
const ChildMenu = styled.div`
  left: 0;
  background-color: lightblue;
  width: 100%;
  z-index: 1;
`;

// Old code

// const MenuNav = styled.nav`
//     display: none;
//     @media (min-width: 1000px) {
//         display: block;
//         flex-direction: row;
//     }
// `;

// const MenuItem = styled.li`
//     position: relative;
//     list-style: none;
//     margin-right: 20px;
//     font-size: 18px;
//     margin: ${({submenu}) => submenu ? "5px" : "10px !important"};
//     align-self: ${({submenu}) => submenu && "flex-start"};
    
// `;

// const MenuLink = styled(Link)`
//     display: block;
//     &:hover,
//     &[aria-current="page"] {
//         text-decoration: underline;
//     }
// `;

// const StyledMenu = styled.ul`
//     display: flex;
//     flex-wrap: wrap;
//     flex-direction: ${({submenu}) => submenu && "column"};
//     visibility: ${({submenu}) => submenu && "hidden"};
//     position: ${({submenu}) => submenu && "absolute"};
//     margin: ${({submenu}) => submenu ? "10px" : 0};
//     width: ${({submenu}) => submenu && "100px"};
//     background-color: ${({submenu}) => submenu && "#fff"};
//     ${MenuItem}:hover & {
//         visibility: ${({submenu}) => submenu && "visible"};
//     }
//     @media (min-width: 1000px) {
//         flex-direction: row;
//         justify-content: space-between;
//         width: ${({submenu}) => submenu && "150px"};
//     }
// `;