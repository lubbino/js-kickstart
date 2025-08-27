// Greet User Exercise - SOLUTION
// Ask for the user's name and provide a personalized greeting

const prompt = require('prompt-sync')();

// Ask for the user's name
const name = prompt("What is your name? ");

// Create and display a personalized greeting
console.log("Hello, " + name + "! Welcome to JavaScript programming!");