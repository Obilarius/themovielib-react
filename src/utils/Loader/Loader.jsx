import React from "react";

const Loader = () => {
  const loaderWrapperStyle = {
    position: "absolute",
    background: "rgba(0,0,0,0.6)",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0"
  };
  const loaderStyle = {
    // width: "100%",
    // display: "grid",
    // justifyContent: "center"
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };

  return (
    <div className="loader" style={loaderWrapperStyle}>
      <span className="fa-stack fa-2x" style={loaderStyle}>
        <i className="fad fa-spinner-third fa-spin fa-stack-2x fa-inverse" />
        <i className="fad fa-popcorn fa-stack-1x fa-inverse" />
      </span>
    </div>
  );
};

export default Loader;
