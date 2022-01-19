import React from "react"
import { connect, styled } from "frontity"
import Video from "../daily/Video"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component

  return (
    <Wrapper>
      <Content>
      <Html2React html={page.content.rendered} />
        {data.link === "/joursamtal-via-webb/" && <Video />}
      </Content>
    </Wrapper>
  )
}

export default connect(Page)
