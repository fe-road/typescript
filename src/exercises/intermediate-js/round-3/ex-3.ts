/*
    Given an array of names, return all of them which contain the letter P
*/

const names = ['Phellipe', 'Geralt', 'Paul', 'Ana', 'Marc'];

const checkIfNameHasLetter = (nameList, letter) => {
    return nameList.filter((item) => item.toLowerCase().includes(letter.toLowerCase()))
};

console.log(checkIfNameHasLetter(names, 'A'));