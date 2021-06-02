import React, { useState } from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link";

import Image from "../../assets/nkjt-1.png"
import ButtonImage1 from "../../assets/nkjt-2.png"
import ButtonImage2 from "../../assets/nkjt-3.png"

// import Main from "./main"

const LandingPage = ({ state }) => {
  const data = state.source.get(state.router.link)
  return (
    <MainContainer>
      <HeroImage src={Image} />
      <ButtonContainer>
        <Button to="/">
          <ButtonImage src={ButtonImage1} />
        </Button>

        <Button link="/video">
          <ButtonImage src={ButtonImage2} />
        </Button>
      </ButtonContainer>
    </MainContainer>
  )
}

export default connect(LandingPage)

const MainContainer = styled.main`
  background: #583666;
  text-align: center;
  min-height: 100vh;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`

const HeroImage = styled.img`
  width: 80%;
  margin: 20px;
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
    width: 60%;
    height: 500px;
  }
  @media (min-width: 900px) {
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