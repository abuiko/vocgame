import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { Wrapper, Container, Form, Text, Button, Result, Row, Left, Right, Icons, Submit } from './InputElements'


const InputForm = () => {
    const [word, setWord] = useState("")
    const [translation, setTranslation] = useState("")
    const [results, setResults] = useState([])

    const handleText = (e) => {
        setWord(e.target.value);
    };
    const handleTranslation = (e) => {
        setTranslation(e.target.value);
    };

    // local storage
    let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    console.log(existingEntries)

    const addResult = () => {

        if (word !== "" && translation !== "") {
            if (existingEntries == null) existingEntries = [];

            const obj = {
                id: Math.floor(Math.random() * 1000),
                word: word,
                translation: translation,
            };
            localStorage.setItem("entry", JSON.stringify(obj));
            // Save allEntries back to local storage
            existingEntries.push(obj);
            localStorage.setItem("allEntries", JSON.stringify(existingEntries));

            setResults([...results, obj]);

        }
    }
    const deleteResult = (e, id) => {
        e.preventDefault()
        const obj = existingEntries.filter(item => item.id != id)
        localStorage.setItem("allEntries", JSON.stringify(obj));
        setResults(results.filter((item) => item.id != id))
    }



    return (
        <Wrapper>
            <Container>
                <Form>
                    <Text
                        type="text"
                        name="text"
                        id="text"
                        onChange={(e) => handleText(e)}
                        placeholder="Word"
                        required />
                    <Text
                        type="text"
                        name="translation"
                        id="translation"
                        onChange={(e) => handleTranslation(e)}
                        placeholder="Translation"
                        required />
                    <Button onClick={addResult}>Add</Button>
                </Form>

                {existingEntries !== [] ? (
                    <Result>
                        {existingEntries.map(item => (
                            <Row key={item.id}>
                                <Left>{item.word}</Left>
                                <Right>{item.translation}</Right>
                                <Icons>
                                    <FiEdit style={{ marginRight: "20px", cursor: "pointer", color: "#8E3FFF" }} />
                                    <AiOutlineDelete style={{ cursor: "pointer", color: "#8E3FFF" }} onClick={(e) => deleteResult(e, item.id)} />
                                </Icons>
                            </Row>
                        ))
                        }
                    </Result>
                ) : null}
                {existingEntries.length > 0 ? <Submit>START GAME</Submit> : null}
            </Container>
        </Wrapper>

    )
}

export default InputForm
