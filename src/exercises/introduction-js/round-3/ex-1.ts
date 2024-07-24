/*
    Create 2 functions: 
    1. Prints if the received number as parameter is negative, positive or 0
    2. Prints if the received number as parameter is odd or even
*/

function isNegativeOrPositive(number) {
    if (number > 0) {
        console.log('Number is positive');
    } else if (number < 0) {
        console.log('Number is negative');
    } else {
        console.log('Number is 0');
    }
}

isNegativeOrPositive(7);
isNegativeOrPositive(-3);
isNegativeOrPositive(0);

function isOddOrEven(number) {
    if (number % 2 === 0) {
        console.log('Number is even');
    } else {
        console.log('Number is odd');
    }
}

isOddOrEven(7);
isOddOrEven(-2);
isOddOrEven(0);