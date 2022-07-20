import React from "react";
import PageTemplate from '../components/PageTemplate';
import ExerciseTextBlock from "../components/ExerciseTextBlock/ExerciseTextBlock";
import "./worksheets.css";

function Worksheet7() {

  return (
    <PageTemplate
      title="Exercise sheet 7: Build a web page"
      description="This is the final exercise sheet for the course. This exercise was designed to give you an understanding of what a typical task might be for a web developer. This task involves all the skills you have learnt so far in the course."
    >
      {/* 1. position relative (top, bottom, left, right) */}
      <ExerciseTextBlock
        title="1. Meeting design requirements"
        text="In this exercise you are going to use what you have learnt to match the design of a web page."
      />

      <p>Web developers are often tasked with building a client website. Depending on your responsibilities, you could be given a web page design by a designer and tasked with building the web page from the design files e.g. images. It is important to try and match the design specification as closely as possible as this is what the client wants.</p>

      <p><span className="bold">Task</span>: In your personal project editor, create the web page view in the Codepen below as closely as possible. You may have to use Google to search for some specific CSS styling e.g. box-shadow, rgba, hover, etc..</p>

      <p className="italic"><span className="bold">Note</span>: the colours, text and images are a suggestion in this exercise, however every other aspect {`(general layout, positioning, spacing, etc..)`} is required.</p>

      <p>Useful information {`(this is just a suggestion)`}:</p>

      <ul>
        <li>Use font-family: Roboto, sans-serif</li>
        <li>Image url: {`(https://img.etsystatic.com/il/ce3bb5/655683501/il_570xN.655683501_2vwq.jpg?version=0) - can use any image url you like!`}</li>
        <li>Colours:</li>
        <ul>
          <li>background: #0F0A0A</li>
          <li>orange: #d96c06</li>
          <li>green: rgb(34, 146, 164)</li>
          <li>black: #0F0A0A</li>
        </ul>
        <li>Use anchor tags for links</li>
      </ul>

      <h2 className="bold">Good luck!</h2>

      <div style={{
        display: "flex",
        margin: "50px auto",
        justifyContent: "center",
        overflow: "hidden",
        height: "535px",
        width: "80%",
        alignItems: "flex-end",
        border: "1px solid black"
      }}>
        <iframe height="600" width="100%" scrolling="no" title="Exercise sheet 7 solution" src="https://codepen.io/futurecodersse/full/gOeLRar" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
          See the Pen <a href="https://codepen.io/futurecodersse/pen/gOeLRar">
          Exercise sheet 7 solution</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>
  
    </PageTemplate>
  )
};

export default Worksheet7;
