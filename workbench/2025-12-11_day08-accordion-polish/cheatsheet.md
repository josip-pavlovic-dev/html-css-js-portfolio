# 📚 Cheatsheet - Accordion Final Polish | _Cheatsheet - Finalno poliranje accordiona_

**Date:** 2025-12-11
**Topic:** Production-ready accordion component patterns

---

## 🎯 Accordion ARIA Pattern

### Required ARIA Attributes

```html
<!-- Accordion container -->
<section aria-label="Frequently Asked Questions">
  <!-- Each item -->
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        type="button"
        aria-expanded="false"
        aria-controls="panel-1"
        id="header-1"
      >
        Question text
      </button>
    </h2>

    <div id="panel-1" role="region" aria-labelledby="header-1" hidden>
      <p>Answer content</p>
    </div>
  </div>
</section>
```

### ARIA Attribute Purposes

| Attribute         | Purpose                             | Location |
| ----------------- | ----------------------------------- | -------- |
| `aria-expanded`   | Indicates if panel is open/closed   | Button   |
| `aria-controls`   | Links button to panel ID            | Button   |
| `aria-labelledby` | Links panel to header ID            | Panel    |
| `role="region"`   | Marks panel as landmark             | Panel    |
| `hidden`          | Removes closed panel from a11y tree | Panel    |

---

## 🎨 CSS Architecture Integration

### Using Design Tokens

```css
/* Import from css-architecture */
@import url("../../css-architecture/variables/colors.css");
@import url("../../css-architecture/variables/spacing.css");
@import url("../../css-architecture/variables/typography.css");

/* Use tokens in styles */
.accordion-trigger {
  padding: var(--space-md);
  font-size: var(--font-size-base);
  color: var(--color-text);
  background: var(--color-bg);
  transition: background var(--duration-fast) var(--transition-easing);
}
```

### Key Design Tokens

```css
/* Spacing */
--space-xs: 0.25rem; /* 4px */
--space-sm: 0.5rem; /* 8px */
--space-md: 1rem; /* 16px */
--space-lg: 2rem; /* 32px */

/* Colors */
--color-text: #222;
--color-text-muted: #4b5563;
--color-bg: #fff;
--color-border: #ddd;
--color-accent: #4b6bfb;

/* Typography */
--font-size-base: 1rem;
--font-size-sm: 0.875rem;
--line-height-base: 1.6;
```

---

## ⚙️ JavaScript Best Practices

### Initialize First Panel Open

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".accordion-item");

  // Open first panel on load
  if (items.length > 0) {
    const firstItem = items[0];
    const firstTrigger = firstItem.querySelector(".accordion-trigger");
    const firstPanel = document.getElementById(
      firstTrigger.getAttribute("aria-controls")
    );

    firstTrigger.setAttribute("aria-expanded", "true");
    firstPanel.hidden = false;
    firstItem.classList.add("is-open");
  }
});
```

### Accordion Toggle Logic (One Always Open)

```javascript
trigger.addEventListener("click", () => {
  const isOpen = trigger.getAttribute("aria-expanded") === "true";

  // If already open, don't close (keep one open always)
  if (isOpen) return;

  // Close all panels
  items.forEach((item) => {
    const btn = item.querySelector(".accordion-trigger");
    const panelId = btn.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);

    btn.setAttribute("aria-expanded", "false");
    panel.hidden = true;
    item.classList.remove("is-open");
  });

  // Open clicked panel
  trigger.setAttribute("aria-expanded", "true");
  panel.hidden = false;
  item.classList.add("is-open");
});
```

---

## 🎭 Theme Toggle Pattern

```javascript
const applyTheme = (theme) => {
  const root = document.documentElement;
  const isDark = theme === "dark";

  root.setAttribute("data-theme", theme);
  toggleBtn.setAttribute("aria-pressed", String(isDark));
  toggleBtn.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme"
  );
};

// Read initial theme
const initialTheme =
  document.documentElement.getAttribute("data-theme") || "light";
applyTheme(initialTheme);

// Toggle on click
toggleBtn.addEventListener("click", () => {
  const current =
    document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
});
```

---

## ♿ Accessibility Checklist

### WCAG 2.1 AA Requirements

- [ ] **1.4.3 Contrast (Minimum):** Text has 4.5:1 contrast, UI elements 3:1
- [ ] **2.1.1 Keyboard:** All functionality available via keyboard
- [ ] **2.4.7 Focus Visible:** Keyboard focus is clearly visible
- [ ] **4.1.2 Name, Role, Value:** All UI components have accessible names and roles

### Testing Tools

| Tool                     | Purpose                 | Link                                                                     |
| ------------------------ | ----------------------- | ------------------------------------------------------------------------ |
| WAVE                     | Accessibility checker   | [wave.webaim.org](https://wave.webaim.org)                               |
| axe DevTools             | Browser extension       | Chrome/Firefox extension                                                 |
| Colour Contrast Analyser | Contrast checker        | [paciellogroup.com/resources/](https://www.paciellogroup.com/resources/) |
| NVDA                     | Screen reader (Windows) | [nvaccess.org](https://www.nvaccess.org/)                                |
| VoiceOver                | Screen reader (Mac)     | Built into macOS                                                         |

---

## 📐 Responsive Breakpoints

```css
/* Mobile-first base styles */
.container {
  padding: 1rem;
}

/* Tablet (768px+) */
@media (min-width: 48rem) {
  .container {
    padding: 1.5rem;
  }
}

/* Desktop (1024px+) */
@media (min-width: 64rem) {
  .container {
    padding: 2rem;
    max-width: 80rem;
  }
}

/* Large desktop (1440px+) */
@media (min-width: 90rem) {
  .footer-meta li {
    font-size: var(--font-size-sm);
  }
}
```

---

## 🎨 Focus States

```css
/* Hide default outline */
:focus {
  outline: none;
}

/* Show custom focus for keyboard */
:focus-visible {
  outline: 2px dashed var(--color-accent);
  outline-offset: 2px;
}

/* Button-specific focus */
.accordion-trigger:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

---

## 🔧 Common Pitfalls to Avoid

### ❌ Don't

```html
<!-- Missing ARIA attributes -->
<button onclick="toggle()">Question</button>
<div id="answer">Answer</div>

<!-- Using divs instead of buttons -->
<div class="trigger">Question</div>

<!-- Inline styles (not maintainable) -->
<div style="display: none;">Answer</div>
```

### ✅ Do

```html
<!-- Proper ARIA and semantics -->
<h2>
  <button
    type="button"
    aria-expanded="false"
    aria-controls="answer-1"
    id="question-1"
  >
    Question
  </button>
</h2>
<div id="answer-1" role="region" aria-labelledby="question-1" hidden>
  <p>Answer</p>
</div>
```

---

## 📝 Code Quality Standards

### JavaScript

- Use `const` and `let`, never `var`
- Add JSDoc comments for functions
- Handle null/undefined cases
- Use meaningful variable names
- Extract magic numbers to constants

### CSS

- Use design tokens (CSS variables)
- Mobile-first responsive approach
- Group related styles with comments
- Use BEM or similar naming convention
- Avoid `!important`

### HTML

- Semantic elements (`<header>`, `<main>`, `<footer>`)
- Proper heading hierarchy
- ARIA only where needed
- Descriptive IDs and classes

---

## 🎓 Key Learnings

1. **One panel always open** prevents confusing UX (user always has content)
2. **`hidden` attribute** removes closed panels from accessibility tree
3. **Design tokens** ensure consistency and maintainability
4. **Focus-visible** gives keyboard users clear focus without annoying mouse users
5. **ARIA landmarks** help screen reader users navigate efficiently

---

**Remember:** Accessibility is not optional—it's a requirement for professional web development! ♿✨
