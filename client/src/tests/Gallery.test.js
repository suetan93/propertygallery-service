/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Gallery from '../components/Gallery';

const images = [
  {
    _id: 15,
    url: 'https://home.jpg',
    caption: '',
    verified: false,
  },
  {
    _id: 7,
    url: 'https://bedroom.jpg',
    caption: 'Master bedroom',
    verified: true,
  },
  {
    _id: 11,
    url: 'https://kitchen.jpg',
    caption: '',
    verified: false,
  },
  {
    _id: 3,
    url: 'https://bathroom.jpg',
    caption: 'Bathroom',
    verified: true,
  },
  {
    _id: 23,
    url: 'https://patio.jpg',
    caption: 'Patio',
    verified: false,
  },
];

describe('TitleBar Component', () => {
  it('Should render Gallery component', () => {
    const wrapper = shallow(<Gallery images={images} />);
    expect(wrapper.exists()).toBe(true);
  });

  // it('Should display an image', () => {
  //   const wrapper = shallow(<Gallery images={images} />);
  //   expect(wrapper.containsMatchingElement(<img src='https://kitchen.jpg' />)).toBe(true);
  // });    **** need to refactor ****
});
