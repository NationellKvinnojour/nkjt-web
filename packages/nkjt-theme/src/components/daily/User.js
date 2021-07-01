import React, { useState, useEffect } from "react"
import { Availability } from "./Availability"
import Call from "./Call"
import { connect, styled } from "frontity"

const User = ({ state }) => {
  const [loading, setLoading] = useState(true)
  const [rooms, setRooms] = useState([])
  const [sessions, setSessions] = useState([])

  // const getRooms = () => {
    useEffect(() => {
      setLoading(true)
      fetch(`https://nkjt.herokuapp.com/rooms/`, {
        method: "GET"
      })
        .then((res) => res.json())
        .then((json) => {
          setRooms(json.data)
          setLoading(false)
        })
        .catch((err) => console.log("Error: " + err))
    }, [])
    
  // }

  const getSessions = () => {
    // setLoading(true)
    fetch(`https://nkjt.herokuapp.com/sessions/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        const ongoingSessions = json.data.filter((session) => session.ongoing)
        setSessions(ongoingSessions)
        // setLoading(false)
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
      <TextContainer>
        Vår samtalsjour på webben är öppet dagligen och du får prata med en av våra socionomer, vid behov kan vi också hjälpa dig med kontakter i din hemkommun för att få hjälp och stöd. Vi kan också hjälpa dig att komma i kontakt med polis och andra myndigheter.
      </TextContainer>
      <Availability
        totalRooms={totalRooms}
        occupiedRooms={occupiedRooms}
        loading={loading}/>
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

const TextContainer = styled.p`
  padding: 40px 10vw;
`

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default connect(User)
