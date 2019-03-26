import React from "react";
import { shallow } from "enzyme";

import WeatherCard from "../";

it("renders without crashing", () => {
  const mockWeather = {
    currently: {
      icon: "clear-night",
      summary: "Clear",
      temperature: 55.71
    },
    hourly: {
      data: [
        {
          temperature: 10
        },
        {
          temperature: 50
        }
      ],
      summary: "Partly cloudy starting tomorrow morning."
    },
    timezone: "America/Los_Angeles"
  };
  const wrapper = shallow(<WeatherCard weather={mockWeather} />);
  expect(wrapper).toMatchSnapshot();
});
