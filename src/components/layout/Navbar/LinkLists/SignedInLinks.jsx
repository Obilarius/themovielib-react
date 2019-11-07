import React from "react";
import { NavLink } from "react-router-dom";

function SignedInLinks() {
  return (
    <>
      <NavLink className="nav-link" to="/watchlist">
        Watchlist
      </NavLink>
      <NavLink className="nav-link" to="/diary">
        Diary
      </NavLink>
      <NavLink className="nav-link" to="/lib">
        Library
      </NavLink>
      <NavLink className="nav-link avatar" to="/user">
        <div />
      </NavLink>
    </>
  );
}

export default SignedInLinks;
