import React from "react"
import { connect, styled } from "frontity"

const Text = styled.p`
  padding: 60px;
`

const ErrorPage = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <Text>Oj då! Här fanns inget...</Text>
  )
}

export default connect(ErrorPage)
