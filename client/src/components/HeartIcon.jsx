import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: block;
  fill: ${prop => prop.saved ? '#ff385c' : 'none'};
  height: 16px;
  width: 16px;
  stroke: ${prop => prop.saved ? '#ff385c' : 'currentcolor'};
  stroke-width: 3;
  overflow: visible;
  margin-right: 5px;

`;

const Heart = (props) => (
  <Svg
    aria-hidden="true"
    role="presentation"
    focusable="false"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    saved={props.saved}
  >
    <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
  </Svg>
);

export default Heart;
