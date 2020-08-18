import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: block;
  height: 16px;
  width: 16px;
  margin-right: 5px;
`;

const Arrow = () => (
  <Svg
    aria-hidden="true"
    role="presentation"
    focusable="false"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g vectorEffect="non-scaling-stroke" transform="translate(0,0)scale(1,1)" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="3">
      <path d="m27 18v9c0 1.1045695-.8954305 2-2 2h-18c-1.1045695 0-2-.8954305-2-2v-9" />
      <path d="m4.5 14.5h23z" transform="matrix(0 1 -1 0 30.5 -1.5)" />
      <path d="m6 13 9.2928932-9.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l9.2928932 9.29289322" />
    </g>
  </Svg>
);

export default Arrow;
