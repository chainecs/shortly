import React, { useState, useEffect } from "react";
import "../css/Nav.css";
import logo from "../img/logo.svg";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [navDisplay, setnavDisplay] = useState<string>("none");

  useEffect(() => {
    const handleResize = () => {
      let windowWidth: number = window.innerWidth;
      if (windowWidth >= 785) setnavDisplay("none");
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButton = () => {
    if (navDisplay === "flex") {
      setnavDisplay("none");
    } else {
      setnavDisplay("flex");
    }
  };

  return (
    <div>
      <nav className="nav-mobile">
        <img className="nav-logo" src={logo} alt="logo"></img>
        <div
          className="nav-button align-right"
          onClick={() => {
            handleButton();
          }}
        >
          <FaBars />
        </div>
      </nav>
      <>
        <div className="nav-mobile-box" style={{ display: `${navDisplay}` }}>
          <a href="/#features">Features</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#resources">Resources</a>
          <div className="underline-inbox"></div>
          <a href="/#login">Login</a>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button className="sign-up-btn">Sign Up</button>
          </div>
        </div>
      </>

      <nav className="nav-container">
        <div className="nav-center">
          <div className="nav-header">
            <img className="nav-logo" src={logo} alt="logo"></img>
            <div className="links-container">
              <div className="links">
                <div>
                  <a href="/#features">Features</a>
                  <a href="/#pricing">Pricing</a>
                  <a href="/#resources">Resources</a>
                </div>
                <div className="align-right">
                  <a href="/#login">Login</a>
                  <button className="sign-up-btn">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
