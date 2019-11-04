import React from "react";
import PropTypes from "prop-types";

const StarRating = props => {
  const { rating } = props;

  const stars = {
    1: <i className="fas fa-star" />,
    2: <i className="fas fa-star" />,
    3: <i className="fas fa-star" />,
    4: <i className="fas fa-star" />,
    5: <i className="fas fa-star" />
  };

  return <div>{rating}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default StarRating;
