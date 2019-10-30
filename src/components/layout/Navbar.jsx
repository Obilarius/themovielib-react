import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import SignedInLinks from "./SignedInLinks";
// import SignedOutLinks from "./SignedOutLinks";
import Searchfield from "./Searchfield";

const Navbar = () => {
  const handleClickHamburger = () => {
    const linkList = document.querySelector(".navbar-wrapper .linklist");
    linkList.classList.toggle("open");
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="container">
          <Link className="brand" to="/">
            TheMovieLib
          </Link>
          <div className="burger" onClick={handleClickHamburger}>
            <i className="fad fa-bars" />
          </div>
        </div>
      </nav>
      <div className="searchfield">
        <div className="container ">
          <Searchfield />
        </div>
      </div>
      <div className="linklist">
        <div className="container">
          {/* <SignedOutLinks /> */}
          <SignedInLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
