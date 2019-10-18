import React from "react";

function PopularMovieItem(props) {
  const { movie } = props;
  const img_url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie_block" style={{ display: "block" }}>
      <a href="">
        {movie.backdrop_path && (
          <img src={img_url + movie.backdrop_path} alt="" />
        )}
      </a>

      <span
        style={{
          position: "relative",
          color: "white",
          top: "-94px",
          left: "20px",
          display: "inline-block"
        }}
      >
        {movie.title}
      </span>
    </div>
  );
}

export default PopularMovieItem;
