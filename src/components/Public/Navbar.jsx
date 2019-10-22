import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <nav className="navbar navbar-expand-lg tmlib-bg-info navbar-dark">
            <div className="container">
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#mainNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="mainNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="navbar-brand" to="/">
                      TheMovieLib
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Films
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      TV-Shows
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      People
                    </Link>
                  </li>
                </ul>

                <span>
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <LoginModal />
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Register
                      </Link>
                    </li>
                  </ul>
                </span>

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
        </Router>

        {/* <Login
          show={this.state.showLogin}
          setShow={this.handleLoginSetShow}
          handleClose={() => this.setState({ showLogin: false })}
        /> */}
      </React.Fragment>
    );
  }
}
