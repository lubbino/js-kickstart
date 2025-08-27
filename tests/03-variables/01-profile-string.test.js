const assert = require('assert');
const { runScript, normalizeOutput } = require('../../tools/test-helpers');

/**
 * Get the target file name based on environment variable
 * @returns {string} - Either 'script.js' or 'solution.js'
 */
function getTargetFile() {
    return process.env.TARGET_FILE === 'solution.js' ? 'solution.js' : 'script.js';
}

async function test_profile_string() {
  console.log('Testing 03-variables/01-profile-string...');
  
  const targetFile = getTargetFile();
  const result = await runScript(`exercises/03-variables/01-profile-string/${targetFile}`);
  assert.strictEqual(result.code, 0, 'Script should run without errors');
  
  // Test 1: Should print exactly one line of output
  const lines = normalizeOutput(result.stdout);
  assert.strictEqual(lines.length, 1, `Expected 1 line of output, got ${lines.length}`);
  console.log('✅ Prints exactly one line');
  
  // Test 2: Should contain a name in the output
  const output = result.stdout.toLowerCase();
  const hasNamePattern = output.includes('my name is') || output.includes('i am') || output.includes('name:');
  assert(hasNamePattern, 'Output should mention a name');
  console.log('✅ Contains name pattern');
  
  // Test 3: Should contain an age in the output
  const hasNumber = /\d+/.test(result.stdout);
  const hasAgePattern = output.includes('age') || output.includes('old') || output.includes('years');
  assert(hasNumber && hasAgePattern, 'Output should contain an age (number + age-related word)');
  console.log('✅ Contains age information');
  
  // Test 4: Should contain a hobby in the output
  const hasHobbyPattern = output.includes('hobby') || output.includes('like') ||
                         output.includes('love') || output.includes('enjoy') || output.includes('favorite');
  assert(hasHobbyPattern, 'Output should mention a hobby or interest');
  console.log('✅ Contains hobby information');
  
  // Test 5: Should be a complete sentence
  const outputTrimmed = result.stdout.trim();
  assert(outputTrimmed.length > 20, 'Output should be a substantial sentence (more than 20 characters)');
  assert(/^[A-Z]/.test(outputTrimmed), 'Sentence should start with a capital letter');
  assert(/[.!?]$/.test(outputTrimmed), 'Sentence should end with punctuation');
  console.log('✅ Is a complete, well-formed sentence');
  
  console.log('🎉 All tests passed for 03-variables/01-profile-string!');
  return true;
}

async function runVariablesTests() {
  console.log('🧪 Running Variables Tests...');
  
  try {
    const profileStringPassed = await test_profile_string();
    
    console.log('\n📊 Variables Tests Summary:');
    console.log(`Profile String: ${profileStringPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Overall: ${profileStringPassed ? '✅ TESTS COMPLETED' : '❌ SOME TESTS FAILED'}`);
    
    return profileStringPassed;
  } catch (error) {
    console.log('❌ Variables tests failed:', error.message);
    return false;
  }
}

module.exports = { runVariablesTests };

// Run tests if this file is executed directly
if (require.main === module) {
  runVariablesTests().then(success => {
    if (!success) {
      process.exit(1);
    }
  }).catch(error => {
    console.error('❌ Error running variables tests:', error.message);
    process.exit(1);
  });
}