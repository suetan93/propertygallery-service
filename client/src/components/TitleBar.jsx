import React from 'react';
import styled from 'styled-components';
import Arrow from './ArrowIcon.jsx';
import Heart from './HeartIcon.jsx';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 64px;
  border: 1px dashed black;
  font-size: 26px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  letter-spacing: normal;
`;

// use props in styled components for conditonal renderings
// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 15px 30px 50px 87px auto auto 77px 75px;
//   grid-template-rows: 32px;
//   line-height: 20px;
//   border: 1px dashed red;
// `;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wap: nowrap;
  line-height: 20px;
  justify-content: flex-start;
  border: 1px dashed red;
`;

const Column = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  border: 1px dashed blue;
`;

const GrayFont = styled.div`
  font-size: 12px;
  color: #717171;
  display: flex;
  align-items: center;
  border: 1px dashed blue;
`;

const Location = styled.div`
  font-size: 12px;
  color: #717171;
  font-weight: bold;
  text-decoration: underline;
  display: flex;
  align-items: center;
  border: 1px dashed blue;
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
  border: 1px dashed blue;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wap: nowrap;
  line-height: 20px;
  margin-left: auto;
  border: 1px dashed green;
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
        ({props.listing.totalratings}) · &nbsp;
      </GrayFont>
      {props.listing.superhost ? (
        <GrayFont>
          <img src="https://propertygallery.s3-us-west-1.amazonaws.com/superhost.jpg" alt="" style={{ height: 16, width: 12 }} />
          Superhost &nbsp; · &nbsp;
        </GrayFont>
      ) : null }
      <Location>
        <A href="https://www.airbnb.com/">{props.listing.location}</A>
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
