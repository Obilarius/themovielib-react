import React from "react";
import PropTypes from "prop-types";
import "./MovieDetailsHeader.scss";
import Rating from "./Rating/Rating";
import Genre from "./Genre/Genre";

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

  const getUrls = () => {
    const retObj = {};
    const mediumDevice = window.matchMedia("(min-width: 768px)");
    if (mediumDevice.matches) {
      retObj.backdrop = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
      retObj.poster = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
    } else {
      retObj.backdrop = `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`;
      retObj.poster = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
    }
    return retObj;
  };

  const urls = getUrls();
  const backdropStyle = { backgroundImage: `url(${urls.backdrop})` };

  return (
    <section className="movie-details-header">
      <div className="backdrop" style={backdropStyle} />
      <div className="overlay" />
      <div className="container movie-information-row">
        <img src={urls.poster} alt="" className="poster" />
        <div>
          <div className="title-row">{movie.title}</div>
          <Rating tmdbRating={movie.vote_average} ownRating={4.5} />
          <Genre genres={movie.genres} />
        </div>
      </div>
    </section>
  );
};

MovieDetailsHeader.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      })
    ).isRequired
  }).isRequired
};

export default MovieDetailsHeader;
