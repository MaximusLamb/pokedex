import React from 'react';
import { shallow } from 'enzyme';
import SearchSection from './SearchSection.js';

test('SearchSection Snapshot', () => {
  const wrapper = shallow(<SearchSection />);
  
  expect(wrapper).toMatchSnapshot();
});

test('Search Section menu', () => {
  const wrapper = shallow(<SearchSection />);
  
  expect(wrapper.find('option').length).toBe(19);
});


