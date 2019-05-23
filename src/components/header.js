import React from "react";
import Navbar from "./navbar";
import { ReactComponent as Logo } from "./logo.svg";

const Header = () => {
  const heroStyle = {
    opacity: "0.95",
    background: "#499bea",
    filter:
      'progid:DXImageTransform.Microsoft.gradient( startColorstr="#499bea", endColorstr="#798eea", GradientType=1'
  };

  return (
    <section>
      <Navbar />
      <div
        className="jumbotron jumbotron-fluid"
        style={heroStyle}
      >
        <div className="container">
          <Logo style={{ height: "90px", width: "120px" }} />
          <h1 className="display-4 text-white">Search My Movie</h1>
          <p className="lead text-white">out of Kodi DB</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
