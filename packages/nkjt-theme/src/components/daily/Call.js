import React, { useRef, useEffect, useState } from "react"
import DailyIframe from "@daily-co/daily-js"
import { styled } from "frontity"

const CALL_OPTIONS = {
  iframeStyle: {
    width: "100%",
    height: "100%",
    border: "1px solid #e6eaef",
    borderRadius: "6px 6px 0 0",
  },
  showLeaveButton: true,
  showFullscreenButton: true,
  lang: "sv",
  userName: "Anonym",
  //   showLocalVideo: false,
  //   showParticipantsBar: false,
}

const DEFAULT_HEIGHT = 400

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

export const Call = ({ roomName }) => {
  const videoRef = useRef(null)
  const [height, setHeight] = useState(DEFAULT_HEIGHT)
  const [callframe, setCallframe] = useState(null)

  useEffect(() => {
    if (!videoRef || !videoRef?.current || callframe) return
    CALL_OPTIONS.url = `https://nkjt-team.daily.co/${roomName}`

    const newCallframe = DailyIframe.createFrame(
      videoRef.current,
      CALL_OPTIONS,
    )

    newCallframe.setUserName("Gäst")

    newCallframe.join().then(() => {
      // setHeight((videoRef?.current?.clientWidth || 500) * 0.75)
      setCallframe(newCallframe)
    })

    newCallframe.on("access-state-updated", (event) => {
      fetch(`https://nkjt.herokuapp.com/messages/`, {
        method: "POST",
        body: JSON.stringify({ event, room: roomName }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.log("Error: " + err))
    })
  }, [videoRef])

  return (
    <>
      <Header>{roomName}</Header>
      <VideoContainer height={height}>
        <Callframe ref={videoRef} />
      </VideoContainer>
    </>
  )
}
