import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="level">
      <div className="level-left">
        <div className="level-item">
          <a className="navbar-item" href="/">
            <Logo height="90px" width="100px" alt="Search My Movie" />
          </a>
        </div>
        <div className="level-item">
          <Link to={'/about'}>About</Link>
        </div>
        <div className="level-item">
          <a href="https://github.com/cpro95/search-my-movie">Github</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
