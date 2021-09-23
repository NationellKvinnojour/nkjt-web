import React, { useState } from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

import Image from "../../assets/nkjt-1.png"
import ButtonImage1 from "../../assets/nkjt-2.png"
import ButtonImage2 from "../../assets/nkjt-3.png"

const MainContainer = styled.main`
  background: #583666;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

const HeroImage = styled.img`
  width: 80%;
  padding: 20px;
  text-align: center;

  @media (min-width: 900px) {
    max-width: 500px;
  }
`

const Button = styled(Link)`
  width: 100%;
  height: 350px;
  margin: 10px;
  background: transparent;
  border: none;
  max-width: 400px;

  @media (min-width: 400px) {
    width: 70%;
    height: 400px;
  }

  @media (min-width: 600px) {
    max-height: 500px;
  }
  @media (min-width: 800px) {
    width: 40%;
    height: 400px;
  }
`

const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid black;
  border-radius: 20px;
`

const LandingPage = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component

  console.log(page.content)

  return (
    <MainContainer>
      {/* <Html2React html={page.content.rendered} /> */}
      <HeroImage src={Image} />
      <ButtonContainer>
        <Button link="/vision">
          <ButtonImage src={ButtonImage1} />
        </Button>
        <Button link="/joursamtal-via-webb">
          <ButtonImage src={ButtonImage2} />
        </Button>
      </ButtonContainer>
    </MainContainer>
  )
}

export default connect(LandingPage)
