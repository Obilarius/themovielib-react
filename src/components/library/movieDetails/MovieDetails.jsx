import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import Loader from "../../layout/Loader";
import "./MovieDetails.scss";
import MovieDetailsHeader from "./MovieDetailsHeader";

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

    // const releaseYear = `(${movie.release_date.split("-")[0]})`;

    return (
      <div className="movie-details">
        <MovieDetailsHeader movie={movie} />
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
