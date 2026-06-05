/**
 * User Class
 * Practice: Use F2 to rename methods and see all references update
 * Practice: Use Cmd+Shift+O to navigate between methods
 */

const { formatName, calculateAge, validateEmail, generateId } = require('./utils');

class User {
  /**
   * Create a new user
   * @param {string} firstName - User's first name
   * @param {string} lastName - User's last name
   * @param {string} email - User's email
   * @param {number} birthYear - User's birth year
   */
  constructor(firstName, lastName, email, birthYear) {
    this.id = generateId();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthYear = birthYear;
    this.createdAt = new Date();
    
    // Practice: Set breakpoint here to inspect object creation
    console.log(`User created: ${this.getFullName()}`);
  }

  /**
   * Get user's full name
   * @returns {string} Full name
   * 
   * Practice: Use F2 to rename this method
   * Practice: See how all references update automatically
   */
  getFullName() {
    return formatName(`${this.firstName} ${this.lastName}`);
  }

  /**
   * Get user's age
   * @returns {number} Age in years
   */
  getAge() {
    return calculateAge(this.birthYear);
  }

  /**
   * Check if email is valid
   * @returns {boolean} True if valid
   */
  isEmailValid() {
    return validateEmail(this.email);
  }

  /**
   * Get user info as string
   * @returns {string} User information
   * 
   * Practice: Use Cmd+D to select multiple 'this.' occurrences
   */
  toString() {
    return `User: ${this.getFullName()}, Email: ${this.email}, Age: ${this.getAge()}`;
  }

  /**
   * Update user's email
   * @param {string} newEmail - New email address
   * @returns {boolean} True if updated successfully
   */
  updateEmail(newEmail) {
    if (!validateEmail(newEmail)) {
      console.error('Invalid email address');
      return false;
    }
    
    this.email = newEmail;
    console.log(`Email updated for ${this.getFullName()}`);
    return true;
  }

  /**
   * Get user as JSON object
   * @returns {object} User data
   */
  toJSON() {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      fullName: this.getFullName(),
      email: this.email,
      age: this.getAge(),
      createdAt: this.createdAt
    };
  }

  /**
   * Check if user is adult
   * @returns {boolean} True if 18 or older
   */
  isAdult() {
    return this.getAge() >= 18;
  }

  /**
   * Get user's initials
   * @returns {string} Initials
   * 
   * Practice: Use multi-cursor to add similar methods
   */
  getInitials() {
    return `${this.firstName.charAt(0)}${this.lastName.charAt(0)}`.toUpperCase();
  }
}

// Practice: Use Cmd+Shift+L to select all 'User' occurrences
// Practice: Try refactoring this class

module.exports = User;

// Made with Bob
