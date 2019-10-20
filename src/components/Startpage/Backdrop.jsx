import React, { Component } from "react";
import axios from "axios";
import "./Backdrop.css";

class Backdrop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/tmdb/", {
        params: {
          endpoint: "movie/popular",
          param: ["language=de-de"]
        }
      })
      .then(response => {
        this.setState({ movies: response.data.results });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.state.movies.length === 0) return <div></div>;

    var backdropImageStyle = {
      backgroundImage:
        "url(https://image.tmdb.org/t/p/w1280" +
        this.state.movies[0].backdrop_path +
        ")",
      backgroundPosition: "center 0px"
    };

    return (
      <div className="backdrop-container">
        <div id="backdrop" className="backdrop-wrapper">
          <div
            className="backdropimage js-backdrop-image"
            style={backdropImageStyle}
          ></div>
          <div className="backdropmask js-backdrop-fade"></div>
        </div>
      </div>
    );
  }
}

export default Backdrop;
