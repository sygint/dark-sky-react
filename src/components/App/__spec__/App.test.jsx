import React from 'react'
import { mount } from 'enzyme'

import App from '../'

it("renders without crashing", () => {
  mount(<App />);
});
