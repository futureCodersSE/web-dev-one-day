import React from "react";
import PageTemplate from '../components/PageTemplate';
import ExerciseTextBlock from "../components/ExerciseTextBlock/ExerciseTextBlock";
import MyFigure from "../components/MyFigure/MyFigure";
import "./worksheets.css";
import img1 from "../assets/sheet2/exercise1-1.png";

function Worksheet1() {

  return (
    <PageTemplate
      title="Exercise sheet 2"
      description="This sheet contains the exercises for the introduction to CSS topics sheet."
    >
      {/* inline styling */}
      <ExerciseTextBlock
        title="1. Inline styling"
        text="In this exercise you are going to add some inline CSS styling."
      />

      <p><span className="bold">Task</span>: In the Codepen editor below, add the following styles:</p>

      <ol>
        <li>the font colour of the <span className="bold">h1</span> element to blue</li>
        <li>the font size of the <span className="bold">h1</span> element to 48px</li>
        <li>the font colour of the first <span className="bold">p</span> tag to green</li>
      </ol>

      <p>The image below shows what the result should look like</p>

      <MyFigure
        imgSrc={img1} 
        altText="exercise 1.1 showing a h1 heading and paragraph with font styling" 
        caption="Fig 1.1: CSS font colours and weight"  
      />

      {/* internal styling */}
      <ExerciseTextBlock
        title="2. Internal stylesheets"
        text="In this exercise you are going to add some internal stylesheet styling."
      />

      <p><span className="bold">Task</span>: In the same Codepen editor, create the same styling as exercise 1, however achieve this through using internal stylesheets.</p>
      <p className="italic">Remember that the CSS code is added between <span className="bold">style</span> tags shown below</p>
      <p className="italic"><span className="bold">Hint</span>: Use CSS selectors we covered in the topic sheet</p>


      <pre>
        <code>{`<style>`}</code>
        <code>{` ...`}</code>
        <code>{`</style>`}</code>
      </pre>

      {/* first styling codepen */}
      <iframe height="400" style={{width: "100%"}} scrolling="no" title="Exercise 1 start" src="https://codepen.io/futurecodersse/embed/oNqxNrq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/futurecodersse/pen/oNqxNrq">
        Exercise 1 start</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      {/* external styling & link -> setup to look like web page */}

      {/* override stlying (inline) */}
    </PageTemplate>
  )
};

export default Worksheet1;
