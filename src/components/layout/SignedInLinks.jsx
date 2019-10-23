import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignedInLinks() {
  return (
    <React.Fragment>
      <Nav>
        <NavDropdown
          title={
            <img
              src="https://i.pravatar.cc/50"
              className="rounded-circle z-depth-0"
              alt="avatar_image"
              id="avatar-image"
            />
          }
          id="main-nav-dropdown"
        >
          <Link className="dropdown-item" to="/">
            Home
          </Link>
          <Link className="dropdown-item" to="/">
            Profile
          </Link>
          <Link className="dropdown-item" to="/">
            Diary
          </Link>
          <Link className="dropdown-item" to="/">
            Watchlist
          </Link>
          <Link className="dropdown-item" to="/">
            Library
          </Link>
          <NavDropdown.Divider />
          <Link className="dropdown-item" to="/">
            Settings
          </Link>
          <Link className="dropdown-item" to="/">
            Sign Out
          </Link>
        </NavDropdown>
      </Nav>
    </React.Fragment>
  );
}

export default SignedInLinks;
