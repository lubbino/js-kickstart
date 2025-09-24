// Mini-Project: Personal Task Manager
// Build your own task management system!

// 📖 IMPORTANT: Read the README.md file first for detailed instructions,
//    examples, and ideas on how to approach this project!

// This is YOUR project - there are no strict requirements!
// You can implement this however you want using what you've learned.

// Here are some ideas to get you started:

// IDEA 1: Simple task array
// let tasks = [];

// IDEA 2: Separate completed and todo lists
// let todoTasks = [];
// let completedTasks = [];

// IDEA 3: Parallel arrays (same index for related data)
// let tasks = ["Learn JavaScript", "Build a project"];
// let completed = [false, false];

// TODO: Choose your approach and start coding!

// Some function ideas (you don't have to use these exact names):
// - addTask(taskName)
// - markTaskComplete(taskIndex)
// - showAllTasks()
// - countRemainingTasks()
// - deleteTask(taskIndex)

// Example starter code (feel free to delete and start fresh):
console.log("Welcome to your Personal Task Manager!");
console.log("Start building your solution here...");

let tasks = ["sign up for online course", "buy groceries", "walk the dog"];
let completed = [false, true, false];

function showTasks() {
    console.log("\nYour Tasks:");
    for (let i = 0; i < tasks.length; i++) {
        let status = completed[i] ? "[x]" : "[ ]";
        console.log((i + 1) + ". " + status + " " + tasks[i]);
    }
}

function addTask(newTask) {
    tasks.push(newTask);
    completed.push(false);
    console.log("Added: \"" + newTask + "\"");
}

function markTaskComplete(taskIndex) {
    if (taskIndex >= 0 && taskIndex < completed.length) {
        completed[taskIndex] = true;
        console.log("Marked task " + (taskIndex + 1) + " as complete.");
    } else {
        console.log("Invalid task index.");
    }
}
function countRemainingTasks() {
    let count = 0;
    for (let i = 0; i < completed.length; i++) {
        if (!completed[i]) {
            count++;
        }
    }
    console.log("You have " + count + " remaining tasks.");
}
function deleteTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        let removedTask = tasks.splice(taskIndex, 1);
        completed.splice(taskIndex, 1);
        console.log("Deleted: \"" + removedTask + "\"");
    } else {
        console.log("Invalid task index.");
    }
}
// Test your functions
showTasks();
addTask("finish homework");
showTasks();
markTaskComplete(0);
showTasks();
countRemainingTasks();
deleteTask(1);
showTasks();
countRemainingTasks();
