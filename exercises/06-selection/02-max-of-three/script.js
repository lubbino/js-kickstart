// Maximum of Three Exercise
// Goal: Ask for three numbers and find the largest one

const prompt = require('prompt-sync')();

// TODO: Ask the user for three numbers
// TODO: Convert each input to a number using Number()
// TODO: Use selection statements to determine which number is largest
// TODO: Display the maximum number

let num1 = Number(prompt('Enter the first number: '));
let num2 = Number(prompt('Enter the second number: '));
let num3 = Number(prompt('Enter the third number: '));
let max;

if (num1 >= num2 && num1 >= num3) {
    max = num1;
} else if (num2 >= num1 && num2 >= num3) {
    max = num2;
} else {
    max = num3;
}

console.log("The maximum number is: " + max);