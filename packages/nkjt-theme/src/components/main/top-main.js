import React, { useState } from "react"
import { connect, styled } from "frontity"
import Switch from "@frontity/components/switch"

import LandingPage from "./landing-page"
import Header from "../header/header"
import Main from "./main"
import Footer from "../footer/footer"

const TopMain = ({ state }) => {
  const data = state.source.get(state.router.link)
  console.log(data)
  return (
    <Switch>
      <LandingPage when={data.isHome} />
      {!data.isHome && 
        <>
          <Header />
          <Main />
          <Footer />
        </>
      }
    </Switch>
  )
}

export default connect(TopMain)
