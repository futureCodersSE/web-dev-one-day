import React from "react";
import PageTemplate from '../components/PageTemplate';
import ExerciseTextBlock from "../components/ExerciseTextBlock/ExerciseTextBlock";
import MyFigure from "../components/MyFigure/MyFigure";
import "./worksheets.css";
import forkButton from '../assets/replit/fork-button.png';
import replitLogin from '../assets/replit/replit-login.png';
import replitInvite from '../assets/replit/replit-invite.png';
import replitShareScreen from '../assets/replit/replit-share-screen.png';
import replitStart from '../assets/replit/replit-start.png';

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
      
      <p>Click <a href="https://replit.com/@KarenScott1/HTMLCSS-course-beginning#index.html" target="_blank" rel="noopener noreferrer">here</a> to go to the starter project.</p>

      <MyFigure
        width="80%" 
        imgSrc={replitStart} 
        altText="future coders starter project file" 
        caption="Replit FutureCoders starter project"
      />

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
      <ExerciseTextBlock 
        title="5. Code sharing" 
        text={`Replit allows you to generate a link which enables anyone who clicks the link to view and edit your code. This will be useful for when the course instructor needs to see your work, such as when you have a bug or have completed an exercise sheet.`}
      />

      <p>To share your Replit personal project, follow the below intrsuctions:</p>

      <ol>
        <li>Click the <span className="bold">Invite</span> button in the top right hand corner</li>
        <li>A pop up Invite screen appears. Click <span className="bold">Gernerate a join link</span> button</li>
        <li>Copy the newly created link to share with the course instructor</li>
      </ol>
      
      <MyFigure 
        imgSrc={replitInvite} 
        altText="replit invite button" 
        caption="Replit invite button for sharing project"
      />

      <MyFigure 
        imgSrc={replitShareScreen} 
        altText="replit share screen window" 
        caption="Replit share screen window"
      />

    </PageTemplate>
  )
};

export default ReplitSetup;
