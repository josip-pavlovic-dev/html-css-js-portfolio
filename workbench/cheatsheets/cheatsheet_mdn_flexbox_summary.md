---
type: cheatsheet
topic: MDN Flexbox — Summarized in Serbian
date: 2025-12-13
author: AI Mentor
source: MDN Web Docs
language: sr (Serbian)
---

# 📚 MDN FLEXBOX — SAŽETAK NA SRPSKOM

**Kompletan pregled MDN dokumentacije o CSS Flexible Box Layout (Flexbox) prevedeno i objašnjeno na srpskom jeziku.**

---

## 📖 SADRŽAJ

1. [Uvod u Flexbox](#uvod-u-flexbox)
2. [Basic Concepts of Flexbox](#basic-concepts-of-flexbox)
3. [Flex Container](#flex-container)
4. [Flex Items](#flex-items)
5. [Axes (Ose)](#axes-ose)
6. [Wrapping](#wrapping)
7. [Alignment](#alignment)
8. [Sizing](#sizing)
9. [Use Cases](#use-cases)
10. [Browser Compatibility](#browser-compatibility)
11. [FAQ](#faq)

---

## 🎯 UVOD U FLEXBOX

### **Šta je Flexbox?**

**MDN definicija:**

> "The Flexible Box Layout Module (Flexbox) is designed for one-dimensional layout—to lay out items in rows or columns."

**Srpski prevod:**

Flexible Box Layout Module (Flexbox) je dizajniran za **jednodimenzionalni layout** — za poređanje items-a u redovima ili kolonama.

---

### **Zašto Flexbox?**

**Iz MDN-a:**

Pre Flexbox-a, CSS layout su bili bazirani na:

1. **Block layout** — dizajniran za dokumente
2. **Inline layout** — dizajniran za tekst
3. **Table layout** — dizajniran za tabelarne podatke
4. **Positioned layout** — dizajniran za eksplicitno pozicioniranje

**Problem:**

Ovi layout sistemi nisu bili dizajnirani za moderne web aplikacije. Zadaci kao što su:

- Vertikalno centriranje
- Jednaka visina kolona
- Distribucija prostora
- Responsive layout

...bili su **teški** i zahtevali su **hack-ove**.

**Rešenje — Flexbox:**

Flexbox je dizajniran **specifično** za layout, sa:

- ✅ Jednostavnim vertikalnim poravnanjem
- ✅ Automatskim raspodelom prostora
- ✅ Flexible sizing (rast/skupljanje)
- ✅ Responsive behavior

---

## 📖 BASIC CONCEPTS OF FLEXBOX

**MDN Članak:** [Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

---

### **1. Flex Container & Flex Items**

**Iz MDN-a:**

> "An area of a document laid out using flexbox is called a **flex container**. To create a flex container, set the value of the `display` property to `flex` or `inline-flex`."

**Srpski prevod:**

Oblast dokumenta koja je layoutovana pomoću Flexbox-a se zove **flex container**. Da bi kreirao flex container, postavi vrednost `display` property-ja na `flex` ili `inline-flex`.

**Primer:**

```css
.container {
  display: flex; /* Kreira flex container */
}
```

**Rezultat:**

- `.container` postaje **flex container**
- Svi **direktni children** postaju **flex items**

**Važno:**

> "Only the **direct children** of a flex container become flex items."

**Srpski prevod:**

Samo **direktni children** flex container-a postaju flex items.

**Primer:**

```html
<div class="container">
  <!-- Flex container -->
  <div class="item">Item 1</div>
  <!-- ✅ Flex item -->
  <div class="item">Item 2</div>
  <!-- ✅ Flex item -->
  <div class="item">
    <p>Nested</p>
    <!-- ❌ NIJE flex item (nested child) -->
  </div>
</div>
```

---

### **2. Main Axis & Cross Axis**

**Iz MDN-a:**

> "Flexbox is a one-dimensional layout method. When we work with flexbox, we need to think in terms of two axes — the **main axis** and the **cross axis**."

**Srpski prevod:**

Flexbox je jednodimenzionalni layout metod. Kada radimo sa Flexbox-om, moramo da razmišljamo u terminima dve ose — **glavna osa (main axis)** i **poprečna osa (cross axis)**.

---

#### **Main Axis (Glavna Osa)**

**Iz MDN-a:**

> "The main axis is defined by the `flex-direction` property."

**Srpski prevod:**

Glavna osa je definisana `flex-direction` property-jem.

**Vrednosti:**

```css
.container {
  flex-direction: row; /* Main axis: horizontalno → */
  flex-direction: row-reverse; /* Main axis: horizontalno ← */
  flex-direction: column; /* Main axis: vertikalno ↓ */
  flex-direction: column-reverse; /* Main axis: vertikalno ↑ */
}
```

**Vizualizacija:**

```
row (default):
┌────────────────────────┐
│ [1] [2] [3] → Main Axis│
└────────────────────────┘

column:
┌──────┐
│ [1]  │
│ [2]  │ ↓ Main Axis
│ [3]  │
└──────┘
```

---

#### **Cross Axis (Poprečna Osa)**

**Iz MDN-a:**

> "The cross axis runs perpendicular to the main axis."

**Srpski prevod:**

Poprečna osa je **upravna** na glavnu osu.

**Vizualizacija:**

```
flex-direction: row
┌────────────────────────┐
│ [1] [2] [3] → Main Axis│
│         ↕              │
│     Cross Axis         │
└────────────────────────┘

flex-direction: column
┌──────┐
│ [1]  │ ↓ Main Axis
│ [2]  │
│ [3]  │
└──────┘
  ↔ Cross Axis
```

---

### **3. Start & End Lines**

**Iz MDN-a:**

> "Flexbox doesn't assume that the document is written in a specific direction. It uses **start** and **end** instead of **left** and **right**."

**Srpski prevod:**

Flexbox ne pretpostavlja da je dokument napisan u specifičnom smeru. Koristi **start (početak)** i **end (kraj)** umesto **left (levo)** i **right (desno)**.

**Zašto?**

- Podržava right-to-left (RTL) jezike (arapski, hebrejski)
- Fleksibilnije za internacionalizaciju

**Primer:**

```
Left-to-right (LTR):
main-start                       main-end
    ↓                               ↓
┌────────────────────────────────────┐
│ [Item 1] [Item 2] [Item 3]         │
└────────────────────────────────────┘

Right-to-left (RTL):
main-end                         main-start
    ↓                               ↓
┌────────────────────────────────────┐
│         [Item 3] [Item 2] [Item 1] │
└────────────────────────────────────┘
```

---

## 📦 FLEX CONTAINER

**Iz MDN-a:**

> "Properties that apply to the **flex container** control how items are laid out."

**Srpski prevod:**

Properties koji se primenjuju na **flex container** kontrolišu kako se items poređaju.

---

### **1. display**

```css
.container {
  display: flex; /* Block-level flex container */
  display: inline-flex; /* Inline-level flex container */
}
```

**Razlika:**

- `flex` — container je **block-level** (zauzima punu širinu)
- `inline-flex` — container je **inline-level** (širina sadržaja)

---

### **2. flex-direction**

**Iz MDN-a:**

> "The `flex-direction` property specifies the direction of the main axis."

**Srpski prevod:**

`flex-direction` property specifikuje smer glavne ose.

```css
.container {
  flex-direction: row; /* Default */
  flex-direction: row-reverse;
  flex-direction: column;
  flex-direction: column-reverse;
}
```

---

### **3. flex-wrap**

**Iz MDN-a:**

> "The `flex-wrap` property specifies whether flex items are forced into a single line or can be wrapped onto multiple lines."

**Srpski prevod:**

`flex-wrap` property specifikuje da li su flex items forsirani u jednu liniju ili mogu biti omotani na više linija.

```css
.container {
  flex-wrap: nowrap; /* Default: jedna linija */
  flex-wrap: wrap; /* Više linija */
  flex-wrap: wrap-reverse;
}
```

**Vizualizacija:**

```
nowrap (default):
┌──────────────────────────────────┐
│ [1] [2] [3] [4] [5] [6] [7] [8]  │ (Overflow ako nema prostora)
└──────────────────────────────────┘

wrap:
┌──────────────────────────────────┐
│ [1] [2] [3] [4] [5]              │
│ [6] [7] [8]                      │
└──────────────────────────────────┘
```

---

### **4. flex-flow (Shorthand)**

**Iz MDN-a:**

> "The `flex-flow` property is a shorthand for setting both `flex-direction` and `flex-wrap`."

**Srpski prevod:**

`flex-flow` property je skraćenica za postavljanje oba `flex-direction` i `flex-wrap`.

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

### **5. justify-content**

**Iz MDN-a:**

> "The `justify-content` property aligns items along the **main axis**."

**Srpski prevod:**

`justify-content` property poravnava items duž **glavne ose**.

```css
.container {
  justify-content: flex-start; /* Default */
  justify-content: center;
  justify-content: flex-end;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}
```

**Objašnjenje vrednosti:**

- **`flex-start`** — Items su na početku (levo ako `row`)
- **`center`** — Items su centrirani
- **`flex-end`** — Items su na kraju (desno ako `row`)
- **`space-between`** — Jednaki razmaci **između** items-a (nema razmaka na krajevima)
- **`space-around`** — Jednaki razmaci **oko** items-a (half-size razmak na krajevima)
- **`space-evenly`** — Potpuno jednaki razmaci (isti razmak svuda)

**Vizualizacija:**

```
space-between:
┌──────────────────────────────────┐
│[A]           [B]           [C]   │
└──────────────────────────────────┘

space-around:
┌──────────────────────────────────┐
│  [A]        [B]        [C]       │
└──────────────────────────────────┘

space-evenly:
┌──────────────────────────────────┐
│   [A]       [B]       [C]        │
└──────────────────────────────────┘
```

---

### **6. align-items**

**Iz MDN-a:**

> "The `align-items` property aligns items along the **cross axis**."

**Srpski prevod:**

`align-items` property poravnava items duž **poprečne ose**.

```css
.container {
  align-items: stretch; /* Default */
  align-items: flex-start;
  align-items: center;
  align-items: flex-end;
  align-items: baseline;
}
```

**Objašnjenje vrednosti:**

- **`stretch`** — Items se razvlače da popune container (default)
- **`flex-start`** — Items su na početku cross axis-a (vrh ako `row`)
- **`center`** — Items su centrirani na cross axis-u (vertikalno centriranje!)
- **`flex-end`** — Items su na kraju cross axis-a (dno ako `row`)
- **`baseline`** — Items su poravnati na baseline teksta

---

### **7. align-content**

**Iz MDN-a:**

> "The `align-content` property aligns flex lines (when there are multiple lines) along the cross axis."

**Srpski prevod:**

`align-content` property poravnava flex linije (kada ima više linija) duž poprečne ose.

**Važno:**

- Radi SAMO kada ima `flex-wrap: wrap` i više linija
- Ne utiče na single-line flex containers

```css
.container {
  flex-wrap: wrap;
  align-content: stretch; /* Default */
  align-content: flex-start;
  align-content: center;
  align-content: flex-end;
  align-content: space-between;
  align-content: space-around;
  align-content: space-evenly;
}
```

---

### **8. gap / row-gap / column-gap**

**Iz MDN-a:**

> "The `gap` property sets the gaps (gutters) between rows and columns."

**Srpski prevod:**

`gap` property postavlja razmake (gutters) između redova i kolona.

```css
.container {
  display: flex;
  gap: 1rem; /* Jednaki row-gap i column-gap */
  gap: 1rem 2rem; /* row-gap column-gap */
}

/* Ili specifično: */
.container {
  row-gap: 1rem;
  column-gap: 2rem;
}
```

**Napomena:**

- Moderna property (Chrome 84+, Firefox 63+, Safari 14.1+)
- Zamenjuje `margin` na svakom item-u

---

## 🎨 FLEX ITEMS

**Iz MDN-a:**

> "Properties that apply to **flex items** control how they size themselves and how they behave within the flex container."

**Srpski prevod:**

Properties koji se primenjuju na **flex items** kontrolišu kako oni sami sebe veličaju i kako se ponašaju unutar flex container-a.

---

### **1. flex-grow**

**Iz MDN-a:**

> "The `flex-grow` property specifies how much a flex item will grow relative to the rest of the flex items when there is **positive free space**."

**Srpski prevod:**

`flex-grow` property specifikuje koliko će flex item rasti **relativno** u odnosu na ostale flex items kada ima **pozitivan slobodan prostor**.

```css
.item {
  flex-grow: 0; /* Default: ne raste */
  flex-grow: 1; /* Raste da popuni prostor */
}
```

**Kako radi:**

- Zbir svih `flex-grow` vrednosti = ukupni delovi
- Svaki item dobija proporcionalan deo slobodnog prostora

**Primer:**

```css
.item-1 {
  flex-grow: 2;
} /* 2/4 prostora */
.item-2 {
  flex-grow: 1;
} /* 1/4 prostora */
.item-3 {
  flex-grow: 1;
} /* 1/4 prostora */
/* Ukupno: 2 + 1 + 1 = 4 */
```

---

### **2. flex-shrink**

**Iz MDN-a:**

> "The `flex-shrink` property specifies how much a flex item will shrink relative to the rest of the flex items when there is **negative free space**."

**Srpski prevod:**

`flex-shrink` property specifikuje koliko će flex item se skupiti **relativno** u odnosu na ostale flex items kada ima **negativan slobodan prostor** (nema dovoljno prostora).

```css
.item {
  flex-shrink: 1; /* Default: skuplja se */
  flex-shrink: 0; /* Ne skuplja se (može overflow) */
}
```

**Primer:**

```css
.logo {
  flex-shrink: 0; /* Logo se NIKADA ne skuplja */
}

.content {
  flex-shrink: 1; /* Content se skuplja ako treba */
}
```

---

### **3. flex-basis**

**Iz MDN-a:**

> "The `flex-basis` property specifies the initial size of the flex item before any remaining space is distributed."

**Srpski prevod:**

`flex-basis` property specifikuje **početnu veličinu** flex item-a **pre nego što** se preostali prostor distribuira.

```css
.item {
  flex-basis: auto; /* Default: koristi width/height */
  flex-basis: 200px; /* Početna veličina 200px */
  flex-basis: 50%; /* 50% od container-a */
  flex-basis: 0; /* Ignoriši sadržaj */
}
```

**Razlika `width` vs `flex-basis`:**

- **`width`** — Fiksna širina (ne menja se sa flex-grow/shrink)
- **`flex-basis`** — Početna širina (može da raste/skuplja sa flex-grow/shrink)

**Iz MDN-a:**

> "The `flex-basis` property specifies the size of the content box, unless otherwise specified using `box-sizing`."

**Srpski prevod:**

`flex-basis` property specifikuje veličinu content box-a, osim ako je drugačije specificirano pomoću `box-sizing`.

---

### **4. flex (Shorthand)**

**Iz MDN-a:**

> "The `flex` property is a shorthand for setting `flex-grow`, `flex-shrink`, and `flex-basis`."

**Srpski prevod:**

`flex` property je skraćenica za postavljanje `flex-grow`, `flex-shrink`, i `flex-basis`.

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
  /* Ne raste, ne skuplja se */
}

/* flex: initial (DEFAULT) */
.item {
  flex: initial;
  /* = flex: 0 1 auto */
  /* Ne raste, skuplja se */
}
```

**Iz MDN-a:**

> "It is recommended that you use the shorthand `flex` rather than the individual properties."

**Srpski prevod:**

Preporučuje se da koristiš shorthand `flex` umesto individualnih properties.

---

### **5. align-self**

**Iz MDN-a:**

> "The `align-self` property allows the default alignment (set by `align-items`) to be overridden for individual flex items."

**Srpski prevod:**

`align-self` property dozvoljava da se default poravnanje (postavljeno sa `align-items`) prepiše za pojedinačne flex items.

```css
.container {
  display: flex;
  align-items: center; /* Svi items centrirani */
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

**Iz MDN-a:**

> "The `order` property controls the order in which flex items appear in the flex container."

**Srpski prevod:**

`order` property kontroliše redosled u kome se flex items pojavljuju u flex container-u.

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

**Važno:**

- Default order: `0`
- Može biti negativan (`order: -1`)
- Ne menja HTML (samo vizuelni redosled)
- **Oprez:** Može zbuniti screen reader-e (pristupačnost)

---

## 🎯 AXES (OSE)

### **Main Axis (Glavna Osa)**

**Iz MDN-a:**

> "The main axis is defined by the `flex-direction` property."

**Kontrole:**

- **Smer:** `flex-direction` (row, column, etc.)
- **Poravnanje:** `justify-content` (flex-start, center, space-between, etc.)

---

### **Cross Axis (Poprečna Osa)**

**Iz MDN-a:**

> "The cross axis runs perpendicular to the main axis."

**Kontrole:**

- **Poravnanje pojedinačnih items:** `align-items` (stretch, center, flex-start, etc.)
- **Poravnanje linija (sa flex-wrap):** `align-content`

---

## 📏 WRAPPING

**Iz MDN-a:**

> "Flex items can be made to wrap onto multiple lines using the `flex-wrap` property."

**Srpski prevod:**

Flex items mogu biti napravljeni da se omotaju na više linija pomoću `flex-wrap` property-ja.

---

### **Primer: Responsive Card Grid**

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* Min width 300px, raste da popuni */
}
```

**Kako radi:**

- Desktop (1200px+): 3-4 kartice u redu
- Tablet (768px): 2 kartice u redu
- Mobile (320px): 1 kartica u redu

**Sve automatski!**

---

## 🎯 ALIGNMENT

**Iz MDN-a:**

> "One of the key features of flexbox is the ability to align and justify items on the main and cross axis."

**Srpski prevod:**

Jedna od ključnih karakteristika Flexbox-a je mogućnost da se poravnaju items na glavnoj i poprečnoj osi.

---

### **Horizontalno Poravnanje (Main Axis)**

```css
.container {
  display: flex;
  justify-content: center; /* Horizontalno centar (ako row) */
}
```

---

### **Vertikalno Poravnanje (Cross Axis)**

```css
.container {
  display: flex;
  align-items: center; /* Vertikalno centar (ako row) */
}
```

---

### **Savršen Centar**

```css
.container {
  display: flex;
  justify-content: center; /* Horizontalno */
  align-items: center; /* Vertikalno */
  min-height: 100vh; /* Puna visina ekrana */
}
```

**Rezultat:**

- Item je **savršeno centriran** horizontalno i vertikalno
- Radi na bilo kojoj veličini ekrana

---

## 📏 SIZING

**Iz MDN-a:**

> "Flex items can grow and shrink according to the available space."

**Srpski prevod:**

Flex items mogu rasti i skupljati se prema dostupnom prostoru.

---

### **Primer: Sidebar + Main Content**

```css
.layout {
  display: flex;
}

.sidebar {
  flex: 0 0 250px; /* Ne raste, ne skuplja se, fiksna širina */
}

.main-content {
  flex: 1; /* Zauzima ostatak prostora */
}
```

**Rezultat:**

- Sidebar je uvek 250px
- Main content zauzima preostali prostor

---

## 🌟 USE CASES

**Iz MDN-a:**

> "Flexbox is ideal for certain types of layout patterns."

**Srpski prevod:**

Flexbox je idealan za određene tipove layout pattern-a.

---

### **1. Navigacija**

```css
.nav-list {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
```

---

### **2. Card Grid**

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px;
}
```

---

### **3. Centering**

```css
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

---

### **4. Header (Logo + Nav + Button)**

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

### **5. Footer Columns**

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

## 🌍 BROWSER COMPATIBILITY

**Iz MDN-a:**

| Browser     | Version | Release  | Support           |
| ----------- | ------- | -------- | ----------------- |
| **Chrome**  | 29+     | Mar 2013 | ✅                |
| **Firefox** | 28+     | Mar 2014 | ✅                |
| **Safari**  | 9+      | Sep 2015 | ✅                |
| **Edge**    | 12+     | Jul 2015 | ✅                |
| **IE 11**   | 11      | Oct 2013 | ⚠️ Partial (bugs) |
| **IE 10**   | 10      | Sep 2012 | ⚠️ Prefixes       |

**Ključne informacije:**

- **99%+ global support** (2025)
- IE 11 ima **bugove** (oprez!)
- IE 10 zahteva **vendor prefixes**

---

### **Vendor Prefixes (Za Stare Browsere)**

```css
.container {
  display: -webkit-box; /* Safari 6-, iOS 6- */
  display: -ms-flexbox; /* IE 10 */
  display: flex; /* Modern */
}

.item {
  -webkit-box-flex: 1; /* Safari 6-, iOS 6- */
  -ms-flex: 1; /* IE 10 */
  flex: 1; /* Modern */
}
```

**Napomena:**

- Autoprefixer automatski dodaje prefixe
- Ne treba ručno ako koristiš build tool

---

## ❓ FAQ (FREQUENTLY ASKED QUESTIONS)

### **1. Kada koristiti Flexbox a kada CSS Grid?**

**Iz MDN-a:**

> "Flexbox is for one-dimensional layout (rows or columns). Grid is for two-dimensional layout (rows and columns)."

**Srpski prevod:**

Flexbox je za **jednodimenzionalni** layout (redovi ili kolone). Grid je za **dvodimenzionalni** layout (redovi i kolone).

**Pravilo palca:**

- **Flexbox:** Navigacija, card grid, centering, header/footer
- **Grid:** Page layout, complex layouts, magazine-style

**Ali:**

- Možeš koristiti **oba** zajedno!
- Flexbox može biti nested unutar Grid-a i obrnuto

---

### **2. Kako centrirati element sa Flexbox-om?**

**Odgovor:**

```css
.container {
  display: flex;
  justify-content: center; /* Horizontalno */
  align-items: center; /* Vertikalno */
}
```

**Najlakši način za centriranje u CSS! 🎉**

---

### **3. Zašto items overflow umesto da se wrap-uju?**

**Odgovor:**

Zaboravio si `flex-wrap: wrap`.

```css
/* LOŠE */
.container {
  display: flex;
  /* Items će overflow! */
}

/* DOBRO */
.container {
  display: flex;
  flex-wrap: wrap; /* Items će se wrap-ovati */
}
```

---

### **4. Kako napraviti jednaku visinu kolona?**

**Odgovor:**

Flexbox automatski pravi jednaku visinu!

```css
.container {
  display: flex;
  align-items: stretch; /* Default */
}
```

**Items će automatski biti iste visine kao najviši item.**

---

### **5. Kako da stavim jedan item na desnu stranu?**

**Odgovor:**

Koristi `margin-left: auto`.

```css
.container {
  display: flex;
}

.item-right {
  margin-left: auto; /* Gura item na desno */
}
```

**Primer:**

```html
<div class="nav">
  <div>Logo</div>
  <div>Links</div>
  <div class="item-right">Button</div>
</div>
```

**Rezultat:**

```
┌─────────────────────────────────┐
│ Logo   Links          Button    │
└─────────────────────────────────┘
```

---

### **6. Da li mogu koristiti `width` na flex items?**

**Odgovor:**

Možeš, ali **`flex-basis` je bolje**.

**Iz MDN-a:**

> "If `flex-basis` is set, it takes precedence over `width` (or `height` for `flex-direction: column`)."

**Srpski prevod:**

Ako je `flex-basis` postavljen, on ima prednost nad `width` (ili `height` za `flex-direction: column`).

```css
/* Umesto: */
.item {
  width: 300px;
}

/* Koristi: */
.item {
  flex-basis: 300px;
}
```

---

## 📚 DODATNI MDN RESURSI

1. **[Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)**

   - Osnovi Flexbox-a

2. **[Aligning items in a flex container](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)**

   - Detaljno o justify-content, align-items, etc.

3. **[Controlling ratios of flex items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)**

   - Detaljno o flex-grow, flex-shrink, flex-basis

4. **[Ordering flex items](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)**

   - Detaljno o order property

5. **[Flexbox use cases](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)**
   - Praktični primeri

---

## ✅ CHECKLIST

**Pre nego što nastaviš:**

- [ ] Razumem `display: flex`
- [ ] Znam razliku flex container vs flex items
- [ ] Razumem main axis vs cross axis
- [ ] Mogu da koristim `flex-direction`
- [ ] Mogu da koristim `justify-content` (main axis)
- [ ] Mogu da koristim `align-items` (cross axis)
- [ ] Razumem `flex-wrap` za responsive
- [ ] Znam kako rade `flex-grow`, `flex-shrink`, `flex-basis`
- [ ] Mogu da koristim `flex` shorthand
- [ ] Razumem kada koristiti Flexbox vs Grid

**Ako je sve ✅ → Završio si MDN Flexbox! 🎉**

---

**Ovaj sažetak sadrži SVE ključne informacije iz MDN dokumentacije! 💪**
