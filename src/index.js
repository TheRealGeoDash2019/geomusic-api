'use strict';

module.exports = {
  //Player Retrieving Methods
  getQueue: require('./methods/getQueue'),
  getPlaying: require('./methods/getPlaying'),
  getLyrics: require('./methods/getLyrics'),
  
  //Player Transmitting Methods
  setVolmue: require('./methods/setVolume'),
  setLoop: require('./methods/setLoop'),
  playTrack: require('./methods/playTrack'),
  skipTrack: require('./methods/skipTrack'),
  resumeTrack: require('./methods/resumeTrack'),
  pauseTrack: require('./methods/pauseTrack')
}
