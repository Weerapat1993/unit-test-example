import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from '../About';

configure({ adapter: new Adapter() });

describe('<About />', () => {
  it('render <About />', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('Layout').length).toEqual(1);
  })
})