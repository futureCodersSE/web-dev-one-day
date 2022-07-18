import React from "react";
import PageTemplate from '../components/PageTemplate';
import ExerciseTextBlock from "../components/ExerciseTextBlock/ExerciseTextBlock";
import MyFigure from "../components/MyFigure/MyFigure";
import "./worksheets.css";
import img1 from '../assets/sheet4/exercise1-relative.png';
import img2 from '../assets/sheet4/exercise2.png';
import img3 from '../assets/sheet4/exercise5.png';
import img4 from '../assets/sheet4/exercise5-extra.png';

function Worksheet4() {

  return (
    <PageTemplate
      title="Exercise sheet 4"
      description="This sheet contains the exercises for the positioning topics sheet. Positioning HTML elements is crucial for laying out a web page. Without this the web page would render each HTML element one after the other from top to bottom. Gaining a good understanding of how these CSS properties work enables you to create interesting and more complex layouts."
    >
      {/* 1. position relative (top, bottom, left, right) */}
      <ExerciseTextBlock
        title="1. Position: relative"
        text="In this exercise you are going to use the position: relative property to layout a web page."
      />

      <p><span className="bold">Task</span>: In the Codepen editor below, arrange the webpage to match the image below using the position relative property.</p>
      <p className="italic">Hint: Notice the change in position of the inner icon and side bar.</p>

      <MyFigure
        imgSrc={img1} 
        altText="exercise 1 showing relative positioning for logo and side bar" 
        caption="Fig 1: Result of relative positioning applied to elements"  
        width="60%"
      />

      {/* 2. position absolute */}
      <ExerciseTextBlock
        title="2. Position: absolute"
        text="In this exercise you are going to use the position: absolute property to layout a web page."
      />

      <p><span className="bold">Task</span>: In the same Codepen editor below, arrange the top section to match the image below using the position absolute property.</p>
      <p className="italic">Hint: Use position: absolute on the .logo class and remember absolute positioning is relative to the nearest positioned parent element.</p>

      <p><span className="bold">Explore!</span> - play around with relative and absolute positioning on the webpage to see how it affects the layout.</p>

      <MyFigure
        imgSrc={img2} 
        altText="exercise 2 showing absolute positioning for logo" 
        caption="Fig 2: Result of absolute positioning applied to logo"  
      />

      <iframe height="500" width="100%" scrolling="no" title="Sheet 4 exercise 1 start" src={`https://codepen.io/futurecodersse/embed/wvmzavB?default-tab=html%2Cresult&editable=true`} frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href="https://codepen.io/futurecodersse/pen/wvmzavB">
        Sheet 4 exercise 1 start</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      {/* 3. position fixed & sticky */}
      <ExerciseTextBlock
        title={`3. Position: fixed & sticky`}
        text={`In this exercise you are going to use the position: fixed & sticky properties to layout a web page.`}
      />

      <p><span className="bold">Task</span>: In the Codepen editor below, set the <span className="italic">header</span> class to have position: fixed. What do you notice?</p>

      <p className="italic"><span className="bold">Extra Task</span>: In the Codepen editor below, try aligning the green header block with the top of the page and add a margin to the top of the <span className="italic">.nav-bar</span> class so its below the green header.</p>

      <p><span className="bold">Task</span>: In the same Codepen editor below, remove the position property from the <span className="italic">header</span> class and remove any margins added to the <span className="italic">nav-bar</span> class. Add the following CSS code to the <span className="italic">nav-bar</span> class. What do you notice?</p>

      <pre>
        <code>{`{`}</code>
        <code>  position: sticky;</code>
        <code>  top: 0;</code>
        <code>  background: white;</code>
        <code>{`}`}</code>
      </pre>

      {/* 4. z-index */}
      <ExerciseTextBlock
        title={`4. Using z-index for layering`}
        text={`In this exercise you are going to use z-index property to layer a web page.`}
      />

      <p>In the pervious task, did you notice that when you scroll down the side bar element overlaps the nav-bar when the nav-bar was set to position: sticky</p>

      <p><span className="bold">Task</span>: In the Codepen editor below, set the <span className="italic">nav-bar</span> class to be on the top layer so that the side bar no longer overlaps</p>

      <p className="italic">Hint: greater z-index values are layered towards the front</p>

      <iframe height="500" width="100%" scrolling="no" title="Sheet 4 exercise 3 solution" src={`https://codepen.io/futurecodersse/embed/vYRXOqN?default-tab=html%2Cresult&editable=true`} frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href="https://codepen.io/futurecodersse/pen/vYRXOqN">
        Sheet 4 exercise 3 solution</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      {/* 5. display inline/inline-block */}
      <ExerciseTextBlock
        title={`5. Block & inline`}
        text={`In this exercise you are going to use the display property to change the layout of a web page.`}
      />

      <p><span className="bold">Task</span>: Use the <span className="italic">inline-block</span> display property in the Codepen editor below to arrange the webpage to match the image below.</p>

      <p className="italic">Note: In the Codepen editor, click the <span className="bold">0.5x</span> button to zoom out of the web page</p>

      <MyFigure
        imgSrc={img3} 
        altText="exercise 5 showing inline-block being used" 
        caption="Fig 3: Layout of web page with inline-block applied"  
      />

      <p><span className="bold">Extra Task</span>: In the same Codepen below, edit the code and add the list items into the side bar.</p>

      <p className="italic">Note: Are there any existing styles which may affect the new side bar?</p>

      <MyFigure
        imgSrc={img4} 
        altText="exercise 5 extra showing default/block being used for list items" 
        caption="Fig 3: Layout of side bar"  
      />

      <iframe height="500" width="100%" scrolling="no" title="Sheet 4 exercise 5 start" src={`https://codepen.io/futurecodersse/embed/rNdMOEa?default-tab=html%2Cresult&editable=true`} frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href="https://codepen.io/futurecodersse/pen/rNdMOEa">
        Sheet 4 exercise 5 start</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

    </PageTemplate>
  )
};

export default Worksheet4;
