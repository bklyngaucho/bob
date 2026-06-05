/**
 * Utility Functions
 * Practice: Use multi-cursor editing to modify these functions
 * Practice: Use Cmd+/ to toggle comments
 */

/**
 * Format a name to proper case
 * @param {string} name - The name to format
 * @returns {string} Formatted name
 * 
 * Practice: Use F12 to see where this is used
 */
function formatName(name) {
  // TODO: Add validation for empty names
  // Practice: Use search to find all TODO comments
  
  return name
    .trim()
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Calculate age from birth year
 * @param {number} birthYear - Year of birth
 * @returns {number} Current age
 * 
 * Practice: Set breakpoint and inspect variables
 */
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  
  // Practice: Use Cmd+D to select multiple occurrences
  console.log(`Calculating age for birth year: ${birthYear}`);
  console.log(`Current year: ${currentYear}`);
  console.log(`Calculated age: ${age}`);
  
  return age;
}

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 * 
 * Practice: Use regex search to find email patterns
 */
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);
  
  console.log(`Validating email: ${email} - ${isValid ? 'Valid' : 'Invalid'}`);
  
  return isValid;
}

/**
 * Generate a random ID
 * @returns {string} Random ID
 * 
 * Practice: Use this in multi-cursor editing exercises
 */
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Capitalize first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Check if value is empty
 * @param {*} value - Value to check
 * @returns {boolean} True if empty
 */
function isEmpty(value) {
  return value === null || value === undefined || value === '';
}

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency
 * 
 * Practice: Use Shift+Option+F to format this file
 */
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

/**
 * Truncate string to length
 * @param {string} str - String to truncate
 * @param {number} length - Max length
 * @returns {string} Truncated string
 */
function truncate(str, length = 50) {
  if (str.length <= length) return str;
  return str.substring(0, length) + '...';
}

// Practice: Use Cmd+Shift+L to select all console.log statements
// Practice: Comment them all at once with Cmd+/

module.exports = {
  formatName,
  calculateAge,
  validateEmail,
  generateId,
  capitalize,
  isEmpty,
  formatCurrency,
  truncate
};

// Made with Bob
