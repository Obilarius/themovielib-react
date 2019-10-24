import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const MainNavbar = () => {
  return (
    <Navbar className="tmlib-bg-info navbar-dark" expand="lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Brand
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-link" to="/tvshows">
              TV-Shows
            </NavLink>
            <NavLink className="nav-link" to="/people">
              People
            </NavLink>
          </Nav>
          <SignedOutLinks />
          <SignedInLinks />
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MainNavbar;
