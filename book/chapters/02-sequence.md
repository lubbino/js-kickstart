# Chapter 2: Sequence

> Learn the most fundamental concept in programming: executing instructions in order.

## 🎯 Learning Goals

By the end of this chapter, you will:
- Understand what "sequence" means in programming
- Know how to use `console.log()` to display output
- Be able to write programs with multiple statements
- Understand how JavaScript executes code line by line
- Complete your first coding exercise with automated tests

---

## 🔄 What is Sequence?

**Sequence** is the most basic concept in programming.  
It means instructions are executed **one after another, in order**.

Think of it like following a recipe:

**Making Toast (Real Life):**
1. Put bread in toaster  
2. Press the start button  
3. Wait for toast to pop up  
4. Spread butter on toast  

**Writing a Program (JavaScript):**

    console.log("Step 1: Starting program");
    console.log("Step 2: Processing data");
    console.log("Step 3: Calculation complete");
    console.log("Step 4: Program finished");

---

## 📺 Displaying Output with console.log()

The `console.log()` function is how you tell your program to **print a message** to the screen.

### Basic Syntax

    console.log("Your message here");

✅ Key rules:  
- Put text inside quotes `" "` (called a **string**)  
- Always use parentheses `()`  
- End with a semicolon `;`  

### Examples

    console.log("Hello, World!");
    console.log("First message");
    console.log("Second message");

**Output:**

    Hello, World!
    First message
    Second message

---

## 💡 Why Sequence Matters

- **Predictable**: You know exactly what happens when  
- **Logical**: Each step builds on the previous one  
- **Debuggable**: If something goes wrong, you can check line by line  

---

## ⚠️ What Happens Without Sequence?

Before modern programming practices, many programs were written with **unstructured jumps** (like `goto`) or messy flows. This often led to what’s called **spaghetti code** — hard to read, hard to debug, and full of surprises.

### Example in old BASIC (with `goto`):

    10 PRINT "Hello"
    20 GOTO 10

This program runs forever, because it keeps jumping back to line 10.

### Why This Is a Problem
- 🔄 **Unpredictable**: Code jumps around instead of flowing top-to-bottom  
- 🍝 **Hard to read**: Looks like tangled spaghetti — impossible to follow  
- 🐞 **Error-prone**: Small changes often break everything  

### Why Sequence Matters
- ✅ Clear, logical flow — easy to follow  
- ✅ Easier to debug, line by line  
- ✅ Foundation for structured code (later we’ll add `if` and `loops`, but still inside a clear sequence)

👉 **Takeaway:** Sequence makes your programs reliable and understandable. Without it, programs quickly become chaos.

---

## 🧠 Common Mistakes (and Fixes)

### 1. Missing Quotes

    console.log(Hello World);   // ❌ Error
    console.log("Hello World"); // ✅ Fixed

### 2. Missing Parentheses

    console.log "Hello World";   // ❌ Error
    console.log("Hello World");  // ✅ Fixed

### 3. Typo in console.log

    consol.log("Hello World");   // ❌ Error
    console.log("Hello World");  // ✅ Fixed

---

## 🎉 What You’ve Learned

- ✅ **Sequence**: Programs run top to bottom  
- ✅ **console.log()**: Printing text to the screen  
- ✅ **Strings**: Text must be inside quotes  
- ✅ **Debugging basics**: How to fix common mistakes  
- ✅ Why sequence matters compared to messy alternatives like `goto` or spaghetti code  

---

## 🚀 What’s Next?

In Chapter 3, you’ll learn about **variables** — how to store and reuse data in your programs.  

### Before Moving On

Complete these exercises in order to practice sequence concepts:

1. **[`exercises/02-sequence/01-hello-world/`](../../exercises/02-sequence/01-hello-world/)** - Pen & paper exercise to understand programming basics
2. **[`exercises/02-sequence/02-three-logs/`](../../exercises/02-sequence/02-three-logs/)** - Pen & paper exercise for multiple sequential outputs
3. **[`exercises/02-sequence/03-day-plan/`](../../exercises/02-sequence/03-day-plan/)** - Your first JavaScript coding exercise

**Instructions:**
- Start with exercises 1 and 2 (pen & paper) to understand the concepts
- Then move to exercise 3 to write actual JavaScript code
- Each exercise folder contains a `README.md` with detailed instructions
- For exercise 3, test your code with: `npm test` or `npm run test:one -- 02-sequence`

---

**Ready for variables?** Let’s move on to Chapter 3! 📦
