import React, { useState } from 'react'

// styled components
import { AiOutlineLeft } from 'react-icons/ai'
import { Container, Left, Top, Icon, Text, Center, Score, Count, Title, Bottom, Resume } from './GameElements'
import Stage from '../Stage'
import styled from 'styled-components'

const Overlay = styled.div`
    background: rgba(0,0,0, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    -webkit-box-shadow: -1px 1px 39px -5px rgba(142,63,255,0.81); 
    box-shadow: -1px 1px 39px -5px rgba(142,63,255,0.81);
    background: rgba(0,0,0,0.5);
    width: 50%;
    height: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
const Desc = styled.div`
    color: #fff;
    font-size: 22px;
    margin-bottom: 30px;
`
const StartBtn = styled.button`
    background: rgb(142,63,255);
   
    border: 1px solid #8E3FFF;
    color: #fff;
    padding: 10px 30px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px; 
`

const GameComp = () => {
    const [stop, setStop] = useState(true)
    const [start, setStart] = useState(true)
    return (
        <Container>
            {start ?
                <Overlay>
                    <Wrapper>
                        <Desc>Destroy incoming asteroids!</Desc>
                        <StartBtn onClick={() => setStart(!start)}>Get Started</StartBtn>
                    </Wrapper>
                </Overlay>
                :
                ""
            }

            <Left>

                <Top to="/">
                    <Icon>
                        <AiOutlineLeft style={{ fontSize: "30px" }} />
                    </Icon>
                    <Text>
                        Back
                    </Text>
                </Top>
                <Center>
                    <Score>
                        <Title>Score</Title>
                        <Count>0</Count>
                    </Score>
                </Center>
                <Bottom>
                    <Resume onClick={() => setStop(!stop)}>{!stop ? "Resume" : "Stop"}</Resume>
                </Bottom>
            </Left>
            <Stage />
        </Container>
    )
}

export default GameComp
