const path = require('path');

// Helper function to get the target file (script.js or solution.js)
function getTargetFile(exercisePath) {
    const targetFile = process.env.TARGET_FILE === 'solution.js' ? 'solution.js' : 'script.js';
    return path.resolve(exercisePath, targetFile);
}

async function testHelloFunction() {
    console.log('\n=== Testing 08-functions/01-hello-function ===');
    
    try {
        // Import the target file (script.js by default, solution.js if TARGET_FILE env var is set)
        const targetPath = getTargetFile('exercises/08-functions/01-hello-function');
        
        // Clear require cache to ensure fresh import
        delete require.cache[targetPath];
        
        // Capture console.log output
        const originalLog = console.log;
        let capturedOutput = [];
        console.log = (...args) => {
            capturedOutput.push(args.join(' '));
        };
        
        // Import and run the target file
        require(targetPath);
        
        // Restore console.log
        console.log = originalLog;
        
        // Test if greetPerson function exists in global scope
        // Since the solution file runs and calls the function, we need to check the output
        const expectedOutputs = [
            'Hello, Alice! Welcome to programming!',
            'Hello, Bob! Welcome to programming!',
            'Hello, Carol! Welcome to programming!'
        ];
        
        let passed = 0;
        let total = expectedOutputs.length;
        
        for (let i = 0; i < expectedOutputs.length; i++) {
            if (i < capturedOutput.length && capturedOutput[i] === expectedOutputs[i]) {
                console.log(`✅ Test ${i + 1}: ${expectedOutputs[i]}`);
                passed++;
            } else {
                console.log(`❌ Test ${i + 1}: Expected "${expectedOutputs[i]}", got "${capturedOutput[i] || 'undefined'}"`);
            }
        }
        
        console.log(`\nHello Function: ${passed}/${total} tests passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error testing hello function: ${error.message}`);
        return false;
    }
}

async function testFunctionDefinition() {
    console.log('\n=== Testing Function Definition ===');
    
    try {
        // Read the target file content to check for function definition
        const fs = require('fs');
        const targetPath = getTargetFile('exercises/08-functions/01-hello-function');
        const content = fs.readFileSync(targetPath, 'utf8');
        
        // Check if function is properly defined
        const hasFunctionDefinition = content.includes('function greetPerson');
        const hasParameter = content.includes('greetPerson(name)') || content.includes('greetPerson( name )');
        const hasReturn = content.includes('return');
        const hasCorrectMessage = content.includes('Hello,') && content.includes('Welcome to programming!');
        
        let passed = 0;
        let total = 4;
        
        if (hasFunctionDefinition) {
            console.log('✅ Function greetPerson is defined');
            passed++;
        } else {
            console.log('❌ Function greetPerson is not properly defined');
        }
        
        if (hasParameter) {
            console.log('✅ Function has name parameter');
            passed++;
        } else {
            console.log('❌ Function does not have proper name parameter');
        }
        
        if (hasReturn) {
            console.log('✅ Function uses return statement');
            passed++;
        } else {
            console.log('❌ Function does not use return statement');
        }
        
        if (hasCorrectMessage) {
            console.log('✅ Function returns correct message format');
            passed++;
        } else {
            console.log('❌ Function does not return correct message format');
        }
        
        console.log(`\nFunction Definition: ${passed}/${total} checks passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error checking function definition: ${error.message}`);
        return false;
    }
}

async function testCalculateArea() {
    console.log('\n=== Testing 08-functions/02-calculate-area ===');
    
    try {
        // Import the target file
        const targetPath = getTargetFile('exercises/08-functions/02-calculate-area');
        
        // Clear require cache to ensure fresh import
        delete require.cache[targetPath];
        
        // Capture console.log output
        const originalLog = console.log;
        let capturedOutput = [];
        console.log = (...args) => {
            capturedOutput.push(args.join(' '));
        };
        
        // Import and run the target file
        require(targetPath);
        
        // Restore console.log
        console.log = originalLog;
        
        // Test expected outputs
        const expectedOutputs = ['15', '70', '10'];
        
        let passed = 0;
        let total = expectedOutputs.length;
        
        for (let i = 0; i < expectedOutputs.length; i++) {
            if (i < capturedOutput.length && capturedOutput[i] === expectedOutputs[i]) {
                console.log(`✅ Test ${i + 1}: calculateArea returned ${expectedOutputs[i]}`);
                passed++;
            } else {
                console.log(`❌ Test ${i + 1}: Expected "${expectedOutputs[i]}", got "${capturedOutput[i] || 'undefined'}"`);
            }
        }
        
        console.log(`\nCalculate Area: ${passed}/${total} tests passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error testing calculate area: ${error.message}`);
        return false;
    }
}

async function testCalculateAreaDefinition() {
    console.log('\n=== Testing Calculate Area Function Definition ===');
    
    try {
        // Read the target file content to check for function definition
        const fs = require('fs');
        const targetPath = getTargetFile('exercises/08-functions/02-calculate-area');
        const content = fs.readFileSync(targetPath, 'utf8');
        
        // Check if function is properly defined
        const hasFunctionDefinition = content.includes('function calculateArea');
        const hasParameters = content.includes('calculateArea(width, height)') || content.includes('calculateArea( width, height )');
        const hasReturn = content.includes('return');
        const hasMultiplication = content.includes('width * height') || content.includes('height * width');
        
        let passed = 0;
        let total = 4;
        
        if (hasFunctionDefinition) {
            console.log('✅ Function calculateArea is defined');
            passed++;
        } else {
            console.log('❌ Function calculateArea is not properly defined');
        }
        
        if (hasParameters) {
            console.log('✅ Function has width and height parameters');
            passed++;
        } else {
            console.log('❌ Function does not have proper width and height parameters');
        }
        
        if (hasReturn) {
            console.log('✅ Function uses return statement');
            passed++;
        } else {
            console.log('❌ Function does not use return statement');
        }
        
        if (hasMultiplication) {
            console.log('✅ Function calculates width * height');
            passed++;
        } else {
            console.log('❌ Function does not calculate width * height');
        }
        
        console.log(`\nCalculate Area Definition: ${passed}/${total} checks passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error checking calculate area definition: ${error.message}`);
        return false;
    }
}

async function testIsEven() {
    console.log('\n=== Testing 08-functions/03-is-even ===');
    
    try {
        // Import the target file
        const targetPath = getTargetFile('exercises/08-functions/03-is-even');
        
        // Clear require cache to ensure fresh import
        delete require.cache[targetPath];
        
        // Capture console.log output
        const originalLog = console.log;
        let capturedOutput = [];
        console.log = (...args) => {
            capturedOutput.push(args.join(' '));
        };
        
        // Import and run the target file
        require(targetPath);
        
        // Restore console.log
        console.log = originalLog;
        
        // Test expected outputs
        const expectedOutputs = ['true', 'false', 'true', 'true', 'false'];
        
        let passed = 0;
        let total = expectedOutputs.length;
        
        for (let i = 0; i < expectedOutputs.length; i++) {
            if (i < capturedOutput.length && capturedOutput[i] === expectedOutputs[i]) {
                console.log(`✅ Test ${i + 1}: isEven returned ${expectedOutputs[i]}`);
                passed++;
            } else {
                console.log(`❌ Test ${i + 1}: Expected "${expectedOutputs[i]}", got "${capturedOutput[i] || 'undefined'}"`);
            }
        }
        
        console.log(`\nIs Even: ${passed}/${total} tests passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error testing is even: ${error.message}`);
        return false;
    }
}

async function testIsEvenDefinition() {
    console.log('\n=== Testing Is Even Function Definition ===');
    
    try {
        // Read the target file content to check for function definition
        const fs = require('fs');
        const targetPath = getTargetFile('exercises/08-functions/03-is-even');
        const content = fs.readFileSync(targetPath, 'utf8');
        
        // Check if function is properly defined
        const hasFunctionDefinition = content.includes('function isEven');
        const hasParameter = content.includes('isEven(number)') || content.includes('isEven( number )');
        const hasReturn = content.includes('return');
        const hasModulo = content.includes('number % 2') && content.includes('=== 0');
        
        let passed = 0;
        let total = 4;
        
        if (hasFunctionDefinition) {
            console.log('✅ Function isEven is defined');
            passed++;
        } else {
            console.log('❌ Function isEven is not properly defined');
        }
        
        if (hasParameter) {
            console.log('✅ Function has number parameter');
            passed++;
        } else {
            console.log('❌ Function does not have proper number parameter');
        }
        
        if (hasReturn) {
            console.log('✅ Function uses return statement');
            passed++;
        } else {
            console.log('❌ Function does not use return statement');
        }
        
        if (hasModulo) {
            console.log('✅ Function uses modulo operator to check even/odd');
            passed++;
        } else {
            console.log('❌ Function does not use proper modulo logic');
        }
        
        console.log(`\nIs Even Definition: ${passed}/${total} checks passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error checking is even definition: ${error.message}`);
        return false;
    }
}

async function runFunctionsTests() {
    console.log('🧪 Running Functions Tests...');
    
    const helloFunctionPassed = await testHelloFunction();
    const functionDefinitionPassed = await testFunctionDefinition();
    const calculateAreaPassed = await testCalculateArea();
    const calculateAreaDefinitionPassed = await testCalculateAreaDefinition();
    const isEvenPassed = await testIsEven();
    const isEvenDefinitionPassed = await testIsEvenDefinition();
    
    const allPassed = helloFunctionPassed && functionDefinitionPassed && calculateAreaPassed && calculateAreaDefinitionPassed && isEvenPassed && isEvenDefinitionPassed;
    
    console.log('\n📊 Functions Tests Summary:');
    console.log(`Hello Function Output: ${helloFunctionPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Hello Function Definition: ${functionDefinitionPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Calculate Area Output: ${calculateAreaPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Calculate Area Definition: ${calculateAreaDefinitionPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Is Even Output: ${isEvenPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Is Even Definition: ${isEvenDefinitionPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Overall: ${allPassed ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
    
    return allPassed;
}

module.exports = { runFunctionsTests };

// Run tests if this file is executed directly
if (require.main === module) {
    runFunctionsTests().then(success => {
        if (!success) {
            throw new Error('Functions tests failed');
        }
    });
}