import { useState } from 'react'

import { randomAsteroid } from '../../asteroids'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        asteroid: randomAsteroid().shape,
        collided: false,
    })

    return [player]

}