import React from "react";
import "./home.css";
import "../../index.css";
import logo from '../../logo.png';


function Home() {
  return (
    <main className="page">
      <img src={logo} className="home-logo" alt="logo" />
      <p>Web development with HTML/CSS one day course</p>
      <div className="container-fluid page">
        <p><a className="home-link" href="/worksheets/1">Worksheet 1</a></p>
        <p><a className="home-link" href="/worksheets/2">Worksheet 2</a></p>
        <p><a className="home-link" href="/worksheets/3">Worksheet 3</a></p>
        <p><a className="home-link" href="/worksheets/4">Worksheet 4</a></p>
        <p><a className="home-link" href="/worksheets/5">Worksheet 5</a></p>
        <p><a className="home-link" href="/worksheets/6">Worksheet 6</a></p>
      </div>
    </main>
  )
};

export default Home;
