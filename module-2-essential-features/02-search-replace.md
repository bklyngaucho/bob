# Module 2.2: Search and Replace

## Overview

VS Code provides powerful search and replace capabilities at multiple levels:
- **Find in File**: Search within the current file
- **Find in Files**: Search across all files in workspace
- **Replace**: Modify found text
- **Regex Support**: Advanced pattern matching

## Find in Current File

### Basic Find

**Open Find:**
```
Cmd+F (Mac) / Ctrl+F (Windows/Linux)
```

**Find Widget appears at top of editor:**
```
┌─────────────────────────────────────┐
│ [search term]  [🔤] [🔤] [.*]      │
│ 1 of 5 results                      │
└─────────────────────────────────────┘
```

### Navigation

```
Enter / F3 - Next match
Shift+Enter / Shift+F3 - Previous match
Cmd+G / F3 - Find next
Cmd+Shift+G / Shift+F3 - Find previous
Esc - Close find widget
```

### Find Options

**Match Case** - `Cmd+Option+C` / `Alt+C`
```
Search: "Hello"
Matches: "Hello" only
Ignores: "hello", "HELLO"
```

**Match Whole Word** - `Cmd+Option+W` / `Alt+W`
```
Search: "code"
Matches: "code" as standalone word
Ignores: "encode", "decode"
```

**Use Regular Expression** - `Cmd+Option+R` / `Alt+R`
```
Search: \d{3}-\d{4}
Matches: "123-4567", "555-1234"
```

### Selection-Based Find

1. Select text in editor
2. Press `Cmd+F` / `Ctrl+F`
3. Selected text appears in find box
4. Navigate through matches

**Quick Tip:** Double-click a word to select it, then `Cmd+F` / `Ctrl+F`

## Replace in Current File

### Basic Replace

**Open Find and Replace:**
```
Cmd+Option+F (Mac) / Ctrl+H (Windows/Linux)
```

**Replace Widget:**
```
┌─────────────────────────────────────┐
│ Find:    [old text]                 │
│ Replace: [new text]                 │
│ [Replace] [Replace All]             │
└─────────────────────────────────────┘
```

### Replace Actions

```
Cmd+Shift+1 / Ctrl+Shift+1 - Replace next
Cmd+Shift+Enter / Ctrl+Shift+Enter - Replace all
```

**Replace Workflow:**
1. Enter find term
2. Enter replace term
3. Review first match
4. Click "Replace" for one, or "Replace All" for all

### Preserve Case

When replacing, VS Code can preserve the case:

```
Find: "hello"
Replace: "goodbye"

Matches:
"hello" → "goodbye"
"Hello" → "Goodbye"
"HELLO" → "GOODBYE"
```

Enable with the `AB` button in replace widget.

## Find in Files (Workspace Search)

### Opening Search View

```
Cmd+Shift+F (Mac) / Ctrl+Shift+F (Windows/Linux)
```

**Search View appears in Side Bar:**
```
┌─────────────────────────────────────┐
│ SEARCH                              │
├─────────────────────────────────────┤
│ [search term]                       │
│ [🔤] [🔤] [.*]                      │
│                                     │
│ files to include: [optional]        │
│ files to exclude: [optional]        │
│                                     │
│ Results:                            │
│ 📄 file1.js (3 matches)            │
│   5: const hello = "world"          │
│   12: // hello again                │
│   20: function hello() {}           │
└─────────────────────────────────────┘
```

### Search Options

**Same as Find in File:**
- Match Case (`Alt+C`)
- Match Whole Word (`Alt+W`)
- Use Regular Expression (`Alt+R`)

**Additional Options:**
- Search only in open editors
- Use exclude settings
- Search in ignored files

### File Filters

**Include Files:**
```
*.js, *.ts          - JavaScript and TypeScript files
src/**/*.js         - All JS files in src directory
**/*.{js,ts}        - All JS and TS files
```

**Exclude Files:**
```
node_modules/**     - Exclude node_modules
**/*.test.js        - Exclude test files
dist/**, build/**   - Exclude build directories
```

**Quick Filters:**
- Click folder icon to search in specific folder
- Right-click file/folder → "Find in Folder"

### Search Results

**Navigate Results:**
- Click result to open file at that location
- Use arrow keys to navigate
- Press `Enter` to open selected result

**Result Actions:**
- Expand/collapse files
- Clear search results
- Refresh search
- Open in editor

**Context Lines:**
- Results show surrounding lines
- Adjust in settings: `search.contextLines`

## Replace in Files

### Opening Replace in Files

1. Open Search view (`Cmd+Shift+F` / `Ctrl+Shift+F`)
2. Click toggle button to show replace field
3. Or use `Cmd+Shift+H` / `Ctrl+Shift+H`

### Replace Workflow

```
┌─────────────────────────────────────┐
│ Find:    [old text]                 │
│ Replace: [new text]                 │
│                                     │
│ 📄 file1.js (2 matches)            │
│   [Replace] 5: const old = "text"   │
│   [Replace] 12: // old comment      │
│                                     │
│ 📄 file2.js (1 match)              │
│   [Replace] 8: function old() {}    │
│                                     │
│ [Replace All]                       │
└─────────────────────────────────────┘
```

**Replace Options:**
- Replace individual matches (click Replace button)
- Replace all in one file (click file's Replace All)
- Replace all in all files (click global Replace All)

**Safety Features:**
- Preview all changes before applying
- Undo with `Cmd+Z` / `Ctrl+Z`
- Changes are saved automatically

## Regular Expressions

### Basic Regex Patterns

**Enable Regex:** Click `.*` button or `Cmd+Option+R` / `Alt+R`

**Common Patterns:**

```
\d          - Any digit (0-9)
\w          - Any word character (a-z, A-Z, 0-9, _)
\s          - Any whitespace
.           - Any character
*           - Zero or more
+           - One or more
?           - Zero or one
^           - Start of line
$           - End of line
```

### Regex Examples

**Find email addresses:**
```
\w+@\w+\.\w+
```

**Find phone numbers:**
```
\d{3}-\d{3}-\d{4}
```

**Find URLs:**
```
https?://[^\s]+
```

**Find TODO comments:**
```
//\s*TODO:.*
```

**Find function declarations:**
```
function\s+\w+\s*\(
```

### Capture Groups

**Using Capture Groups in Replace:**

```
Find: (\w+)\s+(\w+)
Replace: $2 $1

Example:
"John Doe" → "Doe John"
"Hello World" → "World Hello"
```

**Named Capture Groups:**
```
Find: (?<first>\w+)\s+(?<last>\w+)
Replace: $<last>, $<first>

Example:
"John Doe" → "Doe, John"
```

### Advanced Regex

**Lookahead:**
```
\w+(?=\s+world)
Matches: "hello" in "hello world"
```

**Lookbehind:**
```
(?<=hello\s+)\w+
Matches: "world" in "hello world"
```

**Non-capturing group:**
```
(?:https?|ftp)://[^\s]+
Matches URLs with http, https, or ftp
```

## Multi-Cursor Find

### Find All Occurrences

**Select all occurrences of current word:**
```
Cmd+Shift+L (Mac) / Ctrl+Shift+L (Windows/Linux)
```

**Workflow:**
1. Place cursor on word
2. Press `Cmd+Shift+L` / `Ctrl+Shift+L`
3. All occurrences selected with cursors
4. Type to replace all at once

### Add Selection to Next Find Match

```
Cmd+D (Mac) / Ctrl+D (Windows/Linux)
```

**Workflow:**
1. Select text or place cursor on word
2. Press `Cmd+D` / `Ctrl+D` repeatedly
3. Each press adds next occurrence
4. Edit all selections simultaneously

**Skip occurrence:**
```
Cmd+K Cmd+D (Mac) / Ctrl+K Ctrl+D (Windows/Linux)
```

## Search and Replace Tips

### Tip 1: Search in Selection

1. Select text block
2. Open Find (`Cmd+F` / `Ctrl+F`)
3. Click "Find in Selection" button (or `Cmd+Option+L` / `Alt+L`)
4. Search limited to selection

### Tip 2: Case-Preserving Replace

Enable "Preserve Case" (AB button) when replacing:
```
Find: "color"
Replace: "colour"

Results:
"color" → "colour"
"Color" → "Colour"
"COLOR" → "COLOUR"
```

### Tip 3: Search History

- Use `Up/Down` arrows in search box
- Access previous searches
- Faster than retyping

### Tip 4: Search Editor

For complex searches:
```
Cmd+Shift+P → "Search: Open Search Editor"
```

Benefits:
- Save search queries
- Better for large result sets
- Persistent search results

### Tip 5: Exclude Settings

Configure default exclusions:
```
Settings → Search: Exclude
Add patterns like:
- **/node_modules
- **/dist
- **/*.min.js
```

## Practice Exercise

**Exercise 2.2: Search and Replace Mastery**

1. **Create a test file with this content:**
```javascript
const hello = "world";
const Hello = "World";
const HELLO = "WORLD";

function hello() {
  console.log("hello");
}

// TODO: Fix hello function
// hello world example
```

2. **Practice Find:**
   - Find "hello" (case-insensitive)
   - Find "hello" (case-sensitive)
   - Find "hello" (whole word only)

3. **Practice Replace:**
   - Replace "hello" with "goodbye" (preserve case)
   - Replace "world" with "universe"

4. **Practice Regex:**
   - Find all TODO comments: `//\s*TODO:.*`
   - Find all function declarations: `function\s+\w+`
   - Find all console.log statements: `console\.log\(.*\)`

5. **Practice Multi-Cursor:**
   - Select "hello" and press `Cmd+Shift+L` / `Ctrl+Shift+L`
   - Use `Cmd+D` / `Ctrl+D` to select occurrences one by one

6. **Practice Search in Files:**
   - Create multiple files with "hello"
   - Search across all files
   - Replace in multiple files

## Common Use Cases

### Use Case 1: Rename Variable

```
1. Select variable name
2. Cmd+D / Ctrl+D to select all occurrences
3. Type new name
```

### Use Case 2: Update Import Paths

```
Find: from './old-path'
Replace: from './new-path'
Search in: **/*.js
```

### Use Case 3: Remove Console Logs

```
Find: console\.log\(.*\);?\n?
Replace: (leave empty)
Use Regex: enabled
```

### Use Case 4: Format Phone Numbers

```
Find: (\d{3})(\d{3})(\d{4})
Replace: ($1) $2-$3
Result: 5551234567 → (555) 123-4567
```

### Use Case 5: Add Comments

```
Find: ^(.*)$
Replace: // $1
Search in selection: enabled
```

## Keyboard Shortcuts Summary

```
Cmd+F / Ctrl+F - Find in file
Cmd+Option+F / Ctrl+H - Replace in file
Cmd+Shift+F / Ctrl+Shift+F - Find in files
Cmd+Shift+H / Ctrl+Shift+H - Replace in files

Cmd+G / F3 - Find next
Cmd+Shift+G / Shift+F3 - Find previous

Cmd+D / Ctrl+D - Add selection to next find match
Cmd+Shift+L / Ctrl+Shift+L - Select all occurrences

Alt+C - Toggle match case
Alt+W - Toggle match whole word
Alt+R - Toggle regex
```

## Key Takeaways

- Find and Replace work at file and workspace levels
- Regex enables powerful pattern matching
- Multi-cursor editing speeds up repetitive changes
- File filters help narrow search scope
- Preview changes before applying
- Search history saves time
- Case-preserving replace maintains consistency

## Next Steps

Continue to [Module 2.3: Multi-Cursor Editing](./03-multi-cursor.md) to learn advanced editing techniques.

---

**Time to Complete**: ~15 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: Modules 1, 2.1