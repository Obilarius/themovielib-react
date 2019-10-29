import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
  return (
    <React.Fragment>
      <Nav>
        <NavLink className="nav-link" to="/login">
          login
        </NavLink>
        <NavLink className="nav-link" to="/signup">
          sign up
        </NavLink>
      </Nav>
    </React.Fragment>
  );
}

export default SignedOutLinks;
