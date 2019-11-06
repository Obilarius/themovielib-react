import React from "react";
import StarRating from "react-rating";
import PropTypes from "prop-types";
import CircularProgressbar from "../../../../utils/CircularProgressbar/CircularProgressbar";
import "./Rating.scss";

const Rating = props => {
  const { ownRating, tmdbRating } = props;

  return (
    <div className="rating-wrapper">
      <div className="tmdb-rating">
        <CircularProgressbar percentage={tmdbRating * 10} />
      </div>
      <div className="own-rating">
        <StarRating
          initialRating={ownRating}
          fractions="2"
          emptySymbol="fal fa-star"
          fullSymbol="fas fa-star"
        />
      </div>
      <div className="label">User Score</div>
      <div className="label">Your Rating</div>
    </div>
  );
};

Rating.propTypes = {
  ownRating: PropTypes.number.isRequired,
  tmdbRating: PropTypes.number.isRequired
};

export default Rating;