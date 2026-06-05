# Module 5.3: Snippets and IntelliSense

## IntelliSense

### What is IntelliSense?

Intelligent code completion that provides:
- Method suggestions
- Parameter info
- Quick info
- Member lists

### Triggering IntelliSense

**Automatic:**
- Appears as you type
- Context-aware suggestions

**Manual:**
```
Ctrl+Space - Trigger suggestions
```

### IntelliSense Features

**Suggestions:**
- Variables
- Functions
- Classes
- Keywords
- Snippets

**Parameter Hints:**
```
Cmd+Shift+Space / Ctrl+Shift+Space
```
Shows function parameters while typing.

**Quick Info:**
- Hover over symbol
- See type information
- View documentation

## Code Snippets

### Using Built-in Snippets

**Trigger:**
1. Type snippet prefix
2. IntelliSense shows snippet
3. Press Tab or Enter
4. Fill in placeholders

**Example (JavaScript):**
```javascript
// Type: for
// Press Tab
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
```

### Common Built-in Snippets

**JavaScript:**
- `log` → console.log()
- `for` → for loop
- `foreach` → forEach loop
- `func` → function
- `if` → if statement

**HTML:**
- `!` → HTML boilerplate
- `div` → div element
- `link` → link tag
- `script` → script tag

**CSS:**
- `m` → margin
- `p` → padding
- `bg` → background

## Creating Custom Snippets

### User Snippets

**Create snippet:**
```
Cmd+Shift+P → "Preferences: Configure User Snippets"
```

**Select:**
- Language-specific
- Global snippets

### Snippet Syntax

**Basic structure:**
```json
{
  "Snippet Name": {
    "prefix": "trigger",
    "body": [
      "line 1",
      "line 2"
    ],
    "description": "What it does"
  }
}
```

### Snippet Examples

**Console log:**
```json
{
  "Console Log": {
    "prefix": "cl",
    "body": [
      "console.log('$1');",
      "$2"
    ],
    "description": "Log to console"
  }
}
```

**React Component:**
```json
{
  "React Component": {
    "prefix": "rfc",
    "body": [
      "import React from 'react';",
      "",
      "const ${1:ComponentName} = () => {",
      "  return (",
      "    <div>",
      "      $2",
      "    </div>",
      "  );",
      "};",
      "",
      "export default ${1:ComponentName};"
    ],
    "description": "React functional component"
  }
}
```

### Snippet Variables

**Common variables:**
```
$1, $2, $3 - Tab stops
${1:default} - Placeholder with default
$0 - Final cursor position
$TM_FILENAME - Current filename
$TM_DIRECTORY - Current directory
$CURRENT_YEAR - Current year
$CURRENT_MONTH - Current month
$CLIPBOARD - Clipboard content
```

**Example with variables:**
```json
{
  "File Header": {
    "prefix": "header",
    "body": [
      "/**",
      " * File: $TM_FILENAME",
      " * Author: ${1:Your Name}",
      " * Date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
      " * Description: $2",
      " */",
      "$0"
    ]
  }
}
```

## Emmet

### What is Emmet?

Built-in abbreviation expansion for HTML/CSS.

### HTML Emmet

**Examples:**
```
div.container → <div class="container"></div>
ul>li*3 → <ul><li></li><li></li><li></li></ul>
div#header → <div id="header"></div>
a[href="#"] → <a href="#"></a>
```

**Trigger:**
- Type abbreviation
- Press Tab

### CSS Emmet

**Examples:**
```
m10 → margin: 10px;
p20 → padding: 20px;
w100p → width: 100%;
df → display: flex;
```

### Emmet Settings

```json
{
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

## IntelliSense Configuration

### Settings

```json
{
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": false
  },
  "editor.suggestSelection": "first",
  "editor.tabCompletion": "on",
  "editor.wordBasedSuggestions": true
}
```

### Language-Specific

```json
{
  "[javascript]": {
    "editor.suggest.insertMode": "replace"
  }
}
```

## Tips and Best Practices

### Tip 1: Learn Common Snippets
- Memorize frequently used
- Create custom for repetitive code
- Share with team

### Tip 2: Use Tab Stops
- Navigate with Tab
- Fill placeholders efficiently
- Use $0 for final position

### Tip 3: Leverage Emmet
- Faster HTML/CSS writing
- Learn common abbreviations
- Customize for workflow

### Tip 4: IntelliSense Shortcuts
- Ctrl+Space for suggestions
- Cmd+Shift+Space for parameters
- Hover for quick info

## Key Takeaways

- IntelliSense provides intelligent completion
- Built-in snippets for common patterns
- Create custom snippets for efficiency
- Emmet for HTML/CSS expansion
- Tab stops for navigation
- Variables for dynamic content
- Configure for optimal experience

## Next Steps

Continue to [Module 5.4: Tasks and Automation](./04-tasks.md).

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: Modules 1-4