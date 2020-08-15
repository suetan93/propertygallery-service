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
  margin-top: -29em;
  grid-template-rows: 10% 60% 30%;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
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
  grid-template-columns: 1fr 5fr 1fr;
`;
const Content = styled.div`
  border: 1px dashed black;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Img = styled.img`
  height 100%;
`;

const Footer = styled.div`
  display: grid;
  grid-template-rows: 15% 85%;
  border: 1px dashed red;
`;

const Description = styled.div`
  border: 1px dashed red;
  text-align: center;
`;

const RightArrow = styled.svg`
  display: block;
  fill: none;
  height: 12px;
  width: 12px;
  stroke: currentcolor;
  stroke-width: 5.33333;
  overflow: visible;
`;

const LeftArrow = styled.svg`
  display: block;
  fill: none;
  height: 12px;
  width: 12px;
  stroke: currentcolor;
  stroke-width: 5.33333;
  overflow: visible;">
`;

const Modal = (props) => (
  <div>
    {props.showModal ? (
      <Window>
        <Head>
          <Title>
            <button type="button" onClick={props.toggleModal}>X Close</button>
          </Title>
          <Title>
            1/ {props.images.length}
          </Title>
          <Title>
            <Arrow />
            &nbsp;
            <Heart />
          </Title>
        </Head>
        <Body>
          <Content>
            <button type="button">
              <LeftArrow aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g fill="none">
                  <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932" />
                </g>
              </LeftArrow>
            </button>
          </Content>
          <Content>
              <Img src={`${props.images[2].url}`} alt="" />
          </Content>
          <Content>
            <button type="button">
              <RightArrow aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g fill="none">
                  <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932" />
                </g>
              </RightArrow>
            </button>
          </Content>
        </Body>
        <Footer>
          <Description>
            {props.images[2].verified ? 'Verified' : null}
          </Description>
          <Description>
            {props.images[2].caption}
          </Description>
        </Footer>
      </Window>
    )
      : null}
  </div>
);

export default Modal;
