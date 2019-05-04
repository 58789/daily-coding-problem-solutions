const self = module.exports

const reverse = array => array.slice().reverse()

/**
 * 
 * @param {Array<number>} input 
 * @returns {Number} Product
 */
const product = (input = [1]) => {
    const fn = (result, value) => result * value
    return input.reduce(fn, 1)
}

const buildProductsArray = ({ input = [1], reversed = false }) => {
    const results = new Array(input.length)

    if (reversed) {
        for(let i = input.length - 1; i >= 0; i--) {
            const previous = results[i + 1] || 1
            const current = input[i]
            results[i] = previous * current
        }
    } else {
        for(let i = 0; i < input.length; i++) {
            const previous = results[i - 1] || 1
            const current = input[i]
            results[i] = previous * current
        }
    }

    return results
}

self.solve = (input = [1]) => {
    if (input.length < 2) {
        throw new Error('Input size must be at least 2')
    }

    const totalProduct = product(input)

    return input.map(value => totalProduct / value)
}

self.solveNoDivision = (input = []) => {
    const prefix = buildProductsArray({ input, reversed: false })
    const postfix = buildProductsArray({ input, reversed: true })

    const calculateProduct = index => (prefix[index - 1] || 1) * (postfix[index + 1] || 1)

    return input.map((value, index) => calculateProduct(index))
}