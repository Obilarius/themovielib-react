/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { Component } from "react";
import "./Searchfield.scss";

class Searchfield extends Component {
  state = {
    searchText: ""
  };

  handleChange = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  handleDelete = () => {
    this.setState({
      searchText: ""
    });
  };

  render() {
    const { searchText } = this.state;

    return (
      <div className="searchfield">
        <div className="container ">
          <i className="fad fa-search" />
          <input
            type="text"
            value={searchText}
            onChange={this.handleChange}
            placeholder="Search..."
          />
          <i className="far fa-times" onClick={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default Searchfield;
