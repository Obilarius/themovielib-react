import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CircularRating from "../UIElements/CircularRating/CircularRating";

const MovieCard = ({ movie, innerRef }) => {
  const date = movie.release_date.split("T")[0];

  return (
    <div
      className="movie-card"
      ref={innerRef}
      onClick={() => console.log(movie)}
    >
      {movie.poster_path && (
        <LazyLoadImage
          effect="blur"
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        />
      )}
      <div className="overlay">
        <div className="tmdb-percent">
          <CircularRating percentage={movie.vote_average * 10} />
        </div>
        <div className="text">
          <div className="title">{movie.title}</div>
          <div className="date">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
