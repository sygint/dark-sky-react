import React from "react";

import "./WeatherIcon.css"

import { ReactComponent as ClearDay } from "./icons/clear-day.svg";
import { ReactComponent as ClearNight } from "./icons/clear-night.svg";
import { ReactComponent as PartlyCloudyDay } from "./icons/partly-cloudy-day.svg";
import { ReactComponent as PartlyCloudyNight } from "./icons/partly-cloudy-night.svg";
import { ReactComponent as CloudyDay } from "./icons/cloudy-day.svg";
import { ReactComponent as CloudyNight } from "./icons/cloudy-night.svg";
import { ReactComponent as Cloudy } from "./icons/cloudy.svg";
import { ReactComponent as Fog } from "./icons/fog.svg";
import { ReactComponent as Rain } from "./icons/rain.svg";
import { ReactComponent as Sleet } from "./icons/sleet.svg";
import { ReactComponent as Snow } from "./icons/snow.svg";

const icons = {
  "clear-day": <ClearDay />,
  "clear-night": <ClearNight />,
  "partly-cloudy-day": <PartlyCloudyDay />,
  "partly-cloudy-night": <PartlyCloudyNight />,
  "cloudy-day": <CloudyDay />,
  "cloudy-night": <CloudyNight />,
  cloudy: <Cloudy />,
  fog: <Fog />,
  rain: <Rain />,
  sleet: <Sleet />,
  snow: <Snow />
};

function renderWeatherIcon(icon) {
  if (!icons.hasOwnProperty(icon)) {
    console.error(`icon "${icon}" not found`);
    return null;
  }

  return icons[icon];
}

function WeatherIcon({ icon }) {
  console.log(icon)
  return (
    <div
      className="avatar weather-icon"
    >
      { renderWeatherIcon(icon) }
    </div>
  );
}

export default WeatherIcon;
