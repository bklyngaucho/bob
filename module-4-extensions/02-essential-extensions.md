# Module 4.2: Essential Extensions

## Must-Have Extensions

### Prettier - Code Formatter
**ID:** `esbenp.prettier-vscode`

**What it does:**
- Automatically formats code
- Supports multiple languages
- Enforces consistent style

**Setup:**
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### ESLint
**ID:** `dbaeumer.vscode-eslint`

**What it does:**
- JavaScript/TypeScript linting
- Finds code problems
- Auto-fixes issues

**Setup:**
```json
{
  "eslint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### GitLens
**ID:** `eamodio.gitlens`

**What it does:**
- Enhanced Git integration
- Blame annotations
- Commit history
- Repository insights

**Features:**
- See who changed each line
- View commit details inline
- Compare branches
- Search commits

### Live Server
**ID:** `ritwickdey.liveserver`

**What it does:**
- Local development server
- Live reload
- Browser sync

**Usage:**
- Right-click HTML file
- "Open with Live Server"
- Auto-refreshes on save

### Path Intellisense
**ID:** `christian-kohler.path-intellisense`

**What it does:**
- Autocompletes file paths
- Works in imports
- Supports relative/absolute paths

### Bracket Pair Colorizer 2
**ID:** `coenraads.bracket-pair-colorizer-2`

**What it does:**
- Colors matching brackets
- Easier to read nested code
- Customizable colors

**Note:** Built into VS Code now, but extension offers more options.

## Language-Specific Extensions

### Python Development

**Python** - `ms-python.python`
- IntelliSense
- Debugging
- Linting
- Testing

**Pylance** - `ms-python.vscode-pylance`
- Fast language server
- Type checking
- Auto-imports

### Web Development

**Auto Rename Tag** - `formulahendry.auto-rename-tag`
- Renames paired HTML/XML tags

**HTML CSS Support** - `ecmel.vscode-html-css`
- CSS class/id completion in HTML

**JavaScript (ES6) snippets** - `xabikos.javascriptsnippets`
- Common JS snippets

### React Development

**ES7+ React/Redux/React-Native snippets** - `dsznajder.es7-react-js-snippets`
- React component snippets
- Redux snippets
- Hooks snippets

## Productivity Extensions

### Todo Tree
**ID:** `gruntfuggly.todo-tree`

**What it does:**
- Highlights TODO comments
- Shows in sidebar tree
- Customizable tags

**Usage:**
```javascript
// TODO: Fix this bug
// FIXME: Refactor needed
// NOTE: Important info
```

### Better Comments
**ID:** `aaron-bond.better-comments`

**What it does:**
- Color-codes comments
- Different colors for different types

**Example:**
```javascript
// ! Important warning
// ? Question or query
// * Highlighted info
// TODO: Task to complete
```

### Code Spell Checker
**ID:** `streetsidesoftware.code-spell-checker`

**What it does:**
- Spell checks code
- Catches typos
- Customizable dictionary

### Bookmarks
**ID:** `alefragnani.bookmarks`

**What it does:**
- Mark important lines
- Quick navigation
- Persistent across sessions

**Usage:**
- `Cmd+Option+K` / `Ctrl+Alt+K` - Toggle bookmark
- `Cmd+Option+J` / `Ctrl+Alt+J` - Jump to next

## Theme Extensions

### One Dark Pro
**ID:** `zhuangtongfa.material-theme`
- Popular dark theme
- Based on Atom's One Dark

### Dracula Official
**ID:** `dracula-theme.theme-dracula`
- Dark theme with vibrant colors
- Easy on eyes

### Material Icon Theme
**ID:** `pkief.material-icon-theme`
- File/folder icons
- Better visual organization

## Git Extensions

### Git Graph
**ID:** `mhutchie.git-graph`
- Visual git history
- Branch visualization
- Interactive graph

### Git History
**ID:** `donjayamanne.githistory`
- View file history
- Compare versions
- Search commits

## Remote Development

### Remote - SSH
**ID:** `ms-vscode-remote.remote-ssh`
- Connect to remote servers
- Edit files remotely
- Run commands on remote

### Remote - Containers
**ID:** `ms-vscode-remote.remote-containers`
- Develop in Docker containers
- Consistent environments
- Isolated dependencies

## Testing Extensions

### Jest
**ID:** `orta.vscode-jest`
- Jest test runner
- Inline test results
- Coverage visualization

### Test Explorer UI
**ID:** `hbenl.vscode-test-explorer`
- Unified test interface
- Multiple test frameworks
- Test discovery

## Documentation Extensions

### Markdown All in One
**ID:** `yzhang.markdown-all-in-one`
- Markdown shortcuts
- Table of contents
- Preview enhancements

### Markdown Preview Enhanced
**ID:** `shd101wyy.markdown-preview-enhanced`
- Advanced preview
- Export to PDF/HTML
- Diagrams support

## Quick Reference

### Top 10 Must-Have Extensions

1. **Prettier** - Code formatting
2. **ESLint** - JavaScript linting
3. **GitLens** - Git enhancement
4. **Live Server** - Local dev server
5. **Path Intellisense** - Path completion
6. **Material Icon Theme** - File icons
7. **Todo Tree** - TODO management
8. **Better Comments** - Comment highlighting
9. **Code Spell Checker** - Spell checking
10. **Bracket Pair Colorizer** - Bracket colors

### Installation Command

Install all at once:
```bash
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension eamodio.gitlens
code --install-extension ritwickdey.liveserver
code --install-extension christian-kohler.path-intellisense
```

## Key Takeaways

- Essential extensions enhance productivity
- Language-specific extensions add support
- Theme extensions improve appearance
- Git extensions enhance version control
- Remote extensions enable remote development
- Install selectively based on needs
- Keep extensions updated
- Configure for optimal workflow

## Next Steps

Continue to [Module 4.3: Settings and Preferences](./03-settings.md) to learn about customizing VS Code.

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Module 4.1