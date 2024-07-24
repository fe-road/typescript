/*
    Write a function which counts the amount of consonants in a given string.
*/

function countConsonants(str) {
    const formattedStr = str.toLowerCase()
        .replaceAll('a', '')
        .replaceAll('e', '')
        .replaceAll('i', '')
        .replaceAll('o', '')
        .replaceAll('u', '');

    return formattedStr.length;
}

console.log(countConsonants('Aeiou')); // 0
console.log(countConsonants('bananas')); // 4
console.log(countConsonants('bcdtrllkj')); // 9