// Is Even Exercise - Solution
// Goal: Create a function that determines if a number is even or odd

// Define the isEven function
function isEven(number) {
    return number % 2 === 0;
}

// Test the function with different values
console.log(isEven(4));    // Output: true
console.log(isEven(7));    // Output: false
console.log(isEven(0));    // Output: true
console.log(isEven(-2));   // Output: true
console.log(isEven(-3));   // Output: false