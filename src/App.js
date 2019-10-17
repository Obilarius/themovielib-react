import React from "react";
import Ninjas from "./components/Ninjas";

function App() {
  return (
    <div>
      <h1 className="title">Ninjago - a Ninja REST API</h1>
      <div id="homepage">
        <h1>Hire a ninja in your area!</h1>
        <div id="ninjas">
          <Ninjas />
        </div>
      </div>
    </div>
  );
}

export default App;
