/*
    Given an array of sports, check if swimming is inside it.
*/

const sports: Array<string> = ['Soccer', 'Basketball', 'Swimming', 'Tennis'];

const checkIfSportExists = (list: Array<string>, option: string): boolean => {
    return list.some((sport) => sport.toLowerCase() === option.toLowerCase());
};

console.log(checkIfSportExists(sports, 'swimming'));