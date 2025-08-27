# Troubleshooting Guide

> A comprehensive guide to solving common issues you might encounter while learning JavaScript with this course.

## 🚨 Quick Help

**Having trouble?** Follow this checklist first:

1. **Check your syntax** - Missing semicolons, brackets, or quotes?
2. **Read error messages carefully** - They often tell you exactly what's wrong
3. **Test with simple examples** - Start small and build up
4. **Check the console** - Look for error messages in your terminal
5. **Compare with solutions** - Each exercise has a `solution.js` file

---

## 📋 Common Issues by Category

### 🔧 Setup and Installation Issues

#### Node.js Not Found
**Problem:** `'node' is not recognized as an internal or external command`

**Solution:**
1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Choose the LTS (Long Term Support) version
3. Restart your terminal after installation
4. Test with: `node --version`

#### npm Commands Not Working
**Problem:** `'npm' is not recognized` or npm commands fail

**Solution:**
1. Node.js installation includes npm automatically
2. If npm is missing, reinstall Node.js
3. For permission issues on Mac/Linux: `sudo npm install`

#### prompt-sync Installation Issues
**Problem:** `Cannot find module 'prompt-sync'`

**Solution:**
```bash
npm install prompt-sync
```

If that fails:
```bash
npm install --save prompt-sync
```

### 💻 Running Code Issues

#### Script Won't Run
**Problem:** `node script.js` does nothing or shows errors

**Common Causes & Solutions:**

1. **Wrong directory:**
   ```bash
   # Make sure you're in the right folder
   cd exercises/02-sequence/01-hello-world
   node script.js
   ```

2. **File doesn't exist:**
   ```bash
   # Check if file exists
   ls script.js
   # or on Windows
   dir script.js
   ```

3. **Syntax errors in code:**
   - Check for missing quotes, brackets, or semicolons
   - Look at the error message for line numbers

#### Tests Won't Run
**Problem:** `npm run test` or `npm run test:one` fails

**Solutions:**

1. **Run from project root:**
   ```bash
   # Make sure you're in the main project directory
   cd /path/to/js-get-started
   npm run test:one -- 02-sequence
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Check test command syntax:**
   ```bash
   # Correct format for testing your work
   npm run test:one -- 06-selection
   npm run test:one -- 08-functions
   ```

#### Understanding Test Results
**Problem:** Tests fail but you're not sure why

**What the tests check:**
- **Student tests** (`npm test`) check your `script.js` files
- Tests will fail until you complete the exercises (this is normal!)
- Error messages show what's expected vs. what your code produces

**For instructors only:**
- **Solution tests** (`npm run test:solutions`) check the reference `solution.js` files
- These should always pass and are used for validation

### 🧪 Understanding the Testing System

#### How Tests Work
**Important:** The automated tests check your `script.js` files, not the solution files.

**Normal Testing Flow:**
1. **Red Phase**: Tests fail when you start (expected!)
2. **Green Phase**: Tests pass when you complete the exercise
3. **Refactor Phase**: Improve your code while keeping tests green

#### Test Commands for Students
```bash
# Test all your exercises
npm test

# Test a specific chapter
npm run test:one -- 08-functions
npm run test:one -- 09-arrays
```

#### What Test Results Mean
- **❌ FAIL**: Your code doesn't match the expected output yet
- **✅ PASS**: Your code works correctly!
- **⏭️ MANUAL TESTING REQUIRED**: Exercise uses user input (test manually)

#### Common Test Confusion
**"Why do tests fail even though I copied the solution?"**
- Tests check your `script.js` file, not `solution.js`
- Make sure you're editing the right file
- Solution files are for reference only

**"Tests pass but I didn't write any code"**
- You might be looking at a completed exercise
- Check that `script.js` contains placeholder text like "Replace this with your solution!"

### 🐛 JavaScript Syntax Errors

#### Missing Semicolons
**Problem:** Code works but looks messy

**Example:**
```javascript
// Inconsistent (works but not ideal)
let name = "Alice"
console.log(name);

// Better (consistent style)
let name = "Alice";
console.log(name);
```

#### Unclosed Brackets/Quotes
**Problem:** `SyntaxError: Unexpected end of input`

**Common Issues:**
```javascript
// Missing closing quote
let message = "Hello world;

// Missing closing bracket
if (age >= 18) {
    console.log("Adult");
// Missing }

// Missing closing parenthesis
console.log("Hello"
```

**Solutions:**
- Use a code editor with syntax highlighting
- Count your opening and closing brackets
- Check that quotes are properly paired

#### Variable Declaration Issues
**Problem:** `ReferenceError: variable is not defined`

**Common Issues:**
```javascript
// Using variable before declaring
console.log(name);
let name = "Alice";

// Typo in variable name
let userName = "Bob";
console.log(username); // Wrong case!

// Forgetting to declare
age = 25; // Should be: let age = 25;
```

### 🔄 Logic Errors

#### Infinite Loops
**Problem:** Program hangs and never finishes

**Common Causes:**
```javascript
// Forgot to increment counter
let i = 1;
while (i <= 5) {
    console.log(i);
    // Missing: i++;
}

// Wrong condition
for (let i = 1; i >= 1; i++) { // Will never stop!
    console.log(i);
}
```

**Solutions:**
- Always update loop variables
- Double-check loop conditions
- Use `Ctrl+C` to stop infinite loops

#### Off-by-One Errors
**Problem:** Loop runs too many or too few times

**Examples:**
```javascript
// Wrong: Misses last element
for (let i = 0; i < array.length - 1; i++) {
    console.log(array[i]);
}

// Correct: Includes all elements
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

#### Comparison vs Assignment
**Problem:** `if` statements don't work as expected

**Common Mistake:**
```javascript
// Wrong: Assignment instead of comparison
if (age = 18) {
    console.log("Exactly 18");
}

// Correct: Use === for comparison
if (age === 18) {
    console.log("Exactly 18");
}
```

### 📥 Input/Output Issues

#### prompt-sync Not Working
**Problem:** `prompt()` is undefined or doesn't work

**Solution:**
```javascript
// Make sure to require prompt-sync
const prompt = require('prompt-sync')();

// Then use it
let name = prompt("Enter your name: ");
```

#### Numbers vs Strings from Input
**Problem:** Math operations don't work with user input

**Issue:**
```javascript
let age = prompt("Enter age: "); // This is a string!
let nextYear = age + 1; // Results in "251" instead of 26
```

**Solution:**
```javascript
let age = Number(prompt("Enter age: ")); // Convert to number
let nextYear = age + 1; // Now works correctly
```

#### Console Output Issues
**Problem:** Output doesn't appear or looks wrong

**Common Issues:**
```javascript
// Missing console.log
let result = 5 + 3; // Nothing appears

// Should be:
let result = 5 + 3;
console.log(result);

// Concatenation vs addition
console.log("Age: " + 20 + 5); // Outputs: "Age: 205"
console.log("Age: " + (20 + 5)); // Outputs: "Age: 25"
```

### 🔧 Function Issues

#### Function Not Defined
**Problem:** `ReferenceError: function is not defined`

**Common Causes:**
```javascript
// Calling function before defining it
sayHello(); // Error!

function sayHello() {
    console.log("Hello!");
}
```

**Solution:** Define functions before calling them

#### Missing Return Statement
**Problem:** Function returns `undefined`

**Issue:**
```javascript
function add(a, b) {
    a + b; // Missing return!
}

let result = add(5, 3);
console.log(result); // undefined
```

**Solution:**
```javascript
function add(a, b) {
    return a + b; // Don't forget return!
}
```

#### Wrong Number of Parameters
**Problem:** Function doesn't work as expected

**Example:**
```javascript
function greet(firstName, lastName) {
    return "Hello, " + firstName + " " + lastName;
}

console.log(greet("Alice")); // "Hello, Alice undefined"
```

**Solution:** Always pass the correct number of arguments

### 📚 Array Issues

#### Index Out of Bounds
**Problem:** Getting `undefined` when accessing array elements

**Issue:**
```javascript
let colors = ["red", "green", "blue"];
console.log(colors[5]); // undefined - no element at index 5
```

**Solution:** Check array length and use valid indexes (0 to length-1)

#### Forgetting Zero-Based Indexing
**Problem:** Getting wrong elements

**Common Mistake:**
```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[1]); // "banana", not "apple"!
```

**Remember:** Arrays start at index 0, not 1

#### Modifying Arrays During Loops
**Problem:** Unexpected behavior when removing elements

**Risky:**
```javascript
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numbers.splice(i, 1); // Can skip elements!
    }
}
```

**Better:** Loop backwards or use filter methods

---

## 🔍 Debugging Strategies

### 1. Read Error Messages Carefully
Error messages tell you:
- **What** went wrong
- **Where** it happened (file and line number)
- **Why** it might have occurred

### 2. Use Console.log for Debugging
```javascript
function calculateGrade(score) {
    console.log("Input score:", score); // Debug input
    
    let percentage = score / 100;
    console.log("Percentage:", percentage); // Debug calculation
    
    if (percentage >= 0.9) {
        console.log("Returning A"); // Debug logic
        return "A";
    }
    // ... rest of function
}
```

### 3. Test with Simple Cases
```javascript
// Test with known values first
console.log(add(2, 3)); // Should be 5
console.log(add(0, 0)); // Should be 0
console.log(add(-1, 1)); // Should be 0
```

### 4. Break Down Complex Problems
```javascript
// Instead of one complex line
let result = ((a + b) * c) / (d - e);

// Break it into steps
let sum = a + b;
let product = sum * c;
let difference = d - e;
let result = product / difference;
```

### 5. Use a Code Editor with Syntax Highlighting
Recommended editors:
- **Visual Studio Code** (free, excellent for JavaScript)
- **Sublime Text**
- **Atom**

---

## 🆘 Getting Help

### 1. Check the Solution Files
Every exercise has a `solution.js` file you can reference for the correct implementation.

**Note:** The automated tests check your `script.js` files, not the solution files. This means:
- Tests will fail until you complete the exercise (this is expected!)
- You can compare your code with the solution file if you get stuck
- The solution files are for reference and learning

### 2. Review the Chapter
Go back to the relevant chapter in the `book/chapters/` folder.

### 3. Test Incrementally
- Start with the simplest version
- Add one feature at a time
- Test after each change

### 4. Common Error Patterns

| Error Message | Common Cause | Solution |
|---------------|--------------|----------|
| `SyntaxError: Unexpected token` | Missing bracket, quote, or semicolon | Check syntax carefully |
| `ReferenceError: X is not defined` | Typo in variable name or not declared | Check spelling and declaration |
| `TypeError: X is not a function` | Trying to call something that isn't a function | Check function name and definition |
| `Cannot read property of undefined` | Accessing property of undefined variable | Check if variable is properly initialized |

---

## 🎯 Best Practices to Avoid Issues

### 1. Consistent Naming
```javascript
// Good: Consistent camelCase
let firstName = "Alice";
let lastName = "Smith";

// Avoid: Mixed styles
let first_name = "Alice";
let LastName = "Smith";
```

### 2. Always Declare Variables
```javascript
// Good
let age = 25;

// Avoid
age = 25; // Creates global variable
```

### 3. Use Meaningful Names
```javascript
// Good
let studentScore = 85;
let maxScore = 100;

// Avoid
let x = 85;
let y = 100;
```

### 4. Comment Your Code
```javascript
// Calculate the percentage score
let percentage = (studentScore / maxScore) * 100;

// Determine letter grade based on percentage
if (percentage >= 90) {
    return "A";
}
```

### 5. Test Early and Often
- Test each function as you write it
- Use simple test cases first
- Don't wait until everything is complete

---

## 📞 Still Stuck?

If you're still having trouble:

1. **Re-read the exercise instructions** carefully
2. **Check the solution file** for that exercise
3. **Review the relevant chapter** in the book
4. **Start over with a simpler version** and build up
5. **Take a break** and come back with fresh eyes

Remember: Debugging is a normal part of programming! Even experienced developers spend time troubleshooting. Each error you fix makes you a better programmer.

---