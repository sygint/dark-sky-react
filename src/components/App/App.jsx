import React, { Component } from "react";

import WeatherCard from "../WeatherCard";
import WeatherDetail from "../WeatherDetail";
import Attribution from "../Attribution";

import { DEGREE_SIGN } from "../../constants";

import "./App.css";

// import mock from "./mock.json";

class App extends Component {
  state = { isLoaded: false, weather: {}, errorMessage: "" };
  // state = { weather: mock, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch("/.netlify/functions/weather", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ latitude, longitude })
          });
          const weather = await res.json();


          this.setState({ weather, isLoaded: true });
        } catch (err) {
          console.log(err);
        }
      },
      err => this.setState({ errorMessage: err.message })
    );
  }

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
    const { weather, isLoaded } = this.state;
    
    if (!isLoaded) {
      return 'loading...';
    }

    const {
      windSpeed,
      humidity,
      dewPoint,
      uvIndex,
      visibility,
      pressure
    } = weather.currently;

    const formattedWindSpeed = Math.round(windSpeed);
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
