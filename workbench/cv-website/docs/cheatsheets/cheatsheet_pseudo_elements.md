---
type: cheatsheet
topic: CSS Pseudo-Elements - Complete Reference
date: 2025-12-08
linked_to: day01.css, cv-website, html-css-fundamentals
language: bilingual
status: production-ready
difficulty: beginner-to-advanced
audience: myself
recommended_by: codex
---

# 📘 Cheatsheet: CSS Pseudo-Elements - Complete Guide

## ✅ Key Concepts

**Pseudo-Element** | _Pseudo-element_

- Style a **specific part** of an element | Stilizuje **određeni deo** elementa
- Uses **double colon** `::` syntax | Koristi **dve tačke** `::` sintaksa
- Creates "virtual" elements | Kreira "virtuelne" elemente
- Not part of DOM | Nije deo DOM-a

**Syntax** | _Sintaksa_

```css
selector::pseudo-element {
  property: value;
}
```

---

## 🎯 Common Pseudo-Elements

### 1️⃣ `::before` - Insert Content Before

**Purpose:** Adds content **before** element's actual content | Dodaje sadržaj **pre** stvarnog sadržaja

```css
.hero-title::before {
  content: "👋 ";
  font-size: 2rem;
  margin-right: 0.5rem;
}
```

**HTML:**

```html
<h1 class="hero-title">Zdravo, ja sam Josip</h1>
```

**Result:** 👋 Zdravo, ja sam Josip

---

### 2️⃣ `::after` - Insert Content After

**Purpose:** Adds content **after** element's actual content | Dodaje sadržaj **posle** stvarnog sadržaja

```css
.hero-title::after {
  content: "";
  display: block;
  width: 3rem;
  height: 3px;
  margin-top: 0.75rem;
  border-radius: 999px;
  background: var(--color-primary);
}
```

**HTML:**

```html
<h1 class="hero-title">Zdravo, ja sam Josip</h1>
```

**Result:**

```
Zdravo, ja sam Josip
───  (blue underline)
```

---

### 3️⃣ `::first-letter` - Style First Letter

**Purpose:** Styles the **first letter** of text | Stilizuje **prvo slovo** teksta

```css
.hero-subtitle::first-letter {
  font-size: 2em;
  font-weight: 700;
  color: var(--color-primary);
  float: left;
  line-height: 1;
  margin-right: 0.1em;
}
```

**HTML:**

```html
<p class="hero-subtitle">Junior Web Developer sa strašću za automatizaciju.</p>
```

**Result:**

```
J unior Web Developer sa strašću...
  ↑ (large, blue, bold)
```

---

### 4️⃣ `::first-line` - Style First Line

**Purpose:** Styles the **first line** of text | Stilizuje **prvi red** teksta

```css
.hero-subtitle::first-line {
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
}
```

**HTML:**

```html
<p class="hero-subtitle">
  Junior Web Developer sa strašću za automatizaciju, podatke i čist kod.
</p>
```

**Result:**

```
JUNIOR WEB DEVELOPER SA STRAŠĆU ZA AUTOMATIZACIJU,  ← (bold, blue, uppercase)
podatke i čist kod.                                  ← (normal)
```

---

### 5️⃣ `::selection` - Style Selected Text

**Purpose:** Styles text when **user selects** it | Stilizuje tekst kada ga **korisnik selektuje**

```css
::selection {
  background: var(--color-primary);
  color: #fff;
}
```

**Usage:** Select text on page → See blue background with white text

---

### 6️⃣ `::placeholder` - Style Input Placeholders

**Purpose:** Styles **placeholder text** in inputs | Stilizuje **placeholder tekst** u input-ima

```css
input::placeholder {
  color: var(--color-muted);
  opacity: 0.7;
  font-style: italic;
}
```

**HTML:**

```html
<input type="text" placeholder="Unesite vaše ime..." />
```

---

### 7️⃣ `::marker` - Style List Markers

**Purpose:** Styles **bullets/numbers** in lists | Stilizuje **bullet tačke/brojeve** u listama

```css
.site-nav-list li::marker {
  color: var(--color-primary);
  font-size: 1.2em;
}
```

**HTML:**

```html
<ul class="site-nav-list">
  <li>Početna</li>
  <li>O meni</li>
</ul>
```

**Result:**

```
• Početna  ← (blue bullet)
• O meni  ← (blue bullet)
```

---

## 🔧 WebKit-Specific Pseudo-Elements

### 8️⃣ `::-webkit-scrollbar` Family

**Purpose:** Styles **scrollbar parts** (Chrome/Safari only) | Stilizuje **delove scrollbar-a** (samo Chrome/Safari)

```css
/* Container */
.site-nav-list::-webkit-scrollbar {
  height: 0.25rem;
  width: 0.5rem;
}

/* Draggable thumb */
.site-nav-list::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: var(--radius-full);
}

/* Background track */
.site-nav-list::-webkit-scrollbar-track {
  background: transparent;
}

/* Hover state */
.site-nav-list::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-light);
}

/* Corner where scrollbars meet */
.site-nav-list::-webkit-scrollbar-corner {
  background: transparent;
}

/* Buttons (arrows) */
.site-nav-list::-webkit-scrollbar-button {
  display: none;
}
```

---

### 9️⃣ `::-webkit-input-placeholder` (Legacy)

**Purpose:** Old syntax for placeholder styling | Stara sintaksa za placeholder stilizovanje

```css
/* Modern (use this!) */
input::placeholder {
  color: var(--color-muted);
}

/* Legacy WebKit */
input::-webkit-input-placeholder {
  color: var(--color-muted);
}

/* Legacy Firefox */
input::-moz-placeholder {
  color: var(--color-muted);
}
```

---

## 🎨 Advanced Techniques

### 10️⃣ Decorative Shapes with `::before/::after`

```css
.btn-primary {
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s ease;
}

.btn-primary:hover::before {
  left: 100%; /* Slide across on hover */
}
```

**Result:** Shiny "wipe" animation on button hover

---

### 1️⃣1️⃣ Icon with `::before` (Font Awesome style)

```css
.site-nav-link-active::before {
  content: "● ";
  color: var(--color-primary);
  margin-right: 0.3rem;
}
```

**Result:** ● Početna

---

### 1️⃣2️⃣ Tooltip with `::after`

```css
.tooltip {
  position: relative;
}

.tooltip::after {
  content: attr(data-tooltip); /* Uses HTML attribute! */
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  background: #000;
  color: #fff;
  border-radius: 0.375rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.tooltip:hover::after {
  opacity: 1;
}
```

**HTML:**

```html
<span class="tooltip" data-tooltip="Ovo je tooltip!">Hover me</span>
```

---

### 1️⃣3️⃣ Breadcrumb Separator

```css
.breadcrumb li:not(:last-child)::after {
  content: "/";
  margin: 0 0.5rem;
  color: var(--color-muted);
}
```

**HTML:**

```html
<ul class="breadcrumb">
  <li>Home</li>
  <li>Projects</li>
  <li>Calculator</li>
</ul>
```

**Result:** Home / Projects / Calculator

---

### 1️⃣4️⃣ External Link Icon

```css
a[href^="http"]::after {
  content: " ↗";
  font-size: 0.8em;
  color: var(--color-primary);
}
```

**Result:** External link ↗

---

## 📊 Pseudo-Element vs Pseudo-Class

| Feature     | Pseudo-Element (`::`)     | Pseudo-Class (`:`)            |
| ----------- | ------------------------- | ----------------------------- |
| **Syntax**  | `::before`, `::after`     | `:hover`, `:focus`            |
| **Purpose** | Style **part** of element | Style **state** of element    |
| **Creates** | Virtual element           | Changes existing element      |
| **Example** | `p::first-letter`         | `a:hover`                     |
| **DOM**     | Not in DOM                | Real element, different state |

---

## 🛠️ Practical Use Cases (Your Project!)

### ✅ Use Case 1: Hamburger Menu Lines

```css
.hamburger-line {
  /* Already a <span> in HTML, but could be ::before/::after! */
}

/* Alternative with pseudo-elements: */
.hamburger-menu::before,
.hamburger-menu::after {
  content: "";
  display: block;
  width: 1.5rem;
  height: 0.2rem;
  background: var(--color-text);
  border-radius: var(--radius-full);
  transition: var(--transition-base);
}

.hamburger-menu::before {
  transform: translateY(-0.55rem);
}

.hamburger-menu::after {
  transform: translateY(0.55rem);
}
```

---

### ✅ Use Case 2: Section Dividers

```css
.section::after {
  content: "";
  display: block;
  width: 3rem;
  height: 2px;
  margin: 2rem auto 0;
  background: var(--color-border);
  border-radius: var(--radius-full);
}
```

---

### ✅ Use Case 3: Card Hover Glow

```css
.demo-card {
  position: relative;
  overflow: hidden;
}

.demo-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.1), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.demo-card:hover::before {
  opacity: 1;
}
```

---

## 🚨 Common Mistakes | _Česte greške_

### ❌ Mistake 1: Forgetting `content` property

```css
/* WRONG - Won't work! */
.hero-title::before {
  color: red;
}

/* CORRECT */
.hero-title::before {
  content: ""; /* ← MUST HAVE! */
  color: red;
}
```

### ❌ Mistake 2: Using single colon `:` instead of `::`

```css
/* OLD SYNTAX (still works, but outdated) */
.hero-title:before {
  content: "";
}

/* MODERN SYNTAX (use this!) */
.hero-title::before {
  content: "";
}
```

### ❌ Mistake 3: Trying to use pseudo-elements on self-closing tags

```css
/* WON'T WORK - <img> is self-closing! */
img::before {
  content: "";
}

/* SOLUTION: Wrap in container */
.image-wrapper::before {
  content: "";
}
```

**Self-closing tags:** `<img>`, `<input>`, `<br>`, `<hr>`, `<meta>`, `<link>`

---

## 🎓 DevTools Inspection

**Step 1:** Otvori Elements panel (`Ctrl+Shift+C`)

**Step 2:** Selektuj element sa pseudo-elementom

**Step 3:** U Styles panelu vidi:

```
element.style { }

.hero-title::after {
  content: "";
  display: block;
  width: 3rem;
}
```

**Step 4:** Klikni `::after` u DOM tree (levo) da vidiš computed values

**Step 5:** Live edit u Styles panelu:

```css
/* Change width in real-time */
width: 5rem; /* See change immediately! */
```

---

## 📥 Related Topics

- **CSS Pseudo-Classes** | `:hover`, `:focus`, `:active`, `:nth-child()`
- **Content Property** | `content: ""`, `content: attr()`, `content: counter()`
- **Position Property** | `absolute`, `relative` for pseudo-element placement
- **Transform Property** | `translate`, `rotate`, `scale` for animations
- **CSS Counters** | Auto-numbering with `counter-increment`, `counter()`
- **Attribute Selectors** | `[href^="http"]`, `[data-tooltip]`

---

## 🚀 Practice Exercises

### Exercise 1: Underline Animation (10min)

**Goal:** Create animated underline on hover

```css
.site-nav-link {
  position: relative;
}

.site-nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0; /* Start hidden */
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.site-nav-link:hover::after {
  width: 100%; /* Expand on hover */
}
```

### Exercise 2: Quote Marks (5min)

**Goal:** Add decorative quotes around blockquote

```css
blockquote::before {
  content: "" "; /* Unicode quotation mark */
  font-size: 3rem;
  color: var(--color-primary);
  opacity: 0.3;
}

blockquote::after {
  content: " "";
  font-size: 3rem;
  color: var(--color-primary);
  opacity: 0.3;
}
```

### Exercise 3: Loading Spinner (15min)

**Goal:** Pure CSS loading animation

```css
.spinner {
  position: relative;
  width: 2rem;
  height: 2rem;
}

.spinner::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

---

## 💡 Pro Tips

1. **Always include `content: ""`** even if empty | Uvek uključi `content: ""` čak i ako je prazan
2. **Use `attr()` for dynamic content** | Koristi `attr()` za dinamički sadržaj
3. **Combine with `:hover`, `:focus`** | Kombinuj sa `:hover`, `:focus`
4. **`position: absolute` needs parent with `position: relative`** | `position: absolute` treba roditelj sa `position: relative`
5. **Can't style pseudo-elements with JavaScript** | Ne možeš stilizovati pseudo-elemente sa JavaScript-om (use CSS classes!)

---

## 🎯 Your Next Steps

1. ✅ Pročitaj cheatsheet (15min)
2. ✅ Otvori DevTools, inspektuj `.hero-title::after` (5min)
3. ✅ Probaj Exercise 1 - Underline Animation (10min)
4. ✅ Dodaj novi pseudo-element u day01.css (15min)
5. ✅ Javi mi šta si napravio! 🎨

---

**Remember:** Pseudo-elements are your friends! They keep HTML clean and add visual flair without extra markup. | Pseudo-elementi su tvoji prijatelji! Drže HTML čistim i dodaju vizuelne detalje bez dodatne markup-a.

---
