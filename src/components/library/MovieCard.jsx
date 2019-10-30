import React from "react";
import PropTypes from "prop-types";
import CircularProgressbar from "../layout/CircularProgressbar";
import "./MovieCard.scss";

function MovieCard(props) {
  const { movie } = props;
  const POSTER_URL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="movie-card active">
      <img src={POSTER_URL} alt="poster" />
      <div className="tmdb-percent">
        <CircularProgressbar percentage={movie.vote_average * 10} />
      </div>
      <div className="overlay">
        <div className="inner">{movie.title}</div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  type: PropTypes.string,
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number
  }).isRequired
};

MovieCard.defaultProps = {
  type: "Poster"
};

export default MovieCard;
