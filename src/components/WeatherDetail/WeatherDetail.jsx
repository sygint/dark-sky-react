import React from "react";

import "./WeatherDetail.scss";

const degreeSign = "\u00B0";

function WeatherDetail({ name, value, temperature = false }) {
  return (
    <span className="weather-detail">
      <span className="weather-detail-name">{name}:</span> {value}
      {temperature && degreeSign}
    </span>
  );
}

export default WeatherDetail;
