---
type: cheatsheet
topic: CSS Custom Properties - Professional Usage
date: 2025-12-09
difficulty: intermediate
status: production-ready
---

# 📘 CSS Custom Properties (CSS Variables) - Mastery

## 🎯 Šta su Custom Properties?

CSS Custom Properties (CSS Variables) su **dinamičke vrednosti** koje se mogu koristiti svuda u CSS-u.

```css
/* Deklaracija */
:root {
  --primary-color: #3b82f6;
  --spacing: 1rem;
}

/* Korišćenje */
.btn {
  background: var(--primary-color);
  padding: var(--spacing);
}
```

---

## 💡 Scope & Inheritance

CSS varijable se **nasledjuju** kao obični CSS properties!

```css
/* Globalni scope */
:root {
  --color: blue;
}

/* Komponenta može imati svoju vrednost */
.card {
  --color: red; /* Zamenjuje globalnu za .card */
}

.card h1 {
  color: var(--color); /* Koristi red iz .card */
}

body > h1 {
  color: var(--color); /* Koristi blue iz :root */
}
```

---

## 🔄 Dinamička Promena

Varijable se mogu menjati **dinamički sa JavaScript-om**!

```javascript
// Promeni varijablu za ceo dokument
document.documentElement.style.setProperty("--primary-color", "#38bdf8");

// Ili samo za određeni element
element.style.setProperty("--color", "green");
```

---

## 🌓 Light/Dark Mode Primer

```css
/* Light mode */
:root {
  --bg: white;
  --text: #333;
  --shadow: rgb(0 0 0 / 10%);
}

/* Dark mode */
html[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #e0e0e0;
  --shadow: rgb(0 0 0 / 50%);
}

/* Sve komponente se automatski menjaju */
body {
  background: var(--bg);
  color: var(--text);
}

.card {
  box-shadow: 0 1px 3px var(--shadow);
}
```

---

## 📱 Responsive sa Varijablama

```css
/* Mobile */
:root {
  --font-size: 0.875rem;
  --padding: 1rem;
  --max-width: 100%;
}

/* Tablet */
@media (width >= 768px) {
  :root {
    --font-size: 1rem;
    --padding: 1.5rem;
    --max-width: 90%;
  }
}

/* Desktop */
@media (width >= 1024px) {
  :root {
    --font-size: 1.125rem;
    --padding: 2rem;
    --max-width: 70rem;
  }
}

/* Sve komponente se automatski skaliraju! */
body {
  font-size: var(--font-size);
}

.container {
  padding: var(--padding);
  max-width: var(--max-width);
}
```

---

## ✅ Best Practices

### 1. Koristi Fallback Vrednosti

```css
.btn {
  background: var(
    --primary-color,
    #3b82f6
  ); /* Fallback ako varijabla ne postoji */
}
```

### 2. Grupiši Povezane Varijable

```css
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-primary-light: #60a5fa;
  --color-primary-dark: #1e40af;

  /* Spacing */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
}
```

### 3. Dodaj Suffix za Stanja

```css
:root {
  --color-primary: #3b82f6; /* Default */
  --color-primary-hover: #1e40af; /* Hover */
  --color-primary-active: #1e3a8a; /* Active */
}

.btn {
  background: var(--color-primary);
}

.btn:hover {
  background: var(--color-primary-hover);
}

.btn:active {
  background: var(--color-primary-active);
}
```

---

## 🚀 Napredne Tehnike

### Calc sa Varijablama

```css
:root {
  --base-size: 1rem;
  --scale: 1.25;
}

h1 {
  font-size: calc(var(--base-size) * var(--scale) * var(--scale));
}

h2 {
  font-size: calc(var(--base-size) * var(--scale));
}

p {
  font-size: var(--base-size);
}
```

### Color Opacity sa Varijablama

```css
:root {
  --color-primary-rgb: 59 130 246; /* RGB bez # */
}

.btn {
  background: rgb(var(--color-primary-rgb) / 100%);
}

.btn:hover {
  background: rgb(var(--color-primary-rgb) / 80%);
}

.btn:disabled {
  background: rgb(var(--color-primary-rgb) / 50%);
}
```

---

## 🎨 Praktičan Primer - Design System

```css
/* 1. Osnovne varijable */
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-success: #10b981;
  --color-error: #ef4444;

  /* Spacing scale (8px base) */
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;

  /* Borders */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.125rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 5%);
  --shadow-md: 0 4px 6px rgb(0 0 0 / 10%);
  --shadow-lg: 0 10px 15px rgb(0 0 0 / 15%);

  /* Animations */
  --duration-fast: 0.1s;
  --duration-normal: 0.3s;
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}

/* 2. Dark mode overrides */
html[data-theme="dark"] {
  --color-primary: #38bdf8;
  --color-secondary: #a78bfa;
  --color-success: #6ee7b7;
  --color-error: #f87171;

  /* Shadows su jaće u dark modu */
  --shadow-sm: 0 1px 2px rgb(0 0 0 / 20%);
  --shadow-md: 0 4px 6px rgb(0 0 0 / 30%);
  --shadow-lg: 0 10px 15px rgb(0 0 0 / 40%);
}

/* 3. Komponente koriste varijable */
.btn {
  padding: var(--space-sm) var(--space-md);
  background: var(--color-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-smooth);
}

.btn:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.card {
  padding: var(--space-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

/* 4. Responsive sa varijablama */
@media (width >= 768px) {
  :root {
    --space-lg: 2rem; /* Veći padding na tablet */
  }
}
```

---

## ⚠️ Česta Greška

### ❌ Nedostaje varijabla u dark modu

```css
:root {
  --nav-padding: 0.75rem;
}

html[data-theme="dark"] {
  /* NEMA --nav-padding! */
  /* Browser će koristiti nešto drugo! */
}
```

### ✅ Ispravljeno

```css
:root {
  --nav-padding: 0.75rem;
}

html[data-theme="dark"] {
  --nav-padding: 0.75rem; /* Ponovljeno! */
}
```

---

## 📊 Browser Support

CSS Custom Properties su podržane u:

- ✅ Chrome 49+
- ✅ Firefox 31+
- ✅ Safari 9.1+
- ✅ Edge 15+
- ⚠️ IE - NE RADI!

Za IE fallback:

```css
.btn {
  background: #3b82f6; /* Fallback za IE */
  background: var(--color-primary); /* Modern browsers */
}
```

---

## 🎓 Kada Koristiti Varijable?

| Kada                    | Zašto                               |
| ----------------------- | ----------------------------------- |
| Boje koje se ponavljaju | Jednom definiši, koristi svuda      |
| Spacing koje se skalira | Promeni jedan broj, sve se menja    |
| Dark mode               | Theme radi automatski               |
| Responsive design       | Varijable se menjaju sa breakpoints |
| Brand colors            | Lako da promeniš celu paletu        |
| Animations              | Centralizovano kontroliši trajanje  |

---

## ✅ Checklist

- [ ] Sve hardkodovane vrednosti su u varijablama
- [ ] Varijable imaju semantička imena (`--color-primary`, ne `--c1`)
- [ ] Varijable su organizovane po kategorijama
- [ ] Dark mode ima sve iste varijable kao light mode
- [ ] Testirane su promene varijabli sa JavaScript-om
- [ ] Fallback vrednosti su postavljene gde je potrebno

---

**Kreirano:** 2025-12-09 | **Status:** Complete
