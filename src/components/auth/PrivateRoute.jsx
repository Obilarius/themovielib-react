import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "./AuthService";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = AuthService.loggedIn();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
