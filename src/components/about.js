import React from "react";
import Navbar from "./navbar";

const About = () => {
  const heroStyle = {
    opacity: "0.95",
    background: "#499bea",
  };

  return (
    <section>
      <Navbar />
      <div
        className="jumbotron jumbotron-fluid"
        style={heroStyle}
      >
        <div className="container">
          <h1 className="display-4 text-white">Search My Movie</h1>
          <p className="lead text-white">out of Kodi DB</p>
          <p className="lead text-white">Made by ReactJS, Bootstrap CSS</p>
        </div>
      </div>
      
    </section>
  );
};

export default About;
