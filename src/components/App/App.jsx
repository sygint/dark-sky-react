import React, { Component } from "react";

import WeatherCard from "../WeatherCard";

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
    return (
      <div className="ui container">
        {this.renderWeatherCard()}
        <div>
          <a href="https://darksky.net/poweredby/" alt="Powered by Dark Sky">
            Powered by Dark Sky
          </a>{" "}
          |{" "}
          <a
            href="https://www.amcharts.com/free-animated-svg-weather-icons/"
            alt="Icons by amCharts"
          >
            Icons
          </a>{" "}
          by{" "}
          <a href="http://amcharts.com" alt="amCharts website">
            amCharts
          </a>
        </div>
      </div>
    );
  }
}

export default App;
