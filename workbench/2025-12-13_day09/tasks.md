---
type: tasks
date: 2025-12-13
day: 09
topic: CSS Variables + Flexbox — Task List
blocks: 4
---

# 📋 DAN 09 — TASK LIST (4 Bloka)

**Ovaj fajl sadrži SVE zadatke za današnji dan, organizovane po blokovima.**

Obeleži checkbox ✅ kada završiš svaki task!

---

## 🎯 BLOK 1 — CSS Variables Osnove (2h — 09:00-11:00)

### **Teorija (30 min)**

- [ ] **Task 1.1:** Pročitaj [`03_CSS_Variables_Intro.md`](../learning-progress/sandbox/03_CSS_Variables_Intro.md) (do sekcije "Praktična Primena")
- [ ] **Task 1.2:** Pročitaj [`/cheatsheets/cheatsheet_css_variables.md`](../cheatsheets/cheatsheet_css_variables.md) (osnovni deo)
- [ ] **Task 1.3:** Pročitaj [`/cheatsheets/cheatsheet_mdn_css_variables_summary.md`](../cheatsheets/cheatsheet_mdn_css_variables_summary.md) (Šta su CSS varijable sekcija)

**Ključni koncepti za razumevanje:**

- ✅ Šta je `:root` pseudo-class?
- ✅ Kako se kreira CSS varijabla? (`--variable-name`)
- ✅ Kako se koristi varijabla? (`var(--variable-name)`)
- ✅ Zašto koristiti varijable umesto hard-coded vrednosti?
- ✅ Šta je DRY princip (Don't Repeat Yourself)?

---

### **Praktična Vežba 1: Importovanje Varijabli (45 min)**

- [ ] **Task 1.4:** Otvori `scratch.html` i proveri da je `reset.css` povezan
- [ ] **Task 1.5:** Kreiraj `css/index.css` fajl u `learning-progress/sandbox/css/`
- [ ] **Task 1.6:** Importuj varijable iz arhitekture:

```css
/* css/index.css */

/* ===== 1. IMPORT ARCHITECTURE VARIABLES ===== */
@import url("../../../css-architecture/variables/colors.css");
@import url("../../../css-architecture/variables/typography.css");
@import url("../../../css-architecture/variables/spacing.css");
@import url("../../../css-architecture/variables/navigation.css");
@import url("../../../css-architecture/variables/layout.css");
@import url("../../../css-architecture/variables/borders.css");

/* ===== 2. BASE STYLES ===== */
body {
  font-family: var(--font-family);
  color: var(--color-text);
  background-color: var(--color-bg);
  padding: var(--space-md);
}

/* ===== 3. TYPOGRAPHY ===== */
h1 {
  font-size: var(--h1);
  color: var(--color-primary);
  margin-bottom: var(--space-lg);
}

h2 {
  font-size: var(--h2);
  margin-bottom: var(--space-md);
}

p {
  line-height: var(--line-height-normal);
  margin-bottom: var(--space-md);
}
```

- [ ] **Task 1.7:** Poveži `index.css` u `scratch.html`:

```html
<head>
  <!-- ... postojeći linkovi ... -->
  <link rel="stylesheet" href="../css/index.css" />
</head>
```

- [ ] **Task 1.8:** Refresh browser (F5) i vidi promene

**Očekivano:**

- ✅ Tekst koristi Inter font
- ✅ Boje su iz arhitekture
- ✅ Razmak (spacing) je primenjen

---

### **DevTools Analiza (30 min)**

- [ ] **Task 1.9:** Otvori DevTools (F12)
- [ ] **Task 1.10:** Desni klik na `<h1>` → Inspect
- [ ] **Task 1.11:** U Styles panelu, pronađi:

```css
h1 {
  font-size: var(--h1); /* Vidiš ovo */
}
```

- [ ] **Task 1.12:** Klikni na `--h1` varijablu → DevTools te vodi na `:root` definiciju
- [ ] **Task 1.13:** U Computed tabu, vidi computed vrednost (npr. `2.25rem`)
- [ ] **Task 1.14:** Testiraj promenu varijable LIVE:

  - U Styles panelu, pronađi `:root` sekciju
  - Promeni `--h1: 2.25rem;` u `--h1: 4rem;`
  - Vidi kako se naslov ODMAH povećava!
  - Vrati na originalnu vrednost

- [ ] **Task 1.15:** U Console tab-u, testiraj JavaScript:

```javascript
// Pročitaj vrednost varijable:
getComputedStyle(document.documentElement).getPropertyValue("--color-primary");
// Rezultat: "#3b82f6"

// Promeni vrednost varijable:
document.documentElement.style.setProperty("--color-primary", "#ef4444");
// Vidi kako se SVE što koristi --color-primary promeni!
```

---

### **Checkpoint Quiz (15 min)**

**Odgovori na ova pitanja (u umu ili na papiru):**

- [ ] **Q1:** Šta je `:root` i zašto ga koristimo za varijable?
- [ ] **Q2:** Kako se definiše CSS varijabla? (sintaksa)
- [ ] **Q3:** Kako se koristi CSS varijabla? (sintaksa)
- [ ] **Q4:** Zašto koristiti `var(--color-primary)` umesto `#3b82f6`?
- [ ] **Q5:** Gde se nalaze varijable u DevTools Styles panelu?
- [ ] **Q6:** Kako promeniti vrednost varijable LIVE u DevTools-u?

**Ako si odgovorio na SVA pitanja → BLOK 1 ZAVRŠEN! ✅**

---

### **PAUZA ☕ (30 min — 11:00-11:30)**

- [ ] **Ustani, protegni se, napravi kafu/čaj**
- [ ] **Piši beleške u `summary.md` — šta si naučio u Bloku 1**
- [ ] **Ne gledaj ekran! Pusti oči da se odmore!**

---

## 🔥 BLOK 2 — CSS Variables Napredne Tehnike (2h — 11:30-13:30)

### **Napredna Teorija (30 min)**

- [ ] **Task 2.1:** Pročitaj [`03_CSS_Variables_Intro.md`](../learning-progress/sandbox/03_CSS_Variables_Intro.md) (nastavak — napredne sekcije)
- [ ] **Task 2.2:** Pročitaj [`/cheatsheets/cheatsheet_css_variables.md`](../cheatsheets/cheatsheet_css_variables.md) (advanced deo)
- [ ] **Task 2.3:** Pročitaj [`/cheatsheets/cheatsheet_mdn_css_variables_summary.md`](../cheatsheets/cheatsheet_mdn_css_variables_summary.md) (Fallback vrednosti sekcija)

**Ključni koncepti:**

- ✅ Fallback vrednosti u `var()`: `var(--color, #000)`
- ✅ Scope varijabli (`:root` vs element-level)
- ✅ Calc() sa varijablama: `calc(var(--space-md) * 2)`
- ✅ Organizacija varijabli po kategorijama (colors, spacing, typography)

---

### **Praktična Vežba 2: Napredne Varijable (60 min)**

#### **A) Fallback Vrednosti**

- [ ] **Task 2.4:** Dodaj u `index.css`:

```css
/* Test fallback vrednosti */
.test-fallback {
  /* Ako --color-tertiary ne postoji, koristi #8b5cf6 */
  background: var(--color-tertiary, #8b5cf6);

  /* Nested fallback */
  color: var(--color-custom, var(--color-primary, #000));
}
```

- [ ] **Task 2.5:** Dodaj test element u `scratch.html`:

```html
<div class="test-fallback">
  <p>Test fallback vrednosti</p>
</div>
```

- [ ] **Task 2.6:** Refresh (F5) → vidi da fallback radi!

---

#### **B) Element-Level Varijable**

- [ ] **Task 2.7:** Dodaj u `index.css`:

```css
/* Globalne varijable (:root) */
:root {
  --button-bg: var(--color-primary);
  --button-color: #fff;
}

/* Lokalne varijable (element-level) */
.button-danger {
  --button-bg: var(--color-danger);
  --button-color: #fff;
}

.button {
  background: var(--button-bg);
  color: var(--button-color);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  cursor: pointer;
  border: none;
}
```

- [ ] **Task 2.8:** Dodaj test buttons u `scratch.html`:

```html
<button class="button">Normal Button</button>
<button class="button button-danger">Danger Button</button>
```

- [ ] **Task 2.9:** Testiraj u browseru → vidi razliku!

---

#### **C) Calc() sa Varijablama**

- [ ] **Task 2.10:** Dodaj u `index.css`:

```css
/* Calc() sa varijablama */
.spacing-demo {
  margin-top: calc(var(--space-md) * 2); /* 32px */
  padding: calc(var(--space-sm) / 2); /* 4px */
  font-size: calc(var(--font-size-base) + 0.5rem); /* 24px */
}
```

- [ ] **Task 2.11:** Dodaj test element u `scratch.html`:

```html
<div class="spacing-demo">
  <p>Calc() demo — pogledaj spacing u DevTools!</p>
</div>
```

---

### **Refactoring Postojećeg CSS-a (30 min)**

- [ ] **Task 2.12:** Otvori postojeći CSS iz prethodnih dana (ako imaš)
- [ ] **Task 2.13:** Pronađi sve hard-coded vrednosti:

```css
/* ❌ PRIJE (hard-coded) */
.old-style {
  color: #3b82f6;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
}
```

- [ ] **Task 2.14:** Refactoring sa varijablama:

```css
/* ✅ POSLE (sa varijablama) */
.new-style {
  color: var(--color-primary);
  margin-bottom: var(--space-md);
  font-size: var(--font-size-lg);
  padding: var(--space-sm) var(--space-md);
}
```

- [ ] **Task 2.15:** Poredi koliko je kod čitljiviji i održiviji!

---

### **Checkpoint Quiz (15 min)**

**Odgovori na ova pitanja:**

- [ ] **Q1:** Šta je fallback vrednost u `var()` i kada se koristi?
- [ ] **Q2:** Razlika između `:root` varijabli i element-level varijabli?
- [ ] **Q3:** Kako koristiti `calc()` sa varijablama?
- [ ] **Q4:** Zašto refactoring sa varijablama čini kod održivijim?
- [ ] **Q5:** Kako organizovati varijable po kategorijama?

**Ako si odgovorio na SVA pitanja → BLOK 2 ZAVRŠEN! ✅**

---

### **RUČAK 🍽️ (1h — 13:30-14:30)**

- [ ] **Jedi polako, ne žuri!**
- [ ] **Ne gledaj ekran!**
- [ ] **Šetnja (10-15 min) — pomože krvotoku u mozgu!**

---

## 💪 BLOK 3 — Flexbox Fundamentals (2h — 14:30-16:30)

### **Teorija + Vizualizacija (45 min)**

- [ ] **Task 3.1:** Pročitaj [`04_Flexbox_Fundamentals.md`](../learning-progress/sandbox/04_Flexbox_Fundamentals.md) (osnovna sekcija)
- [ ] **Task 3.2:** Pročitaj [`/cheatsheets/cheatsheet_flexbox_complete.md`](../cheatsheets/cheatsheet_flexbox_complete.md) (osnovni properties)
- [ ] **Task 3.3:** Pročitaj [`/cheatsheets/cheatsheet_mdn_flexbox_summary.md`](../cheatsheets/cheatsheet_mdn_flexbox_summary.md) (Flexbox osnove sekcija)

**Ključni koncepti:**

- ✅ `display: flex` — aktivira Flexbox
- ✅ **Flex container** — parent element sa `display: flex`
- ✅ **Flex items** — children elementi flex container-a
- ✅ **Main axis** — horizontalna osa (default)
- ✅ **Cross axis** — vertikalna osa (default)
- ✅ `flex-direction` — smer (row, column, row-reverse, column-reverse)
- ✅ `justify-content` — poravnanje na main axis
- ✅ `align-items` — poravnanje na cross axis
- ✅ `gap` — razmak između flex items

---

### **Praktična Vežba 3: Horizontalna Navigacija (60 min)**

#### **A) Bazična Flexbox Aktivacija**

- [ ] **Task 3.4:** U `scratch.html`, proveri da imaš nav strukturu:

```html
<nav class="site-nav">
  <ul class="nav-list">
    <li><a href="#home" class="nav-link">Početna</a></li>
    <li><a href="#about" class="nav-link">O meni</a></li>
    <li><a href="#skills" class="nav-link">Veštine</a></li>
    <li><a href="#contact" class="nav-link">Kontakt</a></li>
  </ul>
</nav>
```

- [ ] **Task 3.5:** U `index.css`, dodaj:

```css
/* ===== NAVIGATION — FLEXBOX ===== */

.site-nav {
  background-color: var(--color-surface);
  padding: var(--space-md);
  margin-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-border);
}

/* KLJUČNO: display: flex na .nav-list! */
.nav-list {
  display: flex; /* ← AKTIVIRA FLEXBOX! */
}

.nav-link {
  padding: var(--nav-link-padding-y) var(--nav-link-padding-x);
  color: var(--color-text);
  font-size: var(--nav-link-font-size);
  border-radius: var(--nav-link-border-radius);
  transition: var(--nav-link-transition);
}

.nav-link:hover {
  color: var(--color-primary);
  background-color: var(--color-primary-soft);
}
```

- [ ] **Task 3.6:** Refresh (F5) → vidi da su linkovi HORIZONTALNO! 🎉

---

#### **B) Dodavanje Gap-a**

- [ ] **Task 3.7:** Dodaj `gap` property:

```css
.nav-list {
  display: flex;
  gap: var(--nav-link-gap); /* Razmak između linkova */
}
```

- [ ] **Task 3.8:** Refresh → vidi jednake razmake između linkova!

---

#### **C) Poravnanje (justify-content)**

- [ ] **Task 3.9:** Eksperimentiši sa `justify-content`:

```css
.nav-list {
  display: flex;
  gap: var(--nav-link-gap);
  justify-content: flex-start; /* Levo (default) */
}
```

- [ ] **Task 3.10:** Testiraj različite vrednosti (jedna po jedna):

```css
justify-content: center; /* Centar */
justify-content: flex-end; /* Desno */
justify-content: space-between; /* Razmak između */
justify-content: space-around; /* Razmak oko */
justify-content: space-evenly; /* Jednaki razmaci */
```

- [ ] **Task 3.11:** Za svaku vrednost:

  - Refresh (F5)
  - Vidi promenu
  - Napiši beleške šta se dešava

- [ ] **Task 3.12:** Zadrži `center` ili `flex-start` (šta ti se više sviđa)

---

#### **D) Vertikalno Poravnanje (align-items)**

- [ ] **Task 3.13:** Dodaj `align-items`:

```css
.nav-list {
  display: flex;
  gap: var(--nav-link-gap);
  justify-content: center;
  align-items: center; /* Vertikalno centar */
}
```

- [ ] **Task 3.14:** Testiraj različite vrednosti:

```css
align-items: flex-start; /* Vrh */
align-items: center; /* Centar */
align-items: flex-end; /* Dno */
align-items: stretch; /* Razvuci (default) */
```

---

### **DevTools Flexbox Inspector (15 min)**

- [ ] **Task 3.15:** Otvori DevTools (F12)
- [ ] **Task 3.16:** Desni klik na `.nav-list` → Inspect
- [ ] **Task 3.17:** U Elements tab-u, vidi `display: flex` badge pored `<ul class="nav-list">`
- [ ] **Task 3.18:** Klikni na badge → otvara se Flexbox overlay u browseru!
- [ ] **Task 3.19:** U Styles panelu, pronađi `.nav-list` pravila
- [ ] **Task 3.20:** Hover preko `justify-content: center;` → vidi vizuelni prikaz!
- [ ] **Task 3.21:** U Chrome-u, otvori **Layout** tab (pored Styles)
  - Vidi Flexbox properties
  - Eksperimentiši sa kontrolama

---

### **Checkpoint Quiz (15 min)**

**Odgovori na ova pitanja:**

- [ ] **Q1:** Šta radi `display: flex`?
- [ ] **Q2:** Razlika između flex container i flex items?
- [ ] **Q3:** Šta je main axis i šta je cross axis?
- [ ] **Q4:** Šta radi `justify-content` i na kojoj osi?
- [ ] **Q5:** Šta radi `align-items` i na kojoj osi?
- [ ] **Q6:** Šta radi `gap` property?
- [ ] **Q7:** Kako aktivirati Flexbox overlay u DevTools-u?

**Ako si odgovorio na SVA pitanja → BLOK 3 ZAVRŠEN! ✅**

---

### **PAUZA ☕ (30 min — 16:30-17:00)**

- [ ] **Ustani, protegni se!**
- [ ] **Piši beleške u `summary.md` — šta si naučio u Bloku 3**
- [ ] **Kratka šetnja (5-10 min)**

---

## 🚀 BLOK 4 — Flexbox Napredne + Responsive Nav (2h — 17:00-19:00)

### **Napredna Teorija (30 min)**

- [ ] **Task 4.1:** Pročitaj [`04_Flexbox_Fundamentals.md`](../learning-progress/sandbox/04_Flexbox_Fundamentals.md) (napredna sekcija)
- [ ] **Task 4.2:** Pročitaj [`/cheatsheets/cheatsheet_flexbox_complete.md`](../cheatsheets/cheatsheet_flexbox_complete.md) (advanced properties)
- [ ] **Task 4.3:** Pročitaj [`/cheatsheets/cheatsheet_mdn_flexbox_summary.md`](../cheatsheets/cheatsheet_mdn_flexbox_summary.md) (Advanced Flexbox sekcija)

**Ključni koncepti:**

- ✅ `flex-wrap` — dopušta wrap na novu liniju
- ✅ `flex-grow` — kako items rastu kada ima prostora
- ✅ `flex-shrink` — kako items se skupljaju kada nema prostora
- ✅ `flex-basis` — početna veličina item-a
- ✅ `flex` shorthand — `flex: grow shrink basis;`

---

### **Praktična Vežba 4: Responsive Navigation (60 min)**

#### **A) flex-wrap za Responsive**

- [ ] **Task 4.4:** Dodaj `flex-wrap`:

```css
.nav-list {
  display: flex;
  gap: var(--nav-link-gap);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Dopušta wrap na mobilnom */
}
```

- [ ] **Task 4.5:** Testiraj responsive:
  - F12 → Toggle Device Toolbar (Ctrl+Shift+M)
  - Izaberi iPhone SE (375px)
  - Vidi kako linkovi prelaze na novu liniju!
  - Izaberi iPad (768px) → vidi razliku

---

#### **B) flex-grow i flex-shrink**

- [ ] **Task 4.6:** Dodaj test:

```css
/* Test flex-grow */
.nav-link {
  /* ... postojeći stilovi ... */
  flex-grow: 1; /* Svi linkovi jednako rastu */
}
```

- [ ] **Task 4.7:** Refresh → vidi da linkovi popunjavaju prostor!
- [ ] **Task 4.8:** Testiraj različite vrednosti:

```css
.nav-link:nth-child(1) {
  flex-grow: 2;
} /* Prvi link 2x veći */
.nav-link:nth-child(2) {
  flex-grow: 1;
}
.nav-link:nth-child(3) {
  flex-grow: 1;
}
```

- [ ] **Task 4.9:** Vidi kako prvi link zauzima više prostora!
- [ ] **Task 4.10:** Ukloni `flex-grow` (komentariši) → vrati na normalno

---

#### **C) flex-basis**

- [ ] **Task 4.11:** Eksperimentiši sa `flex-basis`:

```css
.nav-link {
  flex-basis: 100px; /* Minimalna širina 100px */
}
```

- [ ] **Task 4.12:** Testiraj u responsive modu → vidi kako se ponaša!

---

#### **D) Flex Shorthand**

- [ ] **Task 4.13:** Refactoring sa shorthand:

```css
/* Longhand (verbose) */
.nav-link {
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
}

/* Shorthand (cleaner) */
.nav-link {
  flex: 0 1 auto; /* grow shrink basis */
}

/* Ili kraće: */
.nav-link {
  flex: auto; /* Isto kao: 1 1 auto */
}
```

---

### **Finalno Testiranje + Debugging (30 min)**

- [ ] **Task 4.14:** Finalna navigacija CSS:

```css
/* ===== FINAL NAVIGATION STYLES ===== */

.site-nav {
  background-color: var(--color-surface);
  padding: var(--space-md);
  margin-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-border);
}

.nav-list {
  display: flex;
  gap: var(--nav-link-gap);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.nav-link {
  padding: var(--nav-link-padding-y) var(--nav-link-padding-x);
  color: var(--color-text);
  font-size: var(--nav-link-font-size);
  border-radius: var(--nav-link-border-radius);
  transition: var(--nav-link-transition);
  white-space: nowrap; /* Ne prelama tekst */
}

.nav-link:hover {
  color: var(--color-primary);
  background-color: var(--color-primary-soft);
}

.nav-link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

- [ ] **Task 4.15:** Testiraj u svim rezolucijama:

  - Desktop (1920px)
  - Tablet (768px)
  - Mobile (375px)
  - Mobile small (320px)

- [ ] **Task 4.16:** Testiraj interakciju:

  - Hover efekat radi?
  - Focus state radi? (Tab tastatura)
  - Linkovi su klikabilni?

- [ ] **Task 4.17:** DevTools debugging:
  - Proveri da nema greški u Console tab-u
  - Proveri computed vrednosti u Styles panelu
  - Testiraj Flexbox overlay

---

### **Finalni Checkpoint (30 min)**

**Odgovori na ova pitanja:**

- [ ] **Q1:** Šta radi `flex-wrap` i kada ga koristiti?
- [ ] **Q2:** Razlika između `flex-grow` i `flex-shrink`?
- [ ] **Q3:** Šta je `flex-basis` i kada ga koristiti?
- [ ] **Q4:** Kako se koristi `flex` shorthand?
- [ ] **Q5:** Kako debugovati Flexbox u DevTools-u?
- [ ] **Q6:** Mogu li da napravim responsive navigaciju sada?

**Ako si odgovorio na SVA pitanja → BLOK 4 ZAVRŠEN! ✅**

---

## 🎉 DAN 09 KOMPLETAN!

### **Finalni Pregled (19:00+)**

- [ ] **Proveri da su SVI checkbox-i ✅ u tasks.md**
- [ ] **Napiši finalne beleške u `summary.md`**
- [ ] **Testiraj finalni `scratch.html` u browseru**
- [ ] **Komituj u git (ako koristiš verzionisanje)**

```bash
cd ~/code/python-automation-lab/html-css-js-portfolio/
git add .
git commit -m "✅ DAN 09 Complete — CSS Variables + Flexbox"
git push
```

---

### **Šta Si Naučio Danas:**

**CSS Variables:**

- ✅ `:root` pseudo-class
- ✅ `var()` funkcija
- ✅ Fallback vrednosti
- ✅ Element-level varijable
- ✅ `calc()` sa varijablama
- ✅ Import varijabli iz arhitekture
- ✅ Refactoring sa varijablama

**Flexbox:**

- ✅ `display: flex` aktivacija
- ✅ Flex container vs flex items
- ✅ Main axis vs cross axis
- ✅ `justify-content` (horizontal)
- ✅ `align-items` (vertical)
- ✅ `gap` property
- ✅ `flex-wrap` (responsive)
- ✅ `flex-grow`, `flex-shrink`, `flex-basis`
- ✅ `flex` shorthand
- ✅ DevTools Flexbox inspector

---

### **Sledeći Koraci:**

**Sutra (Dan 10):**

- Media queries
- Responsive design patterns
- Mobile-first approach

**Nedelja 2:**

- CSS Grid
- Layout patterns
- Typography sistem

---

## 🎓 Čestitam! 🏆

**Završio si 8-satni CSS intenziv!**

**Sada si u stanju da:**

- ✅ Koristiš profesionalnu CSS arhitekturu
- ✅ Napraviš bilo koji Flexbox layout
- ✅ Debuguješ CSS probleme u DevTools-u
- ✅ Pišeš čist, održiv CSS kod

**Odlično urađeno! 💪🔥**

---

**Piši beleške, odmori se, i spremi se za sutra! 🚀**
