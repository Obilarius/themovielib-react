import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ShortDetails.scss";
import NetflixLogo from "../../../assets/logos/NetflixLogo";
import FlagIcon from "../../../utils/FlagIcon";

const ShortDetails = props => {
  const { movie } = props;

  const getStatus = () => {
    let ret;
    if (movie.status === "Released") {
      ret = <FontAwesomeIcon icon={["fad", "check"]} />;
    } else {
      ret = <FontAwesomeIcon icon={["fad", "times"]} />;
    }
    return ret;
  };

  const getReleaseDate = country => {
    let dates = movie.release_dates.results.find(element => {
      return element.iso_3166_1 === country;
    });

    if (dates == null) {
      dates = movie.release_dates.results.find(element => {
        return element.release_dates.find(e => {
          return e.type === 1;
        });
      });
    }

    if (dates == null) return;

    let dateObj = dates.release_dates.find(element => {
      return element.type === 3;
    });

    let note;
    if (dateObj == null) {
      const [firstDate] = dates.release_dates;
      dateObj = firstDate;

      if (dateObj.note === "Netflix")
        note = (
          <span className="note">
            <NetflixLogo />
          </span>
        );
    }

    let date = new Date(dateObj.release_date);

    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    date = [
      (dd > 9 ? "" : "0") + dd,
      (mm > 9 ? "" : "0") + mm,
      date.getFullYear()
    ].join(".");

    // eslint-disable-next-line consistent-return
    return (
      <>
        <FlagIcon iso={dates.iso_3166_1} />
        <span className="date">{date}</span>
        {note}
      </>
    );
  };

  const getOriginalLanguage = () => {
    const oL = movie.original_language;
    let cC;

    switch (oL) {
      case "en":
        cC = "us";
        break;
      default:
        cC = oL;
        break;
    }

    return <FlagIcon iso={cC} />;
  };

  return (
    <section className="shortdetails-wrapper">
      {/* <div className="shortdetails-wrapper">
        <ReactTooltip place="bottom" type="light" effect="float" />
        <div data-tip={movie.status}>{getStatus()}</div>
        <div className="release_date">{getReleaseDate("DE")}</div>
        <div data-tip="Runtime">{`${movie.runtime}m`}</div>
        <div data-tip="Original Language">{getOriginalLanguage()}</div>
      </div> */}
      <div className="container">
        <ReactTooltip place="bottom" type="light" effect="float" />
        <div data-tip={movie.status}>
          <div className="label">Status:</div>
          <div>{getStatus()}</div>
        </div>
        <div className="release_date" data-tip="ReleaseDate">
          <div className="label">ReleaseDate:</div>
          <div>{getReleaseDate("DE")}</div>
        </div>
        <div data-tip="Runtime">
          <div className="label">Runtime:</div>
          <div>{`${movie.runtime}m`}</div>
        </div>
        <div data-tip="Original Language">
          <div className="label">Original Language:</div>
          <div>{getOriginalLanguage()}</div>
        </div>
      </div>
    </section>
  );
};

ShortDetails.propTypes = {
  movie: PropTypes.shape({
    status: PropTypes.string,
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    original_language: PropTypes.string,
    release_dates: PropTypes.shape({
      results: PropTypes.array
    })
  }).isRequired
};

export default ShortDetails;
