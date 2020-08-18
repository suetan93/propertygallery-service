import React from 'react';
import styled from 'styled-components';
import Arrow from './ArrowIcon.jsx';
import Heart from './HeartIcon.jsx';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 64px;
  border: none;
  font-size: 26px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  letter-spacing: normal;
`;

// use props in styled components for conditonal renderings
const Grid = styled.div`
  display: grid;
  grid-template-columns: 15px 30px 50px 87px auto auto 77px 75px;
  grid-template-rows: 32px;
  line-height: 20px;
`;

const Column = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  border: none;
`;

const GrayFont = styled.div`
  font-size: 12px;
  color: #717171;
  display: flex;
  align-items: center;
  border: none;
`;

const Location = styled.div`
  font-size: 12px;
  color: #717171;
  font-weight: bold;
  text-decoration: underline;
  display: flex;
  align-items: center;
  border: none;
`;

const A = styled.a`
  color: #717171;
`;

const Star = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #ff385c;
  display: flex;
  align-items: center;
  border: none;
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
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

const TitleBar = (props) => (
  <Wrapper>
    {props.listing.name}
    <Grid>
      <Star>
        &#9733;
      </Star>
      <Column>
        <b>{props.listing.rating}</b>
      </Column>
      <GrayFont>
        ({props.listing.totalratings}) &nbsp; ·
      </GrayFont>
      <GrayFont>
        <img src="https://propertygallery.s3-us-west-1.amazonaws.com/superhost.jpg" alt="" style={{ height: 16, width: 12 }} />
        Superhost &nbsp;·
      </GrayFont>
      <Location>
        <A href="https://www.airbnb.com/">{props.listing.location}</A>
      </Location>
      <Column />
      <Column>
        <Button onClick={props.alert}>
          <Arrow />
          Share
        </Button>
      </Column>
      <Column>
        <Button onClick={props.toggleSaved}>
          <Heart saved={props.savedState} />
          {props.savedState ? 'Saved' : 'Save'}
        </Button>
      </Column>
    </Grid>
  </Wrapper>
);

export default TitleBar;
