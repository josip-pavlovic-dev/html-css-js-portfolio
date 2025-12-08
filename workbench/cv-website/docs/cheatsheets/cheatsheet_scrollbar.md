---
type: cheatsheet
topic: CSS Scrollbar Pseudo-Elements - Complete Guide
date: 2025-12-07
linked_to: cv-website
language: bilingual
status: active
difficulty: intermediate
audience: myself
recommended_by: github-copilot
---

# 📘 Cheatsheet: CSS Scrollbar Pseudo-Elements

## ✅ Key Concepts

- **Pseudo-Elements** | Virtuelni elementi koji ciljaju delove UI-ja
- **Scrollbar Anatomy** | Delovi scrollbar-a (track, thumb, buttons)
- **WebKit-only** | `-webkit-scrollbar` radi SAMO u Chrome/Safari/Edge
- **Firefox Alternative** | `scrollbar-width` i `scrollbar-color` (standardizovano)
- **Cross-Browser Strategy** | Kombinacija WebKit + Firefox za potpunu podrsku

---

## 📌 SCROLLBAR ANATOMIJA

### **Vizuelni Prikaz**

```
┌─────────────────────────────┐
│   Content Area              │ ← Glavni sadržaj
│                             │
│   ↓ Scroll ovde             │
│                             │
└─────────────────────────────┘
                              │  ← Scrollbar (vertikalni)
         ┌────────────────────┤
         │  ▲  button-start   │ ← Gore strelica
         ├────────────────────┤
         │░░░░░░░░░░░░░░░░░░░░│ ← track-piece (prazan deo)
         ├────────────────────┤
         │████████████████████│ ← thumb (klizač)
         ├────────────────────┤
         │░░░░░░░░░░░░░░░░░░░░│ ← track-piece
         ├────────────────────┤
         │  ▼  button-end     │ ← Dole strelica
         └────────────────────┘
```

### **Delovi Scrollbar-a**

| Deo             | Šta Je                                                  | Selektor                          |
| --------------- | ------------------------------------------------------- | --------------------------------- |
| **track**       | Cela pozadinska traka scrollbar-a                       | `::-webkit-scrollbar-track`       |
| **thumb**       | Klizač koji se pomera (deo koji prevlačiš)              | `::-webkit-scrollbar-thumb`       |
| **button**      | Strelice gore/dole (start/end)                          | `::-webkit-scrollbar-button`      |
| **track-piece** | Prazan deo track-a (između thumb-a i button-a)          | `::-webkit-scrollbar-track-piece` |
| **corner**      | Ugao gde se vertikalni i horizontalni scrollbar susreću | `::-webkit-scrollbar-corner`      |

---

## 🎨 WEBKIT SCROLLBAR PSEUDO-ELEMENTS

### **1. Osnovna Scrollbar Širina/Visina**

```css
/* Cela scrollbar (bira širinu za vertikalni, visinu za horizontalni) */
.element::-webkit-scrollbar {
  width: 12px; /* Za vertikalni scrollbar */
  height: 12px; /* Za horizontalni scrollbar */
}

/* Primer: Tanki scrollbar */
.site-nav-list::-webkit-scrollbar {
  width: 8px; /* Vertical */
  height: 6px; /* Horizontal */
}
```

**Šta se dešava:**

- `width` kontroliše širinu **vertikalnog** scrollbar-a
- `height` kontroliše visinu **horizontalnog** scrollbar-a
- Default je obično ~15px (zavisi od OS-a)

---

### **2. Track (Pozadina Scrollbar-a)**

```css
/* Track - pozadina scrollbar trake */
.element::-webkit-scrollbar-track {
  background: #f0f0f0; /* Svetlo siva pozadina */
  border-radius: 10px; /* Zaobljeni uglovi */
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1); /* Unutrašnja senka */
}

/* Primer: Transparentna track */
.site-nav-list::-webkit-scrollbar-track {
  background: transparent; /* Nevidljiva pozadina */
}

/* Primer: Track sa border-om */
.element::-webkit-scrollbar-track {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: var(--radius-md);
}
```

---

### **3. Thumb (Klizač)**

```css
/* Thumb - deo koji se pomera */
.element::-webkit-scrollbar-thumb {
  background: #888; /* Siva boja */
  border-radius: 10px; /* Zaobljeni uglovi */
  border: 2px solid transparent; /* Border za padding efekat */
  background-clip: padding-box; /* Border ne utiče na boju */
}

/* Hover stanje */
.element::-webkit-scrollbar-thumb:hover {
  background: #555; /* Tamnija boja na hover */
  cursor: pointer;
}

/* Active stanje (dok prevlačiš) */
.element::-webkit-scrollbar-thumb:active {
  background: #333; /* Još tamnija na klik */
}

/* Primer iz tvog projekta */
.site-nav-list::-webkit-scrollbar-thumb {
  background: var(--color-border); /* Koristi design token */
  border-radius: var(--radius-full); /* Potpuno zaobljen (pill shape) */
}

.site-nav-list::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary); /* Primary boja na hover */
}
```

---

### **4. Button (Strelice)**

```css
/* Button - gore/dole strelice (default su vidljive) */
.element::-webkit-scrollbar-button {
  display: none; /* Sakrij strelice (moderni pristup) */
}

/* Ili stilizuj ih */
.element::-webkit-scrollbar-button {
  background: #ddd;
  width: 12px;
  height: 12px;
}

/* Stilizuj samo START button (gore strelica) */
.element::-webkit-scrollbar-button:start {
  background: #ccc;
}

/* Stilizuj samo END button (dole strelica) */
.element::-webkit-scrollbar-button:end {
  background: #bbb;
}
```

---

### **5. Corner (Ugao gde se scrollbars susreću)**

```css
/* Corner - ugao za dual scrollbars (vertikalni + horizontalni) */
.element::-webkit-scrollbar-corner {
  background: transparent; /* Nevidljiv ugao */
}

/* Ili sa bojom */
.element::-webkit-scrollbar-corner {
  background: #f0f0f0;
  border-radius: 4px;
}
```

---

## 🦊 FIREFOX ALTERNATIVA (Standardizovano)

### **scrollbar-width**

```css
/* Firefox scrollbar širina */
.element {
  scrollbar-width: auto; /* Default (široki) */
  scrollbar-width: thin; /* Tanki scrollbar */
  scrollbar-width: none; /* Sakriven scrollbar */
}

/* Primer */
.site-nav-list {
  scrollbar-width: thin; /* Tanki scrollbar u Firefox-u */
}
```

### **scrollbar-color**

```css
/* Firefox scrollbar boje (thumb track) */
.element {
  scrollbar-color: #888 #f0f0f0;
  /*               ^^^^^ ^^^^^^^
                   thumb  track  */
}

/* Primer sa design tokens */
.site-nav-list {
  scrollbar-color: var(--color-border) transparent;
  /*               ^^^^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^
                   thumb boja            track boja */
}

/* Auto (default sistem boje) */
.element {
  scrollbar-color: auto;
}
```

---

## 🌐 CROSS-BROWSER REŠENJE (Best Practice)

### **Kompletna Implementacija**

```css
/* Za SVE browser-e - kombinuj WebKit + Firefox */
.site-nav-list {
  /* 1. Firefox - standardizovan pristup */
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) transparent;

  /* 2. IE/Edge (stari) - sakrij scrollbar */
  -ms-overflow-style: none;

  /* 3. Overflow da omogući scrollovanje */
  overflow-x: auto;
  overflow-y: hidden; /* Ako ne želiš vertikalni scroll */
}

/* 4. WebKit (Chrome, Safari, Edge Chromium) */
.site-nav-list::-webkit-scrollbar {
  width: 8px; /* Vertical */
  height: 6px; /* Horizontal */
}

.site-nav-list::-webkit-scrollbar-track {
  background: transparent;
  border-radius: var(--radius-full);
}

.site-nav-list::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: var(--radius-full);
  border: 2px solid transparent;
  background-clip: padding-box;
}

.site-nav-list::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}

/* 5. Sakrij u WebKit (ako želiš potpuno nevidljiv) */
.site-nav-list::-webkit-scrollbar {
  display: none; /* ili width: 0; */
}
```

---

## 💡 ČESTE UPOTREBE (Use Cases)

### **Use Case 1: Minimalistički Scrollbar (Tvoj Projekat)**

```css
/* Tanki, diskretni scrollbar koji se vidi samo na hover */
.site-nav-list {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent; /* Nevidljiv default */
  overflow-x: auto;
}

.site-nav-list:hover {
  scrollbar-color: var(--color-border) transparent; /* Vidljiv na hover */
}

.site-nav-list::-webkit-scrollbar {
  height: 4px;
}

.site-nav-list::-webkit-scrollbar-track {
  background: transparent;
}

.site-nav-list::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: var(--radius-full);
  transition: background 0.3s ease;
}

.site-nav-list:hover::-webkit-scrollbar-thumb {
  background: var(--color-border);
}
```

---

### **Use Case 2: Dark Theme Scrollbar**

```css
/* Scrollbar za dark mode */
[data-theme="dark"] .element {
  scrollbar-color: #555 #222; /* Thumb + Track za dark */
}

[data-theme="dark"] .element::-webkit-scrollbar-track {
  background: #222;
}

[data-theme="dark"] .element::-webkit-scrollbar-thumb {
  background: #555;
}

[data-theme="dark"] .element::-webkit-scrollbar-thumb:hover {
  background: #777;
}
```

---

### **Use Case 3: Sakriven Scrollbar (Ali Zadržan Scroll)**

```css
/* Sakriva scrollbar ALI scrollovanje RADI */
.element {
  /* Firefox */
  scrollbar-width: none;

  /* IE/Edge */
  -ms-overflow-style: none;

  /* WebKit */
  overflow: auto; /* Omogući scrollovanje */
}

.element::-webkit-scrollbar {
  display: none; /* Sakrij scrollbar */
  /* ili width: 0; height: 0; */
}
```

**Korisno za:**

- Touch devices (swipe za scroll, ne treba scrollbar)
- Carousels / sliders
- Custom scroll indicators

---

### **Use Case 4: Stylizovan Scrollbar (Pinterest Style)**

```css
/* Dekorativni, vidljiv scrollbar */
.content {
  scrollbar-width: auto; /* Normalna širina u Firefox */
  scrollbar-color: #6366f1 #e5e7eb;
}

.content::-webkit-scrollbar {
  width: 12px;
}

.content::-webkit-scrollbar-track {
  background: #e5e7eb;
  border-radius: 10px;
  margin: 4px 0; /* Padding od ivica */
}

.content::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #6366f1, #8b5cf6);
  border-radius: 10px;
  border: 2px solid #e5e7eb; /* "Floating" efekat */
}

.content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #4f46e5, #7c3aed);
}

.content::-webkit-scrollbar-thumb:active {
  background: #4338ca;
}
```

---

## 🚨 ČESTE GREŠKE

### **❌ Greška 1: Zaboravljeno `overflow`**

```css
/* ❌ NE RADI - nema overflow-a */
.element::-webkit-scrollbar {
  width: 8px;
}

/* ✅ RADI - dodaj overflow */
.element {
  overflow: auto; /* ili scroll */
}

.element::-webkit-scrollbar {
  width: 8px;
}
```

---

### **❌ Greška 2: Samo WebKit (Ignoriše Firefox)**

```css
/* ❌ Radi SAMO u Chrome/Safari */
.element::-webkit-scrollbar-thumb {
  background: #888;
}

/* ✅ Dodaj Firefox support */
.element {
  scrollbar-color: #888 transparent; /* Firefox */
}

.element::-webkit-scrollbar-thumb {
  background: #888; /* Chrome/Safari */
}
```

---

### **❌ Greška 3: `display: none` na Parent-u**

```css
/* ❌ Scrollbar NE RADI ako je parent hidden */
.parent {
  display: none;
}

.child::-webkit-scrollbar {
  width: 8px; /* Neće raditi */
}

/* ✅ Koristi visibility ili opacity */
.parent {
  visibility: hidden; /* ili opacity: 0; */
}
```

---

## 📊 BROWSER SUPPORT

| Feature               | Chrome | Firefox | Safari | Edge | IE  |
| --------------------- | ------ | ------- | ------ | ---- | --- |
| `::-webkit-scrollbar` | ✅     | ❌      | ✅     | ✅   | ❌  |
| `scrollbar-width`     | ❌     | ✅      | ❌     | ❌   | ❌  |
| `scrollbar-color`     | ❌     | ✅      | ❌     | ❌   | ❌  |
| `-ms-overflow-style`  | ❌     | ❌      | ❌     | ✅   | ✅  |

**Zaključak:** Moraš kombinovati WebKit + Firefox za 99% pokrivenost.

---

## 📚 DOKUMENTACIJA LINKOVI

### **🔴 OBAVEZNO Pročitaj**

1. **[MDN: scrollbar-width](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width)**

   - Standardizovano svojstvo (Firefox)
   - Čitaj: 10 min

2. **[MDN: scrollbar-color](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color)**

   - Boje za Firefox scrollbar
   - Čitaj: 10 min

3. **[CSS Tricks: Custom Scrollbars](https://css-tricks.com/the-current-state-of-styling-scrollbars-in-css/)**

   - Complete guide sa primerima
   - Čitaj: 15 min

4. **[WebKit Scrollbar Pseudo-Elements](https://webkit.org/blog/363/styling-scrollbars/)**

   - Official WebKit dokumentacija
   - Čitaj: 10 min

5. **[Can I Use: scrollbar-width](https://caniuse.com/mdn-css_properties_scrollbar-width)**
   - Browser compatibility provera
   - Čitaj: 5 min

---

## 🎯 PRAKSA - ZADATAK

### **Zadatak 1: Analiza (10 min)**

- [ ] Pronađi u day01.css sve `::-webkit-scrollbar` selektore
- [ ] Objasni šta svaki radi (track, thumb)
- [ ] Proveri da li ima Firefox fallback (`scrollbar-width`)

### **Zadatak 2: Modifikacija (15 min)**

- [ ] Promeni boju thumb-a u `var(--color-primary)`
- [ ] Dodaj hover efekat (tamnija boja)
- [ ] Testiraj u Chrome DevTools

### **Zadatak 3: Cross-Browser Test (10 min)**

- [ ] Otvori sajt u Chrome → vidi scrollbar
- [ ] Otvori u Firefox → vidi scrollbar (drugačiji stil)
- [ ] Uporedi razlike

---

## ✅ Šta Ćeš Znati Posle

✅ Anatomija scrollbar-a (track, thumb, buttons)
✅ WebKit pseudo-elementi (`::-webkit-scrollbar-*`)
✅ Firefox alternative (`scrollbar-width`, `scrollbar-color`)
✅ Cross-browser strategije
✅ Kada sakriti scrollbar, a zadržati scroll

**Ovo je intermediate tema - junior developeri često ne znaju ovo!** 🎓

---

**Čitanje vreme: 20-25 minuta**
**Kompleksnost: Intermediate (4/5)**
**Važnost: ⭐⭐⭐⭐ (4/5)**

---
