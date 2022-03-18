import React, { useState } from 'react'
import { createStage } from '../../gameHelpers'
// styled components
import { AiOutlineLeft } from 'react-icons/ai'
import { Container, Left, Top, Icon, Text, Center, Score, Count, Title, Bottom, Resume } from './GameElements'

// components
import Stage from "../Stage"

// custom hooks
import { usePlayer } from '../Hooks/usePlayer'
import { useStage } from '../Hooks/useStage'



const GameComp = () => {

    // const [dropTime, setDropTime] = useState(null)
    // const [gameOver, setGameover] = useState(false)

    // const [player] = usePlayer()
    // const [stage, setStage] = useStage(player)

    // console.log('re-render')


    // const movePlayer = dir => {
    //     updatePlayerPos({ x: dir, y: 0 })
    // }

    // const startGame = () => {
    //     // reset everything

    //     setStage(createStage())
    //     resetPlayer()
    // }

    // const drop = () => {
    //     updatePlayerPos({ x: 0, y: 1, collided: false })
    // }
    // const dropPlayer = () => {
    //     drop()
    // }
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
                    <Resume>Start</Resume>
                </Bottom>
            </Left>
            <Stage stage={createStage()} />
        </Container>
    )
}

export default GameComp
