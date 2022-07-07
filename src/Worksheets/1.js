import React from "react";
import PageTemplate from '../components/PageTemplate';
import ExerciseTextBlock from "../components/ExerciseTextBlock/ExerciseTextBlock";
import MyFigure from "../components/MyFigure/MyFigure";
import "./worksheets.css";
import img1 from '../assets/sheet1/exercise1-1.png';
import img3 from '../assets/sheet1/exercise1-3.png';

function Worksheet1() {

  return (
    <PageTemplate
      title="Exercise sheet 1"
      description="This sheet contains the exercises for the introduction to HTML topics sheet."
    >
      {/* intro */}
      <ExerciseTextBlock 
        title="1. Adding HTML elements" 
        text="In this exercise you are going to add two headings and two paragraphs."
      />
      
      {/* 1. add p and h tags */}
      <p><span className="bold">Task</span>: In the code editor below, use the knowledge you covered in the topic sheet 1 and create the image below. <br /><br /><span className="italic"><span className="bold">Note</span>: there is no need to set up anything in the code editor below - you just type the elements straight into the HTML box!</span></p>

      <MyFigure imgSrc={img1} altText="exercise 1.1 showing a h1 heading, a paragraph, a h2 heading and another paragraph" caption="Fig 1.1: HTML headers and paragraphs"/>

      {/* 2. discuss nesting for divs */}
      <ExerciseTextBlock
        title="2. Nesting and div elements"
        text="In this exercise you are going to add div elements and nest the text from the previous exercise."
      />

      <p><span className="bold">Nesting</span> is having an element inside another element. The parent element is the outer element and the <span className="italic">child</span> element is between the parent elements opening and closing tag.<br /><br /><span className="italic"><span className="bold">Note</span>: indenting is used to help make the code easier to read. You should indent whenever an element is nested by pressing the <span className="bold">Tab</span> key.</span></p>

      <pre>
        <code>{`<div>`}</code>
        <code>{`  <p>I am the child element</p>`}</code>
        <code>{`</div>`}</code>
      </pre>

      <p><span className="bold">Task</span>: Add a parent div element to the code for exercise 1 and then add a div element around the first heading and paragraph text.</p>

      {/* 3. add img tag with attributes */}
      <ExerciseTextBlock
        title="3. Images"
        text="In this exercise you are going to add an image using the img tag."
      />

      <p><span className="bold">Task</span>: in the CodePen text editor, add an img element below the text inside the parent div element. Add the attributes listed to the img tag.</p>

      <ul>
        <li>image url: https://img.etsystatic.com/il/ce3bb5/655683501/il_570xN.655683501_2vwq.jpg?version=0</li>
        <li>image alt text: owl head</li>
        <li>width: 200px</li>
        <li>height: auto</li>
      </ul>

      <MyFigure imgSrc={img3} altText="exercise 1.3 showing a h1 heading, a paragraph, a h2 heading, another paragraph and an image" caption="Fig 1.2: HTML headers, paragraphs and an image"/>

      {/* 4. add a list */}
      <ExerciseTextBlock
        title="4. Lists"
        text="In this exercise you are going to add a bullet point list."
      />

      <p><span className="bold">Task</span>: in the CodePen text editor, add a ul tag below the image tag with two nested li tags inside.</p>

      <p>Try to recreate this:</p>

      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>

      {/* 5. add an anchor tag */}
      <ExerciseTextBlock
        title="5. Anchors"
        text={`In this exercise you are going to add an "a" tag which is an anchor element and is used for creating links.`}
      />

      <p><span className="bold">Task</span>: in the CodePen text editor, add an <span className="italic">a</span> tag below the list with attributes:</p>
      
      <ul>
        <li><span className="italic">href</span> attribute set to the url for Google</li>
        <li><span className="italic">target</span> attribute set to {`'_blank'`}. This opens the link in a new tab</li>
      </ul>

      <p>It should look like this:</p>

      <a href="https://www.google.co.uk/" rel="noopener noreferrer" target="_blank">Google</a>

      <p>For more information on anchor elements click <a href="https://www.w3schools.com/tags/tag_a.asp" target="_blank" rel="noopener noreferrer">here</a>.</p>

      {/* codepen embed */}
      <iframe height="400" style={{width: "100%"}} scrolling="no" title="Exercise sheet 1 start" src="https://codepen.io/futurecodersse/embed/JjLGEob?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/futurecodersse/pen/JjLGEob">
        Exercise sheet 1 start</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </PageTemplate>
  )
};

export default Worksheet1;
