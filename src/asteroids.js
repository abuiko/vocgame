export const ASTEROIDS = {
    0: { shape: [[0]], color: 'transparent' },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '80,227,230',
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: '36,95,223',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '223,173,36',
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: '223,217,36',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '48,211,56',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '132,71,36',
    },
}


export const randomAsteroid = () => {
    const asteroids = 'IJLOST'
    const randAsteroid = asteroids[Math.floor(Math.random() * asteroids.length)]

    return ASTEROIDS[randAsteroid]
}