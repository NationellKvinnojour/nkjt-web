import React from "react"
import { connect, styled } from "frontity"

import theme from "../themeColors"

const determineColor = (title) => {
  let color = theme.teal
  switch(title) {
    case "OM OSS":
      color = theme.teal
      break
    case "VÅLD":
      color = theme.orange
      break
    case "STÖD OSS":
      color = theme.yellow
      break
    case "KONTAKT":
    case "INFORMATION TILL MYNDIGHETER":
    case "VÅR KOMPETENS ÄR TILL NYTTA FÖR ER":
    case "BOKA OSS":
      color = theme.yellow
      break
    case "GE EN GÅVA":
    case "BLI MEDLEM":
      color = theme.lightPurple
      break
    case "NKJT-TYGVÄSKOR":
      color = theme.lightGrey
      break
    default:
      color = theme.teal
  }
  return color
}

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component

  return (
    <Wrapper>
      <Title backgroundColor={determineColor(page.title.rendered)}>{page.title.rendered}</Title>
      <Content>
        <Html2React html={page.content.rendered} />
      </Content>
    </Wrapper>
  )
}

export default connect(Page)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

`

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding: 40px 0;
  margin: 0;
  background: ${props => props.backgroundColor};
`

const Content = styled.div`

  > :first-child {
    padding-top: 40px;
  }

  > * {
    padding: 0 30px;
  }

  > ul {
    padding: 0 60px;
  }

  @media (min-width: 1025px) {
    > * {
      padding: 0 10vw;;
    }

    > ul {
      padding: 0 12vw;
    }
  }

  @media (min-width: 1425px) {
    > ul {
      padding: 0 11.5vw;
    }
  }
`
