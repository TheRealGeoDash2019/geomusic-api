const got = require("got");

module.exports = async (token, jsonData) => {
  
  let Headers = {
    "Authorization": token,
    "Content-Type": "application/json"
  }
  
  //Recommended JSON Data
  /*
    myJSON = {
      //REQUIRED: Has to be a USER ID from Discord and the User must have relations with the bot in a server
      "user": "710268763844640839",
      //REQUIRED: The Guild to Get the User from
      "guild": "813439825692327968",
      //REQUIRED: The Loop Mode to Set: Can Be "queue", "track" or "off"
      "loopMode": "queue"
    }
  */
  
  let requestJSON = null;
  
  if (!token) return;
  
  if (!jsonData) return;
  
  if (jsonData && jsonData?.user !== null && jsonData?.guild !== null) requestJSON = {
    "user": jsonData?.user?.toString(),
    "guild": jsonData?.guild?.toString()
    "loopMode": jsonData?.loopMode?.toString()
  }
  
  let response = await got("https://geomusic.geoanything.page/api/v1/player/loop", {headers: Headers, json: requestJSON, method: "POST"})
  
  return JSON.parse(response.body)
}
