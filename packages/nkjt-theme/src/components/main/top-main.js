import React, { useState } from "react"
import { connect, styled } from "frontity"
import Switch from "@frontity/components/switch"

import LandingPage from "./landing-page"
import Header from "../header/header"
import Main from "./main"
import Footer from "../footer/footer"

import { LeaveButton } from "./leave-button"

const TopMain = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
    {!state.theme.isMobileMenuOpen &&
      <LeaveButton/>
    }
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
    </>
  )
}

export default connect(TopMain)
