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
`;

const Head = styled.div`
 display: grid;
 border: 1px dashed blue;
 grid-template-columns: 1fr 1fr 1fr;
`;

const Title = styled.div`
  border: 1px dashed blue;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  display: grid;
  border: 1px dashed black;
  grid-template-columns: 1fr 3fr 1fr;
`;
const Content = styled.div`
  border: 1px dashed black;
`;

const Footer = styled.div`
  display: grid;
  grid-template-rows: 15% 85%;
  border: 1px dashed red;
`;

const Description = styled.div`
  border: 1px dashed red;
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
            &nbsp;
            <Heart />
          </Title>
        </Head>
        <Body>
          <Content>
            ARROW
          </Content>
          <Content>
            PHOTO HERE
          </Content>
          <Content>
            ARROW
          </Content>
        </Body>
        <Footer>
          <Description>
            VERIFIED
          </Description>
          <Description>
            DESCRIPTION HERE
          </Description>
        </Footer>
      </Window>
    )
      : null}
  </div>
);

export default Modal;
