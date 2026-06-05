# Module 5.1: Git Integration

## Overview

VS Code has powerful built-in Git integration that makes version control seamless. No need for external Git clients for most operations.

## Source Control View

### Opening Source Control

```
Cmd+Shift+G (Mac) / Ctrl+Shift+G (Windows/Linux)
```

**Or click Source Control icon** in Activity Bar (branch icon)

### Source Control Interface

```
┌─────────────────────────────────┐
│ SOURCE CONTROL                  │
├─────────────────────────────────┤
│ Message: [commit message]       │
│ [✓ Commit] [↻ Refresh]         │
│                                 │
│ CHANGES (3)                     │
│ ├─ M file1.js                   │
│ ├─ M file2.js                   │
│ └─ A file3.js                   │
│                                 │
│ STAGED CHANGES (0)              │
└─────────────────────────────────┘
```

## Basic Git Operations

### Initialize Repository

**Command Palette:**
```
Cmd+Shift+P → "Git: Initialize Repository"
```

**Or in Source Control view:**
- Click "Initialize Repository" button

### Stage Changes

**Stage single file:**
- Click `+` icon next to file

**Stage all changes:**
- Click `+` icon next to "Changes" header

**Keyboard:**
```
Cmd+Shift+P → "Git: Stage Changes"
```

### Unstage Changes

**Unstage file:**
- Click `-` icon next to staged file

**Unstage all:**
- Click `-` icon next to "Staged Changes" header

### Commit Changes

**In Source Control view:**
1. Enter commit message
2. Press `Cmd+Enter` / `Ctrl+Enter`
3. Or click checkmark icon

**Keyboard:**
```
Cmd+Shift+P → "Git: Commit"
```

### Push/Pull

**Push:**
```
Cmd+Shift+P → "Git: Push"
```

**Pull:**
```
Cmd+Shift+P → "Git: Pull"
```

**Sync (Pull + Push):**
- Click sync icon in Status Bar
- Or `Cmd+Shift+P` → "Git: Sync"

## Viewing Changes

### Diff View

**View file changes:**
- Click file in Source Control view
- Opens side-by-side diff

**Features:**
- See additions (green)
- See deletions (red)
- See modifications
- Navigate changes (F7/Shift+F7)

### Inline Diff

**In editor:**
- Green bar: additions
- Red triangle: deletions
- Blue bar: modifications

**Click bar** to see inline diff

### Gutter Indicators

**Left gutter shows:**
- Green: New lines
- Blue: Modified lines
- Red triangle: Deleted lines

**Click indicator** to:
- View change
- Revert change
- Stage change

## Branches

### View Branches

**Status Bar:**
- Shows current branch
- Click to switch branches

**Command Palette:**
```
Cmd+Shift+P → "Git: Checkout to..."
```

### Create Branch

```
Cmd+Shift+P → "Git: Create Branch..."
```

**Or:**
- Click branch in Status Bar
- Select "Create new branch"

### Switch Branch

```
Cmd+Shift+P → "Git: Checkout to..."
```

**Or:**
- Click branch in Status Bar
- Select branch from list

### Merge Branch

```
Cmd+Shift+P → "Git: Merge Branch..."
```

Select branch to merge into current branch.

### Delete Branch

```
Cmd+Shift+P → "Git: Delete Branch..."
```

## Remote Operations

### Add Remote

```
Cmd+Shift+P → "Git: Add Remote..."
```

Enter remote name and URL.

### Clone Repository

```
Cmd+Shift+P → "Git: Clone"
```

**Or:**
- Welcome screen → "Clone Git Repository"

### Fetch

```
Cmd+Shift+P → "Git: Fetch"
```

Downloads remote changes without merging.

### Pull with Rebase

```
Cmd+Shift+P → "Git: Pull (Rebase)"
```

## Conflict Resolution

### When Conflicts Occur

**VS Code shows:**
- Conflicted files in Source Control
- Conflict markers in editor

### Conflict Markers

```javascript
<<<<<<< HEAD
const version = "current";
=======
const version = "incoming";
>>>>>>> branch-name
```

### Resolving Conflicts

**Options in editor:**
- Accept Current Change
- Accept Incoming Change
- Accept Both Changes
- Compare Changes

**Click option** above conflict markers.

### After Resolution

1. Save file
2. Stage resolved file
3. Commit merge

## Git History

### View File History

**Command Palette:**
```
Cmd+Shift+P → "Git: View File History"
```

**Or:**
- Right-click file
- "Open Timeline"

### Timeline View

**Shows:**
- Commit history
- File changes over time
- Click to view version

**Access:**
- Explorer → Timeline section
- Or right-click file → "Open Timeline"

## Stashing

### Stash Changes

```
Cmd+Shift+P → "Git: Stash"
```

**Options:**
- Stash (keep staged)
- Stash (include untracked)

### Apply Stash

```
Cmd+Shift+P → "Git: Apply Stash..."
```

Select stash to apply.

### Pop Stash

```
Cmd+Shift+P → "Git: Pop Stash..."
```

Applies and removes stash.

## GitLens Extension

### Enhanced Features

**Install GitLens:**
```
ext install eamodio.gitlens
```

**Features:**
- Blame annotations
- Commit details inline
- File history
- Repository insights
- Compare branches

### Blame Annotations

**Shows:**
- Who changed each line
- When it was changed
- Commit message

**Toggle:**
```
Cmd+Shift+P → "GitLens: Toggle Line Blame"
```

## Git Configuration

### User Settings

**Set name and email:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

**Or in VS Code settings:**
```json
{
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "git.autofetch": true
}
```

### VS Code Git Settings

```json
{
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "git.autofetch": true,
  "git.autoStash": true,
  "git.decorations.enabled": true
}
```

## Common Workflows

### Workflow 1: Feature Development

```
1. Create branch (Cmd+Shift+P → Create Branch)
2. Make changes
3. Stage changes (+ icon)
4. Commit (Cmd+Enter)
5. Push (Sync icon)
6. Create pull request (GitHub extension)
```

### Workflow 2: Bug Fix

```
1. Switch to main branch
2. Pull latest changes
3. Create bug-fix branch
4. Fix bug
5. Commit changes
6. Push and create PR
```

### Workflow 3: Code Review

```
1. View changes in diff
2. Add comments
3. Request changes or approve
4. Merge when approved
```

## Tips and Best Practices

### Tip 1: Commit Often
- Small, focused commits
- Clear commit messages
- Easier to review and revert

### Tip 2: Use Branches
- Feature branches
- Bug fix branches
- Keep main stable

### Tip 3: Review Before Commit
- Check diff view
- Verify changes
- Remove debug code

### Tip 4: Write Good Messages
- First line: summary (50 chars)
- Blank line
- Detailed description

### Tip 5: Use .gitignore
- Exclude build files
- Exclude dependencies
- Exclude sensitive data

## Key Takeaways

- Built-in Git integration
- Visual diff viewing
- Easy staging and committing
- Branch management
- Conflict resolution tools
- Timeline for file history
- GitLens for enhanced features
- Keyboard shortcuts available
- Seamless workflow integration

## Next Steps

Continue to [Module 5.2: Debugging](./02-debugging.md) to learn debugging in VS Code.

---

**Time to Complete**: ~15 minutes  
**Difficulty**: Intermediate  
**Prerequisites**: Modules 1-4, Git basics