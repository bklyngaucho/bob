# Module 5.4: Tasks and Automation

## Overview

Tasks automate repetitive operations like building, testing, and deploying. Run them directly from VS Code without switching to terminal.

## Tasks Basics

### Running Tasks

**Command Palette:**
```
Cmd+Shift+P → "Tasks: Run Task"
```

**Keyboard:**
```
Cmd+Shift+B / Ctrl+Shift+B - Run build task
```

### Task Types

**Auto-detected tasks:**
- npm scripts
- Gulp tasks
- Grunt tasks
- Maven goals

**Custom tasks:**
- Defined in tasks.json
- Shell commands
- Custom scripts

## Creating Tasks

### tasks.json

**Create tasks.json:**
```
Cmd+Shift+P → "Tasks: Configure Task"
```

**Location:**
`.vscode/tasks.json`

### Basic Task Structure

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build",
      "type": "shell",
      "command": "npm run build",
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

### Task Properties

**Required:**
- `label` - Task name
- `type` - shell or process
- `command` - Command to run

**Optional:**
- `group` - Task category
- `presentation` - Output options
- `problemMatcher` - Error detection
- `dependsOn` - Task dependencies

## Task Examples

### Build Task

```json
{
  "label": "Build Project",
  "type": "shell",
  "command": "npm run build",
  "group": {
    "kind": "build",
    "isDefault": true
  },
  "problemMatcher": ["$tsc"]
}
```

### Test Task

```json
{
  "label": "Run Tests",
  "type": "shell",
  "command": "npm test",
  "group": {
    "kind": "test",
    "isDefault": true
  }
}
```

### Watch Task

```json
{
  "label": "Watch",
  "type": "shell",
  "command": "npm run watch",
  "isBackground": true,
  "problemMatcher": {
    "owner": "typescript",
    "fileLocation": "relative",
    "pattern": {
      "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
      "file": 1,
      "line": 2,
      "column": 3,
      "severity": 4,
      "message": 5
    },
    "background": {
      "activeOnStart": true,
      "beginsPattern": "^.*compilation starting.*$",
      "endsPattern": "^.*compilation complete.*$"
    }
  }
}
```

## Task Groups

### Build Group

```json
{
  "group": {
    "kind": "build",
    "isDefault": true
  }
}
```

**Run with:** `Cmd+Shift+B` / `Ctrl+Shift+B`

### Test Group

```json
{
  "group": {
    "kind": "test",
    "isDefault": true
  }
}
```

### Custom Groups

```json
{
  "group": "deploy"
}
```

## Task Presentation

### Output Options

```json
{
  "presentation": {
    "reveal": "always",
    "panel": "new",
    "focus": false,
    "clear": true
  }
}
```

**Options:**
- `reveal`: always, never, silent
- `panel`: shared, dedicated, new
- `focus`: true/false
- `clear`: true/false

## Problem Matchers

### What are Problem Matchers?

Parse task output to identify errors and warnings.

### Built-in Matchers

```json
{
  "problemMatcher": "$tsc"
}
```

**Common matchers:**
- `$tsc` - TypeScript
- `$eslint-compact` - ESLint
- `$gcc` - GCC
- `$msCompile` - Visual Studio

### Custom Matcher

```json
{
  "problemMatcher": {
    "owner": "javascript",
    "fileLocation": "relative",
    "pattern": {
      "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
      "file": 1,
      "line": 2,
      "column": 3,
      "severity": 4,
      "message": 5
    }
  }
}
```

## Task Dependencies

### Sequential Tasks

```json
{
  "label": "Deploy",
  "dependsOn": ["Build", "Test"],
  "dependsOrder": "sequence"
}
```

### Parallel Tasks

```json
{
  "label": "Build All",
  "dependsOn": ["Build Frontend", "Build Backend"],
  "dependsOrder": "parallel"
}
```

## Variables in Tasks

### Common Variables

```
${workspaceFolder} - Workspace root
${file} - Current file
${fileBasename} - Current filename
${fileDirname} - Current file directory
${cwd} - Current working directory
${env:NAME} - Environment variable
```

### Example with Variables

```json
{
  "label": "Compile Current File",
  "type": "shell",
  "command": "gcc",
  "args": [
    "${file}",
    "-o",
    "${fileDirname}/${fileBasenameNoExtension}"
  ]
}
```

## NPM Scripts Integration

### Auto-detection

VS Code automatically detects npm scripts from package.json.

**View npm scripts:**
```
Cmd+Shift+P → "Tasks: Run Task" → npm
```

### Running npm Scripts

**From Command Palette:**
```
Cmd+Shift+P → "npm: Run Script"
```

**From Explorer:**
- NPM Scripts view in sidebar
- Click script to run

## Practical Examples

### Full-Stack Development

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Frontend",
      "type": "shell",
      "command": "npm run dev",
      "options": {
        "cwd": "${workspaceFolder}/frontend"
      },
      "isBackground": true
    },
    {
      "label": "Start Backend",
      "type": "shell",
      "command": "npm start",
      "options": {
        "cwd": "${workspaceFolder}/backend"
      },
      "isBackground": true
    },
    {
      "label": "Start All",
      "dependsOn": ["Start Frontend", "Start Backend"],
      "dependsOrder": "parallel"
    }
  ]
}
```

### Build and Deploy

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Clean",
      "type": "shell",
      "command": "rm -rf dist"
    },
    {
      "label": "Build",
      "type": "shell",
      "command": "npm run build",
      "dependsOn": ["Clean"],
      "group": {
        "kind": "build",
        "isDefault": true
      }
    },
    {
      "label": "Deploy",
      "type": "shell",
      "command": "npm run deploy",
      "dependsOn": ["Build"]
    }
  ]
}
```

## Tips and Best Practices

### Tip 1: Use Default Tasks
- Set default build task
- Set default test task
- Quick access with shortcuts

### Tip 2: Background Tasks
- Use for watch tasks
- Use for dev servers
- Configure problem matchers

### Tip 3: Task Dependencies
- Chain related tasks
- Parallel for independent tasks
- Sequential for dependent tasks

### Tip 4: Clear Output
- Use `clear: true` for clean output
- Use `reveal: silent` for background tasks
- Use `focus: false` to stay in editor

## Key Takeaways

- Tasks automate repetitive operations
- tasks.json for custom tasks
- Auto-detection for npm, gulp, grunt
- Problem matchers parse errors
- Task dependencies for workflows
- Variables for flexibility
- Keyboard shortcuts for efficiency
- Background tasks for servers

## Next Steps

Congratulations! You've completed Module 5: Advanced Features.

Continue to [Module 6: Productivity Tips](../module-6-productivity/01-shortcuts-cheatsheet.md) for workflow optimization.

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: Modules 1-4