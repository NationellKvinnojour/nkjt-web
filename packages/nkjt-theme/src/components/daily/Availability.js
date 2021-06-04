import React, { useState, useEffect } from "react"
import { styled } from "frontity"

export const Availability = ({ totalRooms, occupiedRooms }) => {

  return (
    <>
    {totalRooms - occupiedRooms ? 
      <Text>Just nu {totalRooms - occupiedRooms} mötesrum tillgängliga. Tryck på knappen "Begär att få gå med" för att påbörja.</Text>
      : <Text>Alla rum är upptagna just nu</Text>
    }
    </>
  )
}

const Text = styled.p`
  margin: 20px;
`