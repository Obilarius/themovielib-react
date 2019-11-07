import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CircularProgressbar from "../../../utils/CircularProgressbar/CircularProgressbar";
import "./MovieCard.scss";

function MovieCard(props) {
  const { movie } = props;

  const POSTER_URL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const date = movie.release_date.split("-");

  return (
    <Link to={`/movie/${movie.tmdb_id}`} className="movie-card">
      <div className="content">
        <img src={POSTER_URL} alt="poster" />
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
    // <Link to={`/movie/${movie.tmdb_id}`}>
    //   <div className="movie-card">
    //     <div className="content">
    //       <img src={POSTER_URL} alt="poster" />
    //       <div className="tmdb-percent">
    //         <CircularProgressbar percentage={movie.tmdb_vote_average * 10} />
    //       </div>
    //       <div className="overlay">
    //         <div className="inner">
    //           <span className="title">{movie.title}</span>
    //           <span className="date">
    //             {`(${date[2]}-${date[1]}-${date[0]})`}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Link>
  );
}

MovieCard.propTypes = {
  // type: PropTypes.string,
  movie: PropTypes.shape({
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
