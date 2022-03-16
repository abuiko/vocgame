import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Container, Left, Top, Icon, Text, Center, Score, Count, Title, Bottom, Resume, Right, Form, Input } from './GameElements'

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
            <Right>
                <Form>
                    <Input
                        placeholder="Type your answer and press enter..."
                    />
                </Form>
            </Right>
        </Container>
    )
}

export default GameComp
