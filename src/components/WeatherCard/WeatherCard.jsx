import React from "react";

import { formatDate } from "../../helpers/date";

function WeatherCard({ weather }) {
  console.log(weather);

  const { currently, timezone } = weather;
  const { icon, summary, temperature, time } = currently;
  const formattedTime = formatDate(
    new Date(
      new Date(time * 1000).toLocaleString("en-US", { timeZone: timezone })
    )
  );
  const roundedTemperature = Math.round(temperature);

  return (
    <div>
      <div>{icon}</div>
      <div>
        {roundedTemperature}&deg; {summary}.
      </div>
      <div>as of {formattedTime}</div>
    </div>
  );
}

export default WeatherCard;
