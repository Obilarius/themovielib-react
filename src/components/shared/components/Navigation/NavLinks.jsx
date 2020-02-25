import React from "react";
import "./NavLinks.scss";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/library">Library</NavLink>
      </li>
      <li>
        <NavLink to="/library/new">Add LibMovie</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Auth</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
