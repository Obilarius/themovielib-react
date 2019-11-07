import React from "react";
import PropTypes from "prop-types";
import "./Synopsis.scss";

const Synopsis = props => {
  const { text } = props;
  return (
    <section className="container">
      <div className="synopsis-wrapper">
        <h2>Overview</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

Synopsis.propTypes = {
  text: PropTypes.string.isRequired
};

export default Synopsis;
