import React from 'react'

const Header = ({ configurations }) => {
    const { artnet } = configurations;
    
  return (
    <div className="container header-container">
        <div className="header-content">
            <h5>Artnet Local IP: {artnet.target_ip}</h5>
            <h5>Universo: {artnet.universe }</h5>
        </div>
    </div>
  )
}

export default Header
