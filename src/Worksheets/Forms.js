import React from "react";
import PageTemplate from '../components/PageTemplate';
import ExerciseTextBlock from "../components/ExerciseTextBlock/ExerciseTextBlock";
import MyFigure from "../components/MyFigure/MyFigure";
import "./worksheets.css";
import forms from '../assets/forms/form.png';
import selectOptions from '../assets/forms/select-options.png';
import formExample from '../assets/forms/form-example.png';

function Forms() {

  return (
    <PageTemplate
      title="Extension exercise sheet"
      description="This is the extension exercise sheet for the course. In this exercise sheet you are going to build out a static (has no functionality) form using HTML and CSS. We will then link this new page to the web page we built in this course already."
    >

      {/* 1. Forms */}
      <ExerciseTextBlock
        title="1. Create a basic form"
        text="In this exercise you are going to build a basic form just using HTML."
      />

      <p>Before begining this exercise it is worth doing some research on HTML form elements. Simply Google search HTML forms or click <a href="https://www.w3schools.com/html/html_forms.asp" target="_blank" rel="noopener noreferrer">here</a> to view some examples.</p>

      <p><span className="bold">Task</span>: In the Codepen editor below, recreate the form shown in Fig.1.</p>

      <p className="italic">Tip: use <span className="bold">{`<br>`}</span> tags for a line break</p>


      <MyFigure
        imgSrc={forms} 
        altText="exercise 1 showing HTML form" 
        caption="Fig 1: HTMl form"  
      />


      <MyFigure
        imgSrc={selectOptions} 
        altText="HTML form select options" 
        caption="Fig 1.1: HTML select input options"  
      />

      <iframe height="500" width="100%" scrolling="no" title="Sheet extension forms start" src={`https://codepen.io/futurecodersse/embed/OJvpPJm?default-tab=result&editable=true`} frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
        See the Pen <a href="https://codepen.io/futurecodersse/pen/OJvpPJm">
        Sheet extension forms start</a> by futureCoders (<a href="https://codepen.io/futurecodersse">@futurecodersse</a>)
        on <a href="https://codepen.io">CodePen</a>.
      </iframe>

      {/* Personal project */}
      <ExerciseTextBlock
        title="2. Create and style a basic form"
        text="In this exercise you are going to build and style a basic form in your personal project."
      />

      <p><span className="bold">Task</span>: In your personal project, create a new file called <span children="italic">form.js</span>. Inside this file build a basic HTML form. To style, choose between inline, internal or external stylesheets.</p>

      <ExerciseTextBlock
        title="3. Linking pages"
        text="In this exercise you are going to link the forms and index pages together in your personal project."
      />

      <p><span className="bold">Task</span>: In your personal project, use an <span className="italic">a</span> tag to create a link to your form page from the main page.</p>

      <p className="italic">Hint: set the href attribute to the file path of the form.js file</p>

      <MyFigure
        width="70%"
        imgSrc={formExample} 
        altText="HTML example styled form" 
        caption="Fig 2: HTML styled form example"  
      />

    </PageTemplate>
  )
};

export default Forms;
