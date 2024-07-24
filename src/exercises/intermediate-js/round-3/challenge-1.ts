/*
    Given an array of people containing a name and a gender (F or M)
    Create a function that returns an object containing 2 arrays:
        - One for all the Females
        - One for all the Males
*/

type Gender = 'M' | 'F';
type PersonRound3 = {
    name: string;
    gender: Gender;
}
type PersonGroupingByGender = {
    [Gender: string]: Array<string>;
}

const people: Array<PersonRound3> = [
    { name: 'Phellipe', gender: 'M' },
    { name: 'Ana', gender: 'F' },
    { name: 'Carolina', gender: 'F' },
    { name: 'Paul', gender: 'M' },
    { name: 'Geralt', gender: 'M' },
];

const splitByGender = (list: Array<PersonRound3>): PersonGroupingByGender => {
    return list.reduce((accumulator, item) => {
        const gender = item.gender;
        if (!accumulator[gender]) {
            accumulator[gender] = [];
        }

        (accumulator[gender] as Array<string>).push(item.name);
        return accumulator;
    }, { 'M': [], 'F': [] });
};

console.log(splitByGender(people));