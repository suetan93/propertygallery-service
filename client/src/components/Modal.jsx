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
  display: table;
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition};
  width: ${props => props.width}px;

`;

const Left = styled.div`
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  padding: 15px
`;

const Right = styled.div`
  display: table-cell;
  text-align: right;
  vertical-align: middle;
  padding: 15px
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
  overflow: visible;">
`;

const Button = styled.button`
    border: 1px solid black;
    border-radius: 15px;
    background: white;
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
              <Title>
                <button type="button" onClick={this.props.toggleModal}>X Close</button>
              </Title>
              <Title>
                {currentIndex + 1 }/{photoSet.length}
              </Title>
              <Title>
                <Arrow />
                &nbsp;
                <Heart />
              </Title>
            </Head>
            <Body>
              <Content>
                <Left>
                  <Button onClick={this.previous}>
                    <LeftArrow aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none">
                        <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932" />
                      </g>
                    </LeftArrow>
                  </Button>
                </Left>
              </Content>
              <Content>
                  <Img src={`${photoSet[currentIndex].url}`} alt="" />
              </Content>
              <Content>
                <Right>
                  <button type="button" onClick={this.next}>
                    <RightArrow aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none">
                        <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932" />
                      </g>
                    </RightArrow>
                  </button>
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
