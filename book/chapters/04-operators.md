# Chapter 4: Operators

> Learn how to perform calculations, make comparisons, and combine logical conditions.

## 🎯 Learning Goals

By the end of this chapter, you will:
- Understand different types of operators in JavaScript
- Use arithmetic operators for mathematical calculations
- Apply comparison operators to compare values
- Combine conditions with logical operators
- Understand operator precedence and how to use parentheses
- Complete a hands-on exercise comparing two numbers

> **📚 Study Tip:** This chapter covers many operators, but don't worry about memorizing everything at once! Focus on mastering the basics (arithmetic, basic comparisons, and simple logical operations) first. The more complex concepts will become natural with practice.

## ⚡ What are Operators?

**Operators** are special symbols that perform operations on values (called operands). Think of them as tools that do specific jobs:

- **Arithmetic operators** → Do math (`+`, `-`, `*`, `/`)
- **Comparison operators** → Compare values (`>`, `<`, `===`)
- **Logical operators** → Combine conditions (`&&`, `||`, `!`)

### Real-Life Analogy

Operators are like tools in a toolbox:
- **Calculator** (`+`, `-`) → Does math
- **Scale** (`>`, `<`) → Compares weights
- **Logic gates** (`&&`, `||`) → Combines true/false conditions

## 🧮 Arithmetic Operators

Arithmetic operators perform mathematical calculations:

### Basic Arithmetic

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `15 / 3` | `5` |
| `%` | Modulus (remainder) | `7 % 3` | `1` |

### Examples in Code

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1 (remainder when 10 is divided by 3)
```

### Practical Uses

**Calculating totals:**
```javascript
let price = 19.99;
let quantity = 3;
let tax = 0.08;

let subtotal = price * quantity;
let taxAmount = subtotal * tax;
let total = subtotal + taxAmount;

console.log("Subtotal: $" + subtotal);
console.log("Tax: $" + taxAmount);
console.log("Total: $" + total);
```

**Working with time:**
```javascript
let totalMinutes = 150;
let hours = Math.floor(totalMinutes / 60);  // 2
let minutes = totalMinutes % 60;            // 30

console.log(hours + " hours and " + minutes + " minutes");
// "2 hours and 30 minutes"
```

## ⚖️ Comparison Operators

Comparison operators compare two values and return `true` or `false`:

### Basic Comparisons

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `===` | Equal to | `5 === 5` | `true` |
| `!==` | Not equal to | `5 !== 3` | `true` |
| `>` | Greater than | `5 > 3` | `true` |
| `<` | Less than | `3 < 5` | `true` |
| `>=` | Greater than or equal | `5 >= 5` | `true` |
| `<=` | Less than or equal | `3 <= 5` | `true` |

### Examples in Code

```javascript
let age = 18;
let minimumAge = 18;

console.log(age === minimumAge);  // true
console.log(age > minimumAge);    // false
console.log(age >= minimumAge);   // true

let score = 85;
console.log(score > 90);   // false
console.log(score >= 80);  // true
console.log(score < 60);   // false
```

### Comparing Strings

```javascript
let name1 = "Alice";
let name2 = "Bob";
let name3 = "Alice";

console.log(name1 === name3);  // true
console.log(name1 === name2);  // false
console.log(name1 !== name2);  // true
```

**String comparison (alphabetical order):**
```javascript
console.log("apple" < "banana");  // true (a comes before b)
console.log("cat" > "dog");       // false (c comes before d)
```

### 💡 Good to Know: `==` vs `===`

You might see `==` (double equals) in some tutorials, but we use `===` (triple equals) because it's safer:

```javascript
// == allows type conversion (can be unpredictable)
console.log("5" == 5);   // true (string becomes number)
console.log(0 == false); // true (false becomes 0)

// === requires exact match (more predictable)
console.log("5" === 5);   // false (string vs number)
console.log(0 === false); // false (number vs boolean)
```

**Best practice:** Always use `===` and `!==` for safer, more predictable comparisons.

## 🧠 Logical Operators

Logical operators combine multiple conditions:

### Basic Logical Operators

| Operator | Name | Description | Example |
|----------|------|-------------|---------|
| `&&` | AND | Both conditions must be true | `true && true` → `true` |
| `||` | OR | At least one condition must be true | `true || false` → `true` |
| `!` | NOT | Flips true to false (and vice versa) | `!true` → `false` |

### AND Operator (`&&`)

Both conditions must be true:

```javascript
let age = 20;
let hasLicense = true;

let canDrive = age >= 18 && hasLicense;
console.log(canDrive);  // true (both conditions are true)

let age2 = 16;
let canDrive2 = age2 >= 18 && hasLicense;
console.log(canDrive2); // false (first condition is false)
```

### OR Operator (`||`)

At least one condition must be true:

```javascript
let isWeekend = true;
let isHoliday = false;

let canSleepIn = isWeekend || isHoliday;
console.log(canSleepIn);  // true (first condition is true)

let isWeekend2 = false;
let canSleepIn2 = isWeekend2 || isHoliday;
console.log(canSleepIn2); // false (both conditions are false)
```

### NOT Operator (`!`)

Flips the boolean value:

```javascript
let isRaining = false;
let isSunny = !isRaining;
console.log(isSunny);  // true

let isLoggedIn = true;
let needsToLogin = !isLoggedIn;
console.log(needsToLogin);  // false
```

## 🔢 Operator Precedence

When multiple operators are used together, JavaScript follows a specific order (like math's order of operations):

### Precedence Rules

1. **Parentheses** `()` - Highest priority
2. **NOT** `!`
3. **Multiplication, Division, Modulus** `*`, `/`, `%`
4. **Addition, Subtraction** `+`, `-`
5. **Comparison** `>`, `<`, `>=`, `<=`
6. **Equality** `===`, `!==`
7. **AND** `&&`
8. **OR** `||` - Lowest priority

### Examples

```javascript
// Without parentheses
let result1 = 2 + 3 * 4;        // 14 (not 20)
let result2 = 10 > 5 && 3 < 7;  // true

// With parentheses to change order
let result3 = (2 + 3) * 4;      // 20
```

### Best Practice: Use Parentheses

Even when not required, parentheses make code clearer:

```javascript
// Unclear
let result = a + b * c;

// Clear
let result = a + (b * c);  // Shows multiplication happens first
```

## 💡 Common Patterns with Operators

### Pattern 1: Range Checking

```javascript
let score = 85;
let isPassingGrade = score >= 60 && score <= 100;
console.log("Passing grade: " + isPassingGrade);  // true

let temperature = 72;
let isComfortable = temperature >= 68 && temperature <= 78;
console.log("Comfortable temperature: " + isComfortable);  // true
```

### Pattern 2: Input Validation (Advanced)

```javascript
let age = 25;
let name = "Alice";

let isValidAge = age > 0 && age < 150;
let isValidName = name !== "";
let isValidInput = isValidAge && isValidName;

console.log("Valid input: " + isValidInput);  // true
```

### Pattern 3: Status Checking (Advanced)

```javascript
let batteryLevel = 15;
let isCharging = false;

let needsCharging = batteryLevel < 20 && !isCharging;
let isLowBattery = batteryLevel < 10;
let showWarning = needsCharging || isLowBattery;

console.log("Show battery warning: " + showWarning);  // true
```

### Pattern 4: Mathematical Calculations

```javascript
let radius = 5;
let pi = 3.14159;

let area = pi * radius * radius;
let circumference = 2 * pi * radius;
let diameter = 2 * radius;

console.log("Circle with radius " + radius + ":");
console.log("Area: " + area);
console.log("Circumference: " + circumference);
console.log("Diameter: " + diameter);
```

## 🎯 Practice Exercise: Compare Two Numbers

Now it's time to practice with an exercise that uses comparison operators!

### Exercise Overview

**Goal:** Compare two numbers and display which is larger, smaller, or if they're equal.

**Location:** `exercises/04-operators/01-compare-two/`

**What you'll do:**
- Store two numbers in variables
- Use comparison operators to compare them
- Display the results of your comparisons

**Example output:**
```
Comparing 15 and 10:
15 > 10: true
15 < 10: false
15 === 10: false
```

### Getting Started

1. **Navigate to the exercise folder**
2. **Open `script.js` in your editor**
3. **Replace the placeholder code**
4. **Test your script:** `node script.js`
5. **Run the automated test:** `npm run test:one -- 04-operators`

### Tips for Success

- Use descriptive variable names like `firstNumber` and `secondNumber`
- Try different combinations of numbers to test your logic
- Make sure your output format matches the expected format
- Use string concatenation to create readable messages

## 🧠 Common Mistakes and How to Fix Them

### Mistake 1: Using `=` Instead of `===`

**Wrong:**
```javascript
let age = 18;
if (age = 18) {  // Assignment, not comparison!
    console.log("You can vote!");
}
```

**Fixed:**
```javascript
let age = 18;
if (age === 18) {  // Proper comparison
    console.log("You can vote!");
}
```

### Mistake 2: Confusing `&&` and `||`

**Wrong logic:**
```javascript
let age = 16;
let hasPermission = true;
// Wants: "Can drive if 18+ OR has special permission"
let canDrive = age >= 18 && hasPermission;  // Wrong: requires both
```

**Fixed:**
```javascript
let age = 16;
let hasPermission = true;
let canDrive = age >= 18 || hasPermission;  // Correct: either condition
```

### Mistake 3: Forgetting Operator Precedence

**Confusing:**
```javascript
let result = 5 + 3 * 2;  // Is this 16 or 11?
```

**Clear:**
```javascript
let result1 = 5 + (3 * 2);  // 11 (multiplication first)
let result2 = (5 + 3) * 2;  // 16 (addition first)
```

### Mistake 4: Comparing Different Data Types

**Unexpected behavior:**
```javascript
let age = "18";  // String, not number
console.log(age > 16);  // true (string comparison)
console.log(age === 18); // false (string vs number)
```

**Fixed:**
```javascript
let age = 18;  // Number
console.log(age > 16);   // true
console.log(age === 18); // true
```

## 🔍 Debugging with Operators

### Test Individual Conditions

```javascript
let age = 17;
let hasLicense = true;

console.log("age >= 18:", age >= 18);           // false
console.log("hasLicense:", hasLicense);         // true
console.log("Can drive:", age >= 18 && hasLicense); // false
```

### Break Down Complex Expressions

```javascript
let score = 85;
let attendance = 90;
let hasProject = true;

// Break it down step by step
let goodScore = score >= 80;
let goodAttendance = attendance >= 85;
let passesClass = goodScore && goodAttendance && hasProject;

console.log("Good score:", goodScore);           // true
console.log("Good attendance:", goodAttendance); // true
console.log("Has project:", hasProject);         // true
console.log("Passes class:", passesClass);       // true
```

## 🎉 What You've Learned

Congratulations! You now understand:

- ✅ **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%` for calculations
- ✅ **Comparison Operators**: `===`, `!==`, `>`, `<`, `>=`, `<=` for comparisons
- ✅ **Logical Operators**: `&&`, `||`, `!` for combining conditions
- ✅ **Operator Precedence**: Order of operations and using parentheses
- ✅ **Practical Applications**: Real-world uses of operators

## 🚀 What's Next?

In Chapter 5, you'll learn about **Input & Output** - how to get information from users and display results, making your programs interactive!

### Before Moving On

Complete this exercise to practice working with operators:

1. **[`exercises/04-operators/01-compare-two/`](../../exercises/04-operators/01-compare-two/)** - Compare two numbers using different operators

**Instructions:**
- The exercise folder contains a `README.md` with detailed instructions
- Edit the `script.js` file in the exercise folder
- Test your code directly: `node exercises/04-operators/01-compare-two/script.js`
- Run automated tests: `npm run test:one -- 04-operators`
- Check `solution.js` file if you get stuck

**Make sure you can:**
- [ ] Perform basic arithmetic with operators
- [ ] Compare values using comparison operators
- [ ] Combine conditions with logical operators
- [ ] Use parentheses to control operator precedence
- [ ] Complete the number comparison exercise successfully

---

**Ready for user interaction?** Let's move on to Chapter 5!