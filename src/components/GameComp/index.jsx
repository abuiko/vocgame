import React, { useState } from 'react'
import asteroid from '../../assets/asteroid1.png'
// styled components
import { AiOutlineLeft } from 'react-icons/ai'
import { Overlay, Wrapper, Desc, StartBtn, Container, Left, Right, Top, Icon, Text, Center, Score, Count, Title, Bottom, Resume, Wrap, Image, Set, Form, Input, Word } from './GameElements'



// hooks
import useWindowDimensions from '../../hooks/useWindowDimensions'


const GameComp = () => {
    const [stop, setStop] = useState(true)
    const [start, setStart] = useState(true)

    const { height, width } = useWindowDimensions();

    let existingEntries = JSON.parse(localStorage.getItem("allEntries"));


    const [text, setText] = useState("")
    const [list, setList] = useState(existingEntries)



    const words = list.map(item => <Wrap key={item.id} style={{ left: `${item.position}%` }} ><Image src={asteroid} alt="asteroid" /><Word>{item.word}</Word></Wrap>)
    // function asteroids() {
    //     let animationDelay = '0s'
    //     let position = '10%'
    //     // const words = list.map(item => <Wrap key={item.id}><Image src={asteroid} alt="asteroid" /><Word>{item.word}</Word></Wrap>)
    //     const words = list.map(item => {
    //         animationDelay = `${(Math.random() * 8).toFixed(2)}s`
    //         position = `${(Math.random() * 8).toFixed(2)}%`

    //         return (<Wrap key={item.id} style={{ animationDelay: "animationDelay", left: position }}><Image src={asteroid} alt="asteroid" /><Word>{item.word}</Word></Wrap>)
    //     })
    //     return words
    // }


    function handleChange(e) {
        setText(e.target.value);
    }


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log(list)
            const filteredList = list.filter(item => item.translation !== event.target.value)
            console.log(filteredList)
            setList(filteredList)
            setText('')
        }
    }


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
            <Right>
                <Set>
                    {words}
                </Set>

                <Form>
                    <Input
                        placeholder="Type your answer and press enter..."
                        type="text"
                        value={text}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </Form>
            </Right>

        </Container>
    )
}

export default GameComp
