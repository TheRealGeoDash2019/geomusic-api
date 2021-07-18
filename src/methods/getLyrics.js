const got = require("got");

module.exports = async (token, jsonData) => {
  
  let Headers = {
    "Authorization": token,
    "Content-Type": "application/json"
  }
  
  //Recommended JSON Data
  /*
    myJSON = {
      //REQUIRED: The Track to get Lyrics for
      "track": "Never Gonna Give You Up",
    }
  */
  
  let requestJSON = null;
  
  if (!token) return throw new Error("No Auth Token")
  
  if (!jsonData) return throw new Error("No JSON Data Provided in Request")
  
  if (jsonData && jsonData?.track !== null) requestJSON = {
    "track": jsonData?.user?.toString(),
  }
  
  let response = await got("https://geomusic.geoanything.page/api/v1/player/lyrics", {headers: Headers, json: requestJSON, method: "POST"})
  
  return JSON.parse(response.body)
}
