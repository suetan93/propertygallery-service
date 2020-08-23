import React from 'react';
import styled from 'styled-components';

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  width: 1000px;
  border: none;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
`;

const Title = styled.div`
 display: grid;
 width: 540px;
 font-size: 22px;
 font-weight: 450;
 grid-template-columns: 90% 10%;
 border: none;
 padding-left: 5px;
`;

const Subtitle = styled.div`
 font-size: 16px;
 font-weight: 300;
 color: #222222;
 border: none;
`;

const InfoEntry = styled.div`
  display: grid;
  width: 550px;
  grid-template-columns: 35px 965px;
  border: none;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  padding-left: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Icon = styled.div`
  border: none;
  grid-row: 1 / span 2;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 16px;
  border: none;
  width: 500px;
`;

const Subtext = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #717171;
  width: 500px;
`;

const Svg = styled.svg`
  display: block;
  height: 24px;
  width: 24px;
  fill: currentcolor;
`;

const Description = styled.div`
  color: #222;
  font-size: 16px;
  width: 550px;
  border: none;
  padding: 5px;
  line-height: 24px;
`;

const Hr = styled.hr`
  display: block;
  width: 550px;
  margin-left: 0;
  height: 0;
  border: 0;
  border-top: 1px solid #ccc;
`;

const HostIcon = styled.div`
  grid-column-start: 2;
  grid-row-end: span 2;
  border: none;
`;

const HostImg = styled.img`
  border-radius: 35px;
`;


const Info = () => (
  <ParentDiv>
    <div>
      <Hr />
      <br />
    </div>
    <Title>
      <div>
        Entire property hosted by Jon Snow
      </div>
      <HostIcon>
        <HostImg src="https://propertygallery.s3-us-west-1.amazonaws.com/jon-snow.jpg" style={{width: 60, height: 60}}/>
      </HostIcon>
      <Subtitle>
        5 guests · 2 bedrooms · 3 beds · 2 baths
      </Subtitle>
    </Title>
    <InfoEntry>
      <Icon>
        <Svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" >
          <path d="M17.954 2.781l.175.164 13.072 12.842-1.402 1.426-1.8-1.768L28 29a2 2 0 0 1-1.85 1.994L26 31H6a2 2 0 0 1-1.995-1.85L4 29V15.446l-1.8 1.767-1.4-1.426L13.856 2.958a3 3 0 0 1 4.097-.177zm-2.586 1.503l-.096.088L6 13.48 6 29l5-.001V19a2 2 0 0 1 1.85-1.995L13 17h6a2 2 0 0 1 1.995 1.85L21 19v9.999h5V13.48l-9.3-9.135a1.001 1.001 0 0 0-1.332-.06zM19 19h-6v9.999h6z">
          </path>
        </Svg>
      </Icon>
      <Text>
        Entire Home
      </Text>
      <Subtext>
        You will have the whole place to yourself.
      </Subtext>
    </InfoEntry>
    <InfoEntry>
      <Icon>
        <Svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.032 1.747c.263-1.004 1.692-.993 1.94.015.876 3.577 2.415 6.454 4.614 8.652 2.198 2.199 5.075 3.738 8.652 4.615 1.016.249 1.016 1.693 0 1.942-3.577.877-6.454 2.416-8.652 4.615-2.199 2.198-3.738 5.075-4.615 8.652-.249 1.016-1.693 1.016-1.942 0-.877-3.577-2.416-6.454-4.615-8.652-2.198-2.199-5.075-3.738-8.652-4.615-1.008-.247-1.019-1.676-.015-1.939 3.535-.923 6.394-2.487 8.597-4.69 2.202-2.202 3.765-5.06 4.688-8.595zm.945 3.518l-.133.325c-.88 2.085-2.025 3.914-3.438 5.484l-.33.357-.318.326c-1.6 1.6-3.5 2.893-5.693 3.88l-.475.206-.325.133.352.14c2.108.859 3.952 1.995 5.527 3.407l.358.33.326.319c1.603 1.602 2.887 3.515 3.854 5.732l.203.48.115.291.115-.292c.86-2.108 1.996-3.952 3.408-5.527l.33-.358.319-.326c1.602-1.603 3.515-2.887 5.732-3.854l.48-.203.292-.115-.293-.115c-2.421-.988-4.494-2.34-6.211-4.057-1.603-1.602-2.887-3.515-3.854-5.732l-.203-.48-.138-.351zm11.04-3.891c.13-.502.845-.497.969.007.176.718.48 1.287.913 1.72.433.433 1.002.737 1.72.913.508.125.508.847 0 .972-.718.176-1.287.48-1.72.913-.433.433-.737 1.002-.913 1.72-.125.508-.847.508-.972 0-.176-.718-.48-1.287-.913-1.72-.433-.433-1.002-.737-1.72-.913-.504-.124-.51-.839-.007-.97.71-.185 1.277-.496 1.712-.93.434-.435.745-1.002.93-1.712z">
          </path>
        </Svg>
      </Icon>
      <Text>
        Enhanced Clean
      </Text>
      <Subtext>
        This host committed to a rigorous cleaning protocol developed with leading health and hospitality experts.
      </Subtext>
    </InfoEntry>
    <InfoEntry>
      <Icon>
        <Svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0v2h8V0h2v2h6a2 2 0 0 1 1.995 1.85L30 4v15.586a2 2 0 0 1-.467 1.284l-.119.13L21 29.414a2 2 0 0 1-1.238.578l-.176.008H7a5 5 0 0 1-4.995-4.783L2 25V4a2 2 0 0 1 1.85-1.995L4 2h6V0zM4 12v13a3 3 0 0 0 2.824 2.995L7 28h11v-5a5 5 0 0 1 4.783-4.995L23 18h5v-6zm23.585 8H23a3 3 0 0 0-2.995 2.824L20 23v4.585zM4 10h24V4h-6v2h-2V4h-8v2h-2V4H4z">
          </path>
        </Svg>
      </Icon>
      <Text>
        Cancellation policy
      </Text>
      <Subtext>
        Cancel before 3:00 PM on Friday and get a 50% refund, minus the service fee.
      </Subtext>
    </InfoEntry>
    <div>
      <Hr />
      <br />
    </div>
    <Description>
      Imagine enjoying a good night's rest in the most comfortable bed. Imagine waking up to a stunning view of the sunrise. You can have it all! A freshly renovated Eco-Modern Style home near all populara attractions.

    </Description>
    <div>
      <br />
      <Hr />
    </div>
    <br/>
  </ParentDiv>
);

export default Info;