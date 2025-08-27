# Exercise: Sum 1 to N

## 🎯 Goal

Create a program that asks the user for a number N, then calculates and displays the sum of all numbers from 1 to N using a loop.

## 📋 Requirements

Your program should:

1. **Ask the user for a number N** using `prompt()`
2. **Convert the input to a number** using `Number()`
3. **Use a loop** to add up all numbers from 1 to N
4. **Display the final sum** with a clear message

## 💡 Example Interaction

```
Enter a number: 5
The sum of numbers from 1 to 5 is: 15
```

```
Enter a number: 10
The sum of numbers from 1 to 10 is: 55
```

```
Enter a number: 3
The sum of numbers from 1 to 3 is: 6
```

## 🔧 Setup

1. **Open `script.js`** in this folder
2. **Replace the placeholder code** with your solution
3. **Test your program:** `node script.js`
4. **Run the automated test:** `npm run test:one -- 07-iteration`

## 💭 Hints

- Remember to use `const prompt = require('prompt-sync')();` at the top
- Use `Number()` to convert the string input to a number
- Create a variable to store the running sum (start with 0)
- Use a `for` loop to go from 1 to N
- Inside the loop, add the current number to your sum
- Display the final result after the loop ends

## 🧠 Understanding the Math

Let's trace through the example with N = 5:

**Before loop:** `sum = 0`
**i = 1:** `sum = 0 + 1 = 1`
**i = 2:** `sum = 1 + 2 = 3`
**i = 3:** `sum = 3 + 3 = 6`
**i = 4:** `sum = 6 + 4 = 10`
**i = 5:** `sum = 10 + 5 = 15`
**Final result:** `15`

This pattern is called **accumulation** - building up a result step by step.

## 🧪 Testing Your Solution

**Manual Testing:**
```bash
node script.js
```

Try different inputs:
- Small numbers like 3 or 5
- Larger numbers like 10 or 100
- Edge case: 1 (should give 1)

**Automated Testing:**
```bash
npm run test:one -- 07-iteration
```

The automated test will check various inputs to make sure your calculation is correct.

## 🎯 Learning Focus

This exercise helps you practice:
- Using loops for accumulation (building up a result)
- Combining user input with loop processing
- Understanding how variables change inside loops
- Working with the common pattern of summing a sequence

This is a fundamental programming pattern you'll use often!