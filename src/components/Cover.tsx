import React from "react";
import "../css/Cover.css";
import illustrationWorking from "../img/illustration-working.svg";

const Cover = () => {
  return (
    <div className="cover-container">
      <div className="cover-description">
        <h1>
          More than just<br></br>shorter links
        </h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div style={{ alignItems: "center" }}>
        <img src={illustrationWorking}></img>
      </div>
    </div>
  );
};

export default Cover;
