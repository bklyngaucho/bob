# Module 1.3: Opening and Managing Files

## Opening Files and Folders

### Opening a Single File
```
File → Open File... (Cmd+O / Ctrl+O)
```
- Opens a file picker dialog
- Select any file to open in the editor
- File opens in a new tab

### Opening a Folder (Workspace)
```
File → Open Folder... (Cmd+O / Ctrl+O on folder)
```
- Opens an entire folder as a workspace
- Shows folder structure in Explorer
- Enables workspace-specific features
- **Best Practice**: Always open the project root folder

### Opening Recent Items
```
File → Open Recent (Cmd+R / Ctrl+R)
```
- Quick access to recently opened files and folders
- Shows both files and workspaces
- Clear recent list option available

## The Explorer View

Access with `Cmd+Shift+E` / `Ctrl+Shift+E`

### File Tree Navigation

```
📁 my-project/
├── 📁 src/
│   ├── 📄 index.js
│   └── 📄 utils.js
├── 📁 tests/
│   └── 📄 test.js
├── 📄 package.json
└── 📄 README.md
```

### Explorer Actions

**Right-click on files/folders** for context menu:
- New File
- New Folder
- Rename
- Delete
- Copy/Cut/Paste
- Copy Path
- Copy Relative Path
- Reveal in Finder/Explorer

### Keyboard Shortcuts in Explorer
```
Enter - Open file
Cmd+Down / Ctrl+Down - Open file
Space - Preview file (doesn't open tab)
Cmd+N / Ctrl+N - New file
Cmd+Shift+N / Ctrl+Shift+N - New folder
F2 - Rename
Delete - Move to trash
```

## Quick Open (Cmd+P / Ctrl+P)

The most powerful file navigation feature!

### Basic Usage
```
Cmd+P / Ctrl+P - Open Quick Open
```
- Type filename to search
- Fuzzy matching (e.g., "indjs" finds "index.js")
- Navigate with arrow keys
- Press Enter to open

### Quick Open Modes

**Go to Symbol** - `@`
```
Cmd+P → @functionName
```
Lists all symbols (functions, classes) in current file

**Go to Symbol in Workspace** - `#`
```
Cmd+P → #functionName
```
Search symbols across all files

**Go to Line** - `:`
```
Cmd+P → :42
```
Jump to specific line number

**Run Command** - `>`
```
Cmd+P → >command
```
Access Command Palette (same as Cmd+Shift+P)

### Quick Open Tips

**Recent Files**
- Just press `Cmd+P` / `Ctrl+P` without typing
- Shows recently opened files
- Navigate with arrows

**Fuzzy Search Examples**
- `indjs` → finds `index.js`
- `usutil` → finds `user-utilities.js`
- `test/ind` → finds `test/index.js`

## Working with Tabs

### Tab Management

**Opening Files**
- Single click in Explorer: Preview (italic tab name)
- Double click in Explorer: Permanent tab
- `Cmd+P` / `Ctrl+P` + Enter: Permanent tab

**Closing Tabs**
```
Cmd+W / Ctrl+W - Close current tab
Cmd+K W / Ctrl+K W - Close all tabs
Cmd+K Cmd+W / Ctrl+K Ctrl+W - Close other tabs
```

**Navigating Tabs**
```
Cmd+1,2,3... / Ctrl+1,2,3... - Go to tab by number
Cmd+Option+Left/Right / Ctrl+PageUp/PageDown - Previous/Next tab
Cmd+Tab / Ctrl+Tab - Switch between recent tabs
```

### Tab Groups

**Split Editor**
```
Cmd+\ / Ctrl+\ - Split editor
```
- Creates side-by-side editors
- Each group has its own tabs
- Drag tabs between groups

**Managing Groups**
```
Cmd+1,2,3 / Ctrl+1,2,3 - Focus editor group
Cmd+K Left/Right / Ctrl+K Left/Right - Move editor to group
```

## File Operations

### Creating Files

**Method 1: Explorer**
1. Right-click in Explorer
2. Select "New File"
3. Type filename and press Enter

**Method 2: Command Palette**
```
Cmd+Shift+P / Ctrl+Shift+P → "File: New File"
```

**Method 3: Keyboard**
```
Cmd+N / Ctrl+N - New untitled file
```

### Saving Files

```
Cmd+S / Ctrl+S - Save current file
Cmd+Option+S / Ctrl+K S - Save without formatting
Cmd+K S / Ctrl+K S - Save all files
```

**Auto Save**
```
File → Auto Save (toggle)
```
Options:
- `off` - Manual save only
- `afterDelay` - Save after typing stops (default: 1000ms)
- `onFocusChange` - Save when switching files
- `onWindowChange` - Save when switching windows

### Renaming Files

**Method 1: Explorer**
1. Right-click file
2. Select "Rename"
3. Type new name

**Method 2: Keyboard**
```
F2 - Rename selected file
```

**Smart Rename**
- VS Code updates imports automatically
- Works for JavaScript, TypeScript, and more
- Confirms changes before applying

### Deleting Files

```
Delete / Backspace - Move to trash
Cmd+Delete / Shift+Delete - Permanent delete (with confirmation)
```

**Undo Delete**
- Check your system trash/recycle bin
- VS Code doesn't have built-in undo for deletes

## File Search

### Search in Files (Cmd+Shift+F / Ctrl+Shift+F)

**Basic Search**
1. Open Search view
2. Type search term
3. View results grouped by file
4. Click result to open file at that location

**Search Options**
- 🔤 **Match Case** (Cmd+Option+C / Alt+C)
- 🔤 **Match Whole Word** (Cmd+Option+W / Alt+W)
- 🔍 **Use Regular Expression** (Cmd+Option+R / Alt+R)

**Advanced Filters**
```
files to include: *.js, *.ts
files to exclude: node_modules/**, *.test.js
```

### Find in Current File (Cmd+F / Ctrl+F)

```
Cmd+F / Ctrl+F - Find
Cmd+Option+F / Ctrl+H - Find and Replace
```

**Navigation**
```
Enter / F3 - Next match
Shift+Enter / Shift+F3 - Previous match
Cmd+G / F3 - Find next
Cmd+Shift+G / Shift+F3 - Find previous
```

## Working with Multiple Files

### Compare Files

**Method 1: Context Menu**
1. Right-click first file → "Select for Compare"
2. Right-click second file → "Compare with Selected"

**Method 2: Command Palette**
```
Cmd+Shift+P / Ctrl+Shift+P → "File: Compare Active File With..."
```

**Diff View Features**
- Side-by-side comparison
- Inline changes highlighted
- Navigate changes with F7/Shift+F7
- Copy changes between files

### Copy/Move Files

**Copy**
1. Right-click file → "Copy"
2. Right-click destination → "Paste"

**Move**
1. Drag file to new location
2. Or: Cut (Cmd+X / Ctrl+X) → Paste (Cmd+V / Ctrl+V)

**Duplicate**
1. Right-click file → "Copy"
2. Right-click same folder → "Paste"
3. Rename the copy

## File Encoding and Line Endings

### View Current Settings
Check the Status Bar (bottom right):
- **UTF-8** - File encoding
- **LF** or **CRLF** - Line endings

### Change Encoding
1. Click encoding in Status Bar
2. Select "Save with Encoding"
3. Choose encoding (UTF-8, UTF-16, etc.)

### Change Line Endings
1. Click line ending in Status Bar (LF/CRLF)
2. Select desired format:
   - **LF** - Unix/Mac (recommended)
   - **CRLF** - Windows

## Practice Exercise

**Exercise 1.3: File Management**

1. **Create a project structure:**
   ```
   my-first-project/
   ├── src/
   │   └── index.js
   ├── tests/
   │   └── test.js
   └── README.md
   ```

2. **Practice navigation:**
   - Use `Cmd+P` / `Ctrl+P` to open `index.js`
   - Use `Cmd+Shift+E` / `Ctrl+Shift+E` to return to Explorer
   - Open `README.md` in a split editor

3. **File operations:**
   - Create a new file `config.json`
   - Rename `test.js` to `index.test.js`
   - Copy `index.js` to create `utils.js`

4. **Search practice:**
   - Add some text to your files
   - Use `Cmd+Shift+F` / `Ctrl+Shift+F` to search across files
   - Use `Cmd+F` / `Ctrl+F` to find within a file

## Best Practices

### ✅ Do's
- Open the project root folder, not individual files
- Use Quick Open (`Cmd+P`) for fast navigation
- Enable Auto Save for convenience
- Use split editors for comparing files
- Keep related files in logical folder structures

### ❌ Don'ts
- Don't open too many tabs (use Quick Open instead)
- Don't manually type full file paths
- Don't forget to save before closing (unless Auto Save is on)
- Don't delete files without checking dependencies

## Troubleshooting

**Problem**: Can't find a file
- **Solution**: Use `Cmd+P` / `Ctrl+P` with fuzzy search

**Problem**: Too many tabs open
- **Solution**: Close all tabs (`Cmd+K W`) and use Quick Open

**Problem**: File changes not showing
- **Solution**: Check if file is saved (dot in tab means unsaved)

**Problem**: Can't see file in Explorer
- **Solution**: Refresh Explorer or check if folder is collapsed

## Key Takeaways

- Open folders, not individual files, for full features
- Quick Open (`Cmd+P`) is the fastest way to navigate
- Preview vs. permanent tabs (single vs. double click)
- Use split editors for side-by-side viewing
- Search across files with `Cmd+Shift+F` / `Ctrl+Shift+F`
- Auto Save prevents losing work
- File operations update imports automatically

## Next Steps

Congratulations! You've completed Module 1: Getting Started.

Continue to [Module 2: Essential Features](../module-2-essential-features/01-command-palette.md) to learn powerful editing capabilities.

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Modules 1.1, 1.2