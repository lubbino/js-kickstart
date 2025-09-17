// Print List Exercise
// Goal: Create a program that displays each item in an array with numbering

// TODO: Create an array with at least 5 string items
// Example: let items = ["apple", "banana", "orange", "grape", "kiwi"];

// TODO: Use a for loop to go through each item in the array
// Remember: arrays start at index 0, but numbering should start at 1

// TODO: Print each item with a number prefix (1. item, 2. item, etc.)
// Example: console.log((i + 1) + ". " + items[i]);

// TODO: Display the total count at the end
// Example: console.log("Total items: " + items.length);

let items = ["apple", "banana", "orange", "grape", "kiwi"]

for (let i = 0; i < items.length; i++) {
    console.log(i+1 + ". " + items[i])
}

console.log("Total items: " + items.length)
