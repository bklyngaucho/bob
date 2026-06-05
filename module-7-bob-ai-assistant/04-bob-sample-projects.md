# Module 7.4: Bob Sample Projects

## Introduction

This lesson provides hands-on projects to practice working with Bob across different modes and scenarios. Each project demonstrates Bob's agentic capabilities and best practices.

## Project 1: Code Understanding with Ask Mode

### Objective
Learn to use Ask mode to understand and analyze existing code.

### Setup
```bash
# Navigate to the sample project
cd vscode-training/sample-project
```

### Tasks

#### Task 1.1: Understand the Architecture
```
Ask Bob:
"Explain the overall architecture of this sample project"

Expected Bob behavior:
- Reads multiple files
- Identifies main components
- Explains relationships
- Describes patterns used
```

#### Task 1.2: Code Review
```
Ask Bob:
"Review the calculator.js file for potential issues"

Expected Bob behavior:
- Reads calculator.js
- Identifies bugs (intentional ones!)
- Suggests improvements
- Explains security concerns
```

#### Task 1.3: Compare Approaches
```
Ask Bob:
"What are the pros and cons of the current error handling approach?"

Expected Bob behavior:
- Analyzes error handling
- Lists advantages
- Identifies weaknesses
- Suggests alternatives
```

### Learning Outcomes
- How to ask effective questions
- Understanding Bob's analysis process
- Getting comprehensive explanations
- Preparing for code changes

---

## Project 2: Bug Fixing with Code Mode

### Objective
Use Code mode to fix bugs in the sample project.

### Setup
The sample project has intentional bugs in `calculator.js`.

### Tasks

#### Task 2.1: Fix Division by Zero
```
Tell Bob:
"Fix the division by zero bug in calculator.js"

Expected Bob behavior:
1. Reads calculator.js
2. Identifies the divide function
3. Adds zero check
4. Implements error handling
5. Shows the changes
6. Waits for approval
```

#### Task 2.2: Fix Failing Tests
```
Tell Bob:
"Fix the failing tests in calculator.test.js"

Expected Bob behavior:
1. Runs tests to see failures
2. Reads test file
3. Reads implementation
4. Identifies mismatches
5. Fixes implementation
6. Re-runs tests
7. Confirms all pass
```

#### Task 2.3: Add Input Validation
```
Tell Bob:
"Add input validation to all calculator functions"

Expected Bob behavior:
1. Analyzes all functions
2. Identifies validation needs
3. Implements type checking
4. Adds error messages
5. Updates tests
6. Verifies functionality
```

### Learning Outcomes
- Working with Code mode
- Iterative bug fixing
- Test-driven development
- Code validation patterns

---

## Project 3: Feature Implementation with Code Mode

### Objective
Build new features using Bob's autonomous capabilities.

### Tasks

#### Task 3.1: Add New Calculator Operations
```
Tell Bob:
"Add power and square root operations to the calculator"

Expected Bob behavior:
1. Reads existing calculator
2. Understands current pattern
3. Adds power function
4. Adds sqrt function
5. Adds input validation
6. Creates tests
7. Runs tests
8. Documents functions
```

#### Task 3.2: Create a User Management System
```
Tell Bob:
"Create a simple user management system with CRUD operations"

Expected Bob behavior:
1. Creates user.js model
2. Implements create user
3. Implements read user
4. Implements update user
5. Implements delete user
6. Adds validation
7. Creates tests
8. Documents API
```

#### Task 3.3: Add Logging System
```
Tell Bob:
"Add a logging system to track all calculator operations"

Expected Bob behavior:
1. Creates logger.js
2. Implements log levels
3. Adds file logging
4. Integrates with calculator
5. Adds log rotation
6. Creates tests
7. Documents usage
```

### Learning Outcomes
- Feature implementation workflow
- Code organization
- Testing practices
- Documentation

---

## Project 4: Web Testing with Advanced Mode

### Objective
Use Advanced mode to test web applications with browser automation.

### Setup
```bash
# Start the sample project server
cd vscode-training/sample-project
# Open index.html in a local server
```

### Tasks

#### Task 4.1: Test Form Validation
```
Tell Bob:
"Test the form validation in index.html"

Expected Bob behavior:
1. Launches browser
2. Navigates to page
3. Tries invalid inputs
4. Verifies error messages
5. Tries valid inputs
6. Verifies success
7. Takes screenshots
8. Reports results
```

#### Task 4.2: Test Responsive Design
```
Tell Bob:
"Test the responsive design at different screen sizes"

Expected Bob behavior:
1. Launches browser
2. Tests desktop view
3. Resizes to tablet
4. Tests tablet view
5. Resizes to mobile
6. Tests mobile view
7. Takes screenshots
8. Reports issues
```

#### Task 4.3: Test User Flow
```
Tell Bob:
"Test the complete user registration and login flow"

Expected Bob behavior:
1. Launches browser
2. Navigates to registration
3. Fills form
4. Submits registration
5. Verifies success
6. Tests login
7. Verifies dashboard access
8. Reports results
```

### Learning Outcomes
- Browser automation
- Visual testing
- User flow testing
- Screenshot analysis

---

## Project 5: Architecture Design with Plan Mode

### Objective
Use Plan mode to design system architecture before implementation.

### Tasks

#### Task 5.1: Design a Blog Platform
```
Tell Bob:
"Design the architecture for a blog platform with posts, comments, and users"

Expected Bob behavior:
1. Analyzes requirements
2. Designs database schema
3. Plans API endpoints
4. Designs component structure
5. Considers scalability
6. Documents decisions
7. Creates implementation plan
```

#### Task 5.2: Design Microservices Architecture
```
Tell Bob:
"Design a microservices architecture for an e-commerce platform"

Expected Bob behavior:
1. Identifies services needed
2. Designs service boundaries
3. Plans communication patterns
4. Designs data storage
5. Plans deployment strategy
6. Documents architecture
7. Creates migration plan
```

#### Task 5.3: Design API Structure
```
Tell Bob:
"Design a RESTful API for a task management system"

Expected Bob behavior:
1. Identifies resources
2. Designs endpoints
3. Plans request/response formats
4. Designs authentication
5. Plans error handling
6. Documents API spec
7. Creates implementation guide
```

### Learning Outcomes
- System design thinking
- Architecture patterns
- Planning before coding
- Documentation practices

---

## Project 6: Full-Stack App with Orchestrator Mode

### Objective
Build a complete application using Orchestrator mode to coordinate multiple tasks.

### Tasks

#### Task 6.1: Build a Todo Application
```
Tell Bob:
"Build a todo application with React frontend and Node.js backend"

Expected Bob behavior:
1. Plans overall architecture
2. Creates backend structure
3. Implements API endpoints
4. Creates database models
5. Builds React frontend
6. Implements components
7. Connects frontend to backend
8. Adds styling
9. Creates tests
10. Documents setup
```

#### Task 6.2: Build a Chat Application
```
Tell Bob:
"Build a real-time chat application with WebSockets"

Expected Bob behavior:
1. Plans architecture
2. Sets up WebSocket server
3. Creates message handling
4. Builds chat UI
5. Implements user authentication
6. Adds message persistence
7. Implements typing indicators
8. Adds online status
9. Creates tests
10. Documents deployment
```

#### Task 6.3: Build a Blog Platform
```
Tell Bob:
"Build a blog platform with posts, comments, and admin panel"

Expected Bob behavior:
1. Plans database schema
2. Creates backend API
3. Implements authentication
4. Builds post management
5. Implements comments
6. Creates admin panel
7. Builds public frontend
8. Adds rich text editor
9. Implements search
10. Creates tests
```

### Learning Outcomes
- Full-stack development
- Project coordination
- Integration testing
- Deployment planning

---

## Project 7: Code Refactoring

### Objective
Practice refactoring existing code with Bob's assistance.

### Tasks

#### Task 7.1: Refactor to Modern JavaScript
```
Tell Bob:
"Refactor the sample project to use modern ES6+ features"

Expected Bob behavior:
1. Analyzes current code
2. Identifies old patterns
3. Plans refactoring
4. Converts to arrow functions
5. Uses destructuring
6. Implements async/await
7. Updates tests
8. Verifies functionality
```

#### Task 7.2: Extract Reusable Components
```
Tell Bob:
"Extract reusable utility functions from the codebase"

Expected Bob behavior:
1. Identifies repeated code
2. Plans utility structure
3. Creates utils directory
4. Extracts functions
5. Updates imports
6. Maintains functionality
7. Updates tests
8. Documents utilities
```

#### Task 7.3: Improve Error Handling
```
Tell Bob:
"Improve error handling throughout the application"

Expected Bob behavior:
1. Analyzes current handling
2. Identifies gaps
3. Plans error strategy
4. Implements try-catch blocks
5. Adds error messages
6. Creates error classes
7. Updates tests
8. Documents patterns
```

### Learning Outcomes
- Refactoring strategies
- Code quality improvement
- Maintaining functionality
- Testing during refactoring

---

## Project 8: Git Workflow Integration

### Objective
Practice using Bob with Git workflows.

### Tasks

#### Task 8.1: Create Feature Branch
```
Tell Bob:
"Create a new feature branch and implement user authentication"

Expected Bob behavior:
1. Creates feature branch
2. Implements authentication
3. Commits changes
4. Generates commit messages
5. Pushes branch
6. Creates PR description
```

#### Task 8.2: Review and Fix PR Feedback
```
Tell Bob:
"Address the code review comments in the PR"

Expected Bob behavior:
1. Reads PR comments
2. Understands feedback
3. Makes requested changes
4. Runs tests
5. Commits fixes
6. Updates PR
```

#### Task 8.3: Merge Conflict Resolution
```
Tell Bob:
"Help resolve the merge conflicts in the feature branch"

Expected Bob behavior:
1. Analyzes conflicts
2. Understands both changes
3. Suggests resolution
4. Applies resolution
5. Tests merged code
6. Commits resolution
```

### Learning Outcomes
- Git integration
- PR workflows
- Conflict resolution
- Commit best practices

---

## Project 9: Performance Optimization

### Objective
Use Bob to identify and fix performance issues.

### Tasks

#### Task 9.1: Analyze Performance
```
Tell Bob:
"Analyze the application for performance bottlenecks"

Expected Bob behavior:
1. Reviews code structure
2. Identifies slow operations
3. Checks algorithm complexity
4. Finds memory leaks
5. Suggests optimizations
6. Prioritizes improvements
```

#### Task 9.2: Optimize Database Queries
```
Tell Bob:
"Optimize the database queries in the user service"

Expected Bob behavior:
1. Analyzes current queries
2. Identifies N+1 problems
3. Adds proper indexes
4. Implements query optimization
5. Adds caching
6. Measures improvements
7. Updates documentation
```

#### Task 9.3: Implement Caching
```
Tell Bob:
"Add caching to improve API response times"

Expected Bob behavior:
1. Identifies cacheable data
2. Chooses caching strategy
3. Implements cache layer
4. Adds cache invalidation
5. Tests performance
6. Measures improvements
7. Documents caching
```

### Learning Outcomes
- Performance analysis
- Optimization techniques
- Caching strategies
- Measurement and testing

---

## Project 10: Documentation Generation

### Objective
Use Bob to create comprehensive documentation.

### Tasks

#### Task 10.1: Generate API Documentation
```
Tell Bob:
"Generate comprehensive API documentation for the backend"

Expected Bob behavior:
1. Analyzes all endpoints
2. Documents request formats
3. Documents responses
4. Adds example requests
5. Documents errors
6. Creates OpenAPI spec
7. Generates readable docs
```

#### Task 10.2: Create User Guide
```
Tell Bob:
"Create a user guide for the application"

Expected Bob behavior:
1. Analyzes features
2. Creates getting started
3. Documents each feature
4. Adds screenshots
5. Creates tutorials
6. Adds troubleshooting
7. Formats professionally
```

#### Task 10.3: Generate Code Comments
```
Tell Bob:
"Add comprehensive comments to the codebase"

Expected Bob behavior:
1. Analyzes code structure
2. Adds function documentation
3. Explains complex logic
4. Documents parameters
5. Adds usage examples
6. Maintains consistency
7. Follows standards
```

### Learning Outcomes
- Documentation practices
- API documentation
- User guides
- Code commenting

---

## Best Practices Summary

### Working with Bob

**✅ Do:**
- Start with clear objectives
- Let Bob explore and analyze
- Review Bob's proposals
- Provide constructive feedback
- Test the results
- Iterate to improve

**❌ Don't:**
- Micromanage every step
- Skip reviewing changes
- Accept without testing
- Provide vague requirements
- Ignore Bob's suggestions

### Mode Selection

- **Ask Mode**: Understanding, analysis, questions
- **Code Mode**: Implementation, bug fixes, refactoring
- **Advanced Mode**: Browser testing, MCP integration
- **Plan Mode**: Architecture, design, planning
- **Orchestrator Mode**: Complex multi-task projects

### Effective Communication

**Good requests:**
```
"Add user authentication with JWT tokens"
"Fix the performance issue in data processing"
"Design a microservices architecture"
"Test the login flow in the browser"
```

**Improve these:**
```
"Make it better" → "Refactor for better maintainability"
"Fix the bug" → "Fix the null pointer error in user.service.js"
"Add stuff" → "Add input validation to all forms"
```

## Next Steps

### Continue Learning
1. Practice with your own projects
2. Experiment with different modes
3. Try complex multi-step tasks
4. Explore advanced features
5. Share your learnings

### Additional Resources
- Bob documentation
- VS Code documentation
- Sample project repository
- Community forums
- Video tutorials

## Conclusion

You've now learned:
- ✅ How to work with Bob across all modes
- ✅ Agentic workflow patterns
- ✅ Effective communication strategies
- ✅ Real-world project scenarios
- ✅ Best practices and tips

**Keep practicing and exploring Bob's capabilities!**

---

**Time to Complete**: ~2-3 hours (all projects)  
**Difficulty**: Intermediate to Advanced  
**Prerequisites**: Modules 7.1, 7.2, 7.3

## Quick Reference

### Common Commands

```bash
# Ask mode
"Explain how this authentication works"
"What are the security implications?"
"Review this code for issues"

# Code mode
"Add error handling to the API"
"Fix the bug in calculator.js"
"Refactor this to use async/await"

# Advanced mode
"Test the login flow in the browser"
"Take screenshots of the responsive design"

# Plan mode
"Design the architecture for a blog platform"
"Plan the database schema"

# Orchestrator mode
"Build a todo app with React and Node.js"
"Create a complete e-commerce platform"
```

### Workflow Tips

1. **Start with Ask** - Understand before changing
2. **Plan complex tasks** - Use Plan mode for architecture
3. **Implement in Code** - Make the changes
4. **Test in Advanced** - Verify with browser
5. **Iterate** - Improve based on results

---

**Congratulations on completing Module 7!** 🎉

You're now equipped to work effectively with Bob as your AI pair programmer. Practice these skills on real projects and continue exploring Bob's capabilities.