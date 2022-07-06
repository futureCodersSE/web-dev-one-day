import React from 'react'

const ExerciseTextBlock = (props) => {
  const { title, text } = props;

  return (
    <div style={{
      margin: "30px 0px"
    }}>
      <h3 style={{
        marginBottom: "5px"
      }}>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default ExerciseTextBlock