import React from 'react';
import styled from 'styled-components'
const CharCont = styled.div``
const Card = styled.div``
const Name = styled.div``
const Height = styled.div``
const Mass = styled.div``
const Gender = styled.div``

const Character = props =>{
    return(
        <CharCont>
            <Card>
                <Name>
                    <h2>{props.charData.name}</h2>
                </Name>
                <Height>
                    <p>{props.charData.height}</p>
                </Height>
                <Mass>
                    <p>{props.charData.mass}</p>
                </Mass>
                <Gender>
                    <p>{props.charData.gender}</p>
                </Gender>
            </Card>
        </CharCont>
    )
}

export default Character;