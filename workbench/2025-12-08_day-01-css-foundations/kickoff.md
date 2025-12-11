# 🚀 Day 01 - CSS Foundations Kickoff

**Date:** December 8, 2025
**Duration:** 4 hours
**Focus:** Refresh CSS fundamentals and start building professional habit

---

## 🎯 Daily Goal

By end of day, you will:

- ✅ Understand CSS cascade, specificity, and inheritance
- ✅ Practice with real examples in `cv-website/`
- ✅ Create your first daily learning log entry
- ✅ Push working code to Git with clean commits

---

## 📚 Learning Path

### 1. **Refresh Basics** (30 min)

- Open: [`workbench/teoria/css/01-specificity-cascade.md`](../teoria/css/01-specificity-cascade.md)
- Read: Full cheatsheet on cascade and specificity
- Take notes on 3 key learnings

### 2. **Hands-On Practice** (90 min)

- Open: [`workbench/cv-website/`](../cv-website/) in VS Code
- View: Live preview in browser (using Live Server or similar)
- **Task 1:** Apply CSS to [`index.html`](../cv-website/index.html) using cascade rules
- **Task 2:** Override styles using specificity (add class selectors)
- **Task 3:** Use CSS variables from [`css-architecture/variables/`](../css-architecture/variables/)

### 3. **Test & Debug** (60 min)

- Open DevTools (F12) → Inspect elements
- Verify: CSS is applied correctly
- Check: No ESLint errors (`npm run lint`)
- Screenshot: Final result

### 4. **Document & Commit** (30 min)

- Write: Daily notes in `learning-progress/log.md`
- Stage: Changed files with `git add .`
- Commit: `git commit -m "feat(day-01): CSS foundations practice"`
- Push: `git push -u origin learn/day-01-css-foundations`

---

## 🔧 Resources at Hand

| Resource       | Path                                             | Purpose         |
| -------------- | ------------------------------------------------ | --------------- |
| **Cheatsheet** | `workbench/teoria/css/01-specificity-cascade.md` | Learn theory    |
| **Variables**  | `workbench/css-architecture/variables/`          | Use in practice |
| **Project**    | `workbench/cv-website/`                          | Apply learning  |
| **Log**        | `workbench/learning-progress/log.md`             | Track progress  |

---

## ✅ Success Criteria

- [ ] All 3 key learnings documented in notes
- [ ] CSS changes applied to cv-website (visible in browser)
- [ ] DevTools verified styles are correct
- [ ] ESLint passes (`npm run lint`)
- [ ] Daily log entry completed with timestamp
- [ ] Code pushed to `learn/day-01-css-foundations` branch

---

## 💡 Pro Tips

1. **Use DevTools Effectively**

   - Right-click element → Inspect
   - Toggle CSS rules on/off in Styles panel
   - Monitor cascade in Elements panel

2. **Reference Your Variables**

   - Look at `variables/colors.css` for color options
   - Use `--color-text`, `--spacing-lg`, etc.
   - Import them with `@import` in your CSS

3. **Clean Commits**

   - Commit after each small feature
   - Message format: `feat(day-01): Brief description`
   - Keep atomic commits (one logical change per commit)

4. **If You Get Stuck**
   - Check the cheatsheet again (read slower)
   - Use browser DevTools → Computed tab
   - Search `workbench/cheatsheets/` for help

---

## 🎓 What You'll Know by End of Day

```
CSS Cascade & Specificity
├─ How browser applies styles (last rule wins)
├─ Specificity calculation (100, 010, 001)
├─ How to override unwanted styles
└─ Why order matters in CSS

CSS Architecture
├─ Using CSS variables for consistency
├─ Organizing variables by category
├─ Light/dark theme with variables
└─ Scalable CSS for growth

Professional Workflow
├─ Clean Git history
├─ Daily learning documentation
├─ Code quality (ESLint)
└─ Self-directed learning habit
```

---

## 🚨 Common Issues & Solutions

| Issue                  | Solution                                       |
| ---------------------- | ---------------------------------------------- |
| Style not applying?    | Check specificity - use DevTools               |
| Variables not working? | Verify `@import` path is correct               |
| ESLint fails?          | Run `npm run lint` to see errors               |
| Can't see changes?     | Hard refresh browser (Ctrl+Shift+R)            |
| Git push fails?        | Check branch name: `git branch --show-current` |

---

**Ready? Let's go!** 💪

Next: Open [`workbench/teoria/css/01-specificity-cascade.md`](../teoria/css/01-specificity-cascade.md) and take notes.
