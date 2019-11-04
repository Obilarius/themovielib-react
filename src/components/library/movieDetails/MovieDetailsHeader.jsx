import React from "react";
import "./MovieDetailsHeader.scss";
import Rating from "./Rating";

//     <section className="movie-details-header">
//       <div className="backdrop" style={backdropStyle} />
//       {/* <div className="container">
//         <div className="movie-info">
//           <img className="poster" src={poster} alt="{movie.title}" />
//           <div className="title-wrapper">
//             <span className="title">{movie.title}</span>
//             <span className="release">{releaseYear}</span>
//           </div>
//           <div className="content">
//             <p className="overview">{movie.overview}</p>
//           </div>
//         </div>
//       </div> */}
//     </section>

const MovieDetailsHeader = props => {
  const { movie } = props;

  const mediumDevice = window.matchMedia("(min-width: 768px)");
  let backdrop;
  let poster;
  if (mediumDevice.matches) {
    backdrop = `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`;
    poster = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
  } else {
    backdrop = `url(https://image.tmdb.org/t/p/w780${movie.backdrop_path})`;
    poster = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
  }
  const backdropStyle = { backgroundImage: backdrop };

  console.log(movie);

  return (
    <section className="movie-details-header">
      <div className="backdrop" style={backdropStyle} />
      <div className="container movie-information-row">
        <img src={poster} alt="" className="poster" />
        <div>
          <div className="title-row">{movie.title}</div>
          <div className="ratings-row">
            <Rating tmdbRating={movie.vote_average} ownRating="4.5" />
          </div>
          <div className="genre-row">Genre</div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsHeader;
