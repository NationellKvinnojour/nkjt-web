import React, { useRef, useEffect, useState } from "react"
import DailyIframe from "@daily-co/daily-js"
import { styled } from "frontity"

// const handleEvent = (event, room) => {
//   fetch(`http://localhost:8080/nkjt-rooms/`, {
//     method: "PATCH",
//     body: JSON.stringify({ event, room }),
//   })
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.log("Error: " + err))
// }

const CALL_OPTIONS = {
  iframeStyle: {
    width: "100%",
    height: "100%",
    border: "1px solid #e6eaef",
    borderRadius: "6px 6px 0 0",
  },
  showLeaveButton: true,
  showFullscreenButton: true,
  //   showLocalVideo: false,
  //   showParticipantsBar: false,
}

const DEFAULT_HEIGHT = 400

const Call = ({ roomName }) => {
  const videoRef = useRef(null)
  const [height, setHeight] = useState(DEFAULT_HEIGHT)
  const [callframe, setCallframe] = useState(null)

  useEffect(() => {
    if (!videoRef || !videoRef?.current || callframe) return
    // CALL_OPTIONS.url = "https://nkjt-team.daily.co/room4?t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyIjoicm9vbTQiLCJvIjp0cnVlLCJ1IjoiTktKVC1NYXRpbGRhIiwiZCI6IjZiNDdhNTI4LTc0ZjQtNDdmOC1iNWFmLTYyZGI0MmJkNGM5MyIsImlhdCI6MTYyMjQ1MDE1MX0.75feEFdVC1WZsyZnsztmH6ZnJ67pXpsT2UgJrb6Kzio"
    CALL_OPTIONS.url = `https://nkjt-team.daily.co/${roomName}`

    const newCallframe = DailyIframe.createFrame(
      videoRef.current,
      CALL_OPTIONS
    )

    newCallframe.join().then(() => {
      // setHeight((videoRef?.current?.clientWidth || 500) * 0.75)
      setCallframe(newCallframe)
    })

    newCallframe.on("access-state-updated", (event) => {
      fetch(`http://localhost:8080/messages/`, {
        method: "POST",
        body: JSON.stringify({ event, room: roomName }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.log("Error: " + err))
      // console.log("Access state updated", event)

    })

    // newCallframe.on('participant-joined', (event) => {
    //   handleEvent(event, 'room4')
    //   console.log('joined-meeting', event)
    // })

    // newCallframe.on('participant-left', (event) => {
    //   handleEvent(event, 'room4')
    //   console.log('left-meeting', event)
    // })
  }, [videoRef])

  return (
    <div>
      <Header>{roomName}</Header>
      <VideoContainer height={height}>
        <Callframe ref={videoRef} />
      </VideoContainer>
    </div>
  )
}

const Header = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
`

const VideoContainer = styled.div`
  margin: auto;
  max-width: 1000px;
  /* height: ${(props) => (props.hidden ? "100" : props.height)}px; */
  height: 600px;
`

const Callframe = styled.div`
  width: 100%;
  height: 100%;
`

export default Call
