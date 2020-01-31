import React from "react";
import PropTypes from "prop-types";
import "flag-icon-css/css/flag-icon.min.css";

const FlagIcon = props => {
  const { iso } = props;
  return <span className={`flag-icon flag-icon-${iso.toLowerCase()}`} />;
};

FlagIcon.propTypes = {
  iso: PropTypes.string.isRequired
};

export default FlagIcon;
