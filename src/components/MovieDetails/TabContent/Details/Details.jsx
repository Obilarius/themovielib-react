import React from "react";
import PropTypes from "prop-types";
import "./Details.scss";

const Details = props => {
  const { movie } = props;

  const getStudios = () => {
    return (
      <>
        <div>Production Studios:</div>
        <div className="studios">
          {movie.production_companies.map(studio => {
            return <div>{studio.name}</div>;
          })}
        </div>
      </>
    );
  };

  const getCountries = () => {
    return (
      <>
        <div>Production Countries:</div>
        <div className="countries">
          {movie.production_countries.map(country => {
            return <div>{country.name}</div>;
          })}
        </div>
      </>
    );
  };

  const getBudget = () => {
    const budget = parseInt(movie.budget, 10).toLocaleString("de-de");
    return (
      <>
        <div>Budget:</div>
        <div className="butget">{budget}$</div>
      </>
    );
  };

  const getRevenue = () => {
    const revenue = parseInt(movie.revenue, 10).toLocaleString("de-de");
    return (
      <>
        <div>Revenue:</div>
        <div className="revenue">{revenue}$</div>
      </>
    );
  };

  return (
    <div className="container">
      <div className="details-wrapper">
        {getStudios()}
        {getCountries()}
        {getBudget()}
        {getRevenue()}
        {/* Collection, OriginalTitle, Links, Trailer */}
      </div>
    </div>
  );
};

Details.propTypes = {};

export default Details;
