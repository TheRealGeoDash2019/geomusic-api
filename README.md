# geomusic-api
The Official Geo Music API is here!

Note: This is a Beta!

* NPM
```sh
npm i geomusic-api
```

# Demo Usage

First Request an API Key by DMing TheRealGeoDash#0295 on Discord


```js
const geomusicapi = require('geomusic-api')
//Import the Module. Then in a ASYNC Function
/*
  Using getQueue()
  Usage getQueue("myapikey-asdklakldasklaskaldkslkdakd", myJSON)

  The JSON must have these Details

  myJSON = {
    "user": "User ID from Discord",
    "guild": "Guild ID from Discord"
  }
*/


let myJSON = {
  "user": "123456789012345678",
  "guild": "123456789012345678",
}

const apimsg = await geomusicapi.getQueue("myapikey-dalskdalsdkasldkalsdkasldkalsdk", myJSON)
const msg = JSON.stringify(apimsg)

//Do something with the apimsg or msg* variable
```

\* You do not need to use this unless you really need to

# Usage per Command

```js
const geomusicapi = require('geomusic-api')
// Usages:
// You will need a Auth Token to make any requests
let authToken = "mytokenforapirequestshere"

// Each Function will need to be in a Asynchronous.
async function demonstration() {

// Get a Queue
let queue = await geomusicapi.getQueue(authToken, {
	user: "123456789012345678",
	guild: "123456789012345678"
}) // Returns Array of Tracks or null or Error

// Get the Current Playing Music
let playing = geomusicapi.getPlaying(authToken, {
	user: "123456789012345678",
	guild: "123456789012345678"
})	// Returns Track Info or null or Error

// Get Lyrics to a Song
let lyrics = geomusicapi.getLyrics(authToken, {
	track: "Never Gonna Give You Up"
}) // Returns Lyrics or empty object

// Play a Song in a User's VC
geomusicapi.playTrack(authToken, {
	user: "123456789012345678",
	guild: "123456789012345678",
	track: "Never Gonna Give You Up"
}) // Returns Object with Success Boolean with Track Name or Error

// Pause a Song in a User's VC
geomusicapi.pauseTrack(authToken, {
	user: "123456789012345678",
	guild: "123456789012345678"
}) // Returns Object with Success Boolean

// Resume a Song in a User's VC
geomusicapi.resumeTrack(authToken, {
	user: "123456789012345678",
	guild: "123456789012345678"
}) // Returns Object with Success Boolean

// Skip a Song in a User's VC
geomusicapi.skipTrack(authToken, {
	user: "123456789012345678",
	guild: "123456789012345678"
}) // Returns Object with Success Boolean

// Set Player Volume in a User's VC
geomusicapi.setVolume(authToken, {
	user: "123456789012345678",
	guild: "123456789012345678",
	volume: "100"
}) // Returns Object with Success Boolean or Error

}
```
