# Chapter 7: Iterations

> Learn how to make your programs repeat actions efficiently using loops - one of the most powerful tools in programming.

## 🎯 Learning Goals

By the end of this chapter, you will:
- Understand what iteration (loops) means and why it's essential
- Know how to use `for` loops for counting and repetition
- Use `while` loops for condition-based repetition
- Combine loops with variables to accumulate results
- Write programs that process sequences and perform calculations
- Complete hands-on exercises using different types of loops

> **📚 Study Tip:** Loops can feel tricky at first because they involve thinking about repetition and changing values. Start with simple counting examples, then gradually work up to more complex patterns. The key is understanding how the loop variable changes each time!

## 🔄 What are Iterations?

**Iteration** means repeating a set of instructions multiple times. In programming, we use **loops** to avoid writing the same code over and over.

### Real-Life Analogy

Loops work like everyday repetitive tasks:

**Without Loops (Tedious):**
- Wash dish 1, dry dish 1
- Wash dish 2, dry dish 2  
- Wash dish 3, dry dish 3
- ... (repeat for every dish)

**With Loops (Efficient):**
- **For each dish:** wash it, then dry it

**Programming Examples:**
- **Without loops:** `console.log(1); console.log(2); console.log(3); ...`
- **With loops:** `for (let i = 1; i <= 10; i++) { console.log(i); }`

### Why Loops Matter

Loops let you:
- **Avoid repetition** → Write less code
- **Handle any amount of data** → Process 10 items or 10,000 items with the same code
- **Create patterns** → Generate sequences, tables, and calculations
- **Build interactive programs** → Keep asking for input until user is done

## 🔢 The `for` Loop

The `for` loop is perfect when you know how many times you want to repeat something.

### Basic Syntax

```javascript
for (initialization; condition; update) {
    // Code to repeat
}
```

**Parts explained:**
- **Initialization:** Set up a counter variable (runs once at start)
- **Condition:** Keep looping while this is true (checked before each iteration)
- **Update:** Change the counter after each iteration

### Simple Examples

**Count from 1 to 5:**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5
```

**Count from 10 down to 1:**
```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

**Count by 2s:**
```javascript
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10
```

### Practical Examples

**Multiplication Table:**
```javascript
let number = 7;

console.log("Multiplication table for " + number + ":");
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}
```

**Sum Numbers 1 to 10:**
```javascript
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;  // Add current number to sum
}

console.log("Sum of 1 to 10 is: " + sum);  // Output: 55
```

**Pattern Making:**
```javascript
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
// Output:
// *
// **
// ***
// ****
// *****
```

## ⏳ The `while` Loop

The `while` loop repeats as long as a condition is true. It's perfect when you don't know exactly how many times you'll need to loop.

### Basic Syntax

```javascript
while (condition) {
    // Code to repeat
    // Don't forget to update the condition!
}
```

### Simple Examples

**Count from 1 to 5:**
```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;  // Very important! Update the counter
}
```

**Keep asking until correct password:**
```javascript
const prompt = require('prompt-sync')();
let password = "";

while (password !== "secret") {
    password = prompt("Enter password: ");
    if (password !== "secret") {
        console.log("Wrong password! Try again.");
    }
}

console.log("Access granted!");
```

**Sum numbers until user enters 0:**
```javascript
const prompt = require('prompt-sync')();
let sum = 0;
let number = 1;  // Start with non-zero to enter loop

while (number !== 0) {
    number = Number(prompt("Enter a number (0 to stop): "));
    if (number !== 0) {
        sum += number;
    }
}

console.log("Total sum: " + sum);
```

### ⚠️ Avoiding Infinite Loops

**Dangerous - Infinite Loop:**
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    // Missing i++! This will run forever!
}
```

**Safe - Proper Loop:**
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;  // Always update the condition variable!
}
```

## 🔄 `for` vs `while` - When to Use Which?

### Use `for` when:
- **You know the number of iterations**
- **You're counting or using a counter**
- **You're processing a specific range**

```javascript
// Perfect for 'for' loop
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
```

### Use `while` when:
- **You don't know how many iterations you'll need**
- **You're waiting for a specific condition**
- **You're processing user input until they're done**

```javascript
// Perfect for 'while' loop
const prompt = require('prompt-sync')();
let input = "";

while (input !== "quit") {
    input = prompt("Enter command (or 'quit' to exit): ");
    console.log("You entered: " + input);
}
```

## 🧮 Common Loop Patterns

### Pattern 1: Accumulation (Building Up a Result)

```javascript
// Sum all numbers from 1 to n
let n = 100;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("Sum of 1 to " + n + " is: " + sum);
```

```javascript
// Count how many even numbers from 1 to 20
let count = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log("There are " + count + " even numbers from 1 to 20");
```

### Pattern 2: Input Processing

```javascript
const prompt = require('prompt-sync')();
let total = 0;
let count = 0;

console.log("Enter numbers to calculate average (enter 0 to finish):");

while (true) {
    let number = Number(prompt("Enter number: "));
    
    if (number === 0) {
        break;  // Exit the loop
    }
    
    total += number;
    count++;
}

if (count > 0) {
    let average = total / count;
    console.log("Average: " + average);
} else {
    console.log("No numbers entered.");
}
```

### Pattern 3: Validation Loops

```javascript
const prompt = require('prompt-sync')();
let age;

// Keep asking until we get a valid age
while (true) {
    age = Number(prompt("Enter your age (1-120): "));
    
    if (age >= 1 && age <= 120) {
        break;  // Valid age, exit loop
    }
    
    console.log("Please enter a valid age between 1 and 120.");
}

console.log("Your age is: " + age);
```

### Pattern 4: Menu Systems

```javascript
const prompt = require('prompt-sync')();
let choice = "";

while (choice !== "4") {
    console.log("\n=== Calculator Menu ===");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Exit");
    
    choice = prompt("Choose an option: ");
    
    if (choice === "1") {
        console.log("You chose Addition");
        // Add calculation code here
    } else if (choice === "2") {
        console.log("You chose Subtraction");
        // Add calculation code here
    } else if (choice === "3") {
        console.log("You chose Multiplication");
        // Add calculation code here
    } else if (choice === "4") {
        console.log("Goodbye!");
    } else {
        console.log("Invalid choice. Please try again.");
    }
}
```

## 🎯 Practice Exercises

Time to practice with two exercises that use loops!

### Exercise 1: Count 1 to 10

**Goal:** Create a program that counts from 1 to 10 and displays each number.

**Location:** `exercises/07-iterations/01-count-1-to-10/`

**What you'll do:**
- Use a `for` loop to count from 1 to 10
- Display each number on a separate line
- Practice basic loop syntax

**Example output:**
```
1
2
3
4
5
6
7
8
9
10
```

### Exercise 2: Sum 1 to N

**Goal:** Ask the user for a number N, then calculate and display the sum of all numbers from 1 to N.

**Location:** `exercises/07-iterations/02-sum-1-to-n/`

**What you'll do:**
- Get a number from the user
- Use a loop to add up all numbers from 1 to that number
- Display the final sum

**Example interaction:**
```
Enter a number: 5
The sum of numbers from 1 to 5 is: 15
```

### Getting Started

1. **Navigate to an exercise folder**
2. **Open `script.js` in your editor**
3. **Replace the placeholder code**
4. **Test your script:** `node script.js`
5. **Run the automated test:** `npm run test:one -- 07-iterations`

## 🧠 Common Mistakes and How to Fix Them

### Mistake 1: Off-by-One Errors

**Wrong:**
```javascript
// Wants to print 1 to 10, but stops at 9
for (let i = 1; i < 10; i++) {
    console.log(i);
}
```

**Fixed:**
```javascript
for (let i = 1; i <= 10; i++) {  // Use <= for inclusive range
    console.log(i);
}
```

### Mistake 2: Forgetting to Update Loop Variable

**Wrong:**
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    // Missing i++! Infinite loop!
}
```

**Fixed:**
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;  // Always update the variable!
}
```

### Mistake 3: Wrong Loop Type Choice

**Inefficient:**
```javascript
// Using while when for would be clearer
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
```

**Better:**
```javascript
// for loop is clearer for counting
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### Mistake 4: Modifying Loop Variable Inside Loop

**Confusing:**
```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
    i += 2;  // Don't do this! Confusing and error-prone
}
```

**Better:**
```javascript
for (let i = 1; i <= 10; i += 3) {  // Control increment in for statement
    console.log(i);
}
```

## 🔍 Debugging Loops

### Add Console Logs to Track Progress

```javascript
let sum = 0;

console.log("Starting loop...");

for (let i = 1; i <= 5; i++) {
    console.log("i =", i, ", sum before =", sum);
    sum += i;
    console.log("sum after =", sum);
}

console.log("Final sum:", sum);
```

### Test with Small Numbers First

```javascript
// Test with small range first
for (let i = 1; i <= 3; i++) {  // Start with 3, then increase
    console.log(i);
}
```

### Check Your Loop Conditions

```javascript
// Make sure you understand when the loop stops
let i = 1;
console.log("Starting with i =", i);

while (i <= 5) {
    console.log("Loop iteration, i =", i);
    i++;
    console.log("After increment, i =", i);
}

console.log("Loop ended, final i =", i);
```

## 🎉 What You've Learned

Congratulations! You now understand:

- ✅ **Iteration Concepts**: Why loops are essential for repetitive tasks
- ✅ **for Loops**: Perfect for counting and known repetitions
- ✅ **while Loops**: Great for condition-based repetition
- ✅ **Loop Patterns**: Accumulation, input processing, validation, and menus
- ✅ **Common Mistakes**: How to avoid infinite loops and off-by-one errors
- ✅ **Debugging**: Techniques for understanding loop behavior

## 🚀 What's Next?

In Chapter 8, you'll learn about **Functions** - how to organize your code into reusable blocks that can accept inputs and return outputs. This is where programming really starts to become powerful!

### Before Moving On

Complete these exercises to practice working with loops:

1. **[`exercises/07-iterations/01-count-1-to-10/`](../../exercises/07-iterations/01-count-1-to-10/)** - Basic counting with for loops
2. **[`exercises/07-iterations/02-sum-1-to-n/`](../../exercises/07-iterations/02-sum-1-to-n/)** - Accumulation pattern with user input

**Instructions:**
- Each exercise folder contains a `README.md` with detailed instructions
- Edit the `script.js` file in each exercise folder
- Test your code directly: `node exercises/07-iterations/[exercise]/script.js`
- Run automated tests: `npm run test:one -- 07-iterations`
- Check `solution.js` files if you get stuck

**Make sure you can:**
- [ ] Write basic `for` loops for counting
- [ ] Use `while` loops for condition-based repetition
- [ ] Accumulate values using loops (like summing numbers)
- [ ] Avoid infinite loops by properly updating loop variables
- [ ] Complete both iteration exercises successfully

---

**Ready to learn about organizing code?** Let's move on to Chapter 8! 🔧