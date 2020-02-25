import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Searchfield from "../layout/Searchfield";
import "./Library.scss";
import GoToTop from "../../utils/GoToTop/GoToTop";
import MovieList from "./MovieList/MovieList";

class Library extends Component {
  state = {
    searchTerm: "",
    movies: [],
    hasMoreItems: true,
    nextPage: null
  };

  loadMovies = page => {
    const { movies, nextPage } = this.state;

    // if (totalPages != null && totalPages < page) return;

    let API_LINK = `https://themovielib-api.herokuapp.com/lib?page=`;

    if (nextPage != null) API_LINK += nextPage;
    else API_LINK += page;

    axios
      .get(API_LINK, {
        headers: { Authorization: `Bearer ` }
      })
      .then(res => {
        if (res) {
          const newMovies = res.data.results;

          this.setState({
            movies: [...movies, ...newMovies]
          });

          if (res.data.next_page) {
            this.setState({
              nextPage: res.data.next_page
            });
          } else {
            this.setState({
              hasMoreItems: false
            });
          }
        }
      });
  };

  handleSearchTermChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearchTermDelete = () => {
    this.setState({ searchTerm: "" });
  };

  render() {
    const { searchTerm, hasMoreItems, movies } = this.state;

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
              <FontAwesomeIcon icon={["fad", "plus"]} />
              <span>New Movie</span>
              <FontAwesomeIcon icon={["fad", "film"]} size="lg" />
            </button>
            <MovieList
              movies={movies}
              loadMore={this.loadMovies}
              hasMore={hasMoreItems}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Library;
