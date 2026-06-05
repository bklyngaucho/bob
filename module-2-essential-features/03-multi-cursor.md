# Module 2.3: Multi-Cursor Editing

## What is Multi-Cursor Editing?

Multi-cursor editing allows you to edit multiple locations simultaneously. Instead of making the same change repeatedly, you can:
- Place multiple cursors
- Edit all locations at once
- Dramatically speed up repetitive tasks

This is one of VS Code's most powerful productivity features.

## Basic Multi-Cursor Operations

### Add Cursor Above/Below

```
Cmd+Option+Up (Mac) / Ctrl+Alt+Up (Windows/Linux) - Add cursor above
Cmd+Option+Down (Mac) / Ctrl+Alt+Down (Windows/Linux) - Add cursor below
```

**Example:**
```javascript
const name = "John";
const age = 30;
const city = "NYC";
```

1. Place cursor at start of first line
2. Press `Cmd+Option+Down` twice (Mac) or `Ctrl+Alt+Down` (Windows)
3. Now you have 3 cursors
4. Type `let ` to change all to `let`

### Add Cursor with Mouse

```
Option+Click (Mac) / Alt+Click (Windows/Linux)
```

**Workflow:**
1. Hold `Option` / `Alt`
2. Click where you want cursors
3. Release and type

**Use Case:** Add cursors at irregular positions

### Select All Occurrences

```
Cmd+Shift+L (Mac) / Ctrl+Shift+L (Windows/Linux)
```

**Workflow:**
1. Select text or place cursor on word
2. Press `Cmd+Shift+L` / `Ctrl+Shift+L`
3. All occurrences selected with cursors
4. Type to edit all simultaneously

**Example:**
```javascript
const user = "John";
console.log(user);
return user;
```
Select "user" → `Cmd+Shift+L` → Type "person" → All changed!

### Add Next Occurrence

```
Cmd+D (Mac) / Ctrl+D (Windows/Linux)
```

**Workflow:**
1. Select text or place cursor on word
2. Press `Cmd+D` / `Ctrl+D` to add next occurrence
3. Repeat to add more
4. Edit all selections

**Skip an occurrence:**
```
Cmd+K Cmd+D (Mac) / Ctrl+K Ctrl+D (Windows/Linux)
```

**Example:**
```javascript
const color = "red";
const color = "blue";
const color = "green";
const color = "yellow";
```
1. Select first "color"
2. Press `Cmd+D` three times
3. Type "colour" to change all

## Column (Box) Selection

### Create Column Selection

```
Shift+Option+Drag (Mac) / Shift+Alt+Drag (Windows/Linux)
```

**Or with keyboard:**
```
Cmd+Shift+Option+Arrow Keys (Mac)
Ctrl+Shift+Alt+Arrow Keys (Windows/Linux)
```

**Example:**
```
John    Doe      30
Jane    Smith    25
Bob     Johnson  35
```

1. Place cursor before "Doe"
2. Hold `Shift+Option` / `Shift+Alt`
3. Drag down to select column
4. Type to edit column

### Column Selection Mode

Toggle column selection mode:
```
Cmd+Shift+P → "Toggle Column Selection Mode"
```

When enabled:
- Regular selection becomes column selection
- Useful for editing tables or aligned text

## Advanced Multi-Cursor Techniques

### Technique 1: Insert at Line Ends

**Goal:** Add semicolons to multiple lines

```javascript
const a = 1
const b = 2
const c = 3
```

**Method:**
1. Select all three lines
2. `Cmd+Shift+L` / `Ctrl+Shift+L` (cursor at each line)
3. Press `End` to move to line ends
4. Type `;`

**Result:**
```javascript
const a = 1;
const b = 2;
const c = 3;
```

### Technique 2: Insert at Line Starts

**Goal:** Comment multiple lines

```javascript
const a = 1;
const b = 2;
const c = 3;
```

**Method:**
1. Select all three lines
2. `Cmd+Shift+L` / `Ctrl+Shift+L`
3. Press `Home` to move to line starts
4. Type `// `

**Result:**
```javascript
// const a = 1;
// const b = 2;
// const c = 3;
```

**Note:** VS Code has built-in comment toggle: `Cmd+/` / `Ctrl+/`

### Technique 3: Transform Text

**Goal:** Convert to uppercase

```javascript
const firstName = "john";
const lastName = "doe";
```

**Method:**
1. Select "john"
2. `Cmd+D` / `Ctrl+D` to select "doe"
3. `Cmd+Shift+P` → "Transform to Uppercase"

**Result:**
```javascript
const firstName = "JOHN";
const lastName = "DOE";
```

### Technique 4: Wrap with Quotes

**Goal:** Add quotes around words

```
apple
banana
cherry
```

**Method:**
1. Place cursor before "apple"
2. `Cmd+Option+Down` twice / `Ctrl+Alt+Down` twice
3. Type `"`
4. Press `End`
5. Type `"`

**Result:**
```
"apple"
"banana"
"cherry"
```

### Technique 5: Number Sequences

**Goal:** Create numbered list

```
Item
Item
Item
```

**Method:**
1. Select all "Item" words
2. `Cmd+Shift+L` / `Ctrl+Shift+L`
3. Press `Home`
4. Use extension like "Increment Selection" or manually type numbers

**Result:**
```
1. Item
2. Item
3. Item
```

## Practical Examples

### Example 1: Rename Variables

**Before:**
```javascript
const oldName = "value";
function process(oldName) {
  console.log(oldName);
  return oldName.toUpperCase();
}
```

**Steps:**
1. Select "oldName"
2. `Cmd+Shift+L` / `Ctrl+Shift+L`
3. Type "newName"

**After:**
```javascript
const newName = "value";
function process(newName) {
  console.log(newName);
  return newName.toUpperCase();
}
```

### Example 2: Format Data

**Before:**
```
John,Doe,30
Jane,Smith,25
Bob,Johnson,35
```

**Goal:** Convert to object format

**Steps:**
1. Place cursor before "John"
2. `Cmd+Option+Down` twice / `Ctrl+Alt+Down` twice
3. Type `{ name: "`
4. Press `Cmd+Right` / `Ctrl+Right` to move to comma
5. Type `", age: `
6. Move to end and type ` }`

**After:**
```
{ name: "John", age: 30 }
{ name: "Jane", age: 25 }
{ name: "Bob", age: 35 }
```

### Example 3: Add Import Statements

**Before:**
```javascript
Component
Button
Input
```

**Steps:**
1. Place cursor before "Component"
2. `Cmd+Option+Down` twice / `Ctrl+Alt+Down` twice
3. Type `import { `
4. Press `End`
5. Type ` } from './components';`

**After:**
```javascript
import { Component } from './components';
import { Button } from './components';
import { Input } from './components';
```

### Example 4: Create Test Cases

**Before:**
```
login
logout
register
```

**Steps:**
1. Select all words
2. `Cmd+Shift+L` / `Ctrl+Shift+L`
3. Press `Home`
4. Type `test('`
5. Press `End`
6. Type `', () => {});`

**After:**
```
test('login', () => {});
test('logout', () => {});
test('register', () => {});
```

### Example 5: Format JSON Keys

**Before:**
```json
{
  name: "John",
  age: 30,
  city: "NYC"
}
```

**Steps:**
1. Select "name"
2. `Cmd+D` / `Ctrl+D` twice to select "age" and "city"
3. Type `"`
4. Press `Cmd+Right` / `Ctrl+Right`
5. Type `"`

**After:**
```json
{
  "name": "John",
  "age": 30,
  "city": "NYC"
}
```

## Multi-Cursor with Find

### Find and Edit All

**Scenario:** Change all instances of a word

```
Cmd+F / Ctrl+F → Type word → Cmd+Shift+L / Ctrl+Shift+L
```

This selects all matches with cursors, ready to edit.

### Find and Edit Selectively

**Scenario:** Change some instances

```
Cmd+F / Ctrl+F → Type word → Cmd+D / Ctrl+D repeatedly
```

Add cursors only where needed, skip others with `Cmd+K Cmd+D` / `Ctrl+K Ctrl+D`.

## Tips and Best Practices

### Tip 1: Undo Multi-Cursor Edits

```
Cmd+Z / Ctrl+Z - Undo all cursor edits at once
```

All changes from multi-cursor editing are treated as one action.

### Tip 2: Escape Multi-Cursor Mode

```
Esc - Return to single cursor
```

Press `Esc` to exit multi-cursor mode and return to normal editing.

### Tip 3: Combine with Selection

1. Select text block
2. Add cursors within selection
3. Edit only selected area

### Tip 4: Use with Snippets

Multi-cursors work with snippets:
1. Place multiple cursors
2. Type snippet prefix
3. Press `Tab`
4. Snippet expands at all cursors

### Tip 5: Preview Before Committing

- Add cursors
- Look at all positions
- Press `Esc` if not right
- Try again

## Common Pitfalls

### Pitfall 1: Too Many Cursors

**Problem:** Selected too many occurrences

**Solution:** 
- Press `Esc` and start over
- Or use `Cmd+U` / `Ctrl+U` to undo last cursor addition

### Pitfall 2: Cursors Not Aligned

**Problem:** Cursors at different positions

**Solution:**
- Use `Home` or `End` to align
- Or use column selection for perfect alignment

### Pitfall 3: Accidental Edits

**Problem:** Edited wrong locations

**Solution:**
- `Cmd+Z` / `Ctrl+Z` undoes all changes
- Be careful with `Cmd+Shift+L` / `Ctrl+Shift+L` on common words

## Practice Exercise

**Exercise 2.3: Multi-Cursor Mastery**

1. **Create a test file:**
```javascript
const user = "John";
const user = "Jane";
const user = "Bob";

function greet(user) {
  console.log("Hello, " + user);
}
```

2. **Practice basic multi-cursor:**
   - Add cursors above/below
   - Click with Option/Alt to add cursors
   - Select all "user" occurrences

3. **Practice selective selection:**
   - Select first "user"
   - Use `Cmd+D` / `Ctrl+D` to add next
   - Skip one with `Cmd+K Cmd+D` / `Ctrl+K Ctrl+D`

4. **Practice column selection:**
   - Create a table:
   ```
   Name    Age    City
   John    30     NYC
   Jane    25     LA
   ```
   - Select the Age column
   - Edit all ages at once

5. **Practice transformations:**
   - Create list of words
   - Add quotes around each
   - Add commas at end
   - Wrap in array brackets

## Keyboard Shortcuts Summary

```
Cmd+Option+Up/Down / Ctrl+Alt+Up/Down - Add cursor above/below
Option+Click / Alt+Click - Add cursor at click
Cmd+D / Ctrl+D - Add next occurrence
Cmd+Shift+L / Ctrl+Shift+L - Select all occurrences
Cmd+K Cmd+D / Ctrl+K Ctrl+D - Skip occurrence
Shift+Option+Drag / Shift+Alt+Drag - Column selection
Cmd+U / Ctrl+U - Undo last cursor
Esc - Exit multi-cursor mode
```

## Key Takeaways

- Multi-cursor editing speeds up repetitive tasks
- Add cursors above/below, by clicking, or by selection
- Select all occurrences or add selectively
- Column selection for aligned text
- Combine with find for powerful editing
- Undo works on all cursors at once
- Practice makes perfect - start with simple tasks

## Next Steps

Continue to [Module 2.4: Code Navigation](./04-code-navigation.md) to learn efficient code browsing.

---

**Time to Complete**: ~15 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: Modules 1, 2.1, 2.2