import React, { useState, useEffect } from "react"
import { styled } from "frontity"

import OpenDoor from "../../assets/door-open.svg"
import ClosedDoor from "../../assets/door-closed.svg"

export const Availability = ({ totalRooms, occupiedRooms, loading }) => {

  return (
    <>
      <TextContainer>
        Vår samtalsjour på webben är öppet dagligen och du får prata med en av våra socionomer, vid behov kan vi också hjälpa dig med kontakter i din hemkommun för att få hjälp och stöd. Vi kan också hjälpa dig att komma i kontakt med polis och andra myndigheter.
      </TextContainer>
      <Container>
        {loading ? <p>Laddar...</p> :
          totalRooms - occupiedRooms ? 
            <>
              <Text>Just nu är {totalRooms - occupiedRooms} mötesrum tillgängliga. Tryck på knappen "Begär att få gå med" för att påbörja. En kurator kommer därefter att släppa in dig i mötesrummet.</Text>
              <OpenImage src={OpenDoor}/>
            </>
          : 
            <>
              <Text>Just nu är alla rum upptagna. Pröva igen om en stund.</Text>
              <ClosedImage src={ClosedDoor}/>
            </>
        }
      </Container>
    </>
  )
}

const TextContainer = styled.p`
  padding: 40px 10vw;
`

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
