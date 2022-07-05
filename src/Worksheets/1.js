import React from "react";
import PageTemplate from '../components/PageTemplate';
import "./worksheets.css";

function Worksheet1() {

  return (
    <PageTemplate
      title="Exercise sheet 1"
      description="This sheet contains the exercises for the introduction to HTML topics sheet."
    >
      <div className="container-fluid page">
        {/* intro */}
        <h2>1. Adding HTML elements</h2>
        <p>In this exercise you are going to add two headings and two paragraphs.</p>
       {/* 1. add p and h tags */}
        <p>In the code editor below, use the knowledge you covered in the topic sheet 1 and create the image below. <span class="italics">Note: there is no need to set up anything in the code editor below - you just type the elements straight into the HTML box!</span></p>

        <img src="../../Assets/sheet-1/exercise 1.1" alt="image of exercise 1.1 showing a h1 heading, a paragraph, a h2 heading and another paragraph" />

        <iframe height="300" style={{width: "100%"}} scrolling="no" title="exercise sheet 1" src="https://codepen.io/j-dance/embed/yLKYwWg?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href="https://codepen.io/j-dance/pen/yLKYwWg">
          exercise sheet 1</a> by Jojo (<a href="https://codepen.io/j-dance">@j-dance</a>)
          on <a href="https://codepen.io">CodePen</a>.
        </iframe>
       {/* 2. discuss nesting for divs */}
       {/* 3. add img tag with attributes */}
       {/* 4. add a list */}
       {/* add an a tag */}
      </div>
    </PageTemplate>
  )
};

export default Worksheet1;
