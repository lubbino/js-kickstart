// Age Category Exercise - Solution
// Goal: Ask for user's age and categorize them appropriately

const prompt = require('prompt-sync')();

// Ask the user for their age
const age = Number(prompt("Enter your age: "));

// Use if/else if statements to categorize the age
if (age <= 12) {
    console.log("You are a child.");
} else if (age <= 19) {
    console.log("You are a teenager.");
} else if (age <= 64) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}