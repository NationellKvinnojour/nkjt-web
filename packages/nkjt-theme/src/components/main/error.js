import React from "react"
import { connect, styled } from "frontity"

const ErrorPage = ({ state }) => {
  const data = state.source.get(state.router.link)
  console.log(data)
  return (
    <>
      <p>Oj då! Här fanns inget</p>
    </>
  )
}

export default connect(ErrorPage)
