// Max in Array Exercise
// Goal: Create a function that finds and returns the largest number in an array

// TODO: Define a function called 'findMax' that:
// - Takes one parameter: numbers (an array)
// - Finds the largest number in the array using a loop
// - Returns the maximum value (don't print it)

// Hint: Start with let max = numbers[0]; then compare each element

// TODO: Test your function by calling it with different arrays
// Example: console.log(findMax([3, 7, 2, 9, 1])); // Should output: 9
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log(findMax([3, 7, 2, 9, 1]));     
console.log(findMax([15, 8, 23, 4, 16]));  
console.log(findMax([5]));                 
console.log(findMax([-2, -8, -1, -5]));    