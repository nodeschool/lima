import React from 'react';
import { shallow } from 'enzyme';
import Sponsor from '../Sponsor';


it('shallow renders without crashing', () => {
  shallow(<Sponsor sponsor={{ link: '' }} />);
});
