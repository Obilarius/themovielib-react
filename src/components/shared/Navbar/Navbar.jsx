import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="container">
        <Link className="navbar__brand" to="/">
          <FontAwesomeIcon icon={["fad", "film"]} />
          TMLIB
        </Link>
        <div className="navbar__linklist">
          <NavLink className="nav-link" to="/watchlist">
            Watchlist
          </NavLink>
          <NavLink className="nav-link" to="/diary">
            Diary
          </NavLink>
          <NavLink className="nav-link" to="/library">
            Library
          </NavLink>
          <NavLink className="avatar" to="/user">
            <div />
          </NavLink>
          {/* <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
        <NavLink className="nav-link" to="/register">
          Register
        </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
