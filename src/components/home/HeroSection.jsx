import React, { Component } from "./node_modules/react";
// import axios from "./node_modules/axios";
import "./HeroSection.css";

class HeroSection extends Component {
  state = {
    movies: []
  };

  componentDidMount = () => {
    // axios
    //   .get("http://localhost:4000/tmdb/", {
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
    // const { movies } = this.state;
    // const img_url = movies[0] && "https://image.tmdb.org/t/p/w1280" + movies[0].backdrop_path;

    return (
      <div
        className="jumbotron jumbotron-fluid tmlib-bg-info text-white text-center"
        style={{ padding: "0px" }}
      >
        <div className="container">
          <div
            className="hero-img"
            style={
              {
                // backgroundImage: "url(" + img_url + ")"
              }
            }
          ></div>
          <div className="hero-text">
            <h1 className="display-1">Placeholder</h1>
            <p className="lead">A guiding light for the less enlightened...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroSection;
