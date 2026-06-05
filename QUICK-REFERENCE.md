# VS Code Quick Reference Guide

## Essential Keyboard Shortcuts

### File Operations
| Action | macOS | Windows/Linux |
|--------|-------|---------------|
| New file | `Cmd+N` | `Ctrl+N` |
| Open file | `Cmd+O` | `Ctrl+O` |
| Save | `Cmd+S` | `Ctrl+S` |
| Save as | `Cmd+Shift+S` | `Ctrl+Shift+S` |
| Close file | `Cmd+W` | `Ctrl+W` |
| Close all | `Cmd+K W` | `Ctrl+K W` |

### Navigation
| Action | macOS | Windows/Linux |
|--------|-------|---------------|
| Quick Open | `Cmd+P` | `Ctrl+P` |
| Go to Symbol | `Cmd+Shift+O` | `Ctrl+Shift+O` |
| Go to Line | `Cmd+G` | `Ctrl+G` |
| Go to Definition | `F12` | `F12` |
| Go Back | `Cmd+-` | `Ctrl+-` |
| Command Palette | `Cmd+Shift+P` | `Ctrl+Shift+P` |

### Editing
| Action | macOS | Windows/Linux |
|--------|-------|---------------|
| Cut line | `Cmd+X` | `Ctrl+X` |
| Copy line | `Cmd+C` | `Ctrl+C` |
| Move line up/down | `Option+Up/Down` | `Alt+Up/Down` |
| Copy line up/down | `Shift+Option+Up/Down` | `Shift+Alt+Up/Down` |
| Delete line | `Cmd+Shift+K` | `Ctrl+Shift+K` |
| Toggle comment | `Cmd+/` | `Ctrl+/` |
| Format document | `Shift+Option+F` | `Shift+Alt+F` |

### Multi-Cursor
| Action | macOS | Windows/Linux |
|--------|-------|---------------|
| Add cursor | `Option+Click` | `Alt+Click` |
| Add cursor above/below | `Cmd+Option+Up/Down` | `Ctrl+Alt+Up/Down` |
| Select next occurrence | `Cmd+D` | `Ctrl+D` |
| Select all occurrences | `Cmd+Shift+L` | `Ctrl+Shift+L` |

### Search
| Action | macOS | Windows/Linux |
|--------|-------|---------------|
| Find | `Cmd+F` | `Ctrl+F` |
| Replace | `Cmd+H` | `Ctrl+H` |
| Find in files | `Cmd+Shift+F` | `Ctrl+Shift+F` |
| Find next | `Cmd+G` | `F3` |

### View
| Action | macOS | Windows/Linux |
|--------|-------|---------------|
| Toggle sidebar | `Cmd+B` | `Ctrl+B` |
| Toggle panel | `Cmd+J` | `Ctrl+J` |
| Toggle terminal | `Cmd+\`` | `Ctrl+\`` |
| Split editor | `Cmd+\` | `Ctrl+\` |
| Zen mode | `Cmd+K Z` | `Ctrl+K Z` |

## Command Palette Quick Access

Press `Cmd+Shift+P` / `Ctrl+Shift+P` then type:

- `format` - Format document
- `theme` - Change color theme
- `git` - Git commands
- `terminal` - Terminal commands
- `settings` - Open settings
- `extensions` - Manage extensions

## Quick Open Modes

Press `Cmd+P` / `Ctrl+P` then:

- Type filename - Open file
- `@` - Go to symbol in file
- `#` - Go to symbol in workspace
- `:` - Go to line number
- `>` - Command Palette

## File Explorer

- `Cmd+Shift+E` / `Ctrl+Shift+E` - Focus Explorer
- `Enter` - Open file
- `Space` - Preview file
- `F2` - Rename
- `Delete` - Delete file

## Git Integration

- `Cmd+Shift+G` / `Ctrl+Shift+G` - Source Control view
- Click `+` - Stage file
- `Cmd+Enter` / `Ctrl+Enter` - Commit
- Click sync icon - Push/Pull

## Debugging

- `F5` - Start/Continue
- `F9` - Toggle breakpoint
- `F10` - Step over
- `F11` - Step into
- `Shift+F11` - Step out
- `Shift+F5` - Stop

## Terminal

- `Cmd+\`` / `Ctrl+\`` - Toggle terminal
- `Ctrl+Shift+\`` - New terminal
- `Cmd+\` / `Ctrl+Shift+5` - Split terminal
- `Cmd+K` / `Ctrl+K` - Clear terminal

## Settings

### Essential Settings

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "files.autoSave": "afterDelay",
  "files.trimTrailingWhitespace": true,
  "workbench.colorTheme": "Default Dark+"
}
```

### Access Settings

- `Cmd+,` / `Ctrl+,` - Open Settings UI
- `Cmd+Shift+P` → "Open Settings (JSON)" - Edit JSON

## Extensions

### Must-Have Extensions

1. **Prettier** - Code formatter
2. **ESLint** - JavaScript linter
3. **GitLens** - Git enhancement
4. **Live Server** - Local dev server
5. **Path Intellisense** - Path completion

### Install Extension

- `Cmd+Shift+X` / `Ctrl+Shift+X` - Extensions view
- Search and click Install
- Or: `ext install extension-id`

## Snippets

### Using Snippets

1. Type snippet prefix
2. Press `Tab`
3. Fill placeholders
4. Press `Tab` to next placeholder

### Common Snippets

**JavaScript:**
- `log` → console.log()
- `for` → for loop
- `func` → function

**HTML:**
- `!` → HTML boilerplate
- `div` → div element

## Emmet

### HTML Abbreviations

- `div.container` → `<div class="container"></div>`
- `ul>li*3` → List with 3 items
- `div#header` → `<div id="header"></div>`

### CSS Abbreviations

- `m10` → `margin: 10px;`
- `p20` → `padding: 20px;`
- `df` → `display: flex;`

## Workspace Files

### .vscode/settings.json
Project-specific settings

### .vscode/launch.json
Debug configurations

### .vscode/tasks.json
Task automation

### .vscode/extensions.json
Recommended extensions

## Tips and Tricks

### Productivity Tips

1. **Use Quick Open** (`Cmd+P`) instead of file tree
2. **Learn 5 shortcuts per week**
3. **Enable auto-save** for convenience
4. **Use multi-cursor** for repetitive edits
5. **Format on save** for consistency

### Navigation Tips

1. **Go to Definition** (F12) to explore code
2. **Go Back** (`Cmd+-`) to return
3. **Breadcrumbs** for context
4. **Minimap** for file overview

### Editing Tips

1. **Multi-cursor** for bulk changes
2. **Column selection** for aligned text
3. **Move lines** instead of cut-paste
4. **Duplicate lines** for similar code

### Git Tips

1. **Review diffs** before committing
2. **Write clear** commit messages
3. **Use branches** for features
4. **Commit often** with small changes

## Common Issues

### Extension Not Working
- Check if enabled
- Reload window
- Check extension output

### Slow Performance
- Disable unused extensions
- Close unnecessary files
- Check running extensions

### Git Not Showing
- Ensure .git folder exists
- Check workspace trust
- Reload window

## Resources

- [Official Documentation](https://code.visualstudio.com/docs)
- [Keyboard Shortcuts PDF](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
- [Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)
- [Extension Marketplace](https://marketplace.visualstudio.com/vscode)

## Training Modules

1. [Module 1: Getting Started](./module-1-getting-started/01-introduction.md)
2. [Module 2: Essential Features](./module-2-essential-features/01-command-palette.md)
3. [Module 3: Workspace Management](./module-3-workspace/01-workspaces.md)
4. [Module 4: Extensions and Customization](./module-4-extensions/01-installing-extensions.md)
5. [Module 5: Advanced Features](./module-5-advanced/01-git-integration.md)
6. [Module 6: Productivity Tips](./module-6-productivity/01-shortcuts-cheatsheet.md)

---

**Print this page for quick reference while learning!**