import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../../../../utils/Loader/Loader";
import ProfileImage from "./ProfileImage/ProfileImage";
import GoToTop from "../../../../utils/GoToTop/GoToTop";
import "./Cast.scss";

class Cast extends Component {
  state = {
    credits: null
  };

  componentDidMount = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { movieId } = this.props;

    Axios.get(`https://themovielib-api.herokuapp.com/tmdb/`, {
      params: {
        endpoint: `movie/${movieId}/credits`,
        param: ["language=de-de"]
      }
    })
      .then(res => {
        this.setState({ credits: res.data });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  render() {
    const { credits } = this.state;
    if (credits === null) return <Loader />;

    const { crew, cast } = credits;

    return (
      <div className="container cast-wrapper">
        <GoToTop />
        <div className="cast">
          <h2>Cast</h2>
          <div className="inner">
            {cast.map(person => {
              return (
                <Link
                  className="person-card"
                  to={`/person/${encodeURI(person.id)}`}
                  key={person.credit_id}
                >
                  <ProfileImage path={person.profile_path} />
                  <div className="name-wrapper">
                    <div className="name">{person.name}</div>
                    <div className="character">{person.character}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="crew">
          <h2>Crew</h2>
          <div className="inner">
            {crew.map(person => {
              return (
                <Link
                  className="person-card"
                  to={`/person/${encodeURI(person.id)}`}
                  key={person.credit_id}
                >
                  <ProfileImage path={person.profile_path} />
                  <div className="name-wrapper">
                    <div className="name">{person.name}</div>
                    <div className="character">{person.job}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

Cast.propTypes = {
  movieId: PropTypes.number.isRequired
};

export default Cast;
