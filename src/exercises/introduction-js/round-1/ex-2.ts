/*
    Make a BMI calculator 
    BMI = weight / height^2
*/

const weight = 68;
const height = 175;

const formattedHeight = height / 100;
const bmi = weight / (formattedHeight ** 2);

console.log("BMI: ", bmi);
