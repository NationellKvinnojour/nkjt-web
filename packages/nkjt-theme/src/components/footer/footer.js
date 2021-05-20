import React from "react";
import { connect, styled } from "frontity";

const Footer = () => {  
  return (
        <FooterContainer>
          <InnerDiv>
            <span>Logo</span>
            <p>NKJT © 2021</p>
            <span>Social icons or someting else</span>
          </InnerDiv>
        </FooterContainer>
  );
};

export default connect(Footer);

const FooterContainer = styled.footer`
  background-color: #fff;
`;

const InnerDiv =  styled.div`
  border-top: 0.5px solid #808080;
  padding: 30px 0;
  margin: 20px;
  @media(min-width: 1143px){
    margin: auto;
    max-width: 1100px;
  }
`;
