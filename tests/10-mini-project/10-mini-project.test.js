const path = require('path');
const fs = require('fs');

// Helper function to get the target file (script.js or solution.js)
function getTargetFile(exercisePath) {
    const targetFile = process.env.TARGET_FILE === 'solution.js' ? 'solution.js' : 'script.js';
    return path.resolve(exercisePath, targetFile);
}

async function testGenerateRandomNumber() {
    console.log('\n=== Testing generateRandomNumber Function ===');
    
    try {
        // Import the target file (script.js by default, solution.js if TARGET_FILE env var is set)
        const targetPath = getTargetFile('exercises/10-mini-project');
        delete require.cache[targetPath];
        const solution = require(targetPath);
        
        let passed = 0;
        let total = 4;
        
        // Test 1: Function exists and returns a number
        if (typeof solution.generateRandomNumber === 'function') {
            const result = solution.generateRandomNumber(1, 10);
            if (typeof result === 'number') {
                console.log('✅ Test 1: generateRandomNumber returns a number');
                passed++;
            } else {
                console.log('❌ Test 1: generateRandomNumber does not return a number');
            }
        } else {
            console.log('❌ Test 1: generateRandomNumber function not found');
        }
        
        // Test 2: Returns numbers within range
        let inRange = true;
        for (let i = 0; i < 20; i++) {
            const result = solution.generateRandomNumber(1, 10);
            if (result < 1 || result > 10 || !Number.isInteger(result)) {
                inRange = false;
                break;
            }
        }
        if (inRange) {
            console.log('✅ Test 2: generateRandomNumber returns integers within range');
            passed++;
        } else {
            console.log('❌ Test 2: generateRandomNumber returns values outside range or non-integers');
        }
        
        // Test 3: Works with different ranges
        const result50_60 = solution.generateRandomNumber(50, 60);
        if (result50_60 >= 50 && result50_60 <= 60 && Number.isInteger(result50_60)) {
            console.log('✅ Test 3: generateRandomNumber works with different ranges');
            passed++;
        } else {
            console.log('❌ Test 3: generateRandomNumber fails with different ranges');
        }
        
        // Test 4: Single number range
        const single = solution.generateRandomNumber(42, 42);
        if (single === 42) {
            console.log('✅ Test 4: generateRandomNumber handles single number range');
            passed++;
        } else {
            console.log('❌ Test 4: generateRandomNumber fails with single number range');
        }
        
        console.log(`\nGenerateRandomNumber: ${passed}/${total} tests passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error testing generateRandomNumber: ${error.message}`);
        return false;
    }
}

async function testCheckGuess() {
    console.log('\n=== Testing checkGuess Function ===');
    
    try {
        // Import the target file
        const targetPath = getTargetFile('exercises/10-mini-project');
        delete require.cache[targetPath];
        const solution = require(targetPath);
        
        let passed = 0;
        let total = 6;
        
        // Test cases
        const testCases = [
            { guess: 75, target: 50, expected: 'too high', description: 'guess higher than target' },
            { guess: 25, target: 50, expected: 'too low', description: 'guess lower than target' },
            { guess: 50, target: 50, expected: 'correct', description: 'guess equals target' },
            { guess: 100, target: 1, expected: 'too high', description: 'edge case: high guess' },
            { guess: 1, target: 100, expected: 'too low', description: 'edge case: low guess' },
            { guess: 1, target: 1, expected: 'correct', description: 'edge case: both minimum' }
        ];
        
        for (let i = 0; i < testCases.length; i++) {
            const test = testCases[i];
            const result = solution.checkGuess(test.guess, test.target);
            if (result === test.expected) {
                console.log(`✅ Test ${i + 1}: checkGuess(${test.guess}, ${test.target}) = "${result}" (${test.description})`);
                passed++;
            } else {
                console.log(`❌ Test ${i + 1}: checkGuess(${test.guess}, ${test.target}) expected "${test.expected}", got "${result}"`);
            }
        }
        
        console.log(`\nCheckGuess: ${passed}/${total} tests passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error testing checkGuess: ${error.message}`);
        return false;
    }
}

async function testIsValidGuess() {
    console.log('\n=== Testing isValidGuess Function ===');
    
    try {
        // Import the target file
        const targetPath = getTargetFile('exercises/10-mini-project');
        delete require.cache[targetPath];
        const solution = require(targetPath);
        
        let passed = 0;
        let total = 8;
        
        // Test cases
        const testCases = [
            { input: 50, expected: true, description: 'valid number in range' },
            { input: 1, expected: true, description: 'minimum valid number' },
            { input: 100, expected: true, description: 'maximum valid number' },
            { input: '50', expected: true, description: 'string number in range' },
            { input: 0, expected: false, description: 'number below range' },
            { input: 101, expected: false, description: 'number above range' },
            { input: 50.5, expected: false, description: 'decimal number' },
            { input: 'abc', expected: false, description: 'non-numeric string' }
        ];
        
        for (let i = 0; i < testCases.length; i++) {
            const test = testCases[i];
            const result = solution.isValidGuess(test.input);
            if (result === test.expected) {
                console.log(`✅ Test ${i + 1}: isValidGuess(${JSON.stringify(test.input)}) = ${result} (${test.description})`);
                passed++;
            } else {
                console.log(`❌ Test ${i + 1}: isValidGuess(${JSON.stringify(test.input)}) expected ${test.expected}, got ${result}`);
            }
        }
        
        console.log(`\nIsValidGuess: ${passed}/${total} tests passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error testing isValidGuess: ${error.message}`);
        return false;
    }
}

async function testPlayGame() {
    console.log('\n=== Testing playGame Function ===');
    
    try {
        // Import the target file
        const targetPath = getTargetFile('exercises/10-mini-project');
        delete require.cache[targetPath];
        const solution = require(targetPath);
        
        let passed = 0;
        let total = 5;
        
        // Test 1: Function returns an object with required properties
        const result = solution.playGame();
        if (typeof result === 'object' && result !== null) {
            console.log('✅ Test 1: playGame returns an object');
            passed++;
        } else {
            console.log('❌ Test 1: playGame does not return an object');
        }
        
        // Test 2: Object has required properties
        if (result.hasOwnProperty('target') && result.hasOwnProperty('attempts') && result.hasOwnProperty('won')) {
            console.log('✅ Test 2: playGame result has required properties (target, attempts, won)');
            passed++;
        } else {
            console.log('❌ Test 2: playGame result missing required properties');
        }
        
        // Test 3: Properties have correct types
        if (typeof result.target === 'number' && typeof result.attempts === 'number' && typeof result.won === 'boolean') {
            console.log('✅ Test 3: playGame result properties have correct types');
            passed++;
        } else {
            console.log('❌ Test 3: playGame result properties have incorrect types');
        }
        
        // Test 4: Target is in valid range
        if (result.target >= 1 && result.target <= 100 && Number.isInteger(result.target)) {
            console.log('✅ Test 4: playGame target is valid integer between 1-100');
            passed++;
        } else {
            console.log('❌ Test 4: playGame target is not a valid integer between 1-100');
        }
        
        // Test 5: Attempts is reasonable
        if (result.attempts > 0 && result.attempts < 50) {
            console.log('✅ Test 5: playGame attempts is reasonable (1-49)');
            passed++;
        } else {
            console.log('❌ Test 5: playGame attempts is not reasonable');
        }
        
        console.log(`\nPlayGame: ${passed}/${total} tests passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error testing playGame: ${error.message}`);
        return false;
    }
}

async function testCodeStructure() {
    console.log('\n=== Testing Code Structure ===');
    
    try {
        // Read the target file content
        const targetPath = getTargetFile('exercises/10-mini-project');
        const content = fs.readFileSync(targetPath, 'utf8');
        
        let passed = 0;
        let total = 6;
        
        // Test 1: Has generateRandomNumber function
        if (content.includes('function generateRandomNumber') && content.includes('Math.random')) {
            console.log('✅ Test 1: Code defines generateRandomNumber function with Math.random');
            passed++;
        } else {
            console.log('❌ Test 1: Code missing generateRandomNumber function or Math.random');
        }
        
        // Test 2: Has checkGuess function with conditionals
        if (content.includes('function checkGuess') && (content.includes('if') || content.includes('?'))) {
            console.log('✅ Test 2: Code defines checkGuess function with conditionals');
            passed++;
        } else {
            console.log('❌ Test 2: Code missing checkGuess function or conditionals');
        }
        
        // Test 3: Has isValidGuess function with validation
        if (content.includes('function isValidGuess') && content.includes('Number')) {
            console.log('✅ Test 3: Code defines isValidGuess function with number validation');
            passed++;
        } else {
            console.log('❌ Test 3: Code missing isValidGuess function or validation logic');
        }
        
        // Test 4: Has playGame function
        if (content.includes('function playGame')) {
            console.log('✅ Test 4: Code defines playGame function');
            passed++;
        } else {
            console.log('❌ Test 4: Code missing playGame function');
        }
        
        // Test 5: Uses module.exports
        if (content.includes('module.exports')) {
            console.log('✅ Test 5: Code uses module.exports for function export');
            passed++;
        } else {
            console.log('❌ Test 5: Code missing module.exports');
        }
        
        // Test 6: Has proper return statements
        const returnCount = (content.match(/return/g) || []).length;
        if (returnCount >= 4) {
            console.log('✅ Test 6: Code has appropriate return statements');
            passed++;
        } else {
            console.log('❌ Test 6: Code missing return statements in functions');
        }
        
        console.log(`\nCode Structure: ${passed}/${total} checks passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error checking code structure: ${error.message}`);
        return false;
    }
}

async function testFileExecution() {
    console.log('\n=== Testing File Execution ===');
    
    try {
        const { spawn } = require('child_process');
        
        let passed = 0;
        let total = 2;
        
        // Test script.js execution
        const scriptPath = path.resolve('exercises/10-mini-project/script.js');
        const scriptTest = await new Promise((resolve) => {
            const child = spawn('node', [scriptPath], {
                cwd: path.dirname(scriptPath),
                stdio: ['pipe', 'pipe', 'pipe']
            });
            
            let output = '';
            child.stdout.on('data', (data) => {
                output += data.toString();
            });
            
            child.on('close', (code) => {
                resolve({ code, output });
            });
            
            setTimeout(() => {
                child.kill();
                resolve({ code: -1, output: '' });
            }, 3000);
        });
        
        if (scriptTest.code === 0) {
            console.log('✅ Test 1: script.js executes without errors');
            passed++;
        } else {
            console.log('❌ Test 1: script.js execution failed');
        }
        
        // Test solution.js execution
        const solutionPath = path.resolve('exercises/10-mini-project/solution.js');
        const solutionTest = await new Promise((resolve) => {
            const child = spawn('node', [solutionPath], {
                cwd: path.dirname(solutionPath),
                stdio: ['pipe', 'pipe', 'pipe']
            });
            
            let output = '';
            child.stdout.on('data', (data) => {
                output += data.toString();
            });
            
            child.on('close', (code) => {
                resolve({ code, output });
            });
            
            setTimeout(() => {
                child.kill();
                resolve({ code: -1, output: '' });
            }, 3000);
        });
        
        if (solutionTest.code === 0 && solutionTest.output.includes('Testing')) {
            console.log('✅ Test 2: solution.js executes and shows test output');
            passed++;
        } else {
            console.log('❌ Test 2: solution.js execution failed or missing test output');
        }
        
        console.log(`\nFile Execution: ${passed}/${total} tests passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error testing file execution: ${error.message}`);
        return false;
    }
}

async function runMiniProjectTests() {
    console.log('🧪 Running Mini-Project Tests...');
    
    const generateRandomNumberPassed = await testGenerateRandomNumber();
    const checkGuessPassed = await testCheckGuess();
    const isValidGuessPassed = await testIsValidGuess();
    const playGamePassed = await testPlayGame();
    const codeStructurePassed = await testCodeStructure();
    const fileExecutionPassed = await testFileExecution();
    
    const allPassed = generateRandomNumberPassed && checkGuessPassed && isValidGuessPassed && 
                     playGamePassed && codeStructurePassed && fileExecutionPassed;
    
    console.log('\n📊 Mini-Project Tests Summary:');
    console.log(`Generate Random Number: ${generateRandomNumberPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Check Guess: ${checkGuessPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Is Valid Guess: ${isValidGuessPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Play Game: ${playGamePassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Code Structure: ${codeStructurePassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`File Execution: ${fileExecutionPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Overall: ${allPassed ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
    
    return allPassed;
}

module.exports = { runMiniProjectTests };

// Run tests if this file is executed directly
if (require.main === module) {
    runMiniProjectTests().then(success => {
        if (!success) {
            throw new Error('Mini-project tests failed');
        }
    });
}