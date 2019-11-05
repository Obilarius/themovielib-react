import React from "react";

const Genre = props => {
  const { genres } = props;

  const genreStyle = {
    fontSize: ".5em",
    padding: "5px 10px",
    background: "#51C8A4",
    color: "#193d31",
    borderRadius: "12px",
    marginRight: "5px"
  };

  const wrapperStyle = {
    display: "flex",
    justifyContent: "space-between"
  };

  return (
    <div style={wrapperStyle}>
      {genres.map(genre => {
        return (
          <div key={genre.id} style={genreStyle}>
            {genre.name}
          </div>
        );
      })}
      {genres.map(genre => {
        return (
          <div key={genre.id} style={genreStyle}>
            {genre.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genre;
