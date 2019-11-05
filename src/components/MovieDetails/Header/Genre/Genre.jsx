import React from "react";
import "./Genre.scss";

const Genre = props => {
  const { genres } = props;

  return (
    <div className="genre-wrapper">
      {genres.map(genre => {
        return <div key={genre.id}>{genre.name}</div>;
      })}
      {genres.map(genre => {
        return <div key={genre.id}>{genre.name}</div>;
      })}
    </div>
  );
};

export default Genre;
