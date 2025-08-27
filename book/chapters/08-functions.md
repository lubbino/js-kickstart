# Chapter 8: Functions

> Learn how to organize your code into reusable blocks that can accept inputs and return outputs - the foundation of structured programming.

## 🎯 Learning Goals

By the end of this chapter, you will:
- Understand what functions are and why they're essential
- Know how to define and call functions
- Use parameters to pass data into functions
- Return values from functions to get results back
- Organize your code into logical, reusable pieces
- Complete your first exercise using pure functions

> **📚 Study Tip:** Functions represent a major shift from writing scripts to writing structured programs. Take your time to understand the concept of "input → process → output" that functions embody. This is where programming really starts to become powerful!

## 🔧 What are Functions?

**Functions** are reusable blocks of code that perform specific tasks. Think of them as mini-programs within your program that can accept inputs, process them, and return outputs.

### Real-Life Analogy

Functions work like everyday tools and appliances:

**A Blender:**
- **Input:** Fruits and liquid
- **Process:** Blend ingredients
- **Output:** Smoothie

**A Calculator:**
- **Input:** Two numbers and an operation
- **Process:** Perform the calculation
- **Output:** The result

**Programming Functions:**
- **Input:** Parameters (data you pass in)
- **Process:** Code that runs inside the function
- **Output:** Return value (result you get back)

### Why Functions Matter

Functions help you:
- **Avoid repetition** → Write code once, use it many times
- **Organize code** → Break complex problems into smaller pieces
- **Test easily** → Verify each piece works correctly
- **Debug efficiently** → Isolate problems to specific functions
- **Collaborate** → Different people can work on different functions

## 📝 Defining Functions

### Basic Syntax

```javascript
function functionName(parameters) {
    // Code to execute
    return result;  // Optional
}
```

### Simple Examples

**Function with no parameters:**
```javascript
function sayHello() {
    console.log("Hello, world!");
}

// Call the function
sayHello();  // Output: Hello, world!
```

**Function with parameters:**
```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Call the function with different inputs
greet("Alice");  // Output: Hello, Alice!
greet("Bob");    // Output: Hello, Bob!
```

**Function that returns a value:**
```javascript
function add(a, b) {
    return a + b;
}

// Use the returned value
let result = add(5, 3);
console.log(result);  // Output: 8

// Or use it directly
console.log("Sum: " + add(10, 20));  // Output: Sum: 30
```

## 🔄 Calling Functions

Once you define a function, you can **call** (or **invoke**) it as many times as you want.

### Function Calls

```javascript
function multiply(x, y) {
    return x * y;
}

// Call the function multiple times
console.log(multiply(3, 4));    // Output: 12
console.log(multiply(7, 8));    // Output: 56
console.log(multiply(2, 10));   // Output: 20

// Store result in variables
let area = multiply(5, 6);
let volume = multiply(area, 3);
console.log("Volume: " + volume);  // Output: Volume: 90
```

### Functions Calling Other Functions

```javascript
function square(n) {
    return n * n;
}

function sumOfSquares(a, b) {
    return square(a) + square(b);
}

console.log(sumOfSquares(3, 4));  // Output: 25 (9 + 16)
```

## 📥 Parameters and Arguments

**Parameters** are the variables listed in the function definition. **Arguments** are the actual values you pass when calling the function.

### Understanding Parameters

```javascript
function introduce(name, age, city) {  // name, age, city are parameters
    return "Hi, I'm " + name + ", " + age + " years old, from " + city;
}

// "Alice", 25, "New York" are arguments
let message = introduce("Alice", 25, "New York");
console.log(message);  // Output: Hi, I'm Alice, 25 years old, from New York
```

### Multiple Parameters

```javascript
function calculateGrade(score, maxScore) {
    let percentage = (score / maxScore) * 100;
    
    if (percentage >= 90) {
        return "A";
    } else if (percentage >= 80) {
        return "B";
    } else if (percentage >= 70) {
        return "C";
    } else if (percentage >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade(85, 100));  // Output: B
console.log(calculateGrade(92, 100));  // Output: A
console.log(calculateGrade(45, 50));   // Output: A (90%)
```

## 🔙 Return Values

The `return` statement sends a value back to whoever called the function.

### Functions That Return Values

```javascript
function getMax(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

let largest = getMax(15, 23, 8);
console.log("Largest: " + largest);  // Output: Largest: 23
```

### Functions That Don't Return Values

```javascript
function printTable(number) {
    console.log("Multiplication table for " + number + ":");
    for (let i = 1; i <= 5; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
    // No return statement - function returns undefined
}

printTable(7);
// Output:
// Multiplication table for 7:
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
```

### Early Returns

```javascript
function checkAge(age) {
    if (age < 0) {
        return "Invalid age";  // Exit early
    }
    
    if (age < 18) {
        return "Minor";
    }
    
    return "Adult";
}

console.log(checkAge(-5));  // Output: Invalid age
console.log(checkAge(16));  // Output: Minor
console.log(checkAge(25));  // Output: Adult
```

## 🧮 Practical Function Examples

### Mathematical Functions

```javascript
function isEven(number) {
    return number % 2 === 0;
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(isEven(8));      // Output: true
console.log(isEven(7));      // Output: false
console.log(factorial(5));   // Output: 120 (5 * 4 * 3 * 2 * 1)
```

### String Functions

```javascript
function capitalize(text) {
    if (text.length === 0) {
        return text;
    }
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

function countWords(sentence) {
    if (sentence.trim() === "") {
        return 0;
    }
    return sentence.trim().split(" ").length;
}

console.log(capitalize("hello world"));     // Output: Hello world
console.log(countWords("This is a test"));  // Output: 4
```

### Utility Functions

```javascript
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
}

console.log(getRandomNumber(1, 10));    // Output: Random number between 1-10
console.log(formatCurrency(19.99));     // Output: $19.99
console.log(formatCurrency(5));         // Output: $5.00
```

## 🎯 Practice Exercise

Time to practice with your first function exercise!

### Exercise: Hello Function

**Goal:** Create your first pure function that takes a name as input and returns a greeting message.

**Location:** `exercises/08-functions/01-hello-function/`

**What you'll do:**
- Define a function called `greetPerson`
- The function should take one parameter: `name`
- Return a greeting message like "Hello, [name]! Welcome to programming!"
- Test your function with different names

**Example usage:**
```javascript
console.log(greetPerson("Alice"));  // Output: Hello, Alice! Welcome to programming!
console.log(greetPerson("Bob"));    // Output: Hello, Bob! Welcome to programming!
```

### Getting Started

1. **Navigate to the exercise folder**
2. **Open `script.js` in your editor**
3. **Define your function**
4. **Test your function:** `node script.js`
5. **Run the automated test:** `npm run test:one -- 08-functions`

> **📝 Important Note:** Starting with functions, we focus on writing reusable functions instead of simple top-to-bottom scripts. This reflects the shift from simple scripts to more structured programming with reusable functions.

## 🧠 Common Mistakes and How to Fix Them

### Mistake 1: Forgetting to Return

**Wrong:**
```javascript
function add(a, b) {
    a + b;  // Missing return!
}

let result = add(5, 3);
console.log(result);  // Output: undefined
```

**Fixed:**
```javascript
function add(a, b) {
    return a + b;  // Don't forget return!
}

let result = add(5, 3);
console.log(result);  // Output: 8
```

### Mistake 2: Forgetting to Call the Function

**Wrong:**
```javascript
function sayHello() {
    console.log("Hello!");
}

sayHello;  // Missing parentheses! This doesn't call the function
```

**Fixed:**
```javascript
function sayHello() {
    console.log("Hello!");
}

sayHello();  // Parentheses are required to call the function
```

### Mistake 3: Wrong Number of Arguments

**Confusing:**
```javascript
function greet(firstName, lastName) {
    return "Hello, " + firstName + " " + lastName;
}

console.log(greet("Alice"));  // Output: Hello, Alice undefined
```

**Better:**
```javascript
function greet(firstName, lastName) {
    return "Hello, " + firstName + " " + lastName;
}

console.log(greet("Alice", "Smith"));  // Output: Hello, Alice Smith
```

### Mistake 4: Using Variables Before Defining Function

**Wrong:**
```javascript
let result = multiply(5, 3);  // Error! Function not defined yet

function multiply(a, b) {
    return a * b;
}
```

**Fixed:**
```javascript
function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 3);  // Now it works!
```

## 🔍 Debugging Functions

### Test Functions Individually

```javascript
function square(n) {
    console.log("Input:", n);  // Debug: see what comes in
    let result = n * n;
    console.log("Output:", result);  // Debug: see what goes out
    return result;
}

console.log(square(5));
```

### Use Simple Test Cases

```javascript
function isPositive(number) {
    return number > 0;
}

// Test with known values
console.log("Test 1:", isPositive(5));    // Should be true
console.log("Test 2:", isPositive(-3));   // Should be false
console.log("Test 3:", isPositive(0));    // Should be false
```

### Break Down Complex Functions

```javascript
// Instead of one complex function
function complexCalculation(a, b, c) {
    return ((a + b) * c) / 2;
}

// Break it into steps
function complexCalculation(a, b, c) {
    let sum = a + b;
    console.log("Sum:", sum);
    
    let product = sum * c;
    console.log("Product:", product);
    
    let result = product / 2;
    console.log("Final result:", result);
    
    return result;
}
```

## 🎉 What You've Learned

Congratulations! You now understand:

- ✅ **Function Concepts**: What functions are and why they're essential
- ✅ **Function Definition**: How to create functions with parameters
- ✅ **Function Calls**: How to use functions and pass arguments
- ✅ **Return Values**: How to get results back from functions
- ✅ **Code Organization**: How functions help structure programs
- ✅ **Debugging**: How to test and debug functions effectively

## 🚀 What's Next?

You've completed the core concepts of JavaScript programming! In future chapters, you'll learn about:
- **Arrays**: Working with lists of data
- **Objects**: Organizing related data and functions
- **Advanced Functions**: Arrow functions, callbacks, and more
- **Error Handling**: Dealing with problems gracefully
- **Real Projects**: Building complete applications

### Before Moving On

Complete these exercises to practice working with functions:

1. **[`exercises/08-functions/01-hello-function/`](../../exercises/08-functions/01-hello-function/)** - Your first pure function
2. **[`exercises/08-functions/02-calculate-area/`](../../exercises/08-functions/02-calculate-area/)** - Mathematical function with multiple parameters
3. **[`exercises/08-functions/03-is-even/`](../../exercises/08-functions/03-is-even/)** - Boolean function with conditional logic

**Instructions:**
- Each exercise folder contains a `README.md` with detailed instructions
- Edit the `script.js` file (same as previous exercises)
- Test your code directly: `node exercises/08-functions/[exercise]/script.js`
- Run automated tests: `npm run test:one -- 08-functions`
- Check `solution.js` files if you get stuck

**Make sure you can:**
- [ ] Define functions with parameters
- [ ] Return values from functions
- [ ] Call functions with arguments
- [ ] Work with multiple parameters
- [ ] Understand the difference between parameters and arguments
- [ ] Complete all three function exercises successfully

---

**Congratulations on completing the fundamentals!** You now have the core building blocks of programming: sequence, variables, operators, input/output, selections, iterations, and functions. These concepts will serve as the foundation for everything you build next! 🎊