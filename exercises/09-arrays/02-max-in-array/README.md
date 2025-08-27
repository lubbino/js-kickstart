# Exercise: Max in Array

## 🎯 Goal

Create a function that finds and returns the largest number in an array. This exercise combines arrays, loops, and functions to solve a common programming problem.

## 📋 Requirements

Your program should:

1. **Define a function called `findMax`** that takes one parameter: `numbers` (an array)
2. **Find the largest number** in the array using a loop
3. **Return the maximum value** (not print it)
4. **Test your function** by calling it with different arrays and displaying the results

## 💡 Example Usage

```javascript
console.log(findMax([3, 7, 2, 9, 1]));     // Output: 9
console.log(findMax([15, 8, 23, 4, 16]));  // Output: 23
console.log(findMax([5]));                 // Output: 5
console.log(findMax([-2, -8, -1, -5]));    // Output: -1
```

## 🔧 Setup

1. **Open `script.js`** in this folder
2. **Define your `findMax` function**
3. **Add test calls** to verify your function works
4. **Test your program:** `node script.js`
5. **Run the automated test:** `npm run test:one -- 09-arrays`

## 💭 Hints

- Start by assuming the first element is the maximum: `let max = numbers[0]`
- Use a `for` loop to check each element: `for (let i = 1; i < numbers.length; i++)`
- Compare each element with the current max: `if (numbers[i] > max)`
- Update max when you find a larger number: `max = numbers[i]`
- Don't forget to `return` the result, not `console.log` it
- Test with arrays containing negative numbers too

## 🧠 Understanding the Algorithm

This exercise teaches a fundamental algorithm pattern:

**The Maximum Finding Algorithm:**
```javascript
function findMax(numbers) {
    // Step 1: Start with the first element as the "best so far"
    let max = numbers[0];
    
    // Step 2: Compare with each remaining element
    for (let i = 1; i < numbers.length; i++) {
        // Step 3: If we find something better, update our "best"
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    
    // Step 4: Return the best we found
    return max;
}
```

**Why This Works:**
- We always keep track of the "best so far"
- We compare every element to our current best
- We update our best whenever we find something better
- At the end, our "best so far" is the actual best

## 🧪 Testing Your Solution

**Manual Testing:**
```bash
node script.js
```

Try calling your function with:
- Positive numbers: `[3, 7, 2, 9, 1]`
- Mixed numbers: `[15, -8, 23, 4, -16]`
- Single element: `[42]`
- Negative numbers: `[-2, -8, -1, -5]`
- Decimal numbers: `[3.5, 2.1, 4.8, 1.9]`

**Automated Testing:**
```bash
npm run test:one -- 09-arrays
```

The automated test will verify that your function:
- Exists and can be called
- Takes an array parameter correctly
- Returns the correct maximum value
- Works with different types of number arrays
- Handles edge cases properly

## 🎯 Learning Focus

This exercise helps you practice:
- Writing functions that process arrays
- Using loops to examine every element in an array
- Implementing comparison logic
- Understanding the "best so far" algorithm pattern
- Returning computed values from functions

## 🔍 Debugging Tips

If your function isn't working:

1. **Check the function name:** Make sure it's exactly `findMax`
2. **Check the parameter:** Make sure you have `numbers` as the parameter
3. **Check your starting point:** Start with `numbers[0]`, not `0`
4. **Check your loop:** Start from index `1`, not `0` (since you already have the first element)
5. **Check your comparison:** Use `>` to find the maximum
6. **Check your return:** Make sure you're returning `max`, not printing it
7. **Test step by step:** Try `console.log(max)` inside your loop to see what's happening

## 🌟 Extension Ideas

Once you get the basic version working, try these variations:

**Find Minimum:**
```javascript
function findMin(numbers) {
    // Similar logic, but use < instead of >
}
```

**Find Both Min and Max:**
```javascript
function findMinMax(numbers) {
    // Return an object: { min: 1, max: 9 }
}
```

**Find Index of Maximum:**
```javascript
function findMaxIndex(numbers) {
    // Return the position of the maximum value
}
```

## 🧠 Real-World Applications

This algorithm pattern is used everywhere:
- **Games:** Finding the highest score
- **Shopping:** Finding the most expensive item
- **Weather:** Finding the hottest day
- **Sports:** Finding the fastest time
- **Business:** Finding the best-selling product

## 🎉 Success Criteria

Your solution is complete when:
- [ ] You have a function named `findMax`
- [ ] The function takes one parameter: `numbers` (an array)
- [ ] The function returns the largest number in the array
- [ ] You can call the function with different arrays
- [ ] The function works with positive, negative, and mixed numbers
- [ ] The automated tests pass

Excellent work implementing a fundamental algorithm! 🔍