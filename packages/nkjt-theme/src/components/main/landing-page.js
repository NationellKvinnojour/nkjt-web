import React from "react"
import { connect, styled } from "frontity"

const MainContainer = styled.main`
  .landing-container {
    min-height: 100vh;

    a img {
      border: 1px solid black;
      border-radius: 20px;
      max-width: 350px;
      height: auto;
    }

    a span {
      display: flex;
      justify-content: center;
      padding-bottom: 300px;
    }
  }

  @media (min-width: 530px) {
    .hero-image {
      max-width: 500px;
      margin: auto;
    }

    a img {
      max-width: 250px;
      height: auto;
    }
  }

  @media (min-width: 600px) {
    .hero-image {
      max-width: 550px;
      padding-top: 80px;
    }

    .wp-block-columns {
      flex-wrap: nowrap;
      max-width: 550px;
      margin: auto;
    }
  }

  @media (min-width: 800px) { 
    .hero-image {
      padding-top: 40px;
    }

    a img {
      max-width: 450px;
    }
  }
  
  @media (min-width: 900px) { 
    .hero-image {
      padding-top: 0;
      padding-bottom: 20px;
    }
  }
`

const LandingPage = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component

  return (
    <MainContainer>
      <Html2React html={page.content.rendered} />
    </MainContainer>
  )
}

export default connect(LandingPage)
