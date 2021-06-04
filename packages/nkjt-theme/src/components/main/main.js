import React, { useState } from "react"
import { connect, styled } from "frontity"
import Switch from "@frontity/components/switch"

import List from "./list"
import Post from "./post"
import Page from "./page"

import { Dashboard } from "../daily/Dashboard"
import ErrorPage from "./error"
import Home from "./home"
import { User } from "../daily/User"

const Main = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
          <Home when={data.isHomePage} />
          <User when={data.isVideoPage} />
          <Dashboard when={data.isAdminPage} />
          <ErrorPage when={data.isError} />
        </Switch>
    </>
  )
}

export default connect(Main)

const MainContainer = styled.main`
  /* margin: 20px; */

  & > img {
    max-width: 100%;
    object-fit: contain;
  }
  & > p {
    line-height: 1.5em;
  }
  @media (min-width: 1143px) {
    margin: auto;
    max-width: 1100px;
  }
`
