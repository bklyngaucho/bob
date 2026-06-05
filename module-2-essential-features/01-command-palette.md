# Module 2.1: The Command Palette

## What is the Command Palette?

The Command Palette is VS Code's most powerful feature - a searchable list of **every command** available in the editor.

**Access it with:**
```
Cmd+Shift+P (Mac) / Ctrl+Shift+P (Windows/Linux)
or
F1
```

Think of it as a universal search for actions you want to perform.

## Why Use the Command Palette?

### Benefits

1. **Discover Features**: Find commands you didn't know existed
2. **No Menu Hunting**: Direct access to any action
3. **Keyboard-Driven**: Stay in flow without using mouse
4. **See Shortcuts**: Learn keyboard shortcuts for frequent commands
5. **Fuzzy Search**: Type partial words to find commands

## Basic Usage

### Opening the Command Palette

```
Cmd+Shift+P / Ctrl+Shift+P
```

You'll see a dropdown with:
- Recently used commands at the top
- Search box to filter commands
- Keyboard shortcuts shown on the right

### Searching for Commands

**Type to search** - fuzzy matching works!

Examples:
- Type `format` → finds "Format Document"
- Type `theme` → finds "Color Theme"
- Type `git clone` → finds "Git: Clone"
- Type `term` → finds "Terminal: Create New Terminal"

### Executing Commands

1. Type to search
2. Use arrow keys to navigate
3. Press `Enter` to execute
4. Or click with mouse

## Common Command Categories

### File Operations

```
File: New File
File: Open File...
File: Save
File: Save All
File: Close Editor
File: Revert File
```

**Quick Access:**
- Type `new` for new file
- Type `save` for save options
- Type `close` for close options

### View Commands

```
View: Toggle Side Bar
View: Toggle Panel
View: Toggle Terminal
View: Split Editor
View: Zoom In/Out
```

**Quick Access:**
- Type `toggle` to see all toggle options
- Type `split` for editor splitting
- Type `zoom` for zoom controls

### Editor Commands

```
Format Document
Format Selection
Change Language Mode
Change File Encoding
Change End of Line Sequence
```

**Quick Access:**
- Type `format` for formatting
- Type `language` to change syntax highlighting
- Type `encoding` to change file encoding

### Git Commands

```
Git: Clone
Git: Commit
Git: Push
Git: Pull
Git: Create Branch
Git: Checkout to...
```

**Quick Access:**
- Type `git` to see all Git commands
- Type `commit` for commit options
- Type `branch` for branch operations

### Settings Commands

```
Preferences: Open Settings (UI)
Preferences: Open Settings (JSON)
Preferences: Color Theme
Preferences: File Icon Theme
Preferences: Keyboard Shortcuts
```

**Quick Access:**
- Type `settings` for settings options
- Type `theme` for theme selection
- Type `keyboard` for shortcuts

## Advanced Features

### Command Modes

The Command Palette has different modes based on prefix:

**No Prefix** - Commands
```
Cmd+Shift+P → Format Document
```

**`>` Prefix** - Commands (explicit)
```
Cmd+P → >Format Document
```

**`@` Prefix** - Symbols in file
```
Cmd+P → @functionName
```

**`#` Prefix** - Symbols in workspace
```
Cmd+P → #className
```

**`:` Prefix** - Go to line
```
Cmd+P → :42
```

**`?` Prefix** - Help
```
Cmd+P → ?
```

### Recently Used Commands

- Open Command Palette
- Don't type anything
- See your recent commands at the top
- Quick access to frequent actions

### Command History

- Use `Up/Down` arrows to navigate history
- Previously executed commands appear first
- Faster than typing for repeated actions

## Practical Examples

### Example 1: Change Color Theme

1. Press `Cmd+Shift+P` / `Ctrl+Shift+P`
2. Type `theme`
3. Select "Preferences: Color Theme"
4. Browse themes with arrow keys
5. Press `Enter` to apply

**Shortcut:** `Cmd+K Cmd+T` / `Ctrl+K Ctrl+T`

### Example 2: Format Code

1. Press `Cmd+Shift+P` / `Ctrl+Shift+P`
2. Type `format`
3. Select "Format Document"
4. Code is automatically formatted

**Shortcut:** `Shift+Option+F` / `Shift+Alt+F`

### Example 3: Create New Terminal

1. Press `Cmd+Shift+P` / `Ctrl+Shift+P`
2. Type `terminal new`
3. Select "Terminal: Create New Terminal"
4. New terminal opens in panel

**Shortcut:** `Ctrl+Shift+\`` (backtick)

### Example 4: Change Language Mode

1. Press `Cmd+Shift+P` / `Ctrl+Shift+P`
2. Type `language`
3. Select "Change Language Mode"
4. Choose language (JavaScript, Python, etc.)
5. Syntax highlighting updates

**Shortcut:** Click language in Status Bar

### Example 5: Install Extensions

1. Press `Cmd+Shift+P` / `Ctrl+Shift+P`
2. Type `install extension`
3. Select "Extensions: Install Extensions"
4. Search and install extensions

**Shortcut:** `Cmd+Shift+X` / `Ctrl+Shift+X`

## Tips and Tricks

### Fuzzy Search Mastery

You don't need to type full words:

```
"fodo" → Format Document
"newf" → New File
"gitco" → Git: Commit
"termnew" → Terminal: Create New Terminal
```

### Learn Shortcuts

- Command Palette shows shortcuts on the right
- Use commands first, learn shortcuts later
- Frequent commands are worth memorizing

### Command Chaining

Some commands open additional prompts:
1. "Git: Commit" → Enter commit message
2. "Git: Checkout to..." → Select branch
3. "File: Open File..." → File picker

### Extension Commands

Extensions add their own commands:
- "Prettier: Format Document"
- "ESLint: Fix all auto-fixable Problems"
- "Live Server: Open with Live Server"

Type extension name to see its commands.

## Common Workflows

### Workflow 1: Quick File Setup

```
1. Cmd+Shift+P → "File: New File"
2. Cmd+Shift+P → "Change Language Mode" → Select language
3. Cmd+Shift+P → "Format Document"
4. Cmd+S to save
```

### Workflow 2: Git Operations

```
1. Cmd+Shift+P → "Git: Stage All Changes"
2. Cmd+Shift+P → "Git: Commit"
3. Enter commit message
4. Cmd+Shift+P → "Git: Push"
```

### Workflow 3: Workspace Setup

```
1. Cmd+Shift+P → "Preferences: Color Theme"
2. Cmd+Shift+P → "View: Toggle Side Bar"
3. Cmd+Shift+P → "Terminal: Create New Terminal"
4. Cmd+Shift+P → "View: Split Editor"
```

## Practice Exercise

**Exercise 2.1: Command Palette Mastery**

1. **Open Command Palette** (`Cmd+Shift+P` / `Ctrl+Shift+P`)

2. **Try these searches:**
   - Type `format` and execute "Format Document"
   - Type `theme` and change your color theme
   - Type `terminal` and create a new terminal
   - Type `split` and split your editor

3. **Practice fuzzy search:**
   - Type `fodo` to find "Format Document"
   - Type `newf` to find "New File"
   - Type `savall` to find "Save All"

4. **Explore categories:**
   - Type `git` to see all Git commands
   - Type `view` to see all View commands
   - Type `preferences` to see all Settings commands

5. **Use command history:**
   - Open Command Palette
   - Press `Up` arrow to see recent commands
   - Execute a recent command

## Keyboard Shortcuts to Remember

```
Cmd+Shift+P / Ctrl+Shift+P - Open Command Palette
F1 - Open Command Palette (alternative)
Cmd+P / Ctrl+P - Quick Open (file search)
Cmd+P → > - Command Palette from Quick Open
```

## Troubleshooting

**Problem**: Can't find a command
- **Solution**: Try different keywords or partial words

**Problem**: Too many results
- **Solution**: Be more specific or use category prefix (e.g., "git commit")

**Problem**: Command doesn't work
- **Solution**: Check if required extension is installed

**Problem**: Forgot a command name
- **Solution**: Browse by category or check documentation

## Key Takeaways

- Command Palette provides access to every VS Code command
- Use `Cmd+Shift+P` / `Ctrl+Shift+P` to open it
- Fuzzy search makes finding commands fast
- Keyboard shortcuts are shown for learning
- Recently used commands appear at the top
- Extensions add their own commands
- It's the fastest way to discover features

## Next Steps

Continue to [Module 2.2: Search and Replace](./02-search-replace.md) to learn powerful text manipulation.

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Module 1