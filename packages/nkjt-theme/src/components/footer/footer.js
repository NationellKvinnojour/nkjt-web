import React from "react"
import { connect, styled } from "frontity"

const getYear = () => {
  let date = new Date()
  let year = date.getFullYear()
  return year
}


const Footer = () => {  
  return (
    <FooterContainer>
      <p>NKJT © {getYear()}</p>
    </FooterContainer>
  )
}

export default connect(Footer)

const FooterContainer = styled.footer`
  background-color: #fff;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`
