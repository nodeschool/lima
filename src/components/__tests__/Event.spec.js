import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';


it('shallow renders without crashing', () => {
  shallow(<Event event={{ time: (new Date()).toISOString() }} />);
});
