import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 64px;
  border: 1px dashed;
  font-size: 26px;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  letter-spacing: normal;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 18px 34px 50px 100px 200px auto 77px 70px;
  grid-template-rows: 32px;
  line-height: 20px;
`;

const Nested = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  border: 1px dashed;
`;

const TitleBar = (props) => (
  <Wrapper>
    Oceanfront Condo
    <Grid>
      <Nested>s</Nested>
      <Nested><b>4.70</b></Nested>
      <Nested>(327) ·</Nested>
      <Nested>i Superhost · </Nested>
      <Nested>Hilo, Hawaii, United States</Nested>
      <Nested />
      <Nested>Share</Nested>
      <Nested>h Save</Nested>
    </Grid>
  </Wrapper>
);

export default TitleBar;
