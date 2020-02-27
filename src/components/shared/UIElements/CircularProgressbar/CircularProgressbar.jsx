import React from "react";
import PropTypes from "prop-types";
import {
  CircularProgressbar as CP,
  buildStyles
} from "react-circular-progressbar";
import "./CircularProgressbar.scss";

const CircularProgressbar = props => {
  const { percentage } = props;
  let pathColor = "rgb(20, 179, 20)"; // grün
  if (percentage <= 66) pathColor = "rgb(230, 230, 20)"; // gelb
  if (percentage <= 33) pathColor = "rgb(255, 20, 20)"; // rot

  return (
    <div className="circular-progressbar">
      <CP
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={15}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          // rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          textSize: "28px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor,
          textColor: "#fff",
          trailColor: "rgba(255,255,255,0.2)",
          backgroundColor: "#3e98c7"
        })}
      />
    </div>
  );
};

CircularProgressbar.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default CircularProgressbar;
