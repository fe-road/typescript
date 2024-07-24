/*
    Create a function which merge 2 objects together.
*/

// interface PersonRound4 {
//     name?: string;
//     age?: number;
//     gender?: string;
//     occupation?: string;
//     hobbies?: Array<string>;
// }

const merge = (...objects: any): any => {
    return objects.reduce((finalObject: any, item: any) => {
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