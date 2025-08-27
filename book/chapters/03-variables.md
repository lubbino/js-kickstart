# Chapter 3: Variables & Datatypes

> Learn how to store, modify, and use data in your programs.

## 🎯 Learning Goals

By the end of this chapter, you will:
- Understand what variables are and why they're useful
- Know how to declare and use variables with `let`
- Understand different data types (strings, numbers, booleans)
- Be able to combine variables with strings (concatenation)
- Perform basic arithmetic with variables
- Complete two hands-on exercises with variables

## 📦 What are Variables?

A **variable** is like a labeled box that stores data. You can put something in the box, look at what's inside, and even replace the contents later.

### Real-Life Analogy

Think of variables like labeled containers in your kitchen:

- **Sugar jar** → contains sugar
- **Coffee tin** → contains coffee beans  
- **Spice rack** → contains various spices

In programming:

- **name** → contains "Alice"
- **age** → contains 25
- **isStudent** → contains true

### Why Use Variables?

**Without variables (repetitive):**
```javascript
console.log("Hello, Alice!");
console.log("Alice, you are 25 years old.");
console.log("Alice, welcome to the course!");
```

**With variables (flexible):**
```javascript
let name = "Alice";
let age = 25;

console.log("Hello, " + name + "!");
console.log(name + ", you are " + age + " years old.");
console.log(name + ", welcome to the course!");
```

**Benefits:**
- **Reusable**: Use the same data multiple times
- **Changeable**: Update the value in one place
- **Readable**: Code is easier to understand
- **Maintainable**: Easier to modify later

## 🔧 Creating Variables with `let`

In JavaScript, you create variables using the `let` keyword:

### Basic Syntax

```javascript
let variableName = value;
```

### Examples

```javascript
let firstName = "Alice";
let lastName = "Johnson";
let age = 25;
let isStudent = true;
```


## 💡 Good to Know: A Note on `var`

You might see examples online that use `var` instead of `let`:

```javascript
var name = "Alice";
```

This works, but today we usually avoid `var`. Why?

- `var` is older (from early JavaScript days)
- `let` is safer because it follows modern rules about where variables "live" (scope)
- Most tutorials and code today use `let` (and sometimes `const`, which we'll learn later)

**In this course**: always use `let` unless told otherwise. If you see `var` in other code, just think of it as the "old way" of writing variables.


### Variable Naming Rules

**Valid names:**
```javascript
let name = "Alice";
let firstName = "Alice";
let first_name = "Alice";
let age2 = 25;
let $price = 19.99;
```

**Invalid names:**
```javascript
let 2age = 25;        // Can't start with number
let first-name = "Alice"; // Can't use hyphens
let let = "value";    // Can't use reserved words
```

**Best Practices (Good to Know):**
- Use **camelCase**: `firstName`, `lastName`, `phoneNumber`
- Be **descriptive**: `userName` instead of `u`
- Avoid **abbreviations**: `temperature` instead of `temp`

## 🎭 Data Types

JavaScript has several types of data you can store in variables:

### 1. Strings (Text)

Strings store text and are surrounded by quotes:

```javascript
let firstName = "Alice";
let lastName = 'Johnson';
let message = "Hello, World!";
let empty = "";
```

**String Operations:**
```javascript
let greeting = "Hello";
let name = "Alice";
let fullGreeting = greeting + ", " + name + "!";
console.log(fullGreeting); // "Hello, Alice!"
```

### 2. Numbers

Numbers can be whole numbers (integers) or decimals:

```javascript
let age = 25;
let price = 19.99;
let temperature = -5;
let zero = 0;
```

**Number Operations:**
```javascript
let a = 10;
let b = 5;
let sum = a + b;        // 15
let difference = a - b; // 5
let product = a * b;    // 50
let quotient = a / b;   // 2
```

### 3. Booleans (True/False)

Booleans store either `true` or `false`:

```javascript
let isStudent = true;
let isTeacher = false;
let hasLicense = true;
let isRaining = false;
```

**Boolean Usage:**
```javascript
let isAdult = true;
let hasPermission = false;

console.log("Is adult:", isAdult);        // true
console.log("Has permission:", hasPermission); // false
```

## 🔗 String Concatenation

**Concatenation** means joining strings together using the `+` operator:

### Basic Concatenation

```javascript
let firstName = "Alice";
let lastName = "Johnson";
let fullName = firstName + " " + lastName;
console.log(fullName); // "Alice Johnson"
```

### Mixing Strings and Variables

```javascript
let name = "Alice";
let age = 25;
let message = "Hi, I'm " + name + " and I'm " + age + " years old.";
console.log(message); // "Hi, I'm Alice and I'm 25 years old."
```

### Common Patterns

**Creating sentences:**
```javascript
let subject = "Programming";
let verb = "is";
let adjective = "fun";
let sentence = subject + " " + verb + " " + adjective + "!";
console.log(sentence); // "Programming is fun!"
```

**Building formatted output:**
```javascript
let product = "Laptop";
let price = 999;
let currency = "USD";
let listing = product + ": " + price + " " + currency;
console.log(listing); // "Laptop: 999 USD"
```

## 🔢 Working with Numbers

### Basic Arithmetic

```javascript
let a = 10;
let b = 3;

console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
```

### Storing Results

```javascript
let price = 19.99;
let quantity = 3;
let total = price * quantity;
console.log("Total: $" + total); // "Total: $59.97"
```


## 🔄 Changing Variable Values

Variables can be updated after they're created:

### Reassigning Values

```javascript
let score = 0;
console.log("Score: " + score); // "Score: 0"

score = 10;
console.log("Score: " + score); // "Score: 10"

score = score + 5;
console.log("Score: " + score); // "Score: 15"
```

### Updating with Arithmetic

```javascript
let count = 5;
count = count + 1;  // Add 1
count = count * 2;  // Multiply by 2
count = count - 3;  // Subtract 3
console.log(count); // 9
```

## 💡 Common Patterns with Variables

### Pattern 1: User Profile

```javascript
let userName = "alice_j";
let displayName = "Alice Johnson";
let email = "alice@example.com";
let memberSince = 2020;

console.log("=== User Profile ===");
console.log("Username: " + userName);
console.log("Name: " + displayName);
console.log("Email: " + email);
console.log("Member since: " + memberSince);
```

### Pattern 2: Calculations

```javascript
let length = 10;
let width = 5;
let area = length * width;
let perimeter = 2 * (length + width);

console.log("Rectangle dimensions:");
console.log("Length: " + length);
console.log("Width: " + width);
console.log("Area: " + area);
console.log("Perimeter: " + perimeter);
```


## 🎯 Practice Exercises

Now it's time to practice with two exercises that use variables!

### Exercise 1: Profile String

**Goal:** Create a personal profile using string concatenation.

**Location:** `exercises/03-variables/01-profile-string/`

**What you'll do:**
- Store your name, age, and hobby in variables
- Combine them into a sentence
- Display the result

**Example output:**
```
Hi, I'm Alice, I'm 25 years old, and I love programming!
```

### Exercise 2: Sum Three Numbers

**Goal:** Add three numbers together and display the result.

**Location:** `exercises/03-variables/02-sum-three-numbers/`

**What you'll do:**
- Store three numbers in variables
- Calculate their sum
- Display the result in a formatted message

**Example output:**
```
The sum of 10, 20, and 30 is 60
```

### Getting Started

1. **Navigate to an exercise folder**
2. **Open `script.js` in your editor**
3. **Replace the placeholder code**
4. **Test your script:** `node script.js`
5. **Run the automated test:** `npm run test:one -- 03-variables`

## 🧠 Common Mistakes and How to Fix Them

### Mistake 1: Forgetting `let`

**Wrong:**
```javascript
name = "Alice";  // Creates global variable (bad practice)
```

**Fixed:**
```javascript
let name = "Alice";  // Properly declared variable
```

### Mistake 2: Using Variables Before Declaration

**Wrong:**
```javascript
console.log(name);  // Error: Cannot access 'name' before initialization
let name = "Alice";
```

**Fixed:**
```javascript
let name = "Alice";
console.log(name);  // Works correctly
```

### Mistake 3: Mixing Data Types Incorrectly

**Confusing:**
```javascript
let age = "25";     // String, not number
let nextYear = age + 1;
console.log(nextYear); // "251" (string concatenation, not addition)
```

**Fixed:**
```javascript
let age = 25;       // Number
let nextYear = age + 1;
console.log(nextYear); // 26 (proper addition)
```

### Mistake 4: Forgetting Quotes for Strings

**Wrong:**
```javascript
let name = Alice;   // Error: Alice is not defined
```

**Fixed:**
```javascript
let name = "Alice"; // Properly quoted string
```

## 🔍 Debugging Variables

### Check Variable Values

Use `console.log()` to see what's stored in variables:

```javascript
let firstName = "Alice";
let lastName = "Johnson";
console.log("firstName:", firstName);
console.log("lastName:", lastName);

let fullName = firstName + " " + lastName;
console.log("fullName:", fullName);
```

### Trace Through Calculations

```javascript
let a = 10;
let b = 5;
console.log("a:", a);
console.log("b:", b);

let sum = a + b;
console.log("sum:", sum);
```

## 🎉 What You've Learned

Congratulations! You now understand:

- ✅ **Variables**: How to store and use data
- ✅ **Data Types**: Strings, numbers, and booleans
- ✅ **Declaration**: Using `let` to create variables
- ✅ **Concatenation**: Joining strings with `+`
- ✅ **Arithmetic**: Basic math with variables
- ✅ **Reassignment**: Changing variable values

## 🚀 What's Next?

In Chapter 4, you'll learn about **operators** - powerful tools for comparing values, making decisions, and performing complex calculations!

### Before Moving On

Complete these exercises to practice working with variables:

1. **[`exercises/03-variables/01-profile-string/`](../../exercises/03-variables/01-profile-string/)** - Create a personal profile using string concatenation
2. **[`exercises/03-variables/02-sum-three-numbers/`](../../exercises/03-variables/02-sum-three-numbers/)** - Add three numbers together and display the result

**Instructions:**
- Each exercise folder contains a `README.md` with detailed instructions
- Edit the `script.js` file in each exercise folder
- Test your code directly: `node exercises/03-variables/[exercise]/script.js`
- Run automated tests: `npm run test:one -- 03-variables`
- Check `solution.js` files if you get stuck

**Make sure you can:**
- [ ] Declare a variable with `let`
- [ ] Store different types of data (strings, numbers, booleans)
- [ ] Concatenate strings with variables
- [ ] Perform basic arithmetic with variables
- [ ] Complete both variable exercises successfully

---

**Ready for operators?** Let's move on to Chapter 4! ⚡