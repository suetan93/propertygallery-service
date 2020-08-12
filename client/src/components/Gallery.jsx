import React from 'react';
import styled from 'styled-components';

const PhotoBox = styled.div`
  display: grid;
  margin: 0 auto;
  width: 1000px;
  border: 1px dashed red;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 150px 150px;
  gap: 5px;
`;

const Photo = styled.div`

`;

const MainPhoto = styled.div`
   grid-row: 1 / span 2;

`;

const left = {
  width: 500,
  height: 305,
  borderTopLeftRadius: 15,
  borderBottomLeftRadius: 15,
};

const mid = {
  width: 243,
  height: 150,
};

const topRight = {
  width: 243,
  height: 150,
  borderTopRightRadius: 15,
};

const bottomRight = {
  width: 243,
  height: 150,
  borderBottomRightRadius: 15,
};

const Gallery = (props) => {
  // console.log(props.images[0])
  return (
  <PhotoBox>
    <MainPhoto>
      <img src="https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/Couch1.jpg" alt="" style={left} />
    </MainPhoto>
    <Photo>
      <img src="https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/Kitchen1.jpg" alt="" style={mid} />
    </Photo>
    <Photo>
      <img src="https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/LivingArea1.jpg" alt="" style={topRight} />
    </Photo>
    <Photo>
      <img src="https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/LivingArea1.jpg" alt="" style={mid} /></Photo>
    <Photo><img src="https://propertygallery.s3-us-west-1.amazonaws.com/Miami+Set/PoolArea1.jpg" alt="" style={bottomRight} /></Photo>
  </PhotoBox>
 )
};

export default Gallery;
