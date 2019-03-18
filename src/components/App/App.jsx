import React, { Component } from "react";

import WeatherCard from "../WeatherCard";

import Axios from "axios";

class App extends Component {
  state = { weather: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      async position => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await Axios.get(
            `http://localhost:3001/weather/${latitude},${longitude}`
          );
          const weather = response.data;

          this.setState({ weather });
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
    return (
      <div className="ui container">
        {this.renderWeatherCard()}
        <div>
          <a href="https://darksky.net/poweredby/" alt="Powered by Dark Sky">
            Powered by Dark Sky
          </a>{" "}
          |{" "}
          <a
            href="http://adamwhitcroft.com/climacons/"
            alt="Icons by Adam Whitcroft"
          >
            Icons
          </a>{" "}
          by{" "}
          <a href="http://adamwhitcroft.com" alt="Adam Whitcroft's website">
            Adam Whitcroft
          </a>
        </div>
      </div>
    );
  }
}

export default App;
