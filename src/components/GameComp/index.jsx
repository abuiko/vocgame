import React, { useState, useEffect } from 'react'
import asteroid from '../../assets/asteroid1.png'
// styled components
import { AiOutlineLeft } from 'react-icons/ai'
import { Overlay, Wrapper, Desc, StartBtn, Container, Left, Right, Top, Icon, Text, Center, Score, Count, Title, Bottom, Resume, Wrap, Image, Set, Form, Input, Word } from './GameElements'



// hooks
// import useWindowDimensions from '../../hooks/useWindowDimensions'


const GameComp = () => {
    const [stop, setStop] = useState(true)
    const [start, setStart] = useState(true)
    const [offset, setOffset] = useState(0)
    const [score, setScore] = useState(0)

    // const { height, width } = useWindowDimensions();

    let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    for (let i = 0; i < existingEntries.length; i++) {
        existingEntries[i].Y = -i * 200;
    }

    const [text, setText] = useState("")
    const [list, setList] = useState(existingEntries)
    const [filteredList, setFilteredList] = useState([])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setOffset(offset => offset + 1);


    //     }, 20);
    //     return () => clearInterval(interval);
    // }, []);


    // Y <= height - hightRock

    const words = list.map(item => <Wrap key={item.id} style={{ left: `${item.position}%`, top: `${item.Y + offset}px` }} ><Image src={asteroid} alt="asteroid" /><Word>{item.word}</Word></Wrap>)

    function handleChange(e) {
        setText(e.target.value);
    }

    const handleKeyDown = (event) => {

        if (event.key === 'Enter') {

            const filteredList = list.filter(item => item.translation !== event.target.value)
            if (filteredList.length !== list.length) {
                setScore(score => score + 10)
            }
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
                        <Count>{score}</Count>
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
