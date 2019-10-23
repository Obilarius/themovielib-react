import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function PopularMovieCard() {
  const y = Math.floor(Math.random() * 30) + 300;
  const srcPoster = "https://picsum.photos/" + y + "/500";

  return (
    <Card
      className="my-3 tmlib-color-light"
      style={{
        backgroundRepeat: "no-repeat",
        background:
          "url('https://picsum.photos/500/" + y + "'), var(--theme-info)",
        backgroundSize: "cover"
      }}
    >
      <img src={srcPoster} alt="" className="poster" />
      <div className="ml-3">
        <Card.Title>Movie Title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </div>
    </Card>
  );
}

export default PopularMovieCard;
