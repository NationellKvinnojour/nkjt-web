import React from "react"
import { connect } from "frontity"
import Switch from "@frontity/components/switch"

import List from "./list"
import Post from "./post"
import Page from "./page"

import ErrorPage from "./error"

import Header from "../header/header"
import Footer from "../footer/footer"

const Main = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <Switch>
      <Header/>
      <List when={data.isArchive} />
      <Post when={data.isPost} />
      <Page when={data.isPage}/>
      <ErrorPage when={data.isError}/>
      <Footer />
    </Switch>
  )
}

export default connect(Main)
