# Module 6.3: Workflow Tips

## Efficient File Navigation

### Quick Open Mastery

**Fuzzy search examples:**
```
"usutil" → user-utilities.js
"indjs" → index.js
"test/ind" → test/index.js
```

**Pro tips:**
- Don't type full names
- Use distinctive letters
- Recent files appear first
- Press `Cmd+P` twice for recent files

### Symbol Navigation

**Within file:**
```
Cmd+Shift+O → @functionName
```

**Across workspace:**
```
Cmd+T → #className
```

**Pro tip:** Add `:` after `@` to group by type

## Multi-Cursor Techniques

### Pattern 1: Column Editing

**Use case:** Edit aligned text

```
Name:    John
Age:     30
City:    NYC
```

**Method:**
1. `Shift+Option+Drag` down
2. Edit all at once

### Pattern 2: Transform List

**Use case:** Convert list to array

```
apple
banana
cherry
```

**Method:**
1. Select all lines
2. `Cmd+Shift+L`
3. `Home` → type `"`
4. `End` → type `",`

**Result:**
```
"apple",
"banana",
"cherry",
```

### Pattern 3: Selective Editing

**Use case:** Change some occurrences

**Method:**
1. Select first occurrence
2. `Cmd+D` to add next
3. `Cmd+K Cmd+D` to skip
4. Continue until done

## Search Strategies

### Search in Selection

**Use case:** Replace only in specific section

**Method:**
1. Select code block
2. `Cmd+F`
3. Click "Find in Selection" icon
4. Replace within selection only

### Regex Power

**Find all TODO comments:**
```
//\s*TODO:.*
```

**Find all function declarations:**
```
function\s+\w+\s*\(
```

**Find email addresses:**
```
\w+@\w+\.\w+
```

## Layout Optimization

### Context-Based Layouts

**Writing code:**
```
┌─────────────────────┐
│   Editor (100%)     │
│                     │
└─────────────────────┘
```
- Hide sidebar
- Hide panel
- Focus on code

**Debugging:**
```
┌──────────┬──────────┐
│  Code    │  Debug   │
│          │  Panel   │
├──────────┴──────────┤
│   Debug Console     │
└─────────────────────┘
```

**Full-stack dev:**
```
┌──────────┬──────────┐
│ Frontend │ Backend  │
├──────────┼──────────┤
│ Terminal │ Terminal │
└──────────┴──────────┘
```

### Quick Layout Switching

**Save layouts as tasks:**
```json
{
  "label": "Layout: Code Focus",
  "command": "${command:workbench.action.toggleSidebarVisibility}"
}
```

## Terminal Workflows

### Named Terminals

**Best practice:**
```
Terminal 1: "Dev Server"
Terminal 2: "Tests"
Terminal 3: "Git"
```

**Benefits:**
- Quick identification
- Better organization
- Clear purpose

### Terminal Splitting

**Use case:** Monitor multiple processes

```
┌──────────────┬──────────────┐
│ npm run dev  │ npm test     │
└──────────────┴──────────────┘
```

**Method:**
- `Cmd+\` to split
- Run different commands
- Monitor both outputs

## Snippet Workflows

### Custom Snippets for Repetitive Code

**React component:**
```json
{
  "React Component": {
    "prefix": "rfc",
    "body": [
      "import React from 'react';",
      "",
      "const ${1:ComponentName} = () => {",
      "  return (",
      "    <div>",
      "      $2",
      "    </div>",
      "  );",
      "};",
      "",
      "export default ${1:ComponentName};"
    ]
  }
}
```

**Test template:**
```json
{
  "Test Suite": {
    "prefix": "test",
    "body": [
      "describe('${1:Component}', () => {",
      "  it('${2:should}', () => {",
      "    $3",
      "  });",
      "});"
    ]
  }
}
```

## Git Workflows

### Feature Development

```
1. Create branch: Cmd+Shift+P → "Git: Create Branch"
2. Make changes
3. Stage: Click + in Source Control
4. Commit: Cmd+Enter
5. Push: Click sync icon
```

### Quick Commit

**For small changes:**
1. `Cmd+Shift+G` - Open Source Control
2. Stage all changes (+ icon)
3. Type message
4. `Cmd+Enter` - Commit

### Review Before Commit

**Always:**
1. Click file in Source Control
2. Review diff
3. Verify changes
4. Remove debug code
5. Then commit

## Code Review Workflow

### Efficient Review

```
1. Open PR in browser
2. Clone/pull branch
3. Use diff view (click files)
4. Navigate with F7/Shift+F7
5. Add comments
6. Test locally
7. Approve or request changes
```

### Side-by-Side Comparison

**Method:**
1. Right-click file → "Select for Compare"
2. Right-click another → "Compare with Selected"
3. Review differences
4. Navigate changes

## Debugging Workflow

### Quick Debug

**For simple scripts:**
1. Open file
2. Press F5
3. VS Code auto-configures
4. Debug immediately

### Efficient Debugging

```
1. Set breakpoints (F9)
2. Start debug (F5)
3. Use Debug Console for testing
4. Step through (F10/F11)
5. Inspect variables
6. Fix and restart (Cmd+Shift+F5)
```

### Logpoints vs Breakpoints

**Use logpoints when:**
- Don't want to stop execution
- Need to see values over time
- Debugging production-like scenarios

**Use breakpoints when:**
- Need to inspect state
- Want to step through code
- Testing fixes

## Task Automation

### Common Task Patterns

**Development:**
```json
{
  "label": "Start Dev",
  "dependsOn": ["Install", "Build", "Serve"],
  "dependsOrder": "sequence"
}
```

**Testing:**
```json
{
  "label": "Test All",
  "dependsOn": ["Lint", "Unit Tests", "E2E Tests"],
  "dependsOrder": "sequence"
}
```

**Deployment:**
```json
{
  "label": "Deploy",
  "dependsOn": ["Build", "Test", "Push"],
  "dependsOrder": "sequence"
}
```

## Time-Saving Tips

### Tip 1: Reopen Closed Tab
```
Cmd+Shift+T / Ctrl+Shift+T
```
Instantly reopen accidentally closed files.

### Tip 2: Duplicate Line
```
Shift+Option+Down / Shift+Alt+Down
```
Faster than copy-paste for single lines.

### Tip 3: Move Line
```
Option+Up/Down / Alt+Up/Down
```
Reorganize code without cut-paste.

### Tip 4: Delete Line
```
Cmd+Shift+K / Ctrl+Shift+K
```
No need to select entire line first.

### Tip 5: Insert Line
```
Cmd+Enter / Ctrl+Enter - Below
Cmd+Shift+Enter / Ctrl+Shift+Enter - Above
```
No need to go to end of line.

### Tip 6: Select All Occurrences
```
Cmd+Shift+L / Ctrl+Shift+L
```
Change all instances at once.

### Tip 7: Format Document
```
Shift+Option+F / Shift+Alt+F
```
Instant code formatting.

### Tip 8: Quick Fix
```
Cmd+. / Ctrl+.
```
Auto-fix errors and warnings.

### Tip 9: Rename Symbol
```
F2
```
Rename across entire project.

### Tip 10: Go Back
```
Cmd+- / Ctrl+-
```
Return to previous location.

## Productivity Metrics

### Track Your Progress

**Week 1:**
- Mouse usage: 80%
- Keyboard: 20%

**Week 4:**
- Mouse usage: 40%
- Keyboard: 60%

**Week 8:**
- Mouse usage: 20%
- Keyboard: 80%

### Measure Improvement

**Before optimization:**
- File navigation: 10 seconds
- Code editing: 5 minutes
- Git operations: 2 minutes

**After optimization:**
- File navigation: 2 seconds (Quick Open)
- Code editing: 2 minutes (Multi-cursor)
- Git operations: 30 seconds (Shortcuts)

## Daily Workflow Example

### Morning Routine

```
1. Open VS Code
2. Cmd+R - Open recent project
3. Cmd+Shift+G - Check Git status
4. Cmd+` - Open terminal
5. npm run dev
6. Cmd+P - Open first file
7. Start coding
```

### During Development

```
1. Cmd+P - Quick file switching
2. Cmd+Shift+O - Navigate functions
3. F12 - Go to definitions
4. Cmd+D - Multi-cursor editing
5. Cmd+/ - Toggle comments
6. Shift+Option+F - Format code
7. Cmd+S - Save (or auto-save)
```

### Before Commit

```
1. Cmd+Shift+F - Search for TODOs
2. Cmd+Shift+F - Search for console.log
3. Cmd+Shift+G - Review changes
4. Click files to see diffs
5. Stage changes
6. Write commit message
7. Cmd+Enter - Commit
```

## Key Takeaways

- Master Quick Open for file navigation
- Use multi-cursor for repetitive edits
- Leverage regex in search
- Optimize layouts for tasks
- Name and organize terminals
- Create custom snippets
- Automate with tasks
- Review before committing
- Use keyboard shortcuts
- Measure and improve

## Congratulations!

You've completed the VS Code Training Program! You now have the knowledge to:
- Navigate VS Code efficiently
- Use advanced editing features
- Manage workspaces and projects
- Customize your environment
- Leverage Git integration
- Debug effectively
- Optimize your workflow

**Keep practicing and exploring new features!**

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Advanced  
**Prerequisites**: All previous modules