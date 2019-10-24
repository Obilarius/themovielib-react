import React from "react";
import { Card } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./PosterMovieCard.css";

function PopularMovieCard() {
  const y = Math.floor(Math.random() * 100);
  const srcPoster = "https://picsum.photos/" + (y + 400) + "/600";
  const percentage = y;

  let circlePathStroke = "gold";
  if (percentage <= 30) circlePathStroke = "tomato";
  else if (percentage >= 60) circlePathStroke = "limegreen";

  return (
    <Card className="bg-dark tmlib-color-darker movie-card">
      {/* <Card.Img src={srcPoster} alt="Card image" /> */}
      <div
        className="card-poster"
        style={{ backgroundImage: "url('" + srcPoster + "')" }}
      ></div>

      <Card.ImgOverlay className="text">
        <div>
          <Card.Title>Card title</Card.Title>
          <Card.Text>14.07.2019</Card.Text>
        </div>
      </Card.ImgOverlay>
      <Card.ImgOverlay>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          background="true"
          styles={{
            path: {
              stroke: circlePathStroke,
              strokeLinecap: "butt"
            },
            trail: {
              stroke: "rgba(0,0,0,0.3)",
              strokeLinecap: "butt"
            },
            // Customize the text
            text: {
              fill: "var(--theme-light)",
              fontSize: "35px",
              fontWeight: "bold"
            },
            background: {
              fill: "rgba(0,0,0,0.2)"
            }
          }}
        />
      </Card.ImgOverlay>
    </Card>
    // <Card className="my-3 tmlib-color-light">
    //   <div
    //     className="card-background"
    //     style={{
    //       backgroundImage: "url('https://picsum.photos/500/" + y + "')"
    //     }}
    //   ></div>
    //   <div className="card-wrapper">
    //     <img src={srcPoster} alt="" className="poster" />
    //     <div className="ml-3">
    //       <Card.Title>Movie Title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This content is a little bit longer.
    //       </Card.Text>
    //       <Card.Text>Last updated 3 mins ago</Card.Text>
    //     </div>
    //   </div>
    // </Card>
  );
}

export default PopularMovieCard;
