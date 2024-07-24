/*
    Create a function which rotates an array by n positions.
    [1,2,3,4,5] rotating by 2 should be become [4,5,1,2,3]
*/

const numbers = [1, 2, 3, 4, 5];

const rotateArray = (array, amount) => {
    if (amount > array.length) {
        return array;
    }

    const finalArray = [];

    for (let i = 1; i <= amount; i++) {
        const lastEl = array[array.length - i];
        finalArray.unshift(lastEl);
    }
    for (let i = 0; i < array.length - amount; i++) {
        finalArray.push(array[i]);
    }

    return finalArray;
};

console.log(rotateArray(numbers, 2));