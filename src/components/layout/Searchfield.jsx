/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Searchfield.scss";

const Searchfield = props => {
  const { value, handleDelete, handleChange } = props;
  return (
    <div className="searchfield">
      <div className="container ">
        <FontAwesomeIcon icon={["fad", "search"]} />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search..."
        />
        <FontAwesomeIcon icon={["far", "times"]} onClick={handleDelete} />
      </div>
    </div>
  );
};

Searchfield.propTypes = {
  value: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Searchfield;
