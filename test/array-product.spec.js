const { expect } = require('chai')

const solver = require('../solutions/array-product')

const tester = (solve) => (input, expected) => {
    const actual = solve(input)
    expect(actual, `input: ${input.join(', ')}`).to.deep.equal(expected)
}

const runTests = (test) => {
    it('returns correct result', () => {
        test([1, 2, 3, 4, 5], [120, 60, 40, 30, 24])
        test([3, 2, 1], [2, 3, 6])
    })

    it('throws error if input size is < 2', () => {
        expect(() => solve([1])).to.throw();
    })
}


describe('Array Product', function() {
    describe('With Division', () => {
        const test = tester(solver.solve)
        runTests(test)
    })

    describe('Without Division', () => {
        const test = tester(solver.solveNoDivision)
        runTests(test)
    })
})
