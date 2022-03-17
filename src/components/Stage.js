import React from 'react'
import styled from 'styled-components'
import image from '../assets/bg.jpg'
import Cell from './Cell'

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

const Stage = ({ stage }) => {
    return (
        <Right width={stage[0].length} height={stage.length}>
            {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}

            <Form>
                <Input
                    placeholder="Type your answer and press enter..."
                />
            </Form>
        </Right>
    )
}

export default Stage