import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthService from "../../auth/AuthService";
import "./Navbar.scss";
import SignedInLinks from "./LinkLists/SignedInLinks";
import SignedOutLinks from "./LinkLists/SignedOutLinks";
// import Searchfield from "./Searchfield";

const Navbar = () => {
  const handleClickHamburger = () => {
    const linkList = document.querySelector(".navbar-wrapper .linklist");
    linkList.classList.toggle("open");
  };

  console.log("LoggedIN: ", AuthService.loggedIn());

  const linkList = AuthService.loggedIn() ? (
    <SignedInLinks />
  ) : (
    <SignedOutLinks />
  );

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="container">
          <Link className="brand" to="/">
            <FontAwesomeIcon icon={["fad", "film"]} />
            TEST
          </Link>
          <div className="burger" onClick={handleClickHamburger}>
            <FontAwesomeIcon icon={["fad", "bars"]} />
          </div>
        </div>
      </nav>

      {/* <Searchfield /> */}

      <div className="linklist">
        <div className="container">{linkList}</div>
      </div>
    </div>
  );
};

export default Navbar;
