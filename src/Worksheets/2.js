import React from "react";
import PageTemplate from '../components/PageTemplate';
import ExerciseTextBlock from "../components/ExerciseTextBlock/ExerciseTextBlock";
import MyFigure from "../components/MyFigure/MyFigure";
import "./worksheets.css";
import img1 from "../assets/sheet2/exercise1-1.png";
import img4 from "../assets/sheet2/exercise4.png";

function Worksheet2() {

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
        altText="exercise 1 showing a h1 heading and paragraph with font styling" 
        caption="Fig 1: CSS font colours and weight"  
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
      <iframe height="400" style={{width: "100%"}} scrolling="no" title="Exercise 1 start" src={`https://codepen.io/futurecodersse/embed/oNqxNrq?default-tab=html%2Cresult&editable=true`} frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href="https://codepen.io/futurecodersse/pen/oNqxNrq">
        Exercise 1 start</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      {/* external styling & link -> setup to look like web page */}
      {/* exercise must be done in another embed?? */}
      <ExerciseTextBlock
        title="3. External stylesheets"
        text="In this exercise you are going to add an external stylesheet for styling."
      />

      <p><span className="bold">Task</span>: {`In the CodeSandBox editor below, click Open Sandbox in the bottom right-hand corner. This will open the editor in a new tab. Create the same styling as exercise 1 & 2, however achieve this through using an external stylesheet.`}</p>

      <p>Name the stlye sheet <span className="italic bold">style.css</span> and add the code from exercise 2 then link the stylesheet in the <span className="italic bold">index.html</span> file.</p>

      <p className="italic"><span className="bold">Note</span>: You must save each time you make a change in the code editor in order to see the changes you have made. You can do this by pressing <span className="bold">cmd</span> + <span className="bold">s</span> or <span className="bold">win</span> + <span className="bold">s</span> at the same time.</p>

      <iframe src="https://codesandbox.io/embed/festive-tree-1x1jg0?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width:" 100%", 
          height:" 400px", 
          border: "0", 
          borderRadius: "4px", 
          overflow: "hidden"
        }}
        title="festive-tree-1x1jg0"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>

      {/* style to match image using new properties */}
      <ExerciseTextBlock
        title="4. Practice"
        text="In this exercise you are going to apply what you have learnt so far with CSS and style a webpage to match a design like a real web developer!"
      />

      <p>Use what you have learnt as well as using Google in order to find the CSS properties to achieve the desired styling.</p>

      <p className="italic">Hint: Take a look at CSS property <a href="https://www.w3schools.com/css/css_background.asp">background</a></p>

      <MyFigure
        imgSrc={img4} 
        altText="exercise 4 showing styling applied to h1 heading and paragraph with font and background styling" 
        caption="Fig 4: CSS styling for web page design"  
      />

      <iframe height="400" style={{width: "100%"}} scrolling="no" title="Sheet 2 exercise 4 start" src={`https://codepen.io/futurecodersse/embed/wvmWyGG?default-tab=html%2Cresult&editable=true`} frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href="https://codepen.io/futurecodersse/pen/wvmWyGG">
        Sheet 2 exercise 4 start</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

    </PageTemplate>
  )
};

export default Worksheet2;
