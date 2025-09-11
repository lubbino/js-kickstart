# Mini-Project: Personal Task Manager

## Goal

Create a simple personal task manager that helps you organize your daily tasks. This project lets you apply everything you've learned in a creative, open-ended way without strict requirements or automated tests.

## Project Description

Build a task manager that can:
- Add new tasks to your list
- Mark tasks as completed
- Display all your tasks
- Show how many tasks you have left

The beauty of this project is that **you decide how to implement it**! There are many valid approaches, and your solution might be completely different from your classmates' - and that's perfectly fine!

## Example Features (Choose What You Want!)

**Basic Features:**
- Add a task: "Buy groceries"
- Mark task as done: ✓ "Buy groceries" 
- List all tasks with their status
- Count remaining tasks

**Optional Enhancements (if you want a challenge):**
- Delete tasks from the list
- Edit existing tasks
- Add priority levels (high, medium, low)
- Add due dates
- Save tasks to a file
- Create different categories (work, personal, shopping)

## Getting Started

1. **Open `script.js`** in this folder
2. **Think about your approach** - How do you want to store tasks? Arrays? Objects?
3. **Start simple** - Maybe just add and list tasks first
4. **Test as you go** - Run `node script.js` to see your progress
5. **Add features gradually** - Build one feature at a time

## Possible Approaches

### Approach 1: Simple Array
```javascript
let tasks = ["Buy milk", "Walk the dog", "Study JavaScript"];
// Add functions to manage this array
```

### Approach 2: Separate Arrays
```javascript
let todoTasks = ["Buy milk", "Study JavaScript"];
let completedTasks = ["Walk the dog"];
```

### Approach 3: Parallel Arrays
```javascript
let tasks = ["Buy milk", "Walk the dog", "Study JavaScript"];
let completed = [false, true, false]; // Same index as tasks
```

**Remember:** There's no "right" way - choose what makes sense to you!

## Programming Concepts You Can Use

Pick and choose from what you've learned:
- **Variables** → Store your task lists
- **Arrays** → Hold multiple tasks
- **Functions** → Organize your code (addTask, markComplete, showTasks)
- **Loops** → Display all tasks or find specific ones
- **Conditionals** → Check if tasks are completed
- **Input/Output** → Get user commands (if you want interactivity)

## Testing Your Project

**No automated tests!** Instead:
1. **Run your code:** `node script.js`
2. **Try different scenarios:**
   - Add several tasks
   - Mark some as completed
   - Display your list
   - Try edge cases (empty list, duplicate tasks)
3. **Ask yourself:** Does it work the way I expected?

## Success Criteria

Your project is successful when:
- [ ] You can add tasks to your system
- [ ] You can mark tasks as completed
- [ ] You can see your task list
- [ ] You're proud of what you built!
- [ ] Your code works without errors

**That's it!** No complex requirements, no strict function signatures, no automated tests to pass.

## Example Solutions

Here are some different ways students might approach this:

### Simple Console Logger
```javascript
// Just logs tasks and their status
let tasks = ["Task 1", "Task 2"];
console.log("My Tasks:");
for (let i = 0; i < tasks.length; i++) {
    console.log("- " + tasks[i]);
}
```

### Interactive Menu System
```javascript
// Uses prompt-sync to let user add/complete tasks
const prompt = require('prompt-sync')();

function showMenu() {
    console.log("1. Add task");
    console.log("2. Complete task");
    console.log("3. Show tasks");
}

let choice = prompt("Choose an option: ");
```

**All of these are valid!** Choose your own adventure.

## Reflection Questions

After building your task manager, think about:
- What was the most challenging part?
- What would you do differently next time?
- What feature would you add if you had more time?
- How could you make it more user-friendly?

## Congratulations!

By completing this project, you've demonstrated that you can:
- Take a real-world problem and break it down
- Choose appropriate programming concepts for your solution
- Build something functional and useful
- Make independent technical decisions

This is what programming is really about - solving problems creatively with the tools you know!

## What You've Accomplished

You've successfully applied concepts from:
- **Chapter 3**: Variables (storing task data)
- **Chapter 6**: Selections (checking task status)
- **Chapter 7**: Iterations (processing task lists)
- **Chapter 8**: Functions (organizing your code)
- **Chapter 9**: Arrays (managing collections of tasks)

Most importantly, you've learned to **think like a programmer** - taking a problem and figuring out how to solve it with code!

## Next Steps

Want to keep improving your task manager?
- Add a simple web interface with HTML
- Connect it to a database
- Make it work on mobile
- Share it with friends and get feedback

The possibilities are endless when you know how to code!