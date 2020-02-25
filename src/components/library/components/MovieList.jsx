import React from "react";

import "./MovieList.css";
import Card from "../../shared/components/UIElements/Card";

const MovieList = props => {
  if (props.items.lenght === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Movies found</h2>
          <button type="button">Add Movie</button>
        </Card>
      </div>
    );
  }
};

export default MovieList;
