// Might need to generalize by accepting comparer function instead of assuming values
// will be numeric
function bsearch(input = [], key, excludedIndex) {
    return bsearchRecursive(input, key, excludedIndex, 0, input.length - 1)
}

function bsearchRecursive(input, key, excludedIndex, low, high) {
    if (low > high) {
        return null
    }

    const index = parseInt((high + low) / 2)
    const value = input[index]

    if (value < key) {
        return bsearchRecursive(input, key, excludedIndex, index + 1, high)
    } else if (value > key) {
        return bsearchRecursive(input, key, excludedIndex, low, index - 1)
    }

    // if we got this far, it means that value === key

    return index == excludedIndex
        ? neighboringSolution(input, index, key)
        : index
}

const neighboringSolution = (input, index, key) => {
    if (input[index - 1] === key) return index - 1
    if (input[index + 1] === key) return index + 1
    return null
}

module.exports = bsearch
