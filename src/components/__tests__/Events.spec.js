import React from 'react';
import { render, mount } from 'enzyme';
import Events from '../Events';


it('shallow renders without crashing', () => {
  const spy = jest.spyOn(console, 'error').mockImplementation(() => null);
  const wrapper = mount(<Events />);
  // console.log(wrapper);
  wrapper.unmount();
  spy.mockRestore();
});
