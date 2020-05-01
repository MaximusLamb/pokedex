import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('App Snapshot', () => {
  const wrapper = shallow(<App />);
  
  expect(wrapper).toMatchSnapshot();
});

test('pokemon-types menu', () => {
  const wrapper = shallow(<App />);
  
  expect(wrapper.find('option').length).toBe(19);
});


