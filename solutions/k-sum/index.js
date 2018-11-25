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

function solveOptimal(input = [], k = 0) {
    validateInput(input)

    throw new Error('not yet implemented')
}



module.exports = solveNaive;

function validateInput(input) {
    if (input.length < 2) {
        throw new Error('Input size must be >= 2')
    }
}