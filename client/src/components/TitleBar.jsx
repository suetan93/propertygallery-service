import React from 'react';
import styled from 'styled-components';
import Arrow from './ArrowIcon.jsx';
import Heart from './HeartIcon.jsx';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 64px;
  border: none;
  font-size: 28px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  letter-spacing: normal;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  line-height: 20px;
  justify-content: flex-start;
  padding-top: 5px;
  border: none;
`;

const Column = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  border: none;
`;

const GrayFont = styled.div`
  font-size: 14px;
  color: #717171;
  display: flex;
  align-items: center;
  border: none;
`;

const Location = styled.div`
  font-size: 14px;
  color: #717171;
  font-weight: 500;
  text-decoration: underline;
  display: flex;
  align-items: center;
  border: none;
`;

const A = styled.a`
  color: #717171;
`;

const Star = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #ff385c;
  display: flex;
  align-items: center;
  border: none;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  line-height: 20px;
  margin-left: auto;
  border: none;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 530;
  text-decoration: underline;
  width: 70px;
  height: 27px;
  padding: 4px;
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
      &nbsp;<b>{props.listing.rating}</b>
      </Column>
      <GrayFont>
      &nbsp;({props.listing.totalratings}) &nbsp;·&nbsp;&nbsp;
      </GrayFont>
      {props.listing.superhost ? (
        <GrayFont>
          <img src="https://propertygallery.s3-us-west-1.amazonaws.com/superhosticon.jpg" alt="" style={{ height: 15, width: 10 }} />
          &nbsp;Superhost&nbsp; · &nbsp;
        </GrayFont>
      ) : null }
      <Location>
        <A href={`https://www.airbnb.com/s/${props.listing.location}/homes`}>
          {props.listing.location}
        </A>
      </Location>
      <Column />
      <ButtonDiv>
        <Button onClick={props.alert}>
          <Arrow />
          Share
        </Button>
        <Button onClick={props.toggleSaved}>
          <Heart saved={props.savedState} />
          {props.savedState ? 'Saved' : 'Save'}
        </Button>
      </ButtonDiv>
    </Grid>
  </Wrapper>
);

export default TitleBar;
