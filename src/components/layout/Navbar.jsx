import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import SignedInLinks from "./SignedInLinks";
// import SignedOutLinks from "./SignedOutLinks";
import Searchfield from "./Searchfield";

const MainNavbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="container">
          <Link className="brand" to="/">
            TheMovieLib
          </Link>
          <div className="linklist">
            {/* <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-link" to="/tvshows">
              TV-Shows
            </NavLink>
            <NavLink className="nav-link" to="/people">
              People
            </NavLink> */}
            {/* <SignedOutLinks /> */}
            <SignedInLinks />
          </div>
        </div>
      </nav>
      <div className="searchfield">
        <div className="container ">
          <Searchfield />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
