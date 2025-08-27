# Exercise: Count 1 to 10

## 🎯 Goal

Create a program that uses a `for` loop to count from 1 to 10 and display each number on a separate line.

## 📋 Requirements

Your program should:

1. **Use a `for` loop** to count from 1 to 10
2. **Display each number** on its own line
3. **Practice basic loop syntax** and understand how the loop variable changes

## 💡 Example Output

```
1
2
3
4
5
6
7
8
9
10
```

## 🔧 Setup

1. **Open `script.js`** in this folder
2. **Replace the placeholder code** with your solution
3. **Test your program:** `node script.js`
4. **Run the automated test:** `npm run test:one -- 07-iteration`

## 💭 Hints

- Remember the basic `for` loop syntax: `for (initialization; condition; update)`
- Start your counter at 1: `let i = 1`
- Continue while `i <= 10`
- Increment with `i++`
- Use `console.log(i)` inside the loop to display each number

## 🧠 Understanding the Loop

Think about what happens each time through the loop:

**First iteration:** `i = 1`, check `1 <= 10` (true), print `1`, then `i++` makes `i = 2`
**Second iteration:** `i = 2`, check `2 <= 10` (true), print `2`, then `i++` makes `i = 3`
**...**
**Tenth iteration:** `i = 10`, check `10 <= 10` (true), print `10`, then `i++` makes `i = 11`
**Check again:** `i = 11`, check `11 <= 10` (false), exit loop

## 🧪 Testing Your Solution

**Manual Testing:**
```bash
node script.js
```

**Automated Testing:**
```bash
npm run test:one -- 07-iteration
```

The automated test will verify that your program outputs the numbers 1 through 10, each on its own line.

## 🎯 Learning Focus

This exercise helps you practice:
- Basic `for` loop syntax and structure
- Understanding how loop variables change
- Using loops for simple counting tasks
- Getting comfortable with iteration concepts

This is your first loop - take your time to understand how it works!