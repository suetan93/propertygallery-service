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
  grid-template-columns: 15px 34px 45px 87px auto auto 77px 75px;
  grid-template-rows: 32px;
  line-height: 20px;
`;

const Nested = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  border: 1px dashed;
`;

const GrayFont = styled.div`
  font-size: 12px;
  color: #717171;
  display: flex;
  align-items: center;
  border: 1px dashed;
`;

const Location = styled.div`
  font-size: 12px;
  color: #717171;
  font-weight: bold;
  text-decoration: underline;
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

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 550;
  text-decoration: underline;
  width: 67px;
  height: 25px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const TitleBar = (props) => (
  <Wrapper>
    {props.listing.name}
    <Grid>
      <Star>&#9733;</Star>
      <Nested><b>{props.listing.rating}</b></Nested>
      <GrayFont>({props.listing.totalratings}) ·</GrayFont>
      <GrayFont>i Superhost &nbsp;· </GrayFont>
      <Location>{props.listing.location}</Location>
      <Nested />
      <Nested>
        <Button>
          <Arrow />
          Share
        </Button>
      </Nested>
      <Nested>
        <Button>
          <Heart />
          Save
        </Button>
      </Nested>
    </Grid>
  </Wrapper>
);

export default TitleBar;
