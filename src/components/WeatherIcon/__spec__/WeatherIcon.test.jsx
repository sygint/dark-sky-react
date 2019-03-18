import React from "react";
import { shallow } from "enzyme";

import WeatherIcon from "../";

it("renders without crashing", () => {
  const wrapper = shallow(<WeatherIcon icon="clear-day" />);
  expect(wrapper).toMatchSnapshot();
});
