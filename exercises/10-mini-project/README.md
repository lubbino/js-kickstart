# Mini-Project: Guess the Number Game

## 🎯 Goal

Create a complete "Guess the Number" game that combines everything you've learned: variables, functions, loops, conditionals, and user input. This mini-project demonstrates how individual programming concepts work together to create a real application.

## 🎮 Game Description

The computer picks a random number between 1 and 100, and the player tries to guess it. After each guess, the game provides feedback:
- "Too high!" if the guess is above the target
- "Too low!" if the guess is below the target  
- "Correct!" when the player guesses the number

The game tracks the number of attempts and congratulates the player when they win.

## 📋 Requirements

Your program should include these **functions** (testable logic):

1. **`generateRandomNumber(min, max)`** - Returns a random integer between min and max (inclusive)
2. **`checkGuess(guess, target)`** - Returns "too high", "too low", or "correct"
3. **`isValidGuess(input)`** - Returns true if input is a valid number between 1-100
4. **`playGame()`** - Main game logic that coordinates everything

And this **interactive file** (for playing):
5. **`cli.js`** - Interactive version using prompt-sync for actual gameplay

## 💡 Example Gameplay

```
Welcome to Guess the Number!
I'm thinking of a number between 1 and 100.

Enter your guess: 50
Too high! Try again.

Enter your guess: 25  
Too low! Try again.

Enter your guess: 37
Too high! Try again.

Enter your guess: 31
Correct! You guessed it in 4 attempts!
```

## 🔧 Setup

1. **Open `script.js`** in this folder
2. **Implement the required functions** (these will be tested)
3. **Test your functions:** `node script.js`
4. **Create `cli.js`** for interactive gameplay (optional but fun!)
5. **Run the automated test:** `npm run test:one -- 10-mini-project`

## 💭 Implementation Hints

### Function 1: Generate Random Number
```javascript
function generateRandomNumber(min, max) {
    // Use Math.random() and Math.floor()
    // Formula: Math.floor(Math.random() * (max - min + 1)) + min
}
```

### Function 2: Check Guess
```javascript
function checkGuess(guess, target) {
    // Compare guess to target
    // Return "too high", "too low", or "correct"
}
```

### Function 3: Validate Input
```javascript
function isValidGuess(input) {
    // Check if input is a number
    // Check if it's between 1 and 100
    // Return true or false
}
```

### Function 4: Game Logic
```javascript
function playGame() {
    // Generate target number
    // Keep track of attempts
    // Use a loop for multiple guesses
    // Return game statistics
}
```

## 🧠 Programming Concepts Used

This project combines:
- **Variables** → Store the target number, guesses, attempts
- **Functions** → Organize code into reusable pieces  
- **Conditionals** → Check if guess is high, low, or correct
- **Loops** → Allow multiple guesses until correct
- **Input/Output** → Get guesses from user, provide feedback
- **Random Numbers** → Generate unpredictable target
- **Validation** → Ensure user input is valid

## 🧪 Testing Your Solution

**Test Functions Individually:**
```bash
node script.js
```

**Test Interactive Game:**
```bash
node cli.js
```

**Run Automated Tests:**
```bash
npm run test:one -- 10-mini-project
```

The automated tests will verify:
- `generateRandomNumber()` produces numbers in the correct range
- `checkGuess()` returns correct feedback
- `isValidGuess()` properly validates input
- `playGame()` coordinates the game logic correctly

## 🎯 Learning Focus

This mini-project helps you practice:
- **Function design** → Breaking problems into smaller pieces
- **Program architecture** → How functions work together
- **User experience** → Providing clear feedback and instructions
- **Input validation** → Handling invalid user input gracefully
- **Game logic** → Managing state and flow control
- **Testing** → Separating testable logic from user interface

## 🔍 Debugging Tips

If your game isn't working:

1. **Test functions individually** → Make sure each function works alone
2. **Check return values** → Use `console.log()` to see what functions return
3. **Verify random numbers** → Test `generateRandomNumber()` multiple times
4. **Test edge cases** → Try guesses of 1, 100, and invalid inputs
5. **Follow the game flow** → Step through `playGame()` logic carefully

## 🌟 Extension Ideas

Once you get the basic version working:

**Enhanced Features:**
- Difficulty levels (different number ranges)
- High score tracking (fewest attempts)
- Hint system (show if guess is "very close")
- Multiple rounds with scoring

**Code Improvements:**
- Add more validation (handle non-numeric input)
- Implement a maximum number of attempts
- Add colorful console output
- Create a web version with HTML

## 🏆 Success Criteria

Your mini-project is complete when:
- [ ] All four required functions are implemented
- [ ] Functions work correctly with different inputs
- [ ] `playGame()` coordinates a complete game session
- [ ] Interactive `cli.js` provides a good user experience
- [ ] All automated tests pass
- [ ] You can play the game and it's fun!

## 🎉 Congratulations!

Completing this mini-project means you've successfully combined all the fundamental programming concepts. You've built a real, working application that demonstrates:
- Problem decomposition (breaking big problems into functions)
- Logic implementation (conditionals and loops)
- User interaction (input/output and validation)
- Code organization (separating concerns)

This is a significant milestone in your programming journey! 🚀

## 📚 What You've Learned

By completing this project, you've demonstrated mastery of:
- **Chapter 2**: Sequence (step-by-step instructions)
- **Chapter 3**: Variables (storing and using data)
- **Chapter 4**: Operators (comparisons and calculations)
- **Chapter 5**: Input/Output (interacting with users)
- **Chapter 6**: Selections (making decisions with if/else)
- **Chapter 7**: Iterations (repeating actions with loops)
- **Chapter 8**: Functions (organizing code into reusable pieces)
- **Chapter 9**: Arrays (managing collections of data)

You're now ready for more advanced programming challenges! 🎓