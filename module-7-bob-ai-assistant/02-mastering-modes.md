# Module 7.2: Mastering Bob's Modes

## Understanding Mode Selection

Choosing the right mode is crucial for efficient work with Bob. Each mode is optimized for specific tasks and has different capabilities.

## 📝 Ask Mode - Deep Dive

### When to Use Ask Mode

**Perfect for:**
- Understanding existing code
- Getting explanations
- Exploring options
- Learning concepts
- Code reviews
- Documentation questions

**Not suitable for:**
- Making code changes
- Creating new files
- Running commands

### Ask Mode Capabilities

Ask mode can:
- ✅ Read and analyze files
- ✅ Search codebase
- ✅ Explain concepts
- ✅ Provide recommendations
- ✅ Compare approaches
- ❌ Cannot modify files
- ❌ Cannot run commands

### Effective Ask Mode Requests

**Good requests:**
```
"Explain how this authentication system handles JWT tokens"
"What are the security implications of this code?"
"Compare the performance of these two approaches"
"Review this function for potential bugs"
"What design patterns are used in this codebase?"
```

**Example Workflow:**
```
1. "Explain the architecture of this application"
2. "What are the main components and how do they interact?"
3. "What would be the best way to add caching?"
4. Switch to Code mode to implement
```

### Ask Mode Best Practices

**✅ Do:**
- Ask for explanations before making changes
- Request multiple options to compare
- Use for code reviews
- Ask follow-up questions
- Request documentation

**❌ Don't:**
- Try to make code changes in Ask mode
- Use when you need to create files
- Expect command execution

## 💻 Code Mode - Deep Dive

### When to Use Code Mode

**Perfect for:**
- Implementing features
- Fixing bugs
- Refactoring code
- Creating new files
- Modifying existing code
- Writing tests

**Not suitable for:**
- Just asking questions (use Ask mode)
- Complex multi-project work (use Orchestrator)

### Code Mode Capabilities

Code mode can:
- ✅ Read files
- ✅ Write/modify files
- ✅ Create new files
- ✅ Search codebase
- ✅ Execute commands
- ✅ Use Git
- ❌ Cannot use browser tools
- ❌ Cannot use MCP servers

### Effective Code Mode Requests

**Feature Implementation:**
```
"Add user authentication with JWT tokens to the API"
"Create a React component for displaying user profiles"
"Implement pagination for the blog posts list"
```

**Bug Fixes:**
```
"Fix the bug where users can't log in with special characters in password"
"Debug why the API returns 500 errors on POST requests"
"Find and fix the memory leak in the data processing function"
```

**Refactoring:**
```
"Refactor this class to use dependency injection"
"Convert these callback functions to async/await"
"Extract this logic into reusable utility functions"
```

### Code Mode Workflow

**Typical flow:**
```
1. Bob reads relevant files
2. Analyzes the codebase
3. Plans the changes
4. Shows you what it will do
5. Waits for approval
6. Makes the changes
7. Reports results
8. Asks if you want to continue
```

### Code Mode Best Practices

**✅ Do:**
- Be specific about requirements
- Provide context about the codebase
- Review changes before accepting
- Test the changes
- Iterate if needed

**❌ Don't:**
- Make vague requests
- Accept changes without reviewing
- Skip testing
- Forget to commit changes

## 🛠️ Advanced Mode - Deep Dive

### When to Use Advanced Mode

**Perfect for:**
- Web application testing
- Browser automation
- MCP server integration
- Complex tool workflows
- External API integration

**Includes all Code mode capabilities PLUS:**
- ✅ Browser automation
- ✅ MCP server access
- ✅ Advanced integrations

### Advanced Mode Capabilities

**Browser Actions:**
```
"Test the login flow in the browser"
"Take screenshots of the responsive design"
"Verify the form validation works correctly"
```

**MCP Integration:**
```
"Use the database MCP to query user data"
"Integrate with the Slack MCP to send notifications"
"Access the file system MCP to process documents"
```

### Advanced Mode Best Practices

**✅ Do:**
- Use for end-to-end testing
- Leverage browser for visual verification
- Use MCP for external integrations
- Combine multiple tools

**❌ Don't:**
- Use for simple code changes (use Code mode)
- Forget to close browser sessions
- Overuse when Code mode is sufficient

## 📝 Plan Mode - Deep Dive

### When to Use Plan Mode

**Perfect for:**
- System architecture design
- Technical specifications
- Breaking down complex problems
- Database schema design
- API design
- Project planning

**Not suitable for:**
- Implementing code (use Code mode)
- Quick questions (use Ask mode)

### Plan Mode Capabilities

Plan mode can:
- ✅ Create detailed plans
- ✅ Design architectures
- ✅ Write specifications
- ✅ Break down problems
- ✅ Create diagrams (text-based)
- ❌ Cannot modify code
- ❌ Cannot execute commands

### Effective Plan Mode Requests

**Architecture Design:**
```
"Design a microservices architecture for an e-commerce platform"
"Plan the database schema for a social media application"
"Create a technical specification for a real-time chat system"
```

**Problem Breakdown:**
```
"Break down the task of migrating from MongoDB to PostgreSQL"
"Plan the steps to implement OAuth2 authentication"
"Design the API endpoints for a blog platform"
```

### Plan Mode Workflow

```
1. Understand requirements
2. Research best practices
3. Design architecture
4. Create detailed plan
5. Document decisions
6. Provide implementation steps
7. Switch to Code mode to implement
```

### Plan Mode Best Practices

**✅ Do:**
- Start complex projects in Plan mode
- Document architectural decisions
- Consider scalability and maintainability
- Think through edge cases
- Plan before coding

**❌ Don't:**
- Skip planning for complex projects
- Try to implement in Plan mode
- Ignore the plan when coding

## 🔀 Orchestrator Mode - Deep Dive

### When to Use Orchestrator Mode

**Perfect for:**
- Large multi-file projects
- Full-stack applications
- Complex workflows
- Multi-domain tasks
- Coordinating different specialties

**Not suitable for:**
- Simple single-file changes
- Quick bug fixes
- Questions only

### Orchestrator Mode Capabilities

Orchestrator can:
- ✅ Break work into subtasks
- ✅ Coordinate multiple modes
- ✅ Manage complex workflows
- ✅ Handle full-stack projects
- ✅ Switch between specialties
- ✅ All Code mode capabilities

### Effective Orchestrator Requests

**Full-Stack Projects:**
```
"Build a todo application with React frontend, Node.js backend, and MongoDB"
"Create a blog platform with authentication, posts, comments, and admin panel"
"Develop a real-time chat application with WebSockets"
```

**Complex Migrations:**
```
"Migrate this monolith to microservices architecture"
"Convert this JavaScript project to TypeScript"
"Refactor this application to use Redux for state management"
```

### Orchestrator Workflow

```
1. Analyze overall project
2. Break into subtasks
3. Plan execution order
4. Execute each subtask
5. Coordinate between tasks
6. Verify integration
7. Test end-to-end
8. Report completion
```

### Orchestrator Best Practices

**✅ Do:**
- Use for projects spanning multiple domains
- Let Bob break down the work
- Review each subtask
- Test integration points
- Commit frequently

**❌ Don't:**
- Use for simple tasks
- Skip testing between subtasks
- Ignore Bob's task breakdown

## Mode Switching

### When to Switch Modes

**Ask → Code:**
```
Ask: "What's the best way to implement caching?"
Code: "Implement Redis caching based on the approach we discussed"
```

**Plan → Code:**
```
Plan: "Design the database schema for a blog"
Code: "Implement the database models based on the schema"
```

**Code → Ask:**
```
Code: "Add authentication to the API"
Ask: "Explain how the authentication flow works"
```

### How to Switch Modes

Bob can suggest mode switches:
```
"This task would be better suited for Code mode. 
Would you like me to switch?"
```

Or you can request:
```
"Switch to Plan mode and design the architecture"
```

## Mode Comparison Matrix

| Feature | Ask | Code | Advanced | Plan | Orchestrator |
|---------|-----|------|----------|------|--------------|
| Read files | ✅ | ✅ | ✅ | ✅ | ✅ |
| Modify files | ❌ | ✅ | ✅ | ❌ | ✅ |
| Execute commands | ❌ | ✅ | ✅ | ❌ | ✅ |
| Browser tools | ❌ | ❌ | ✅ | ❌ | ❌ |
| MCP servers | ❌ | ❌ | ✅ | ❌ | ❌ |
| Multi-task | ❌ | ❌ | ❌ | ❌ | ✅ |
| Best for | Questions | Coding | Testing | Planning | Projects |

## Practice Exercises

### Exercise 7.2.1: Mode Selection

For each scenario, choose the best mode:

1. "I need to understand how this authentication works"
   - **Answer:** Ask mode

2. "Add a new API endpoint for user registration"
   - **Answer:** Code mode

3. "Test the login form in the browser"
   - **Answer:** Advanced mode

4. "Design the architecture for a microservices system"
   - **Answer:** Plan mode

5. "Build a complete e-commerce platform"
   - **Answer:** Orchestrator mode

### Exercise 7.2.2: Mode Workflow

Practice this workflow:

1. **Ask mode:** "Explain the current authentication system"
2. **Plan mode:** "Design improvements for the authentication"
3. **Code mode:** "Implement the improved authentication"
4. **Advanced mode:** "Test the authentication in the browser"
5. **Ask mode:** "Explain the changes made and their benefits"

## Key Takeaways

- Each mode is optimized for specific tasks
- Ask mode for understanding, Code mode for implementation
- Advanced mode adds browser and MCP capabilities
- Plan mode for architecture and design
- Orchestrator mode for complex multi-task projects
- Switch modes as needed for optimal workflow
- Always choose the simplest mode that meets your needs

## Next Steps

Continue to [Module 7.3: Agentic Workflows](./03-agentic-workflows.md) to learn advanced collaboration patterns with Bob.

---

**Time to Complete**: ~20 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: Module 7.1