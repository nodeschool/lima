import React from 'react';
import { shallow } from 'enzyme';
import Section from '../Section';


it('shallow renders without crashing', () => {
  shallow(<Section />);
});
