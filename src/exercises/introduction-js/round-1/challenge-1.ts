// Make a Compound interest calculator

const initialAmount = 20000;
const interestRate = 0.08;
const amountOfTimesInterestIsPaid = 12;
const years = 5;

const totalOfTimesInterestPaid = amountOfTimesInterestIsPaid * years;
const interestRatePerTime = interestRate / amountOfTimesInterestIsPaid;

const finalAmount = initialAmount * ((1 + interestRatePerTime) ** totalOfTimesInterestPaid);
console.log("Final Amount: ", finalAmount);