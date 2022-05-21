const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        let array = [1,2,3]
        expect(shuffleArray(array))
    }),
    test('returns same length as arg', () => {
        let array = [2,3,4,5,6]
       expect(shuffleArray(array).length).toEqual(array.length)
    }),
    test('has same items', () => {
        const expected = [1, 2, 3, 4, 5, 6];
        expect(shuffleArray(expected))
        .toEqual(expect.arrayContaining(expected));
    })

})