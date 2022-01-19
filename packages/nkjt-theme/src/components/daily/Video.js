import React, { useState, useEffect } from "react"
import { Availability } from "./Availability"
import { Call } from "./Call"
import { connect, styled } from "frontity"

const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Video = ({ state }) => {
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
    <RoomContainer className="room-container">
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
export default connect(Video)
