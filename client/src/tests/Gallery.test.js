/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Gallery from '../components/Gallery';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  :hover {
    filter: contrast(0.7);
    transition: 0.4s ease-in-out;
    cursor: pointer;
  }
`;

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

  it('Should display image caption', () => {
    const wrapper = shallow(<Gallery images={images} />);
    expect(wrapper.find('Master bedroom')).toBeTruthy();
  });

});
