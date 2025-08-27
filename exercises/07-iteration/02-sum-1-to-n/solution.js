// Sum 1 to N Exercise - Solution
// Goal: Ask for a number N, then calculate the sum of numbers from 1 to N

const prompt = require('prompt-sync')();

// Ask the user for a number N
const n = Number(prompt("Enter a number: "));

// Create a variable to store the sum (start with 0)
let sum = 0;

// Use a for loop to go from 1 to N
for (let i = 1; i <= n; i++) {
    sum += i;  // Add the current number to the sum
}

// Display the final result
console.log("The sum of numbers from 1 to " + n + " is: " + sum);