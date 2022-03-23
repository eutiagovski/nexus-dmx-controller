import React from 'react'

import Buttons from './components/buttons/Buttons'
import Faders from './components/faders/Faders'
import Header from './components/header/Header'


const App = () => {
  let channelSize = 7;

  // check if have data on localstorage
  const channelsStorage = JSON.parse(localStorage.getItem('channels'));
  let channelStatus = [];

  if(channelsStorage === null){
    channelStatus = [0,0,0,0,0,0,0]
  } else {
    channelStatus = channelsStorage
  }

  // create a array with channels size
  let channels = [];
  for (let i=0; i<channelSize; i++){
    channels.push({
      channel: i + 1,
      value: channelStatus[i],
      name: ""
    })
  }
  
  
  const app = {
    artnet : {
      target_ip: '192.168.0.103',
      universe: 0,
    },
    localhost:{
      host: "https://localhost",
      port: 4000
    },
    channels: channels
  }

  return (
    <>
      < Header configurations={app}/>
      < Buttons app={app}/>
      < Faders app={app}/>
    </>
  ) 
}

export default App
