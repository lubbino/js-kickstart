const { spawn } = require('child_process');
const path = require('path');

/**
 * Get the target file name based on environment variable
 * @returns {string} - Either 'script.js' or 'solution.js'
 */
function getTargetFile() {
    return process.env.TARGET_FILE === 'solution.js' ? 'solution.js' : 'script.js';
}

/**
 * Run a script and capture its output
 * @param {string} scriptPath - Path to the script
 * @returns {Promise<{success: boolean, output: string}>}
 */
function runScript(scriptPath) {
    return new Promise((resolve) => {
        const fullPath = path.resolve(scriptPath);
        const child = spawn('node', [fullPath], {
            stdio: ['pipe', 'pipe', 'pipe']
        });

        let stdout = '';
        let stderr = '';

        child.stdout.on('data', (data) => {
            stdout += data.toString();
        });

        child.stderr.on('data', (data) => {
            stderr += data.toString();
        });

        child.on('close', (code) => {
            resolve({
                success: code === 0,
                output: stdout.trim(),
                error: stderr.trim()
            });
        });

        child.on('error', (error) => {
            resolve({
                success: false,
                output: stdout.trim(),
                error: error.message
            });
        });

        // Close stdin immediately since this script doesn't need input
        child.stdin.end();

        // Timeout after 5 seconds
        setTimeout(() => {
            child.kill();
            resolve({
                success: false,
                output: stdout.trim(),
                error: 'Script timed out'
            });
        }, 5000);
    });
}

async function testCount1To10() {
    console.log('\n=== Testing 07-iteration/01-count-1-to-10 ===');
    
    const targetFile = getTargetFile();
    const result = await runScript(`exercises/07-iteration/01-count-1-to-10/${targetFile}`);
    
    if (result.success) {
        const lines = result.output.split('\n').map(line => line.trim()).filter(line => line);
        const expectedNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        
        if (lines.length === 10 && lines.every((line, index) => line === expectedNumbers[index])) {
            console.log('✅ Count 1 to 10: Correctly outputs numbers 1-10');
            return true;
        } else {
            console.log(`❌ Count 1 to 10: Expected numbers 1-10, got: ${lines.join(', ')}`);
            return false;
        }
    } else {
        console.log(`❌ Count 1 to 10: Script failed - ${result.error}`);
        return false;
    }
}

async function testSum1ToN() {
    console.log('\n=== Testing 07-iteration/02-sum-1-to-n ===');
    console.log('⚠️  AUTOMATED TESTING SKIPPED');
    console.log('');
    console.log('This exercise uses prompt-sync for user input, which causes issues');
    console.log('with automated testing. Please test this exercise manually by running:');
    console.log('');
    console.log('   cd exercises/07-iteration/02-sum-1-to-n');
    console.log(`   node ${getTargetFile()}`);
    console.log('');
    console.log('Test with different values like 5 (should output 15), 10 (should output 55)');
    
    return true; // Return true to not fail the overall test suite
}

async function runIterationTests() {
    console.log('🧪 Running Iteration Tests...');
    
    const count1To10Passed = await testCount1To10();
    const sum1ToNPassed = await testSum1ToN();
    
    const allPassed = count1To10Passed && sum1ToNPassed;
    
    console.log('\n📊 Iteration Tests Summary:');
    console.log(`Count 1 to 10: ${count1To10Passed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Sum 1 to N: ⏭️  MANUAL TESTING REQUIRED`);
    console.log(`Overall: ${allPassed ? '✅ TESTS COMPLETED' : '❌ SOME TESTS FAILED'}`);
    
    return allPassed;
}

module.exports = { runIterationTests };

// Run tests if this file is executed directly
if (require.main === module) {
    runIterationTests().then(success => {
        if (!success) {
            throw new Error('Iteration tests failed');
        }
    });
}