// Mini-Project: Guess the Number Game
// Student Implementation File

// Function 1: Generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    // TODO: Implement this function
    // Hint: Use Math.random() and Math.floor()
    // Formula: Math.floor(Math.random() * (max - min + 1)) + min
}

// Function 2: Check if a guess is too high, too low, or correct
function checkGuess(guess, target) {
    // TODO: Implement this function
    // Return "too high", "too low", or "correct"
}

// Function 3: Validate if input is a valid guess (number between 1-100)
function isValidGuess(input) {
    // TODO: Implement this function
    // Return true if valid, false if invalid
}

// Function 4: Main game logic
function playGame() {
    // TODO: Implement the main game logic
    // 1. Generate a random target number
    // 2. Initialize attempt counter
    // 3. Use a loop to get guesses until correct
    // 4. Return game statistics (attempts, target number, etc.)
    
    // For now, return a simple object to make tests pass
    return {
        target: 50,
        attempts: 1,
        won: true
    };
}

// Test your functions (this code runs when you execute: node script.js)
if (require.main === module) {
    console.log("Testing Guess the Number functions...\n");
    
    // Test generateRandomNumber
    console.log("Testing generateRandomNumber(1, 10):");
    for (let i = 0; i < 5; i++) {
        console.log(`  Random number: ${generateRandomNumber(1, 10)}`);
    }
    
    // Test checkGuess
    console.log("\nTesting checkGuess:");
    console.log(`  checkGuess(50, 75): ${checkGuess(50, 75)}`);
    console.log(`  checkGuess(100, 75): ${checkGuess(100, 75)}`);
    console.log(`  checkGuess(75, 75): ${checkGuess(75, 75)}`);
    
    // Test isValidGuess
    console.log("\nTesting isValidGuess:");
    console.log(`  isValidGuess(50): ${isValidGuess(50)}`);
    console.log(`  isValidGuess(0): ${isValidGuess(0)}`);
    console.log(`  isValidGuess(101): ${isValidGuess(101)}`);
    console.log(`  isValidGuess("abc"): ${isValidGuess("abc")}`);
    
    // Test playGame
    console.log("\nTesting playGame:");
    const result = playGame();
    console.log(`  Game result:`, result);
}

// Export functions for testing
module.exports = {
    generateRandomNumber,
    checkGuess,
    isValidGuess,
    playGame
};