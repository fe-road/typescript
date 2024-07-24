/*
    Given a matrix of n dimensions, where all elements are guaranteed to be numbers.
    Create a function which returns the sum of all numbers inside this matrix.
*/

interface InfiniteArray {
    [n: number]: Array<number> | InfiniteArray;
}

const matrix: InfiniteArray = [
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

const sumAll = (array: InfiniteArray) => {
    let total = 0;

    if (Array.isArray(array[0])) {
        (array as Array<InfiniteArray>).forEach((child) => {
            total += sumAll(child);
        });
    } else {
        return (array as Array<InfiniteArray>).reduce((accumulator, number) => {
            return (number as unknown as number) + accumulator;
        }, 0);
    }

    return total;
};

console.log(sumAll(matrix));