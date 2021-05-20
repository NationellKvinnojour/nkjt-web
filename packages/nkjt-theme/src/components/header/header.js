import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

import Nav from "./nav";
import MobileMenu from "./menu"

const Header = () => {
    return (
        <HeaderContainer>
            <InnerDiv>
                <Link link="/">
                    {/* Need to figure out how to access the header logo via the wordpress api */}
                    <HeaderLogo src="http://127.0.0.1:10080/wordpress/wp-content/uploads/2021/05/Logo-1.jpg" alt="NKJT loggan"/>
                </Link>
                <MobileMenu />
                <Nav />
            </InnerDiv>
        </HeaderContainer>
    );
};

export default connect(Header);

const HeaderContainer = styled.header`
    background-color: #fff;
`;

const InnerDiv =  styled.div`
    border-bottom: 0.5px solid #808080;
    padding: 30px;
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    @media(min-width: 1000px) {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
    }
    @media(min-width: 1143px){
        margin: auto;
        max-width: 1100px;        
    }
`;

const HeaderLogo = styled.img`
    max-width: 150px;
    @media(min-width: 1000px) {
        max-width: 200px;
    }
`;