const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        let array = [1,2,3]
        expect(shuffleArray(array)).toEqual([...array])
    }),
    test('returns same length as arg', () => {
       expect
    })
})