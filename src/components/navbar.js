import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <ul className="nav">
        <Link className="nav-link" to={'/'}>
          Home
        </Link>
        <li className="nav-item">
          <Link className="nav-link" to={'/about'}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="http://github.com/cpro95/search-my-movie"
          >
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
