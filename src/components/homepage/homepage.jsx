import React from "react";
import { NavBar } from "../navbar/navbar";
import "./homepage.css";

export function HomePage({
    toggleShowHomePage,
    setShowHomePage
}) {
  return (
    <div>
      <NavBar toggleShowHomePage={()=>setShowHomePage(true)}/>
      <div className="flex">
        <div className="left-section">
          <h1 className="homepage-title">
            Recipe<br></br>Generator
          </h1>
          <p>
            Input the ingredients you have and see what recipes you can make!
          </p>
          <button className="get-started-button" onClick={toggleShowHomePage}>Get Started</button>
        </div>
        <img className="large-img" src="../../images/largeImage.png" />
      </div>
      <div class="contributors-div">
        <p className="contributors">
          Contributors: Michelle Wilfred, Helen Miao, Angela Zheng, Gabe
          Manalang
        </p>
      </div>
    </div>
  );
}
