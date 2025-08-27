const path = require('path');

// Helper function to get the target file (script.js or solution.js)
function getTargetFile(exercisePath) {
    const targetFile = process.env.TARGET_FILE === 'solution.js' ? 'solution.js' : 'script.js';
    return path.resolve(exercisePath, targetFile);
}

async function testPrintList() {
    console.log('\n=== Testing 09-arrays/01-print-list ===');
    
    try {
        // Import the target file (script.js by default, solution.js if TARGET_FILE env var is set)
        const targetPath = getTargetFile('exercises/09-arrays/01-print-list');
        
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
        const expectedOutputs = [
            '1. apple',
            '2. banana', 
            '3. orange',
            '4. grape',
            '5. kiwi',
            'Total items: 5'
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
        
        console.log(`\nPrint List: ${passed}/${total} tests passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error testing print list: ${error.message}`);
        return false;
    }
}

async function testPrintListStructure() {
    console.log('\n=== Testing Print List Code Structure ===');
    
    try {
        // Read the target file content to check for proper structure
        const fs = require('fs');
        const targetPath = getTargetFile('exercises/09-arrays/01-print-list');
        const content = fs.readFileSync(targetPath, 'utf8');
        
        // Check if code uses proper array and loop structure
        const hasArrayDeclaration = content.includes('[') && content.includes(']');
        const hasForLoop = content.includes('for') && content.includes('.length');
        const hasConsoleLog = content.includes('console.log');
        const hasNumbering = content.includes('i + 1') || content.includes('(i+1)');
        
        let passed = 0;
        let total = 4;
        
        if (hasArrayDeclaration) {
            console.log('✅ Code declares an array with square brackets');
            passed++;
        } else {
            console.log('❌ Code does not properly declare an array');
        }
        
        if (hasForLoop) {
            console.log('✅ Code uses a for loop with array.length');
            passed++;
        } else {
            console.log('❌ Code does not use proper for loop structure');
        }
        
        if (hasConsoleLog) {
            console.log('✅ Code uses console.log for output');
            passed++;
        } else {
            console.log('❌ Code does not use console.log');
        }
        
        if (hasNumbering) {
            console.log('✅ Code uses proper numbering (i + 1)');
            passed++;
        } else {
            console.log('❌ Code does not use proper numbering logic');
        }
        
        console.log(`\nPrint List Structure: ${passed}/${total} checks passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error checking print list structure: ${error.message}`);
        return false;
    }
}

async function testMaxInArray() {
    console.log('\n=== Testing 09-arrays/02-max-in-array ===');
    
    try {
        // Import the target file
        const targetPath = getTargetFile('exercises/09-arrays/02-max-in-array');
        
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
        const expectedOutputs = ['9', '23', '5', '-1'];
        
        let passed = 0;
        let total = expectedOutputs.length;
        
        for (let i = 0; i < expectedOutputs.length; i++) {
            if (i < capturedOutput.length && capturedOutput[i] === expectedOutputs[i]) {
                console.log(`✅ Test ${i + 1}: findMax returned ${expectedOutputs[i]}`);
                passed++;
            } else {
                console.log(`❌ Test ${i + 1}: Expected "${expectedOutputs[i]}", got "${capturedOutput[i] || 'undefined'}"`);
            }
        }
        
        console.log(`\nMax in Array: ${passed}/${total} tests passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error testing max in array: ${error.message}`);
        return false;
    }
}

async function testMaxInArrayDefinition() {
    console.log('\n=== Testing Max in Array Function Definition ===');
    
    try {
        // Read the target file content to check for function definition
        const fs = require('fs');
        const targetPath = getTargetFile('exercises/09-arrays/02-max-in-array');
        const content = fs.readFileSync(targetPath, 'utf8');
        
        // Check if function is properly defined
        const hasFunctionDefinition = content.includes('function findMax');
        const hasParameter = content.includes('findMax(numbers)') || content.includes('findMax( numbers )');
        const hasReturn = content.includes('return');
        const hasMaxLogic = content.includes('max') && content.includes('numbers[0]') && content.includes('for');
        
        let passed = 0;
        let total = 4;
        
        if (hasFunctionDefinition) {
            console.log('✅ Function findMax is defined');
            passed++;
        } else {
            console.log('❌ Function findMax is not properly defined');
        }
        
        if (hasParameter) {
            console.log('✅ Function has numbers parameter');
            passed++;
        } else {
            console.log('❌ Function does not have proper numbers parameter');
        }
        
        if (hasReturn) {
            console.log('✅ Function uses return statement');
            passed++;
        } else {
            console.log('❌ Function does not use return statement');
        }
        
        if (hasMaxLogic) {
            console.log('✅ Function implements proper max-finding algorithm');
            passed++;
        } else {
            console.log('❌ Function does not implement proper max-finding logic');
        }
        
        console.log(`\nMax in Array Definition: ${passed}/${total} checks passed`);
        return passed === total;
        
    } catch (error) {
        console.log(`❌ Error checking max in array definition: ${error.message}`);
        return false;
    }
}

async function runArraysTests() {
    console.log('🧪 Running Arrays Tests...');
    
    const printListPassed = await testPrintList();
    const printListStructurePassed = await testPrintListStructure();
    const maxInArrayPassed = await testMaxInArray();
    const maxInArrayDefinitionPassed = await testMaxInArrayDefinition();
    
    const allPassed = printListPassed && printListStructurePassed && maxInArrayPassed && maxInArrayDefinitionPassed;
    
    console.log('\n📊 Arrays Tests Summary:');
    console.log(`Print List Output: ${printListPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Print List Structure: ${printListStructurePassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Max in Array Output: ${maxInArrayPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Max in Array Definition: ${maxInArrayDefinitionPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Overall: ${allPassed ? '✅ ALL TESTS PASSED' : '❌ SOME TESTS FAILED'}`);
    
    return allPassed;
}

module.exports = { runArraysTests };

// Run tests if this file is executed directly
if (require.main === module) {
    runArraysTests().then(success => {
        if (!success) {
            throw new Error('Arrays tests failed');
        }
    });
}