import React, { Component } from "react";

import WeatherCard from "../WeatherCard";
import WeatherDetail from "../WeatherDetail";
import Attribution from "../Attribution";

import { DEGREE_SIGN } from "../../constants";

import "./App.css";

// import Axios from "axios";

import mock from "./mock.json";

class App extends Component {
  state = { weather: mock, errorMessage: "" };

  // componentDidMount() {
  //   window.navigator.geolocation.getCurrentPosition(
  //     async position => {
  //       const { latitude, longitude } = position.coords;

  //       try {
  //         const response = await Axios.get(
  //           `http://localhost:3001/weather/${latitude},${longitude}`
  //         );
  //         const weather = response.data;

  //         this.setState({ weather });
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     },
  //     err => this.setState({ errorMessage: err.message })
  //   );
  // }

  renderWeatherCard() {
    const { weather, errorMessage } = this.state;

    if (errorMessage) {
      return <div>{this.state.errorMessage}</div>;
    }

    if (weather) {
      return <WeatherCard weather={weather} />;
    }

    return "Loading...";
  }

  render() {
    const { currently } = this.state.weather;
    const {
      windSpeed: wind,
      humidity,
      dewPoint,
      uvIndex,
      visibility,
      pressure
    } = currently;

    const formattedWindSpeed = Math.round(wind);
    const formattedHumidity = Math.round(humidity);
    const formattedDewPoint = Math.round(dewPoint);
    const formattedUvIndex = Math.round(uvIndex);
    const formattedVisibility = Math.round(visibility);
    const formattedPressure = Math.round(pressure);

    return (
      <>
        <div className="weather-details-secondary">
          <WeatherDetail
            name="Wind"
            value={formattedWindSpeed}
            unit="mph"
            className="secondary"
          />
          <WeatherDetail
            name="Humidity"
            value={formattedHumidity}
            unit="%"
            noSpace={true}
            className="secondary"
          />
          <WeatherDetail
            name="Dew Pt"
            value={formattedDewPoint}
            unit={DEGREE_SIGN}
            noSpace={true}
            className="secondary"
          />
          <WeatherDetail
            name="UV Index"
            value={formattedUvIndex}
            className="secondary"
          />
          <WeatherDetail
            name="Visibility"
            value={formattedVisibility}
            unit="mi"
            className="secondary"
          />
          <WeatherDetail name="Pressure" value={formattedPressure} unit="mb" />
        </div>
        <div className="ui container">{this.renderWeatherCard()}</div>
        <Attribution />
      </>
    );
  }
}

export default App;
