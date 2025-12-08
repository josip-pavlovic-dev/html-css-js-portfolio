---
type: cheatsheet
topic: CSS Specificity, Cascade & Overrides
date: 2025-12-09
difficulty: intermediate
status: production-ready
---

# 📘 CSS Cascade, Specificity & Overrides - Mastery Guide

## 🎯 SUŠTINA: Tri Pilara CSS-a

CSS se zasniva na tri osnovna principa:

1. **Cascade** - Redosled prioriteta (koji CSS ide poslednji?)
2. **Specificity** - "Težina" CSS selektora (koliko specifičan?)
3. **Inheritance** - Nasledjivanje vrednosti od parent-a

---

## 📊 SPECIFICITY SCORE - Hijerarhija Težine

CSS specificity se računa kao 4-delni broj: `0-0-0-0`

```
Nivo           | Vrednost | Primer
----------------|----------|----------------------------
Inline styles   | 1000     | style="color: red;"
ID selektori    | 100      | #header
Class/Pseudo    | 10       | .btn, :hover, [data-theme]
Element         | 1        | h1, div, button
Universal       | 0        | *
```

### Primeri Kalkulacije

```css
/* Specificity: 0-0-0-1 */
h1 {
  color: blue;
}

/* Specificity: 0-0-1-0 */
.title {
  color: green;
}

/* Specificity: 0-1-0-0 */
#main {
  color: red;
}

/* Specificity: 0-0-1-2 = 10+1 = veća od 0-0-1-0! */
html[data-theme="dark"] .site-nav-link {
  color: yellow;
}

/* REZULTAT: yellow se primenjuje jer ima veću specifičnost */
```

---

## 🔴 TVOJ PROBLEM - CSS Custom Properties

**Šta se desilo sa navigacijom:**

```css
:root {
  --nav-link-padding-x: 0.75rem; /* Light mode */
}

html[data-theme="dark"] {
  /* NEMA --nav-link-padding-x! */
  /* Gde browser traži vrednost? */
}

.site-nav-link {
  padding: var(--nav-link-padding-x);
  /* U dark modu: 8px umesto 12px!?? */
}
```

**Šta se dešava:**

1. **Light mode:** Browser gleda `.site-nav-link` → traži `--nav-link-padding-x` → nađe u `:root` → `0.75rem` ✅

2. **Dark mode:** Browser gleda `.site-nav-link` → traži `--nav-link-padding-x` → **NEGDE u computed values** → `8px` (????) ❌

**Zašto?** Jer `html[data-theme="dark"]` ima **VEĆU specifičnost** od `:root`, pa se primenja prvo, ali **nema varijable tu**!

---

## ✅ REŠENJE - Eksplicitni Override

**Pravilo:** Kada koristiš specifičniji selector, moraš **PONOVITI SVE varijable!**

```css
/* 1. LIGHT MODE DEFAULT */
:root,
html[data-theme="light"] {
  --nav-link-padding-x: 0.75rem;
  --color-primary: #3b82f6;
  --color-text: #1f2937;
}

/* 2. DARK MODE - MORA IMATI SVE ISTE VARIJABLE */
html[data-theme="dark"] {
  /* Boje se menjaju */
  --color-primary: #38bdf8;
  --color-text: #e5e7eb;

  /* ALI! Padding MORA biti ponovljen */
  --nav-link-padding-x: 0.75rem; /* ← KLJUČNO! */
}
```

---

## 🏛️ CASCADE - Redosled Primene

CSS se čita **odozgo prema dnu**, a **POSLEDNJA vrednost se primenjuje!**

```css
h1 {
  color: blue;
} /* Prvo - blue */
h1 {
  color: green;
} /* Drugo - zamenjuje blue */
h1 {
  color: red;
} /* Treće - OVO SE PRIMENJUJE */

/* Rezultat: red */
```

### Cascade sa Media Queries

```css
:root {
  --font-size: 1rem; /* Mobile default */
}

@media (width >= 768px) {
  :root {
    --font-size: 1.125rem; /* Tablet - ZAMENJUJE mobile */
  }
}

@media (width >= 1024px) {
  :root {
    --font-size: 1.1563rem; /* Desktop - ZAMENJUJE tablet */
  }
}
```

**Rezultat:**

- Mobile: `1rem` ✅
- Tablet: `1.125rem` ✅
- Desktop: `1.1563rem` ✅

---

## 🎨 Praktični Primeri

### Primer 1: Light/Dark Theme

```css
/* Light mode je DEFAULT */
:root {
  --bg: white;
  --text: black;
  --border: #ccc;
}

/* Dark mode ZAMENJUJE definiciju */
html[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: white;
  --border: #444;
}

/* Component koristi varijable */
.card {
  background: var(--bg);
  color: var(--text);
  border: 1px solid var(--border);
}

/* Automatski radi za oba moda! */
```

### Primer 2: Responsive Padding

```css
:root {
  --padding: 1rem; /* Mobile */
}

@media (width >= 768px) {
  :root {
    --padding: 1.5rem; /* Tablet */
  }
}

@media (width >= 1024px) {
  :root {
    --padding: 2rem; /* Desktop */
  }
}

.container {
  padding: var(--padding); /* Automatski se menja! */
}
```

### Primer 3: Hover State

```css
.btn {
  background: var(--color-primary);
  transition: all 0.3s ease;
}

.btn:hover {
  background: var(--color-primary-dark); /* Drugačija varijabla! */
  transform: translateY(-2px);
}

/* Light mode */
:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #1e40af;
}

/* Dark mode */
html[data-theme="dark"] {
  --color-primary: #38bdf8;
  --color-primary-dark: #0284c7;
}
```

---

## ⚠️ ČESTA GREŠKA - Nested Media Queries

**NEĆE RADITI:**

```css
:root {
  --padding: 1rem;
}

html[data-theme="dark"] {
  @media (width >= 1024px) {
    --padding: 2rem; /* ❌ GREŠKA! */
  }
}
```

**KOREKTNO:**

```css
:root {
  --padding: 1rem;
}

@media (width >= 1024px) {
  :root {
    --padding: 2rem; /* ✅ Pravilno */
  }
}

html[data-theme="dark"] {
  /* Boje i semantic varijable */
  --color-primary: #38bdf8;
}
```

---

## 🔍 DevTools Debugging

Ako varijabla ne radi:

1. **Otvori DevTools → Elements**
2. **Selektuj element koji koristi varijablu**
3. **Otvori Styles panel**
4. **Traži "CSS Variables" sekciju**
5. **Vidiš vrednost varijable**

Ako ne vidiš varijablu:

- ✅ Proveri da je definisana u `:root`
- ✅ Proveri da je definisana u `html[data-theme]` ako koristiš teme
- ✅ Proveri da je ime varijable točno (case-sensitive!)

---

## 📋 Specificity Kalkulator - Brza Tabela

| Selector                        | Specificity | Pravilo                        |
| ------------------------------- | ----------- | ------------------------------ |
| `*`                             | 0           | Universal - nema specifičnosti |
| `p`                             | 1           | Element                        |
| `.class`                        | 10          | Class                          |
| `#id`                           | 100         | ID                             |
| `[attr]`                        | 10          | Attribute (kao class)          |
| `:hover`                        | 10          | Pseudo-class (kao class)       |
| `::before`                      | 1           | Pseudo-element (kao element)   |
| `div.class`                     | 11          | Element + Class                |
| `#id .class`                    | 110         | ID + Class                     |
| `html[data-theme="dark"] .link` | 11          | Attribute + Class              |
| `style=""`                      | 1000        | Inline - NAJVIŠA               |

---

## 🏆 SENIORSKI SAVETI

### 1. Koristi Varijable za SVE Repetitivne Vrednosti

```css
/* ❌ Loše - Magic numbers! */
.btn {
  padding: 0.75rem 1.5rem;
}
.card {
  padding: 0.75rem 1.5rem;
}
.container {
  padding: 0.75rem 1.5rem;
}

/* ✅ Dobro - Centralizovano */
:root {
  --padding: 0.75rem 1.5rem;
}
.btn {
  padding: var(--padding);
}
.card {
  padding: var(--padding);
}
.container {
  padding: var(--padding);
}
```

### 2. Koristi Specifičnost Pažljivo

```css
/* ❌ Prespecifičan */
html[data-theme="light"] body main section .container h1.title {
  color: black;
}

/* ✅ Dovoljan */
.title {
  color: black;
}

html[data-theme="dark"] .title {
  color: white;
}
```

### 3. Dokumentuj Zašto Koristiš Override

```css
/* ✅ Dobro - jasno čemu služi */
html[data-theme="dark"] .site-nav-link {
  /* Override padding jer varijable moraju biti iste za layout,
     a boje se menjaju kroz --color-* varijable */
  padding: var(--nav-link-padding-y) var(--nav-link-padding-x);
}

/* ❌ Loše - nema objašnjenja */
html[data-theme="dark"] .site-nav-link {
  padding: 0.3rem 0.75rem;
}
```

### 4. Testiraj Sve Kombinacije

- ✅ Light mode + mobile
- ✅ Light mode + tablet
- ✅ Light mode + desktop
- ✅ Dark mode + mobile
- ✅ Dark mode + tablet
- ✅ Dark mode + desktop

---

## ✅ CHECKLIST - Pre Nego Što Završiš CSS

- [ ] Sve boje su u varijablama (`--color-*`)
- [ ] Sve veličine su u varijablama (`--space-*`, `--font-*`)
- [ ] Dark mode ima ISTE varijable kao light mode
- [ ] Media queries menjaju SAMO varijable, ne CSS pravila
- [ ] Nema magic numbers (hardkodovanih vrednosti)
- [ ] Specificity je minimalna (izbegavaj ID selektore)
- [ ] Testirane su sve kombinacije (teme + breakpoints)
- [ ] DevTools pokazuje ispravne computed values

---

## 📚 Referenca - CSS Specification

- [MDN: Cascade & Inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
- [MDN: Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [MDN: Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Kreirano:** 2025-12-09 | **Status:** Completed
