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
  /* padding: 18px; */
  /* width: 19rem; */
  border: 10px solid black;
  box-shadow: 10px 10px 20px 0px black;
`;

const Description = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

const DogPic = styled.img`
width:12rem;
height:auto;
`


const Doggos = props => {
    console.log(props.dogData)

  return (
    <CharCont>
      <Card>
        <Description>
          <DogPic alt='dog image' src={props.dogData}/>
        </Description>
        
      </Card>
    </CharCont>
  );
};

export default Doggos;
