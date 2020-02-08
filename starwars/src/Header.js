import React from 'react';
import styled from 'styled-components'

const Container = styled.div``
const Logo = styled.img``
const H1 = styled.h1``

const Header = props => {
    return (
        <Container>
            <Logo alt='starwars logo' src="https://i.dlpng.com/static/png/6812157_preview.png" />
            <H1>PEEPS!</H1>
        </Container>
    )
}

export default Header