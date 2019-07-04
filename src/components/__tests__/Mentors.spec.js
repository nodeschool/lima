import React from 'react';
import { shallow } from 'enzyme';
import Mentors from '../Mentors';


it('shallow renders without crashing', () => {
  shallow(<Mentors />);
});
