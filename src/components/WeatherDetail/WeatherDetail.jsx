import React from "react";

import "./WeatherDetail.scss";

function WeatherDetail({ name, value }) {
  return (
    <span className="weather-detail">
      <span className="weather-detail-name">{name}:</span> {value}
    </span>
  );
}

export default WeatherDetail;
