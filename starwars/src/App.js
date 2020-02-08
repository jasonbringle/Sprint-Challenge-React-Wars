import React, { useEffect,useState} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import './App.css';
import Character from "./Character"
import Header from './Header'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Div = styled.div``

const App = () => {
 const [charData,setCharData] = useState([])

 useEffect(() =>{
  axios
    .get(`https://swapi.co/api/people`)
    .then(response => setCharData(response.data.results))
    .catch(console.log('error!!!'))
 },[])
 console.log(charData)
    
  return (
    <Div>
      {/* <Header/> */}
        <Container>
          {charData.map((char,index)=>{
            return (<Character
            key={index} charData={char} setCharData={setCharData}/>)
          })}
        </Container>
    </Div>
  );
}

export default App;
