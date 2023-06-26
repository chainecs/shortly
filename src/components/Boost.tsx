import React from "react";
import "../css/Boost.css";
import bgImg from "../img/bg-boost-desktop.svg";

const styles: Object = {
  //backgroundColor: "hsl(257, 14%, 25%)",
  background: `url(${bgImg})`,
  backgroundSize: "cover",
};

const Boost = () => {
  return (
    <div style={{ backgroundColor: "hsl(257, 14%, 25%)" }}>
      <div style={styles}>
        <div className="boost-container">
          <div className="boost-block">
            <center>
              <p>Boost your links today</p>
              <button className="get-started-btn">Get Started</button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boost;
