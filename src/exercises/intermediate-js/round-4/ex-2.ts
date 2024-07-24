/*
    Create a function which receives any number of arrays of strings.
    The function should merge all the arrays together and remove the duplicates.
*/

const mergeArraysRemoveDuplicates = <T>(...arrays: Array<Array<T>>): Array<T> => {
    const mergedArray = arrays.reduce((finalArray, currentArray) => {
        return [...finalArray, ...currentArray];
    }, []);

    return mergedArray.filter((item, index) => {
        const mergedArrayIndex = mergedArray.findIndex((innerItem) => innerItem === item);
        return mergedArrayIndex === index;
    });
};

const array1 = ['Yellow', 'Red', 'Green'];
const array2 = ['Purple', 'Green', 'Blue'];
const array3 = ['Pink', 'Yellow', 'Black', 'White'];

console.log(mergeArraysRemoveDuplicates(array1, array2, array3));