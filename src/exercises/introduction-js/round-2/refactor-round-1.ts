/*
    Exercise #01
    Ana is X years old and Marc is Y. What's their age difference?
*/

function calculateAgeDifference(age1 = 0, age2 = 0) {
    return age1 - age2;
}
console.log("Exercise #01");
console.log(calculateAgeDifference(42, 36));

/*
    Exercise #02
    Make a BMI calculator 
    BMI = weight / height^2
*/

function calculateBMI(weight = 0, height = 0) {
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
function Holder(amountOfItems = 0, basketSize = 1) {
    this.items = amountOfItems;
    this.basketSize = basketSize;

    this.amountOfNeededBaskets = function() {
        return Math.ceil(this.items / this.basketSize);
    }

    this.amountOfEmptySpotsOnLastBasket = function() {
        const amountOfEggsLastBasket = this.items % this.basketSize;
        return this.basketSize - amountOfEggsLastBasket;
    }
}
console.log("Exercise #03");
const holder = new Holder(80, 12);
console.log(holder.amountOfNeededBaskets());
console.log(holder.amountOfEmptySpotsOnLastBasket());

/*
    Exercise #04
    Calculate the area of a circle given a certain radius
*/
function calculateCircleArea(radius = 0) {
    return 3.14 * radius ** 2;
}
console.log("Exercise #04");
console.log(calculateCircleArea(12));

/*
    Challenge #01
    Make a Compound interest calculator
*/
function calculateCompoundInterest(initialAmount = 0, interestRate = 0, amountOfTimesInterestIsPaid = 12, years = 1) {
    const totalOfTimesInterestPaid = amountOfTimesInterestIsPaid * years;
    const interestRatePerTime = interestRate / amountOfTimesInterestIsPaid;

    return initialAmount * ((1 + interestRatePerTime) ** totalOfTimesInterestPaid);
}
console.log("Challenge #01");
console.log(calculateCompoundInterest(10000, 0.04));