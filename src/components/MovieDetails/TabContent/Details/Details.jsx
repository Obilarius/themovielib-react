/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCountryFlag from "react-country-flag";
import "./Details.scss";

const Details = props => {
  const { movie } = props;

  const getStudios = () => {
    return (
      <>
        <div>Prod. Studios:</div>
        <div className="studios">
          {movie.production_companies.map(studio => {
            return (
              <>
                {/* <div>
                  {studio.logo_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w92${studio.logo_path}`}
                      alt="studiologo"
                    />
                  )}
                </div> */}
                <div>{studio.name}</div>
              </>
            );
          })}
        </div>
      </>
    );
  };

  const getCountries = () => {
    return (
      <>
        <div>Prod. Countries:</div>
        <div className="countries">
          {movie.production_countries.map(country => {
            return (
              <div key={country.iso_3166_1}>
                <ReactCountryFlag code={country.iso_3166_1.toLowerCase()} svg />
                <span>{country.name}</span>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const getBudget = () => {
    const budget = parseInt(movie.budget, 10).toLocaleString("de-de");
    return (
      <>
        <div>Budget:</div>
        <div className="butget">{budget}$</div>
      </>
    );
  };

  const getRevenue = () => {
    const revenue = parseInt(movie.revenue, 10).toLocaleString("de-de");
    return (
      <>
        <div>Revenue:</div>
        <div className="revenue">{revenue}$</div>
      </>
    );
  };

  const getCollection = () => {
    if (movie.belongs_to_collection != null)
      return (
        <>
          <div>Collection:</div>
          <div className="collection">
            {movie.belongs_to_collection.name}
            {movie.belongs_to_collection.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.belongs_to_collection.poster_path}`}
                alt=""
              />
            )}
          </div>
        </>
      );

    return null;
  };

  const getOriginalTitle = () => {
    return (
      <>
        <div>Original Title:</div>
        <div className="collection">{movie.original_title}</div>
      </>
    );
  };

  const getTrailer = () => {
    const trailer = movie.videos.results.find(video => {
      return video.type === "Trailer";
    });

    if (trailer == null) return null;

    return (
      <div className="trailer-wrapper">
        <div>Trailer:</div>
        <div className="trailer">
          <iframe
            title="trailer"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  };

  const getLinks = () => {
    // eslint-disable-next-line camelcase
    const { external_ids } = movie;
    return (
      <div className="links-wrapper">
        <div className="templates">
          <svg width="0" height="0">
            <radialGradient id="instaGradient" r="150%" cx="30%" cy="107%">
              <stop stopColor="#fdf497" offset="0" />
              <stop stopColor="#fdf497" offset="0.05" />
              <stop stopColor="#fd5949" offset="0.45" />
              <stop stopColor="#d6249f" offset="0.6" />
              <stop stopColor="#285AEB" offset="0.9" />
            </radialGradient>
          </svg>
        </div>
        <div className="inner">
          {external_ids.imdb_id && (
            <a href={`https://www.imdb.com/title/${external_ids.imdb_id}`}>
              <FontAwesomeIcon icon={["fab", "imdb"]} color="#F5C518" />
            </a>
          )}
          {external_ids.facebook_id && (
            <a href={`https://facebook.com/${external_ids.facebook_id}`}>
              <FontAwesomeIcon
                icon={["fab", "facebook-square"]}
                color="#4267B2"
              />
            </a>
          )}
          {external_ids.instagram_id && (
            <a href={`https://instagram.com/${external_ids.instagram_id}`}>
              <FontAwesomeIcon
                className="insta"
                icon={["fab", "instagram"]}
                color="url(#instaGradient)"
              />
            </a>
          )}
          {external_ids.twitter_id && (
            <a href={`https://twitter.com/${external_ids.twitter_id}`}>
              <FontAwesomeIcon
                icon={["fab", "twitter-square"]}
                color="#1DA1F2"
              />
            </a>
          )}
          {movie.homepage && (
            <a href={movie.homepage}>
              <FontAwesomeIcon icon={["far", "link"]} />
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="details-wrapper">
        {getLinks()}
        <div className="grid">
          {getOriginalTitle()}
          {getStudios()}
          {getCountries()}
          {getBudget()}
          {getRevenue()}
          {getCollection()}
        </div>
        {getTrailer()}
      </div>
    </div>
  );
};

Details.propTypes = {
  movie: PropTypes.shape({
    production_companies: PropTypes.array,
    production_countries: PropTypes.array,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    original_title: PropTypes.string,
    belongs_to_collection: PropTypes.object,
    videos: PropTypes.array,
    external_ids: PropTypes.array,
    homepage: PropTypes.string
  }).isRequired
};

export default Details;
