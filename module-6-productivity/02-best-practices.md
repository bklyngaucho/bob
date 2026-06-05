# Module 6.2: Best Practices

## Workspace Organization

### Project Structure

**✅ Do:**
- Open project root folder
- Use consistent folder structure
- Keep related files together
- Use meaningful names

**❌ Don't:**
- Open individual files
- Mix unrelated projects
- Use cryptic names
- Create deep nesting unnecessarily

### .vscode Folder

**What to include:**
```
.vscode/
├── settings.json       - Project settings
├── launch.json         - Debug configs
├── tasks.json          - Task definitions
├── extensions.json     - Recommended extensions
└── *.code-snippets     - Custom snippets
```

**Commit to Git:**
- ✅ settings.json (team settings)
- ✅ launch.json (shared configs)
- ✅ tasks.json (build tasks)
- ✅ extensions.json (recommendations)
- ❌ Personal preferences
- ❌ Local paths

## Settings Management

### User vs Workspace

**User Settings (Global):**
- Theme and appearance
- Font preferences
- Personal shortcuts
- Editor behavior

**Workspace Settings (Project):**
- Formatting rules
- Linting configuration
- Build settings
- Team standards

### Settings Best Practices

```json
{
  // Editor
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  
  // Files
  "files.autoSave": "afterDelay",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  
  // Exclude
  "files.exclude": {
    "**/.git": true,
    "**/node_modules": true,
    "**/dist": true
  }
}
```

## Extension Management

### Essential Extensions Only

**✅ Install:**
- Language support needed
- Productivity tools used daily
- Team-recommended extensions

**❌ Avoid:**
- Duplicate functionality
- Unused extensions
- Experimental extensions in production

### Extension Organization

**Enable/Disable by workspace:**
- Disable unused per project
- Enable only what's needed
- Reduce startup time

**Review regularly:**
- Monthly extension audit
- Remove unused
- Update all

## Code Quality

### Formatting

**Setup:**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

**Benefits:**
- Consistent code style
- No manual formatting
- Team alignment

### Linting

**Setup ESLint:**
```json
{
  "eslint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

**Benefits:**
- Catch errors early
- Enforce standards
- Auto-fix issues

## Git Workflow

### Commit Best Practices

**✅ Do:**
- Commit often
- Write clear messages
- Review changes before commit
- Use branches for features

**❌ Don't:**
- Commit broken code
- Use vague messages
- Commit sensitive data
- Work directly on main

### Commit Message Format

```
type: brief description

Detailed explanation if needed

Fixes #123
```

**Types:**
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructure
- test: Tests
- chore: Maintenance

## Keyboard Efficiency

### Learn Progressively

**Week 1:**
- File operations
- Basic navigation
- Command Palette

**Week 2:**
- Multi-cursor editing
- Search and replace
- Line operations

**Week 3:**
- Code navigation
- Git operations
- Debugging

**Week 4:**
- Custom shortcuts
- Advanced features
- Workflow optimization

### Avoid Mouse

**Replace mouse with:**
- Quick Open (`Cmd+P`)
- Command Palette (`Cmd+Shift+P`)
- Go to Definition (F12)
- Multi-cursor editing

## Performance Optimization

### Startup Performance

**Reduce startup time:**
- Disable unused extensions
- Close unnecessary files
- Use workspace folders
- Limit auto-save frequency

**Check performance:**
```
Cmd+Shift+P → "Developer: Show Running Extensions"
```

### Editor Performance

**For large files:**
```json
{
  "editor.largeFileOptimizations": true,
  "files.maxMemoryForLargeFilesMB": 4096
}
```

**Disable for large files:**
- Minimap
- Code lens
- Bracket matching

## Workflow Optimization

### Split Editor Layouts

**Common layouts:**

**Code + Docs:**
```
┌──────────┬─────┐
│  Code    │ Docs│
│  (70%)   │(30%)│
└──────────┴─────┘
```

**Test + Code:**
```
┌──────────┬──────────┐
│  Tests   │   Code   │
│  (50%)   │   (50%)  │
└──────────┴──────────┘
```

**Full-Stack:**
```
┌──────────┬──────────┐
│ Frontend │ Backend  │
├──────────┴──────────┤
│     Terminal        │
└─────────────────────┘
```

### Terminal Usage

**Best practices:**
- Name terminals clearly
- Use split terminals
- Keep related commands together
- Close unused terminals

### Task Automation

**Automate repetitive tasks:**
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Dev",
      "type": "shell",
      "command": "npm run dev",
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

## Code Navigation

### Efficient Navigation

**Use:**
- Quick Open for files
- Go to Symbol for functions
- Breadcrumbs for context
- Go to Definition for exploration

**Avoid:**
- Scrolling through files
- Manual file tree navigation
- Searching for functions manually

### Bookmarks

**Use bookmarks for:**
- Important sections
- TODO locations
- Reference points
- Complex navigation

## Collaboration

### Team Settings

**Share via .vscode/:**
- Formatting rules
- Linting configuration
- Debug configurations
- Recommended extensions

### Code Reviews

**Best practices:**
- Use diff view
- Check all changes
- Test before approving
- Leave constructive comments

## Security

### Workspace Trust

**Trust only:**
- Your own projects
- Verified repositories
- Company code

**Don't trust:**
- Unknown downloads
- Suspicious repos
- Untested code

### Sensitive Data

**Never commit:**
- API keys
- Passwords
- Tokens
- Personal data

**Use:**
- Environment variables
- .env files (in .gitignore)
- Secret management tools

## Documentation

### Code Comments

**✅ Good comments:**
```javascript
// Calculate tax based on location and amount
// Returns null if location is invalid
function calculateTax(amount, location) {
  // ...
}
```

**❌ Bad comments:**
```javascript
// This function calculates tax
function calculateTax(amount, location) {
  // Loop through items
  for (let item of items) {
    // ...
  }
}
```

### README Files

**Include:**
- Project description
- Setup instructions
- Usage examples
- Contributing guidelines

## Continuous Learning

### Stay Updated

**Follow:**
- VS Code release notes
- Extension updates
- New features
- Community tips

### Practice Regularly

**Daily:**
- Use keyboard shortcuts
- Try new features
- Optimize workflow

**Weekly:**
- Review shortcuts
- Clean up workspace
- Update extensions

**Monthly:**
- Audit settings
- Review extensions
- Learn new features

## Common Pitfalls

### Pitfall 1: Too Many Extensions
**Solution:** Install only what you need

### Pitfall 2: Ignoring Updates
**Solution:** Update regularly

### Pitfall 3: Not Using Shortcuts
**Solution:** Learn 5 shortcuts per week

### Pitfall 4: Poor Organization
**Solution:** Use consistent structure

### Pitfall 5: No Backups
**Solution:** Use Git and Settings Sync

## Key Takeaways

- Open project root folder
- Use workspace settings for teams
- Install essential extensions only
- Format and lint automatically
- Commit often with clear messages
- Learn keyboard shortcuts progressively
- Optimize for performance
- Automate repetitive tasks
- Navigate efficiently
- Keep learning and improving

## Next Steps

Continue to [Module 6.3: Workflow Tips](./03-workflow-tips.md) for advanced productivity techniques.

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: All previous modules