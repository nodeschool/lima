import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';


it('shallow renders without crashing', () => {
  shallow(<Footer />);
});
