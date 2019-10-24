import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

function PopularMovies() {
  return (
    <Container className="popular-movies">
      Beliebte Filme
      <Row className="my-4">
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
      </Row>
      <Row className="my-4">
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
      </Row>
      <Row className="my-4">
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
      </Row>
      <Row className="my-4">
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
      </Row>
      <Row className="my-4">
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
        <Col md>
          <MovieCard />
        </Col>
      </Row>
    </Container>
  );
}

export default PopularMovies;
