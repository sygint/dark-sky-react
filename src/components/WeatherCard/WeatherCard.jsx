import React from "react";

import WeatherIcon from "../WeatherIcon";
import WeatherDetail from "../WeatherDetail";

import "./WeatherCard.scss";

function WeatherCard({ weather }) {
  const { currently, hourly } = weather;
  const { icon, summary: currentSummary, temperature } = currently;
  const { summary: hourlySummary } = hourly;

  const roundedTemperature = Math.round(temperature);
  const hourlyTemps = hourly.data.map(h => h.temperature);
  const tempHigh = Math.max(...hourlyTemps);
  const tempLow = Math.min(...hourlyTemps);

  console.log(tempHigh);
  console.log(tempLow);

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
              <WeatherDetail name="Low" value={tempLow} temperature="true" />
              <WeatherDetail name="High" value={tempHigh} temperature="true" />
            </div>
          </div>
        </div>
      </div>
      <div className="weather-long-summary">{hourlySummary}</div>
    </>
  );
}

export default WeatherCard;
