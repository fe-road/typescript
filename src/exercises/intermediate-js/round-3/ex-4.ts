/*
    Given an array of numbers, find the largest number inside it.
*/

const numbersRound3: Array<number> = [4, 12, 7, 98, 55];

const findLargestNumber = (numberList: Array<number>): number => {
    // Option 1
    // let largest = numberList[0];
    // numberList.forEach((num) => {
    //     if (num > largest) {
    //         largest = num;
    //     }
    // });
    // return largest;

    // Option 2
    return numberList.reduce((largest, num) => {
        if (num > largest) {
            return num;
        }
        return largest;
    }, numberList[0]);
};

console.log(findLargestNumber(numbersRound3));