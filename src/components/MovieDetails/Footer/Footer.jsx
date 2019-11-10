import React from "react";
import PropTypes from "prop-types";
import "./Footer.scss";

const Footer = props => {
  const { images } = props;

  const index = Math.floor((Math.random() * images.backdrops.length) / 4);

  const backdropPath = images.backdrops[index].file_path;

  const getUrl = () => {
    let path = "";
    const mediumDevice = window.matchMedia("(min-width: 768px)");
    if (mediumDevice.matches) {
      path = `https://image.tmdb.org/t/p/w1280${backdropPath}`;
    } else {
      path = `https://image.tmdb.org/t/p/w780${backdropPath}`;
    }
    return path;
  };

  const backdropStyle = { backgroundImage: `url(${getUrl()})` };

  return (
    <footer className="footer">
      <div className="backdrop" style={backdropStyle} />
      <div className="overlay" />
      <div className="border-top" />
    </footer>
  );
};

Footer.propTypes = {
  images: PropTypes.shape({
    backdrops: PropTypes.array.isRequired
  }).isRequired
};

export default Footer;
