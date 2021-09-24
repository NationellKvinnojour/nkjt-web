import React, { useState } from "react"
import { connect, styled } from "frontity"

import Woman from "../../assets/kvinnosymbol.jpeg"
import Hands from "../../assets/nkjt-hands.png"
import Hug from "../../assets/nkjt-care.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const Header = styled.header`
  width: 100%;
  background: #68C2C0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    padding: 40px;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    padding: 60px;
  }
`

const TextContainer = styled.div`
  max-width: 750px;
  @media (min-width: 900px) {
    padding-right: 60px;
  }

`

const MainTextContainer = styled.div`
  padding: 20px;
  max-width: 620px;
  @media (min-width: 900px) {
    padding-left: 80px;
  }
`

const Title = styled.h1`

`

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
`

const HeroImage = styled.img`
  width: 80%;
  margin: 20px;
  max-width: 200px;
  text-align: center;
  @media (min-width: 900px) {
 
  }
`

const Main = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    padding: 40px;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    padding: 60px;
  }
`

const Button = styled.button`
  background: #583666;
  color: white;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  margin-bottom: 60px;
`

const Image = styled.img`
  width: 90%;
  max-width: 400px;

  @media (min-width: 600px) {
    width: 70%;
  }

  @media (min-width: 900px) {
    width: 50%;
  }
`

const SmallHeading = styled.h2`
  color: #583666;
  font-size: 18px;
  letter-spacing: 2px;
`

const Home = ({ state }) => {
  return (
    <Container>
      <Header>
        <TextContainer>
          <Title>EN VÅLDSFRI VÄRLD FÖR KVINNOR SOM TALAR TECKENSPRÅK.</Title>
          <Text>Vi hjälper döva, hörselskadade och dövblinda kvinnor, icke-binära och unga tjejer från 15 år och uppåt, med att ta makten över sina liv från våld och förtryck. Här hos oss får man stöd och hjälp direkt på svenskt teckenspråk.</Text>
        </TextContainer>
        <HeroImage src={Hands} />
      </Header>
      <Main>
        <Image src={Hug} />
        <MainTextContainer>
          <SmallHeading>BLI MEDLEM</SmallHeading>
          <Text>Bli medlem i Nationell kvinnojour och stöd på teckenspråk och stöd Sveriges enda jourverksamhet för kvinnor på teckenspråk.</Text>
          <Button>
            <a
              href="https://www.nkjt.se/bli-medlem/"
              target="_blank"
              rel="noopener noreferrer">
              Klicka här för att bli medlem hos NKJT
            </a>
            </Button>
        </MainTextContainer>
      </Main>
      <Image src={Woman} />
    </Container>
  )
}

export default connect(Home)
