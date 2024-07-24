/*
    Create a function which returns the `n` Fibonacci number
    0, 1, 1, 2, 3, 5, 8, 13, 21, ...
*/

const fibonacci = (number) => {
    if (number === 0) {
        return 0;
    }
    if (number === 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(8));
console.log(fibonacci(15));