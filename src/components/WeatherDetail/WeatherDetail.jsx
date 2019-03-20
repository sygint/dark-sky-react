import React from "react";

import "./WeatherDetail.scss";

function WeatherDetail({
  name,
  value,
  unit = null,
  noSpace = false,
  className = ""
}) {
  return (
    <span className={`weather-detail ${className}`}>
      <span className="weather-detail-name">{name}:</span> {value}
      {noSpace ? null : " "}
      {unit}
    </span>
  );
}

export default WeatherDetail;
