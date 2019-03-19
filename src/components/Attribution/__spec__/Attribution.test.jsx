import React from "react";
import { shallow } from "enzyme";

import Attribution from "../";

it("renders without crashing", () => {
  const wrapper = shallow(<Attribution />);
  expect(wrapper).toMatchSnapshot();
});
