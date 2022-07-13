import React from "react";
import PageTemplate from '../components/PageTemplate';
import ExerciseTextBlock from "../components/ExerciseTextBlock/ExerciseTextBlock";
import MyFigure from "../components/MyFigure/MyFigure";
import "./worksheets.css";
import img1 from '../assets/sheet5/exercise1.png';
import img2 from '../assets/sheet5/exercise2.png';
import img3 from '../assets/sheet5/exercise3.png';
import img4 from '../assets/sheet5/exercise3-footer.png';

function Worksheet5() {

  return (
    <PageTemplate
      title="Exercise sheet 5"
      description="This sheet contains the exercises for the Flexbox and grid topics sheet."
    >
      {/* 1. Recreate layout using flex - seperate codepen */}
      <ExerciseTextBlock
        title="1. Flexbox"
        text="In this exercise you are going to use the Flexbox model to layout a web page."
      />

      <p><span className="bold">Task</span>: In the Codepen below, edit the code and use Flexbox to arrange the coloured div elements to match the image below.</p>

      <p className="italic">Note: you only need to edit the CSS file and remember you can zoom out by clicking the <span className="bold">0.5x</span> button</p>

      <MyFigure
        imgSrc={img1} 
        width="70%"
        altText="exercise 1 showing flexbox layout" 
        caption="Fig 1: Web page layout with flexbox"  
      />

       {/* 2.1 Recreate with grid */}
       <p><span className="bold">Extra task</span>: Recreate the layout in the previous exercise using a grid layout. Refresh the page to clear the changes you have made to the Codepen editor.</p>

      <iframe height="500" width="100%" scrolling="no" title="Sheet 5 exercise 1 start" src={`https://codepen.io/futurecodersse/embed/zYWKovp?default-tab=html%2Cresult&editable=true`} frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href="https://codepen.io/futurecodersse/pen/zYWKovp">
        Sheet 5 exercise 1 start</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      {/* 2. grid exercise */}
      <ExerciseTextBlock
        title="2. Grid"
        text="In this exercise you are going to use the grid method to layout a web page."
      />

      <p><span className="bold">Task</span>: In the Codepen below, edit the code and use the grid method to arrange the coloured div elements to match the image below.</p>

      <p className="italic">Note: you only need to edit the CSS file. The div elements will expand in size to fill a grid area.</p>
      
      <MyFigure
        imgSrc={img2} 
        width="70%"
        altText="exercise 2 showing grid layout" 
        caption="Fig 2: Web page layout with grid"  
      />

      <iframe height="500" width="100%" scrolling="no" title="Sheet5 exercise 2 start" src={`https://codepen.io/futurecodersse/embed/ExEgNrG?default-tab=html%2Cresult&editable=true`} frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href="https://codepen.io/futurecodersse/pen/ExEgNrG">
        Sheet5 exercise 2 start</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>


      {/* 3. Build to match profile site with chosen methods */}
      <ExerciseTextBlock
        title="3. Using Flexbox and grids"
        text="In this exercise you are going to use what you learnt to layout a web page."
      />

      <p><span className="bold">Task</span>: In the Codepen below, edit the code and use what you have learnt to arrange the web page to match the image below.</p>

      <p className="italic">Note: there is no single correct way of completing this task so long as it matches the image below</p>

      <MyFigure
        imgSrc={img3} 
        width="70%"
        altText="exercise 3 showing web page layout" 
        caption="Fig 3: Web page layout using Flexbox and grid"  
      />

      <p><span className="bold">Extra task</span>: In the same Codepen editor below, add a footer to the wab page as shown in the image below.</p>

      <MyFigure
        imgSrc={img4} 
        width="80%"
        altText="exercise 3 extra exercise showing a footer" 
        caption="Fig 4: Footer for web page"  
      />

      <iframe height="500" width="100%" scrolling="no" title="Sheet 5 exercise 3 start" src={`https://codepen.io/futurecodersse/embed/YzaGjvp?default-tab=html%2Cresult&editable=true`} frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href="https://codepen.io/futurecodersse/pen/YzaGjvp">
        Sheet 5 exercise 3 start</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>
     
    </PageTemplate>
  )
};

export default Worksheet5;
