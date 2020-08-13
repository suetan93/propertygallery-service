/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import TitleBar from '../components/TitleBar';

const property = {
  _id: 7,
  name: 'Affordable Flat',
  rating: 4.33,
  totalratings: 786,
  superhost: false,
  location: 'Oakland, California, United States',
  saved: false,
  photos: [
    {
      _id: 15,
      url: 'https://home.jpeg',
      caption: 'Master bedroom',
      verified: false,
    },
  ],
};

describe('TitleBar Component', () => {
  it('Should render TitleBar component', () => {
    const wrapper = shallow(<TitleBar listing={property} />);
    expect(wrapper.exists()).toBe(true);
  });
});
