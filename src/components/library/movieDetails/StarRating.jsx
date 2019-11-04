import React from "react";
import PropTypes from "prop-types";

const StarRating = props => {
  const { rating } = props;

  let stars;

  for (let i = 0; i < Math.floor(rating); i + 1) {
    stars += <i className="fas fa-star full" />;
  }

  return <div>Stars</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default StarRating;
