import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";

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
      <Avatar />
    </>
  );
}

export default SignedInLinks;
