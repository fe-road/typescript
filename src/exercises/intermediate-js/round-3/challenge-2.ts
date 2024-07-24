/*
    Given a matrix of n dimensions, where all elements are guaranteed to be numbers.
    Create a function which returns the sum of all numbers inside this matrix.
*/

const matrix = [
    [
        [2, 4],
        [3, 5],
    ],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    [
        [
            [6, 8],
            [7, 9],
        ],
        [
            [1, 3],
            [4, 8],
        ],
    ],
];

// Total should be 105

const sumAll = (array) => {
    let total = 0;

    if (Array.isArray(array[0])) {
        array.forEach((child) => {
            total += sumAll(child);
        });
    } else {
        return array.reduce((accumulator, number) => {
            return number + accumulator;
        }, 0);
    }

    return total;
};

console.log(sumAll(matrix));