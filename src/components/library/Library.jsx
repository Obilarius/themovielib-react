import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import "./Library.scss";

class Library extends Component {
  state = {
    movies: [{}]
  };

  componentDidMount() {
    const API_LINK_DISCOVER =
      "https://api.themoviedb.org/3/discover/movie?api_key=285a3801961b83d5dedcb2b3ec252cdf&language=en-US&sort_by=popularity.desc&include_video=false&page=1";
    axios.get(API_LINK_DISCOVER).then(res => {
      const movies = res.data;
      this.setState({
        movies
      });
    });
  }

  render() {
    const { movies } = this.state;

    if (movies.results == null) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <div className="library">
          {movies.results.map(movie => {
            return <MovieCard type="Poster" movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Library;
