import React, { useState } from "react";
import { styled } from "frontity";

import Nav from "./nav";

const MobileMenu = () => {

    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

    return (
        <>
        {isMobileMenuOpen ? (
                <MobileMenuContainer> 
                    <HamburgerDiv 
                        className="cross"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {/* <FontAwesomeIcon icon={faTimes} size="2x" /> */}
                        <svg
                            height="20px"
                            width="20px"
                            viewBox="0 0 24 24"
                            color="#000"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Close Menu</title>
                            <g fill="currentColor">
                            <path d="M14.3 12.179a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.442L12.177 9.7a.25.25 0 0 1-.354 0L2.561.442A1.5 1.5 0 0 0 .439 2.563L9.7 11.825a.25.25 0 0 1 0 .354L.439 21.442a1.5 1.5 0 0 0 2.122 2.121l9.262-9.263a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 0 0 2.122-2.121z" />
                            </g>
                        </svg>
                    </HamburgerDiv>
                    <ModalMenu>
                        <Nav mobileMenu={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
                    </ModalMenu>
                </MobileMenuContainer>                
            ) : (                
                <HamburgerDiv 
                    className="hamburger"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    {/* <FontAwesomeIcon icon={faBars} size="2x" /> */}
                    <svg
                        height="20px"
                        width="20px"
                        color="#000"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <title>Open menu</title>
                    <g fill="currentColor">
                        <rect height="3" width="23" rx="1" ry="1" x=".5" y="2.5" />
                        <rect height="3" width="23" rx="1" ry="1" x=".5" y="10.5" />
                        <rect height="3" width="23" rx="1" ry="1" x=".5" y="18.5" />
                    </g>
                    </svg>
                </HamburgerDiv>
            )}
        </>
    );
};

export default MobileMenu;

const HamburgerDiv = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-bottom: ${props => props.className === "cross" && "20px"};
    align-self: ${props => props.className === "cross" && "flex-end"};
    align-self: ${props => props.className === "hamburger" && "flex-start"};
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 1024px) {
        display: none;
  }
`;

const MobileMenuContainer = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #fff;
    overflow-x: hidden;
    transition: 0.5s;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ModalMenu = styled.div`
    align-self: flex-end;
`;