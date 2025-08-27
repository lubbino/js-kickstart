# Exercise: Age Category

## 🎯 Goal

Create a program that asks for a user's age and categorizes them into appropriate age groups.

## 📋 Requirements

Your program should:

1. **Ask for the user's age** using `prompt()`
2. **Convert the input to a number** using `Number()`
3. **Categorize the age** using `if`/`else if` statements:
   - **0-12**: "You are a child."
   - **13-19**: "You are a teenager."
   - **20-64**: "You are an adult."
   - **65+**: "You are a senior."
4. **Display the appropriate message**

## 💡 Example Interaction

```
Enter your age: 25
You are an adult.
```

```
Enter your age: 16
You are a teenager.
```

```
Enter your age: 70
You are a senior.
```

## 🔧 Setup

1. **Open `script.js`** in this folder
2. **Replace the placeholder code** with your solution
3. **Test your program:** `node script.js`
4. **Run the automated test:** `npm run test:one -- 06-selection`

## 💭 Hints

- Remember to use `const prompt = require('prompt-sync')();` at the top
- Use `Number()` to convert the string input to a number
- Think about the order of your conditions - start with the most specific ranges
- Use `else if` to chain multiple conditions together

## 🧪 Testing Your Solution

**Manual Testing:**
```bash
node script.js
```

**Automated Testing:**
```bash
npm run test:one -- 06-selection
```

The automated test will check various age inputs to make sure your categorization works correctly.

## 🎯 Learning Focus

This exercise helps you practice:
- Using `if`/`else if` statements for multiple conditions
- Working with number ranges and comparisons
- Converting user input from strings to numbers
- Creating logical condition chains

Take your time and make sure you understand how the conditions work together!