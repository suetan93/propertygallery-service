import React from 'react';
import styled from 'styled-components';
import Info from './Info.jsx';

const ButtonDiv = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: -3.5em;
  margin-left: 6em;
  width: 123px;
  border: none;
`;

const Button = styled.button`
  border: 1px solid black;
  border-radius: 7px;
  background-color: white;
  width: 100%;
  padding: 7px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 12px;
  font-weight: 450;
  outline: none;
  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

const PhotoBox = styled.div`
  display: grid;
  margin: 0 auto;
  width: 1000px;
  border: none;
  border-radius: 12px;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 150px 150px;
  gap: 5px;
  overflow: hidden;
`;

const MainPhoto = styled.div`
  border: none;
  grid-row: 1 / span 2;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  :hover {
    filter: contrast(0.7);
    transition: 0.4s ease-in-out;
    cursor: pointer;
  }
`;


const Gallery = (props) => (
  <PhotoBox>
    <MainPhoto onClick={props.clickPhoto}>
      <Img src={`${props.images[0].url}`} alt="0" />
    </MainPhoto>
    <div onClick={props.clickPhoto}>
      <Img src={`${props.images[1].url}`} alt="1" />
    </div>
    <div onClick={props.clickPhoto}>
      <Img src={`${props.images[2].url}`} alt="2" />
    </div>
    <div onClick={props.clickPhoto}>
      <Img src={`${props.images[3].url}`} alt="3" />
    </div>
    <div>
      <Img src={`${props.images[4].url}`} alt="4"  onClick={props.clickPhoto} />
      <ButtonDiv>
        <Button onClick={props.toggleModal}>Show all photos</Button>
      </ButtonDiv>
    </div>

  </PhotoBox>
);

export default Gallery;
