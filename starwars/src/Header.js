import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: lightgoldenrodyellow;
    height: 4rem;
    box-shadow: 10px 10px 20px 0px black;
`
const Logo = styled.img`
    height: 50px;
    width: auto;
    padding-left: 1rem;   
  `
const H1 = styled.h1`
    font-size: 3.5rem;
    padding-left: 1rem;
  `

const Header = props => {
    return (
        <Container>
            <Logo alt='starwars logo' src="https://i.dlpng.com/static/png/6812157_preview.png" />
            <H1>PEEPS!</H1>
        </Container>
    )
}

export default Header