import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 80vh;   
    display: flex;
    justify-content: center;
    align-items: center;
`
const Form = styled.div`
    
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

const InputForm = () => {

    return (
        <Container>
            <Form>
                <Text placeholder="Word" required />
                <Text placeholder="Translation" required />
                <Button>ADD</Button>
            </Form>
        </Container>
    )
}

export default InputForm
