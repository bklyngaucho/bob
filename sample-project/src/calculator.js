/**
 * Calculator Class with Intentional Bugs
 * Practice: Debug this file to find and fix bugs
 * Practice: Set breakpoints and step through code
 * Practice: Use Debug Console to test fixes
 */

class Calculator {
  constructor() {
    this.history = [];
    console.log('Calculator initialized');
  }

  /**
   * Add two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum
   */
  add(a, b) {
    const result = a + b;
    this.addToHistory('add', a, b, result);
    return result;
  }

  /**
   * Subtract two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference
   * 
   * BUG: This function has a bug! Can you find it?
   * Practice: Set breakpoint and inspect variables
   */
  subtract(a, b) {
    const result = a + b; // BUG: Should be a - b
    this.addToHistory('subtract', a, b, result);
    return result;
  }

  /**
   * Multiply two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product
   */
  multiply(a, b) {
    const result = a * b;
    this.addToHistory('multiply', a, b, result);
    return result;
  }

  /**
   * Divide two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Quotient
   * 
   * BUG: This function doesn't handle division by zero!
   * Practice: Add error handling
   * Practice: Test with divide(10, 0)
   */
  divide(a, b) {
    // TODO: Add check for division by zero
    // Practice: Use Cmd+Shift+F to find all TODO comments
    
    const result = a / b;
    this.addToHistory('divide', a, b, result);
    return result;
  }

  /**
   * Calculate power
   * @param {number} base - Base number
   * @param {number} exponent - Exponent
   * @returns {number} Result
   * 
   * BUG: This function has a logic error!
   * Practice: Debug to find the issue
   */
  power(base, exponent) {
    let result = 1;
    for (let i = 0; i <= exponent; i++) { // BUG: Should be i < exponent
      result *= base;
    }
    this.addToHistory('power', base, exponent, result);
    return result;
  }

  /**
   * Calculate square root
   * @param {number} num - Number
   * @returns {number} Square root
   * 
   * BUG: Doesn't handle negative numbers!
   * Practice: Add validation
   */
  sqrt(num) {
    // TODO: Add check for negative numbers
    const result = Math.sqrt(num);
    this.addToHistory('sqrt', num, null, result);
    return result;
  }

  /**
   * Calculate percentage
   * @param {number} value - Value
   * @param {number} percentage - Percentage
   * @returns {number} Result
   */
  percentage(value, percentage) {
    const result = (value * percentage) / 100;
    this.addToHistory('percentage', value, percentage, result);
    return result;
  }

  /**
   * Add operation to history
   * @param {string} operation - Operation name
   * @param {number} a - First operand
   * @param {number} b - Second operand
   * @param {number} result - Result
   * 
   * Practice: Set breakpoint here to see history building
   */
  addToHistory(operation, a, b, result) {
    this.history.push({
      operation,
      operands: b !== null ? [a, b] : [a],
      result,
      timestamp: new Date()
    });
  }

  /**
   * Get calculation history
   * @returns {Array} History array
   */
  getHistory() {
    return this.history;
  }

  /**
   * Clear history
   */
  clearHistory() {
    this.history = [];
    console.log('History cleared');
  }

  /**
   * Get last result
   * @returns {number} Last result
   * 
   * BUG: Doesn't handle empty history!
   * Practice: Add error handling
   */
  getLastResult() {
    // TODO: Check if history is empty
    return this.history[this.history.length - 1].result;
  }
}

// Practice: Debug this code
// 1. Set breakpoints in subtract() and divide()
// 2. Run with F5
// 3. Step through with F10/F11
// 4. Inspect variables
// 5. Fix the bugs
// 6. Test your fixes

module.exports = Calculator;

// Made with Bob
