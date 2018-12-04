const solve = (input = [1]) => {
    if (input.length < 2) {
        throw new Error('Input size must be at least 2')
    }

    const totalProduct = product(input)

    return input.map(value => totalProduct / value)
}

const product = (input = [1]) => {
    const fn = (result, value) => result * value
    return input.reduce(fn, 1)
}


module.exports = solve