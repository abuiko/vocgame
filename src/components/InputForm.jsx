import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { Container, Form, Text, Button, Result, Row, Left, Right, Icons } from './InputElements'


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
    const addResult = () => {

        if (word !== "" && translation !== "") {
            const obj = {
                id: Math.floor(Math.random() * 1000),
                word: word,
                translation: translation,
            };

            setResults([...results, obj]);
        }
    }
    const deleteResult = (e, id) => {
        e.preventDefault();
        setResults(results.filter((item) => item.id != id));
    };

    return (
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
                <Button onClick={addResult}>ADD</Button>
            </Form>

            {results !== [] ? (
                <Result>
                    {results.map(item => (
                        <Row key={item.id}>
                            <Left>{item.word}</Left>
                            <Right>{item.translation}</Right>
                            <Icons>
                                <FiEdit style={{ marginRight: "20px", cursor: "pointer", color: "green" }} />
                                <AiOutlineDelete style={{ cursor: "pointer", color: "red" }} onClick={(e) => deleteResult(e, item.id)} />
                            </Icons>
                        </Row>
                    ))
                    }
                </Result>
            ) : null}


        </Container>
    )
}

export default InputForm
