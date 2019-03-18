import React from "react";

import WeatherIcon from "../WeatherIcon";

import "./WeatherCard.scss";

function WeatherCard({ weather }) {
  const { currently, hourly } = weather;
  const { icon, summary: currentSummary, temperature } = currently;
  const { summary: hourlySummary } = hourly;

  const roundedTemperature = Math.round(temperature);

  return (
    <div className="ui comments">
      <div className="comment">
        <WeatherIcon icon={icon} />

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
