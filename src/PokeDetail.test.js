import { shallow } from 'enzyme';
import PokeDetail from './PokeDetail.js'
import React from 'react';

test('PokeDetail Snapshot', () => {
    const wrapper = shallow(<PokeDetail />);
    
    expect(wrapper).toMatchSnapshot();
  });

test('Rendering PokeDetail components', () => {
    const wrapper = shallow(<PokeDetail />);
    
    expect(wrapper.find('img').length).toBe(1);
  });