/* eslint-disable react/prop-types */
import React, { Component } from "react";
import AuthService from "./AuthService";

export default (AuthComponent) => {
  return class AuthWrapped extends Component {
    constructor(props) {
      super(props);
      const { history } = this.props;

      this.state = {
        user: null
      };

      if (!AuthService.loggedIn()) {
        history.replace("/login");
      } else {
        try {
          const profile = AuthService.getProfile();
          this.setState({
            user: profile
          });
        } catch (err) {
          AuthService.logout();
          history.replace("/login");
        }
      }
    }

    render() {
      if (this.state.user) {
          return (
              <AuthComponent history={this.props.history} user={this.state.user} />
          )
      }
      else {
          return null
      }
  };
}
