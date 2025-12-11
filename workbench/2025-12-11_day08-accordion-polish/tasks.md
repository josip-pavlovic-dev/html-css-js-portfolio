# ✅ Tasks - Accordion Final Polish | _Zadaci - Finalno poliranje accordiona_

**Date:** 2025-12-11
**Session:** Day 08 - Accordion Final Polish

---

## 🎯 Phase 1: HTML Structure (30 min)

### Semantic HTML Review

- [ ] Verify `<header>`, `<main>`, `<footer>` structure
- [ ] Check heading hierarchy (`h1` → `h2`)
- [ ] Ensure buttons are inside headings
- [ ] Add `lang` attribute to `<html>`
- [ ] Verify viewport meta tag

### ARIA Implementation

- [ ] `aria-expanded` on all accordion triggers
- [ ] `aria-controls` linking triggers to panels
- [ ] `aria-labelledby` on panels
- [ ] `role="region"` on accordion panels
- [ ] `aria-label` on footer meta list
- [ ] `hidden` on closed panels
- [ ] `aria-pressed` on theme toggle
- [ ] `focusable="false"` on decorative SVGs

### Accessibility Markup

- [ ] All interactive elements are `<button>` or `<a>`
- [ ] Images have descriptive `alt` text (or empty if decorative)
- [ ] Form controls have labels (if any)
- [ ] Skip to content link (optional for this project)

---

## 🎨 Phase 2: CSS Styling (60 min)

### Design Token Integration

- [ ] Import design tokens from `css-architecture/variables/`
- [ ] Use `--color-*` variables consistently
- [ ] Apply `--space-*` for spacing
- [ ] Use `--font-size-*` for typography
- [ ] Apply `--duration-*` for animations

### Layout & Responsive

- [ ] Mobile-first approach (base styles = mobile)
- [ ] Tablet breakpoint (~768px)
- [ ] Desktop breakpoint (~1024px)
- [ ] Large desktop optimizations (~1440px+)
- [ ] Test header layout at all sizes
- [ ] Footer responsiveness check

### Visual Polish

- [ ] Hover states on interactive elements
- [ ] Focus-visible styles (keyboard focus)
- [ ] Active states for buttons
- [ ] Smooth transitions on accordion expand/collapse
- [ ] Icon rotation animation
- [ ] Card shadow and border styles

### Theme Support

- [ ] Light mode color palette
- [ ] Dark mode overrides in `[data-theme="dark"]`
- [ ] Ensure sufficient color contrast (WCAG AA)
- [ ] Theme toggle button visual states

---

## ⚙️ Phase 3: JavaScript (45 min)

### Core Functionality

- [ ] Open first panel on page load
- [ ] Prevent closing the only open panel
- [ ] Update `aria-expanded` on toggle
- [ ] Toggle `hidden` attribute on panels
- [ ] Add/remove `is-open` CSS class

### Theme Toggle

- [ ] Read initial theme from `data-theme`
- [ ] Toggle between light/dark
- [ ] Update `aria-pressed` state
- [ ] Update `aria-label` on toggle
- [ ] Persist theme (optional: localStorage)

### Code Quality

- [ ] Add JSDoc comments for functions
- [ ] Use descriptive variable names
- [ ] Extract magic numbers to constants
- [ ] Add error handling (null checks)
- [ ] Use modern ES6+ syntax

---

## ♿ Phase 4: Accessibility Testing (45 min)

### Keyboard Navigation

- [ ] Tab through all interactive elements
- [ ] Space/Enter activates buttons
- [ ] Focus order matches visual order
- [ ] Focus visible on all interactive elements
- [ ] No keyboard traps

### Screen Reader Testing

- [ ] Install NVDA (Windows) or VoiceOver (Mac)
- [ ] Test accordion announcement patterns
- [ ] Verify panel open/close states announced
- [ ] Check heading levels announced correctly
- [ ] Test theme toggle announcement

### Visual Checks

- [ ] Color contrast analyzer (4.5:1 text, 3:1 UI)
- [ ] Test with browser zoom (up to 200%)
- [ ] Test in high contrast mode
- [ ] Verify focus indicators are visible

---

## 📝 Phase 5: Documentation (30 min)

### Component README

- [ ] Update `accordion/README.md` with final implementation details
- [ ] Add usage instructions
- [ ] Document ARIA patterns used
- [ ] List browser/assistive tech tested
- [ ] Add screenshot or demo link

### Code Comments

- [ ] Inline comments for complex logic
- [ ] Section headers in CSS
- [ ] JSDoc for JavaScript functions

### Cheatsheet Creation

- [ ] Key accessibility patterns learned
- [ ] CSS architecture decisions
- [ ] JavaScript best practices applied
- [ ] Common pitfalls avoided

---

## 🚀 Phase 6: Deployment Prep (Optional)

- [ ] Minify CSS for production (optional)
- [ ] Optimize images
- [ ] Check browser compatibility
- [ ] Test on real devices
- [ ] Create GitHub Pages deployment

---

## ✅ Final Checklist | _Finalna checklista_

- [ ] All HTML validated (W3C Validator)
- [ ] CSS linted (no errors)
- [ ] JavaScript linted (no errors)
- [ ] Accessibility tested with screen reader
- [ ] Keyboard navigation fully functional
- [ ] Responsive on mobile, tablet, desktop
- [ ] Theme toggle working
- [ ] Component documented
- [ ] Code committed to Git
- [ ] Ready for portfolio showcase

---

**Total Estimated Time:** 3-4 hours
**Priority:** High (portfolio component)
**Complexity:** Medium (refinement, not new learning)
