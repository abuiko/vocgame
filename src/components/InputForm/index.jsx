import React, { useState } from 'react'

import VocabularyItem from './VocabularyItem'
import AddVocabulary from './AddVocabulary'
import EditVocabulary from './EditVocabulary'
import RulesDesc from './Rules'

import { Wrapper, Nav, Logo, Img, Rules, Container, Desc, Result, Submit } from './InputElements'
import LogoImg from '../../assets/logo.png'


const InputForm = () => {

    const [text, setText] = useState({
        word: "",
        translation: ""
    })

    // vocabulary list
    const [vocabulary, setVocabulary] = useState([])

    // editing vocabulary
    const [isEditing, setIsEditing] = useState(false)
    const [edited, setEdited] = useState({})

    // RULES COMPONENT
    const [isOpen, setIsOpen] = useState(false)
    // to open rules component
    const handleRules = () => {
        setIsOpen(!isOpen)
    }

    // add text / translation to "text" object
    const handleText = (e) => {

        setText(prevState => ({
            ...prevState,
            word: e.target.value
        }))
    };

    const handleTranslation = (e) => {
        setText(prevState => ({
            ...prevState,
            translation: e.target.value
        }))
    };


    function handleEditText(e) {
        setEdited({ ...edited, text: e.target.value });
    }
    function handleEditTranslation(e) {
        setEdited({ ...edited, translation: e.target.value });
    }

    // local storage
    let existingEntries = JSON.parse(localStorage.getItem("allEntries"));

    const addToVocabulary = () => {

        if (text.word !== "" && text.translation !== "") {
            if (existingEntries == null) existingEntries = [];

            const obj = {
                id: Math.floor(Math.random() * 1000),
                word: text.word,
                translation: text.translation,
                position: Math.floor(Math.random() * 80)
            };
            localStorage.setItem("entry", JSON.stringify(obj));
            // Save allEntries back to local storage
            existingEntries.push(obj);
            localStorage.setItem("allEntries", JSON.stringify(existingEntries));

            setVocabulary([...vocabulary, obj]);
            setText(prevState => ({
                ...prevState,
                word: "",
                translation: ""
            }))
        }
    }

    const editVocabulary = () => {

        console.log('editing')

    }

    // when click "trash icon" to delete vocabulary item
    const handleDelete = (e, id) => {
        e.preventDefault()
        const obj = existingEntries.filter(item => item.id != id)
        localStorage.setItem("allEntries", JSON.stringify(obj));
        setVocabulary(vocabulary.filter((item) => item.id != id))
    }

    // when click "edit icon" to edit vocabulary item
    const handleEdit = (e, item) => {

        setIsEditing(true)
        setEdited({ ...edited, id: item.id, text: item.word, translation: item.translation })
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !isEditing) {
            addToVocabulary()
        } else if (event.key === 'Enter' && isEditing) {
            editVocabulary()
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
                        editVocabulary={editVocabulary}

                    />
                ) : (
                        <AddVocabulary
                            word={text.word}
                            translation={text.translation}
                            handleKeyDown={handleKeyDown}
                            handleText={handleText}
                            handleTranslation={handleTranslation}
                            addToVocabulary={addToVocabulary}
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
