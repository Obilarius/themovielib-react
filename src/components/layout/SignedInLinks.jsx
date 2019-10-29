import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";

function SignedInLinks() {
  return (
    <>
      <NavLink className="nav-link" to="/movies">
        Watchlist
      </NavLink>
      <NavLink className="nav-link" to="/tvshows">
        Diary
      </NavLink>
      <NavLink className="nav-link" to="/people">
        Library
      </NavLink>
      <Avatar />
    </>
  );
}

export default SignedInLinks;
