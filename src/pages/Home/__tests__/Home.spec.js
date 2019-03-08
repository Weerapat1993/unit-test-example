import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../index';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('render <Home />', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('Layout').length).toEqual(1);
  })

  it('when click button `#btn-create-article` It should be state isForm = true', () => {
    const wrapper = shallow(<Home />);
    const inst = wrapper.instance();
    expect(inst.state.isForm).toEqual(false);
    wrapper.find('#btn-create-article').simulate('click')
    expect(inst.state.isForm).toEqual(true);
  })

  it('when click button `#btn-remove-article-1` It should be state data = []', () => {
    const wrapper = shallow(<Home />);
    const inst = wrapper.instance();
    const data = [
      {
        id: 1,
        title: 'Title',
        descripiton: 'Description',
      }
    ]
    inst.setState({ data })
    expect(inst.state.data).toEqual(data);
    wrapper.find('#btn-remove-article-1').simulate('click');
    expect(inst.state.data).toEqual([]);
  })

  it('when click button `#btn-remove-article-1` It should be state data = []', () => {
    const wrapper = shallow(<Home />);
    const inst = wrapper.instance();
    const data = [
      {
        id: 1,
        title: 'Title',
        descripiton: 'Description',
      }
    ]
    expect(inst.state.data).toEqual([]);
    inst.handleSubmit(data[0])
    expect(inst.state.data).toEqual(data);
  })
})