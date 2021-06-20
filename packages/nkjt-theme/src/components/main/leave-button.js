import React, { useState } from "react"
import { connect, styled } from "frontity"

import theme from "../themeColors"
import RunningImage from "../../assets/noun-running.svg"

// window.open("about:blank", "_self");
// window.close();

// "window.location.replace('http://www.google.com');return false;"

const leavePage = () => {
  location.replace('http://www.google.com')
  return false
}

const LeaveButton = () => {
  return (
    <Button onClick={() => leavePage()}>
      <Image src={RunningImage}/>
      LÄMNA SIDAN FORT
      </Button>
  )
}

const Button = styled.button`
  position: fixed;
  top: 100px;
  right: 10px;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 120px;
  font-weight: bold;
  padding: 10px;
  background: ${theme.yellow};
  border: 10px solid ${theme.orange};
  border-radius: 10px;
  cursor: pointer;

  @media(min-width: 600px) {
    font-size: 20px;
    width: 180px;
  }
`

const Image = styled.img`
  width: 50px;

  @media(min-width: 600px) {
    width: 70px;
  }
`

export default LeaveButton
