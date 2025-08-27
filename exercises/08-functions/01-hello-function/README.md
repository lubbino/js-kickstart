# Exercise: Hello Function

## 🎯 Goal

Create your first pure function that takes a name as input and returns a personalized greeting message.

## 📋 Requirements

Your program should:

1. **Define a function called `greetPerson`** that takes one parameter: `name`
2. **Return a greeting message** in the format: "Hello, [name]! Welcome to programming!"
3. **Test your function** by calling it with different names and displaying the results

## 💡 Example Usage

```javascript
console.log(greetPerson("Alice"));  // Output: Hello, Alice! Welcome to programming!
console.log(greetPerson("Bob"));    // Output: Hello, Bob! Welcome to programming!
console.log(greetPerson("Carol"));  // Output: Hello, Carol! Welcome to programming!
```

## 🔧 Setup

1. **Open `script.js`** in this folder
2. **Define your `greetPerson` function**
3. **Add test calls** to verify your function works
4. **Test your program:** `node script.js`
5. **Run the automated test:** `npm run test:one -- 08-functions`

## 💭 Hints

- Remember the basic function syntax: `function functionName(parameter) { ... }`
- Use the `return` statement to send back the greeting message
- Build the message using string concatenation: `"Hello, " + name + "! Welcome to programming!"`
- Don't forget to call your function to test it!

## 🧠 Understanding Functions

This exercise introduces several key concepts:

**Function Definition:**
```javascript
function greetPerson(name) {
    // name is the parameter - it receives the value you pass in
    return "Hello, " + name + "! Welcome to programming!";
}
```

**Function Call:**
```javascript
let message = greetPerson("Alice");  // "Alice" is the argument
console.log(message);
```

**Input → Process → Output:**
- **Input:** The name parameter
- **Process:** Building the greeting message
- **Output:** The returned string

## 📝 Important Note: File Transition

Starting with this exercise, we focus on writing reusable functions instead of simple top-to-bottom scripts. This reflects an important transition in programming approach:

- **Previous exercises** → Simple scripts that run from top to bottom
- **Function exercises** → Structured programs with reusable functions

This change represents your growth from writing basic scripts to creating organized, reusable code!

## 🧪 Testing Your Solution

**Manual Testing:**
```bash
node script.js
```

Try calling your function with:
- Your own name
- Different names to see the pattern
- Empty string to see what happens

**Automated Testing:**
```bash
npm run test:one -- 08-functions
```

The automated test will verify that your function:
- Exists and can be called
- Takes one parameter correctly
- Returns the expected greeting format
- Works with different input names

## 🎯 Learning Focus

This exercise helps you practice:
- Defining functions with parameters
- Using the `return` statement
- Understanding the difference between parameters and arguments
- Testing functions with different inputs
- Transitioning from scripts to structured programming

Take your time to understand how functions work - they're the foundation of all advanced programming!

## 🔍 Debugging Tips

If your function isn't working:

1. **Check the function name:** Make sure it's exactly `greetPerson`
2. **Check the parameter:** Make sure you have `name` as the parameter
3. **Check the return:** Make sure you're using `return`, not `console.log`
4. **Check the format:** The message should match exactly: "Hello, [name]! Welcome to programming!"
5. **Test step by step:** Try calling the function and storing the result in a variable first

## 🎉 Success Criteria

Your solution is complete when:
- [ ] You have a function named `greetPerson`
- [ ] The function takes one parameter called `name`
- [ ] The function returns the correct greeting message
- [ ] You can call the function with different names
- [ ] The automated tests pass

Congratulations on writing your first function! 🎊