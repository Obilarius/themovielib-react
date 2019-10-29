import React from "react";
import { NavLink } from "react-router-dom";

function SignedOutLinks() {
  return (
    <>
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
      <NavLink className="nav-link" to="/register">
        Register
      </NavLink>
    </>
  );
}

export default SignedOutLinks;
