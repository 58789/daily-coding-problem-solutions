const { expect } = require('chai')

const binarySearch = require('../utils/binary-search')


describe('Binary Search', () => {
    it('returns index of found value', () => {
        const input = [1, 2, 3, 4, 5, 6, 7]
        const searchValue = 3
        const expectedIndex = 2
        
        const actualIndex = binarySearch(input, searchValue)

        expect(actualIndex).to.equal(expectedIndex)
    })

    it('returns null if value is not in the array', () => {
        const input = [1, 2, 3, 4, 5, 6, 7]

        const result = binarySearch(input, 0)

        expect(result).to.be.null
    })

    it('allows exclusion of an index', () => {
        const input = [1, 2, 3, 4, 5, 6, 7]
        const searchValue = 3
        const excludeIndex = 2
        const expectedIndex = null // shouldn't find it since the index is excluded
        
        const actualIndex = binarySearch(input, searchValue, excludeIndex)

        expect(actualIndex).to.equal(expectedIndex)
    })
})
