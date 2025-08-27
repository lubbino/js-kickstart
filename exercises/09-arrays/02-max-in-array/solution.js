// Max in Array Exercise - Solution
// Goal: Create a function that finds and returns the largest number in an array

// Define the findMax function
function findMax(numbers) {
    // Start with the first element as the maximum
    let max = numbers[0];
    
    // Compare with each remaining element
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    
    // Return the maximum value
    return max;
}

// Test the function with different arrays
console.log(findMax([3, 7, 2, 9, 1]));     // Output: 9
console.log(findMax([15, 8, 23, 4, 16]));  // Output: 23
console.log(findMax([5]));                 // Output: 5
console.log(findMax([-2, -8, -1, -5]));    // Output: -1