import React, { useState } from "react"
import { connect, styled } from "frontity"

import theme from "../themeColors"
import RunningImage from "../../assets/noun-running.svg"

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
  right: 10px;
  bottom: 150px;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100px;
  font-weight: bold;
  padding: 3px 5px;
  background: ${theme.yellow};
  border: 10px solid ${theme.orange};
  border-radius: 10px;
  cursor: pointer;

  @media(min-width: 600px) {
    top: 150px;
    bottom: initial;
    flex-direction: row;
    font-size: 16px;
    line-height: 18px;
    width: 150px;
    padding: 2px;
  }
`

const Image = styled.img`
  width: 50px;
`

export default LeaveButton
