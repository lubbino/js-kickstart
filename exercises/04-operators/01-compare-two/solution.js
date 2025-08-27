// Compare Two Numbers Exercise - SOLUTION
// Read two numbers and compare them using comparison operators

const prompt = require('prompt-sync')();

// Get two numbers from the user
const firstNumber = Number(prompt("Enter first number: "));
const secondNumber = Number(prompt("Enter second number: "));

// Compare the numbers and display the result
if (firstNumber > secondNumber) {
    console.log(firstNumber + " is greater than " + secondNumber);
} else if (firstNumber < secondNumber) {
    console.log(firstNumber + " is less than " + secondNumber);
} else {
    console.log(firstNumber + " is equal to " + secondNumber);
}