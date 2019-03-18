import React from "react";

import "./WeatherCard.scss";

function WeatherCard({ weather }) {
  console.log(weather);

  const { currently, hourly } = weather;
  const { summary: currentSummary, temperature } = currently;
  const { summary: hourlySummary } = hourly;

  const roundedTemperature = Math.round(temperature);

  return (
    <div className="ui comments">
      <div className="comment">
        <div
          className="avatar weather-icon"
          style={{
            backgroundImage: `url('/images/clear-day.svg')`
          }}
        />

        <div className="content summary">
          <div className="title">
            {roundedTemperature}&deg; {currentSummary}.
          </div>
          <div>
            <div className="extra">
              <span>Feels like:</span> X
            </div>
            <div className="extra">
              <span>Low:</span> X
            </div>
            <div className="extra">
              <span>High:</span> X
            </div>
          </div>
          <div>{hourlySummary}</div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
