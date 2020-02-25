/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GoToTop = props => {
  const { scrollStepInPx, delayInMs } = props;

  const style = {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    backgroundColor: "#51C8A4",
    width: "3rem",
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    border: "0",
    zIndex: 20,
    cursor: "pointer"
  };

  let intervalId = 0;

  const scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    intervalId = setInterval(scrollStep, delayInMs);
  };

  return (
    <div style={style} onClick={scrollToTop}>
      <FontAwesomeIcon icon={["fad", "chevron-up"]} size="2x" />
    </div>
  );
};

GoToTop.propTypes = {
  scrollStepInPx: PropTypes.number,
  delayInMs: PropTypes.number
};

GoToTop.defaultProps = {
  scrollStepInPx: 50,
  delayInMs: 5
};

export default GoToTop;
