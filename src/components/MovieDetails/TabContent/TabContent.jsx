import React from "react";
import PropTypes from "prop-types";
import Details from "./Details/Details";
import Cast from "./Cast/Cast";
import Synopsis from "./Synopsis/Synopsis";

const TabContent = props => {
  const { activeTab, movie } = props;
  switch (activeTab) {
    case 1:
      return <Details movie={movie} />;
    case 2:
      return <Cast movieId={movie.id} />;
    default:
      return <Synopsis text={movie.overview} />;
  }
};

TabContent.propTypes = {
  activeTab: PropTypes.number.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
  }).isRequired
};

export default TabContent;
