import React from 'react';
import styled from 'styled-components';
import Arrow from './ArrowIcon.jsx';
import Heart from './HeartIcon.jsx';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 64px;
  border: 1px dashed;
  font-size: 26px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  letter-spacing: normal;
`;

// use props in styled components for conditonal renderings
const Grid = styled.div`
  display: grid;
  grid-template-columns: 15px 34px 45px 90px auto auto 77px 70px;
  grid-template-rows: 32px;
  line-height: 20px;
`;

const Nested = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  border: 1px dashed;
`;

const Star = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #ff385c;
  display: flex;
  align-items: center;
  border: 1px dashed;
`;

const TitleBar = (props) => (
  <Wrapper>
    {props.listing.name}
    <Grid>
      <Star>&#9733;</Star>
      <Nested><b>{props.listing.rating}</b></Nested>
      <Nested>({props.listing.totalratings}) ·</Nested>
      {<Nested>i Superhost ·</Nested>}
      <Nested>{props.listing.location}</Nested>
      <Nested />
      <Nested>
        <Arrow />
        Share
      </Nested>
      <Nested>
        <Heart />
        Save
      </Nested>
    </Grid>
  </Wrapper>
);

export default TitleBar;
