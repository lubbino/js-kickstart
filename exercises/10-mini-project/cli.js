// Mini-Project: Guess the Number Game
// Interactive Command Line Interface

const prompt = require('prompt-sync')();
const { playInteractiveGame } = require('./solution');

// Simple wrapper to make prompt work with our game function
function promptWrapper(message) {
    return prompt(message);
}

// Start the interactive game
console.log("🎮 Guess the Number Game 🎮");
console.log("================================\n");

try {
    playInteractiveGame(promptWrapper);
} catch (error) {
    if (error.message.includes('prompt-sync')) {
        console.log("\n❌ Error: prompt-sync is required to play the interactive game.");
        console.log("Install it with: npm install prompt-sync");
        console.log("\nAlternatively, you can test the functions with: node script.js");
    } else {
        console.log("An error occurred:", error.message);
    }
}

console.log("\nThanks for playing! 🎉");