# geomusic-api
The Official Geo Music API is here!

Note: This is a Beta!

* NPM
```sh
npm i TheRealGeoDash2019/geomusic-api
```

* Usage

First Request an API Key by DMing TheRealGeoDash#0295 on Discord


```js
//Import the Module in a ASYNC Function
const geomusicapi = require('geomusic-api')
/*
  Using getQueue()
  Usage getQueue("myapikey-asdklakldasklaskaldkslkdakd", myJSON)

  The JSON must have these Details

  myJSON = {
    "user": "User ID from Discord",
    "guild": "Guild ID from Discord",
    "return": "json" //Can be Blank
    "data": "queue" //Return the Queue!
  }
*/



const apimsg = await geomusicapi.getQueue("myapikey-dalskdalsdkasldkalsdkasldkalsdk",)
const msg = JSON.stringify(apimsg) //Discord Readable otherwise this is not needed

//Do something with the apimsg variable
```
