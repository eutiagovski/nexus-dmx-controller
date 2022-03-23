import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './faders.css'


const Faders = ({app}) => {
    const [channels, setChannels ] = useState(app.channels)
    const localChannels = JSON.parse(localStorage.getItem('channels'))
    const { target_ip } = app.artnet;

    function handleButton (e) {
        let updateChannel = [...channels];
        updateChannel[e.target.name] = parseInt(e.target.value);
        
        setChannels(updateChannel)
    }

    useEffect(() => {
        let channelStatus = JSON.stringify(channels)

        axios.get(`/${target_ip}/${channelStatus}`)
        .then((resp) => {
            localStorage.setItem('channels', channelStatus)
        })

    }, [channels, localChannels])

  return (
    <section id="faders">
        <div className="container faders-container">
            <div className="faders-content">
                <h3>Faders</h3>

                <div className="faders">
                    {
                        channels.map((channel, index) => (
                            <div className="fader-details">
                                <h4>Channel {index + 1}</h4>
                                <div className="fader">
                                    <input 
                                        type="range"
                                        orient="vertical"  
                                        min="0"
                                        max="255"
                                        value={channel.value}
                                        onChange={handleButton}
                                        name={index}
                                        key={index}
                                    /> 
                                </div>
                            </div>  
                        ))
                    }
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faders
