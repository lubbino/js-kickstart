// Is Even Exercise
// Goal: Create a function that determines if a number is even or odd

// TODO: Define a function called 'isEven' that:
// - Takes one parameter: number
// - Returns true if the number is even, false if it's odd
// - Use the modulo operator (%) to check if number % 2 === 0 (Read the readme for additional info about how modulo works.)

// TODO: Test your function by calling it with different numbers
// Example: console.log(isEven(4));  // Should output: true
// Example: console.log(isEven(7));  // Should output: false

function isEven(number) {
    if (number % 2 == 0) return true; else return false;
}

console.log(isEven(4));    // Output: true
console.log(isEven(7));    // Output: false
console.log(isEven(0));    // Output: true
console.log(isEven(-2));   // Output: true
console.log(isEven(-3));   // Output: false