import React from 'react';
import styled from 'styled-components';
import Arrow from './ArrowIcon.jsx';
import Heart from './HeartIcon.jsx';

const Window = styled.div`
  display: grid;
  background-color: white;
  position: fixed;
  width: 100%;
  height: 100%;
  margin-top: -25em;
  grid-template-rows: 10% 55% 30%;
  transition: all 0.3s ease-out;
`;

const Head = styled.div`
 display: grid;
 border: 1px dashed red;
 grid-template-columns: 1fr 1fr 1fr;
`;

const Title = styled.div`
  border: 1px dashed blue;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  border: 1px dashed black;
`;

const Footer = styled.div`
  border: 1px dashed green;
`;

const Modal = (props) => (
  <div>
    {props.showModal ? (
      <Window>
        <Head>
          <Title>
            <button type="button" onClick={props.toggleModal}>X CLOSE</button>
          </Title>
          <Title>
            1/7
          </Title>
          <Title>
            <Arrow />
            <Heart />
          </Title>
        </Head>
        <Body>
          PHOTO HERE
        </Body>
        <Footer>
          DESCRIPTION HERE
        </Footer>
      </Window>
    )
      : null}
  </div>
);

export default Modal;
