# Sample Project for VS Code Training

This sample project provides hands-on code to practice VS Code features learned in the training modules.

## Project Structure

```
sample-project/
├── src/
│   ├── index.js          - Main application file
│   ├── utils.js          - Utility functions
│   ├── user.js           - User class
│   └── calculator.js     - Calculator with bugs for debugging
├── tests/
│   └── calculator.test.js - Test file
├── styles/
│   └── main.css          - CSS for styling practice
├── index.html            - HTML file
├── package.json          - Node.js project file
└── .vscode/
    ├── settings.json     - Workspace settings
    ├── launch.json       - Debug configuration
    └── tasks.json        - Task automation

```

## How to Use This Project

### 1. Setup
```bash
cd sample-project
npm install
```

### 2. Practice Modules

**Module 1-2: Navigation & Editing**
- Use Quick Open (`Cmd+P`) to navigate files
- Practice multi-cursor editing in `utils.js`
- Use search and replace across files

**Module 3: Workspace**
- Open in VS Code as workspace
- Try split editor layouts
- Use integrated terminal

**Module 4: Extensions**
- Install Prettier and format code
- Install ESLint and fix issues
- Try Live Server with `index.html`

**Module 5: Advanced**
- Debug `calculator.js` (has intentional bugs)
- Use Git to commit changes
- Create custom snippets
- Run tasks with `npm` commands

**Module 6: Productivity**
- Practice keyboard shortcuts
- Use multi-cursor for refactoring
- Optimize your workflow

## Practice Exercises

### Exercise 1: File Navigation
1. Open `src/index.js`
2. Use `Cmd+Shift+O` to see symbols
3. Jump to `main()` function
4. Use `F12` to go to `formatName` definition

### Exercise 2: Multi-Cursor Editing
1. Open `src/utils.js`
2. Select all `console.log` statements
3. Comment them all at once
4. Practice column selection

### Exercise 3: Debugging
1. Open `src/calculator.js`
2. Set breakpoints in `divide()` function
3. Press `F5` to start debugging
4. Find and fix the bugs

### Exercise 4: Git Workflow
1. Make changes to any file
2. Use Source Control view (`Cmd+Shift+G`)
3. Stage, commit, and push changes
4. Create a new branch

### Exercise 5: Refactoring
1. Open `src/user.js`
2. Rename `getName()` to `getFullName()` using `F2`
3. See all references update automatically

## Tips

- **Save often**: Enable auto-save in settings
- **Format code**: Use `Shift+Option+F` regularly
- **Use terminal**: Run commands without leaving VS Code
- **Explore**: Try different features and shortcuts

## Common Commands

```bash
# Run the application
npm start

# Run tests
npm test

# Format code (if Prettier installed)
npm run format

# Lint code (if ESLint installed)
npm run lint
```

## Troubleshooting

**Issue**: Code not formatting
- **Solution**: Install Prettier extension and enable format on save

**Issue**: Debugger not working
- **Solution**: Check `.vscode/launch.json` configuration

**Issue**: Terminal not opening
- **Solution**: Press `Cmd+\`` or check View → Terminal

---

**Happy Learning!** Practice these exercises to master VS Code.