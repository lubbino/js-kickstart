# Exercise: Maximum of Three

## 🎯 Goal

Create a program that asks for three numbers and determines which one is the largest.

## 📋 Requirements

Your program should:

1. **Ask for three numbers** using `prompt()`
2. **Convert each input to a number** using `Number()`
3. **Use selection statements** to determine which number is largest
4. **Display the maximum number** with a clear message

## 💡 Example Interaction

```
Enter first number: 15
Enter second number: 23
Enter third number: 8
The maximum is: 23
```

```
Enter first number: 42
Enter second number: 17
Enter third number: 55
The maximum is: 55
```

```
Enter first number: 10
Enter second number: 10
Enter third number: 5
The maximum is: 10
```

## 🔧 Setup

1. **Open `script.js`** in this folder
2. **Replace the placeholder code** with your solution
3. **Test your program:** `node script.js`
4. **Run the automated test:** `npm run test:one -- 06-selection`

## 💭 Hints

- Remember to use `const prompt = require('prompt-sync')();` at the top
- Use `Number()` to convert each string input to a number
- You can approach this in different ways:
  - **Method 1:** Use nested `if` statements
  - **Method 2:** Use `if`/`else if` with compound conditions
  - **Method 3:** Find the max step by step using a variable
- Think about edge cases: what if two or all three numbers are the same?

## 🧠 Thinking Through the Logic

Here are some approaches you could use:

**Approach 1: Nested if statements**
```javascript
if (num1 >= num2) {
    if (num1 >= num3) {
        // num1 is largest
    } else {
        // num3 is largest
    }
} else {
    // num2 might be largest, but check against num3
}
```

**Approach 2: Step-by-step comparison**
```javascript
let max = num1;  // Assume first is largest
if (num2 > max) {
    max = num2;  // Update if second is larger
}
if (num3 > max) {
    max = num3;  // Update if third is larger
}
```

Choose the approach that makes the most sense to you!

## 🧪 Testing Your Solution

**Manual Testing:**
```bash
node script.js
```

**Automated Testing:**
```bash
npm run test:one -- 06-selection
```

The automated test will check various combinations of numbers to make sure your logic works correctly.

## 🎯 Learning Focus

This exercise helps you practice:
- Using selection statements for complex comparisons
- Working with multiple variables and conditions
- Handling edge cases (equal numbers)
- Breaking down complex logic into manageable steps

Take your time to think through the logic before coding!