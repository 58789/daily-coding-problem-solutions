const { expect } = require('chai')

const { solve } = require('../solutions/rectangle-intersection')

describe('Rectangle Intersection', () => {
    it('returns the area of intersection when rectangles intersect', () => {
        const rectangle1 = {
            topLeft: {
                x: 1,
                y: 4
            },
            dimensions: {
                width: 3,
                height: 3
            }
        }
        const rectangle2 = {
            topLeft: {
                x: 0,
                y: 5
            },
            dimensions: {
                width: 4,
                height: 3
            }
        }

        const expected = 6
        expect(solve(rectangle1, rectangle2)).to.equal(expected)
        expect(
            solve(rectangle1, rectangle2), 'Should yield the same result regardless of the order the rectangles are passed in'
        ).to.equal(solve(rectangle2, rectangle1))
    })

    it('returns correct area when rectangle intersects with itself', () => {
        const rectangle = {
            topLeft: {
                x: 1,
                y: 4
            },
            dimensions: {
                width: 3,
                height: 3
            }
        }

        const expected = rectangle.dimensions.height * rectangle.dimensions.width
        const result = solve(rectangle, rectangle)

        expect(result).to.equal(expected)
    })

    it('returns correct area when a rectangle exists completely within another rectangle')

    it('returns 0 when rectangles don\'t intersect', () => {
        const rectangle1 = {
            topLeft: {
                x: 5,
                y: 5
            },
            dimensions: {
                width: 1,
                height: 1
            }
        }

        const rectangle2 = {
            topLeft: {
                x: 10,
                y: 10
            },
            dimensions: {
                width: 1,
                height: 1
            }
        }

        const result = solve(rectangle1, rectangle2)

        expect(result).to.equal(0)
    })
})