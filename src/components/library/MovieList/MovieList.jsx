/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroller";
// import Loader from "../../../utils/Loader/Loader";
import MovieCard from "./MovieCard/MovieCard";
import "./MovieList.scss";

const MovieList = props => {
  const { movies, loadMore, hasMore } = props;

  const getMovieCards = () => {
    const movieCards = [];

    movies.map(movie => {
      movieCards.push(
        // eslint-disable-next-line no-underscore-dangle
        <MovieCard type="Poster" movie={movie} key={movie._id} />
      );
      return null;
    });

    return movieCards;
  };

  const moviesCards = getMovieCards();

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      // loader={<Loader key={0} />}
      className="movie-list"
    >
      <div className="poster-grid">{moviesCards}</div>
    </InfiniteScroll>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired
};

export default MovieList;
