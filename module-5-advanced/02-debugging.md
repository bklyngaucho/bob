# Module 5.2: Debugging

## Overview

VS Code includes a powerful debugger that supports multiple languages. Debug directly in the editor without external tools.

## Debug View

### Opening Debug View

```
Cmd+Shift+D (Mac) / Ctrl+Shift+D (Windows/Linux)
```

**Or click Debug icon** in Activity Bar (play with bug icon)

## Setting Up Debugging

### Launch Configuration

**Create launch.json:**
```
Cmd+Shift+P → "Debug: Open launch.json"
```

**Example Node.js configuration:**
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/app.js",
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

### Quick Debug

**For simple cases:**
- Open file
- Press F5
- VS Code auto-detects configuration

## Breakpoints

### Setting Breakpoints

**Click in gutter** (left of line numbers)
- Red dot appears
- Or press F9

### Conditional Breakpoints

**Right-click breakpoint:**
- "Edit Breakpoint"
- Enter condition

**Example:**
```javascript
i > 10
user.name === "John"
```

### Logpoints

**Like console.log without modifying code:**
- Right-click in gutter
- "Add Logpoint"
- Enter message

**Example:**
```
User: {user.name}, Age: {user.age}
```

## Debug Controls

### Starting Debug Session

```
F5 - Start debugging
Cmd+Shift+F5 / Ctrl+Shift+F5 - Restart
Shift+F5 - Stop
```

### Stepping Through Code

```
F10 - Step Over
F11 - Step Into
Shift+F11 - Step Out
Cmd+Shift+F5 / Ctrl+Shift+F5 - Restart
```

### Continue/Pause

```
F5 - Continue
F6 - Pause
```

## Debug Console

### Using Debug Console

**Access:**
- Automatically opens during debug
- Or Panel → Debug Console

**Features:**
- Evaluate expressions
- Execute code
- View variables
- Call functions

**Example:**
```javascript
> user.name
"John"
> calculateTotal(items)
150
```

## Variables View

### Inspecting Variables

**Variables panel shows:**
- Local variables
- Global variables
- Closure variables

**Features:**
- Expand objects
- View arrays
- Modify values
- Copy values

### Watch Expressions

**Add watch:**
- Click `+` in Watch panel
- Enter expression

**Example:**
```
user.name
items.length
total > 100
```

## Call Stack

### Understanding Call Stack

**Shows:**
- Current function
- Calling functions
- Execution path

**Click frame** to:
- View code
- Inspect variables
- Navigate execution

## Debug Configurations

### Common Configurations

**Node.js:**
```json
{
  "type": "node",
  "request": "launch",
  "name": "Launch Program",
  "program": "${workspaceFolder}/app.js"
}
```

**Python:**
```json
{
  "type": "python",
  "request": "launch",
  "name": "Python: Current File",
  "program": "${file}"
}
```

**Chrome:**
```json
{
  "type": "chrome",
  "request": "launch",
  "name": "Launch Chrome",
  "url": "http://localhost:3000",
  "webRoot": "${workspaceFolder}"
}
```

## Debugging Tips

### Tip 1: Use Logpoints
- No code modification
- No cleanup needed
- Conditional logging

### Tip 2: Conditional Breakpoints
- Break only when needed
- Reduce debugging time
- Focus on specific cases

### Tip 3: Debug Console
- Test fixes quickly
- Explore object state
- Verify assumptions

### Tip 4: Watch Expressions
- Monitor key values
- Track state changes
- Identify issues faster

## Key Takeaways

- Built-in debugger for multiple languages
- Breakpoints and logpoints
- Step through code execution
- Inspect variables and call stack
- Debug console for evaluation
- launch.json for configuration
- Keyboard shortcuts for efficiency

## Next Steps

Continue to [Module 5.3: Snippets and IntelliSense](./03-snippets-intellisense.md).

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: Modules 1-4