import React from 'react'

const MyFigure = (props) => {
  const { imgSrc, altText, caption } = props;

  return (
    <section style={{
      margin: "50px 0px",
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }}>
      <figure>
        <img src={imgSrc} alt={altText} style={{
          border: "1px solid black",
          marginBottom: "10px"
        }} />
        <figcaption>{caption}</figcaption>
      </figure>
    </section>
  )
}

export default MyFigure