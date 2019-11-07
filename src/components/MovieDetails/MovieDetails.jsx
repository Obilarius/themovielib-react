import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import Loader from "../../utils/Loader/Loader";
import "./MovieDetails.scss";
import MovieDetailsHeader from "./Header/MovieDetailsHeader";
import Synopsis from "./TabContent/Synopsis/Synopsis";
import TabNav from "./TabNav/TabNav";
import Cast from "./TabContent/Cast/Cast";

class MovieDetails extends Component {
  state = {
    movie: null,
    activeTab: 0
  };

  componentDidMount = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { id } = this.props.match.params;

    Axios.get(`https://themovielib-api.herokuapp.com/tmdb/`, {
      params: {
        endpoint: `movie/${id}`,
        param: ["language=de-de"]
      }
    })
      .then(res => {
        this.setState({ movie: res.data });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  changeTabHandler = index => {
    this.setState({ activeTab: index });
  };

  getTabContent = () => {
    const { activeTab, movie } = this.state;
    switch (activeTab) {
      case 1:
        return <div>Tab1</div>;
      case 2:
        return <Cast movieId={movie.id} />;
      default:
        return <Synopsis text={movie.overview} />;
    }
  };

  render() {
    const { movie, activeTab } = this.state;
    if (movie === null) return <Loader />;

    // const releaseYear = `(${movie.release_date.split("-")[0]})`;
    const tabContent = this.getTabContent();

    return (
      <div className="movie-details">
        <MovieDetailsHeader movie={movie} />
        <TabNav changeTab={this.changeTabHandler} activeTab={activeTab} />
        {tabContent}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default MovieDetails;
