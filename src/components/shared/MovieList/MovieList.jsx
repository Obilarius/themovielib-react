import React, { useEffect, useState, useRef, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroller";

import "./MovieList.scss";
import Axios from "axios";
import MovieCard from "./MovieCard";
import { forwardRef } from "react";

const MovieList = ({ url }) => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  // Referenz auf das letzte angezeigte Element.
  // Falls das sichtbar wird wird die Page um 1 erhöht
  const observer = useRef();
  const lastMovieElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prePage => prePage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setLoading(true);
    Axios.get(`https://themovielib-api.herokuapp.com/movie?page=${page}`).then(
      res => {
        setMovies([...movies, ...res.data.results]);
        setHasMore(res.data.next_page != null);
        setLoading(false);
      }
    );
  }, [page]);

  return (
    <div className="container">
      <div className="movie-list">
        {movies.map((movie, index) => {
          if (movies.length === index + 1)
            return (
              <MovieCard
                key={movie.tmdb_id}
                movie={movie}
                innerRef={lastMovieElementRef}
              />
            );
          return <MovieCard key={movie.tmdb_id} movie={movie} />;
        })}
        <div>{loading && "Loading..."}</div>
      </div>
    </div>
  );
};

export default MovieList;
