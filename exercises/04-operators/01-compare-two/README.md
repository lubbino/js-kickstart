# Exercise: Compare Two Numbers

## 🎯 Goal
Learn to use comparison operators to compare two numbers and display the relationship.

## 📝 Instructions
Create a script that:
1. Asks the user to enter two numbers
2. Compares the numbers using comparison operators
3. Prints whether the first number is greater than, less than, or equal to the second number

## 💡 Example Run
```
Enter first number: 15
Enter second number: 10
15 is greater than 10
```

```
Enter first number: 5
Enter second number: 8
5 is less than 8
```

```
Enter first number: 7
Enter second number: 7
7 is equal to 7
```

## 🔧 How to Complete

**IMPORTANT: Run all commands from the main project folder (where package.json is), not from this exercise folder!**

1. Make sure you have prompt-sync installed: `npm run setup:prompt`
2. Open `script.js` in this folder (`exercises/04-operators/01-compare-two/script.js`)
3. Replace the placeholder messages with proper comparison messages that include both numbers
4. Test your script by running it directly:
   ```bash
   node exercises/04-operators/01-compare-two/script.js
   ```
5. Try different number combinations to test all three cases (greater, less, equal)
6. When it works correctly, run the automated test:
   ```bash
   npm run test:one -- 04-operators
   ```
7. If you get stuck, check `solution.js` in this folder for a working example

## ✅ Success Criteria
- Your script prompts for two numbers
- It correctly identifies and displays the relationship (greater, less, or equal)
- The output is clear and grammatically correct

## 💭 Learning Focus
- Comparison operators: `>`, `<`, `===`
- Conditional statements: `if`, `else if`, `else`
- Converting user input to numbers
- Logical decision making in code

## 🔍 Hints
- Use `===` for equality comparison (not `=` which is assignment)
- Make sure to convert string inputs to numbers before comparing
- Test with different combinations: first > second, first < second, first === second