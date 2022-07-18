import React from "react";
import PageTemplate from '../components/PageTemplate';
import ExerciseTextBlock from "../components/ExerciseTextBlock/ExerciseTextBlock";
import MyFigure from "../components/MyFigure/MyFigure";
import "./worksheets.css";
import forkButton from '../assets/replit/fork-button.png';
import replitLogin from '../assets/replit/replit-login.png';

function ReplitSetup() {

  return (
    <PageTemplate
      title="Setting up Replit"
      description="In this page you are going to setup your own replit account and make a copy of the starter project. In this project you will add your own code after each exercise sheet, adding what you have learnt."
    >

      <p>The aim here is for you to have a personal project to apply what you will learn and work towards the final excercise in sheet 7 where you will work like  a web developer and build a web page to match a design!</p>

      <ExerciseTextBlock 
        title="1. Follow the link" 
        text="Click on the link below. This will open a new tab with the FutureCoders starter project setup for you."
      />
      
      <p>Click <a href="www.sfgf">here</a> to go to the starter project.</p>

      {/* <MyFigure imgSrc={} altText="future coders starter project file" caption="This is the page the link takes you to"/> */}

      <ExerciseTextBlock 
        title="2. Fork the project" 
        text={`In the new tab, click the fork button as shown below. "forking" means to make a copy of a code base. This allows you to have your own personal copy which you can edit. Once you click this button there will be a login pop-up.`}
      />

      <MyFigure imgSrc={forkButton} altText="replit fork button" caption="Replit page fork button"/>

      <ExerciseTextBlock 
        title="3. Create a Replit account" 
        text={`In the log in pop-up (shown below) either create an account with your email address or use a third party authentication process such as through Google or GitHub.`}
      />

      <MyFigure imgSrc={replitLogin} altText="replit log in screen" caption="Replit log in pop-up screen"/>

      <ExerciseTextBlock 
        title="4. Begin coding" 
        text={`Once you have created an account and clicked the "fork" button you will be redirected to a page which looks like below. This is your code editor! inside you will find project files and an output area where your webpage will show.`}
      />

      <p className="bold">Remember! - you must save each time you make a change in order to see those changes. To do this press down the <span className="italic">Win</span> + <span className="italic">s</span> for Windows or <span className="italic">cmd</span> + <span className="italic">s</span> for Macbook users.</p>

      {/* <MyFigure imgSrc={replitEditor} altText="replit editor" caption="Replit editor page"/> */}

      {/* instructions for code share? */}
      
    </PageTemplate>
  )
};

export default ReplitSetup;
