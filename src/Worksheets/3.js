import React from "react";
import PageTemplate from '../components/PageTemplate';
import ExerciseTextBlock from "../components/ExerciseTextBlock/ExerciseTextBlock";
import MyFigure from "../components/MyFigure/MyFigure";
import "./worksheets.css";
import img1 from '../assets/sheet3/icon-scrnshot.png';
import img2 from '../assets/sheet3/exercise2-solution.png';

function Worksheet3() {

  return (
    <PageTemplate
      title="Exercise sheet 3"
      description="This sheet contains the exercises for the box model topics sheet. Understanding the CSS box model really helps you become a better web developer. Being able to visually understand how spacing and sizes affect a HTML element can improve your ability to style a web page in an efficient manner."
    >
      {/* 1. use dev tools to inspect HTML/CSS */}
      <ExerciseTextBlock
        title="1. Inspecting with dev tools"
        text="In this exercise you are going to use your browsers dev tools to inspect the HTML/CSS on this page."
      />

      <p><span className="bold">Task</span> : On this page, right click and select <span className="italic">inspect</span>. The dev tool window should appear on the side of your screen or in a new window. Explore the HTML elements by clicking into them and viewing the CSS properties. View the box model layout under the <span className="italic">Computed</span> tab to see how different elements vary in values.</p>

      <p><span className="bold">Additional task</span>: Click directly into the box which says {'element.style'} to directly add inline CSS to a HTML element.</p>

      {/* 2. change div padding, margin, border, radius, width, height */}
      <ExerciseTextBlock
        title="2. Styling box model properties"
        text="In this exercise you are going to change some  HTML properties which are included in the box model."
      />

      <p><span className="bold">Task</span>: Add the following styles into the Codepen below and take notice of all the changes.</p>
      <p className="italic">Note: try removing a single line of CSS to see the changes that the property makes</p>

      <pre>
        <code>{`.logo {`}</code>
        <code>  height: 50px;</code>
        <code>  width: 65px;</code>
        <code>  background: orange;</code>
        <code>  border-radius: 20px;</code>
        <code>  margin: 25px;</code>
        <code>{`}`}</code>
      </pre>

      <p>Next, add the class name {`"inner-logo"`} to the <span className="bold">div</span> element nested inside the <span className="bold">div</span> element with the class name {`"logo"`}</p>

      <p>After completing these two steps you should have the orange and green div elements as shown in Fig.1</p>

      <MyFigure
        imgSrc={img1} 
        altText="exercise 1 showing nested div elements forming a logo" 
        caption="Fig 1: styled logo"  
      />

      <p><span className="bold">Task</span>: In the same Codepen editor below, style the HTML elements to match the image in Fig 2.</p>
      <p>Use CSS property <span className="bold">text-align: center;</span> for horizontally centering text.</p>
      <p className="italic">Hint: some class names exist on elements already</p>
      <p className="italic"><span className="bold">Note</span>: There is no exact solution to this so long as it looks the same and don't worry if yours looks slightly different as the exact dimensions have not be provided {`(have a guess and use trial and error to see what looks right!)`} - Good luck!!</p>

      <MyFigure
        imgSrc={img2} 
        altText="exercise 1.2 showing styled web page using box model properties" 
        caption="Fig 2: styled web page using box model properties"  
      />

      <iframe height="400" width="100%" scrolling="no" title="Sheet 3 exercise 1 start" src={`https://codepen.io/futurecodersse/embed/abYZKNj?default-tab=html%2Cresult&editable=true`} frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/futurecodersse/pen/abYZKNj">
        Sheet 3 exercise 1 start</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
      
      {/* 3. box sizing */}



    </PageTemplate>
  )
};

export default Worksheet3;
