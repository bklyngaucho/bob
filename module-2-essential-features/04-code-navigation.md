# Module 2.4: Code Navigation

## Overview

Efficient code navigation is essential for productivity. VS Code provides multiple ways to move through your codebase quickly without losing context.

## Basic Navigation

### Line Navigation

**Go to Line:**
```
Cmd+G (Mac) / Ctrl+G (Windows/Linux)
```
- Type line number
- Press Enter to jump
- Useful for error messages that reference line numbers

**Move by Line:**
```
Cmd+Up/Down (Mac) / Ctrl+Home/End (Windows/Linux) - Start/End of file
Cmd+Left/Right (Mac) / Home/End (Windows/Linux) - Start/End of line
```

### Word Navigation

**Move by Word:**
```
Option+Left/Right (Mac) / Ctrl+Left/Right (Windows/Linux)
```

**Select by Word:**
```
Shift+Option+Left/Right (Mac) / Shift+Ctrl+Left/Right (Windows/Linux)
```

**Quick Tip:** Double-click to select a word

### Bracket Navigation

**Jump to Matching Bracket:**
```
Cmd+Shift+\ (Mac) / Ctrl+Shift+\ (Windows/Linux)
```

**Example:**
```javascript
function example() {
  if (condition) {
    // cursor here
  } // jump to here
} // or here
```

### Scroll Navigation

**Scroll Without Moving Cursor:**
```
Cmd+Up/Down (Mac) / Ctrl+Up/Down (Windows/Linux)
```

**Page Up/Down:**
```
Fn+Up/Down (Mac) / PageUp/PageDown (Windows/Linux)
```

## Quick Open Navigation

### Go to File

```
Cmd+P (Mac) / Ctrl+P (Windows/Linux)
```

**Features:**
- Fuzzy search by filename
- Shows recent files first
- Navigate with arrow keys
- Press Enter to open

**Examples:**
```
Type: "indjs" → finds "index.js"
Type: "usutil" → finds "user-utilities.js"
Type: "test/ind" → finds "test/index.js"
```

### Go to Symbol in File

```
Cmd+Shift+O (Mac) / Ctrl+Shift+O (Windows/Linux)
or
Cmd+P → @ (Mac) / Ctrl+P → @ (Windows/Linux)
```

**Shows:**
- Functions
- Classes
- Methods
- Variables
- Constants

**Example:**
```javascript
// File: utils.js
class UserManager {
  constructor() {}
  getUser() {}
  setUser() {}
}

function formatName() {}
const API_KEY = "...";
```

Type `@` to see:
- UserManager
- constructor
- getUser
- setUser
- formatName
- API_KEY

**Group by Type:**
```
Cmd+Shift+O → : (Mac) / Ctrl+Shift+O → : (Windows/Linux)
```
Groups symbols by category (classes, functions, etc.)

### Go to Symbol in Workspace

```
Cmd+T (Mac) / Ctrl+T (Windows/Linux)
or
Cmd+P → # (Mac) / Ctrl+P → # (Windows/Linux)
```

**Search across all files:**
- Find any function, class, or variable
- Shows file location
- Jump directly to definition

**Example:**
```
Type: "#UserManager" → finds class in any file
Type: "#formatDate" → finds function in any file
```

## Definition and References

### Go to Definition

```
F12
or
Cmd+Click (Mac) / Ctrl+Click (Windows/Linux)
```

**Jumps to where symbol is defined:**
```javascript
// File: app.js
import { formatName } from './utils';

formatName(); // F12 here jumps to utils.js
```

**Peek Definition:**
```
Option+F12 (Mac) / Alt+F12 (Windows/Linux)
```
Shows definition in inline popup without leaving current file.

### Go to Type Definition

```
Cmd+Shift+P → "Go to Type Definition"
```

**For TypeScript/JavaScript:**
```typescript
const user: User = getUser();
//           ^ Go to Type Definition shows User interface
```

### Go to Implementation

```
Cmd+F12 (Mac) / Ctrl+F12 (Windows/Linux)
```

**Shows where interface/abstract class is implemented:**
```typescript
interface Animal {
  speak(): void;
}

class Dog implements Animal {
  speak() { console.log("Woof"); }
}
// Go to Implementation on Animal shows Dog
```

### Find All References

```
Shift+F12
```

**Shows all places where symbol is used:**
- Lists all references
- Click to jump to each
- Useful for refactoring

**Example:**
```javascript
function calculateTotal() { }

// Find All References shows:
// - Definition
// - All function calls
// - All imports
```

### Peek References

```
Shift+Option+F12 (Mac) / Shift+Alt+F12 (Windows/Linux)
```

Shows references in inline popup.

## Breadcrumbs Navigation

### What are Breadcrumbs?

Breadcrumbs show your current location in the file structure:

```
📁 src > 📁 components > 📄 Button.tsx > Button > render
```

**Enable/Disable:**
```
View → Show Breadcrumbs
or
Cmd+Shift+. (Mac) / Ctrl+Shift+. (Windows/Linux)
```

### Using Breadcrumbs

**Click any segment:**
- Shows dropdown with siblings
- Navigate to related files/symbols
- Quick context switching

**Keyboard Navigation:**
```
Cmd+Shift+. (Mac) / Ctrl+Shift+. (Windows/Linux) - Focus breadcrumbs
Arrow keys - Navigate
Enter - Select
Esc - Return to editor
```

## Navigation History

### Go Back/Forward

```
Cmd+- (Mac) / Ctrl+- (Windows/Linux) - Go back
Cmd+Shift+- (Mac) / Ctrl+Shift+- (Windows/Linux) - Go forward
```

**Navigation history includes:**
- File switches
- Definition jumps
- Search results
- Cursor position changes

**Example Workflow:**
1. Working in `app.js`
2. Jump to definition in `utils.js` (F12)
3. Jump to another definition in `helpers.js`
4. Press `Cmd+-` twice to return to `app.js`

### Navigate Between Editors

```
Cmd+Option+Left/Right (Mac) / Ctrl+PageUp/PageDown (Windows/Linux)
```

Cycles through open editor tabs.

### Navigate to Last Edit Location

```
Cmd+K Cmd+Q (Mac) / Ctrl+K Ctrl+Q (Windows/Linux)
```

Jumps to where you last made changes.

## Outline View

### Opening Outline

**In Explorer sidebar:**
- Expand "Outline" section
- Shows file structure

**Features:**
- Hierarchical view of symbols
- Click to jump to symbol
- Filter by typing
- Follow cursor (auto-highlights current symbol)

### Outline Shortcuts

```
Cmd+Shift+O (Mac) / Ctrl+Shift+O (Windows/Linux) - Quick outline
```

Faster than using sidebar for quick navigation.

## Folding and Unfolding

### Code Folding

**Fold/Unfold:**
```
Cmd+Option+[ (Mac) / Ctrl+Shift+[ (Windows/Linux) - Fold
Cmd+Option+] (Mac) / Ctrl+Shift+] (Windows/Linux) - Unfold
```

**Fold All:**
```
Cmd+K Cmd+0 (Mac) / Ctrl+K Ctrl+0 (Windows/Linux)
```

**Unfold All:**
```
Cmd+K Cmd+J (Mac) / Ctrl+K Ctrl+J (Windows/Linux)
```

**Fold Level:**
```
Cmd+K Cmd+1 (Mac) / Ctrl+K Ctrl+1 (Windows/Linux) - Fold level 1
Cmd+K Cmd+2 (Mac) / Ctrl+K Ctrl+2 (Windows/Linux) - Fold level 2
...and so on
```

**Use Cases:**
- Hide implementation details
- Focus on structure
- Navigate large files
- Present code

### Folding Regions

**Create custom fold regions:**

```javascript
// #region User Management
function getUser() { }
function setUser() { }
// #endregion

// #region Data Processing
function processData() { }
// #endregion
```

Click fold icon to collapse regions.

## Minimap Navigation

### What is the Minimap?

The minimap shows a bird's-eye view of your file on the right side of the editor.

**Features:**
- Visual overview of code
- Click to jump to location
- Highlights current viewport
- Shows git changes
- Shows search matches

**Toggle Minimap:**
```
View → Show Minimap
```

**Minimap Settings:**
- Size: Small, Medium, Large
- Show slider: Always, On hover
- Render characters: On/Off

## Sticky Scroll

### What is Sticky Scroll?

Sticky Scroll keeps context visible by showing parent scopes at the top:

```
┌─────────────────────────────────┐
│ class UserManager {             │ ← Sticky
│   getUserById(id) {             │ ← Sticky
├─────────────────────────────────┤
│     const user = db.find(id);   │
│     return user;                │
│   }                             │
└─────────────────────────────────┘
```

**Enable:**
```
Settings → Editor: Sticky Scroll → Enabled
```

**Benefits:**
- Never lose context in long functions
- See current class/function
- Navigate nested structures

## Practical Navigation Workflows

### Workflow 1: Exploring New Codebase

```
1. Cmd+P → Open main file
2. Cmd+Shift+O → View file structure
3. F12 on imports → Explore dependencies
4. Cmd+- → Navigate back
5. Shift+F12 → Find usage examples
```

### Workflow 2: Debugging

```
1. Set breakpoint
2. F12 → Go to function definition
3. Shift+F12 → Find all calls
4. Cmd+- → Return to breakpoint
5. Step through with debugger
```

### Workflow 3: Refactoring

```
1. Select symbol
2. Shift+F12 → Find all references
3. Review each usage
4. F2 → Rename symbol
5. Verify changes
```

### Workflow 4: Code Review

```
1. Cmd+Shift+O → View file structure
2. Fold all (Cmd+K Cmd+0)
3. Unfold sections to review
4. Use breadcrumbs for context
5. Cmd+- to navigate back
```

## Practice Exercise

**Exercise 2.4: Navigation Mastery**

1. **Create a sample project:**

```javascript
// File: app.js
import { formatName, calculateAge } from './utils';
import { User } from './models';

class App {
  constructor() {
    this.users = [];
  }
  
  addUser(name, birthYear) {
    const user = new User(
      formatName(name),
      calculateAge(birthYear)
    );
    this.users.push(user);
  }
  
  getUsers() {
    return this.users;
  }
}

export default App;
```

```javascript
// File: utils.js
export function formatName(name) {
  return name.trim().toLowerCase();
}

export function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}
```

```javascript
// File: models.js
export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  toString() {
    return `${this.name} (${this.age})`;
  }
}
```

2. **Practice navigation:**
   - Use `Cmd+P` / `Ctrl+P` to switch between files
   - Use `Cmd+Shift+O` / `Ctrl+Shift+O` to view symbols
   - Use F12 to jump to definitions
   - Use `Shift+F12` to find references
   - Use `Cmd+-` / `Ctrl+-` to navigate back

3. **Practice breadcrumbs:**
   - Enable breadcrumbs
   - Click segments to explore
   - Use keyboard to navigate

4. **Practice folding:**
   - Fold all methods
   - Unfold one at a time
   - Create custom regions

## Tips and Best Practices

### Tip 1: Learn Keyboard Shortcuts

Most used navigation shortcuts:
```
Cmd+P / Ctrl+P - Quick Open
F12 - Go to Definition
Shift+F12 - Find References
Cmd+- / Ctrl+- - Go Back
Cmd+Shift+O / Ctrl+Shift+O - Go to Symbol
```

### Tip 2: Use Peek for Quick Looks

Peek commands show information without leaving context:
- `Option+F12` / `Alt+F12` - Peek Definition
- `Shift+Option+F12` / `Shift+Alt+F12` - Peek References

### Tip 3: Combine Navigation Methods

Example: Finding implementation
1. `Cmd+P` → Find file
2. `Cmd+Shift+O` → Find symbol
3. F12 → Go to definition
4. `Shift+F12` → Find usage

### Tip 4: Use Breadcrumbs for Context

When deep in nested code:
- Check breadcrumbs for location
- Click to see siblings
- Navigate without scrolling

### Tip 5: Customize Navigation

Settings to adjust:
- `editor.gotoLocation.multipleDefinitions` - How to handle multiple definitions
- `editor.gotoLocation.multipleReferences` - How to handle multiple references
- `breadcrumbs.enabled` - Enable/disable breadcrumbs

## Keyboard Shortcuts Summary

```
Cmd+P / Ctrl+P - Quick Open
Cmd+Shift+O / Ctrl+Shift+O - Go to Symbol in File
Cmd+T / Ctrl+T - Go to Symbol in Workspace
Cmd+G / Ctrl+G - Go to Line

F12 - Go to Definition
Option+F12 / Alt+F12 - Peek Definition
Shift+F12 - Find All References
Cmd+F12 / Ctrl+F12 - Go to Implementation

Cmd+- / Ctrl+- - Go Back
Cmd+Shift+- / Ctrl+Shift+- - Go Forward

Cmd+Shift+\ / Ctrl+Shift+\ - Go to Bracket
Cmd+Shift+. / Ctrl+Shift+. - Focus Breadcrumbs

Cmd+Option+[ / Ctrl+Shift+[ - Fold
Cmd+Option+] / Ctrl+Shift+] - Unfold
Cmd+K Cmd+0 / Ctrl+K Ctrl+0 - Fold All
Cmd+K Cmd+J / Ctrl+K Ctrl+J - Unfold All
```

## Key Takeaways

- Quick Open (`Cmd+P`) is the fastest way to navigate files
- F12 jumps to definitions instantly
- Breadcrumbs provide context and quick navigation
- Navigation history (`Cmd+-`) lets you retrace steps
- Peek commands show information without context switching
- Folding helps manage large files
- Symbol navigation works across entire workspace
- Combine methods for efficient workflows

## Next Steps

Congratulations! You've completed Module 2: Essential Features.

Continue to [Module 3: Workspace Management](../module-3-workspace/01-workspaces.md) to learn about organizing your projects.

---

**Time to Complete**: ~15 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: Modules 1, 2.1-2.3