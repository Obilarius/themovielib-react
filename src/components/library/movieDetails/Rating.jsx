import React from "react";
import CircularProgressbar from "../../layout/CircularProgressbar";
// import StarRating from "./StarRating";
import StarRating from "react-rating";

const Rating = props => {
  const { ownRating, tmdbRating } = props;

  // TODO: Get Own Rating from Database

  const wrapperStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto",
    alignItems: "center",
    justifyItems: "center"
  };
  const tmdbStyle = {
    width: "40px"
  };
  const ownStyle = {
    color: "#FFB33A",
    fontSize: "1.2em"
  };
  const labelStyle = {
    fontSize: "0.6em",
    marginTop: "3px",
    color: "rgba(255,255,255,0.7)"
  };

  return (
    <div className="rating-wrapper" style={wrapperStyle}>
      <div className="tmdb-rating" style={tmdbStyle}>
        <CircularProgressbar percentage={tmdbRating * 10} />
      </div>
      <div className="own-rating" style={ownStyle}>
        <StarRating
          initialRating={ownRating}
          fractions="2"
          emptySymbol="fal fa-star"
          fullSymbol="fas fa-star"
        />
      </div>
      <div style={labelStyle}>TMDB Rating</div>
      <div style={labelStyle}>Your Rating</div>
    </div>
  );
};

export default Rating;
