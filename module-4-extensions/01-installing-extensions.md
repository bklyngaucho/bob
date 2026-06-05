# Module 4.1: Installing Extensions

## What are Extensions?

Extensions add functionality to VS Code, transforming it from a code editor into a complete development environment. They can:
- Add language support
- Provide themes and icons
- Integrate tools and services
- Add new features
- Enhance productivity

## Extensions View

### Opening Extensions View

```
Cmd+Shift+X (Mac) / Ctrl+Shift+X (Windows/Linux)
```

**Or via Activity Bar:**
- Click Extensions icon (four squares)

**Or via Command Palette:**
```
Cmd+Shift+P → "Extensions: Show Extensions"
```

### Extensions View Layout

```
┌─────────────────────────────────┐
│ EXTENSIONS                      │
├─────────────────────────────────┤
│ [Search box]                    │
│                                 │
│ INSTALLED                       │
│ ├─ Extension 1                  │
│ ├─ Extension 2                  │
│ └─ Extension 3                  │
│                                 │
│ RECOMMENDED                     │
│ ├─ Extension A                  │
│ └─ Extension B                  │
│                                 │
│ POPULAR                         │
│ ├─ Extension X                  │
│ └─ Extension Y                  │
└─────────────────────────────────┘
```

## Finding Extensions

### Search Extensions

**In Extensions View:**
1. Click search box
2. Type extension name or keyword
3. Browse results

**Search Examples:**
- "Python" - Python language support
- "theme" - Color themes
- "git" - Git-related extensions
- "prettier" - Code formatter
- "eslint" - JavaScript linter

### Browse Categories

**Filter by category:**
```
@category:themes
@category:programming languages
@category:snippets
@category:linters
@category:formatters
@category:debuggers
```

**Popular categories:**
- Programming Languages
- Snippets
- Linters
- Formatters
- Themes
- Debuggers
- Testing
- SCM Providers

### Sort Extensions

**Sort options:**
- Install Count (most popular)
- Rating (highest rated)
- Name (alphabetical)
- Published Date (newest)

**Filter installed:**
```
@installed
@enabled
@disabled
@builtin
```

## Installing Extensions

### Install from Marketplace

**Method 1: Extensions View**
1. Search for extension
2. Click extension to view details
3. Click "Install" button
4. Wait for installation
5. Reload if prompted

**Method 2: Command Palette**
```
Cmd+Shift+P → "Extensions: Install Extensions"
```

**Method 3: Quick Open**
```
Cmd+P → ext install [extension-id]
```

Example:
```
ext install ms-python.python
```

### Install from VSIX File

**For offline or custom extensions:**

1. Download .vsix file
2. Extensions View → `...` menu
3. "Install from VSIX..."
4. Select file
5. Install

**Or Command Palette:**
```
Cmd+Shift+P → "Extensions: Install from VSIX..."
```

## Managing Extensions

### Enable/Disable Extensions

**Disable:**
1. Find extension in Installed list
2. Click gear icon
3. Select "Disable"

**Or:**
- Right-click extension
- Select "Disable"

**Disable Options:**
- Disable (globally)
- Disable (Workspace)

**Enable:**
- Same process, select "Enable"

### Uninstall Extensions

**Method 1: Extensions View**
1. Find extension
2. Click "Uninstall" button

**Method 2: Context Menu**
1. Right-click extension
2. Select "Uninstall"

**Method 3: Command Palette**
```
Cmd+Shift+P → "Extensions: Show Installed Extensions"
```
Then uninstall from list.

### Update Extensions

**Auto-Update (default):**
- Extensions update automatically
- Notification appears
- Reload to activate

**Manual Update:**
1. Extensions View
2. Find extension with update
3. Click "Update" button

**Update All:**
```
Extensions View → `...` menu → "Update All Extensions"
```

**Disable Auto-Update:**
```
Settings → Extensions: Auto Update → off
```

## Extension Details

### Viewing Extension Info

**Click extension** to see:

**Overview Tab:**
- Description
- Features
- Usage instructions
- Screenshots
- Changelog

**Details:**
- Version number
- Publisher
- Install count
- Rating
- Last updated
- License
- Repository link

**Contributions:**
- Commands added
- Settings added
- Keybindings added
- Languages supported

### Extension Ratings and Reviews

**View ratings:**
- Star rating (1-5)
- Number of ratings
- User reviews

**Leave review:**
1. Click extension
2. Scroll to reviews
3. Click "Write a Review"
4. Rate and comment

## Recommended Extensions

### Workspace Recommendations

**Create recommendations:**

**.vscode/extensions.json:**
```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-python.python"
  ]
}
```

**Benefits:**
- Team uses same extensions
- Consistent development environment
- New team members get suggestions

### Installing Recommendations

**When opening workspace:**
- Notification appears
- "Install All" or "Show Recommendations"

**Manual install:**
```
Extensions View → "Show Recommended Extensions"
```

### Ignoring Recommendations

**Don't show again:**
1. Click notification
2. Select "Don't Show Again"

**Or in extensions.json:**
```json
{
  "recommendations": [...],
  "unwantedRecommendations": [
    "extension.id"
  ]
}
```

## Essential Extensions by Category

### Language Support

**JavaScript/TypeScript:**
- ESLint - Linting
- Prettier - Formatting
- JavaScript (ES6) code snippets

**Python:**
- Python - Full Python support
- Pylance - Fast language server
- Python Indent - Auto-indentation

**Web Development:**
- HTML CSS Support
- Auto Rename Tag
- Live Server

**Other Languages:**
- C/C++ - Microsoft C/C++
- Java - Extension Pack for Java
- Go - Go extension
- Rust - rust-analyzer

### Themes and Icons

**Color Themes:**
- One Dark Pro
- Dracula Official
- Material Theme
- Night Owl
- Monokai Pro

**Icon Themes:**
- Material Icon Theme
- vscode-icons
- Atom One Dark Theme

### Productivity

**General:**
- GitLens - Enhanced Git
- Path Intellisense - Path completion
- Bracket Pair Colorizer - Colorize brackets
- Todo Tree - TODO highlighting

**Code Quality:**
- SonarLint - Code quality
- Code Spell Checker - Spell checking
- Better Comments - Comment highlighting

### Version Control

- GitLens - Git supercharged
- Git History - View git log
- Git Graph - Visual git graph
- GitHub Pull Requests

### Remote Development

- Remote - SSH
- Remote - Containers
- Remote - WSL
- Live Share - Collaborative editing

## Extension Settings

### Configuring Extensions

**Access settings:**
1. Click extension
2. Click gear icon
3. Select "Extension Settings"

**Or Settings UI:**
```
Cmd+, → Extensions → [Extension Name]
```

**Or settings.json:**
```json
{
  "prettier.singleQuote": true,
  "eslint.autoFixOnSave": true,
  "python.linting.enabled": true
}
```

### Extension Commands

**View commands:**
```
Cmd+Shift+P → Type extension name
```

Shows all commands added by extension.

**Example (Prettier):**
- Format Document
- Format Selection
- Create Configuration File

## Troubleshooting Extensions

### Extension Not Working

**Check:**
1. Extension enabled?
2. Workspace trusted?
3. Correct file type?
4. Conflicting extensions?
5. Need reload?

**Solutions:**
- Reload window
- Disable conflicting extensions
- Check extension output
- Update extension
- Reinstall extension

### Performance Issues

**If VS Code is slow:**

1. Check extension count
2. Disable unused extensions
3. Check extension output for errors
4. Use "Developer: Show Running Extensions"

**Command:**
```
Cmd+Shift+P → "Developer: Show Running Extensions"
```

Shows:
- Activation time
- Running time
- Performance impact

### Extension Conflicts

**Symptoms:**
- Features not working
- Unexpected behavior
- Error messages

**Resolution:**
1. Disable all extensions
2. Enable one by one
3. Identify conflicting pair
4. Keep only one or configure both

## Best Practices

### ✅ Do's

1. **Install selectively**: Only install needed extensions
2. **Read reviews**: Check ratings and reviews
3. **Check updates**: Keep extensions updated
4. **Use workspace recommendations**: Share with team
5. **Disable unused**: Disable extensions you don't use
6. **Review permissions**: Check what extensions can access

### ❌ Don'ts

1. **Don't install everything**: Too many = slow performance
2. **Don't ignore updates**: Updates fix bugs and add features
3. **Don't trust blindly**: Review extension permissions
4. **Don't keep unused**: Uninstall extensions you don't need
5. **Don't ignore conflicts**: Resolve extension conflicts

## Practice Exercise

**Exercise 4.1: Extension Management**

1. **Open Extensions View:**
   - Press `Cmd+Shift+X` / `Ctrl+Shift+X`
   - Explore the interface

2. **Search and install:**
   - Search for "Prettier"
   - Read the description
   - Install the extension
   - View its settings

3. **Browse categories:**
   - Search `@category:themes`
   - Install a theme you like
   - Apply it (`Cmd+K Cmd+T`)

4. **Create recommendations:**
   - Create `.vscode/extensions.json`
   - Add 2-3 extension IDs
   - Save file

5. **Manage extensions:**
   - View installed extensions
   - Disable one extension
   - Re-enable it
   - Check for updates

6. **Explore extension details:**
   - Click an installed extension
   - Read the overview
   - Check contributions
   - View commands it adds

## Keyboard Shortcuts Summary

```
Cmd+Shift+X / Ctrl+Shift+X - Open Extensions View
Cmd+P → ext install - Quick install
Cmd+Shift+P → Extensions - Extension commands
```

## Key Takeaways

- Extensions add functionality to VS Code
- Install from Extensions View or Marketplace
- Search by name, category, or keyword
- Enable/disable extensions as needed
- Keep extensions updated
- Use workspace recommendations for teams
- Install selectively for best performance
- Review extension details before installing
- Configure extensions via settings
- Troubleshoot conflicts by disabling extensions

## Next Steps

Continue to [Module 4.2: Essential Extensions](./02-essential-extensions.md) to learn about must-have extensions.

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Module 1