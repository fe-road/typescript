/*
    Write a function which receives 2 arrays and merge them together.
*/

const merge = (array1, array2) => {
    const finalArray = [];

    array1.forEach((item) => finalArray.push(item));
    array2.forEach((item) => finalArray.push(item));

    return finalArray;
};

console.log(merge([1, 3, 5], [2, 4, 6, 8]));