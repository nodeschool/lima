import React from 'react';
import { shallow } from 'enzyme';
import Sponsors from '../Sponsors';


it('shallow renders without crashing', () => {
  shallow(<Sponsors />);
});
