import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Searchfield from "../layout/Searchfield";
import Loader from "../../utils/Loader/Loader";
import "./Library.scss";
import GoToTop from "../../utils/GoToTop/GoToTop";

class Library extends Component {
  state = {
    searchTerm: "",
    movies: [],
    loadMore: false,
    page: 1,
    totalPages: null
  };

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
    this.loadMovies(1);
  }

  handleScroll = () => {
    const { loadMore, page } = this.state;
    const offset = 1.2;
    const wrappedElement = document.getElementById("library");
    if (wrappedElement === null) return;

    const bottom =
      window.innerHeight * offset >=
      wrappedElement.getBoundingClientRect().bottom;
    if (bottom && !loadMore) {
      this.setState({ loadMore: true, page: page + 1 });
      this.loadMovies(page + 1);
    }
  };

  loadMovies = page => {
    const { movies, totalPages } = this.state;

    if (totalPages != null && totalPages < page) return;

    const API_LINK = `https://themovielib-api.herokuapp.com/lib?page=${page}`;

    axios.get(API_LINK).then(res => {
      const newMovies = res.data.results;
      const newTotalPages = res.data.total_pages;
      this.setState({
        movies: [...movies, ...newMovies],
        totalPages: newTotalPages,
        loadMore: false
      });
    });
  };

  handleSearchTermChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearchTermDelete = () => {
    this.setState({ searchTerm: "" });
  };

  render() {
    const { movies, searchTerm } = this.state;

    let movieList = <Loader />;

    if (movies.lenght !== 0) {
      movieList = (
        <div className="poster-grid">
          {movies.map(movie => {
            return (
              // eslint-disable-next-line no-underscore-dangle
              <MovieCard type="Poster" movie={movie} key={movie._id} />
            );
          })}
        </div>
      );
    }

    return (
      <>
        <Searchfield
          handleChange={this.handleSearchTermChange}
          handleDelete={this.handleSearchTermDelete}
          value={searchTerm}
        />
        <GoToTop />
        <div className="container">
          <div className="library" id="library">
            <button type="button">
              <i className="fad fa-plus" />
              <span>New Movie</span>
              <i className="fad fa-film fa-lg" />
            </button>
            {movieList}
          </div>
        </div>
      </>
    );
  }
}

export default Library;
