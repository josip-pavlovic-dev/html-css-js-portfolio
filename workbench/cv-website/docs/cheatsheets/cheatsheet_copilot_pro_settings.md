---
type: cheatsheet
topic: Copilot Pro - VS Code Workflow & Settings Optimization
date: 2025-12-08
linked_to: vscode, copilot-pro, development-workflow
language: bilingual
status: production-ready
difficulty: intermediate
audience: myself
recommended_by: codex
---

# 📘 Cheatsheet: Copilot Pro - Complete Workflow Guide

## ⚡ Quick Start: 3 Steps to Activate Pro Features

### Step 1: Fix JSON Error (kritično!)

```json
// ❌ CURRENT (Wrong - trailing comma)
"javascript": true,

// ✅ FIXED
"javascript": true
```

### Step 2: Add Pro Features Block

```json
// ===== COPILOT PRO (NOVO!) =====
"github.copilot.editor.enableAutoCompletions": true,
"github.copilot.editor.enableCodeActions": true,
"github.copilot.nextEditSuggestions.enabled": true,

// Copilot Chat - GPT-4o (ekskluzivno za Pro!)
"github.copilot.chat.reviewSelection.enabled": true,
"github.copilot.chat.localeOverride": "en",
"github.copilot.chat.useProjectTemplates": true,
"github.copilot.chat.experimental.model": "gpt-4o",
"chat.agent.enabled": true,
```

### Step 3: Uključi Editor Enhancements

```json
// ===== EDITOR ENHANCEMENTS =====
"editor.inlineSuggest.enabled": true,
"editor.stickyScroll.enabled": true,
"editor.bracketPairColorization.enabled": true,
"editor.guides.bracketPairs": "active",
"editor.guides.indentation": true,
```

---

## 📊 Complete Settings JSON (Copy-Paste Ready!)

```json
{
  // ===== EDITOR BASICS =====
  "editor.fontFamily": "JetBrains Mono, Fira Code, monospace",
  "editor.fontSize": 14,
  "editor.lineHeight": 2,
  "editor.fontLigatures": true,
  "editor.smoothScrolling": true,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "all",

  // ===== EDITOR ENHANCEMENTS =====
  "editor.inlineSuggest.enabled": true,
  "editor.stickyScroll.enabled": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "editor.guides.indentation": true,
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": true
  },
  "editor.suggestOnTriggerCharacters": true,
  "editor.acceptSuggestionOnCommitCharacter": true,
  "editor.acceptSuggestionOnEnter": "on",
  "editor.tabCompletion": "on",

  // ===== FORMATTING =====
  "editor.defaultFormatter": null,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit",
    "source.fixAll": "explicit"
  },

  // ===== PYTHON =====
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.organizeImports": "explicit"
    }
  },
  "python.defaultInterpreterPath": "/usr/bin/python3",
  "python.languageServer": "Pylance",
  "python.terminal.activateEnvironment": true,
  "python.analysis.typeCheckingMode": "basic",
  "python.analysis.documentation.display": "detailed",
  "python.analysis.autoSearchPaths": true,
  "python.analysis.useLibraryCodeForTypes": true,
  "python.linting.enabled": true,
  "python.linting.mypyEnabled": true,
  "python.linting.ruffEnabled": true,
  "python.linting.pylintEnabled": false,
  "python.testing.pytestEnabled": true,
  "python.testing.unittestEnabled": false,
  "black-formatter.args": ["88"],
  "python.analysis.aiHoverSummaries": true,
  "python.analysis.aiCodeActions": {
    "enabled": true
  },

  // ===== HTML/CSS/JS =====
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll": "explicit"
    }
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll": "explicit"
    }
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.wordWrap": "on"
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[makefile]": {
    "editor.insertSpaces": false,
    "editor.detectIndentation": false,
    "files.eol": "\n",
    "editor.renderWhitespace": "all",
    "editor.formatOnSave": false
  },

  // ===== COPILOT PRO (OPTIMIZOVANO!) =====
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "scminput": false,
    "python": true,
    "html": true,
    "css": true,
    "javascript": true,
    "yaml": true,
    "json": true
  },

  // Pro Features
  "github.copilot.editor.enableAutoCompletions": true,
  "github.copilot.editor.enableCodeActions": true,
  "github.copilot.nextEditSuggestions.enabled": true,

  // Copilot Chat (GPT-4o za Pro!)
  "github.copilot.chat.reviewSelection.enabled": true,
  "github.copilot.chat.localeOverride": "en",
  "github.copilot.chat.useProjectTemplates": true,
  "github.copilot.chat.experimental.model": "gpt-4o",
  "chat.agent.enabled": true,

  // ===== EMMET =====
  "emmet.includeLanguages": {
    "html": "html",
    "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true,
  "emmet.showSuggestionsAsSnippets": true,

  // ===== FILES =====
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "files.eol": "\n",
  "files.autoSave": "onFocusChange",

  // ===== WORKBENCH =====
  "workbench.colorTheme": "Catppuccin Macchiato",
  "workbench.preferredDarkColorTheme": "Catppuccin Macchiato",
  "workbench.preferredLightColorTheme": "Atom One Light",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.editor.showTabs": "single",
  "breadcrumbs.enabled": true,

  // ===== TERMINAL =====
  "terminal.integrated.defaultProfile.windows": "Ubuntu-24.04 (WSL)",
  "terminal.integrated.fontFamily": "JetBrains Mono",
  "terminal.integrated.fontSize": 14.5,
  "terminal.integrated.lineHeight": 1,
  "terminal.integrated.cursorStyle": "line",
  "terminal.integrated.cursorBlinking": true,

  // ===== GIT & GITLENS =====
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "git.openRepositoryInParentFolders": "always",
  "git.autofetch": true,
  "gitlens.ai.experimental.provider": "github-copilot",
  "gitlens.ai.experimental.model": "gpt-4o",

  // ===== LIVE SERVER =====
  "liveServer.settings.CustomBrowser": "chrome",
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.NoBrowser": false,
  "liveServer.settings.port": 5500,
  "liveServer.settings.donotVerifyTags": true,

  // ===== MARKDOWN =====
  "markdown-preview-enhanced.codeBlockTheme": "atom-light.css",
  "markdown-preview-enhanced.previewTheme": "atom-light.css",
  "markdown-preview-enhanced.revealjsTheme": "black.css",
  "markdownlint.config": {
    "MD013": false,
    "MD041": false,
    "MD049": false,
    "MD030": false,
    "MD024": false,
    "MD010": false,
    "MD040": false,
    "MD025": false,
    "MD032": false,
    "MD022": false,
    "MD007": false,
    "MD036": false,
    "MD004": false
  },

  // ===== MISC =====
  "makefile.configureOnOpen": true,
  "explorer.confirmDelete": true,
  "zenMode.showTabs": "none",
  "remote.autoForwardPortsSource": "hybrid",
  "vscode-edge-devtools.webhintInstallNotification": true,
  "editor.unicodeHighlight.allowedLocales": {
    "cs": true,
    "sr": true
  }
}
```

---

## 🚀 Copilot Pro Workflow za CSS/HTML Projekat

### 1️⃣ Auto-Complete Suggestions

**Scenario:** Kucaš CSS `/* Create gradient */`

```css
/* Create gradient button effect */
/* Copilot će predložiti: */
.btn-primary::hover {
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  transition: all 0.3s ease;
}
```

**Aktivacija:** `Tab` za accept, `Alt+]` za sledeću varijantu

---

### 2️⃣ Copilot Chat (Ctrl+L)

**Scenario:** Otvoriš Chat i pitaš:

```
"How do I create an animated underline effect
on hover for navigation links in CSS?"
```

**Copilot (GPT-4o) odgovara:**

```css
.site-nav-link {
  position: relative;
  overflow: hidden;
}

.site-nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.site-nav-link:hover::after {
  width: 100%;
}
```

---

### 3️⃣ Code Review (Desni klik → Review Code with Copilot)

**Scenario:** Otvoriš day01.css i traži review

**Copilot predlaže:**

- ✅ Redundant CSS pravila
- ✅ Nedostaju pseudo-elementi
- ✅ Optimizacija za performanse
- ✅ Accessibility poboljšanja

---

### 4️⃣ Next Edit Suggestions (Pro!)

**Scenario:** Izmeniš jedan CSS property

```css
.site-nav-list {
  flex-wrap: nowrap;
  /* Copilot već predlaže sledeće izmene: */
  overflow-x: auto; // ← Suggested
  scrollbar-width: thin; // ← Suggested
}
```

---

## 🎯 Keyboard Shortcuts - Must Know

| Akcija                | Keybinding    | Opis                     |
| --------------------- | ------------- | ------------------------ |
| **Copilot Chat**      | `Ctrl+L`      | Otvori AI asistenta      |
| **Inline Chat**       | `Ctrl+I`      | Quick inline suggestions |
| **Accept Suggestion** | `Tab`         | Prihvati Copilot predlog |
| **Next Variant**      | `Alt+]`       | Vidi drugu varijantu     |
| **Prev Variant**      | `Alt+[`       | Vidi prethodnu varijantu |
| **Dismiss**           | `Esc`         | Odbij predlog            |
| **Code Actions**      | `Ctrl+.`      | Open quick fixes         |
| **Format Doc**        | `Shift+Alt+F` | Format ceo fajl          |

---

## 📋 Common Use Cases za Učenje

### Use Case 1: "Objasni ovaj CSS kod"

```
U Chat: "Explain what this CSS does:
.site-nav-list::-webkit-scrollbar-thumb:hover {
  transform: scaleY(1.5);
  box-shadow: 0 0 6px rgb(56 189 248 / 40%);
}"
```

**Copilot odgovara sa detaljnim objašnjenjem svakog svojstva**

---

### Use Case 2: "Koja je razlika između..."

```
U Chat: "What's the difference between
flex-shrink: 0 and flex-shrink: 1?"
```

**Copilot pokazuje praktične primere sa vizuelnim rezultatima**

---

### Use Case 3: "Ispravka Bug-a"

```
U Chat: "My navigation links are wrapping
at tablet width. Here's my CSS: [paste code]
How do I fix this?"
```

**Copilot daje konkretne rešenje sa objašnjenjem**

---

## 🔧 Troubleshooting

### Problem: Copilot suggestions nisu vidljive

**Rešenje:**

```json
// Proveri da li je uključen
"github.copilot.enable": {
  "*": true,
  "css": true,
  "html": true
}
```

### Problem: Chat ne koristi GPT-4o

**Rešenje:**

```json
"github.copilot.chat.experimental.model": "gpt-4o"
```

### Problem: Auto-complete pre brzo/pre sporo

**Rešenje:**

```json
"editor.inlineSuggest.enabled": true,
"editor.quickSuggestions": {
  "other": true,
  "strings": true,
  "comments": false
}
```

---

## 📊 What You Get with Pro vs Free

| Feature                | Free       | Pro              |
| ---------------------- | ---------- | ---------------- |
| Inline Suggestions     | ✅ Limited | ✅ Unlimited     |
| Copilot Chat           | ✅ Partial | ✅ Full (GPT-4o) |
| Code Review            | ❌         | ✅               |
| Next Edit Suggestions  | ❌         | ✅               |
| Batch Processing       | ❌         | ✅               |
| Priority Support       | ❌         | ✅               |
| 50 PRs/month in web UI | ✅         | ✅ Unlimited     |

---

## 🎓 Learning Workflow sa Copilot Pro

### Phase 1: Understanding (15 min)

- Otvori CSS fajl
- Hover över kod → vidiš AI sažetak
- Pročitaj šta se dešava

### Phase 2: Experimentation (20 min)

- `Ctrl+L` otvori Chat
- Pitaj specifična pitanja
- Gledaj Copilot odgovore

### Phase 3: Implementation (25 min)

- Počni pisati kod
- Prihvati/odbij Copilot suggestije
- Live server vidiš rezultate

### Phase 4: Refinement (10 min)

- Code review sa Copilot-om
- Cleanup i optimizacija
- Commit u Git

---

## ✅ Pre-Launch Checklist

- [ ] Uklonio/la sam JSON trailing comma
- [ ] Dodao/la sam sve Pro features blok
- [ ] `gpt-4o` je postavljen kao model
- [ ] `editor.inlineSuggest.enabled` je `true`
- [ ] Restartovao/la sam VS Code (`Ctrl+Shift+P` → Reload)
- [ ] Testirao/la sam `Ctrl+L` Chat
- [ ] Proverili su `Tab` autocomplete

---

## 🚀 Next Steps

1. **Kopiraj kompletan JSON** iz sekcije "Complete Settings JSON"
2. **Otvori** `Ctrl+,` → Settings
3. **Pretraži** `@modified` da vidiš šta si promeni
4. **Idi na** `workbench.cv-website/` projekat
5. **Otvori** day01.css i testiraj:
   - Kucaj: `/* Create hover animation */`
   - Copilot će predložiti kompletan kod!

---

**Remember:** Copilot Pro je alat za **bržo učenje**, ne za **skraćivanje učenja**. Razumevanje je ključno! | Copilot Pro je alat za bržo učenje, ne za skraćivanje učenja. 🎯

---
