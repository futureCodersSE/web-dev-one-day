import React from 'react'
import logo from '../../assets/fcLogoHeader.png';

const Header = () => {

  return (
    <div style={{
      position:"relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      color: "white",
      height: "10vh",
      padding: "8px 12px",
      background: "#101010",
      boxShadow: "0 4px 2px -2px #101010"
    }}>
      <img 
        src={logo} 
        alt="future coders logo" 
        height="65%" 
        width="auto" 
        style={{
          position: "absolute",
          left: "25px"
        }}
      />
      <h2>Web development with HTML/CSS one day course</h2>
    </div>
  )
}

export default Header