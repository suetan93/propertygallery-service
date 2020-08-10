/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header Component', () => {
  it('Should render Header correctly', () => {
    shallow(<Header />);
  });
});
