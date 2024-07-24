/*
    Calculate the sum of all numbers from 1 until a given number.
*/

function calculateSumOfNumbers(target, start = 1, increment = 1) {
    let sum = 0;
    for (let i = start; i <= target; i += increment) {
        sum += i;
    }
    return sum;
}

console.log(calculateSumOfNumbers(5));
console.log(calculateSumOfNumbers(7));
console.log(calculateSumOfNumbers(659));
console.log(calculateSumOfNumbers(659, 1, 3));
console.log(calculateSumOfNumbers(659, 200, 4));