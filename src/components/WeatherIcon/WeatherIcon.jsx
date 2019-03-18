import React from "react";

import "./WeatherIcon.css";

function WeatherIcon(props) {
  return (
    <div
      className="avatar weather-icon"
      style={{
        backgroundImage: `url('/images/clear-day.svg')`
      }}
    />
  );
}

export default WeatherIcon;
