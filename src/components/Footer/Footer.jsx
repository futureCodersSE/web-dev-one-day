import React from 'react'

const Footer = () => {

  return (
    <div style={{
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      background: "#101010",
      height: "7vh",
      padding: "4px 25px",
      borderTop: "1px solid #101010",
      color: "white"
    }}>
      {/* <button><a href="/">Back</a></button> */}
      <p>{`@futureCodersSE`}</p>
    </div>
  )
}

export default Footer