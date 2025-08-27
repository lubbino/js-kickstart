// Print List Exercise - Solution
// Goal: Create a program that displays each item in an array with numbering

// Create an array with at least 5 string items
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Use a for loop to go through each item in the array
for (let i = 0; i < fruits.length; i++) {
    // Print each item with a number prefix (1. item, 2. item, etc.)
    console.log((i + 1) + ". " + fruits[i]);
}

// Display the total count at the end
console.log("Total items: " + fruits.length);