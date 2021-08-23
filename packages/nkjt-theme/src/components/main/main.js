import React from "react"
import { connect } from "frontity"
import Switch from "@frontity/components/switch"

import List from "./list"
import Post from "./post"
import Page from "./page"

import ErrorPage from "./error"
import Home from "./home"
import User from "../daily/User"

const Main = ({ state }) => {
  const data = state.source.get(state.router.link)
  return (
    <Switch>
      <List when={data.isArchive} />
      <Post when={data.isPost} />
      <Page when={data.isPage} />
      <Home when={data.isHomePage} />
      <User when={data.isVideoPage} />
      <ErrorPage when={data.isError} />
    </Switch>
  )
}

export default connect(Main)
