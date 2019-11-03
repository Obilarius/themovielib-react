import React from "react";

const Loader = () => {
  const loaderStyle = {
    width: "100%",
    display: "grid",
    justifyContent: "center"
  };

  return (
    <div className="loader" style={loaderStyle}>
      <span className="fa-stack fa-2x">
        <i className="fad fa-spinner-third fa-spin fa-stack-2x fa-inverse" />
        <i className="fad fa-popcorn fa-stack-1x fa-inverse" />
      </span>
    </div>
  );
};

export default Loader;
