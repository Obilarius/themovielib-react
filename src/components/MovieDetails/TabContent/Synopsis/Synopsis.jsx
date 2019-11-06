import React from "react";
import PropTypes from "prop-types";
import "./Synopsis.scss";

const Synopsis = props => {
  const { text } = props;
  return (
    <section className="container synopsis-wrapper">
      <h2>Overview</h2>
      <p>{text}</p>
    </section>
  );
};

Synopsis.propTypes = {
  text: PropTypes.string.isRequired
};

export default Synopsis;
