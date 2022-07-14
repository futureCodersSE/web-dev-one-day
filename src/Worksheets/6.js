import React from "react";
import PageTemplate from '../components/PageTemplate';
import ExerciseTextBlock from "../components/ExerciseTextBlock/ExerciseTextBlock";
import "./worksheets.css";

function Worksheet6() {

  return (
    <PageTemplate
      title="Exercise sheet 6"
      description="This sheet contains the exercises for the Semantic HTML topics sheet."
    >
      {/* 1. position relative (top, bottom, left, right) */}
      <ExerciseTextBlock
        title="1. Practice with Semantic HTML"
        text="In this exercise you are going to update the HTML code for a web page with Semantic tags."
      />

      <p><span className="bold">Task</span>: In the Codepen editor below, where appropriate, change the HTML tag elements to Semantic HTML tag elements to make the code easier to understand.</p>

      <p className="italic">Hint: Notice the class names on some of the elements.</p>

      <iframe height="500" width="100%" scrolling="no" title="Sheet 6 exercise 1 start" src={`https://codepen.io/futurecodersse/embed/xxWRdpj?default-tab=html%2Cresult&editable=true`} frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href="https://codepen.io/futurecodersse/pen/xxWRdpj">
        Sheet 6 exercise 1 start</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

    </PageTemplate>
  )
};

export default Worksheet6;
