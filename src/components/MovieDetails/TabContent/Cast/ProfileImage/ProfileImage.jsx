import React from "react";
import PropTypes from "prop-types";
import BlankProfil from "../../../../../assets/img/blank-profile";

const ProfileImage = props => {
  const { path } = props;

  const getProfilImg = () => {
    if (path === null) {
      return (
        <div className="img">
          <BlankProfil />
        </div>
      );
    }

    const mediumDevice = window.matchMedia("(min-width: 768px)");
    let imgStyle;
    if (mediumDevice.matches) {
      imgStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w185${path})`
      };
    } else {
      imgStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w185${path})`
      };
    }
    return <div className="img" style={imgStyle} />;
  };

  return getProfilImg();
};

ProfileImage.propTypes = {
  path: PropTypes.string
};

export default ProfileImage;
