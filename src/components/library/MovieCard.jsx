import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";

function MovieCard(props) {
  const { movie } = props;
  return (
    <div
      className="movie-card"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`
      }}
    >
      {movie.title}
    </div>
  );
}

MovieCard.propTypes = {
  type: PropTypes.string,
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string
  }).isRequired
};

MovieCard.defaultProps = {
  type: "Poster"
};

export default MovieCard;
