export const ASTEROIDS = {
    0: { shape: [[0]], color: 'transparent' },
    1: {
        shape: [
            [0, '1', "1", 0],
            ['1', '1', "1", '1'],
            ['1', '1', '1', '1'],
            [0, '1', '1', 0]
        ],
        color: '80,227,230',
    },
    2: {
        shape: [
            [0, '2', "2", 0],
            ['2', '2', "2", '2'],
            ['2', '2', '2', '2'],
            [0, '2', '2', 0]
        ],
        color: '36,95,223',
    },
    3: {
        shape: [
            [0, '3', "3", 0],
            ['3', '3', "3", '3'],
            ['3', '3', '3', '3'],
            [0, '3', '3', 0]
        ],
        color: '223,173,36',
    },

}


export const randomAsteroid = () => {
    const asteroids = '123'
    const randAsteroid = asteroids[Math.floor(Math.random() * asteroids.length)]

    return ASTEROIDS[randAsteroid]
}