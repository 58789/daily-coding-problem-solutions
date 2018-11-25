const bsearch = require('../../utils/binary-search')

function solveNaive(input = [], k = 0) {
    // O(n^2) time. O(1) space

    for(let i = 0; i < input.length; i++) {
        let num1 = input[i]
        for (let j = i + 1; j < input.length; j++) {
            let num2 = input[j]
            let isSolution = (num1 + num2) === k

            if (isSolution) {
                return true
            }
        }
    }

    return false
}

function solveOptimized(input = [], k = 0) {
    // O(nlgn) time. O(1) space
    validateInput(input)

    input.sort(numberCompare)

    const pair = value => k - value

    return !!input.find((value, index) => bsearch(input, pair(value), index) != null)
}

function numberCompare(a, b) {
    if (a < b) return -1
    if (a > b) return 1
    return 0
}



module.exports = solveOptimized;

function validateInput(input) {
    if (input.length < 2) {
        throw new Error('Input size must be >= 2')
    }
}