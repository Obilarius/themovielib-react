import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Switch>
        <Route exact path="/" component={Home} />
      </Switch> */}
    </Router>
  );
}

export default App;
