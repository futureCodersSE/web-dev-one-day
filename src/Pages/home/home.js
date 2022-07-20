import React from "react";
import "./home.css";
import "../../index.css";
import logo from '../../logo.png';

function Home() {
  return (
    <main className="page">
      <img src={logo} className="home-logo" alt="logo" />
      <p>Web development with HTML/CSS one day course</p>
      <div className="container-fluid">
        <p><a className="home-link" href="/worksheets/introduction/html">Worksheet 1</a></p>
        <p><a className="home-link" href="/worksheets/introduction/css">Worksheet 2</a></p>
        <p><a className="home-link" href="/worksheets/box-model">Worksheet 3</a></p>
        <p><a className="home-link" href="/worksheets/positioning">Worksheet 4</a></p>
        <p><a className="home-link" href="/worksheets/flexbox-grid">Worksheet 5</a></p>
        <p><a className="home-link" href="/worksheets/semantic-html">Worksheet 6</a></p>
        <p><a className="home-link" href="/worksheets/final-task">Worksheet 7</a></p>
        <p><a className="home-link" href="/replit-setup">Replit instructions</a></p>
        <p><a className="home-link" href="/worksheets/forms">Extension Worksheet</a></p>
      </div>
    </main>
  )
};

export default Home;
