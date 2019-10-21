import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Public/Navbar";
import Home from "./components/Sites/Home/Home";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
