import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Container, Left, Top, Icon, Text, Center, Score, Count, Title, Bottom, Resume } from './GameElements'

import Stage from "../Stage"
import Display from '../Display'
import StartButton from '../StartButton'

import { createStage } from '../../gameHelpers'

const GameComp = () => {
    return (
        <Container>
            <Left>
                <Top>
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
                    <Resume>Pause</Resume>
                </Bottom>
            </Left>
            <Stage stage={createStage()} />
        </Container>
    )
}

export default GameComp
