import React, { useCallback, useReducer, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthService from "./AuthService";

import Input from "../shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../utils/validators";
import Button from "../shared/FormElements/Button";
import "./Login.scss";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      Object.keys(state.inputs).forEach(inputId => {
        if (inputId === action.payload.inputId) {
          formIsValid = formIsValid && action.payload.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      });

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.inputId]: {
            value: action.payload.value,
            isValid: action.payload.isValid
          }
        },
        isValid: formIsValid
      };

    default:
      return state;
  }
};

const Login = props => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      username: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: false
      }
    },
    isValid: false
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const { history } = props;
    if (AuthService.loggedIn()) history.replace(`/`);
  }, []);

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      payload: { value, isValid, inputId: id }
    });
  }, []);

  const submitHandler = event => {
    event.preventDefault();
    setIsLoading(true);

    const { history } = props;

    AuthService.login(
      formState.inputs.username.value,
      formState.inputs.password.value
    )
      .then(() => {
        history.replace("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={submitHandler}>
        <Input
          id="username"
          element="input"
          placeholder="type your username or email"
          label="Username or Email"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid username or email"
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          placeholder="type your password"
          label="Password"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter your password"
          onInput={inputHandler}
        />
        <Link className="forgot-password" to="/forgot">
          forgot password?
        </Link>
        <Button type="submit" disabled={!formState.isValid}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
