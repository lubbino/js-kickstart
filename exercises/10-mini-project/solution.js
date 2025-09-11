// Mini-Project: Personal Task Manager
// Example Solution - One of Many Possible Approaches!

// This is just ONE way to solve this problem.
// Your solution might be completely different - and that's great!

console.log("🎯 Personal Task Manager - Example Solution");
console.log("Remember: Your approach might be totally different and equally valid!\n");

// Approach: Simple arrays to store tasks and their completion status
let tasks = ["Learn JavaScript basics", "Practice coding daily", "Build a personal project"];
let completed = [false, true, false]; // Same index as tasks array

// Function to add a new task
function addTask(taskDescription) {
    tasks.push(taskDescription);
    completed.push(false); // New tasks start as not completed
    console.log("✅ Added: \"" + taskDescription + "\"");
}

// Function to mark a task as completed by index
function completeTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        completed[taskIndex] = true;
        console.log("🎉 Completed: \"" + tasks[taskIndex] + "\"");
    } else {
        console.log("❌ Task index " + taskIndex + " not found");
    }
}

// Function to show all tasks
function showAllTasks() {
    console.log("\n📋 Your Tasks:");
    if (tasks.length === 0) {
        console.log("   No tasks yet! Add some tasks to get started.");
        return;
    }
    
    for (let i = 0; i < tasks.length; i++) {
        let status = completed[i] ? "✅" : "⭕";
        console.log("   " + status + " [" + i + "] " + tasks[i]);
    }
}

// Function to count remaining tasks
function countRemainingTasks() {
    let remaining = 0;
    for (let i = 0; i < completed.length; i++) {
        if (completed[i] === false) {
            remaining++;
        }
    }
    console.log("\n📊 Tasks remaining: " + remaining);
    return remaining;
}

// Function to delete a task by index
function deleteTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        let deletedTask = tasks[taskIndex];
        
        // Remove from both arrays by creating new arrays without the element
        let newTasks = [];
        let newCompleted = [];
        
        for (let i = 0; i < tasks.length; i++) {
            if (i !== taskIndex) {
                newTasks.push(tasks[i]);
                newCompleted.push(completed[i]);
            }
        }
        
        tasks = newTasks;
        completed = newCompleted;
        
        console.log("🗑️  Deleted: \"" + deletedTask + "\"");
    } else {
        console.log("❌ Task index " + taskIndex + " not found");
    }
}

// Demo the task manager
console.log("=== Demo: Personal Task Manager ===");

showAllTasks();
countRemainingTasks();

console.log("\n--- Adding new tasks ---");
addTask("Read a programming book");
addTask("Exercise for 30 minutes");

showAllTasks();

console.log("\n--- Completing some tasks ---");
completeTask(0); // Complete "Learn JavaScript basics"
completeTask(3); // Complete "Read a programming book"

showAllTasks();
countRemainingTasks();

console.log("\n--- Deleting a task ---");
deleteTask(1); // Delete "Practice coding daily"

showAllTasks();
countRemainingTasks();

console.log("\n🎉 This is just one approach!");
console.log("Your solution might use:");
console.log("- Different data structures (maybe just one array!)");
console.log("- Different function names");
console.log("- Additional features like priorities or categories");
console.log("- A completely different approach altogether!");
console.log("\nThe important thing is that YOU built something that works! 🚀");