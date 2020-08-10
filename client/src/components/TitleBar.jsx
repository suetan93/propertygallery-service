import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 26px;
  line-height: 30px;
  text-align: start;
  letter-spacing: normal;
`;

const TitleBar = (props) => (
  <div>
    <Title>Oceanfront Condo</Title>
  </div>
);

export default TitleBar;
