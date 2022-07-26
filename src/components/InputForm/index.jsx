import React, { useState } from 'react'
import VocabularyItem from './VocabularyItem'
import AddVocabulary from './AddVocabulary'
import RulesDesc from './Rules'
import { Wrapper, Nav, Logo, Img, Rules, Container, Desc, Result, Submit } from './InputElements'
import LogoImg from '../../assets/logo.png'


const InputForm = () => {

    // INPUT VALUES (WORD / TRANSLATION)
    const [text, setText] = useState({
        word: "",
        translation: ""
    })

    // VOCABULARY AFTER ADDING TO THE LOCAL STORAGE
    const [vocabulary, setVocabulary] = useState([])

    // RULES LINK
    const [isOpen, setIsOpen] = useState(false)

    // HANDLE RULES LINK
    const handleRules = () => {
        setIsOpen(!isOpen)
    }

    // ADD WORD INPUT VALUE
    const handleText = (e) => {
        setText(prevState => ({
            ...prevState,
            word: e.target.value
        }))
    };

    // ADD TRANSLATION INPUT VALUE
    const handleTranslation = (e) => {
        setText(prevState => ({
            ...prevState,
            translation: e.target.value
        }))
    };

    // GET FROM LOCAL STORAGE
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

            // ADD TO LOCAL STORAGE
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

    // DELETE ITEM WHEN CLICK TRASH ICON
    const handleDelete = (e, id) => {
        e.preventDefault()
        const obj = existingEntries.filter(item => item.id != id)
        localStorage.setItem("allEntries", JSON.stringify(obj));
        setVocabulary(vocabulary.filter((item) => item.id != id))
    }

    // ADD TO VOCABULARY WHEN PUSH ENTER
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addToVocabulary()
        }
    }

    return (
        <Wrapper>
            {isOpen ? <RulesDesc handleRules={handleRules} /> : ""}
            {/* <Nav>
                <Logo>
                    <Img src={LogoImg} alt="logo" />
                </Logo>
                <Rules onClick={handleRules}>Rules</Rules>
            </Nav> */}

            <Container>


                <AddVocabulary
                    word={text.word}
                    translation={text.translation}
                    handleKeyDown={handleKeyDown}
                    handleText={handleText}
                    handleTranslation={handleTranslation}
                    addToVocabulary={addToVocabulary}
                />

            </Container>
            <Container>
                {
                    existingEntries !== [] ? (
                        <Result>
                            {existingEntries.map(item => (

                                <VocabularyItem
                                    key={item.id}
                                    item={item}
                                    handleDelete={handleDelete}
                                />
                            ))
                            }
                        </Result>
                    ) : null
                }
                {existingEntries.length > 0 ? <Submit to="/game">START</Submit> : null}
            </Container>

        </Wrapper >

    )
}

export default InputForm
