import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg tmlib-bg-info navbar-dark">
        <div className="container">
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#mainNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Disabled
                </a>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
              <input
                type="search"
                placeholder="Search"
                className="form-control mr-sm-2"
              />
              <button className="btn tmlib-btn-info" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
