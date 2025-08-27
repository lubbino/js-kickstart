// Mini-Project: Guess the Number Game
// Complete Solution

// Function 1: Generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function 2: Check if a guess is too high, too low, or correct
function checkGuess(guess, target) {
    if (guess > target) {
        return "too high";
    } else if (guess < target) {
        return "too low";
    } else {
        return "correct";
    }
}

// Function 3: Validate if input is a valid guess (number between 1-100)
function isValidGuess(input) {
    // Check if input is a number
    const num = Number(input);
    
    // Check if conversion was successful and number is in valid range
    return !isNaN(num) && num >= 1 && num <= 100 && Number.isInteger(num);
}

// Function 4: Main game logic (for testing - returns game statistics)
function playGame() {
    const target = generateRandomNumber(1, 100);
    let attempts = 0;
    let won = false;
    let guesses = [];
    
    // Simulate a game with some realistic guesses
    // This is for testing purposes - the actual interactive game is in cli.js
    const testGuesses = [50, 75, 62, 68, 65, target]; // Example game progression
    
    for (let guess of testGuesses) {
        attempts++;
        guesses.push(guess);
        
        const result = checkGuess(guess, target);
        if (result === "correct") {
            won = true;
            break;
        }
        
        // Prevent infinite loops in testing
        if (attempts >= 10) {
            break;
        }
    }
    
    return {
        target: target,
        attempts: attempts,
        won: won,
        guesses: guesses
    };
}

// Interactive game function (used by cli.js)
function playInteractiveGame(promptFunction) {
    console.log("Welcome to Guess the Number!");
    console.log("I'm thinking of a number between 1 and 100.\n");
    
    const target = generateRandomNumber(1, 100);
    let attempts = 0;
    let won = false;
    
    while (!won) {
        const input = promptFunction("Enter your guess: ");
        
        // Validate input
        if (!isValidGuess(input)) {
            console.log("Please enter a valid number between 1 and 100.");
            continue;
        }
        
        const guess = Number(input);
        attempts++;
        
        const result = checkGuess(guess, target);
        
        if (result === "correct") {
            won = true;
            console.log(`\nCorrect! You guessed it in ${attempts} attempt${attempts === 1 ? '' : 's'}!`);
            console.log(`The number was ${target}.`);
        } else if (result === "too high") {
            console.log("Too high! Try again.\n");
        } else {
            console.log("Too low! Try again.\n");
        }
        
        // Safety check to prevent infinite loops
        if (attempts >= 20) {
            console.log("\nGame ended after 20 attempts. The number was " + target);
            break;
        }
    }
    
    return {
        target: target,
        attempts: attempts,
        won: won
    };
}

// Test the functions (this code runs when you execute: node solution.js)
if (require.main === module) {
    console.log("Testing Guess the Number functions...\n");
    
    // Test generateRandomNumber
    console.log("Testing generateRandomNumber(1, 10):");
    for (let i = 0; i < 5; i++) {
        const num = generateRandomNumber(1, 10);
        console.log(`  Random number: ${num} (valid: ${num >= 1 && num <= 10})`);
    }
    
    // Test checkGuess
    console.log("\nTesting checkGuess:");
    console.log(`  checkGuess(50, 75): ${checkGuess(50, 75)}`);
    console.log(`  checkGuess(100, 75): ${checkGuess(100, 75)}`);
    console.log(`  checkGuess(75, 75): ${checkGuess(75, 75)}`);
    
    // Test isValidGuess
    console.log("\nTesting isValidGuess:");
    console.log(`  isValidGuess(50): ${isValidGuess(50)}`);
    console.log(`  isValidGuess(1): ${isValidGuess(1)}`);
    console.log(`  isValidGuess(100): ${isValidGuess(100)}`);
    console.log(`  isValidGuess(0): ${isValidGuess(0)}`);
    console.log(`  isValidGuess(101): ${isValidGuess(101)}`);
    console.log(`  isValidGuess("abc"): ${isValidGuess("abc")}`);
    console.log(`  isValidGuess(50.5): ${isValidGuess(50.5)}`);
    
    // Test playGame
    console.log("\nTesting playGame:");
    const result = playGame();
    console.log(`  Target: ${result.target}`);
    console.log(`  Attempts: ${result.attempts}`);
    console.log(`  Won: ${result.won}`);
    console.log(`  Guesses: [${result.guesses.join(', ')}]`);
}

// Export functions for testing and cli.js
module.exports = {
    generateRandomNumber,
    checkGuess,
    isValidGuess,
    playGame,
    playInteractiveGame
};