---
type: cheatsheet
topic: Flexbox — Complete Reference
date: 2025-12-13
author: AI Mentor
language: sr (Serbian explanations) + en (code)
---

# 💪 FLEXBOX — KOMPLETAN CHEATSHEET

**CSS Flexible Box Layout (Flexbox) — Sve što trebaš znati!**

---

## 📖 SADRŽAJ

1. [Osnove](#osnove)
2. [Aktivacija Flexbox-a](#aktivacija-flexbox-a)
3. [Flex Container Properties](#flex-container-properties)
4. [Flex Items Properties](#flex-items-properties)
5. [Alignment](#alignment)
6. [Sizing & Wrapping](#sizing--wrapping)
7. [Common Patterns](#common-patterns)
8. [DevTools](#devtools)
9. [Browser Compatibility](#browser-compatibility)
10. [Real-World Examples](#real-world-examples)
11. [Common Mistakes](#common-mistakes)

---

## 🎯 OSNOVE

### **Šta je Flexbox?**

Flexbox je **jednodimenzionalni layout sistem** za poravnanje i distribuciju prostora između items-a u containeru.

**Zašto je važan:**

- ✅ **Moderni standard** — zamenjuje `float` i `position`
- ✅ **Jednostavnost** — kompleksni layout-i sa par linija koda
- ✅ **Responsive** — automatski se prilagođava
- ✅ **Poravnanje** — vertikalno i horizontalno centriranje je lako
- ✅ **Flexible** — items automatski rastu/skupljaju se

---

### **Mental Model**

```
┌─────────────── FLEX CONTAINER ───────────────┐
│                                               │
│  [FLEX ITEM 1]  [FLEX ITEM 2]  [FLEX ITEM 3] │ ← Main Axis (→)
│                                               │
└───────────────────────────────────────────────┘
       ↕
    Cross Axis
```

**Ključni koncepti:**

1. **Flex Container** — parent element sa `display: flex`
2. **Flex Items** — direktni children container-a
3. **Main Axis** — glavni smer (default: horizontalno →)
4. **Cross Axis** — suprotni smer (default: vertikalno ↕)

---

## 🚀 AKTIVACIJA FLEXBOX-A

### **Osnovni Primer**

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: flex; /* Aktivira Flexbox */
}
```

**Šta se dešava:**

- `.container` postaje **flex container**
- Svi direktni children (`.item`) postaju **flex items**
- Items se poređaju horizontalno (default)

---

### **Inline Flex**

```css
.container {
  display: inline-flex; /* Inline-level flex container */
}
```

**Razlika:**

- `display: flex` — block-level container (puna širina)
- `display: inline-flex` — inline-level container (širina sadržaja)

---

## 📦 FLEX CONTAINER PROPERTIES

### **1. flex-direction**

**Definiše glavni smer (main axis).**

```css
.container {
  display: flex;
  flex-direction: row; /* Default: horizontalno → */
  flex-direction: column; /* Vertikalno ↓ */
  flex-direction: row-reverse; /* Obrnuto horizontalno ← */
  flex-direction: column-reverse; /* Obrnuto vertikalno ↑ */
}
```

**Vizualizacija:**

```
row:
┌─────────────────────┐
│ [1] [2] [3]         │ →
└─────────────────────┘

column:
┌──────┐
│ [1]  │
│ [2]  │ ↓
│ [3]  │
└──────┘

row-reverse:
┌─────────────────────┐
│         [3] [2] [1] │ ←
└─────────────────────┘

column-reverse:
┌──────┐
│ [3]  │
│ [2]  │ ↑
│ [1]  │
└──────┘
```

---

### **2. flex-wrap**

**Definiše da li items prelaze na novu liniju.**

```css
.container {
  display: flex;
  flex-wrap: nowrap; /* Default: ne prelama */
  flex-wrap: wrap; /* Prelama na novu liniju */
  flex-wrap: wrap-reverse; /* Prelama obrnuto */
}
```

**Vizualizacija:**

```
nowrap (default):
┌──────────────────────────────────┐
│ [1] [2] [3] [4] [5] [6] [7] [8]  │ (Overflow)
└──────────────────────────────────┘

wrap:
┌──────────────────────────────────┐
│ [1] [2] [3] [4] [5]              │
│ [6] [7] [8]                      │
└──────────────────────────────────┘

wrap-reverse:
┌──────────────────────────────────┐
│ [6] [7] [8]                      │
│ [1] [2] [3] [4] [5]              │
└──────────────────────────────────┘
```

---

### **3. flex-flow (Shorthand)**

**Kombinacija `flex-direction` + `flex-wrap`.**

```css
.container {
  flex-flow: row wrap; /* flex-direction flex-wrap */
}

/* Isto kao: */
.container {
  flex-direction: row;
  flex-wrap: wrap;
}
```

---

### **4. justify-content**

**Poravnanje na main axis (horizontalno ako `row`).**

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

**Vizualizacija:**

```
flex-start:
┌──────────────────────────────────┐
│ [A] [B] [C]                      │
└──────────────────────────────────┘

center:
┌──────────────────────────────────┐
│          [A] [B] [C]             │
└──────────────────────────────────┘

flex-end:
┌──────────────────────────────────┐
│                      [A] [B] [C] │
└──────────────────────────────────┘

space-between:
┌──────────────────────────────────┐
│ [A]            [B]            [C]│
└──────────────────────────────────┘

space-around:
┌──────────────────────────────────┐
│   [A]        [B]        [C]      │
└──────────────────────────────────┘

space-evenly:
┌──────────────────────────────────┐
│    [A]       [B]       [C]       │
└──────────────────────────────────┘
```

**Ključne razlike:**

- `space-between` — NEMA razmaka na krajevima
- `space-around` — Razmak oko svakog item-a (items imaju **jednaki** razmak sa obe strane)
- `space-evenly` — Svi razmaci su **identični**

---

### **5. align-items**

**Poravnanje na cross axis (vertikalno ako `row`).**

```css
.container {
  display: flex;
  align-items: stretch; /* Default: razvuci */
  align-items: flex-start; /* Vrh */
  align-items: center; /* Centar (NAJČEŠĆE!) */
  align-items: flex-end; /* Dno */
  align-items: baseline; /* Baseline teksta */
}
```

**Vizualizacija (flex-direction: row):**

```
stretch (default):
┌───────────────────────┐
│ ┌───┐ ┌───┐ ┌───┐    │
│ │ A │ │ B │ │ C │    │
│ └───┘ └───┘ └───┘    │
└───────────────────────┘

flex-start:
┌───────────────────────┐
│ ┌─┐ ┌─┐ ┌─┐          │
│ │A│ │B│ │C│          │
│ └─┘ └─┘ └─┘          │
│                       │
└───────────────────────┘

center:
┌───────────────────────┐
│                       │
│ ┌─┐ ┌─┐ ┌─┐          │
│ │A│ │B│ │C│          │
│ └─┘ └─┘ └─┘          │
│                       │
└───────────────────────┘

flex-end:
┌───────────────────────┐
│                       │
│ ┌─┐ ┌─┐ ┌─┐          │
│ │A│ │B│ │C│          │
│ └─┘ └─┘ └─┘          │
└───────────────────────┘

baseline:
┌───────────────────────┐
│ ┌───┐                 │
│ │ A │ ┌─┐ ┌──┐        │
│ └───┘ │B│ │C │        │
│       └─┘ └──┘        │
└───────────────────────┘
        ^--- Baseline teksta
```

---

### **6. align-content**

**Poravnanje VIŠE linija na cross axis (samo sa `flex-wrap: wrap`).**

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch; /* Default */
  align-content: flex-start; /* Vrh */
  align-content: center; /* Centar */
  align-content: flex-end; /* Dno */
  align-content: space-between;
  align-content: space-around;
  align-content: space-evenly;
}
```

**Važno:**

- Radi SAMO kada ima **više linija** (sa `flex-wrap: wrap`)
- `align-items` kontroliše items UNUTAR linije
- `align-content` kontroliše LINIJE međusobno

---

### **7. gap / row-gap / column-gap**

**Razmak između items-a (moderna property).**

```css
.container {
  display: flex;
  gap: 1rem; /* Jednaki razmak */
  gap: 1rem 2rem; /* row-gap column-gap */
}

/* Ili specifično: */
.container {
  row-gap: 1rem;
  column-gap: 2rem;
}
```

**Vizualizacija:**

```
Bez gap-a:
┌──────────────────┐
│[A][B][C][D]      │
└──────────────────┘

Sa gap: 1rem:
┌──────────────────┐
│[A] [B] [C] [D]   │
└──────────────────┘
```

**Ključno:**

- Zamenjuje `margin-right` na svakom item-u
- Jednostavnije i čistije
- Support: Chrome 84+, Firefox 63+, Safari 14.1+

---

## 🎨 FLEX ITEMS PROPERTIES

### **1. flex-grow**

**Kako item raste kada ima viška prostora.**

```css
.item {
  flex-grow: 0; /* Default: ne raste */
  flex-grow: 1; /* Raste proporcionalno */
  flex-grow: 2; /* Raste 2x brže od drugih */
}
```

**Vizualizacija:**

```
flex-grow: 0 (default):
┌──────────────────────────────────┐
│ [A] [B] [C]            PRAZAN    │
└──────────────────────────────────┘

flex-grow: 1 (svi items):
┌──────────────────────────────────┐
│ [  A  ] [  B  ] [  C  ]          │
└──────────────────────────────────┘

Item A: flex-grow: 2, Items B & C: flex-grow: 1:
┌──────────────────────────────────┐
│ [    A    ] [  B  ] [  C  ]      │
└──────────────────────────────────┘
```

**Kako radi:**

- Zbir svih `flex-grow` vrednosti = ukupni delovi
- Svaki item dobija proporcionalan deo viška prostora

**Primer:**

```css
.item-1 {
  flex-grow: 2;
} /* 2/4 viška prostora */
.item-2 {
  flex-grow: 1;
} /* 1/4 viška prostora */
.item-3 {
  flex-grow: 1;
} /* 1/4 viška prostora */
/* Ukupno: 2 + 1 + 1 = 4 */
```

---

### **2. flex-shrink**

**Kako item se skuplja kada NEMA prostora.**

```css
.item {
  flex-shrink: 1; /* Default: skuplja se */
  flex-shrink: 0; /* Ne skuplja se */
  flex-shrink: 2; /* Skuplja se 2x brže */
}
```

**Vizualizacija:**

```
flex-shrink: 1 (default):
Container je premali → items se skupljaju:
┌──────────────┐
│ [A][B][C][D] │
└──────────────┘

flex-shrink: 0 na Item A:
Item A ne može da se skupi → Overflow:
┌──────────────┐
│ [ A ][B][C][D│]
└──────────────┘
```

**Ključno:**

- `flex-shrink: 0` — item neće da se skuplja (može overflow)
- Korisno za kritične elemente (logo, dugme)

---

### **3. flex-basis**

**Početna veličina item-a PRE nego što flex-grow/shrink radi.**

```css
.item {
  flex-basis: auto; /* Default: koristi width/height */
  flex-basis: 200px; /* Fiksna početna veličina */
  flex-basis: 50%; /* Procenat od container-a */
  flex-basis: 0; /* Ignoriše sadržaj, samo raste/skuplja */
}
```

**Razlika između `width` i `flex-basis`:**

```css
/* width */
.item {
  width: 200px; /* Fiksna širina */
}

/* flex-basis */
.item {
  flex-basis: 200px; /* Početna širina, može da raste/skuplja */
}
```

**Ključno:**

- `flex-basis` ima prioritet nad `width` u flex context-u
- `flex-basis: 0` → items su potpuno flexible (ignorišu sadržaj)

---

### **4. flex (Shorthand)**

**Kombinacija `flex-grow`, `flex-shrink`, `flex-basis`.**

```css
.item {
  flex: 1 1 0%; /* flex-grow flex-shrink flex-basis */
}
```

**Najčešći shorthand-i:**

```css
/* flex: 1 (NAJČEŠĆE!) */
.item {
  flex: 1;
  /* = flex: 1 1 0% */
  /* Raste, skuplja se, ignoriše sadržaj */
}

/* flex: auto */
.item {
  flex: auto;
  /* = flex: 1 1 auto */
  /* Raste, skuplja se, koristi width/height */
}

/* flex: none */
.item {
  flex: none;
  /* = flex: 0 0 auto */
  /* Ne raste, ne skuplja se, koristi width/height */
}

/* flex: 0 1 auto (DEFAULT) */
.item {
  flex: initial;
  /* = flex: 0 1 auto */
  /* Ne raste, skuplja se, koristi width/height */
}
```

**Praktičan primer:**

```css
.sidebar {
  flex: 0 0 250px; /* Fiksna širina, ne raste, ne skuplja */
}

.main-content {
  flex: 1; /* Zauzima ostatak prostora */
}
```

---

### **5. align-self**

**Override `align-items` za pojedinačni item.**

```css
.container {
  display: flex;
  align-items: center; /* Svi items su centrirani */
}

.item-special {
  align-self: flex-end; /* Ovaj item je na dnu */
}
```

**Vrednosti:**

```css
.item {
  align-self: auto; /* Default: nasledi od align-items */
  align-self: flex-start;
  align-self: center;
  align-self: flex-end;
  align-self: stretch;
  align-self: baseline;
}
```

---

### **6. order**

**Promeni redosled items-a (ne menja HTML).**

```css
.item-1 {
  order: 2;
}
.item-2 {
  order: 1;
} /* Prikazaće se prvi */
.item-3 {
  order: 3;
}
```

**Vizualizacija:**

```
HTML:
<div class="item-1">A</div>
<div class="item-2">B</div>
<div class="item-3">C</div>

Vizuelno (sa order):
┌──────────────────┐
│ [B] [A] [C]      │
└──────────────────┘
```

**Ključno:**

- Default order: `0`
- Može biti negativan (`order: -1`)
- Ne menja DOM, samo vizuelni redosled
- **Oprez:** Može da zbuni screen reader-e

---

## 🎯 ALIGNMENT (Kompletan Pregled)

### **Horizontalno Poravnanje (Main Axis)**

```css
.container {
  display: flex;
  justify-content: center; /* Horizontalno centar */
}
```

---

### **Vertikalno Poravnanje (Cross Axis)**

```css
.container {
  display: flex;
  align-items: center; /* Vertikalno centar */
}
```

---

### **Savršen Centar (Horizontal + Vertical)**

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Puna visina ekrana */
}
```

**Vizualizacija:**

```
┌────────────────────────────┐
│                            │
│                            │
│          [ITEM]            │ ← Savršeno centriran!
│                            │
│                            │
└────────────────────────────┘
```

---

## 📏 SIZING & WRAPPING

### **Auto Margins (Magic Trick!)**

```css
.item-right {
  margin-left: auto; /* Gura item na desnu stranu */
}
```

**Primer:**

```html
<div class="nav">
  <div class="logo">Logo</div>
  <div class="nav-links">Links</div>
  <div class="cta">Button</div>
</div>
```

```css
.nav {
  display: flex;
  align-items: center;
}

.cta {
  margin-left: auto; /* Gura button na desno */
}
```

**Vizualizacija:**

```
┌─────────────────────────────────────┐
│ [Logo] [Links]           [Button]  │
└─────────────────────────────────────┘
```

---

### **Responsive sa Flex-Wrap**

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.item {
  flex: 1 1 300px; /* Min width 300px, raste da popuni prostor */
}
```

**Kako radi:**

- Desktop (1200px+): 3-4 items u redu
- Tablet (768px): 2 items u redu
- Mobile (320px): 1 item u redu

---

## 🌟 COMMON PATTERNS

### **Pattern 1: Horizontalna Navigacija**

```css
.nav-list {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
```

---

### **Pattern 2: Sidebar + Main Content**

```css
.layout {
  display: flex;
  gap: 1rem;
}

.sidebar {
  flex: 0 0 250px; /* Fiksna širina */
}

.main-content {
  flex: 1; /* Ostatak prostora */
}
```

---

### **Pattern 3: Card Grid (Responsive)**

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* Min 300px, raste */
}
```

---

### **Pattern 4: Header (Logo + Nav + Button)**

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

### **Pattern 5: Footer (Columns)**

```css
.footer {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-column {
  flex: 1 1 200px;
}
```

---

### **Pattern 6: Holy Grail Layout**

```html
<div class="layout">
  <header>Header</header>
  <div class="main">
    <aside class="left">Left Sidebar</aside>
    <main class="content">Main Content</main>
    <aside class="right">Right Sidebar</aside>
  </div>
  <footer>Footer</footer>
</div>
```

```css
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  display: flex;
  flex: 1;
}

.left,
.right {
  flex: 0 0 200px;
}

.content {
  flex: 1;
}
```

---

## 🔍 DEVTOOLS

### **Chrome DevTools**

**Kako videti Flexbox:**

1. `F12` → Elements tab
2. Desni klik na flex container → Inspect
3. Vidiš **`flex`** badge pored element-a
4. Klikni na badge → **Flexbox overlay** se aktivira

**Flexbox Overlay:**

- Prikazuje main axis i cross axis
- Prikazuje gap razmake
- Prikazuje flex grow/shrink

**Layout Tab:**

1. Pored **Styles** tab-a, klikni na **Layout** tab
2. Vidi **Flexbox** sekciju
3. Kontrole za `justify-content`, `align-items`, etc.

---

### **Firefox DevTools**

**Kako videti Flexbox:**

1. `F12` → Inspector tab
2. Vidiš **`flex`** badge pored element-a
3. Klikni na badge → **Flexbox highlighter**

**Layout Tab:**

1. Klikni na **Layout** tab (pored Inspector)
2. Vidi **Flexbox** sekciju
3. Overlay kontrole, display grid

---

## 🌍 BROWSER COMPATIBILITY

### **Support Table**

| Browser | Version | Support           |
| ------- | ------- | ----------------- |
| Chrome  | 29+     | ✅ (2013)         |
| Firefox | 28+     | ✅ (2014)         |
| Safari  | 9+      | ✅ (2015)         |
| Edge    | 12+     | ✅                |
| IE 11   | 11      | ⚠️ Partial (bugs) |
| IE 10   | 10      | ⚠️ Prefixes       |

**Ključno:**

- **99%+ global support** (2025)
- IE 11 ima bugove (oprez!)

---

### **Vendor Prefixes (Stari Browsers)**

```css
.container {
  display: -webkit-box; /* Safari 6-, iOS 6- */
  display: -ms-flexbox; /* IE 10 */
  display: flex; /* Modern */
}
```

**Autoprefixer:**

```bash
npm install autoprefixer
```

---

## 🌟 REAL-WORLD EXAMPLES

### **Primer 1: Responsive Navigation**

```html
<nav class="site-nav">
  <ul class="nav-list">
    <li><a href="#" class="nav-link">Home</a></li>
    <li><a href="#" class="nav-link">About</a></li>
    <li><a href="#" class="nav-link">Services</a></li>
    <li><a href="#" class="nav-link">Contact</a></li>
  </ul>
</nav>
```

```css
.site-nav {
  background: var(--color-surface);
  padding: var(--space-md);
}

.nav-list {
  display: flex;
  gap: var(--nav-link-gap);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Responsive! */
}

.nav-link {
  padding: 0.5rem 1rem;
  color: var(--color-text);
  border-radius: 4px;
  transition: background 250ms ease;
  white-space: nowrap; /* Ne prelama tekst */
}

.nav-link:hover {
  background: var(--color-primary-soft);
  color: var(--color-primary);
}
```

---

### **Primer 2: Card Grid**

```html
<div class="card-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  flex: 1 1 300px; /* Min width 300px */
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

---

### **Primer 3: Pricing Table**

```html
<div class="pricing">
  <div class="plan">Basic</div>
  <div class="plan featured">Pro</div>
  <div class="plan">Enterprise</div>
</div>
```

```css
.pricing {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: stretch; /* Jednaka visina */
}

.plan {
  flex: 1 1 300px;
  max-width: 350px;
  background: white;
  border: 2px solid var(--color-border);
  border-radius: 8px;
  padding: 2rem;
}

.plan.featured {
  border-color: var(--color-primary);
  transform: scale(1.05); /* Izdvoji featured */
}
```

---

## ⚠️ COMMON MISTAKES

### **❌ Greška 1: Flexbox na Pogrešnom Elementu**

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

### **❌ Greška 2: Zaboravljen Gap**

```css
/* LOŠE */
.nav-list {
  display: flex;
  /* Items se lepe! */
}

/* DOBRO */
.nav-list {
  display: flex;
  gap: 1rem;
}
```

---

### **❌ Greška 3: Zaboravljen Flex-Wrap**

```css
/* LOŠE */
.card-container {
  display: flex;
  /* Overflow na mobilnom! */
}

/* DOBRO */
.card-container {
  display: flex;
  flex-wrap: wrap; /* Responsive */
}
```

---

### **❌ Greška 4: Width na Flex Items**

```css
/* LOŠE */
.item {
  width: 300px; /* Ne radi kao što očekuješ */
}

/* DOBRO */
.item {
  flex-basis: 300px; /* Početna veličina */
}
```

---

### **❌ Greška 5: Zaboravljeno Align-Items**

```css
/* LOŠE */
.nav-list {
  display: flex;
  justify-content: center;
  /* Items nisu vertikalno centrirani! */
}

/* DOBRO */
.nav-list {
  display: flex;
  justify-content: center;
  align-items: center; /* Vertikalno centar */
}
```

---

## 📚 MDN RESURSI

- [Flexbox Guide](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Basic Concepts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Aligning Items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)

---

## ✅ QUICK CHECKLIST

**Pre nego što koristiš Flexbox:**

- [ ] Razumem `display: flex`
- [ ] Znam razliku flex container vs flex items
- [ ] Razumem main axis vs cross axis
- [ ] Mogu da koristim `justify-content`
- [ ] Mogu da koristim `align-items`
- [ ] Mogu da koristim `gap` property
- [ ] Razumem `flex-wrap` za responsive
- [ ] Znam kako radi `flex-grow`, `flex-shrink`, `flex-basis`
- [ ] Mogu da koristim `flex` shorthand
- [ ] Mogu da debugujem u DevTools Flexbox inspector

**Ako je sve ✅ → Spreman si za produkciju! 🚀**

---

**Sačuvaj ovaj cheatsheet — biće ti STALNO potreban! 💪**
