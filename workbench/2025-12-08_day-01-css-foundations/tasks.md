# 📋 Day 01 - CSS Foundations Tasks

**Date:** December 8, 2025
**Branch:** `learn/day-01-css-foundations`

---

## Task 1: CSS Cascade Understanding ⚡

**Duration:** 30 min
**Difficulty:** ⭐ Beginner

### What to Do

1. Open `workbench/teoria/css/01-specificity-cascade.md`
2. Read sections:
   - "CSS Cascade Concept"
   - "Cascade Order"
   - "How Browser Chooses Styles"
3. Write in your notes:
   - 3 examples of cascade in action
   - 1 mistake people make with cascade
   - How to debug cascade problems

### Expected Result

Clear understanding of CSS cascade and ability to predict which style will be applied.

---

## Task 2: Apply CSS to CV Website 🎨

**Duration:** 60 min
**Difficulty:** ⭐⭐ Intermediate

### Step 1: Setup (10 min)

```bash
# Open cv-website in VS Code
cd workbench/cv-website

# Open preview in browser
# (you can use Live Server extension)
```

### Step 2: Inspect Current State (10 min)

- Open `index.html` in browser
- Press F12 to open DevTools
- Look at applied styles in Styles panel
- Note which variables are being used

### Step 3: Make Changes (30 min)

**Create or update `css/day01.css`:**

```css
/* Import the CSS architecture variables */
@import url("../../../workbench/css-architecture/variables/colors.css");
@import url("../../../workbench/css-architecture/variables/typography.css");
@import url("../../../workbench/css-architecture/variables/spacing.css");

/* Apply variables to header */
header {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  padding: var(--spacing-lg);
  font-family: var(--font-family-sans);
}

/* Style navigation links */
nav a {
  color: var(--color-link);
  text-decoration: none;
  padding: var(--spacing-sm);
}

nav a:hover {
  color: var(--color-link-hover);
  text-decoration: underline;
}

/* More styles... */
```

### Step 4: Test & Verify (10 min)

- [ ] Open browser (hard refresh: Ctrl+Shift+R)
- [ ] Verify styles are applied
- [ ] Check DevTools → Styles panel for cascade
- [ ] Run `npm run lint` - should pass

---

## Task 3: Debug with DevTools 🔍

**Duration:** 20 min
**Difficulty:** ⭐⭐ Intermediate

### Challenge

1. Find one element where CSS is applied
2. Right-click → Inspect Element
3. In DevTools Styles panel:
   - Find which rule is currently applied (green checkmark)
   - Find rules being overridden (strikethrough)
   - Check specificity column

### Screenshot Time!

- Take screenshot of DevTools showing:
  - Element selected
  - Multiple CSS rules in cascade
  - One rule overriding another
- Save to: `workbench/2025-12-08_day-01-css-foundations/`

---

## Task 4: Daily Learning Log 📝

**Duration:** 15 min
**Difficulty:** ⭐ Beginner

### Write Your Reflection

**File:** `workbench/learning-progress/log.md`

**Template:**

```markdown
## December 8, 2025 - Day 1 CSS Foundations

### What I Learned

1. CSS Cascade - last rule wins, unless overridden by specificity
2. Specificity - IDs (100) > Classes (10) > Elements (1)
3. Variables - powerful for maintaining consistent styles

### Code Written

- Updated cv-website/css/day01.css with variable imports
- Applied --color-_ and --spacing-_ variables to header and nav

### Challenges Faced

- Initially forgot @import paths
- DevTools Styles panel - took time to understand cascade visualization

### Tomorrow's Focus

- Practice specificity calculations more
- Learn about CSS inheritance
- Build more complex selectors

### Time Spent

- Learning: 45 min
- Coding: 75 min
- Documentation: 15 min
- **Total: 135 min (2.25 hours)**

### Key Takeaway

🎯 CSS Cascade is logical when you understand specificity. Browser follows rules, no magic!
```

---

## Task 5: Git Commit & Push 🚀

**Duration:** 10 min
**Difficulty:** ⭐ Beginner

### Commands to Run

```bash
# Check what you changed
git status

# Add all changes
git add .

# Commit with meaningful message
git commit -m "feat(day-01): Learn CSS cascade and apply variables to cv-website"

# Push to your learning branch
git push origin learn/day-01-css-foundations

# Verify it worked
git log --oneline -5
```

### What to Verify

- [ ] All changes are staged (`git status` shows nothing to commit)
- [ ] Commit message is clear and follows pattern
- [ ] Branch name is correct: `learn/day-01-css-foundations`
- [ ] Push succeeded (no errors)

---

## ✅ Completion Checklist

- [ ] Read CSS cascade cheatsheet completely
- [ ] Took notes with 3 examples + 1 mistake + debugging
- [ ] Updated cv-website/css/day01.css
- [ ] Tested in browser - CSS applied correctly
- [ ] Took DevTools screenshot showing cascade
- [ ] Ran `npm run lint` - all pass ✅
- [ ] Wrote daily log entry with reflection
- [ ] Committed code with clear message
- [ ] Pushed to `learn/day-01-css-foundations`
- [ ] Verified git history with `git log`

---

## 💡 Learning Resources

| Resource                                         | Why Use It               |
| ------------------------------------------------ | ------------------------ |
| `workbench/teoria/css/01-specificity-cascade.md` | Theory and examples      |
| Browser DevTools                                 | See CSS in action, debug |
| `workbench/css-architecture/`                    | Reference for variables  |
| `workbench/learning-progress/log.md`             | Track your progress      |

---

## 🎯 Expected Time

| Task                  | Time                     |
| --------------------- | ------------------------ |
| 1. Reading & Notes    | 30 min                   |
| 2. Coding Practice    | 60 min                   |
| 3. DevTools Debugging | 20 min                   |
| 4. Learning Log       | 15 min                   |
| 5. Git & Commit       | 10 min                   |
| **TOTAL**             | **135 min (2.25 hours)** |

---

## 🚨 If You Get Stuck

1. **CSS not applying?**

   - Check @import paths
   - Run `npm run lint`
   - Clear browser cache (Ctrl+Shift+Del)
   - Hard refresh (Ctrl+Shift+R)

2. **Variables not working?**

   - Verify file exists: `workbench/css-architecture/variables/colors.css`
   - Check DevTools Computed tab - shows all available variables
   - Look at working example in `workbench/cv-website/css/`

3. **Git push fails?**

   - Check branch: `git branch --show-current`
   - Verify files staged: `git status`
   - Try: `git push -u origin learn/day-01-css-foundations`

4. **Need more help?**
   - Review `workbench/cheatsheets/` folder
   - Check `workbench/README.md` for structure
   - Search in DevTools → Sources tab for CSS files

---

## Next Steps

✅ Complete all tasks above
→ Push to `learn/day-01-css-foundations`
→ Move to Day 02: CSS Specificity Deep Dive
