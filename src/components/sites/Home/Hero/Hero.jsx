import React, { useEffect, useState } from "react";
import "./Hero.scss";
import Axios from "axios";

const Hero = () => {
  const [backdrop, setBackdrop] = useState("");

  useEffect(() => {
    Axios.get("/tmdb/", {
      params: {
        endpoint: "movie/popular",
        param: ["language=de-de"]
      }
    })
      .then(response => {
        const movies = response.data.results;
        const backdrops = [];
        const url = "https://image.tmdb.org/t/p/original";

        movies.forEach(movie => {
          if (movie.backdrop_path) backdrops.push(movie.backdrop_path);
        });

        const index = Math.floor(Math.random() * backdrops.length);
        setBackdrop(url + backdrops[index]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="hero">
      <div className="hero-image__wrapper">
        <div
          className="hero-image__image"
          style={{
            backgroundImage: `url(${backdrop})`
          }}
        />
        <div className="hero-image__overlay" />
      </div>

      <div className="hero__text">
        <h1 className="header">TheMovieLib</h1>
        <p className="lead">A guiding light for the less enlightened...</p>
      </div>
    </section>
  );
};

export default Hero;
