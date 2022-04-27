import React, { useState } from 'react'

import VocabularyItem from './VocabularyItem'
import AddVocabulary from './AddVocabulary'
import EditVocabulary from './EditVocabulary'
import RulesDesc from './Rules'

import { Wrapper, Nav, Logo, Img, Rules, Container, Desc, Result, Submit } from './InputElements'
import LogoImg from '../../assets/logo.png'


const InputForm = () => {
    const [word, setWord] = useState("")
    const [translation, setTranslation] = useState("")
    const [results, setResults] = useState([])

    // editing vocabulary
    const [isEditing, setIsEditing] = useState(false)
    const [edited, setEdited] = useState({})

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

    function handleEditText(e) {
        setEdited({ ...edited, text: e.target.value });
    }
    function handleEditTranslation(e) {
        setEdited({ ...edited, translation: e.target.value });
    }

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
    const handleEdit = (e, item) => {

        setIsEditing(true)
        setEdited({ ...edited, text: item.word, translation: item.translation })
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
                {isEditing ? (
                    <EditVocabulary
                        word={edited.text}
                        translation={edited.translation}
                        handleKeyDown={handleKeyDown}
                        handleEditText={handleEditText}
                        handleEditTranslation={handleEditTranslation}
                        addResult={addResult}
                    />
                ) : (
                        <AddVocabulary
                            word={word}
                            translation={translation}
                            handleKeyDown={handleKeyDown}
                            handleText={handleText}
                            handleTranslation={handleTranslation}
                            addResult={addResult}
                        />
                    )}
            </Container>
            {
                existingEntries !== [] ? (
                    <Result>
                        {existingEntries.map(item => (

                            <VocabularyItem
                                key={item.id}
                                item={item}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        ))
                        }
                    </Result>
                ) : null
            }
            {existingEntries.length > 0 && !isEditing ? <Submit to="/game">START</Submit> : null}
        </Wrapper >

    )
}

export default InputForm
