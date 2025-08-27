const fs = require('fs');
const path = require('path');

/**
 * Simple test runner for JavaScript Get Started exercises
 * Usage: node tools/run-tests.js [--only <test-pattern>] [--watch]
 */

class TestRunner {
  constructor() {
    this.testsDir = path.join(__dirname, '..', 'tests');
    this.totalTests = 0;
    this.passedTests = 0;
    this.failedTests = 0;
  }

  /**
   * Find all test files matching the pattern
   * @param {string} pattern - Optional pattern to filter tests
   * @returns {string[]} Array of test file paths
   */
  findTestFiles(pattern = null) {
    const testFiles = [];
    
    if (!fs.existsSync(this.testsDir)) {
      console.log('❌ Tests directory not found:', this.testsDir);
      return testFiles;
    }

    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (item.endsWith('.test.js')) {
          const relativePath = path.relative(this.testsDir, fullPath);
          
          if (!pattern || relativePath.includes(pattern)) {
            testFiles.push(fullPath);
          }
        }
      }
    };

    scanDirectory(this.testsDir);
    return testFiles;
  }

  /**
   * Run a single test file
   * @param {string} testFile - Path to the test file
   */
  async runTestFile(testFile) {
    const relativePath = path.relative(this.testsDir, testFile);
    console.log(`\n🧪 Running ${relativePath}...`);

    try {
      // Clear require cache to ensure fresh test runs
      delete require.cache[require.resolve(testFile)];
      
      // Load the test module
      const testModule = require(testFile);
      
      // Check if this is a structured test module with exported functions
      if (testModule && typeof testModule === 'object') {
        // Look for test runner functions (e.g., runFunctionsTests, runSelectionTests)
        const testRunnerFunctions = Object.keys(testModule).filter(key =>
          typeof testModule[key] === 'function' && key.startsWith('run') && key.endsWith('Tests')
        );
        
        if (testRunnerFunctions.length > 0) {
          // Run the structured test
          const testFunction = testModule[testRunnerFunctions[0]];
          const result = await testFunction();
          
          if (result === true) {
            console.log(`✅ ${relativePath} - PASSED`);
            this.passedTests++;
          } else {
            console.log(`❌ ${relativePath} - FAILED`);
            this.failedTests++;
          }
        } else {
          // No structured test function found, assume it ran during require()
          console.log(`✅ ${relativePath} - PASSED`);
          this.passedTests++;
        }
      } else {
        // Simple test file that runs during require()
        console.log(`✅ ${relativePath} - PASSED`);
        this.passedTests++;
      }
      
    } catch (error) {
      console.log(`❌ ${relativePath} - FAILED`);
      console.log(`   Error: ${error.message}`);
      if (error.stack) {
        console.log(`   Stack: ${error.stack.split('\n')[1]?.trim() || ''}`);
      }
      this.failedTests++;
    }
    
    this.totalTests++;
  }

  /**
   * Run all tests matching the pattern
   * @param {string} pattern - Optional pattern to filter tests
   */
  async runTests(pattern = null) {
    console.log('🚀 JavaScript Get Started - Test Runner');
    console.log('=====================================');
    
    if (pattern) {
      console.log(`🔍 Running tests matching: ${pattern}`);
    } else {
      console.log('🔍 Running all tests...');
    }

    const testFiles = this.findTestFiles(pattern);
    
    if (testFiles.length === 0) {
      console.log('❌ No test files found!');
      return;
    }

    console.log(`📁 Found ${testFiles.length} test file(s)`);

    // Run each test file
    for (const testFile of testFiles) {
      await this.runTestFile(testFile);
    }

    // Print summary
    this.printSummary();
  }

  /**
   * Print test results summary
   */
  printSummary() {
    console.log('\n📊 Test Results Summary');
    console.log('=======================');
    console.log(`Total tests: ${this.totalTests}`);
    console.log(`✅ Passed: ${this.passedTests}`);
    console.log(`❌ Failed: ${this.failedTests}`);
    
    if (this.failedTests === 0) {
      console.log('\n🎉 All tests passed!');
    } else {
      console.log(`\n💥 ${this.failedTests} test(s) failed`);
      process.exit(1);
    }
  }
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    pattern: null,
    watch: false
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--only' && i + 1 < args.length) {
      options.pattern = args[i + 1];
      i++; // Skip next argument
    } else if (args[i] === '--watch') {
      options.watch = true;
    }
  }

  return options;
}

// Main execution
async function main() {
  const options = parseArgs();
  const runner = new TestRunner();

  if (options.watch) {
    console.log('👀 Watch mode not implemented yet. Running tests once...');
  }

  await runner.runTests(options.pattern);
}

// Run if this file is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('💥 Test runner error:', error);
    process.exit(1);
  });
}

module.exports = TestRunner;