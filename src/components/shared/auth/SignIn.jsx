/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthService from "./AuthService";
import Loader from "../../utils/Loader/Loader";
import "./SignIn.scss";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    loading: false
  };

  componentDidMount = () => {
    const { history } = this.props;

    if (AuthService.loggedIn()) history.replace(`/`);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const { username, password } = this.state;
    const { history } = this.props;

    // const ApiLink = "https://themovielib-api.herokuapp.com/users/login";

    // const body = {
    //   username,
    //   password
    // };

    // axios.post(ApiLink, body).then(res => {
    //   if (res) {
    //     this.setState({ loading: false });
    //     Cookies.set("__session", res.data.token, { path: "/" });
    //     history.push(`/`);
    //   }
    // });

    AuthService.login(username, password)
      .then(() => {
        history.replace("/");
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    const { username, password, loading } = this.state;

    return (
      <div className="container">
        {loading && <Loader />}
        <div className="signIn">
          <div className="img">
            <FontAwesomeIcon icon={["fad", "user"]} />
          </div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">
              Username
              <input
                type="text"
                name="username"
                id="username"
                placeholder="type your username"
                value={username}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                placeholder="type your password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
            <Link className="forgot-password" to="/forgot">
              forgot password?
            </Link>
            <input className="submit" type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
