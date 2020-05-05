import { shallow } from 'enzyme';
import PokeList from './PokeList.js.js'
import React from 'react';

test('PokeList Snapshot', () => {
    const wrapper = shallow(<PokeList pokemon='venusaur' />);
    
    expect(wrapper).toMatchSnapshot();
  });

test('Rendering PokeList component', () => {
    const wrapper = shallow(<PokeList pokemon='venusaur' />);
    
    expect(wrapper.find('h2').length).toBe(2);
  });