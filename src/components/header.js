import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <section>
      <Navbar />
      {/* <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <Logo height="90px" width="100px" alt="Search My Movie" />
    </a>

    <a
      role="button"
      className={
        navBarToggle ? "navbar-burger burger is-active" : "navbar-burger burger"
      }
      onClick={() => setnavBarToggle(!navBarToggle)}
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      href="#"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div
    id="navbarBasicExample"
    className={navBarToggle ? "navbar-menu is-active" : "navbar-menu"}
  >
    <div className="navbar-start">
      <a className="navbar-item" href="/">
        About
      </a>

      <a
        className="navbar-item"
        href="https://github.com/cpro95/search-my-movie"
      >
        Github
      </a>
    </div>
  </div>
    </nav> */}
      <section className="hero is-info">
        <div className="hero-head" />
        <div className="hero-body">
          <h1 className="title">My Movies</h1>
          <h2 className="subtitle">search with names......</h2>
        </div>
      </section>
    </section>
  );
};

export default Header;
