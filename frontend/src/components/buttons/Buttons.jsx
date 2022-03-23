import React from 'react'
import axios from 'axios'

import { DMX_MAPPING } from '../../map'

import './buttons.css'

const Buttons = ({ app }) => {
  let channelStatus;
  const { target_ip } = app.artnet

  function handleButton(e){
    for (let i = 0; i < DMX_MAPPING.length; i++){
      if (e.target.name === DMX_MAPPING[i].name){
        channelStatus = DMX_MAPPING[i].value
        channelStatus = JSON.stringify(channelStatus)

        axios.get(`/${target_ip}/${channelStatus}`)
        .then((resp) => {
          window.location.reload();
          localStorage.setItem('channels', channelStatus)
        })
        
      }
    }    
  }

  return (
    <section id='buttons'>
      <div className="container buttons-container">
        <div className="light-content">
          <h3>Controle da Luz</h3>
          <div className="lights-buttons">
            {
              DMX_MAPPING.map((fader, index) => (
                <button
                  className='btn btn-primary' 
                  name={fader.name} 
                  key={index}
                  onClick={handleButton}
                  
                >{fader.name}
                 
                  </button>
              ))
            }
           </div>
        </div>
      </div>
    </section>
  )
}

export default Buttons
