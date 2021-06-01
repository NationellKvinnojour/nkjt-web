import React, { useRef, useEffect, useState } from "react"
import { styled } from "frontity"

export const Admin = () => {
  // const [rooms, setRooms] = useState([])
  const [messages, setMessages] = useState([])

  const getMessages = () => {
    fetch(`http://localhost:8080/messages/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        // setRooms(json)
        setMessages(json)
      })
      .catch((err) => console.log("Error: " + err))
  }

  useEffect(() => {
    // getRooms()
    getMessages()
  }, [messages])

  return (
    <>
      <p>Adminpanel</p>
      <button onClick={() => getMessages()}>Refresh</button>
      {messages ? (
        messages.map((message) => {
          return (
            <p key={message.date}>
              {message.text} - {new Date(message.date).toString()}
            </p>
          )
        })
      ) : (
        <p>No messages</p>
      )}
    </>
  )
}

