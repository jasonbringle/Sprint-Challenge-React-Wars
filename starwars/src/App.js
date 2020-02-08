import React, { useEffect,useState} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import './App.css';
import Character from "./Character"
import Header from './Header'
import Doggos from './Doggos'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Div = styled.div``

const App = () => {
 const [charData,setCharData] = useState([])
 const [dogData,setDogData] = useState([])

 useEffect(() =>{
  axios
    .get(`https://swapi.co/api/people`)
    .then(response => setCharData(response.data.results))
    .catch(error => console.log('error!!!'))

    axios
    .get(`https://dog.ceo/api/breeds/image/random/12`)
    .then(response => setDogData(response.data.message))
    .catch(error => console.log('error!!!'))  
 },[])
 console.log(dogData)
    
  return (
    <Div>
      <Header/>
        <Container>
          {charData.map((char,index)=>{
            return (<Character
            key={index} charData={char} setCharData={setCharData}/>)
          })}
          {dogData.map((dog,index)=>{
            return (<Doggos
            key={index} dogData={dog} setDogData={setDogData}/>)
          })}
        </Container>
    </Div>
  );
}

export default App;
