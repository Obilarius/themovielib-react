import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../layout/Navbar/Navbar";
import Home from "../home/Home";
import Library from "../library/Library";
import MovieDetails from "../MovieDetails/MovieDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/movies" component={PopularMovies} /> */}
        <Route exact path="/lib" component={Library} />
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
    </Router>
  );
}

export default App;
