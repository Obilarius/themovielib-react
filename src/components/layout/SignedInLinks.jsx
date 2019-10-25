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
            home
          </Link>
          <Link className="dropdown-item" to="/">
            profile
          </Link>
          <Link className="dropdown-item" to="/">
            diary
          </Link>
          <Link className="dropdown-item" to="/">
            watchlist
          </Link>
          <Link className="dropdown-item" to="/">
            library
          </Link>
          <NavDropdown.Divider />
          <Link className="dropdown-item" to="/">
            settings
          </Link>
          <Link className="dropdown-item" to="/">
            sign out
          </Link>
        </NavDropdown>
      </Nav>
    </React.Fragment>
  );
}

export default SignedInLinks;
