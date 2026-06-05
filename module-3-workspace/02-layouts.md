# Module 3.2: Split Editors and Layouts

## Overview

VS Code's flexible layout system lets you view and edit multiple files simultaneously. Master layouts to boost productivity and maintain context while coding.

## Split Editor Basics

### Creating Split Editors

**Split Editor Right:**
```
Cmd+\ (Mac) / Ctrl+\ (Windows/Linux)
```

**Split Editor Down:**
```
Cmd+K Cmd+\ (Mac) / Ctrl+K Ctrl+\ (Windows/Linux)
```

**Via Menu:**
```
View → Editor Layout → Split Right/Down
```

**Via Drag:**
- Drag tab to side/bottom of editor
- Drop when split indicator appears

### Editor Groups

When you split, you create **Editor Groups**:

```
┌─────────────┬─────────────┐
│   Group 1   │   Group 2   │
│             │             │
│  file1.js   │  file2.js   │
│             │             │
└─────────────┴─────────────┘
```

Each group:
- Has its own tabs
- Can be split further
- Can be resized
- Can be closed independently

## Navigating Between Groups

### Focus Editor Group

```
Cmd+1, 2, 3... (Mac) / Ctrl+1, 2, 3... (Windows/Linux)
```

**Example:**
- `Cmd+1` / `Ctrl+1` - Focus first group
- `Cmd+2` / `Ctrl+2` - Focus second group
- `Cmd+3` / `Ctrl+3` - Focus third group

### Move Between Groups

```
Cmd+K Cmd+Left/Right (Mac) / Ctrl+K Ctrl+Left/Right (Windows/Linux)
```

Cycles through editor groups.

### Move Editor to Group

**Keyboard:**
```
Cmd+Option+Left/Right (Mac) / Ctrl+Alt+Left/Right (Windows/Linux)
```

**Mouse:**
- Drag tab to target group
- Drop on group to add

**Command Palette:**
```
Cmd+Shift+P → "View: Move Editor into [Direction] Group"
```

## Layout Configurations

### Two Columns

```
┌─────────────┬─────────────┐
│   Group 1   │   Group 2   │
│             │             │
│  file1.js   │  file2.js   │
│             │             │
└─────────────┴─────────────┘
```

**Use for:**
- Comparing files
- Reference + implementation
- Test + code

### Three Columns

```
┌──────┬──────┬──────┐
│  G1  │  G2  │  G3  │
│      │      │      │
│ f1.js│ f2.js│ f3.js│
│      │      │      │
└──────┴──────┴──────┘
```

**Use for:**
- Model + View + Controller
- Multiple file comparison
- Documentation + code + tests

### Two Rows

```
┌─────────────────────┐
│      Group 1        │
│      file1.js       │
├─────────────────────┤
│      Group 2        │
│      file2.js       │
└─────────────────────┘
```

**Use for:**
- Header + implementation
- Component + styles
- Long files side-by-side

### Grid Layout

```
┌──────────┬──────────┐
│   G1     │    G2    │
│ file1.js │ file2.js │
├──────────┴──────────┤
│        G3           │
│      file3.js       │
└─────────────────────┘
```

**Use for:**
- Complex multi-file editing
- Dashboard-style layout
- Multiple contexts

## Quick Layout Commands

### Predefined Layouts

**Single Column:**
```
Cmd+Shift+P → "View: Single Column Editor Layout"
```

**Two Columns:**
```
Cmd+Shift+P → "View: Two Columns Editor Layout"
```

**Three Columns:**
```
Cmd+Shift+P → "View: Three Columns Editor Layout"
```

**Two Rows:**
```
Cmd+Shift+P → "View: Two Rows Editor Layout"
```

**Grid (2x2):**
```
Cmd+Shift+P → "View: Grid Editor Layout (2x2)"
```

### Toggle Layout

**Toggle Editor Group Layout:**
```
Cmd+Shift+P → "View: Toggle Editor Group Layout"
```

Switches between horizontal and vertical splits.

## Resizing Editor Groups

### Mouse Resize

- Hover over divider between groups
- Cursor changes to resize icon
- Drag to resize

### Keyboard Resize

**Increase/Decrease Width:**
```
Cmd+K Cmd+Left/Right (Mac) / Ctrl+K Ctrl+Left/Right (Windows/Linux)
```

**Reset Sizes:**
```
Cmd+Shift+P → "View: Reset Editor Group Sizes"
```

### Equal Sizes

All groups automatically resize to equal sizes when:
- Adding new group
- Closing a group
- Using reset command

## Working with Tabs in Groups

### Opening Files in Specific Group

**Method 1: Focus then Open**
1. Focus target group (`Cmd+1,2,3`)
2. Open file (`Cmd+P`)

**Method 2: Drag and Drop**
- Drag file from Explorer
- Drop on target group

**Method 3: Context Menu**
- Right-click file in Explorer
- "Open to the Side"

### Moving Tabs Between Groups

**Drag and Drop:**
- Drag tab to target group
- Drop to move

**Keyboard:**
```
Cmd+Option+Left/Right (Mac) / Ctrl+Alt+Left/Right (Windows/Linux)
```

**Command:**
```
Cmd+Shift+P → "View: Move Editor into [Direction] Group"
```

### Closing Groups

**Close All Editors in Group:**
```
Cmd+K W (Mac) / Ctrl+K W (Windows/Linux)
```

**Close Group:**
- Close all tabs in group
- Group automatically closes

## Split Editor Features

### Side-by-Side Editing

**Same File in Multiple Groups:**
1. Open file
2. Split editor (`Cmd+\`)
3. Same file appears in both groups
4. Edit in one, see changes in other

**Use Cases:**
- Edit top and bottom of long file
- Compare different sections
- Reference while editing

### Synchronized Scrolling

**Enable:**
```
View → Toggle Locked Scrolling
```

When enabled:
- Scrolling in one group scrolls others
- Useful for comparing files
- Works with same or different files

### Diff View

**Compare Files:**
1. Right-click first file → "Select for Compare"
2. Right-click second file → "Compare with Selected"

**Diff View Features:**
- Side-by-side comparison
- Inline changes highlighted
- Navigate changes (F7/Shift+F7)
- Copy changes between files

## Advanced Layout Techniques

### Technique 1: Reference Layout

```
┌──────────────┬─────────┐
│              │         │
│   Main Code  │  Docs   │
│   (Large)    │ (Small) │
│              │         │
└──────────────┴─────────┘
```

**Setup:**
1. Split editor right
2. Resize: Make left larger
3. Open code in left, docs in right

### Technique 2: Test-Driven Development

```
┌──────────────┬──────────────┐
│              │              │
│  Tests       │  Code        │
│              │              │
└──────────────┴──────────────┘
```

**Setup:**
1. Split editor right
2. Open test file in left
3. Open implementation in right
4. Run tests in terminal below

### Technique 3: Full-Stack Layout

```
┌──────────┬──────────┐
│ Frontend │ Backend  │
│          │          │
├──────────┴──────────┤
│     Terminal        │
└─────────────────────┘
```

**Setup:**
1. Split editor right
2. Open frontend in left
3. Open backend in right
4. Open terminal below

### Technique 4: Component Development

```
┌──────────┬──────────┐
│Component │  Styles  │
│   .jsx   │   .css   │
├──────────┼──────────┤
│  Tests   │ Preview  │
│   .test  │ Browser  │
└──────────┴──────────┘
```

**Setup:**
1. Create 2x2 grid
2. Organize related files
3. Use browser preview in one group

## Zen Mode and Focus

### Zen Mode

**Enter Zen Mode:**
```
Cmd+K Z (Mac) / Ctrl+K Z (Windows/Linux)
```

**Features:**
- Hides all UI elements
- Full-screen editor
- Distraction-free coding
- Exit with `Esc` twice

**Customize Zen Mode:**
```
Settings → Zen Mode
```

Options:
- Center layout
- Hide line numbers
- Hide status bar
- Full screen

### Centered Layout

**Enable:**
```
View → Appearance → Centered Layout
```

**Features:**
- Centers editor content
- Better for wide screens
- Reduces eye movement
- Maintains focus

## Practical Workflows

### Workflow 1: Code Review

```
1. Split editor right
2. Open original in left
3. Open modified in right
4. Compare changes
5. Navigate with F7
```

### Workflow 2: Refactoring

```
1. Three column layout
2. Old code (left)
3. New code (middle)
4. Tests (right)
5. Verify changes
```

### Workflow 3: Documentation

```
1. Split editor right
2. Code in left (70%)
3. Markdown docs in right (30%)
4. Edit both simultaneously
```

### Workflow 4: Multi-Language

```
1. Grid layout (2x2)
2. HTML (top-left)
3. CSS (top-right)
4. JavaScript (bottom-left)
5. Preview (bottom-right)
```

## Practice Exercise

**Exercise 3.2: Layout Mastery**

1. **Create test files:**
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

2. **Practice splits:**
   - Split editor right
   - Split editor down
   - Create 2x2 grid

3. **Practice navigation:**
   - Focus different groups
   - Move between groups
   - Move tabs between groups

4. **Practice layouts:**
   - Two columns
   - Three columns
   - Two rows
   - Grid layout

5. **Practice workflows:**
   - Set up code + docs layout
   - Set up test + code layout
   - Try Zen mode
   - Try centered layout

## Tips and Best Practices

### Tip 1: Use Keyboard Shortcuts

Most efficient layout shortcuts:
```
Cmd+\ / Ctrl+\ - Split right
Cmd+1,2,3 / Ctrl+1,2,3 - Focus group
Cmd+K W / Ctrl+K W - Close group
```

### Tip 2: Resize for Context

- Main code: 60-70% width
- Reference: 30-40% width
- Tests: 50% width

### Tip 3: Use Appropriate Layout

- **2 files**: Two columns
- **3 files**: Three columns or grid
- **4+ files**: Grid or tabs

### Tip 4: Don't Over-Split

- Too many splits = confusion
- Use tabs within groups
- Close unused groups

### Tip 5: Save Layouts

- Workspace settings remember layout
- Create workspace for common setups
- Use extensions for layout presets

## Keyboard Shortcuts Summary

```
Cmd+\ / Ctrl+\ - Split editor right
Cmd+K Cmd+\ / Ctrl+K Ctrl+\ - Split editor down

Cmd+1,2,3 / Ctrl+1,2,3 - Focus editor group
Cmd+K Cmd+Left/Right / Ctrl+K Ctrl+Left/Right - Move between groups

Cmd+Option+Left/Right / Ctrl+Alt+Left/Right - Move editor to group
Cmd+K W / Ctrl+K W - Close all editors in group

Cmd+K Z / Ctrl+K Z - Zen mode
```

## Key Takeaways

- Split editors enable multi-file editing
- Editor groups organize related files
- Keyboard shortcuts speed up navigation
- Resize groups for optimal viewing
- Predefined layouts for common scenarios
- Zen mode for focused coding
- Choose layout based on task
- Don't over-split - use tabs too

## Next Steps

Continue to [Module 3.3: Integrated Terminal](./03-terminal.md) to learn about the built-in terminal.

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Modules 1, 3.1