import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
  return (
    <React.Fragment>
      <Nav>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
      </Nav>
    </React.Fragment>
  );
}

export default SignedOutLinks;
