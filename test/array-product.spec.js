const { expect } = require('chai')

const solve = require('../solutions/array-product')


describe('Array Product', function() {
    it('returns correct result', () => {
        test([1, 2, 3, 4, 5], [120, 60, 40, 30, 24])
        test([3, 2, 1], [2, 3, 6])
    })

    it('handles 0 in input', () => {
        test([3, 2, 1, 0], [0, 0, 0, 6])
    })

    it('throws error if input size is < 2', () => {
        expect(() => solve([1])).to.throw();
    })
})

const test = (input, expected) => {
    const actual = solve(input)
    expect(actual, `input: ${input.join(', ')}`).to.deep.equal(expected)
}
