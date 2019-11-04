import React from "react";
import CircularProgressbar from "../../layout/CircularProgressbar";
import StarRating from "./StarRating";

const Rating = props => {
  const { ownRating, tmdbRating } = props;

  // TODO: Get Own Rating from Database

  const wrapperStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto",
    alignItems: "center"
  };
  const tmdbStyle = {
    width: "40px",
    marginRight: "10px"
  };
  const ownStyle = {};
  const labelStyle = {
    fontSize: "0.6em",
    marginTop: "3px"
  };

  return (
    <div className="rating-wrapper" style={wrapperStyle}>
      <div className="tmdb-rating" style={tmdbStyle}>
        <CircularProgressbar percentage={tmdbRating * 10} />
      </div>
      <div className="own-rating" style={ownStyle}>
        <StarRating rating={ownRating} />
      </div>
      <div style={labelStyle}>TMDB Rating</div>
      <div style={labelStyle}>Your Rating</div>
    </div>
  );
};

export default Rating;
