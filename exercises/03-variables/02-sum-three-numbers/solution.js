// Sum Three Numbers Exercise - SOLUTION
// Read three numbers from user input and calculate their sum

const prompt = require('prompt-sync')();

// Get three numbers from the user
const firstNumber = Number(prompt("Enter first number: "));
const secondNumber = Number(prompt("Enter second number: "));
const thirdNumber = Number(prompt("Enter third number: "));

// Calculate the sum
const sum = firstNumber + secondNumber + thirdNumber;

// Display the result
console.log("The sum is: " + sum);