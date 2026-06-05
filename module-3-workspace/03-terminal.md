# Module 3.3: Integrated Terminal

## Overview

VS Code's integrated terminal lets you run command-line tools without leaving the editor. It's a powerful feature that keeps your workflow seamless.

## Opening the Terminal

### Basic Commands

**Toggle Terminal:**
```
Cmd+` (Mac) / Ctrl+` (Windows/Linux)
```
(That's the backtick key, usually above Tab)

**Or via menu:**
```
Terminal → New Terminal
View → Terminal
```

**Or Command Palette:**
```
Cmd+Shift+P → "Terminal: Create New Terminal"
```

### Terminal Panel

The terminal appears in the Panel area (bottom by default):

```
┌─────────────────────────────────┐
│        Editor Area              │
│                                 │
├─────────────────────────────────┤
│ TERMINAL                        │
│ $ npm install                   │
│ $ git status                    │
└─────────────────────────────────┘
```

## Multiple Terminals

### Creating Multiple Terminals

**New Terminal:**
```
Ctrl+Shift+` (Mac/Windows/Linux)
```

**Or click `+` icon** in terminal panel

**Or Command Palette:**
```
Cmd+Shift+P → "Terminal: Create New Terminal"
```

### Terminal Tabs

Multiple terminals appear as tabs:

```
┌─────────────────────────────────┐
│ [bash] [zsh] [node] [+]        │
│ $ npm run dev                   │
│ Server running on port 3000     │
└─────────────────────────────────┘
```

### Switching Between Terminals

**Dropdown Menu:**
- Click terminal name dropdown
- Select terminal from list

**Keyboard:**
```
Cmd+Shift+P → "Terminal: Focus Next Terminal"
Cmd+Shift+P → "Terminal: Focus Previous Terminal"
```

**Quick Pick:**
```
Cmd+Shift+P → "Terminal: Switch Active Terminal"
```

## Terminal Types

### Default Shell

VS Code uses your system's default shell:
- **macOS**: bash or zsh
- **Windows**: PowerShell or Command Prompt
- **Linux**: bash

### Changing Default Shell

**Command Palette:**
```
Cmd+Shift+P → "Terminal: Select Default Profile"
```

**Options:**
- bash
- zsh
- fish
- PowerShell
- Command Prompt
- Git Bash (Windows)

### Creating Specific Shell

**Command Palette:**
```
Cmd+Shift+P → "Terminal: Create New Terminal (With Profile)"
```

Select shell type from list.

## Terminal Features

### Split Terminal

**Split Terminal:**
```
Cmd+\ (Mac) / Ctrl+Shift+5 (Windows/Linux)
```

**Or click split icon** in terminal toolbar

**Result:**
```
┌──────────────┬──────────────┐
│ Terminal 1   │ Terminal 2   │
│ $ npm run dev│ $ git status │
└──────────────┴──────────────┘
```

**Use Cases:**
- Run server + watch tests
- Monitor logs + run commands
- Multiple project directories

### Terminal Groups

Terminals can be organized in groups:

```
┌─────────────────────────────────┐
│ [Dev] [Test] [Git] [+]         │
│ ├─ npm run dev                  │
│ ├─ npm test --watch             │
│ └─ git status                   │
└─────────────────────────────────┘
```

### Rename Terminal

**Right-click terminal tab:**
- Select "Rename"
- Enter descriptive name

**Or Command Palette:**
```
Cmd+Shift+P → "Terminal: Rename"
```

**Benefits:**
- Identify purpose quickly
- Organize multiple terminals
- Better workflow management

### Kill Terminal

**Close Terminal:**
```
Cmd+Shift+P → "Terminal: Kill Terminal"
```

**Or click trash icon** in terminal toolbar

**Or type:**
```
exit
```

## Terminal Navigation

### Scroll Terminal

**Mouse:**
- Scroll wheel
- Trackpad gestures

**Keyboard:**
```
Cmd+Up/Down (Mac) / Ctrl+Up/Down (Windows/Linux)
PageUp/PageDown
```

### Clear Terminal

**Command:**
```
clear (Mac/Linux)
cls (Windows)
```

**Keyboard:**
```
Cmd+K (Mac) / Ctrl+K (Windows/Linux)
```

### Search in Terminal

**Open Search:**
```
Cmd+F (Mac) / Ctrl+F (Windows/Linux)
```

**Features:**
- Find text in terminal output
- Navigate matches
- Case-sensitive option
- Regex support

## Terminal Customization

### Font Size

**Zoom In/Out:**
```
Cmd+= / Cmd+- (Mac)
Ctrl+= / Ctrl+- (Windows/Linux)
```

**Or Settings:**
```
Settings → Terminal: Font Size
```

### Font Family

**Settings:**
```
Settings → Terminal: Font Family
```

**Popular choices:**
- Menlo (Mac default)
- Consolas (Windows default)
- Monaco
- Fira Code
- Source Code Pro

### Colors

**Settings:**
```
Settings → Terminal: Integrated
```

Options:
- Cursor style
- Cursor blink
- Line height
- Letter spacing

### Terminal Location

**Move Terminal:**
```
Cmd+Shift+P → "Terminal: Move Terminal to Editor Area"
Cmd+Shift+P → "Terminal: Move Terminal to Panel"
```

**Benefits:**
- Editor area: More space
- Panel: Traditional layout

## Working Directory

### Default Working Directory

Terminals open in:
- Workspace root folder
- Or current file's directory (configurable)

### Change Directory

**Standard commands:**
```bash
cd /path/to/directory
cd ..
cd ~
```

### Open Terminal in Specific Folder

**From Explorer:**
1. Right-click folder
2. Select "Open in Integrated Terminal"

**Result:**
- New terminal opens
- Working directory set to folder

## Common Terminal Tasks

### Running Scripts

**Node.js:**
```bash
npm install
npm start
npm test
npm run build
```

**Python:**
```bash
python script.py
pip install -r requirements.txt
python -m venv venv
```

**Git:**
```bash
git status
git add .
git commit -m "message"
git push
```

### Development Servers

**Start server:**
```bash
npm run dev
python manage.py runserver
rails server
```

**Keep running:**
- Server runs in terminal
- View output in real-time
- Stop with Ctrl+C

### Build Tools

**Webpack:**
```bash
npm run build
webpack --watch
```

**Gulp:**
```bash
gulp
gulp watch
```

**Make:**
```bash
make
make test
```

## Terminal Profiles

### Creating Profiles

**settings.json:**
```json
{
  "terminal.integrated.profiles.osx": {
    "Dev Server": {
      "path": "bash",
      "args": ["-c", "npm run dev"]
    },
    "Python": {
      "path": "python3"
    }
  }
}
```

### Using Profiles

**Command Palette:**
```
Cmd+Shift+P → "Terminal: Create New Terminal (With Profile)"
```

Select custom profile from list.

## Terminal Tasks Integration

### Running Tasks

Tasks can open in terminal:

**tasks.json:**
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run Dev Server",
      "type": "shell",
      "command": "npm run dev",
      "presentation": {
        "reveal": "always",
        "panel": "new"
      }
    }
  ]
}
```

**Run task:**
```
Cmd+Shift+P → "Tasks: Run Task"
```

## Practical Workflows

### Workflow 1: Full-Stack Development

**Setup:**
```
Terminal 1: npm run dev (frontend)
Terminal 2: npm start (backend)
Terminal 3: git status (version control)
```

**Benefits:**
- All services visible
- Monitor all outputs
- Quick command access

### Workflow 2: Test-Driven Development

**Setup:**
```
Terminal 1: npm test --watch
Terminal 2: npm run dev
```

**Benefits:**
- Tests run automatically
- See results immediately
- Server running alongside

### Workflow 3: Build and Deploy

**Setup:**
```
Terminal 1: npm run build --watch
Terminal 2: npm run deploy
Terminal 3: tail -f logs/app.log
```

**Benefits:**
- Monitor build process
- Deploy when ready
- Watch logs in real-time

## Practice Exercise

**Exercise 3.3: Terminal Mastery**

1. **Open terminal:**
   - Press `Cmd+\`` / `Ctrl+\``
   - Verify it opens

2. **Create multiple terminals:**
   - Create 3 terminals
   - Rename them: "Dev", "Test", "Git"
   - Switch between them

3. **Split terminal:**
   - Split one terminal
   - Run different commands in each

4. **Practice commands:**
   ```bash
   # Terminal 1
   echo "Hello from Terminal 1"
   
   # Terminal 2
   echo "Hello from Terminal 2"
   ```

5. **Customize:**
   - Change font size
   - Try different shells
   - Search terminal output

6. **Working directory:**
   - Create a folder
   - Right-click → "Open in Integrated Terminal"
   - Verify working directory

## Tips and Best Practices

### Tip 1: Name Your Terminals

Always rename terminals for clarity:
- "Dev Server"
- "Test Runner"
- "Git Commands"
- "Build Watch"

### Tip 2: Use Split Terminals

Split instead of multiple tabs when:
- Need to see both outputs
- Related commands
- Monitoring multiple processes

### Tip 3: Keep Terminals Organized

- Close unused terminals
- Group related terminals
- Use consistent naming

### Tip 4: Leverage Shell Features

- Use shell history (Up arrow)
- Use tab completion
- Use aliases and functions

### Tip 5: Terminal + Editor

Efficient workflow:
1. Edit code in editor
2. Save (Cmd+S / Ctrl+S)
3. Switch to terminal (Cmd+\` / Ctrl+\`)
4. Run command
5. Back to editor (Cmd+1 / Ctrl+1)

## Troubleshooting

**Problem**: Terminal not opening
- **Solution**: Check keyboard shortcut conflicts

**Problem**: Wrong shell
- **Solution**: Change default profile

**Problem**: Can't see output
- **Solution**: Scroll up or clear terminal

**Problem**: Terminal too small
- **Solution**: Resize panel or move to editor area

**Problem**: Commands not found
- **Solution**: Check PATH environment variable

## Keyboard Shortcuts Summary

```
Cmd+` / Ctrl+` - Toggle terminal
Ctrl+Shift+` - New terminal
Cmd+\ / Ctrl+Shift+5 - Split terminal

Cmd+K / Ctrl+K - Clear terminal
Cmd+F / Ctrl+F - Find in terminal

Cmd+Up/Down / Ctrl+Up/Down - Scroll terminal
Cmd+= / Ctrl+= - Zoom in
Cmd+- / Ctrl+- - Zoom out
```

## Key Takeaways

- Integrated terminal keeps workflow in VS Code
- Multiple terminals for different tasks
- Split terminals for side-by-side viewing
- Rename terminals for organization
- Customize appearance and behavior
- Use profiles for common setups
- Terminal integrates with tasks
- Keyboard shortcuts speed up workflow

## Next Steps

Congratulations! You've completed Module 3: Workspace Management.

Continue to [Module 4: Extensions and Customization](../module-4-extensions/01-installing-extensions.md) to learn about extending VS Code.

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Modules 1, 3.1, 3.2