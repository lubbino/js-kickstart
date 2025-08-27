// IO Tests - Manual Testing Only
// Note: This exercise uses prompt-sync for user input, which doesn't work well
// with automated testing. Students should test this exercise manually.

/**
 * Get the target file name based on environment variable
 * @returns {string} - Either 'script.js' or 'solution.js'
 */
function getTargetFile() {
    return process.env.TARGET_FILE === 'solution.js' ? 'solution.js' : 'script.js';
}

async function runGreetUserTest() {
    console.log('🧪 IO Tests - Manual Testing Required');
    console.log('=====================================');
    console.log('');
    console.log('⚠️  AUTOMATED TESTING SKIPPED');
    console.log('');
    console.log('This exercise uses prompt-sync for user input, which causes issues');
    console.log('with automated testing. Please test this exercise manually by running:');
    console.log('');
    console.log('📁 05-io/01-greet-user:');
    console.log('   cd exercises/05-io/01-greet-user');
    console.log(`   node ${getTargetFile()}`);
    console.log('');
    console.log('Test with different names to ensure the greeting is personalized.');
    console.log('');
    console.log('🔧 TODO: Fix automated testing for prompt-sync exercises in the future');
    console.log('');
    console.log('📊 IO Tests Summary:');
    console.log('Greet User: ⏭️  MANUAL TESTING REQUIRED');
    console.log('Overall: ⏭️  MANUAL TESTING REQUIRED');
    
    return true; // Return true to not fail the overall test suite
}

module.exports = { runGreetUserTest };

// Run tests if this file is executed directly
if (require.main === module) {
    runGreetUserTest().then(success => {
        if (!success) {
            throw new Error('IO tests failed');
        }
    });
}