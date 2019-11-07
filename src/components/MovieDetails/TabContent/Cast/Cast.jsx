import React, { Component } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../../../../utils/Loader/Loader";
import "./Cast.scss";
// import emptyProfileImg from "../../../../assets/img/blank-profile.svg";

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

  getImgStyle = person => {
    // if (person == null) {
    //   return {
    //     backgroundImage: emptyProfileImg
    //   };
    // }

    const mediumDevice = window.matchMedia("(min-width: 768px)");
    let imgStyle;
    if (mediumDevice.matches) {
      imgStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w185${person.profile_path})`
      };
    } else {
      imgStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w185${person.profile_path})`
      };
    }
    return imgStyle;
  };

  render() {
    const { credits } = this.state;
    if (credits === null) return <Loader />;

    const { crew, cast } = credits;

    return (
      <div className="container cast-wrapper">
        <h2>Cast</h2>

        <div className="inner">
          {cast.map(person => {
            return (
              <Link
                className="person-card"
                to={`/person/${encodeURI(person.id)}`}
                key={person.id}
              >
                <div className="img" style={this.getImgStyle(person)} />
                <div className="name-wrapper">
                  <div className="name">{person.name}</div>
                  <div className="character">{person.character}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

Cast.propTypes = {
  movieId: PropTypes.number.isRequired
};

export default Cast;
