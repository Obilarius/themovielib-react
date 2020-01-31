import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import Loader from "../../utils/Loader/Loader";
import "./MovieDetails.scss";
import MovieDetailsHeader from "./Header/MovieDetailsHeader";
import TabNav from "./TabNav/TabNav";

import ShortDetails from "./ShortDetails/ShortDetails";
import TabContent from "./TabContent/TabContent";
import Footer from "./Footer/Footer";

class MovieDetails extends Component {
  state = {
    movie: null,
    images: null,
    activeTab: 0
  };

  componentDidMount = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { id } = this.props.match.params;

    Axios.get(`https://themovielib-api.herokuapp.com/tmdb/`, {
      params: {
        endpoint: `movie/${id}`,
        param: [
          "language=de-de",
          "append_to_response=videos,external_ids,keywords,release_dates"
        ]
      }
    }).then(res => {
      this.setState({ movie: res.data });
    });
    // .catch(error => {
    //   console.error(error);
    // });

    Axios.get(`https://themovielib-api.herokuapp.com/tmdb/`, {
      params: {
        endpoint: `movie/${id}/images`
      }
    }).then(res => {
      this.setState({ images: res.data });
    });
    // .catch(error => {
    //   console.error(error);
    // });
  };

  changeTabHandler = index => {
    this.setState({ activeTab: index });
  };

  render() {
    const { movie, activeTab, images } = this.state;
    if (movie === null) return <Loader />;

    return (
      <div className="movie-details">
        <MovieDetailsHeader movie={movie} />
        <ShortDetails movie={movie} />
        <TabNav changeTab={this.changeTabHandler} activeTab={activeTab} />
        <TabContent activeTab={activeTab} movie={movie} />
        {images && <Footer images={images} />}
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
