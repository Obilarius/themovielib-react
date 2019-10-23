import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SignedInLinks from "./SignedInLinks";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg tmlib-bg-info navbar-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/">
                TheMovieLib
              </Link>
            </li>
          </ul>
          <SignedInLinks />

          {/* <form className="form-inline my-2 my-lg-0">
            <input
              type="search"
              placeholder="Search"
              className="form-control mr-sm-2"
            />
            <button className="btn tmlib-btn-info" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
