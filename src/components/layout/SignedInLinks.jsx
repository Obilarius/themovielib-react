import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLinks() {
  return (
    <React.Fragment>
      <ul className="navbar-nav  mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Diary
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Library
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Watchlist
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item btn-username">
          <NavLink className="nav-link" to="/">
            SW
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/">
            SignIn
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            SignUp
          </NavLink>
        </li> */}
      </ul>
    </React.Fragment>
  );
}

export default SignedInLinks;
