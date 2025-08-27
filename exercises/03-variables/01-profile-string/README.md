# Exercise: Profile String

## 🎯 Goal
Learn to use variables to store data and construct a sentence.

## 📝 Instructions
Create variables to store information about yourself, then use them to construct and print a profile sentence.

Your script should:
1. Create variables for your name, age, and favorite hobby
2. Use these variables to construct a sentence
3. Print the complete sentence

## 💡 Example Output
```
My name is Alex, I am 16 years old, and my favorite hobby is reading.
```

## 🔧 How to Complete

**IMPORTANT: Run all commands from the main project folder (where package.json is), not from this exercise folder!**

1. Open `script.js` in this folder (`exercises/03-variables/01-profile-string/script.js`)
2. Replace the placeholder values with your own information:
   - Change `"Your name here"` to your actual name
   - Change `0` to your actual age
   - Change `"Your hobby here"` to your favorite hobby
3. Test your script by running it directly:
   ```bash
   node exercises/03-variables/01-profile-string/script.js
   ```
4. When it looks good, run the automated test:
   ```bash
   npm run test:one -- 03-variables
   ```
5. If you get stuck, check `solution.js` in this folder for a working example

## ✅ Success Criteria
- Your script uses at least 3 variables (name, age, hobby)
- The output is a complete sentence containing all three pieces of information
- The sentence is grammatically correct and readable

## 💭 Learning Focus
- Declaring variables with `let` and `const`
- Storing different types of data (strings, numbers)
- String concatenation with `+` operator
- Template literals with backticks (optional)