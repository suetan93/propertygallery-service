/* eslint-disable arrow-body-style */
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
  left: 0;
  right: 0;
  top: 0;
  bottom:0;
  z-index: 50;
  grid-template-rows: 15% 60% 25%;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
`;

const Head = styled.div`
  display: flex;
  border: none;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  padding-top: 10px;
`;

const CloseDiv = styled.div`
  border: none;
  flex-grow: 1;
  padding-left: 10px;

`;

const CloseButton = styled.button`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 13px;
  font-weight: 450;
  border-radius: 7px;
  height: 30px;
  width: 80px;
  border: hidden;
  background-color: #e5e5e5;
  outline: none;
  :hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;

const Counter = styled.div`
  border: none;
  text-align: center;
  flex-grow: 2;
`;

const IconsDiv = styled.div`
  border: none;
  flex-grow: 1;
  text-align: right;
  padding-right: 15px;

`;

const IconButtons = styled.button`
  border: none;
  border-radius: 28px;
  background-color: #fff;
  width: 30px;
  padding: 7px;
  outline: none;

  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

const Body = styled.div`
  display: flex;
  border: none;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  border: none;
  width: 100%;
  height: 100%;
  text-align: center;
  display: table;
`;

const Left = styled.div`
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  padding-left: 20px;
  width: 100%;
  height: 100%;
`;

const Right = styled.div`
  display: table-cell;
  text-align: right;
  vertical-align: middle;
  padding-right: 20px;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  height 100%;
`;

const Footer = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  border: none;
  height: 100%;
`;

const Description = styled.div`
  border: none;
  text-align: center;
  height: 100%;
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
  overflow: visible;
`;

const ArrowButton = styled.button`
  border: 1px solid #A9A9A9;
  border-radius: 25px;
  background: white;
  padding: 14px;
  outline: none;
  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.showModal ? (
          <Window showModal={this.props.showModal}>
            <Head>
              <CloseDiv>
                <CloseButton type="button" onClick={this.props.toggleModal}>
                  X &nbsp; Close
                </CloseButton>
              </CloseDiv>
              <Counter>
                {this.props.photoIndex + 1}/{this.props.images.length}
              </Counter>
              <IconsDiv>
                <IconButtons onClick={this.props.alert}>
                  <Arrow />
                </IconButtons>
                &nbsp;
                <IconButtons onClick={this.props.toggleSaved}>
                  <Heart saved={this.props.savedState} />
                </IconButtons>
              </IconsDiv>
            </Head>
            <Body>
              <Content>
                <Left>
                  <ArrowButton onClick={this.props.previousPhoto}>
                    <LeftArrow aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none">
                        <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932" />
                      </g>
                    </LeftArrow>
                  </ArrowButton>
                </Left>
              </Content>
                <Img src={`${this.props.images[this.props.photoIndex].url}`} />
              <Content>
                <Right>
                  <ArrowButton onClick={this.props.nextPhoto}>
                    <RightArrow aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none">
                        <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932" />
                      </g>
                    </RightArrow>
                  </ArrowButton>
                </Right>
              </Content>
            </Body>
            <Footer>
              <Description>
                {this.props.images[this.props.photoIndex].verified ? 'Verified' : null}
              </Description>
              <Description>
                {this.props.images[this.props.photoIndex].caption}
              </Description>
            </Footer>
          </Window>
        )
          : null}
      </div>
    );
  }
}

export default Modal;
