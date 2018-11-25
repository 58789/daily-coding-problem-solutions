const { expect } = require('chai')

const ksum = require('../solutions/k-sum')


describe('K-Sum', () => {
    it('throws error on input size < 2', () => {
        expect(() => ksum([1])).to.throw
    })

    it('returns true if two numbers add up to k', () => {
        testTrue([ 1, 2 ], 3)
        testTrue([10, 15, 3, 7], 17)
        testTrue([10, 15, 3, 7], 10)
    })

    it('returns correct result when there are duplicates', () => {
        testTrue([ 2, 2 ], 4)
    })
    
    it('runs in less than 1s for input size of 100,000', function() {
        // Give some time to generate the input array
        this.timeout(1100)
        const range = n => [...Array(n).keys()]
        const input = range(100000)

        testFalse(input, 0)
    })

    it('doesn\'t consider the same number twice', () => {
        // This will fail if the algorithm considers 2 twice. I.e,. 2 * 2 = 4
        testFalse([1, 2], 4)
    })

    it('returns false if no two numbers add up to k', () => {
        testFalse([ 1, 2 ], 1)
        testFalse([ 1, 2 ], 4)
        testFalse([10, 15, 3, 7], 19)
    })
})

const test = expected => (input, k) => {
    const actual = ksum(input, k)
    
    expect(actual, `input: ${input.join(', ')}; k: ${k}`).to.equal(expected)
}

const testTrue = test(true)

const testFalse = test(false)