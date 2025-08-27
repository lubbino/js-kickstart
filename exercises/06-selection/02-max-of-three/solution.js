// Maximum of Three Exercise - Solution
// Goal: Ask for three numbers and find the largest one

const prompt = require('prompt-sync')();

// Ask the user for three numbers
const num1 = Number(prompt("Enter first number: "));
const num2 = Number(prompt("Enter second number: "));
const num3 = Number(prompt("Enter third number: "));

// Find the maximum using step-by-step comparison
let max = num1;  // Start by assuming first number is largest

if (num2 > max) {
    max = num2;  // Update if second number is larger
}

if (num3 > max) {
    max = num3;  // Update if third number is larger
}

// Display the result
console.log("The maximum is: " + max);