/*
    Write a function which counts the amount of consonants in a given string.
*/

function countConsonantsRound1(str: string): number {
    const formattedStr = str.toLowerCase()
        .replaceAll('a', '')
        .replaceAll('e', '')
        .replaceAll('i', '')
        .replaceAll('o', '')
        .replaceAll('u', '');

    return formattedStr.length;
}

console.log(countConsonantsRound1('bcdtrllkj')); // 9