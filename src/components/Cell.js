import React from 'react'
import { StyledCell } from './styles/StyledCell'
import { ASTEROIDS } from '../asteroids'


const Cell = ({ type }) => {
    return (
        <StyledCell type={'L'} color={ASTEROIDS['L'].color} />
    )
}

export default Cell
