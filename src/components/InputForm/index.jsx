import React, { useState } from 'react'
import VocabularyItem from './VocabularyItem'
import { Wrapper, Nav, Logo, Img, Rules, Container, Desc, Form, Text, Button, Result, Submit } from './InputElements'
import LogoImg from '../../assets/logo.png'
import RulesDesc from './Rules'

const InputForm = () => {
    const [word, setWord] = useState("")
    const [translation, setTranslation] = useState("")
    const [results, setResults] = useState([])

    // editing vocabulary
    const [isEditing, setIsEditing] = useState(false)

    // rules component
    const [isOpen, setIsOpen] = useState(false)

    // to open rules component
    const handleRules = () => {
        setIsOpen(!isOpen)
    }

    const handleText = (e) => {
        setWord(e.target.value);
    };
    const handleTranslation = (e) => {
        setTranslation(e.target.value);
    };

    // local storage
    let existingEntries = JSON.parse(localStorage.getItem("allEntries"));

    const addResult = () => {

        if (word !== "" && translation !== "") {
            if (existingEntries == null) existingEntries = [];

            const obj = {
                id: Math.floor(Math.random() * 1000),
                word: word,
                translation: translation,
                position: Math.floor(Math.random() * 80)
            };
            localStorage.setItem("entry", JSON.stringify(obj));
            // Save allEntries back to local storage
            existingEntries.push(obj);
            localStorage.setItem("allEntries", JSON.stringify(existingEntries));

            setResults([...results, obj]);
            setWord("")
            setTranslation("")

        }
    }

    // when click "trash icon" to delete vocabulary item
    const handleDelete = (e, id) => {
        e.preventDefault()
        const obj = existingEntries.filter(item => item.id != id)
        localStorage.setItem("allEntries", JSON.stringify(obj));
        setResults(results.filter((item) => item.id != id))
    }

    // when click "edit icon" to edit vocabulary item
    const handleEdit = () => {
        setIsEditing(true)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addResult()
        }
    }

    return (
        <Wrapper>
            {isOpen ? <RulesDesc handleRules={handleRules} /> : ""}

            <Nav>
                <Logo>
                    <Img src={LogoImg} alt="logo" />
                </Logo>
                <Rules onClick={() => handleRules()}>Rules</Rules>
            </Nav>
            <Container>
                <Desc>Fill out word and traslation fields below, press ADD button to add to vocabulary. Then press START GAME to proceed.</Desc>
                <Form>
                    <Text
                        type="text"
                        name="word"
                        value={word}
                        id="word"
                        onChange={(e) => handleText(e)}
                        onKeyDown={handleKeyDown}
                        placeholder="Word"
                        required />
                    <Text
                        type="text"
                        name="translation"
                        value={translation}
                        id="translation"
                        onChange={(e) => handleTranslation(e)}
                        onKeyDown={handleKeyDown}
                        placeholder="Translation"
                        required />
                    <Button onClick={addResult}>Add</Button>
                </Form>


            </Container>
            {
                existingEntries !== [] ? (
                    <Result>
                        {existingEntries.map(item => (

                            <VocabularyItem
                                item={item}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        ))
                        }
                    </Result>
                ) : null
            }
            {existingEntries.length > 0 ? <Submit to="/game">START</Submit> : null}
        </Wrapper >

    )
}

export default InputForm
