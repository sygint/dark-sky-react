import React from "react";
import { shallow } from "enzyme";

import WeatherDetail from "../";

it("renders without crashing", () => {
  const wrapper = shallow(<WeatherDetail name="Feels Like" value="35&deg;" />);
  expect(wrapper).toMatchSnapshot();
});
