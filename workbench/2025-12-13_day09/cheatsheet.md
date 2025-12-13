---
type: cheatsheet
date: 2025-12-13
day: 09
topic: CSS Variables + Flexbox — Quick Reference
---

# ⚡ DAN 09 CHEATSHEET — CSS Variables + Flexbox

**Brzi pregled svih koncepata za današnji dan!**

---

## 🔧 CSS VARIABLES (CUSTOM PROPERTIES)

### **1. Definisanje Varijabli**

```css
/* Globalne varijable u :root */
:root {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --space-md: 1rem;
  --font-family: "Inter", sans-serif;
}

/* Element-level varijable */
.button {
  --button-bg: var(--color-primary);
  background: var(--button-bg);
}
```

**Ključno:**

- `--variable-name` — definiše varijablu
- `:root` — pseudo-class za globalne varijable
- Element-level — varijable specifične za element

---

### **2. Korišćenje Varijabli**

```css
/* Osnovna sintaksa */
.element {
  color: var(--color-primary);
}

/* Sa fallback vrednošću */
.element {
  color: var(--color-tertiary, #8b5cf6);
}

/* Nested fallback */
.element {
  color: var(--custom-color, var(--color-primary, #000));
}
```

**Ključno:**

- `var(--variable-name)` — koristi varijablu
- `var(--variable, fallback)` — fallback ako varijabla ne postoji

---

### **3. Calc() sa Varijablama**

```css
:root {
  --space-md: 1rem;
  --font-size-base: 1rem;
}

.element {
  margin-top: calc(var(--space-md) * 2); /* 2rem */
  padding: calc(var(--space-md) / 2); /* 0.5rem */
  font-size: calc(var(--font-size-base) + 0.5rem); /* 1.5rem */
}
```

**Ključno:**

- `calc()` radi sa varijablama
- Možeš koristiti `+`, `-`, `*`, `/`

---

### **4. Import Varijabli iz Arhitekture**

```css
/* U index.css */
@import url("../../css-architecture/variables/colors.css");
@import url("../../css-architecture/variables/spacing.css");
@import url("../../css-architecture/variables/typography.css");
@import url("../../css-architecture/variables/navigation.css");

/* Sada možeš koristiti sve varijable */
body {
  color: var(--color-text);
  font-family: var(--font-family);
  padding: var(--space-md);
}
```

**Ključno:**

- `@import` MORA biti na početku fajla
- Relativna putanja prema arhitekturi

---

### **5. DevTools — Varijable**

**Kako videti varijable:**

1. F12 → Elements tab
2. Desni klik na element → Inspect
3. U Styles panelu, vidi `var(--variable-name)`
4. Klikni na varijablu → DevTools te vodi na `:root` definiciju
5. U Computed tabu → vidi computed vrednost

**JavaScript test:**

```javascript
// Pročitaj vrednost
getComputedStyle(document.documentElement).getPropertyValue("--color-primary");

// Promeni vrednost
document.documentElement.style.setProperty("--color-primary", "#ef4444");
```

---

## 💪 FLEXBOX

### **1. Aktivacija Flexbox-a**

```css
.container {
  display: flex; /* Aktivira Flexbox */
}
```

**Ključno:**

- `.container` postaje **flex container**
- Svi direktni children postaju **flex items**

---

### **2. Flex Direction (Smer)**

```css
.container {
  display: flex;
  flex-direction: row; /* Horizontalno (DEFAULT) */
  flex-direction: column; /* Vertikalno */
  flex-direction: row-reverse; /* Obrnuto horizontalno */
  flex-direction: column-reverse; /* Obrnuto vertikalno */
}
```

**Ključno:**

- `row` — main axis je horizontalan
- `column` — main axis je vertikalan

---

### **3. Justify Content (Main Axis)**

```css
.container {
  display: flex;
  justify-content: flex-start; /* Levo (default) */
  justify-content: center; /* Centar */
  justify-content: flex-end; /* Desno */
  justify-content: space-between; /* Razmak između */
  justify-content: space-around; /* Razmak oko */
  justify-content: space-evenly; /* Jednaki razmaci */
}
```

**Ključno:**

- Poravnanje na **main axis** (horizontalno ako `row`)

**Vizualizacija:**

```
flex-start:      [A][B][C]_________
center:          _____[A][B][C]____
flex-end:        __________[A][B][C]
space-between:   [A]______[B]______[C]
space-around:    __[A]____[B]____[C]__
space-evenly:    ___[A]___[B]___[C]___
```

---

### **4. Align Items (Cross Axis)**

```css
.container {
  display: flex;
  align-items: flex-start; /* Vrh */
  align-items: center; /* Centar (čest!) */
  align-items: flex-end; /* Dno */
  align-items: stretch; /* Razvuci (default) */
  align-items: baseline; /* Baseline teksta */
}
```

**Ključno:**

- Poravnanje na **cross axis** (vertikalno ako `row`)

**Vizualizacija (flex-direction: row):**

```
flex-start:
┌─────┬─────┬─────┐
│  A  │  B  │  C  │
│     │     │     │
└─────┴─────┴─────┘

center:
┌─────┬─────┬─────┐
│     │     │     │
│  A  │  B  │  C  │
│     │     │     │
└─────┴─────┴─────┘

flex-end:
┌─────┬─────┬─────┐
│     │     │     │
│     │     │     │
│  A  │  B  │  C  │
└─────┴─────┴─────┘
```

---

### **5. Gap (Razmak između Items)**

```css
.container {
  display: flex;
  gap: 1rem; /* Jednaki razmak */
  gap: 0.5rem 1rem; /* row-gap column-gap */
}

/* Ili specifično: */
.container {
  row-gap: 0.5rem;
  column-gap: 1rem;
}
```

**Ključno:**

- `gap` je novija property (podržan u modernim browserima)
- Zamenjuje `margin-right` na svakom item-u

---

### **6. Flex Wrap (Responsive)**

```css
.container {
  display: flex;
  flex-wrap: nowrap; /* Ne prelama (default) */
  flex-wrap: wrap; /* Prelama na novu liniju */
  flex-wrap: wrap-reverse; /* Prelama obrnuto */
}
```

**Ključno:**

- `wrap` dopušta items da pređu na novu liniju kada nema prostora
- Važno za responsive design!

---

### **7. Flex Items Properties**

#### **A) flex-grow**

```css
.item {
  flex-grow: 1; /* Kako item raste kada ima prostora */
}

/* Primer: */
.item-1 {
  flex-grow: 2;
} /* 2x veći od drugih */
.item-2 {
  flex-grow: 1;
}
.item-3 {
  flex-grow: 1;
}
```

**Ključno:**

- Default: `0` (ne raste)
- Ako ima prostora → items rastu proporcionalno

---

#### **B) flex-shrink**

```css
.item {
  flex-shrink: 1; /* Kako item se skuplja kada nema prostora */
}

/* Primer: */
.item-1 {
  flex-shrink: 0;
} /* Ne skuplja se */
.item-2 {
  flex-shrink: 1;
} /* Skuplja se */
```

**Ključno:**

- Default: `1` (skuplja se)
- `0` = ne skuplja se (može overflow)

---

#### **C) flex-basis**

```css
.item {
  flex-basis: 200px; /* Početna veličina pre grow/shrink */
}

/* Ili sa auto: */
.item {
  flex-basis: auto; /* Koristi width/height */
}
```

**Ključno:**

- Početna veličina item-a
- Default: `auto`

---

#### **D) flex Shorthand**

```css
/* Longhand: */
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

/* Shorthand: */
.item {
  flex: 1 1 0%; /* grow shrink basis */
}

/* Najčešći shorthand-i: */
.item {
  flex: 1; /* 1 1 0% — raste i skuplja se */
  flex: auto; /* 1 1 auto — raste i skuplja se, koristi width */
  flex: none; /* 0 0 auto — ne raste, ne skuplja se */
  flex: 0 1 auto; /* Default */
}
```

---

### **8. Praktična Navigacija (Kompletan Kod)**

```css
/* HTML:
<nav class="site-nav">
  <ul class="nav-list">
    <li><a href="#" class="nav-link">Home</a></li>
    <li><a href="#" class="nav-link">About</a></li>
    <li><a href="#" class="nav-link">Contact</a></li>
  </ul>
</nav>
*/

.site-nav {
  background-color: var(--color-surface);
  padding: var(--space-md);
  border-bottom: 1px solid var(--color-border);
}

.nav-list {
  display: flex; /* Aktivira Flexbox */
  gap: var(--nav-link-gap); /* Razmak između */
  justify-content: center; /* Horizontalno centar */
  align-items: center; /* Vertikalno centar */
  flex-wrap: wrap; /* Responsive */
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
```

---

### **9. DevTools — Flexbox Inspector**

**Chrome:**

1. F12 → Elements tab
2. Desni klik na flex container → Inspect
3. Vidi `flex` badge pored element-a
4. Klikni na badge → Flexbox overlay
5. **Layout tab** (pored Styles) → Flexbox kontrole

**Firefox:**

1. F12 → Inspector tab
2. Vidi `flex` badge pored element-a
3. Klikni → Flexbox highlighter
4. **Layout tab** → Flexbox properties

---

## 📊 UPOREDNA TABELA

### **CSS Variables vs Hard-coded Vrednosti**

| Aspekt          | Hard-coded                     | Sa Varijablama                     |
| --------------- | ------------------------------ | ---------------------------------- |
| **Održavanje**  | ❌ Teško (promene na 50 mesta) | ✅ Lako (1 promena)                |
| **Čitljivost**  | ❌ `#3b82f6` — šta je ovo?     | ✅ `var(--color-primary)` — jasno! |
| **DRY Princip** | ❌ Ponavljanje                 | ✅ Bez ponavljanja                 |
| **Refactoring** | ❌ Ručno traženje i zamena     | ✅ Automatsko (1 promena)          |
| **DevTools**    | ❌ Teško debugovati            | ✅ Lako — vidiš varijable          |

---

### **Flexbox vs Float (Stari Način)**

| Aspekt         | Float (Stari)                | Flexbox (Moderni)                |
| -------------- | ---------------------------- | -------------------------------- |
| **Sintaksa**   | ❌ Komplikovana (`clearfix`) | ✅ Jednostavna (`display: flex`) |
| **Poravnanje** | ❌ Teško (hack-ovi)          | ✅ Lako (`justify-content`)      |
| **Responsive** | ❌ Ručno                     | ✅ `flex-wrap`                   |
| **Razmak**     | ❌ `margin` na svakom item-u | ✅ `gap` property                |
| **DevTools**   | ❌ Nema vizuelni alat        | ✅ Flexbox inspector             |
| **Moderno**    | ❌ Zastarelo                 | ✅ Standard za 2025              |

---

## 🎯 NAJČEŠĆI PATTERNS

### **Pattern 1: Horizontalna Navigacija**

```css
.nav-list {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
```

---

### **Pattern 2: Vertikalni Stack**

```css
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
```

---

### **Pattern 3: Space Between (Header/Footer)**

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo levo, nav desno */
```

---

### **Pattern 4: Card Grid (Responsive)**

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* Raste, skuplja se, min 300px */
}
```

---

### **Pattern 5: Centar Anything**

```css
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Savršen centar! */
```

---

## ⚠️ ČESTE GREŠKE

### **CSS Variables**

❌ **Greška 1:** Zaboravljena `--` prefix

```css
/* LOŠE */
:root {
  color-primary: #3b82f6; /* Nema -- */
}

/* DOBRO */
:root {
  --color-primary: #3b82f6;
}
```

---

❌ **Greška 2:** Korišćenje bez `var()`

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

❌ **Greška 3:** Import POSLE reset-a

```css
/* LOŠE */
* {
  margin: 0;
}
@import url("colors.css"); /* Kasno! */

/* DOBRO */
@import url("colors.css"); /* PRVO! */
* {
  margin: 0;
}
```

---

### **Flexbox**

❌ **Greška 1:** Flexbox na pogrešnom elementu

```css
/* LOŠE */
.nav-list li {
  display: flex; /* Na <li> umesto <ul> */
}

/* DOBRO */
.nav-list {
  display: flex; /* Na parent (<ul>) */
}
```

---

❌ **Greška 2:** Nedostaje `gap`

```css
/* LOŠE */
.nav-list {
  display: flex;
  /* Nema gapa — items se lepe! */
}

/* DOBRO */
.nav-list {
  display: flex;
  gap: 1rem;
}
```

---

❌ **Greška 3:** Zaboravljeno `flex-wrap`

```css
/* LOŠE */
.nav-list {
  display: flex;
  /* Nema wrap — overflow na mobilnom! */
}

/* DOBRO */
.nav-list {
  display: flex;
  flex-wrap: wrap; /* Responsive! */
}
```

---

## 🚀 VS CODE SHORTCUTS (Za Danas)

### **Multi-Cursor Editing**

```
Ctrl + D              — Selektuj sledeću pojavu
Ctrl + Shift + L      — Selektuj SVE pojave
Ctrl + Alt + Down/Up  — Dodaj kursor gore/dole
Alt + Click           — Dodaj kursor ručno
```

**Primer:** Promeni sve `#3b82f6` u `var(--color-primary)`

1. Selektuj `#3b82f6`
2. `Ctrl + Shift + L`
3. Ukucaj `var(--color-primary)`

---

### **Emmet za CSS**

```
df      → display: flex;
jcc     → justify-content: center;
aic     → align-items: center;
fxw     → flex-wrap: wrap;
g1r     → gap: 1rem;
```

---

## 📚 DODATNI RESURSI

### **MDN Dokumentacija**

**CSS Variables:**

- [Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [var() function](https://developer.mozilla.org/en-US/docs/Web/CSS/var)

**Flexbox:**

- [Flexbox guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Basic concepts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

### **Interaktivni Alati**

- [Flexbox Froggy](https://flexboxfroggy.com/) — Igra za učenje Flexbox-a
- [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

## ✅ FINALNI CHECKLIST

**Pre nego što završiš dan:**

- [ ] Razumem šta je `:root` i `var()`
- [ ] Mogu da importujem varijable iz arhitekture
- [ ] Razumem fallback vrednosti
- [ ] Mogu da koristim `calc()` sa varijablama
- [ ] Razumem `display: flex`
- [ ] Znam razliku flex container vs flex items
- [ ] Mogu da koristim `justify-content` i `align-items`
- [ ] Mogu da koristim `gap` property
- [ ] Razumem `flex-wrap` za responsive
- [ ] Mogu da debugujem u DevTools Flexbox inspector
- [ ] Napravljen horizontalna navigacija u `scratch.html`

**Ako je SVE ✅ → DAN 09 ZAVRŠEN! 🎉**

---

**Ovaj cheatsheet sačuvaj — koristićeš ga SVAKI DAN! 💪**
