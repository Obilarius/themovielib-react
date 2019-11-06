import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Genre.scss";

const Genre = props => {
  const { genres } = props;

  return (
    <div className="genre-wrapper">
      {genres.map(genre => {
        return (
          <Link to={`/genre/${encodeURI(genre.name)}`} key={genre.id}>
            {genre.name}
          </Link>
        );
      })}
    </div>
  );
};

Genre.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Genre;
