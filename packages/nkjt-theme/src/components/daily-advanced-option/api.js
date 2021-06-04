const newRoomEndpoint = 'http://localhost:8080/rooms'

/**
 * Create a short-lived room for demo purposes.
 *
 * It uses the redirect proxy as specified in netlify.toml`
 * This will work locally if you following the Netlify specific instructions
 * in README.md
 *
 * See https://docs.daily.co/reference#create-room for more information on how
 * to use the Daily REST API to create rooms and what options are available. 
 */
const createRoom = async () => {

  const exp = Math.round(Date.now() / 1000) + 60 * 30

  let response = await fetch(newRoomEndpoint, {
    method: "POST",
    body: JSON.stringify({exp}),
    mode: 'cors'
  })
  let room = await response.json()
  return room

}

export default { createRoom }