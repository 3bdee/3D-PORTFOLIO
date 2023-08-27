import { BrowserRouter } from "react-router-dom";
import {
  Contact,
  Experience,
  Feedbacks,
  Hero,
  About,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import "./App.css";
import React, { Component } from "react";
function App() {
  return (
    <BrowserRouter>
      <div className="realtive z-0 bg-primary">
        <div className="appContainer">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          {/* <Feedbacks />*/}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
