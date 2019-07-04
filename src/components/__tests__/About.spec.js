import React from 'react';
import { shallow } from 'enzyme';
import About from '../About';


it('shallow renders without crashing', () => {
  shallow(<About />);
});
