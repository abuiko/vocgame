import React from 'react'
import { StyledCell } from './styles/StyledCell'
import { ASTEROIDS } from '../asteroids'


const Cell = ({ type }) => {
    return (
        <StyledCell type={type} color={ASTEROIDS[type].color} />
    )
}

export default Cell
