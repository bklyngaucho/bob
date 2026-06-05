# Module 4.3: Settings and Preferences

## Accessing Settings

### Settings UI

**Open Settings:**
```
Cmd+, (Mac) / Ctrl+, (Windows/Linux)
```

**Or via menu:**
```
Code → Preferences → Settings (Mac)
File → Preferences → Settings (Windows/Linux)
```

**Or Command Palette:**
```
Cmd+Shift+P → "Preferences: Open Settings (UI)"
```

### Settings JSON

**Open settings.json:**
```
Cmd+Shift+P → "Preferences: Open Settings (JSON)"
```

**Or click icon** in Settings UI (top-right)

## Settings Hierarchy

### Three Levels

1. **User Settings** - Global, all workspaces
2. **Workspace Settings** - Current workspace only
3. **Folder Settings** - Specific folder (multi-root)

**Priority:** Folder > Workspace > User

### Locations

**User Settings:**
- Mac: `~/Library/Application Support/Code/User/settings.json`
- Windows: `%APPDATA%\Code\User\settings.json`
- Linux: `~/.config/Code/User/settings.json`

**Workspace Settings:**
- `.vscode/settings.json` (single folder)
- `workspace.code-workspace` (multi-root)

## Essential Settings

### Editor Settings

```json
{
  "editor.fontSize": 14,
  "editor.fontFamily": "Menlo, Monaco, 'Courier New', monospace",
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.wordWrap": "on",
  "editor.lineNumbers": "on",
  "editor.minimap.enabled": true,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false
}
```

### Files Settings

```json
{
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "files.encoding": "utf8",
  "files.eol": "\n",
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.exclude": {
    "**/.git": true,
    "**/node_modules": true,
    "**/.DS_Store": true
  }
}
```

### Workbench Settings

```json
{
  "workbench.colorTheme": "Default Dark+",
  "workbench.iconTheme": "vs-seti",
  "workbench.startupEditor": "welcomePage",
  "workbench.sideBar.location": "left",
  "workbench.statusBar.visible": true,
  "workbench.activityBar.visible": true
}
```

### Terminal Settings

```json
{
  "terminal.integrated.fontSize": 12,
  "terminal.integrated.fontFamily": "Menlo",
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.scrollback": 10000
}
```

## Searching Settings

### Search in Settings UI

**Search box at top:**
- Type keyword
- Shows matching settings
- Filter by modified/default

**Examples:**
- "font" - All font settings
- "format" - Formatting settings
- "auto" - Auto-save, auto-complete, etc.

### Filter Settings

**Show only modified:**
```
@modified
```

**Show by extension:**
```
@ext:prettier
@ext:eslint
```

**Show by feature:**
```
@feature:editor
@feature:terminal
@feature:git
```

## Common Customizations

### Font and Appearance

```json
{
  "editor.fontSize": 14,
  "editor.fontFamily": "Fira Code, Menlo, Monaco",
  "editor.fontLigatures": true,
  "editor.lineHeight": 22,
  "editor.letterSpacing": 0.5,
  "editor.cursorStyle": "line",
  "editor.cursorBlinking": "smooth"
}
```

### Auto-Save

```json
{
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000
}
```

Options:
- `off` - Manual save only
- `afterDelay` - Save after typing stops
- `onFocusChange` - Save when switching files
- `onWindowChange` - Save when switching windows

### Format on Save

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[python]": {
    "editor.defaultFormatter": "ms-python.python"
  }
}
```

### Whitespace

```json
{
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  "editor.renderWhitespace": "boundary"
}
```

### Minimap

```json
{
  "editor.minimap.enabled": true,
  "editor.minimap.maxColumn": 120,
  "editor.minimap.renderCharacters": false,
  "editor.minimap.showSlider": "mouseover"
}
```

## Language-Specific Settings

### Per-Language Configuration

```json
{
  "[javascript]": {
    "editor.tabSize": 2,
    "editor.formatOnSave": true
  },
  "[python]": {
    "editor.tabSize": 4,
    "editor.insertSpaces": true
  },
  "[markdown]": {
    "editor.wordWrap": "on",
    "editor.quickSuggestions": false
  }
}
```

### File Associations

```json
{
  "files.associations": {
    "*.jsx": "javascriptreact",
    "*.config": "json",
    ".env*": "properties"
  }
}
```

## Sync Settings

### Settings Sync

**Enable:**
```
Cmd+Shift+P → "Settings Sync: Turn On"
```

**What syncs:**
- Settings
- Keybindings
- Extensions
- UI State
- Snippets

**Sign in with:**
- Microsoft account
- GitHub account

**Benefits:**
- Same settings across devices
- Backup in cloud
- Easy setup on new machines

## Keybindings

### View Keybindings

**Open Keyboard Shortcuts:**
```
Cmd+K Cmd+S (Mac) / Ctrl+K Ctrl+S (Windows/Linux)
```

**Or Command Palette:**
```
Cmd+Shift+P → "Preferences: Open Keyboard Shortcuts"
```

### Customize Keybindings

**In UI:**
1. Search for command
2. Click pencil icon
3. Press new key combination
4. Press Enter

**In JSON:**
```
Cmd+Shift+P → "Preferences: Open Keyboard Shortcuts (JSON)"
```

**Example keybindings.json:**
```json
[
  {
    "key": "cmd+shift+r",
    "command": "workbench.action.reloadWindow"
  },
  {
    "key": "cmd+k cmd+t",
    "command": "workbench.action.selectTheme"
  }
]
```

## Snippets

### User Snippets

**Create snippets:**
```
Cmd+Shift+P → "Preferences: Configure User Snippets"
```

**Select language** or create global snippets

**Example snippet:**
```json
{
  "Console Log": {
    "prefix": "log",
    "body": [
      "console.log('$1');",
      "$2"
    ],
    "description": "Log output to console"
  }
}
```

**Usage:**
- Type `log`
- Press Tab
- Snippet expands

## Workspace Settings

### When to Use

**User Settings:**
- Personal preferences
- Global configurations
- Theme and appearance

**Workspace Settings:**
- Project-specific configs
- Team standards
- Build configurations

### Example Workspace Settings

**.vscode/settings.json:**
```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true
  }
}
```

## Best Practices

### ✅ Do's

1. **Start with defaults** - Customize gradually
2. **Use workspace settings** - For team projects
3. **Document settings** - Add comments in JSON
4. **Sync settings** - Backup and share across devices
5. **Review regularly** - Remove unused settings

### ❌ Don'ts

1. **Don't over-customize** - Keep it simple
2. **Don't commit personal settings** - Use .gitignore
3. **Don't ignore team settings** - Follow project standards
4. **Don't forget to sync** - Keep backups
5. **Don't use deprecated settings** - Update regularly

## Practice Exercise

**Exercise 4.3: Customize Your Environment**

1. **Open Settings UI:**
   - Press `Cmd+,` / `Ctrl+,`
   - Explore categories

2. **Customize editor:**
   ```json
   {
     "editor.fontSize": 14,
     "editor.tabSize": 2,
     "editor.formatOnSave": true
   }
   ```

3. **Enable auto-save:**
   ```json
   {
     "files.autoSave": "afterDelay"
   }
   ```

4. **Configure language-specific:**
   ```json
   {
     "[javascript]": {
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     }
   }
   ```

5. **Create a snippet:**
   - Open snippet configuration
   - Create console.log snippet
   - Test it

6. **Customize keybinding:**
   - Open keyboard shortcuts
   - Find a command
   - Assign new keybinding

## Key Takeaways

- Settings UI for easy configuration
- settings.json for advanced control
- Three levels: User, Workspace, Folder
- Language-specific settings available
- Sync settings across devices
- Customize keybindings
- Create custom snippets
- Use workspace settings for teams
- Start simple, customize gradually

## Next Steps

Continue to [Module 4.4: Keyboard Shortcuts](./04-shortcuts.md) to master efficient navigation.

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Modules 1, 4.1, 4.2