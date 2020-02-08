import React from "react";
import styled from "styled-components";

const CharCont = styled.div`
  margin: 30px;
  border-radius: 13px;
`;

const Card = styled.div`
  border-radius: 13px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 18px;
  width: 19rem;
  height: 14rem;
  background-color: lightgrey;
  border: 10px solid tan;
  box-shadow: 10px 10px 20px 0px black;
`;

const Description = styled.div`
  width: 50%;
`;

const Name = styled.div``;

const Height = styled.div`
  font-size: 1.3rem;
`;

const Mass = styled.div`
  font-size: 1.3rem;
`;

const Gender = styled.div`
  font-size: 1.3rem;
`;

const XWingDiv = styled.div`
  display: flex;
  align-items: center;
`;
const SwImage = styled.img`
  height: 5rem;
  width: auto;
  border-radius: 30px;
`;

const Character = props => {
  return (
    <CharCont>
      <Card>
        <Description>
          <Name>
            <h2>Name: {props.charData.name}</h2>
          </Name>
          <Height>
            <p>Height: {props.charData.height}</p>
          </Height>
          <Mass>
            <p>Mass: {props.charData.mass}</p>
          </Mass>
          <Gender>
            <p>Gender: {props.charData.gender}</p>
          </Gender>
        </Description>
        <XWingDiv>
          <SwImage src="https://static.turbosquid.com/Preview/2016/12/25__05_42_19/XWing02.png0D299BF6-73C0-43BB-AFC8-B094723C9433Zoom.jpg" />
        </XWingDiv>
      </Card>
    </CharCont>
  );
};

export default Character;
