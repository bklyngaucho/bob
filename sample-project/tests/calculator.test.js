/**
 * Simple Test File for Calculator
 * Practice: Run this with F5 or npm test
 * Practice: Set breakpoints to debug failing tests
 */

const Calculator = require('../src/calculator');

// Simple test runner
function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
    return true;
  } catch (error) {
    console.error(`✗ ${description}`);
    console.error(`  ${error.message}`);
    return false;
  }
}

function assertEquals(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message || `Expected ${expected}, but got ${actual}`);
  }
}

// Run tests
console.log('Running Calculator Tests...\n');

const calc = new Calculator();
let passed = 0;
let failed = 0;

// Addition tests
if (test('should add two positive numbers', () => {
  assertEquals(calc.add(5, 3), 8, 'Addition failed');
})) passed++; else failed++;

if (test('should add negative numbers', () => {
  assertEquals(calc.add(-5, -3), -8, 'Negative addition failed');
})) passed++; else failed++;

// Subtraction tests
// Practice: This test will fail! Debug to find why
if (test('should subtract two numbers', () => {
  assertEquals(calc.subtract(10, 5), 5, 'Subtraction failed');
})) passed++; else failed++;

// Multiplication tests
if (test('should multiply two numbers', () => {
  assertEquals(calc.multiply(4, 5), 20, 'Multiplication failed');
})) passed++; else failed++;

// Division tests
if (test('should divide two numbers', () => {
  assertEquals(calc.divide(20, 4), 5, 'Division failed');
})) passed++; else failed++;

// Practice: Uncomment this test and fix the divide by zero bug
// if (test('should handle division by zero', () => {
//   const result = calc.divide(10, 0);
//   assertEquals(result, Infinity, 'Division by zero not handled');
// })) passed++; else failed++;

// Power tests
// Practice: This test will fail! Debug to find the bug
if (test('should calculate power correctly', () => {
  assertEquals(calc.power(2, 3), 8, 'Power calculation failed');
})) passed++; else failed++;

// Square root tests
if (test('should calculate square root', () => {
  assertEquals(calc.sqrt(16), 4, 'Square root failed');
})) passed++; else failed++;

// Percentage tests
if (test('should calculate percentage', () => {
  assertEquals(calc.percentage(200, 50), 100, 'Percentage failed');
})) passed++; else failed++;

// History tests
if (test('should track calculation history', () => {
  const history = calc.getHistory();
  if (history.length === 0) {
    throw new Error('History is empty');
  }
})) passed++; else failed++;

// Summary
console.log('\n' + '='.repeat(40));
console.log(`Tests completed: ${passed + failed}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log('='.repeat(40));

if (failed > 0) {
  console.log('\n⚠️  Some tests failed! Use the debugger to find and fix the bugs.');
  console.log('Practice: Set breakpoints in calculator.js and step through the code.');
}

// Practice exercises:
// 1. Run this file with F5
// 2. Set breakpoints in failing tests
// 3. Step through code to find bugs
// 4. Fix bugs in calculator.js
// 5. Re-run tests to verify fixes

// Made with Bob
