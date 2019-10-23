import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import PopularMovies from "./components/movies/PopularMovies";

function App() {
  return (
    <Router>
      <MainNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={PopularMovies} />
      </Switch>
    </Router>
  );
}

export default App;
