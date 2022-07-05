import React from "react";
// import Header from "../../components/header/header";
// import Footer from "../../components/footer/footer";
import "./home.css";
import "../../index.css";
import logo from '../../logo.png';


function Home() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <img src={logo} className="home-logo" alt="logo" />
        <p>Web development with HTML/CSS one day course</p>
        <div className="container-fluid page">
          <p><a className="home-link" href="/worksheets/1">Worksheet 1</a></p>
          <p><a className="home-link" href="/worksheets/2">Worksheet 2</a></p>
          <p><a className="home-link" href="/worksheets/3">Worksheet 3</a></p>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  )
};

export default Home;
