/* eslint-disable no-underscore-dangle */
import decode from "jwt-decode";
import Cookies from "js-cookie";

export default class AuthService {
  // Initializing important variables
  // constructor(domain) {
  // this.domain = domain || "https://themovielib-api.herokuapp.com"; // API server domain
  // }

  static domain = "https://themovielib-api.herokuapp.com";

  static login = (username, password) => {
    console.log(username, password);
    // Get a token from api server using the fetch api
    return this.fetch(`${this.domain}/users/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    }).then(res => {
      this.setToken(res.token); // Setting the token in cookie
      return Promise.resolve(res);
    });
  };

  static loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // Getting token from cookie
    return !!token && !this.isTokenExpired(token); // handwaiving here
  };

  static isTokenExpired = token => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  static setToken = token => {
    // Saves user token to localStorage
    // localStorage.setItem("id_token", idToken);
    Cookies.set("__session", token, { path: "/" });
  };

  static getToken = () => {
    // Retrieves the user token from localStorage
    // return localStorage.getItem("id_token");
    return Cookies.get("__session");
  };

  static logout = () => {
    // Clear user token and profile data from localStorage
    // localStorage.removeItem("id_token");
    Cookies.remove("__session");
  };

  static getProfile = () => {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken());
  };

  static fetch = (url, options) => {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers.Authorization = `Bearer ${this.getToken()}`;
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json());
  };

  static _checkStatus = response => {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  };
}
