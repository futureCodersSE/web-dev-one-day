import React from 'react'
import logo from '../../logo.png';

const Header = () => {

  return (
    <div style={{
      position:"relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "9vh",
      padding: "8px 12px",
      boxShadow: "0 4px 2px -2px gray"
    }}>
      <img 
        src={logo} 
        alt="future coders logo" 
        height="80%" 
        width="auto" 
        style={{
          position: "absolute",
          left: "15px"
        }}
      />
      <h1>Web development one day course: HTML and CSS</h1>
    </div>
  )
}

export default Header