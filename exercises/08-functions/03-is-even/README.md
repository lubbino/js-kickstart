# Exercise: Is Even

## 🎯 Goal

Create a function that determines whether a given number is even or odd by returning a boolean value.

## 📋 Requirements

Your program should:

1. **Define a function called `isEven`** that takes one parameter: `number`
2. **Return `true` if the number is even**, `false` if it's odd

3. **Use the modulo operator (%)** to check if a number is divisible by 2

The modulus operator % returns the remainder after division:

4 % 2 = 0 (4 divided by 2 = 2 remainder 0)
5 % 2 = 1 (5 divided by 2 = 2 remainder 1)
This is a fundamental programming concept used for determining even/odd numbers, cycling through arrays, and many other mathematical operations.


4. **Test your function** by calling it with different numbers and displaying the results

## 💡 Example Usage

```javascript
console.log(isEven(4));    // Output: true
console.log(isEven(7));    // Output: false
console.log(isEven(0));    // Output: true
console.log(isEven(-2));   // Output: true
console.log(isEven(-3));   // Output: false
```

## 🔧 Setup

1. **Open `script.js`** in this folder
2. **Define your `isEven` function**
3. **Add test calls** to verify your function works
4. **Test your program:** `node script.js`
5. **Run the automated test:** `npm run test:one -- 08-functions`

## 💭 Hints

- Remember the basic function syntax: `function functionName(parameter) { ... }`
- Use the modulo operator `%` to find the remainder when dividing by 2
- Even numbers have a remainder of 0 when divided by 2: `number % 2 === 0`
- Use the `return` statement to send back `true` or `false`
- Test with positive numbers, negative numbers, and zero

## 🧠 Understanding Even and Odd

This exercise introduces boolean logic and the modulo operator:

**Even Numbers:** Divisible by 2 with no remainder
- 0, 2, 4, 6, 8, 10, -2, -4, etc.
- `number % 2 === 0` returns `true`

**Odd Numbers:** Not divisible by 2 (remainder of 1)
- 1, 3, 5, 7, 9, -1, -3, etc.
- `number % 2 === 1` (or `!== 0`) returns `true`

**The Modulo Operator (%):**
```javascript
4 % 2 = 0  // 4 divided by 2 = 2 remainder 0
5 % 2 = 1  // 5 divided by 2 = 2 remainder 1
6 % 2 = 0  // 6 divided by 2 = 3 remainder 0
```

## 🧪 Testing Your Solution

**Manual Testing:**
```bash
node script.js
```

Try calling your function with:
- Even numbers: `isEven(2)`, `isEven(10)`, `isEven(0)`
- Odd numbers: `isEven(1)`, `isEven(7)`, `isEven(99)`
- Negative numbers: `isEven(-4)`, `isEven(-7)`
- Edge cases: `isEven(0)`, `isEven(1)`

**Automated Testing:**
```bash
npm run test:one -- 08-functions
```

The automated test will verify that your function:
- Exists and can be called
- Takes one parameter correctly
- Returns boolean values (`true` or `false`)
- Correctly identifies even and odd numbers
- Works with positive, negative, and zero

## 🎯 Learning Focus

This exercise helps you practice:
- Using boolean return values (`true`/`false`)
- Understanding the modulo operator (`%`)
- Writing conditional logic inside functions
- Testing functions with edge cases
- Working with mathematical operations in programming

## 🔍 Debugging Tips

If your function isn't working:

1. **Check the function name:** Make sure it's exactly `isEven`
2. **Check the parameter:** Make sure you have `number` as the parameter
3. **Check the modulo:** Make sure you're using `number % 2`
4. **Check the comparison:** Make sure you're comparing with `=== 0`
5. **Check the return:** Make sure you're returning boolean values, not strings
6. **Test step by step:** Try `console.log(number % 2)` to see what the modulo returns

## 🎉 Success Criteria

Your solution is complete when:
- [ ] You have a function named `isEven`
- [ ] The function takes one parameter called `number`
- [ ] The function returns `true` for even numbers, `false` for odd numbers
- [ ] You can call the function with different numbers
- [ ] The function works with positive, negative, and zero
- [ ] The automated tests pass

Excellent work with boolean logic and mathematical operations! 🔢