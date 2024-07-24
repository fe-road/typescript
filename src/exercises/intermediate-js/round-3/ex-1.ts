/*
    Given an array of sports, check if swimming is inside it.
*/

const sports = ['Soccer', 'Basketball', 'Swimming', 'Tennis'];

const checkIfSportExists = (list, option) => {
    return list.some((sport) => sport.toLowerCase() === option.toLowerCase());
};

console.log(checkIfSportExists(sports, 'swimming'));