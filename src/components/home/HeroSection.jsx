/* eslint-disable global-require */
import React, { Component } from "react";
// import axios from "./node_modules/axios";
import "./HeroSection.scss";
// import backdrop from "../../assets/backdrops/fI4IM5xb94b3FWYpeMfY7orB3Gn.jpg";

class HeroSection extends Component {
  componentDidMount = () => {
    // axios
    //   .get("https://themovielib-api.herokuapp.com/tmdb/", {
    //     params: {
    //       endpoint: "movie/popular",
    //       param: ["language=de-de"]
    //     }
    //   })
    //   .then(response => {
    //     this.setState({ movies: response.data.results });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  render() {
    // const img_url = movies[0] && "https://image.tmdb.org/t/p/w1280" + movies[0].backdrop_path;
    // const backdrop = require("img/backdrops/fI4IM5xb94b3FWYpeMfY7orB3Gn.jpg");

    const heroIndex = Math.floor(Math.random() * 4) + 1;

    return (
      <section className="hero">
        <div
          className="hero-img"
          style={{
            backgroundImage: `url(./img/backdrops/${heroIndex}.jpg)`
          }}
        />
        <div className="hero-text">
          <h1 className="header">TheMovieLib</h1>
          <p className="lead">A guiding light for the less enlightened...</p>
        </div>
      </section>
    );
  }
}

export default HeroSection;
