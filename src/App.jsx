import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./components/sites/Home/Home";
import Library from "./components/sites/Library/Library";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute exact path="/library" component={Library} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
