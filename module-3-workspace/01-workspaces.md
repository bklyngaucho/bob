# Module 3.1: Workspaces and Folders

## What is a Workspace?

A workspace in VS Code is your project environment. It can be:
- A single folder
- Multiple folders (multi-root workspace)
- A saved workspace configuration

Understanding workspaces is key to organizing your development environment.

## Single Folder Workspace

### Opening a Folder

```
File → Open Folder... (Cmd+O / Ctrl+O)
```

**What happens:**
- Folder becomes your workspace root
- Explorer shows folder structure
- Settings apply to this folder
- Git integration activates (if .git exists)
- Extensions can provide folder-specific features

**Best Practice:** Always open the project root folder, not individual files.

### Workspace Features

When you open a folder, you get:

1. **File Explorer**: Browse entire project structure
2. **Search**: Search across all files
3. **Git Integration**: Version control for the folder
4. **IntelliSense**: Context-aware code completion
5. **Debugging**: Project-specific debug configurations
6. **Tasks**: Automated build/test tasks
7. **Extensions**: Folder-specific recommendations

### Workspace Root

The workspace root is the base directory for:
- Relative file paths
- Search operations
- Git operations
- Terminal working directory
- Configuration files

**Example Structure:**
```
my-project/              ← Workspace Root
├── .vscode/            ← VS Code settings
│   ├── settings.json
│   ├── launch.json
│   └── tasks.json
├── src/
│   ├── index.js
│   └── utils.js
├── tests/
├── package.json
└── README.md
```

## Multi-Root Workspaces

### What are Multi-Root Workspaces?

Multi-root workspaces let you work with multiple folders simultaneously, useful for:
- Monorepos
- Related projects
- Frontend + Backend
- Microservices

### Creating a Multi-Root Workspace

**Method 1: Add Folder to Workspace**
```
File → Add Folder to Workspace...
```

1. Open first folder
2. File → Add Folder to Workspace
3. Select second folder
4. Both folders now in workspace

**Method 2: Save Workspace**
```
File → Save Workspace As...
```

Creates a `.code-workspace` file:
```json
{
  "folders": [
    {
      "path": "frontend"
    },
    {
      "path": "backend"
    }
  ],
  "settings": {
    "editor.fontSize": 14
  }
}
```

### Working with Multi-Root Workspaces

**Explorer View:**
```
📁 FRONTEND
├── src/
├── public/
└── package.json

📁 BACKEND
├── api/
├── models/
└── package.json
```

**Features:**
- Each folder has its own context
- Search across all folders
- Separate Git repositories
- Folder-specific settings
- Independent terminals

### Opening a Workspace File

```
File → Open Workspace from File...
```

Or double-click `.code-workspace` file.

**Recent Workspaces:**
```
File → Open Recent → [workspace name]
```

## Workspace Settings

### Settings Hierarchy

VS Code has three levels of settings:

1. **User Settings**: Apply globally
2. **Workspace Settings**: Apply to current workspace
3. **Folder Settings**: Apply to specific folder (multi-root)

**Priority:** Folder > Workspace > User

### Workspace Settings Location

**Single Folder:**
```
.vscode/settings.json
```

**Multi-Root Workspace:**
```
my-workspace.code-workspace
```

### Example Workspace Settings

```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "files.exclude": {
    "**/.git": true,
    "**/node_modules": true,
    "**/dist": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true
  }
}
```

### Editing Workspace Settings

**Method 1: Settings UI**
```
Cmd+, / Ctrl+, → Workspace tab
```

**Method 2: JSON File**
```
Cmd+Shift+P → "Preferences: Open Workspace Settings (JSON)"
```

## Workspace Configuration Files

### .vscode Folder

The `.vscode` folder contains workspace-specific configurations:

```
.vscode/
├── settings.json      - Workspace settings
├── launch.json        - Debug configurations
├── tasks.json         - Task definitions
├── extensions.json    - Recommended extensions
└── *.code-snippets    - Custom snippets
```

### settings.json

Workspace-specific settings:

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "files.autoSave": "afterDelay",
  "python.linting.enabled": true,
  "eslint.enable": true
}
```

### launch.json

Debug configurations:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/src/index.js"
    }
  ]
}
```

### tasks.json

Automated tasks:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "build",
      "type": "npm",
      "script": "build",
      "group": "build"
    }
  ]
}
```

### extensions.json

Recommended extensions:

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-python.python"
  ]
}
```

## Workspace Trust

### What is Workspace Trust?

VS Code's security feature that restricts potentially dangerous operations in untrusted workspaces.

**Restricted Mode:**
- Extensions limited
- Tasks disabled
- Debugging disabled
- Settings restricted

**Trusted Mode:**
- Full functionality
- All extensions active
- Tasks and debugging enabled

### Managing Trust

**Trust Workspace:**
```
Click "Manage" in banner → "Trust"
```

**Or:**
```
Cmd+Shift+P → "Workspaces: Manage Workspace Trust"
```

**Trust Settings:**
- Trust parent folder
- Trust specific folders
- Always trust certain paths

### When to Trust

✅ **Trust:**
- Your own projects
- Verified open-source projects
- Company repositories

⚠️ **Don't Trust:**
- Unknown downloaded code
- Suspicious repositories
- Untested third-party code

## Workspace Variables

### Using Variables in Configuration

VS Code provides variables for paths:

```
${workspaceFolder}       - Workspace root path
${workspaceFolderBasename} - Workspace folder name
${file}                  - Current file path
${fileBasename}          - Current file name
${fileDirname}           - Current file directory
${fileExtname}           - Current file extension
${cwd}                   - Current working directory
${env:NAME}              - Environment variable
```

### Example Usage

**In launch.json:**
```json
{
  "program": "${workspaceFolder}/src/index.js",
  "cwd": "${workspaceFolder}",
  "env": {
    "NODE_ENV": "development"
  }
}
```

**In tasks.json:**
```json
{
  "command": "npm",
  "args": ["run", "build"],
  "options": {
    "cwd": "${workspaceFolder}"
  }
}
```

## Practical Workspace Setups

### Setup 1: Simple Web Project

```
my-website/
├── .vscode/
│   └── settings.json
├── css/
├── js/
├── images/
└── index.html
```

**settings.json:**
```json
{
  "liveServer.settings.port": 5500,
  "files.autoSave": "afterDelay"
}
```

### Setup 2: Node.js Project

```
my-app/
├── .vscode/
│   ├── settings.json
│   ├── launch.json
│   └── tasks.json
├── src/
├── tests/
├── package.json
└── .gitignore
```

**settings.json:**
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.enable": true
}
```

### Setup 3: Full-Stack Multi-Root

```
my-workspace.code-workspace
```

```json
{
  "folders": [
    {
      "name": "Frontend",
      "path": "client"
    },
    {
      "name": "Backend",
      "path": "server"
    },
    {
      "name": "Shared",
      "path": "common"
    }
  ],
  "settings": {
    "editor.formatOnSave": true
  }
}
```

## Best Practices

### ✅ Do's

1. **Open Project Root**: Always open the root folder
2. **Use .vscode Folder**: Store workspace configs
3. **Commit Configs**: Share settings with team (except personal preferences)
4. **Use Workspace Settings**: Keep project-specific settings separate
5. **Recommend Extensions**: Add to extensions.json

### ❌ Don'ts

1. **Don't Open Individual Files**: Lose workspace features
2. **Don't Mix Personal Settings**: Keep user settings separate
3. **Don't Commit Sensitive Data**: Use .gitignore for secrets
4. **Don't Trust Unknown Code**: Use Restricted Mode first
5. **Don't Overconfigure**: Start simple, add as needed

## Practice Exercise

**Exercise 3.1: Workspace Setup**

1. **Create a project structure:**
```
my-project/
├── src/
│   └── index.js
├── tests/
│   └── test.js
└── README.md
```

2. **Open as workspace:**
   - File → Open Folder
   - Select my-project

3. **Configure workspace:**
   - Create `.vscode/settings.json`
   - Add settings:
   ```json
   {
     "editor.tabSize": 2,
     "files.autoSave": "afterDelay"
   }
   ```

4. **Add recommended extensions:**
   - Create `.vscode/extensions.json`
   - Add recommendations

5. **Create multi-root workspace:**
   - Create second project folder
   - File → Add Folder to Workspace
   - File → Save Workspace As

6. **Test workspace features:**
   - Search across folders
   - Open integrated terminal
   - Check workspace settings

## Troubleshooting

**Problem**: Settings not applying
- **Solution**: Check settings hierarchy (Folder > Workspace > User)

**Problem**: Extensions not working
- **Solution**: Check Workspace Trust status

**Problem**: Can't find workspace file
- **Solution**: Check File → Open Recent

**Problem**: Git not working
- **Solution**: Ensure .git folder in workspace root

## Key Takeaways

- Workspaces organize your development environment
- Always open the project root folder
- Multi-root workspaces support multiple folders
- .vscode folder stores workspace configurations
- Workspace settings override user settings
- Workspace Trust protects against malicious code
- Variables enable flexible configurations
- Share workspace configs with your team

## Next Steps

Continue to [Module 3.2: Split Editors and Layouts](./02-layouts.md) to learn about organizing your editor space.

---

**Time to Complete**: ~10 minutes  
**Difficulty**: Beginner  
**Prerequisites**: Module 1