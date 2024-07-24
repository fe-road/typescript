/*
    Given an array of people containing a name and a gender (F or M)
    Create a function that returns an object containing 2 arrays:
        - One for all the Females
        - One for all the Males
*/

const people = [
    { name: 'Phellipe', gender: 'M' },
    { name: 'Ana', gender: 'F' },
    { name: 'Carolina', gender: 'F' },
    { name: 'Paul', gender: 'M' },
    { name: 'Geralt', gender: 'M' },
];

const splitByGender = (list) => {
    return list.reduce((accumulator, item) => {
        const gender = item.gender;
        if (!accumulator[gender]) {
            accumulator[gender] = [];
        }

        accumulator[gender].push(item.name);
        return accumulator;
    }, {});
};

console.log(splitByGender(people));