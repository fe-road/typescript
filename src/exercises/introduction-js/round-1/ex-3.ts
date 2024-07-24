/*
    I have 80 eggs and each basket can hold 12 eggs.
    
    1. How many baskets I need?
    2. How many empty spots will be in the last basket?
*/

const eggs = 80;
const basketSize = 12;

const neededBaskets = Math.ceil(eggs / basketSize);
console.log('Amount of baskets: ', neededBaskets);

const amountOfEggsLastBasket = eggs % basketSize;
console.log('Empty spots: ', basketSize - amountOfEggsLastBasket);