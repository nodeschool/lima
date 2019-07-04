import React from 'react';
import { shallow } from 'enzyme';
import OpenCollectiveBadges from '../OpenCollectiveBadges';


it('shallow renders without crashing', () => {
  shallow(<OpenCollectiveBadges />);
});
