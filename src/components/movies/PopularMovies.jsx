import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PosterMovieCard from "./PosterMovieCard";

function PopularMovies() {
  const rows = 5;
  const cols = 4;

  let cardRows = [];
  for (let row = 0; row < rows; row++) {
    let cards = [];

    for (let col = 0; col < cols; col++) {
      cards.push(
        <Col className="md" key={col}>
          <PosterMovieCard />
        </Col>
      );
    }

    cardRows.push(
      <Row className="my-4" key={row}>
        {cards}
      </Row>
    );
  }

  return (
    <Container className="popular-movies">
      Beliebte Filme
      {cardRows}
    </Container>
  );
}

export default PopularMovies;
