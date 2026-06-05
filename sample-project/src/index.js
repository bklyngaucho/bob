/**
 * Main Application Entry Point
 * Practice: Use Cmd+Shift+O to see all functions
 * Practice: Use F12 to jump to function definitions
 */

const { formatName, calculateAge, validateEmail } = require('./utils');
const User = require('./user');
const Calculator = require('./calculator');

/**
 * Initialize the application
 */
function main() {
  console.log('=== VS Code Training Sample Application ===\n');
  
  // Demo user management
  demoUserManagement();
  
  // Demo calculator
  demoCalculator();
  
  // Demo utilities
  demoUtilities();
}

/**
 * Demonstrate user management features
 * Practice: Set breakpoint here and debug
 */
function demoUserManagement() {
  console.log('--- User Management Demo ---');
  
  const user1 = new User('john', 'doe', 'john.doe@example.com', 1990);
  const user2 = new User('jane', 'smith', 'jane.smith@example.com', 1985);
  const user3 = new User('bob', 'johnson', 'bob@example.com', 1995);
  
  console.log(`User 1: ${user1.getFullName()}, Age: ${user1.getAge()}`);
  console.log(`User 2: ${user2.getFullName()}, Age: ${user2.getAge()}`);
  console.log(`User 3: ${user3.getFullName()}, Age: ${user3.getAge()}`);
  
  // Practice: Use multi-cursor to add more users
  // Practice: Use Cmd+D to select next occurrence
  
  console.log('');
}

/**
 * Demonstrate calculator features
 * Practice: Debug this function to find bugs
 */
function demoCalculator() {
  console.log('--- Calculator Demo ---');
  
  const calc = new Calculator();
  
  console.log(`10 + 5 = ${calc.add(10, 5)}`);
  console.log(`10 - 5 = ${calc.subtract(10, 5)}`);
  console.log(`10 * 5 = ${calc.multiply(10, 5)}`);
  console.log(`10 / 5 = ${calc.divide(10, 5)}`);
  
  // Practice: Debug division by zero
  // console.log(`10 / 0 = ${calc.divide(10, 0)}`);
  
  console.log('');
}

/**
 * Demonstrate utility functions
 * Practice: Use search and replace to modify these
 */
function demoUtilities() {
  console.log('--- Utilities Demo ---');
  
  // Format names
  const name1 = formatName('  john doe  ');
  const name2 = formatName('JANE SMITH');
  const name3 = formatName('bob johnson');
  
  console.log(`Formatted: ${name1}`);
  console.log(`Formatted: ${name2}`);
  console.log(`Formatted: ${name3}`);
  
  // Calculate ages
  const age1 = calculateAge(1990);
  const age2 = calculateAge(1985);
  const age3 = calculateAge(1995);
  
  console.log(`Age from 1990: ${age1}`);
  console.log(`Age from 1985: ${age2}`);
  console.log(`Age from 1995: ${age3}`);
  
  // Validate emails
  const email1 = validateEmail('john@example.com');
  const email2 = validateEmail('invalid-email');
  const email3 = validateEmail('jane.smith@company.co.uk');
  
  console.log(`Email valid: ${email1}`);
  console.log(`Email valid: ${email2}`);
  console.log(`Email valid: ${email3}`);
  
  console.log('');
}

// Run the application
if (require.main === module) {
  main();
}

module.exports = { main };

// Made with Bob
