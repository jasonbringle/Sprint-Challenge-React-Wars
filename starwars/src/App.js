import React, { useEffect,useState} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import './App.css';

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
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
