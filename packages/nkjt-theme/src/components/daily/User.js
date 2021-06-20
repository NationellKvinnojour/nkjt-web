import React, { useState, useEffect } from "react"
import { Availability } from "./Availability"
import Call from "./Call"
import { styled } from "frontity"

export const User = () => {
  const [rooms, setRooms] = useState([])
  const [sessions, setSessions] = useState([])

  // const getRooms = () => {
    useEffect(() => {
      fetch(`https://nkjt.herokuapp.com/rooms/`, {
        method: "GET"
      })
        .then((res) => res.json())
        .then((json) => {
          setRooms(json.data)
        })
        .catch((err) => console.log("Error: " + err))
    },[])
    
  // }

  const getSessions = () => {
    fetch(`https://nkjt.herokuapp.com/sessions/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        const ongoingSessions = json.data.filter((sesh) => sesh.ongoing)
        setSessions(ongoingSessions)
        // console.log("🌻", ongoingSessions)
      })
      .catch((err) => console.log("Error: " + err))
  }

  //TODO Se till så den här hooken funkar som den ska, och uppdateras när sessions ändras
  useEffect(() => {
    // getRooms()
    getSessions()
  }, [])

  const checkOccupied = (roomName) => {
    const isOccupied = sessions.some(session => session.room === roomName)
    return isOccupied
  }

    const totalRooms = rooms.length
    const occupiedRooms = sessions.length

  //TODO mappa all rum här och visa bara de som inte är ongoing (alt visa alla men med olika styling?)
  return (
    <RoomContainer>
      <Heading>JOURSAMTAL VIA WEBB</Heading>
      <Availability
        totalRooms={totalRooms}
        occupiedRooms={occupiedRooms}/>
      {rooms.map(room => (
        !checkOccupied(room.name) && (
          <Call key={room.id} roomName={room.name}/>
        )
      ))}
    </RoomContainer>
  )
}

const Heading = styled.h1`
  background: #67C2C0;
  text-align: center;
  padding: 40px;
  margin: 0;
`

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
`
