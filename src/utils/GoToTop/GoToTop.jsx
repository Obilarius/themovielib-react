/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";

const GoToTop = props => {
  const { scrollStepInPx, delayInMs } = props;

  const style = {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    backgroundColor: "#51C8A4",
    width: "3rem",
    height: "3rem",
    display: "grid",
    justifyContent: "center",
    borderRadius: "50%",
    border: "0",
    zIndex: 20,
    cursor: "pointer"
  };

  const arrowStyle = {
    lineHeight: "3rem"
  };

  let intervalId = 0;
  // const scrollStepInPx = 50;
  // const delayInMs = 16;

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
      <i style={arrowStyle} className="fad fa-chevron-up fa-2x" />
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
