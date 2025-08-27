# Exercise: Greet User

## 🎯 Goal
Practice basic input and output by creating a personalized greeting program.

## 📝 Instructions
Create a script that:
1. Asks the user for their name
2. Reads the input
3. Prints a personalized greeting message

## 💡 Example Run
```
What is your name? Alice
Hello, Alice! Welcome to JavaScript programming!
```

## 🔧 How to Complete

**IMPORTANT: Run all commands from the main project folder (where package.json is), not from this exercise folder!**

1. Make sure you have prompt-sync installed: `npm run setup:prompt`
2. Open `script.js` in this folder (`exercises/05-io/01-greet-user/script.js`)
3. Replace the placeholder greeting message with your own friendly greeting
4. Test your script by running it directly:
   ```bash
   node exercises/05-io/01-greet-user/script.js
   ```
5. Try entering different names to see how it works
6. When it works correctly, run the automated test:
   ```bash
   npm run test:one -- 05-io
   ```
7. If you get stuck, check `solution.js` in this folder for a working example

## ✅ Success Criteria
- Your script prompts for the user's name
- It displays a personalized greeting that includes the name
- The greeting is friendly and welcoming

## 💭 Learning Focus
- Reading user input with prompt-sync
- String concatenation or template literals
- Creating interactive programs
- Basic input/output flow

## 🔍 Hints
- Make your prompt clear and friendly
- Include the user's name in your greeting
- You can use string concatenation (`+`) or template literals (backticks)
- Test with different names to make sure it works correctly