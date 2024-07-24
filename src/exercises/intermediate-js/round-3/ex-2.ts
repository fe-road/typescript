/*
    Write a function which receives 2 arrays and merge them together.
*/

const mergeRound3 = <T>(array1: Array<T>, array2: Array<T>): Array<T> => {
    const finalArray: Array<T> = [];

    array1.forEach((item) => finalArray.push(item));
    array2.forEach((item) => finalArray.push(item));

    return finalArray;
};

console.log(mergeRound3([1, 3, 5], [2, 4, 6, 8]));