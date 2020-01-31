import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Library from "../library/Library";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Library} />
        <Route exact path="/lib" component={Library} />
      </Switch>
    </Router>
  );
}

export default App;
