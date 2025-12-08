# 🎓 Day 01 - CSS Foundations Cheatsheet

**Quick Reference for Today's Learning**

---

## CSS Cascade Quick Rules

```
Browser applies styles in this order:
1. Browser defaults
2. External stylesheets (if linked first)
3. Internal stylesheets (<style> tag)
4. Inline styles (style="...")
↓
Last one wins (unless overridden by specificity)
```

---

## Specificity Calculator

| Type | Value | Example |
|------|-------|---------|
| Element | 1 | `p { }` |
| Class | 10 | `.button { }` |
| ID | 100 | `#header { }` |
| Inline | 1000 | `style="color: red"` |
| !important | ∞ | `color: red !important` |

**Example:** `.container p.text` = 10 + 1 + 10 = 21

---

## CSS Variables (Custom Properties)

```css
/* Define variables */
:root {
  --main-color: #333;
  --spacing: 1rem;
}

/* Use variables */
body {
  color: var(--main-color);
  padding: var(--spacing);
}

/* With fallback */
color: var(--missing-color, blue);
```

---

## CSS Architecture in Project

```
workbench/css-architecture/variables/
├── colors.css
├── typography.css
├── spacing.css
├── layout.css
├── animations.css
├── borders.css
└── navigation.css
```

**Import in your CSS:**
```css
@import url("../../../workbench/css-architecture/variables/colors.css");
```

---

## DevTools Cascade View

```
Styles Panel Layout:
┌─────────────────────────────────────┐
│ Element Rules (matched & applied)   │
│ ✓ background-color: #fff            │
│ ✓ padding: 10px                     │
└─────────────────────────────────────┘
│ Overridden Rules (strikethrough)    │
│ ✕ color: red (overridden by class)  │
│ ✕ font-size: 12px (cascade)         │
└─────────────────────────────────────┘
│ Inherited from Parent               │
│ color: #333 (inherited)             │
└─────────────────────────────────────┘
```

---

## Common Cascade Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Wrong order | Linked CSS after internal | Put external first |
| Low specificity | Style doesn't apply | Increase specificity |
| Too specific | Hard to override | Use classes, avoid IDs |
| !important | Can't override | Avoid, use specificity |
| Missing import | Variables undefined | Check @import path |

---

## Practice Example

```html
<!-- HTML -->
<header class="site-header">
  <nav class="main-nav">
    <a href="/" class="nav-link">Home</a>
  </nav>
</header>
```

```css
/* CSS with cascade in action */

/* 1. Element style (base) */
a {
  color: blue;
  text-decoration: none;
}

/* 2. Class style (higher specificity) */
.nav-link {
  color: white;
  background: #333;
}

/* 3. Context style (even more specific) */
.main-nav .nav-link {
  font-weight: bold;
}

/* Winner: white text with bold (class + context cascade) */
```

---

## Today's Goal in One Sentence

**Understand that CSS is applied logically through cascade + specificity, and learn to predict what style wins.**

