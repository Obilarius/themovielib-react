import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthService from "./AuthService";

import Input from "../shared/FormElements/Input";
// import "./Login.scss";

const Login = () => {
  return (
    <div className="container">
      <Input
        element="input"
        placeholder="type your username or email"
        label="Username or Email"
      />
      <Input
        element="input"
        type="password"
        placeholder="type your password"
        label="Password"
      />
    </div>
  );
};

export default Login;
