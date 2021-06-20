import React, { useRef, useEffect, useState } from "react"
import { styled } from "frontity"

export const Dashboard = () => {
  const [messages, setMessages] = useState([])

  const getMessages = () => {
    fetch(`https://nkjt.herokuapp.com/messages/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        setMessages(json)
      })
      .catch((err) => console.log("Error: " + err))
  }

  useEffect(() => {
    getMessages()
  }, [])

  return (
    <>
      <p>Adminpanel</p>
      <button onClick={() => getMessages()}>Refresh</button>
      {messages ? (
        messages.map((message) => {
          return (
            <Container key={message.date}>
              <p>{new Date(message.date).toLocaleString()}</p>
              <p>{message.text}</p>
            </Container>
            )
        })
      ) : (
        <p>No messages</p>
      )}
    </>
  )
}

const Container = styled.div`
  padding: 20px;
  border-bottom: 2px solid hotpink;
`
