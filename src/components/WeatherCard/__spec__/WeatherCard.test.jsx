import React from "react";
import { shallow } from "enzyme";

import WeatherCard from "../";

it("renders without crashing", () => {
  const mockWeather = {
    currently: {
      icon: "clear-night",
      time: 1552897151,
      temperature: 55.71
    },
    timezone: "America/Los_Angeles"
  };
  const wrapper = shallow(<WeatherCard weather={mockWeather} />);
  expect(wrapper).toMatchSnapshot();
});
