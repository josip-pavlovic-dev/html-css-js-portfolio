---
type: cheatsheet
topic: CSS Variables (Custom Properties) — Complete Reference
date: 2025-12-13
author: AI Mentor
language: sr (Serbian explanations) + en (code)
---

# 🔧 CSS VARIABLES — KOMPLETAN CHEATSHEET

**CSS Custom Properties (CSS Varijable) — Sve što trebaš znati!**

---

## 📖 SADRŽAJ

1. [Osnove](#osnove)
2. [Definisanje Varijabli](#definisanje-varijabli)
3. [Korišćenje Varijabli](#korišćenje-varijabli)
4. [Fallback Vrednosti](#fallback-vrednosti)
5. [Scope (Opseg)](#scope-opseg)
6. [Calc() sa Varijablama](#calc-sa-varijablama)
7. [JavaScript Integration](#javascript-integration)
8. [DevTools](#devtools)
9. [Best Practices](#best-practices)
10. [Browser Compatibility](#browser-compatibility)
11. [Real-World Examples](#real-world-examples)
12. [Common Mistakes](#common-mistakes)

---

## 🎯 OSNOVE

### **Šta su CSS Varijable?**

CSS Custom Properties (CSS Varijable) su **user-defined** properties koje možeš da defininišeš jednom i koristiš na više mesta.

**Zašto su važne:**

- ✅ **DRY Princip** — Don't Repeat Yourself
- ✅ **Održavanje** — Promeniš jednom, menja se svuda
- ✅ **Čitljivost** — `var(--color-primary)` je jasnije od `#3b82f6`
- ✅ **Dynamic** — Možeš ih menjati sa JavaScript-om
- ✅ **Scope** — Mogu biti globalne ili element-level

---

### **Sintaksa**

```css
/* Definisanje */
:root {
  --variable-name: value;
}

/* Korišćenje */
.element {
  property: var(--variable-name);
}
```

**Ključne karakteristike:**

- Počinju sa `--` (dva crtica)
- Case-sensitive (`--Color` ≠ `--color`)
- Mogu sadržati bilo koju CSS vrednost

---

## 🔧 DEFINISANJE VARIJABLI

### **1. Globalne Varijable (`:root`)**

```css
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-text: #1f2937;
  --color-background: #ffffff;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;

  /* Typography */
  --font-family: "Inter", sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;

  /* Borders */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-width: 1px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
}
```

**Ključno:**

- `:root` je pseudo-class koji označava `<html>` element
- Najviši nivo u CSS hijerarhiji
- Varijable definisane ovde su **globalne** — dostupne svuda

---

### **2. Element-Level Varijable**

```css
/* Globalne */
:root {
  --button-bg: #3b82f6;
  --button-color: #ffffff;
}

/* Element-level override */
.button-danger {
  --button-bg: #ef4444; /* Override samo za danger button */
  --button-color: #ffffff;
}

.button {
  background: var(--button-bg);
  color: var(--button-color);
}
```

**Ključno:**

- Element-level varijable **override** globalne
- Korisno za teme, variante, state

---

### **3. Dynamic Varijable (State)**

```css
:root {
  --color-primary: #3b82f6;
}

.button {
  background: var(--color-primary);
}

/* Hover state */
.button:hover {
  --color-primary: #2563eb; /* Tamnija nijansa */
  background: var(--color-primary);
}
```

**Ključno:**

- Možeš redefinisati varijable na `:hover`, `:focus`, `:active`

---

## 📦 KORIŠĆENJE VARIJABLI

### **Osnovna Sintaksa**

```css
.element {
  property: var(--variable-name);
}
```

**Primeri:**

```css
.button {
  background-color: var(--color-primary);
  color: var(--color-background);
  padding: var(--space-md);
  border-radius: var(--border-radius-md);
  font-family: var(--font-family);
  transition: var(--transition-base);
}
```

---

### **Kombinovanje**

```css
.card {
  /* Kombinuješ više varijabli */
  border: var(--border-width) solid var(--color-border);
  box-shadow: var(--shadow-md);
  padding: var(--space-lg) var(--space-md);
}
```

---

### **Nested Varijable**

```css
:root {
  --color-primary: #3b82f6;
  --button-bg: var(--color-primary); /* Varijabla koristi drugu varijablu */
  --button-hover-bg: var(--color-primary-dark);
}

.button {
  background: var(--button-bg);
}
```

**Ključno:**

- Varijable mogu referisati druge varijable
- Cascade radi kao i obično

---

## 🔄 FALLBACK VREDNOSTI

### **Osnovna Sintaksa**

```css
.element {
  property: var(--variable-name, fallback-value);
}
```

**Primeri:**

```css
.button {
  /* Ako --color-primary ne postoji, koristi #3b82f6 */
  background: var(--color-primary, #3b82f6);

  /* Ako --font-family ne postoji, koristi sans-serif */
  font-family: var(--font-family, sans-serif);
}
```

---

### **Nested Fallback**

```css
.element {
  /* Fallback chain */
  color: var(--custom-color, var(--color-primary, #000000));
}
```

**Kako radi:**

1. Prvo pokušava `--custom-color`
2. Ako ne postoji, pokušava `--color-primary`
3. Ako ni to ne postoji, koristi `#000000`

---

### **Kada Koristiti Fallback**

```css
:root {
  --color-primary: #3b82f6;
}

/* Fallback za compatibility */
.button {
  background: #3b82f6; /* Hard-coded fallback */
  background: var(--color-primary); /* Moderni browsers */
}
```

**Ključno:**

- Korisno za compatibility sa starijim browserima
- CSS ignoriše `var()` ako browser ne podržava

---

## 🎯 SCOPE (OPSEG)

### **Global Scope (`:root`)**

```css
:root {
  --color-primary: #3b82f6;
}

/* Dostupno SVUDA */
.header {
  background: var(--color-primary);
}

.button {
  background: var(--color-primary);
}
```

---

### **Local Scope (Element)**

```css
.card {
  --card-padding: 1rem;
  padding: var(--card-padding);
}

.card-header {
  /* Nasledjuje od .card */
  padding: var(--card-padding);
}

.button {
  /* ❌ NE radi — --card-padding je local za .card */
  padding: var(--card-padding);
}
```

**Ključno:**

- Element-level varijable su dostupne samo tom elementu i njegovim **children**
- Inheritance radi kao i obično

---

### **Cascading & Inheritance**

```css
:root {
  --color-text: #1f2937;
}

body {
  --color-text: #374151; /* Override global */
}

.dark-mode {
  --color-text: #f3f4f6; /* Override body */
}

.text {
  color: var(--color-text); /* Koristi najblližu definiciju */
}
```

**Kako radi:**

- CSS traži varijablu od **element-a prema gore** (cascade)
- Koristi prvu definiciju koju pronađe

---

## 🧮 CALC() SA VARIJABLAMA

### **Osnovna Sintaksa**

```css
:root {
  --space-base: 1rem;
  --font-size-base: 1rem;
}

.element {
  /* Aritmetika sa varijablama */
  margin-top: calc(var(--space-base) * 2); /* 2rem */
  padding: calc(var(--space-base) / 2); /* 0.5rem */
  font-size: calc(var(--font-size-base) + 0.5rem); /* 1.5rem */
}
```

---

### **Kompleksne Operacije**

```css
:root {
  --space-md: 1rem;
  --multiplier: 2;
}

.card {
  /* Kombinuješ više varijabli */
  padding: calc(var(--space-md) * var(--multiplier) + 0.5rem);
  /* 1rem * 2 + 0.5rem = 2.5rem */
}
```

---

### **Responsive sa Calc()**

```css
:root {
  --base-size: 16px;
}

.heading {
  /* Responsive font size */
  font-size: calc(var(--base-size) + 1vw);
}
```

---

### **Praktičan Primer: Spacing Scale**

```css
:root {
  --space-unit: 0.25rem; /* 4px */
}

.space-xs {
  margin: calc(var(--space-unit) * 1); /* 4px */
}

.space-sm {
  margin: calc(var(--space-unit) * 2); /* 8px */
}

.space-md {
  margin: calc(var(--space-unit) * 4); /* 16px */
}

.space-lg {
  margin: calc(var(--space-unit) * 6); /* 24px */
}

.space-xl {
  margin: calc(var(--space-unit) * 8); /* 32px */
}
```

---

## 💻 JAVASCRIPT INTEGRATION

### **Pročitaj Vrednost**

```javascript
// Pročitaj CSS varijablu
const root = document.documentElement;
const primaryColor = getComputedStyle(root).getPropertyValue("--color-primary");

console.log(primaryColor); // "#3b82f6"
```

---

### **Postavi Vrednost**

```javascript
// Promeni CSS varijablu
document.documentElement.style.setProperty("--color-primary", "#ef4444");
```

---

### **Praktičan Primer: Theme Toggle**

```javascript
// HTML:
// <button id="theme-toggle">Toggle Dark Mode</button>

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root)
    .getPropertyValue("--color-background")
    .trim();

  if (currentBg === "#ffffff") {
    // Dark mode
    root.style.setProperty("--color-background", "#1f2937");
    root.style.setProperty("--color-text", "#f3f4f6");
  } else {
    // Light mode
    root.style.setProperty("--color-background", "#ffffff");
    root.style.setProperty("--color-text", "#1f2937");
  }
});
```

---

### **Dynamic Responsive Spacing**

```javascript
// Dinamički postavi spacing na osnovu viewport-a
function updateSpacing() {
  const viewportWidth = window.innerWidth;
  const spaceMd = viewportWidth < 768 ? "0.75rem" : "1rem";
  document.documentElement.style.setProperty("--space-md", spaceMd);
}

updateSpacing();
window.addEventListener("resize", updateSpacing);
```

---

## 🔍 DEVTOOLS

### **Chrome DevTools**

**Kako videti varijable:**

1. `F12` → Elements tab
2. Desni klik na element → Inspect
3. U **Styles** panelu:
   - Vidiš `var(--variable-name)`
   - Klikni na varijablu → DevTools te vodi na `:root` definiciju
4. U **Computed** tabu:
   - Vidiš **computed** vrednost (konačnu vrednost posle evaluacije)

**Edit varijable live:**

1. U Styles panelu, pronađi `:root`
2. Klikni na vrednost varijable
3. Promeni vrednost → odmah vidiš promenu u browseru

---

### **Firefox DevTools**

**Kako videti varijable:**

1. `F12` → Inspector tab
2. Desni klik na element → Inspect
3. U **Rules** panelu:
   - Vidiš `var(--variable-name)`
   - Hover preko varijable → tooltip pokazuje vrednost
4. **Computed** tab → Filter "All" → vidiš varijable

---

### **Console Commands**

```javascript
// Pročitaj varijablu
getComputedStyle(document.documentElement).getPropertyValue("--color-primary");

// Promeni varijablu
document.documentElement.style.setProperty("--color-primary", "#ef4444");

// Lista svih varijabli
const styles = getComputedStyle(document.documentElement);
const vars = Array.from(styles).filter((prop) => prop.startsWith("--"));
console.table(vars);
```

---

## ✅ BEST PRACTICES

### **1. Naming Convention**

```css
/* DOBRO: Semantički nazivi */
:root {
  --color-primary: #3b82f6;
  --color-text: #1f2937;
  --space-md: 1rem;
  --font-family-heading: "Montserrat", sans-serif;
}

/* LOŠE: Generički nazivi */
:root {
  --blue: #3b82f6;
  --dark-gray: #1f2937;
  --medium: 1rem;
}
```

**Ključno:**

- Koristi **semantičke nazive** (šta predstavlja, ne kako izgleda)
- Kebab-case (`--color-primary`, ne `--colorPrimary`)

---

### **2. Organizacija**

```css
:root {
  /* === COLORS === */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;

  /* === SPACING === */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;

  /* === TYPOGRAPHY === */
  --font-family: "Inter", sans-serif;
  --font-size-base: 1rem;

  /* === BORDERS === */
  --border-radius-sm: 4px;
}
```

**Ključno:**

- Grupiši varijable po kategorijama
- Koristi komentare za sekcije

---

### **3. Modularnost (CSS Architecture)**

```
css-architecture/
├── variables/
│   ├── colors.css
│   ├── spacing.css
│   ├── typography.css
│   ├── borders.css
│   └── shadows.css
```

**Import pattern:**

```css
/* U index.css */
@import url("../css-architecture/variables/colors.css");
@import url("../css-architecture/variables/spacing.css");
@import url("../css-architecture/variables/typography.css");
```

**Ključno:**

- Jedan fajl po kategoriji
- Lakše održavanje
- Reusable u drugim projektima

---

### **4. Default Values (Fallback)**

```css
.button {
  /* Fallback za starije browsere */
  background: #3b82f6;
  background: var(--color-primary);

  /* Ili: */
  background: var(--color-primary, #3b82f6);
}
```

---

### **5. Dokumentacija**

```css
:root {
  /* Primary brand color — used for buttons, links, accents */
  --color-primary: #3b82f6;

  /* Base spacing unit — all spacing is multiple of this */
  --space-unit: 0.25rem;
}
```

**Ključno:**

- Dodaj komentare za kompleksne varijable
- Objasni svrhu, gde se koristi

---

## 🌍 BROWSER COMPATIBILITY

### **Support Table**

| Browser | Version | Support |
| ------- | ------- | ------- |
| Chrome  | 49+     | ✅      |
| Firefox | 31+     | ✅      |
| Safari  | 9.1+    | ✅      |
| Edge    | 15+     | ✅      |
| IE 11   | ❌      | ❌      |

**Ključno:**

- **98%+ global support** (2025)
- IE 11 ne podržava

---

### **Fallback Strategy**

```css
.button {
  /* IE 11 fallback */
  background: #3b82f6;
  padding: 16px;

  /* Modern browsers */
  background: var(--color-primary);
  padding: var(--space-md);
}
```

**Kako radi:**

- Stari browseri ignorišu `var()` i koriste prvu vrednost
- Moderni browseri override sa `var()`

---

## 🌟 REAL-WORLD EXAMPLES

### **Primer 1: Color System**

```css
:root {
  /* Brand colors */
  --color-primary: #3b82f6;
  --color-primary-soft: #dbeafe;
  --color-primary-dark: #1e40af;

  --color-secondary: #8b5cf6;
  --color-secondary-soft: #ede9fe;

  /* Semantic colors */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* Neutral colors */
  --color-text: #1f2937;
  --color-text-muted: #6b7280;
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-border: #e5e7eb;
}
```

---

### **Primer 2: Spacing Scale (8px Grid)**

```css
:root {
  --space-unit: 0.5rem; /* 8px base */

  --space-xs: calc(var(--space-unit) * 0.5); /* 4px */
  --space-sm: var(--space-unit); /* 8px */
  --space-md: calc(var(--space-unit) * 2); /* 16px */
  --space-lg: calc(var(--space-unit) * 3); /* 24px */
  --space-xl: calc(var(--space-unit) * 4); /* 32px */
  --space-2xl: calc(var(--space-unit) * 6); /* 48px */
  --space-3xl: calc(var(--space-unit) * 8); /* 64px */
}
```

---

### **Primer 3: Typography System**

```css
:root {
  /* Font families */
  --font-family-base: "Inter", -apple-system, sans-serif;
  --font-family-heading: "Montserrat", sans-serif;
  --font-family-mono: "Fira Code", monospace;

  /* Font sizes (Type scale) */
  --font-size-xs: 0.75rem; /* 12px */
  --font-size-sm: 0.875rem; /* 14px */
  --font-size-base: 1rem; /* 16px */
  --font-size-lg: 1.125rem; /* 18px */
  --font-size-xl: 1.25rem; /* 20px */
  --font-size-2xl: 1.5rem; /* 24px */
  --font-size-3xl: 1.875rem; /* 30px */
  --font-size-4xl: 2.25rem; /* 36px */

  /* Font weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

---

### **Primer 4: Dark Mode Theme**

```css
:root {
  /* Light mode (default) */
  --color-background: #ffffff;
  --color-text: #1f2937;
  --color-surface: #f9fafb;
  --color-border: #e5e7eb;
}

[data-theme="dark"] {
  /* Dark mode override */
  --color-background: #1f2937;
  --color-text: #f3f4f6;
  --color-surface: #374151;
  --color-border: #4b5563;
}

/* Koristi varijable svuda */
body {
  background-color: var(--color-background);
  color: var(--color-text);
}

.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
}
```

**JavaScript toggle:**

```javascript
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
};
```

---

## ⚠️ COMMON MISTAKES

### **❌ Greška 1: Zaboravljena `--` Prefix**

```css
/* LOŠE */
:root {
  color-primary: #3b82f6; /* Nema -- */
}

.element {
  color: var(color-primary); /* NE radi */
}

/* DOBRO */
:root {
  --color-primary: #3b82f6;
}

.element {
  color: var(--color-primary);
}
```

---

### **❌ Greška 2: Korišćenje Bez `var()`**

```css
/* LOŠE */
.element {
  color: --color-primary; /* Fali var() */
}

/* DOBRO */
.element {
  color: var(--color-primary);
}
```

---

### **❌ Greška 3: Import POSLE Resetа**

```css
/* LOŠE */
* {
  margin: 0;
  padding: 0;
}

@import url("colors.css"); /* Kasno — import MORA biti na početku */

/* DOBRO */
@import url("colors.css"); /* PRVO! */

* {
  margin: 0;
  padding: 0;
}
```

---

### **❌ Greška 4: Generički Nazivi**

```css
/* LOŠE */
:root {
  --blue: #3b82f6;
  --red: #ef4444;
  --medium: 1rem;
}

/* DOBRO */
:root {
  --color-primary: #3b82f6;
  --color-error: #ef4444;
  --space-md: 1rem;
}
```

**Zašto:**

- `--blue` ne govori ništa o svrsi
- `--color-primary` je semantički — ako promeniš brand color u crveno, ne moraš da menjaš varijablu

---

### **❌ Greška 5: Hard-coded Vrednosti u Komponentama**

```css
/* LOŠE */
.button {
  background: #3b82f6; /* Hard-coded */
  padding: 16px; /* Hard-coded */
}

/* DOBRO */
.button {
  background: var(--color-primary);
  padding: var(--space-md);
}
```

**Zašto:**

- Sa varijablama, možeš promeniti sve button-e odjednom
- DRY princip

---

## 📚 MDN RESURSI

- [Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [var() function](https://developer.mozilla.org/en-US/docs/Web/CSS/var)
- [:root pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)
- [calc() function](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)

---

## ✅ QUICK CHECKLIST

**Pre nego što koristiš CSS varijable:**

- [ ] Razumem šta je `:root` pseudo-class
- [ ] Znam da varijable počinju sa `--`
- [ ] Razumem `var()` funkciju
- [ ] Znam kako rade fallback vrednosti
- [ ] Razumem scope (global vs element-level)
- [ ] Mogu da koristim `calc()` sa varijablama
- [ ] Znam kako da vidim varijable u DevTools
- [ ] Koristim semantičke nazive varijabli
- [ ] Organizovao sam varijable u module (colors.css, spacing.css, etc.)

**Ako je sve ✅ → Spreman si za produkciju! 🚀**

---

**Sačuvaj ovaj cheatsheet — biće ti STALNO potreban! 💪**
