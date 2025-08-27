# Exercise: Print List

## 🎯 Goal

Create a program that displays each item in an array, one per line, with a number prefix. This exercise introduces you to working with arrays and loops together.

## 📋 Requirements

Your program should:

1. **Create an array** with at least 5 items (strings)
2. **Use a loop** to go through each item in the array
3. **Print each item** with a number prefix (1. Item, 2. Item, etc.)
4. **Display the total count** at the end

## 💡 Example Usage

```javascript
// If your array is: ["apple", "banana", "orange", "grape", "kiwi"]
// Your output should be:

1. apple
2. banana
3. orange
4. grape
5. kiwi

Total items: 5
```

## 🔧 Setup

1. **Open `script.js`** in this folder
2. **Create your array** with at least 5 string items
3. **Write a loop** to print each item with numbering
4. **Add a total count** at the end
5. **Test your program:** `node script.js`
6. **Run the automated test:** `npm run test:one -- 09-arrays`

## 💭 Hints

- Create an array using square brackets: `let items = ["item1", "item2", ...]`
- Use a `for` loop: `for (let i = 0; i < array.length; i++)`
- Remember arrays start at index 0, but numbering should start at 1
- Use `console.log()` to print each line
- Access array elements with `array[i]`
- The array length is `array.length`

## 🧠 Understanding Arrays and Loops

This exercise combines two important concepts:

**Array Creation:**
```javascript
let fruits = ["apple", "banana", "orange"];
```

**Loop Through Array:**
```javascript
for (let i = 0; i < fruits.length; i++) {
    console.log((i + 1) + ". " + fruits[i]);
}
```

**Key Points:**
- Arrays use zero-based indexing (0, 1, 2, ...)
- Display numbering should be human-friendly (1, 2, 3, ...)
- `array.length` gives you the total number of items

## 🧪 Testing Your Solution

**Manual Testing:**
```bash
node script.js
```

Try with different arrays:
- Fruits: `["apple", "banana", "orange", "grape", "kiwi"]`
- Colors: `["red", "green", "blue", "yellow", "purple"]`
- Animals: `["cat", "dog", "bird", "fish", "rabbit"]`

**Automated Testing:**
```bash
npm run test:one -- 09-arrays
```

The automated test will verify that your program:
- Creates an array with multiple items
- Prints each item with proper numbering
- Shows the correct total count
- Uses a loop to process the array

## 🎯 Learning Focus

This exercise helps you practice:
- Creating arrays with string literals
- Using `for` loops to iterate through arrays
- Accessing array elements by index
- Understanding zero-based indexing vs. human numbering
- Combining arrays, loops, and output formatting

## 🔍 Debugging Tips

If your program isn't working:

1. **Check your array syntax:** Make sure you use square brackets `[]`
2. **Check your loop condition:** Use `i < array.length`, not `i <= array.length`
3. **Check your indexing:** Remember `array[i]` gets the element at position `i`
4. **Check your numbering:** Use `(i + 1)` to convert from 0-based to 1-based
5. **Test step by step:** Try printing just the array first, then add the loop

## 🌟 Extension Ideas

Once you get the basic version working, try these variations:

**Different Formats:**
```javascript
// Bullet points
• apple
• banana
• orange

// Brackets
[1] apple
[2] banana
[3] orange

// Arrows
→ apple
→ banana
→ orange
```

**Different Data:**
- Your favorite movies
- Countries you want to visit
- Programming languages to learn

## 🎉 Success Criteria

Your solution is complete when:
- [ ] You have an array with at least 5 string items
- [ ] You use a loop to go through the array
- [ ] Each item is printed with a number (1., 2., 3., etc.)
- [ ] The total count is displayed at the end
- [ ] The automated tests pass

Great job learning to work with arrays and loops together! 📝