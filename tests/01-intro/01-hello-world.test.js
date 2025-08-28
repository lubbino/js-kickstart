const assert = require('assert');
const { runScript, normalizeOutput } = require('../../tools/test-helpers');

/**
 * Get the target file name based on environment variable
 * @returns {string} - Either 'script.js' or 'solution.js'
 */
function getTargetFile() {
    return process.env.TARGET_FILE === 'solution.js' ? 'solution.js' : 'script.js';
}

async function test_01_hello_world() {
  console.log('Testing 01-intro/01-hello-world...');
  
  // Test 1: Should output "Hello, World!"
  const targetFile = getTargetFile();
  const result = await runScript(`exercises/01-intro/01-hello-world/${targetFile}`);
  assert.strictEqual(result.code, 0, 'Script should run without errors');
  
  const lines = normalizeOutput(result.stdout);
  assert.strictEqual(lines.length, 1, `Expected 1 line of output, got ${lines.length}`);
  assert.strictEqual(lines[0], 'Hello, World!', `Expected "Hello, World!", got "${lines[0]}"`);
  console.log('✅ Outputs "Hello, World!" correctly');
  
  console.log('🎉 All tests passed for 01-intro/01-hello-world!');
  return true;
}

async function runIntroTests() {
  console.log('🧪 Running Intro Tests...');
  
  try {
    const helloWorldPassed = await test_01_hello_world();
    
    console.log('\n📊 Intro Tests Summary:');
    console.log(`Hello World: ${helloWorldPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Overall: ${helloWorldPassed ? '✅ TESTS COMPLETED' : '❌ SOME TESTS FAILED'}`);
    
    return helloWorldPassed;
  } catch (error) {
    console.log('❌ Intro tests failed:', error.message);
    return false;
  }
}

module.exports = { runIntroTests };

// Run tests if this file is executed directly
if (require.main === module) {
  runIntroTests().then(success => {
    if (!success) {
      process.exit(1);
    }
  }).catch(error => {
    console.error('❌ Error running intro tests:', error.message);
    process.exit(1);
  });
}