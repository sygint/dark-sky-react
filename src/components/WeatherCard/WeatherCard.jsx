import React from "react";

import WeatherIcon from "../WeatherIcon";
import WeatherDetail from "../WeatherDetail";

import "./WeatherCard.scss";

function WeatherCard({ weather }) {
  const { currently, hourly } = weather;
  const { icon, summary: currentSummary, temperature } = currently;
  const { summary: hourlySummary } = hourly;

  const roundedTemperature = Math.round(temperature);

  return (
    <>
      <div className="ui comments">
        <div className="comment">
          <WeatherIcon icon={icon} />

          <div className="content summary">
            <div className="weather-main">
              {roundedTemperature}&deg; {currentSummary}.
            </div>
            <div className="details">
              <WeatherDetail name="Feels like" value="x" />
              <WeatherDetail name="Low" value="x" />
              <WeatherDetail name="High" value="x" />
            </div>
          </div>
        </div>
      </div>
      <div className="weather-long-summary">{hourlySummary}</div>
    </>
  );
}

export default WeatherCard;
