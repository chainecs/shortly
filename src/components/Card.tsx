import React from "react";
import "../css/Card.css";
import recognition from "../img/icon-brand-recognition.svg";

const Card = () => {
  return (
    <div className="card-container">
      <div className="underline"></div>
      <div className="card-list">
        <div className="features-card">
          <div className="circle">
            <img src={recognition}></img>
          </div>
          <div className="card-head">Brand Recognition</div>
          <div className="card-description">
            Boost your brand recognition with each click Generic links don't
            mean a thing.Branded links help instil confidence in your content.
          </div>
        </div>
        <div className="features-card card2">
          <div className="circle">
            <img src={recognition}></img>
          </div>
          <div className="card-head">Detailed Records</div>
          <div className="card-description">
            Gain insights into who is clicking your links.Knowing when and where
            prople engage with your content helps inform better decisions.
          </div>
        </div>
        <div className="features-card card3">
          <div className="circle">
            <img src={recognition}></img>
          </div>
          <div className="card-head">Fully Customizable</div>
          <div className="card-description">
            improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
