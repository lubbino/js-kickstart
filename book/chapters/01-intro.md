# Chapter 1: Introduction & Setup

> Welcome to JavaScript programming! This chapter will get you set up and ready to write your first programs.

## 🎯 Learning Goals

By the end of this chapter, you will:
- Understand what JavaScript is and why it's useful
- Have Node.js installed and working on your computer
- Know how to use a code editor (VS Code)
- Be able to run your first JavaScript program
- Understand the course structure and workflow

## 🤔 What is JavaScript?

JavaScript is a programming language that was originally created to make websites interactive. Today, it's used for much more:

- **Web pages**: Making buttons work, forms submit, and content change
- **Web servers**: Building the "backend" that powers websites
- **Mobile apps**: Creating apps for phones and tablets
- **Desktop applications**: Building programs that run on your computer
- **Games**: Creating interactive games and animations

### Why Learn JavaScript?

1. **Beginner-friendly**: JavaScript has a gentle learning curve
2. **Versatile**: One language, many uses
3. **Popular**: Widely used in the tech industry
4. **Active community**: Lots of help and resources available
5. **Free tools**: Everything you need is free to use

## 🛠️ What You Need

To follow along with this course, you need:

### 1. Node.js (JavaScript Runtime)

Node.js lets you run JavaScript **outside of a browser**, directly in your terminal.  
We'll use it throughout this course to run your programs and tests.

#### 🔽 Install Node.js

1. Go to the official site: [https://nodejs.org](https://nodejs.org)  
2. Download the **LTS** version (the green button).
   - LTS stands for "Long-Term Support" and is the most stable version.
   - At the time of writing, it's **18.x** or **20.x**.
   - Avoid "Current" (yellow button) — it may be unstable.
3. Run the installer and keep all default options.  
   - On **Windows**: Accept the prompts and leave checkboxes as they are.  
   - On **macOS**: Open the `.pkg` file and follow the instructions.  
   - On **Linux (Mint/Ubuntu)**:  
     ```bash
     sudo apt update
     sudo apt install -y nodejs npm
     ```
4. Restart your computer (especially on Windows).  

#### ✅ Verify Installation

Open a terminal and type:  
```bash
node --version
```

You should see something like:
```
v18.17.0
```

If you also type:
```bash
npm --version
```

you should see the version of Node's package manager, npm.

⚠️ **If you get "command not found" or "node is not recognized":**
- Make sure Node.js was installed.
- Try restarting your computer.
- On Windows, check that "Add to PATH" was ticked in the installer.

### 2. A Code Editor

We recommend **Visual Studio Code (VS Code)**, which is free and beginner-friendly. If you don't have it installed, download it from [code.visualstudio.com](https://code.visualstudio.com).

**Note:** If you need help with installation, check with your instructor or refer to the main project README for detailed setup instructions.

## 🚀 Your First JavaScript Program

Let's write a simple "Hello, World!" program to make sure everything works.

### Step 1: Create a Project Folder
1. Create a new folder on your Desktop called `my-first-js`
2. Open VS Code
3. Go to File → Open Folder and select your `my-first-js` folder

### Step 2: Create Your First File
1. In VS Code, create a new file called `hello.js`
2. Type this code:

```javascript
console.log("Hello, World!");
console.log("Welcome to JavaScript programming!");
```

### Step 3: Run Your Program
1. Open the terminal in VS Code (Terminal → New Terminal)
2. Type this command and press Enter:

```bash
node hello.js
```

You should see:
```
Hello, World!
Welcome to JavaScript programming!
```

🎉 **Congratulations!** You just wrote and ran your first JavaScript program!

## 📚 Understanding This Course

This course is designed to teach you programming step-by-step using JavaScript.

### Course Structure

**9 Chapters:**
1. **Intro & Setup** ← You are here
2. **Sequence** - Writing step-by-step instructions
3. **Variables** - Storing and using data
4. **Operators** - Doing math and comparisons
5. **Input & Output** - Interacting with users
6. **Selections** - Making decisions with `if`
7. **Iterations** - Repeating code with loops
8. **Functions** - Organizing code into reusable pieces
9. **Arrays** - Working with lists of data

Plus a **Mini Project** that combines everything you've learned!

### How Each Chapter Works

1. **Read** the chapter material (like this!)
2. **Practice** with hands-on exercises
3. **Test** your solutions with automated tests
4. **Reflect** on what you learned

### Exercise Workflow

Each exercise follows this pattern:

1. **Read** the exercise instructions
2. **Edit** the `script.js` file
3. **Run** your script: `node exercises/[chapter]/[exercise]/script.js`
4. **Test** with automation: `npm test`
5. **Check** the `solution.js` if you get stuck

## 🧠 Programming Fundamentals

Before we dive into JavaScript syntax, let's understand what programming is all about.

### What is Programming?

Programming is giving instructions to a computer. Think of it like writing a recipe:

**Recipe (Cooking):**
1. Preheat oven to 350°F
2. Mix flour and sugar in a bowl
3. Add eggs and stir
4. Bake for 30 minutes

**Program (Computer):**
1. Ask user for their name
2. Store the name in memory
3. Display "Hello, [name]!"
4. End the program

### Key Programming Concepts

**Sequence**: Instructions happen in order, one after another
```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

**Data**: Information the program works with
```javascript
let name = "Alice";
let age = 25;
```

**Logic**: Making decisions based on conditions
```javascript
if (age >= 18) {
    console.log("You can vote!");
}
```

**Repetition**: Doing the same thing multiple times
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}
```

## 🎯 What's Next?

In the next chapter, we'll start with the most fundamental concept in programming: **sequence**. You'll learn how to write programs that execute instructions in order, which is the foundation for everything else.

### Before Moving On

Make sure you can:
- [ ] Run `node --version` and see a version number
- [ ] Open VS Code and create a new file
- [ ] Write a simple `console.log()` statement
- [ ] Run a JavaScript file with `node filename.js`

If any of these don't work, review the setup instructions or ask for help!

## 🆘 Getting Help

**Common Issues:**

**"node is not recognized"**
- Node.js isn't installed or not in your PATH
- Try restarting your computer after installation

**"Cannot find file"**
- Make sure you're in the right folder
- Check the filename spelling (case-sensitive on some systems)

**VS Code won't open**
- Try running as administrator
- Check if antivirus is blocking it

**Need More Help?**
- Ask your teacher or classmates
- Check the course README file
- Look up error messages online

---

**Ready to start programming?** Let's move on to Chapter 2: Sequence! 🚀