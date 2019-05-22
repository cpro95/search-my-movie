import React from "react";
import Navbar from "./navbar";

const About = () => {
  return (
    <section>
      <Navbar />
      <section className="hero is-primary">
        <div className="hero-head" />
        <div className="hero-body">
          <h1 className="title">Search My Movies</h1>
          <h2 className="subtitle">with KODI Database</h2>
          <p>No backend server, just React with Bulma CSS</p>
        </div>
      </section>
    </section>
  );
};

export default About;
