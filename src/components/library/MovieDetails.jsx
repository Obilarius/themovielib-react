import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import Loader from "../layout/Loader";
import "./MovieDetails.scss";

class MovieDetails extends Component {
  state = {
    movie: null
  };

  componentDidMount = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { id } = this.props.match.params;

    Axios.get("http://192.168.1.190:4000/tmdb/", {
      params: {
        endpoint: `movie/${id}`,
        param: ["language=de-de"]
      }
    })
      .then(res => {
        this.setState({ movie: res.data });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  render() {
    const { movie } = this.state;
    if (movie === null) return <Loader />;

    const mediumDevice = window.matchMedia("(min-width: 768px)");
    let backdrop = "";
    let poster = "";
    if (mediumDevice.matches) {
      backdrop = `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`;
      poster = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
    } else {
      backdrop = `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`;
      poster = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    }

    const releaseYear = `(${movie.release_date.split("-")[0]})`;

    return (
      <div className="movie-details">
        <div
          className="backdrop"
          style={{
            backgroundImage: backdrop
          }}
        />
        <div className="container">
          <div className="movie-info">
            <img className="poster" src={poster} alt="{movie.title}" />
            <div className="title-wrapper">
              <span className="title">{movie.title}</span>
              <span className="release">{releaseYear}</span>
            </div>
            <div className="content">
              <p className="overview">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default MovieDetails;
