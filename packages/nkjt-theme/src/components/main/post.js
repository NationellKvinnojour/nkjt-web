import React from "react"
import { connect, styled } from "frontity"
import dayjs from "dayjs"
import "dayjs/locale/sv"
// import Link from "../link"
import Link from "@frontity/components/link"

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component
  
  const formattedDate = dayjs(post.date).locale("sv").format("DD MMMM YYYY")

  return (
    <Container>
      <h1>{post.title.rendered}</h1>
      <SubText>
        <p>{formattedDate}</p>
        <Link link={"/senaste-nytt"}>« Tillbaka</Link>
      </SubText>
      <Html2React html={post.content.rendered} />
    </Container>
  )
}

const Container = styled.div`
  max-width: 1000px;

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

const SubText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default connect(Post)
