import React, { useState } from 'react'

// styled components
import { AiOutlineLeft } from 'react-icons/ai'
import { Overlay, Wrapper, Desc, StartBtn, Container, Left, Top, Icon, Text, Center, Score, Count, Title, Bottom, Resume } from './GameElements'
import Stage from '../Stage'


// hooks
import useWindowDimensions from '../../hooks/useWindowDimensions'


const GameComp = () => {
    const [stop, setStop] = useState(true)
    const [start, setStart] = useState(true)

    const { height, width } = useWindowDimensions();


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
