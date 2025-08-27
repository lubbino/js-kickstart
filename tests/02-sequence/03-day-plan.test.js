const assert = require('assert');
const { runScript, normalizeOutput } = require('../../tools/test-helpers');

/**
 * Get the target file name based on environment variable
 * @returns {string} - Either 'script.js' or 'solution.js'
 */
function getTargetFile() {
    return process.env.TARGET_FILE === 'solution.js' ? 'solution.js' : 'script.js';
}

async function test_03_day_plan() {
  console.log('Testing 02-sequence/03-day-plan...');
  
  // Test 1: Should print exactly 3 lines of output
  const targetFile = getTargetFile();
  const result = await runScript(`exercises/02-sequence/03-day-plan/${targetFile}`);
  assert.strictEqual(result.code, 0, 'Script should run without errors');
  
  const lines = normalizeOutput(result.stdout);
  assert.strictEqual(lines.length, 3, `Expected 3 lines of output, got ${lines.length}`);
  console.log('✅ Prints exactly 3 lines');
  
  // Test 2: Should print non-empty activities
  lines.forEach((line, index) => {
    assert(line.length > 0, `Line ${index + 1} should not be empty`);
    assert(line.length > 5, `Line ${index + 1} should be a meaningful activity (more than 5 characters)`);
  });
  console.log('✅ All lines are meaningful activities');
  
  // Test 3: Should contain activity-like content
  const allText = lines.join(' ').toLowerCase();
  const activityWords = ['wake', 'eat', 'go', 'work', 'study', 'sleep', 'class', 'exercise', 'breakfast', 'lunch', 'dinner'];
  const hasActivityWord = activityWords.some(word => allText.includes(word));
  assert(hasActivityWord, 'Output should contain activity-related words');
  console.log('✅ Contains activity-related content');
  
  console.log('🎉 All tests passed for 02-sequence/03-day-plan!');
  return true;
}

async function runSequenceTests() {
  console.log('🧪 Running Sequence Tests...');
  
  try {
    const dayPlanPassed = await test_03_day_plan();
    
    console.log('\n📊 Sequence Tests Summary:');
    console.log(`Day Plan: ${dayPlanPassed ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Overall: ${dayPlanPassed ? '✅ TESTS COMPLETED' : '❌ SOME TESTS FAILED'}`);
    
    return dayPlanPassed;
  } catch (error) {
    console.log('❌ Sequence tests failed:', error.message);
    return false;
  }
}

module.exports = { runSequenceTests };

// Run tests if this file is executed directly
if (require.main === module) {
  runSequenceTests().then(success => {
    if (!success) {
      process.exit(1);
    }
  }).catch(error => {
    console.error('❌ Error running sequence tests:', error.message);
    process.exit(1);
  });
}