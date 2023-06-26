import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import "../css/Footer.css";
import logo from "../img/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-block">
          <div className="footer-section-1">
            <img src={logo} className="footer-logo" />
          </div>
          <div className="footer-section-234">
            <div className="footer-header">Features</div>
            <a href="/">Link Shortening</a>
            <br></br>
            <a href="/">Branded Links</a>
            <br></br>
            <a href="/">Analytics</a>
          </div>
          <div className="footer-section-234">
            <div className="footer-header">Resources</div>
            <a href="/">Blog</a>
            <br></br>
            <a href="/">Developers</a>
            <br></br>
            <a href="/">Support</a>
          </div>
          <div className="footer-section-234">
            <div className="footer-header">Company</div>
            <a href="/">About</a>
            <br></br>
            <a href="/">Our Team</a>
            <br></br>
            <a href="/">Careers</a>
            <br></br>
            <a href="/">Contact</a>
          </div>
          <div className="footer-section-5">
            <a href="#" className="footer-icon">
              <FaFacebookSquare />
              &nbsp;&nbsp;
            </a>
            <a href="#" className="footer-icon">
              <FaTwitter />
              &nbsp;&nbsp;
            </a>
            <a href="#" className="footer-icon">
              <BsPinterest />
              &nbsp;&nbsp;
            </a>
            <a href="#" className="footer-icon">
              <FaInstagram />
              &nbsp;&nbsp;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
