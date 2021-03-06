/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';
import TitleBar from '../components/TitleBar';

describe('Header Component', () => {
  it('Should render Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Should find a div element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('Should contain TitleBar Component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.containsMatchingElement(<TitleBar />)).toBe(true);
  });
});
