import React from "react";
import { NavBar } from "../navbar/navbar";
import "./homepage.css";

export function HomePage({
    toggleShowHomePage
}) {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="left-section">
          <h1>
            Recipe<br></br>Generator
          </h1>
          <p>
            Input the ingredients you have and see what recipes you can make!
          </p>
          <button onClick={toggleShowHomePage}>Get Started</button>
        </div>
        <img src="../../images/largeImage.png" />
      </div>
      <p className="contributors">
        Contributors: Michelle Wilfred, Helen Miao, Angela Zheng, Aahil, Gabe
        Manalang
      </p>
    </div>
  );
}
