import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LazyLoad from "react-lazy-load";
// import Overdrive from "react-overdrive";
import CircularProgressbar from "../../../../utils/CircularProgressbar/CircularProgressbar";
import "./MovieCard.scss";

function MovieCard(props) {
  const { movie } = props;

  let POSTER_URL = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
  if (!window.matchMedia("(min-width: 768px)")) {
    POSTER_URL = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
  }

  const date = movie.release_date.split("-");

  return (
    <Link to={`/movie/${movie.tmdb_id}`} className="movie-card">
      <div className="content">
        <LazyLoad offsetVertical={300}>
          {/* <Overdrive id={`poster-${movie.id}`}> */}
          <img src={POSTER_URL} alt="poster" />
          {/* </Overdrive> */}
        </LazyLoad>
        <div className="tmdb-percent">
          <CircularProgressbar percentage={movie.tmdb_vote_average * 10} />
        </div>
        <div className="overlay">
          <div className="inner">
            <span className="title">{movie.title}</span>
            <span className="date">{`(${date[2]}-${date[1]}-${date[0]})`}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

MovieCard.propTypes = {
  // type: PropTypes.string,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    tmdb_id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    tmdb_vote_average: PropTypes.number,
    release_date: PropTypes.string
  }).isRequired
};

MovieCard.defaultProps = {
  // type: "Poster"
};

export default MovieCard;
