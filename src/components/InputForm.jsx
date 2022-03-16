import React, { useState } from 'react'
import styled from 'styled-components'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

const Container = styled.div`
    min-height: 100vh;   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px;
    margin: auto;
`
const Form = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Text = styled.input`
    margin-right: 10px;
    padding: 10px 10px 10px 2px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 16px;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    border: 1px solid #000;
    color: white;
    
    background: #000;
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #fff;
        color: #000;
    }
`

const Result = styled.div`
    width: 100%;
    margin-top: 50px;
`

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 15px 0px;
   
`
const Left = styled.div``
const Right = styled.div``

const Icons = styled.div`
    font-size: 22px;
`

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
                                <AiOutlineDelete style={{ cursor: "pointer", color: "red" }} />
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
