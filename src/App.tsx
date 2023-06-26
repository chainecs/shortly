import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import About from "./components/About";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import LinkBar from "./components/LinkBar";
import Nav from "./components/Nav";
import Boost from "./components/Boost";

const flexWrap: Object = {
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "space-between",
};

function App() {
  return (
    <>
      <Nav />
      <div style={flexWrap}>
        <Cover />
        <div style={{ backgroundColor: "#f3f3f3" }}>
          <LinkBar />
          <About />
          <Card />
          <Boost />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
