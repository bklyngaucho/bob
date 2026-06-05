# Module 7.3: Agentic Workflows with Bob

## Understanding Agentic AI

Bob is an **agentic AI assistant** - it can autonomously use tools, make decisions, and work through complex tasks step-by-step without constant guidance.

### What Makes Bob Agentic?

**Traditional AI:**
- Answers questions
- Provides suggestions
- Requires explicit instructions

**Agentic AI (Bob):**
- Takes action autonomously
- Uses tools to accomplish goals
- Makes decisions based on context
- Works iteratively toward solutions
- Learns from feedback

## Bob's Tool Arsenal

### File Operations

**Reading Files:**
```
Bob can:
- Read single or multiple files
- Read specific line ranges
- Extract content from PDFs and DOCX
- Analyze file structure
```

**Writing Files:**
```
Bob can:
- Create new files
- Modify existing files with surgical precision
- Insert content at specific lines
- Apply targeted diffs
```

**Example Workflow:**
```
You: "Add error handling to the API"

Bob's autonomous process:
1. Reads API files to understand structure
2. Identifies functions needing error handling
3. Plans the changes
4. Applies targeted modifications
5. Verifies changes are complete
6. Reports results
```

### Code Analysis Tools

**Search Capabilities:**
```
Bob can:
- Search files with regex patterns
- Find code definitions
- List directory contents
- Analyze code structure
```

**Example:**
```
You: "Find all TODO comments in the project"

Bob autonomously:
1. Uses search_files with regex pattern
2. Scans entire codebase
3. Compiles list of TODOs
4. Organizes by file and priority
5. Presents actionable summary
```

### Command Execution

**Terminal Operations:**
```
Bob can:
- Run CLI commands
- Install dependencies
- Run tests
- Start development servers
- Execute build scripts
```

**Example:**
```
You: "Set up a new React project"

Bob autonomously:
1. Runs npx create-react-app
2. Installs additional dependencies
3. Configures project structure
4. Starts development server
5. Verifies everything works
```

### Git Integration

**Version Control:**
```
Bob can:
- Check git status
- Create commits
- Generate PR descriptions
- Compare branches
- Analyze diffs
```

**Example:**
```
You: "Create a PR for the authentication feature"

Bob autonomously:
1. Analyzes git diff
2. Generates descriptive PR title
3. Creates detailed PR description
4. Lists all changes
5. Submits pull request
```

### Browser Automation (Advanced Mode)

**Web Testing:**
```
Bob can:
- Launch browsers
- Navigate pages
- Click elements
- Fill forms
- Take screenshots
- Capture console logs
```

**Example:**
```
You: "Test the login flow"

Bob autonomously:
1. Launches browser
2. Navigates to login page
3. Fills in credentials
4. Clicks submit button
5. Verifies successful login
6. Takes screenshots
7. Reports results
```

## Agentic Workflow Patterns

### Pattern 1: Iterative Problem Solving

**How it works:**
```
1. Bob analyzes the problem
2. Breaks it into steps
3. Executes each step
4. Verifies results
5. Adjusts approach if needed
6. Continues until complete
```

**Example:**
```
You: "Fix the failing tests"

Bob's process:
1. Runs tests to see failures
2. Reads test files
3. Reads implementation files
4. Identifies root causes
5. Fixes issues one by one
6. Re-runs tests after each fix
7. Continues until all pass
```

### Pattern 2: Context Gathering

**How it works:**
```
1. Bob reads relevant files
2. Analyzes code structure
3. Understands dependencies
4. Gathers necessary context
5. Makes informed decisions
```

**Example:**
```
You: "Add a new feature to the user service"

Bob's process:
1. Reads existing user service code
2. Checks related files (models, controllers)
3. Reviews API routes
4. Understands current patterns
5. Implements feature consistently
```

### Pattern 3: Autonomous Testing

**How it works:**
```
1. Bob makes changes
2. Runs relevant tests
3. Analyzes failures
4. Fixes issues
5. Repeats until tests pass
```

**Example:**
```
You: "Refactor the authentication module"

Bob's process:
1. Refactors code
2. Runs authentication tests
3. Sees 2 tests fail
4. Analyzes failure messages
5. Fixes the issues
6. Re-runs tests
7. Confirms all pass
```

### Pattern 4: Multi-File Coordination

**How it works:**
```
1. Bob identifies all affected files
2. Plans changes across files
3. Maintains consistency
4. Updates related code
5. Verifies integration
```

**Example:**
```
You: "Rename User model to Account"

Bob's process:
1. Searches for all User references
2. Identifies affected files
3. Plans rename strategy
4. Updates model definition
5. Updates imports
6. Updates references
7. Updates tests
8. Verifies no broken references
```

## Working with Bob's Autonomy

### Trust the Process

**Bob will:**
- ✅ Read files before modifying
- ✅ Search for context
- ✅ Plan before acting
- ✅ Verify changes
- ✅ Report progress
- ✅ Ask when uncertain

**You should:**
- ✅ Provide clear goals
- ✅ Review proposed changes
- ✅ Give feedback
- ✅ Trust Bob's decisions
- ✅ Intervene when needed

### Effective Collaboration

**Good requests:**
```
"Add user authentication with JWT"
- Clear goal
- Bob figures out the details

"Fix the performance issue in the data processing"
- Specific problem
- Bob investigates and solves

"Refactor this code to be more maintainable"
- Clear objective
- Bob decides how
```

**Less effective:**
```
"Change line 42 to use const instead of let"
- Too specific
- Doesn't leverage Bob's autonomy

"Do something with the API"
- Too vague
- Bob needs clearer goals
```

### Providing Feedback

**During the process:**
```
Bob: "I'm going to add error handling to all API routes"
You: "Actually, just focus on the authentication routes first"
Bob: "Understood, focusing on authentication routes only"
```

**After completion:**
```
Bob: "I've added the feature. Would you like me to continue?"
You: "The logic looks good, but can you add more comments?"
Bob: "I'll add detailed comments explaining the logic"
```

## Advanced Agentic Patterns

### Self-Correction

Bob can detect and fix its own mistakes:

```
Bob's process:
1. Makes changes
2. Runs tests
3. Sees failures
4. Analyzes what went wrong
5. Corrects the issue
6. Verifies fix works
```

### Adaptive Planning

Bob adjusts plans based on discoveries:

```
Initial plan:
1. Add feature X
2. Update tests

Discovered during work:
- Feature X requires updating database schema
- Need to add migration

Adjusted plan:
1. Create database migration
2. Add feature X
3. Update tests
4. Test migration
```

### Proactive Problem Detection

Bob identifies issues before they become problems:

```
While adding feature:
- Notices potential security issue
- Suggests improvement
- Implements secure approach
- Documents decision
```

## Best Practices for Agentic Workflows

### 1. Set Clear Goals

**✅ Good:**
```
"Build a REST API for managing blog posts with CRUD operations"
"Add authentication to the application using JWT"
"Optimize the database queries in the user service"
```

**❌ Avoid:**
```
"Make the code better"
"Fix stuff"
"Do something with the database"
```

### 2. Let Bob Explore

**✅ Do:**
```
- Let Bob read files to understand context
- Allow Bob to search for patterns
- Trust Bob to find the right approach
```

**❌ Don't:**
```
- Micromanage every step
- Provide unnecessary details
- Override Bob's reasonable decisions
```

### 3. Review and Iterate

**✅ Do:**
```
- Review Bob's proposed changes
- Provide constructive feedback
- Iterate to improve results
- Test the changes
```

**❌ Don't:**
```
- Accept changes blindly
- Skip testing
- Ignore Bob's explanations
```

### 4. Leverage Bob's Memory

Bob remembers context within a conversation:

```
You: "Add a user registration endpoint"
Bob: [Implements endpoint]

You: "Now add login"
Bob: [Uses same patterns from registration]

You: "Add password reset"
Bob: [Maintains consistency with previous endpoints]
```

### 5. Use Appropriate Modes

Match the mode to the task:

```
Complex project → Orchestrator mode
Code changes → Code mode
Understanding → Ask mode
Planning → Plan mode
Testing → Advanced mode
```

## Real-World Agentic Scenarios

### Scenario 1: Bug Investigation

```
You: "Users report the app crashes when uploading large files"

Bob's autonomous investigation:
1. Searches for file upload code
2. Reads upload handler
3. Checks file size limits
4. Reviews error handling
5. Identifies missing size validation
6. Implements fix with proper limits
7. Adds error messages
8. Tests with large files
9. Verifies fix works
```

### Scenario 2: Feature Implementation

```
You: "Add dark mode to the application"

Bob's autonomous implementation:
1. Analyzes current styling approach
2. Identifies all color definitions
3. Creates theme system
4. Implements theme toggle
5. Updates all components
6. Adds persistence
7. Tests theme switching
8. Verifies all pages work
```

### Scenario 3: Code Refactoring

```
You: "Refactor the payment processing to be more modular"

Bob's autonomous refactoring:
1. Reads payment code
2. Identifies responsibilities
3. Plans module structure
4. Extracts payment gateway logic
5. Creates validation module
6. Implements error handling
7. Updates tests
8. Verifies functionality
```

## Monitoring Bob's Progress

### Progress Indicators

Bob provides updates:
```
"Reading authentication files..."
"Found 5 files that need updates"
"Applying changes to user.service.ts..."
"Running tests to verify changes..."
"All tests passing ✓"
```

### Decision Transparency

Bob explains decisions:
```
"I'm using bcrypt for password hashing because:
1. It's industry standard
2. Already in dependencies
3. Provides good security"
```

### Error Handling

Bob reports issues:
```
"I encountered an error running tests:
- Module 'express' not found
- Installing express...
- Retrying tests..."
```

## Practice Exercises

### Exercise 7.3.1: Autonomous Bug Fix

Let Bob autonomously fix a bug:

```
1. Create a file with a bug
2. Tell Bob: "Fix the bug in calculator.js"
3. Observe Bob's process:
   - Reading the file
   - Identifying the bug
   - Fixing the issue
   - Verifying the fix
```

### Exercise 7.3.2: Feature Implementation

Let Bob implement a feature:

```
1. Tell Bob: "Add input validation to the form"
2. Watch Bob:
   - Analyze the form
   - Determine validation rules
   - Implement validation
   - Add error messages
   - Test the validation
```

### Exercise 7.3.3: Multi-File Refactoring

Let Bob refactor across files:

```
1. Tell Bob: "Extract the API calls into a separate service"
2. Observe Bob:
   - Find all API calls
   - Create service file
   - Move API logic
   - Update imports
   - Verify functionality
```

## Key Takeaways

- Bob is agentic - it takes autonomous action
- Bob uses tools to accomplish goals
- Bob works iteratively and adapts
- Trust Bob's process while staying engaged
- Provide clear goals, not detailed instructions
- Review and provide feedback
- Let Bob explore and make decisions
- Use appropriate modes for tasks

## Next Steps

Continue to [Module 7.4: Bob Sample Projects](./04-bob-sample-projects.md) for hands-on practice with real projects.

---

**Time to Complete**: ~25 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: Modules 7.1, 7.2