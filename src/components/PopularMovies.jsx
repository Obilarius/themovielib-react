import React, { Component } from "react";
import axios from "axios";
import PopularMovieItem from "./PopularMovieItem";

import "./PopularMovies.css";

class PopularMovies extends Component {
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

    const { movies } = this.state;
    console.log(movies);

    return (
      <div className="row popularMovies">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <PopularMovieItem movie={movies[0]} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <PopularMovieItem movie={movies[1]} />
            </div>
            <div className="col-sm-6">
              <PopularMovieItem movie={movies[2]} />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-6">
              <PopularMovieItem movie={movies[3]} />
            </div>
            <div className="col-sm-6">
              <PopularMovieItem movie={movies[4]} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <PopularMovieItem movie={movies[5]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularMovies;
