import React, { useState } from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Nav = ({ state }) => {

  const parentItems = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  // {`${console.log(parentItems)}`}
  // {`${console.log(parentItems[0])}`}

  const [ showChildMenu, setShowChildMenu ] = useState(false); 

  const toggleChildMenu = () => {
    setShowChildMenu(!showChildMenu);
    console.log(showChildMenu);
  };

  return (
    <>
        <NavContainer>
            <InnerNavDiv>
            {parentItems.map((item) => {
                const childItems = item.child_items;
                return (
                // ul
                <NavMenu key={item.ID}>
                    {/* li */}
                    <ParentNavItem className="parent-navitem">
                      <Link 
                          link={item.url}
                          aria-expanded={item.child_items && "false"}
                          aria-haspopup={item.child_items && "true"}
                          className={item.child_items && "has-submenu"}
                      >
                          {item.title}
                      </Link>
                    {item.child_items && (
                        <>
                        <ShowChildMenuButton 
                          onClick={toggleChildMenu}
                        >
                            <NavArrow></NavArrow>
                        </ShowChildMenuButton>
                        </>
                    )}
                    </ParentNavItem>
                    {item.child_items && (
                    // ul
                    <ChildMenu>
                        {childItems.map((childItem) => {
                        return (
                            // li
                            <ChildNavItem key={childItem.ID} className="child-navitem">
                            <Link link={childItem.url}>{childItem.title}</Link>
                            </ChildNavItem>
                        );
                        })}
                    </ChildMenu>
                    )}
                </NavMenu>
                );
            })}
            </InnerNavDiv>
        </NavContainer>
    {/* <nav>
      <div> */}
        {/* Parent menu */}
        {/* <ul>
          <li>
            <a href="" />
          </li> */}
          {/* Button that toggles to show and hide the submenu */}
          {/* <button>
            <span>
              <svg />
            </span>
          </button>
        </ul> */}
        {/* Child menu */}
        {/* <ul>
          <li>
            <a />
          </li>
        </ul>
      </div>
    </nav> */}
    </>
  );
};

export default connect(Nav);

// Main nav container
const NavContainer = styled.nav`  
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border: 1px solid red;
  @media(min-width: 1024px){
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: 40px;
    margin-top: 50px;
  }
`;

const InnerNavDiv = styled.div`
  border: 1px solid green;
`;

const NavMenu = styled.ul`
  position: relative;
  display: inline-block;
`;

const ParentNavItem = styled.li`
  padding: 5px 18px;
  margin: 0 16px;
  cursor: pointer;
  border: 1px solid green;
  &.parent-navitem {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: #e07c3e;
    border-radius: 20px;
  }
`;

const ShowChildMenuButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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

const ChildMenu = styled.ul`
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  text-align: left;
  background-color: #fff;
  /* ${NavItem}:hover & {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`;

const ChildNavItem = styled.li`
  font-size: 15px;
  display: flex;
  background-color: #fff;
  width: 100%;
  padding: 10px 18px;
  cursor: pointer;
  border: 1px solid hotpink;
  &:hover{
    background-color: #f2f2f2;
    border-radius: 0;
  }
`;