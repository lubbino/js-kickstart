// Sum 1 to N Exercise
// Goal: Ask for a number N, then calculate the sum of numbers from 1 to N

const prompt = require('prompt-sync')();

// TODO: Ask the user for a number N
// TODO: Convert the input to a number using Number()
// TODO: Create a variable to store the sum (start with 0)
// TODO: Use a for loop to go from 1 to N
// TODO: Inside the loop, add the current number to the sum
// TODO: Display the final result

const N = Number(prompt("Enter a number N: "));
let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += i;
}

console.log("The sum of numbers from 1 to " + N + " is: " + sum);