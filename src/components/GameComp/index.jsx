import React, { useState, useEffect } from 'react'
import asteroid from '../../assets/asteroid1.png'
// styled components
import { AiOutlineLeft } from 'react-icons/ai'
import { Container, Left, Right, Top, Icon, Text, Center, Score, Count, Title, Bottom, Resume, Wrap, Image, Set, Form, Input, Word } from './GameElements'
import ModalWindow from './ModalWindow'



// hooks
// import useWindowDimensions from '../../hooks/useWindowDimensions'


const GameComp = () => {

    // TO START A GAME
    const [start, setStart] = useState(false)

    // TO PAUSE / RESUME GAME 
    const [pause, setPause] = useState(false)


    const [offset, setOffset] = useState(0)
    const [score, setScore] = useState(0)

    // const { height, width } = useWindowDimensions();

    let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    for (let i = 0; i < existingEntries.length; i++) {
        existingEntries[i].Y = -i * 200;
    }

    // INPUT VALUE
    const [text, setText] = useState("")

    // VOCABULARY
    const [list, setList] = useState(existingEntries)
    const [filteredList, setFilteredList] = useState([])

    function getStart() {

        setStart(true)
    }

    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                setOffset(offset => offset + 1);
            }, 30);
            return () => clearInterval(interval);
        }

    }, [start]);


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
            {!start ?
                <ModalWindow returnBtn={false} getStart={getStart} title="Destroy all asteroids!" desc="When you press START GAME you will see falling asteroids with words. Enter the translation to the words, one at a time, and press SPACE. If you are correct, asteroid will be destroyed, if not - try again! But BE AWARE, you have time only until asteroid touches the bottom of your screen. HAVE FUN!" />
                :
                ""
            }
            {
                list.length === 0 ?
                    <ModalWindow title="Congratulations! You won!" returnBtn={true} />
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
                    <Resume onClick={() => setPause(!pause)}>{!pause ? "Pause" : "Resume"}</Resume>
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
