/*
    Given an array of names, return all of them which contain the letter P
*/

const names: Array<string> = ['Phellipe', 'Geralt', 'Paul', 'Ana', 'Marc'];

const checkIfNameHasLetter = (nameList: Array<string>, letter: string): Array<string> => {
    return nameList.filter((item) => item.toLowerCase().includes(letter.toLowerCase()))
};

console.log(checkIfNameHasLetter(names, 'A'));