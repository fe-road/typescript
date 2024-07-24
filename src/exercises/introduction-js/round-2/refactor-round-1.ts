/*
    Exercise #01
    Ana is X years old and Marc is Y. What's their age difference?
*/

function calculateAgeDifference(age1: number = 0, age2: number = 0): number {
    return age1 - age2;
}
console.log("Exercise #01");
console.log(calculateAgeDifference(42, 36));

/*
    Exercise #02
    Make a BMI calculator 
    BMI = weight / height^2
*/

function calculateBMI(weight: number = 0, height: number = 0): number {
    const formattedHeight = height / 100;
    return weight / (formattedHeight ** 2);
}
console.log("Exercise #02");
console.log(calculateBMI(72, 180));

/*
    Exercise #03
    I have X items and each basket can hold Y items.
    
    1. How many baskets I need?
    2. How many empty spots will be in the last basket?
*/
const amountOfNeededBaskets = (numberOfItems: number, basketSize: number): number => {
    return Math.ceil(numberOfItems / basketSize);
};

const amountOfEmptySpotsOnLastBasket = (numberOfItems: number, basketSize: number): number => {
    const amountOfEggsLastBasket = numberOfItems % basketSize;
    return basketSize - amountOfEggsLastBasket;
};

console.log("Exercise #03");
// const holder = new (HolderImpl as any)(80, 12) as Holder;
console.log(amountOfNeededBaskets(80, 12));
console.log(amountOfEmptySpotsOnLastBasket(80, 12));

/*
    Exercise #04
    Calculate the area of a circle given a certain radius
*/
function calculateCircleArea(radius: number = 0): number {
    return 3.14 * radius ** 2;
}
console.log("Exercise #04");
console.log(calculateCircleArea(12));

/*
    Challenge #01
    Make a Compound interest calculator
*/
function calculateCompoundInterest(
    initialAmount: number = 0,
    interestRate: number = 0,
    amountOfTimesInterestIsPaid: number = 12,
    years: number = 1
): number {
    const totalOfTimesInterestPaid = amountOfTimesInterestIsPaid * years;
    const interestRatePerTime = interestRate / amountOfTimesInterestIsPaid;

    return initialAmount * ((1 + interestRatePerTime) ** totalOfTimesInterestPaid);
}
console.log("Challenge #01");
console.log(calculateCompoundInterest(10000, 0.04));