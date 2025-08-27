# Exercise: Sum Three Numbers

## 🎯 Goal
Learn to read user input, store it in variables, and perform arithmetic operations.

## 📝 Instructions
Create a script that:
1. Asks the user to enter three numbers
2. Reads the input and stores each number in a variable
3. Calculates the sum of the three numbers
4. Prints the result

## 💡 Example Run
```
Enter first number: 5
Enter second number: 10
Enter third number: 3
The sum is: 18
```

## 🔧 How to Complete

**IMPORTANT: Run all commands from the main project folder (where package.json is), not from this exercise folder!**

1. First, install the prompt library: `npm run setup:prompt`
2. Open `script.js` in this folder (`exercises/03-variables/02-sum-three-numbers/script.js`)
3. Replace the `0` in the sum calculation with the correct formula using the three variables
4. Test your script by running it directly:
   ```bash
   node exercises/03-variables/02-sum-three-numbers/script.js
   ```
5. When it works correctly, run the automated test:
   ```bash
   npm run test:one -- 03-variables
   ```
6. If you get stuck, check `solution.js` in this folder for a working example

## ✅ Success Criteria
- Your script prompts for three numbers
- It correctly calculates and displays the sum
- The output shows the final result clearly

## 💭 Learning Focus
- Reading user input with prompt-sync
- Converting strings to numbers
- Arithmetic operations with the `+` operator
- Working with multiple variables

## 🔍 Hints
- Remember that `prompt()` returns a string, so you need to convert to numbers
- Use clear, descriptive prompts for the user
- Test with different numbers to make sure your calculation is correct