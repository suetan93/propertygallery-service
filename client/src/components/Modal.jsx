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
  margin-top: -29em;
  grid-template-rows: 10% 65% 25%;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  transition: all 0.3s ease-out;
`;

const Head = styled.div`
  display: flex;
  border: 1px dashed blue;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

const CloseDiv = styled.div`
  border: 1px dashed green;
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
`;

const Counter = styled.div`
  border: 1px dashed blue;
  text-align: center;
  flex-grow: 2;
`;

const IconsDiv = styled.div`
  border: 1px dashed green;
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

  :hover {
    background-color: #f5f5f5;
  }
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
  display: table;
`;

const Left = styled.div`
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  padding: 5px;
`;

const Right = styled.div`
  display: table-cell;
  text-align: right;
  vertical-align: middle;
  padding: 15px;
`;

const Img = styled.img`
  height 100%;
`;

const Footer = styled.div`
  display: grid;
  grid-template-rows: 20% 80%;
  border: 1px dashed red;
  height: 100%;
`;

const Description = styled.div`
  border: 1px dashed red;
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
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSet: this.props.images,
      currentIndex: 0,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next(e) {
    e.preventDefault();
    let lastIndex = this.state.photoSet.length;
    if (this.state.currentIndex + 1 !== lastIndex) {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    } else {
      this.setState({ currentIndex: 0 });
    }
  }

  previous(e) {
    e.preventDefault();
    if (this.state.currentIndex - 1 > 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    } else {
      this.setState({ currentIndex: this.state.photoSet.length - 1 });
    }
  }

  render() {
    const { currentIndex, photoSet } = this.state;

    return (
      <div>
        {this.props.showModal ? (
          <Window>
            <Head>

              <CloseDiv>
                <CloseButton type="button" onClick={this.props.toggleModal}>
                  X &nbsp; Close
                </CloseButton>
              </CloseDiv>
              <Counter>
                {currentIndex + 1}/{photoSet.length}
              </Counter>
              <IconsDiv>
                <IconButtons>
                  <Arrow />
                </IconButtons>
                &nbsp;
                <IconButtons>
                  <Heart />
                </IconButtons>
              </IconsDiv>
            </Head>
            <Body>
              <Content>
                <Left>
                  <ArrowButton onClick={this.previous}>
                    <LeftArrow aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none">
                        <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932" />
                      </g>
                    </LeftArrow>
                  </ArrowButton>
                </Left>
              </Content>
              <Content>
                <Img src={`${photoSet[currentIndex].url}`} alt="" />
              </Content>
              <Content>
                <Right>
                  <ArrowButton onClick={this.next}>
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
                {photoSet[currentIndex].verified ? 'Verified' : null}
              </Description>
              <Description>
                {photoSet[currentIndex].caption}
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
