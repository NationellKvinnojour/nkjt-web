import React, { useState, useEffect } from "react"
import { Availability } from "./Availability"
import { Call } from "./Call"
import { connect, styled } from "frontity"

const Heading = styled.h1`
  background: #67C2C0;
  text-align: center;
  padding: 40px;
  margin: 0;
`

const TextContainer = styled.div`
  padding: 40px 10vw;
`

const Bold = styled.span`
  font-weight: bold;
`

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const User = ({ state }) => {
  const [loading, setLoading] = useState(true)
  const [rooms, setRooms] = useState([])
  const [sessions, setSessions] = useState([])

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

  const getSessions = () => {
    // setLoading(true)
    fetch(`https://nkjt.herokuapp.com/sessions/`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        const ongoingSessions = json.data.filter((session) => session.ongoing)
        setSessions(ongoingSessions)
      })
      .catch((err) => console.log("Error: " + err))
  }

  useEffect(() => {
    getSessions()
  }, [])

  const checkOccupied = (roomName) => {
    const isOccupied = sessions.some(session => session.room === roomName)
    return isOccupied
  }

    const totalRooms = rooms.length
    const occupiedRooms = sessions.length

  return (
    <RoomContainer>
      <Heading>JOURSAMTAL VIA WEBB</Heading>
      <TextContainer>
        <p>Vår samtalsjour på webben har öppet <Bold>måndagar mellan 09.30-13:00</Bold> och du får prata med en av våra socionomer. Om du inte kan på måndagar, skicka mejl till <a href="mailto:stod@nationellkvinnojour.se">stod@nationellkvinnojour.se</a> eller skriv via kontaktformuläret som finns i fliken <a href="https://www.nkjt.se/kontakt/">KONTAKT</a> och boka tid andra veckodagar och tider som passar dig.</p>
        <p>Vid behov kan vi också hjälpa dig med kontakter i din hemkommun för att få hjälp och stöd. Vi kan också hjälpa dig att komma i kontakt med polis och andra myndigheter.</p>
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

//for the routing to work
export default connect(User)
