import React from "react";
import PropTypes from "prop-types";
import "./Backdrop.scss";

const Backdrop = props => {
  const { url } = props;
  const backdropStyle = { backgroundImage: `url(${url})` };

  return (
    <div className="backdrop-wrapper">
      <div className="backdrop" style={backdropStyle} />
      <div className="overlay" />
      <div className="border-top" />
    </div>
  );
};

Backdrop.propTypes = {
  url: PropTypes.string.isRequired
};

export default Backdrop;
