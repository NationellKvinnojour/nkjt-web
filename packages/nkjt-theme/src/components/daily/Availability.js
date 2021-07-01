import React, { useState, useEffect } from "react"
import { styled } from "frontity"

import OpenDoor from "../../assets/door-open.svg"
import ClosedDoor from "../../assets/door-closed.svg"

export const Availability = ({ totalRooms, occupiedRooms, loading }) => {

  //case: loading
  if (loading) {
    return (
      <Container>
        <Text>Laddar...</Text>
      </Container>
    )
    //case: not loading
  } else {
    //case: some open rooms
    if (totalRooms && totalRooms > occupiedRooms) {
      return (
        <Container>
          <Text>Just nu är {totalRooms - occupiedRooms} mötesrum tillgängliga. Tryck på knappen "Begär att få gå med" för att påbörja. En kurator kommer därefter att släppa in dig i mötesrummet.</Text>
          <OpenImage src={OpenDoor}/>
        </Container>
      )
      //case: all rooms occupied
    } else if (totalRooms && totalRooms === occupiedRooms) {
      return (
        <Container>
          <Text>Just nu är alla rum upptagna. Pröva igen om en stund.</Text>
          <ClosedImage src={ClosedDoor}/>
        </Container>
      )
      //case: no rooms open (outside working hours)
    } else {
      return (
        <Container>
          <Text>Chatten är för närvarande stängd. Pröva igen under våra öppettider som är XXX eller skriv till oss under fliken Kontakt i menyn, alternativt mejla oss på XXX.</Text>
          <ClosedImage src={ClosedDoor}/>
        </Container>
      )
    }
  }

  return (
    <>

      <Container>
     
        {loading ? <p>Laddar...</p> :
          totalRooms > occupiedRooms ? 
            <>
              <Text>Just nu är {totalRooms - occupiedRooms} mötesrum tillgängliga. Tryck på knappen "Begär att få gå med" för att påbörja. En kurator kommer därefter att släppa in dig i mötesrummet.</Text>
              <OpenImage src={OpenDoor}/>
            </>
          : 
            <>
            {totalRooms &&
              <>
                <Text>Just nu är alla rum upptagna. Pröva igen om en stund.</Text>
                <ClosedImage src={ClosedDoor}/>
              </>
            }
            </>
        }
      </Container>
    </>
  )
}


const Text = styled.p`
  padding: 40px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #F2C35C;
  padding: 40px 0;

  @media(min-width: 800px) {
    flex-direction: row;
    justify-content: center;

    ${Text} {
      max-width: 500px;
    }
  }
`

const OpenImage = styled.img`
  width: 100px;
  fill: green;
  color: green;
`

const ClosedImage = styled.img`
  width: 100px;
  fill: red;
`
