import React from "react";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import MainNavbar from "./components/layout/Navbar";
// import Home from "./components/home/Home";
// import PopularMovies from "./components/movies/PopularMovies";
import Library from "./components/library/Library";

function App() {
  return (
    <Router>
      <MainNavbar />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/movies" component={PopularMovies} /> */}
        <Route exact path="/lib" component={Library} />
      </Switch>
    </Router>
  );
}

export default App;
