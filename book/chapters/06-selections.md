# Chapter 6: Selections

> Learn how to make your programs smart by teaching them to make decisions based on different conditions.

## 🎯 Learning Goals

By the end of this chapter, you will:
- Understand what selection statements are and why they're useful
- Know how to use `if` statements to make decisions
- Use `else` and `else if` for multiple conditions
- Combine conditions with logical operators
- Write programs that respond differently to different inputs
- Complete hands-on exercises using selection statements

> **📚 Study Tip:** This chapter introduces decision-making in programming. Focus on understanding the basic `if` statement first, then gradually work up to more complex conditions. The key is understanding when and why your program should do different things!

## 🤔 What are Selections?

**Selection statements** let your program make decisions and choose different paths based on conditions. Think of them as the "if this, then that" logic of programming.

### Real-Life Analogy

Selection statements work like everyday decisions:

**Human Decision:**
- **If** it's raining → take an umbrella
- **If** you're hungry → eat something
- **If** it's late → go to sleep

**Program Decision:**
- **If** age >= 18 → print "You can vote"
- **If** score >= 90 → print "Excellent!"
- **If** password is correct → allow login

### Why Selections Matter

Without selections, programs would be like:
- A thermostat that can't adjust temperature
- A game that never responds to player choices
- A calculator that always does the same operation

With selections, programs become:
- **Smart** → They can adapt to different situations
- **Interactive** → They respond to user input
- **Useful** → They can handle real-world complexity

## 🔀 The `if` Statement

The `if` statement is the most basic selection. It says: "If this condition is true, do this action."

### Basic Syntax

```javascript
if (condition) {
    // Code to run if condition is true
}
```

### Simple Examples

```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult!");
}
```

```javascript
let temperature = 85;

if (temperature > 80) {
    console.log("It's hot outside!");
}
```

```javascript
let score = 95;

if (score >= 90) {
    console.log("Excellent work!");
}
```

### With User Input

```javascript
const prompt = require('prompt-sync')();

let password = prompt("Enter password: ");

if (password === "secret123") {
    console.log("Access granted!");
}
```

## 🔄 The `else` Statement

The `else` statement handles what happens when the `if` condition is false. It provides an alternative path.

### Syntax

```javascript
if (condition) {
    // Code if condition is true
} else {
    // Code if condition is false
}
```

### Examples

```javascript
let age = 16;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You cannot vote yet.");
}
```

```javascript
let score = 75;

if (score >= 80) {
    console.log("Great job!");
} else {
    console.log("Keep practicing!");
}
```

```javascript
const prompt = require('prompt-sync')();

let number = Number(prompt("Enter a number: "));

if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is zero or negative.");
}
```

## 🔀 The `else if` Statement

When you need to check multiple conditions, use `else if`. It lets you create a chain of decisions.

### Syntax

```javascript
if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition2 is true
} else {
    // Code if all conditions are false
}
```

### Examples

**Grade Calculator:**
```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
```

**Age Categories:**
```javascript
let age = 25;

if (age < 13) {
    console.log("You are a child.");
} else if (age < 20) {
    console.log("You are a teenager.");
} else if (age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}
```

**Weather Response:**
```javascript
const prompt = require('prompt-sync')();

let weather = prompt("What's the weather like? ");

if (weather === "sunny") {
    console.log("Perfect day for a picnic!");
} else if (weather === "rainy") {
    console.log("Don't forget your umbrella!");
} else if (weather === "snowy") {
    console.log("Time to build a snowman!");
} else {
    console.log("Enjoy your day!");
}
```

## 🧠 Complex Conditions

You can combine multiple conditions using logical operators from Chapter 4.

### Using AND (`&&`)

Both conditions must be true:

```javascript
let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive!");
} else {
    console.log("You cannot drive.");
}
```

```javascript
let score = 85;
let attendance = 90;

if (score >= 80 && attendance >= 85) {
    console.log("You pass the class!");
} else {
    console.log("You need to improve.");
}
```

### Using OR (`||`)

At least one condition must be true:

```javascript
let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
} else {
    console.log("It's a weekday.");
}
```

```javascript
let weather = "rainy";

if (weather === "rainy" || weather === "snowy") {
    console.log("Stay inside today!");
} else {
    console.log("Great day to go outside!");
}
```

### Using NOT (`!`)

Flips the condition:

```javascript
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in first.");
} else {
    console.log("Welcome back!");
}
```

## 💡 Common Patterns with Selections

### Pattern 1: Input Validation

```javascript
const prompt = require('prompt-sync')();

let age = Number(prompt("Enter your age: "));

if (age < 0 || age > 150) {
    console.log("Please enter a valid age.");
} else {
    console.log("Your age is " + age);
}
```

### Pattern 2: Menu Systems

```javascript
const prompt = require('prompt-sync')();

console.log("=== Calculator ===");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");

let choice = prompt("Choose an option (1-3): ");

if (choice === "1") {
    console.log("You chose Addition");
} else if (choice === "2") {
    console.log("You chose Subtraction");
} else if (choice === "3") {
    console.log("You chose Multiplication");
} else {
    console.log("Invalid choice");
}
```

### Pattern 3: Range Checking

```javascript
let temperature = 72;

if (temperature < 32) {
    console.log("Freezing!");
} else if (temperature < 60) {
    console.log("Cold");
} else if (temperature < 80) {
    console.log("Comfortable");
} else {
    console.log("Hot!");
}
```

### Pattern 4: Status Checking (Advanced)

```javascript
let batteryLevel = 15;
let isCharging = false;

if (batteryLevel < 10) {
    console.log("Critical battery! Charge immediately!");
} else if (batteryLevel < 20 && !isCharging) {
    console.log("Low battery. Please charge soon.");
} else if (isCharging) {
    console.log("Battery is charging...");
} else {
    console.log("Battery level is good.");
}
```

## 🎯 Practice Exercises

Now it's time to practice with two exercises that use selection statements!

### Exercise 1: Age Category

**Goal:** Ask for a user's age and categorize them appropriately.

**Location:** `exercises/06-selections/01-age-category/`

**What you'll do:**
- Get the user's age as input
- Use `if`/`else if` statements to categorize the age
- Display the appropriate category

**Example interaction:**
```
Enter your age: 25
You are an adult.
```

### Exercise 2: Maximum of Three

**Goal:** Find and display the largest of three numbers.

**Location:** `exercises/06-selections/02-max-of-three/`

**What you'll do:**
- Get three numbers from the user
- Use selection statements to find the largest
- Display which number is the maximum

**Example interaction:**
```
Enter first number: 15
Enter second number: 23
Enter third number: 8
The maximum is: 23
```

### Getting Started

1. **Navigate to an exercise folder**
2. **Open `script.js` in your editor**
3. **Replace the placeholder code**
4. **Test your script:** `node script.js`
5. **Run the automated test:** `npm run test:one -- 06-selections`

## 🧠 Common Mistakes and How to Fix Them

### Mistake 1: Using Assignment Instead of Comparison

**Wrong:**
```javascript
if (age = 18) {  // Assignment, not comparison!
    console.log("You are 18");
}
```

**Fixed:**
```javascript
if (age === 18) {  // Proper comparison
    console.log("You are 18");
}
```

### Mistake 2: Missing Braces

**Risky:**
```javascript
if (score >= 90)
    console.log("Great!");
    console.log("Keep it up!");  // This always runs!
```

**Better:**
```javascript
if (score >= 90) {
    console.log("Great!");
    console.log("Keep it up!");
}
```

### Mistake 3: Incorrect Condition Logic

**Wrong:**
```javascript
// Wants: "weekend is Saturday OR Sunday"
if (day === "Saturday" && day === "Sunday") {  // Impossible!
    console.log("Weekend!");
}
```

**Fixed:**
```javascript
if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend!");
}
```

### Mistake 4: Unreachable Conditions

**Wrong:**
```javascript
if (score >= 80) {
    console.log("Good");
} else if (score >= 90) {  // This will never run!
    console.log("Excellent");
}
```

**Fixed:**
```javascript
if (score >= 90) {
    console.log("Excellent");
} else if (score >= 80) {
    console.log("Good");
}
```

## 🔍 Debugging Selection Statements

### Test Different Inputs

```javascript
let age = 17;  // Try different values: 17, 18, 25, etc.

console.log("Testing with age:", age);

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

### Break Down Complex Conditions

```javascript
let score = 85;
let attendance = 90;

// Test each part separately
console.log("Score >= 80:", score >= 80);
console.log("Attendance >= 85:", attendance >= 85);
console.log("Both conditions:", score >= 80 && attendance >= 85);
```

### Use Console Logs to Trace Flow

```javascript
console.log("Checking conditions...");

if (temperature > 80) {
    console.log("Condition 1: Hot weather");
} else if (temperature > 60) {
    console.log("Condition 2: Mild weather");
} else {
    console.log("Condition 3: Cold weather");
}

console.log("Done checking.");
```

## 🎉 What You've Learned

Congratulations! You now understand:

- ✅ **Selection Statements**: How programs make decisions
- ✅ **if Statements**: Basic conditional execution
- ✅ **else Statements**: Alternative paths
- ✅ **else if Statements**: Multiple condition chains
- ✅ **Complex Conditions**: Combining conditions with logical operators
- ✅ **Common Patterns**: Real-world uses of selections

## 🚀 What's Next?

In Chapter 7, you'll learn about **Iterations** - how to make your programs repeat actions using loops. This will let you process lists, count, and automate repetitive tasks!

### Before Moving On

Complete these exercises to practice working with selection statements:

1. **[`exercises/06-selections/01-age-category/`](../../exercises/06-selections/01-age-category/)** - Categorize users by age
2. **[`exercises/06-selections/02-max-of-three/`](../../exercises/06-selections/02-max-of-three/)** - Find the largest of three numbers

**Instructions:**
- Each exercise folder contains a `README.md` with detailed instructions
- Edit the `script.js` file in each exercise folder
- Test your code directly: `node exercises/06-selections/[exercise]/script.js`
- Run automated tests: `npm run test:one -- 06-selections`
- Check `solution.js` files if you get stuck

**Make sure you can:**
- [ ] Write basic `if` statements
- [ ] Use `else` for alternative actions
- [ ] Chain conditions with `else if`
- [ ] Combine conditions with logical operators
- [ ] Complete both selection exercises successfully

---

**Ready to learn about repetition?** Let's move on to Chapter 7! 🔄