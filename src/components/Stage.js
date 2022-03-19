import React, { useState } from 'react'
import styled from 'styled-components'
import image from '../assets/bg.jpg'
import asteroid from '../assets/asteroid1.png'


const Right = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(25vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    width: 100%;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image:  linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),url(${image});
`
const Form = styled.div`
    position: absolute;
    bottom: 6%;
    left: 50%;
    transform: translate(-50%, -6%);
`
const Input = styled.input`
    width: 500px;
    padding: 15px 10px 15px 30px;
    border: 2px solid #fff;
    border-radius: 5px;
    background: rgba(0,0,0,0.6);
    color: #fff;
    font-size: 18px;
`
const Set = styled.ul`
        list-style: none;
        display: flex;
        justify-content: space-between;
`

const Wrap = styled.div`
        position: relative;
        width: 200px;
        height: 170px;

`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const Word = styled.li`
        color: white;
        font-size: 20px; 
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);  
`





const Stage = () => {
    let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    const words = existingEntries.map(item => <Wrap key={item.id}><Image src={asteroid} alt="asteroid" /><Word >{item.word}</Word></Wrap>)


    const [text, setText] = useState("")

    function handleChange(e) {
        setText(e.target.value);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log(text)
        }
    }



    return (
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
    )
}

export default Stage
