import React, { Component } from "react";

class Ninjas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ninjas: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const lng = this.refs.lng.value;
    const lat = this.refs.lng.value;

    fetch(`http://localhost:4000/api/ninjas?lng=${lng}&lat=${lat}`).then(
      data => {
        console.log(data);
      }
    );
  };

  render() {
    const { ninjas } = this.state;

    return (
      <div id="ninja-container">
        <form id="search" onSubmit={this.handleSubmit}>
          <label htmlFor="">Enter your latitude:</label>
          <input type="text" ref="lat" placeholder="latitude" required />
          <label htmlFor="">Enter your longitude:</label>
          <input type="text" ref="lng" placeholder="longitude" required />
          <input type="submit" value="Find Ninjas" />
        </form>
        <ul>
          {ninjas.map(ninja => (
            <li key={ninja._id}>
              <span className={ninjas.obj.available}></span>
              <span className="name">{ninjas.obj.name}</span>
              <span className="rank">{ninjas.obj.rank}</span>
              <span className="dist">{Math.floor(ninja.dis / 1000)} km</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Ninjas;
