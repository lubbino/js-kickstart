# Exercise: Calculate Area

## 🎯 Goal

Create a function that calculates the area of a rectangle given its width and height.

## 📋 Requirements

Your program should:

1. **Define a function called `calculateArea`** that takes two parameters: `width` and `height`
2. **Calculate the area** by multiplying width × height
3. **Return the calculated area**
4. **Test your function** by calling it with different values and displaying the results

## 💡 Example Usage

```javascript
console.log(calculateArea(5, 3));    // Output: 15
console.log(calculateArea(10, 7));   // Output: 70
console.log(calculateArea(2.5, 4));  // Output: 10
```

## 🔧 Setup

1. **Open `script.js`** in this folder
2. **Define your `calculateArea` function**
3. **Add test calls** to verify your function works
4. **Test your program:** `node script.js`
5. **Run the automated test:** `npm run test:one -- 08-functions`

## 💭 Hints

- Remember the basic function syntax: `function functionName(param1, param2) { ... }`
- Area of a rectangle = width × height
- Use the `return` statement to send back the calculated result
- Test with different values to make sure your function works correctly

## 🧠 Understanding the Math

This exercise combines functions with basic mathematics:

**Formula:** `Area = width × height`

**Examples:**
- Rectangle 5×3 → Area = 5 × 3 = 15
- Rectangle 10×7 → Area = 10 × 7 = 70
- Rectangle 2.5×4 → Area = 2.5 × 4 = 10

## 🧪 Testing Your Solution

**Manual Testing:**
```bash
node script.js
```

Try calling your function with:
- Whole numbers: `calculateArea(5, 3)`
- Decimal numbers: `calculateArea(2.5, 4.2)`
- Large numbers: `calculateArea(100, 50)`
- Small numbers: `calculateArea(1, 1)`

**Automated Testing:**
```bash
npm run test:one -- 08-functions
```

The automated test will verify that your function:
- Exists and can be called
- Takes two parameters correctly
- Returns the correct calculated area
- Works with different input values

## 🎯 Learning Focus

This exercise helps you practice:
- Defining functions with multiple parameters
- Performing calculations inside functions
- Using the `return` statement with computed values
- Testing functions with various inputs
- Understanding how functions can encapsulate mathematical operations

## 🔍 Debugging Tips

If your function isn't working:

1. **Check the function name:** Make sure it's exactly `calculateArea`
2. **Check the parameters:** Make sure you have `width` and `height` as parameters
3. **Check the calculation:** Make sure you're multiplying `width * height`
4. **Check the return:** Make sure you're using `return`, not `console.log`
5. **Test step by step:** Try calling the function and storing the result in a variable first

## 🎉 Success Criteria

Your solution is complete when:
- [ ] You have a function named `calculateArea`
- [ ] The function takes two parameters: `width` and `height`
- [ ] The function returns `width * height`
- [ ] You can call the function with different values
- [ ] The automated tests pass

Great job practicing with mathematical functions! 🧮