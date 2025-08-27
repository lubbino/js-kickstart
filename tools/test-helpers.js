const { spawn } = require('child_process');
const path = require('path');

/**
 * Run a JavaScript script and capture its output
 * @param {string} scriptPath - Relative path to the script file
 * @param {Object} options - Options for running the script
 * @param {string[]} options.input - Array of input lines to provide to stdin
 * @returns {Promise<{code: number, stdout: string, stderr: string}>}
 */
function runScript(scriptPath, options = {}) {
  return new Promise((resolve) => {
    const { input = [] } = options;
    const fullPath = path.resolve(scriptPath);
    
    const child = spawn('node', [fullPath], {
      stdio: ['pipe', 'pipe', 'pipe'],
      env: { ...process.env, NODE_ENV: 'test' }
    });

    let stdout = '';
    let stderr = '';
    let inputIndex = 0;

    child.stdout.on('data', (data) => {
      const chunk = data.toString();
      
      // Filter out ANSI escape sequences that prompt-sync generates
      const cleanChunk = chunk.replace(/\x1b\[[0-9;]*[a-zA-Z]/g, '');
      
      if (stdout.length + cleanChunk.length < 1000000) { // Limit to 1MB
        stdout += cleanChunk;
      }
      
      // Auto-respond to prompts if we have input available
      if (inputIndex < input.length && (chunk.includes(':') || chunk.includes('Enter'))) {
        setTimeout(() => {
          if (!child.killed) {
            child.stdin.write(input[inputIndex] + '\n');
            inputIndex++;
          }
        }, 10);
      }
    });

    child.stderr.on('data', (data) => {
      const chunk = data.toString();
      if (stderr.length + chunk.length < 1000000) { // Limit to 1MB
        stderr += chunk;
      }
    });

    // Provide initial input if specified
    if (input.length > 0) {
      setTimeout(() => {
        if (!child.killed && inputIndex < input.length) {
          child.stdin.write(input[inputIndex] + '\n');
          inputIndex++;
        }
      }, 100);
    }

    child.on('close', (code) => {
      resolve({
        code: code || 0,
        stdout: stdout.trim(),
        stderr: stderr.trim()
      });
    });

    // Timeout after 3 seconds to prevent hanging
    setTimeout(() => {
      if (!child.killed) {
        child.kill('SIGTERM');
        setTimeout(() => {
          if (!child.killed) {
            child.kill('SIGKILL');
          }
        }, 1000);
      }
      resolve({
        code: 1,
        stdout: stdout.trim(),
        stderr: 'Script timed out after 3 seconds'
      });
    }, 3000);
  });
}

/**
 * Normalize output for comparison (handles CRLF differences)
 * @param {string} output - The output string to normalize
 * @returns {string[]} Array of trimmed lines
 */
function normalizeOutput(output) {
  return output.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
}

/**
 * Check if output contains expected lines (flexible matching)
 * @param {string} actual - Actual output from script
 * @param {string[]} expected - Array of expected lines
 * @returns {boolean} True if all expected lines are found
 */
function containsExpectedLines(actual, expected) {
  const actualLines = normalizeOutput(actual);
  return expected.every(expectedLine => 
    actualLines.some(actualLine => 
      actualLine.toLowerCase().includes(expectedLine.toLowerCase())
    )
  );
}

/**
 * Get the last non-empty line from output
 * @param {string} output - The output string
 * @returns {string} The last non-empty line
 */
function getLastLine(output) {
  const lines = normalizeOutput(output);
  return lines[lines.length - 1] || '';
}

/**
 * Test an exercise by running its script with input
 * @param {string} scriptPath - Path to the script file
 * @param {string} input - Input string (can contain newlines)
 * @returns {Promise<{success: boolean, output: string, error?: string}>}
 */
async function testExercise(scriptPath, input) {
  try {
    const inputLines = input.split('\n');
    const result = await runScript(scriptPath, { input: inputLines });
    
    return {
      success: result.code === 0,
      output: result.stdout,
      error: result.stderr
    };
  } catch (error) {
    return {
      success: false,
      output: '',
      error: error.message
    };
  }
}

module.exports = {
  runScript,
  normalizeOutput,
  containsExpectedLines,
  getLastLine,
  testExercise
};