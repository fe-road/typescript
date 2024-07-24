/*
    Calculate the sum of all numbers from 1 until a given number.
*/

function calculateSumOfNumbers(target: number, start: number = 1, increment: number = 1): number {
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