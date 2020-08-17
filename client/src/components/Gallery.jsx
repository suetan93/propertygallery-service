import React from 'react';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  position: relative;
  margin-top: -3.5em;
  margin-left: 6em;
  width: 123px;
  border: 1px dashed red;
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
  :hover {
    background-color: #fafafa;
    cursor: pointer;
  }
`;

const PhotoBox = styled.div`
  display: grid;
  margin: 0 auto;
  width: 1000px;
  border: 1px dashed red;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 150px 150px;
  gap: 5px;
`;

const MainPhoto = styled.div`
   grid-row: 1 / span 2;
`;

const Img = styled.img`
  :hover {
    filter: #f5f5f5;
  }
`;

const left = {
  width: 500,
  height: 305,
  borderTopLeftRadius: 15,
  borderBottomLeftRadius: 15,
};

const mid = {
  width: 244,
  height: 150,
};

const topRight = {
  width: 244,
  height: 150,
  borderTopRightRadius: 15,
};

const bottomRight = {
  width: 244,
  height: 150,
  borderBottomRightRadius: 15,
};

const Gallery = (props) => (
  <PhotoBox>
    <MainPhoto>
      <img src={`${props.images[0].url}`} alt="" style={left}/>
    </MainPhoto>
    <div>
      <img src={`${props.images[1].url}`} alt="" style={mid} />
    </div>
    <div id="Photo3" className="image">
      <img src={`${props.images[2].url}`} alt="" style={topRight} />
    </div>
    <div id="Photo4" className="image">
      <img src={`${props.images[3].url}`} alt="" style={mid} />
    </div>
    <div id="Photo5" className="image">
      <img src={`${props.images[4].url}`} alt="" style={bottomRight} />
      <ButtonDiv>
        <Button onClick={props.toggleModal}>Show all photos</Button>
      </ButtonDiv>
    </div>
  </PhotoBox>
);

export default Gallery;
