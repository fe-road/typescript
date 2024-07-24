/*
    Create a function which merge 2 objects together.
*/

const merge = (...objects) => {
    return objects.reduce((finalObject, item) => {
        return { ...finalObject, ...item };
    }, {});
};

console.log(merge({
    name: 'Phellipe Perin',
    age: 30,
}, {
    gender: 'M',
    occupation: 'Software Developer'
}, {
    hobbies: ['Dance', 'Games'],
}))