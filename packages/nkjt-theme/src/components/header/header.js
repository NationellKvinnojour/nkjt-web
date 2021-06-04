import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

import Nav from "./nav"
import MobileMenu from "./menu"

import Logo from "../../assets/logo.png"

const Header = ({ state }) => {
    
    return (
        <HeaderContainer>
            <MobileMenuContainer>
                <Link link="/">
                    <MobileHeaderText>{state.frontity.description}</MobileHeaderText>
                </Link>
                <MobileMenu />
            </MobileMenuContainer>
            <DesktopMenu>
                <Link link="/">
                    <HeaderLogo src={Logo} alt="NKJT loggan"/>
                </Link>
                <Nav />
            </DesktopMenu>
        </HeaderContainer>
    )
}

export default connect(Header)

const HeaderContainer = styled.header`
    background-color: #583666;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    @media(min-width: 1024px){
        background-color: #fff;
        color: #000;
        padding: 30px 40px;
        justify-content: center;
    }    
`

// Mobile menu
const MobileMenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media(min-width: 1024px){
        display: none;
    }
`

const MobileHeaderText = styled.h1`
    font-size: 15px;
    max-width: 90%;
    @media(min-width: 600px){
        max-width: 100%;
    }
`

// Desktop menu
const DesktopMenu = styled.div`
  display: none;
  @media(min-width: 1024px){
    display: flex;
    justify-content: space-between;
  }
`

const HeaderLogo = styled.img`
    @media(min-width: 1024px) {
        max-width: 200px;
        margin-right: 20px;
    }
`
