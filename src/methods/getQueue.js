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
      //OPTIONAL: Return Type can be "json" or "string". Defaults to JSON
      "return": "json",
      //REQUIRED: Return Data Type needs to be "queue" to get the Queue
      "data": "queue"
    }
  */
  
  let requestJSON = null;
  
  if (!jsonData) requestJSON = {
    "user": "710268763844640839",
    "guild": "813439825692327968",
    "return": "json",
    "data": "queue"
  }
  
  if (jsonData && jsonData?.auth !== null && jsonData?.user !== null && jsonData?.guild !== null) requestJSON = {
    "user": jsonData?.user?.toString(),
    "guild": jsonData?.guild?.toString(),
    "return": jsonData?.return? jsonData?.return?.toString() : "json",
    "data": jsonData?.data?.toString()
  }
  
  let response = await got("https://geomusic.geoanything.page/api/v1/", {headers: Headers, json: requestJSON, method: "POST"})
  
  return JSON.parse(response.body)
}
