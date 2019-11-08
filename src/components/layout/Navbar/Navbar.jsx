import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";
import SignedInLinks from "./LinkLists/SignedInLinks";
// import SignedOutLinks from "./SignedOutLinks";
// import Searchfield from "./Searchfield";

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
            <FontAwesomeIcon icon={["fad", "film"]} />
            TheMovieLib
          </Link>
          <div className="burger" onClick={handleClickHamburger}>
            <FontAwesomeIcon icon={["fad", "bars"]} />
          </div>
        </div>
      </nav>

      {/* <Searchfield /> */}

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
