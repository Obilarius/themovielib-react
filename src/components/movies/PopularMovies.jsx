import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PopularMovieCard from "./PopularMovieCard";
import "./PopularMovie.css";

function PopularMovies() {
  return (
    <Container className="popular-movies my-3">
      <Row>
        <Col>
          <PopularMovieCard />
        </Col>
        <Col>
          <PopularMovieCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <PopularMovieCard />
        </Col>
        <Col>
          <PopularMovieCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <PopularMovieCard />
        </Col>
        <Col>
          <PopularMovieCard />
        </Col>
      </Row>
      <Row>
        <Col>
          <PopularMovieCard />
        </Col>
        <Col>
          <PopularMovieCard />
        </Col>
      </Row>
    </Container>
  );
}

export default PopularMovies;
