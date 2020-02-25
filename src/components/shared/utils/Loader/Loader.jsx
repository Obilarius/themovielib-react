import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div>
        <FontAwesomeIcon
          icon={["fad", "spinner-third"]}
          spin
          inverse
          size="4x"
          color="green"
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={["fad", "popcorn"]}
          inverse
          size="2x"
          color="green"
        />
      </div>
    </div>
  );
};

export default Loader;
