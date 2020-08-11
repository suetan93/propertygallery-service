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
  border: 1px dashed;
`;

const MainPhoto = styled.div`
   grid-row: 1 / span 2;
   border: 1px dashed;
`;

const Gallery = (props) => (

  <PhotoBox>
    <MainPhoto>Photo1</MainPhoto>
    <Photo>Photo2</Photo>
    <Photo>Photo3</Photo>
    <Photo>Photo4</Photo>
    <Photo>Photo5</Photo>
  </PhotoBox>

);

export default Gallery;
