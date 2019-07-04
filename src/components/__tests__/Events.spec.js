import React from 'react';
import { mount } from 'enzyme';
import Events from '../Events';


it('shallow renders without crashing', () => {
  const spy = jest.spyOn(console, 'error').mockImplementation(() => null);
  const wrapper = mount(<Events />);
  wrapper.unmount();
  spy.mockRestore();
});
