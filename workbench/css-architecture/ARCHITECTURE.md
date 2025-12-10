# 🏗️ CSS Architecture — Technical Deep Dive

> **Verzija:** 1.0.0 | **Status:** Production Ready | **Kreirano:** 2025-12-09

## 📖 Uvod

Ovaj dokument objašnjava **kako funkcioniše** CSS architecture sistem — od teorije (CSS Cascade & Specificity) do prakse (kako koristiti varijable u svojoj kodu).

Kreirano za junior developere koji žele da razumeju **zašto** su stvari organizovane na ovaj način, a ne samo kako.

---

## 1️⃣ Fundamentals: CSS Cascade & Specificity

### 1.1 Šta je CSS Cascade?

CSS = **Cascading** Style Sheets. Slova "C" znače da stilovi "pada" od vrha ka dnu, gde **kasnije pravilo može da prepise ranije**.

**Primer:**

```css
/* Prvo pravilo */
body {
  color: blue;
}

/* Kasnije pravilo prepravlja prethodno */
body {
  color: red; /* ← Ovo se koristi */
}
```

Browser čita odozgo nadole, i **poslednje pravilo pobedi**.

### 1.2 Specificity — Važnost pravila

Ali šta se desi ako pravila **kompajdiraju drugačije**? Tada браја **specificity** (važnost).

**Specificity je "težina" CSS selektora.**

```
ID selektori (#id)           = 100 poena
Class selektori (.class)      = 10 poena
Element selektori (p, div)    = 1 poen
Universal selektor (*)        = 0 poena
```

**Primer:**

```css
/* 1 poen */
p {
  color: blue;
}

/* 10 poena — POBEDI */
.text-red {
  color: red;
}

/* 100 poena — SIGURNO POBEDI */
#main-paragraph {
  color: green;
}
```

```html
<p id="main-paragraph" class="text-red">
  Tekst će biti GREEN jer #id ima 100 poena
</p>
```

### 1.3 Cascade Order (Redosled prioriteta)

```
1. !important (hindrance, izbegavati)
2. Inline styles (style="...")
3. ID selektori (#id)
4. Class selektori (.class) + pseudo-class (:hover)
5. Element selektori (p, div)
6. Browser defaults
```

**Pravilo:** Koristi **najnižu specificity** koja radi — lakše je da upravljaš kodom.

---

## 2️⃣ Custom Properties (CSS Varijable)

### 2.1 Šta je Custom Property?

CSS varijabla je **placeholder za vrednost** koju možeš da koristiš više puta.

```css
:root {
  --primary-color: #3b82f6;
  --spacing-unit: 1rem;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing-unit);
}

.link {
  color: var(--primary-color);
  margin-bottom: var(--spacing-unit);
}
```

**Prednosti:**

- ✅ Centralizovana boja — meniš na jednom mestu
- ✅ Jasno je šta znači `--primary-color` (bolje od `#3b82f6` negde u kodu)
- ✅ Dark mode: meniš samo varijable, CSS pravila ostaju ista

### 2.2 Scope od Custom Properties

Varijable se **nasleđuju** kao normalna CSS svojstva.

```css
/* Dostupne SVUDA */
:root {
  --global-color: red;
}

/* Dostupne samo u .container i njegove dece */
.container {
  --local-color: blue;
}

.container p {
  color: var(--local-color); /* ✅ Radi */
}

p {
  color: var(--local-color); /* ❌ Ne radi (nije dete .container) */
}
```

U ovoj architecture sistemu koristimo **`:root` scope** za sve globalne varijable, što znači da su dostupne svuda.

### 2.3 Fallback vrednosti

Ako varijabla ne postoji, možeš dati fallback:

```css
.button {
  background: var(--primary-color, blue);
  /* Ako --primary-color ne postoji, koristi blue */
}
```

---

## 3️⃣ Color System Architecture

### 3.1 Light Mode + Dark Mode

Svaka boja je **definisana dvaput** — za light i dark mode.

**`colors.css`:**

```css
:root {
  /* Light Mode */
  --color-primary: #3b82f6;
  --color-text: #1f2937;
  --color-bg: #ffffff;
  --color-border: #e5e7eb;
}

html[data-theme="dark"] {
  /* Dark Mode */
  --color-primary: #38bdf8;
  --color-text: #e5e7eb;
  --color-bg: #020617;
  --color-border: #1f2937;
}
```

**Kako funkcioniše:**

1. Browser učita `:root` (light mode) varijable
2. Ako je element **umotano u `html[data-theme="dark"]`**, CSS koristi dark mode varijable
3. Sve pravila ostaju **ista** — samo se varijable menjaju

**Primer HTML strukture:**

```html
<html data-theme="light">
  <!-- Koristi light mode boje -->
  <body>
    <p>Ovo je tekst sa varijablom --color-text (sivo)</p>
  </body>
</html>
```

```html
<html data-theme="dark">
  <!-- Koristi dark mode boje -->
  <body>
    <p>Ovo je tekst sa varijablom --color-text (svetlo)</p>
  </body>
</html>
```

### 3.2 Semantic Color Names

Imena boja **nisu po heksadecimalnoj vrednosti**, već po **svrsi**:

```css
--color-primary      /* Glavna branda boja (obično plava) */
--color-success      /* Uspešne akcije (zelena) */
--color-danger       /* Opasnosti/greške (crvena) */
--color-warning      /* Upozorenja (narandžasta) */
--color-text         /* Glavni tekst */
--color-muted        /* Sekundarni tekst */
--color-border       /* Linije/okviri */
--color-bg           /* Pozadina */
--color-surface      /* Kartice, paneli (malo svetlija od bg) */
```

**Zašto?** Ako trebalo da promeniš primarnu boju sa plave na crvenu, meniš samo:

```css
--color-primary: #ef4444; /* umesto #3b82f6 */
```

I SVEĆE se automatski obaroji. 🎨

---

## 4️⃣ Typography Architecture

### 4.1 Font Families

```css
--font-sans: "Inter", system-ui, -apple-system, sans-serif;
--font-mono: "JetBrains Mono", "Courier New", monospace;
```

**system-ui** znači: "ako nemam Inter font, koristi što ima korisnik na svom sistemu".

### 4.2 Font Sizes sa `clamp()`

Umesto da imaš 10 media queries za font-size, koristi `clamp()`:

```css
h1 {
  font-size: clamp(2rem, 3vw + 1rem, 2.6rem);
}
```

**Čita se kao:**

- **Minimum:** 2rem (nikad manje)
- **Ideal:** 3vw + 1rem (prilagođava se prema width ekrana)
- **Maximum:** 2.6rem (nikad veće)

**Rezultat:**

- 📱 Na 320px: ~2rem
- 💻 Na 768px: ~2.3rem (dinamički)
- 🖥️ Na 1440px: ~2.6rem

Bez jednog media query! ✨

### 4.3 Font Weights

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-bold: 700;
```

**Korišćenje:**

```css
body {
  font-weight: var(--font-weight-normal);
}

h1 {
  font-weight: var(--font-weight-bold);
}
```

### 4.4 Line Heights

```css
--line-height-tight: 1.2;
--line-height-normal: 1.6;
--line-height-loose: 1.8;
```

**Zašto varijable?** Ako praviš novi tema ili ažuriraš branding, meniš na jednom mestu.

---

## 5️⃣ Spacing Architecture (8px Scale)

### 5.1 Zašto 8px Spacing Scale?

**8px** je **bazni unit** — sve ostale vrednosti su višekratnici:

```css
--space-xs: 0.5rem; /* 8px */
--space-sm: 0.75rem; /* 12px */
--space-md: 1rem; /* 16px */
--space-lg: 1.5rem; /* 24px */
--space-xl: 2rem; /* 32px */
--space-2xl: 2.5rem; /* 40px */
--space-3xl: 3rem; /* 48px */
```

**Zašto 8px?**

- ✅ Matematički čist (8 × broj = lak za proračun)
- ✅ Vertikalno poravnanje sa tipičnom font-size veličinom (16px)
- ✅ Profesionalni standard (Figma, iOS, Material Design)

### 5.2 Padding vs Margin

```css
/* Interno razmak (između sadržaja i okvira) */
.card {
  padding: var(--space-lg);
}

/* Eksterni razmak (između kartice i ostatka stranice) */
.card {
  margin-bottom: var(--space-lg);
}
```

### 5.3 Gap u Flexbox/Grid

```css
.button-group {
  display: flex;
  gap: var(--space-md);
  /* Automatski razmak između dugmadi */
}
```

---

## 6️⃣ Layout Architecture

### 6.1 Container Sizes

```css
--max-width: 65rem; /* 1040px — idealna širina za čitanje */
--max-width-xl: 73.75rem; /* 1180px — malo šira */
```

**Primena:**

```css
main {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}
```

### 6.2 Z-Index Scale

```css
--z-sticky: 1000;
--z-dropdown: 1010;
--z-modal: 1040;
--z-tooltip: 1100;
```

**Pravilo:** Ne koristi nasumične brojeve (`z-index: 9999`). Imaj **jasnu hijerarhiju**.

```css
.header {
  z-index: var(--z-sticky);
}

.dropdown-menu {
  z-index: var(--z-dropdown);
}

.modal {
  z-index: var(--z-modal);
}
```

---

## 7️⃣ Animation Architecture

### 7.1 Duration (Trajanje)

```css
--duration-fast: 0.15s;
--duration-base: 0.3s;
--duration-slow: 0.5s;
```

**Pravilo:** Ne koristi `all` — budi specifičan:

```css
/* ❌ Loše — sve se animira */
button {
  transition: all 0.3s;
}

/* ✅ Dobro — samo boja i senca */
button {
  transition: background-color var(--duration-base), box-shadow var(--duration-base);
}
```

### 7.2 Easing Functions

```css
--ease-linear: linear;
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

**Primer:**

```css
.element {
  transition: transform var(--duration-base) var(--ease-in-out);
}

.element:hover {
  transform: translateY(-4px);
}
```

### 7.3 Shadows

```css
--shadow-sm: 0 4px 6px rgb(0 0 0 / 10%);
--shadow-base: 0 8px 16px rgb(0 0 0 / 12%);
--shadow-lg: 0 16px 32px rgb(0 0 0 / 16%);
```

**Korišćenje:**

```css
.card {
  box-shadow: var(--shadow-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}
```

---

## 8️⃣ Border Architecture

### 8.1 Border Radius

```css
--radius-sm: 0.25rem;
--radius-md: 0.75rem;
--radius-lg: 1rem;
--radius-full: 9999px;
```

**Primena:**

```css
.button {
  border-radius: var(--radius-md);
}

.avatar {
  border-radius: var(--radius-full);
}
```

### 8.2 Border Width

```css
--border-thin: 0.0625rem;
--border-normal: 0.125rem;
--border-thick: 0.25rem;
```

### 8.3 Border Style Shortcuts

```css
--border-thin-solid: var(--border-thin) solid var(--color-border);
```

**Korišćenje:**

```css
.input {
  border: var(--border-thin-solid);
}
```

---

## 9️⃣ Navigation-Specific Variables

### 9.1 Zašto odvojena datoteka?

Navigation ima svoje specifične varijable koje se mogu menjati nezavisno od ostatka sistema.

**`navigation.css`:**

```css
--nav-link-padding-x: 0.75rem;
--nav-link-padding-y: 0.5rem;
--nav-link-font-size: 0.85rem;
--nav-link-gap: 0.4rem;
--nav-link-height: 2.5rem;
```

### 9.2 Responsive Navigation Variables

```css
/* Mobile */
:root {
  --nav-link-padding-x: 0.5rem;
  --nav-link-gap: 0.3rem;
}

/* Tablet */
@media (width >= 768px) {
  :root {
    --nav-link-padding-x: 0.75rem;
    --nav-link-gap: 0.5rem;
  }
}

/* Desktop */
@media (width >= 1024px) {
  :root {
    --nav-link-padding-x: 1rem;
    --nav-link-gap: 0.75rem;
  }
}
```

Sada u HTML-u možeš da koristiš iste varijable na svim veličinama:

```css
.site-nav-link {
  padding: var(--nav-link-padding-y) var(--nav-link-padding-x);
  font-size: var(--nav-link-font-size);
  gap: var(--nav-link-gap);
}
```

Media queries menjaju **varijable**, a CSS **pravila ostaju ista**! ✨

---

## 🔟 Responsive Design Strategy

### 10.1 Mobile-First Approach

Krećeš sa **minimalnim** CSS-om za mobile, pa **dodaješ** za veće ekrane:

```css
/* Mobile (default) */
:root {
  --max-width: 90%;
  --font-size-base: 1rem;
}

/* Tablet */
@media (width >= 768px) {
  :root {
    --max-width: 95%;
  }
}

/* Desktop */
@media (width >= 1024px) {
  :root {
    --max-width: 1040px;
  }
}
```

**Zaštita:** Ako nema media query, korisnik na mobilnom dobija **sve**, a ne prazna strana.

### 10.2 Breakpoints

```css
/* Mobile: < 768px */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px+ */
```

Ovi breakpoints su izabrani jer odgovaraju tipičnim veličinama uređaja:

- 📱 Telefon: 320-480px
- 📱 Tablet: 768-1024px
- 💻 Desktop: 1440px+

### 10.3 `clamp()` za Fluid Design

Umesto media queries, koristi `clamp()`:

```css
h1 {
  font-size: clamp(1.5rem, 2vw + 1rem, 2.5rem);
  /* Raste fluidno sa screen-om */
}
```

---

## 1️⃣1️⃣ Dark Mode Implementation

### 11.1 Kako Funkcioniše

HTML element ima atribut:

```html
<!-- Light mode -->
<html data-theme="light">
  <!-- Dark mode -->
  <html data-theme="dark"></html>
</html>
```

CSS **čita** ovaj atribut:

```css
:root {
  /* Light mode varijable */
  --color-bg: #ffffff;
  --color-text: #1f2937;
}

html[data-theme="dark"] {
  /* Dark mode varijable */
  --color-bg: #020617;
  --color-text: #e5e7eb;
}
```

### 11.2 JavaScript Toggle

```javascript
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const newTheme = current === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);
}
```

### 11.3 Persist u Local Storage

```javascript
// Spremi izbor korisnika
localStorage.setItem("theme", "dark");

// Učitaj pri otvaranju stranice
const saved = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", saved);
```

---

## 1️⃣2️⃣ Best Practices & Patterns

### 12.1 Nikad Hardkod Vrednosti

```css
/* ❌ Loše */
.button {
  padding: 12px 24px;
  background: #3b82f6;
  border-radius: 8px;
}

/* ✅ Dobro */
.button {
  padding: var(--space-md) var(--space-lg);
  background: var(--color-primary);
  border-radius: var(--radius-md);
}
```

### 12.2 Komentari za Složene Varijable

```css
/* Ovaj smer primeni samo DARK modu
   jer je kontrast različit između light i dark */
html[data-theme="dark"] {
  --color-primary: #38bdf8;
}
```

### 12.3 Logičko Grupisanje

```css
/* ✅ Dobro — srodne varijable zajedno */
:root {
  /* Button styling */
  --btn-padding: var(--space-sm);
  --btn-radius: var(--radius-md);
  --btn-transition: var(--duration-base);

  /* Form inputs */
  --input-height: 2.5rem;
  --input-border: var(--border-thin-solid);
}
```

### 12.4 Inheritance Chain

```css
/* Osnovni tekst */
body {
  color: var(--color-text);
  font-size: var(--text-base);
}

/* Muted tekst (nasledjen je font-size, prosledi samo boju) */
.muted {
  color: var(--color-muted);
  /* font-size ostaje isti kao od body */
}
```

---

## 1️⃣3️⃣ Performance Considerations

### 13.1 CSS Variable Performance

Custom properties su **brze**. Nisu kao SASS varijable (koje se kompajliraju pre nego što CSS stignu u browser).

Custom properties su **dinamičke** — browser evaluira `var()` na **runtime-u**, što omogućava dark mode bez JavaScript-a + bez reload-ovanja.

### 13.2 Specificity Management

Custom properties **nisu** subjekta specificity pravila:

```css
.container {
  --color: red;
}

#main .container {
  /* Ovo neće "prebiti" specificity jer su varijable drugačije */
  --color: blue;
}
```

Varijable se **nasledjuju** po **cascade redosledu**, ne specificity.

### 13.3 File Size

Svih 7 varijabli datoteka (~500 linija) je < 10KB (minified + gzipped).

Učitavanje je **asinkhron** (async) jer su u `@import`.

---

## 1️⃣4️⃣ Troubleshooting

### Problem 1: Varijabla Ne Radi

**Simptomi:**

```css
.button {
  color: var(--undefined-color);
  /* Tekst je crn (browser default), umesto plava */
}
```

**Razlog:** Varijabla ne postoji u scope-u.

**Rešenje:**

1. Proverim da li je `colors.css` importovan
2. Proverim da je varijabla u `:root` bloku
3. Proverim tipografsku grešku u imenu

### Problem 2: Dark Mode Ne Radi

**Simptomi:**

```
Kliknem na moon ikonu, ali nije se boja promenila
```

**Razlog:**

- `html[data-theme="dark"]` blok nema definisanu varijablu
- Ili JavaScript nije postavio atribut

**Rešenje:**

```css
/* Proverim da su oba modusa definisana */
:root {
  --color-primary: #3b82f6;
}

html[data-theme="dark"] {
  --color-primary: #38bdf8; /* ← MORA biti */
}
```

### Problem 3: Specificity Error

**Simptomi:**

```
Lint error: "Expected selector X to come before selector Y"
```

**Razlog:** Selektori su u pogrešnom redosledu.

**Rešenje:** Bazni selektori pre pseudo-class:

```css
/* ❌ Loše */
a:hover {
  color: red;
}

a {
  color: blue;
}

/* ✅ Dobro */
a {
  color: blue;
}

a:hover {
  color: red;
}
```

---

## 1️⃣5️⃣ File Organization Checklist

Kada dodajaš nove varijable, proverim:

- [ ] Varijabla je u **odgovarajućoj datoteci** (`colors.css`, `spacing.css`, itd.)
- [ ] Varijabla je u **`:root`** bloku (light mode)
- [ ] Varijabla je u **`html[data-theme="dark"]`** bloku (dark mode)
- [ ] Ime sledi **convention** (`--category-name`)
- [ ] Dodao sam **komentar** ako nije očigledno šta znači
- [ ] Testiram u **oba moda** (light + dark)
- [ ] Testiram na **svim breakpoint-ima** (mobile, tablet, desktop)

---

## 1️⃣6️⃣ Example: Implementacija Novog Komponente

Recimo da trebam novi `.card` komponenta. Evo kako:

### Korak 1: Identifikuj potrebne varijable

```
- Boja pozadine? → --color-surface
- Padding? → --space-lg
- Border? → --border-thin-solid
- Shadow? → --shadow-base
- Border radius? → --radius-md
```

### Korak 2: Napiši CSS (koristeći varijable)

```css
.card {
  background: var(--color-surface);
  padding: var(--space-lg);
  border: var(--border-thin-solid);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-base);
  transition: var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}
```

### Korak 3: Testiram

```bash
npm run lint  # Nema specificity grešaka
```

Otvorim u browser-u na 320px, 768px, 1440px, pa toggle dark mode. ✅

---

## 1️⃣7️⃣ Learning Outcomes

Posle čitanja ovog dokumenta, trebalo bi da znaš:

- ✅ **Cascade & Specificity** — kako CSS odlučuje koja pravila se koriste
- ✅ **Custom Properties** — kako funkcioniše `var()` i scope
- ✅ **Light/Dark Mode** — kako se implementira sa `html[data-theme]`
- ✅ **8px Scale** — zašto je jedinstveni spacing standard
- ✅ **Semantic Colors** — zašto `--color-primary` umesto `--blue-300`
- ✅ **Responsive Design** — mobile-first + media queries + clamp()
- ✅ **Z-Index Scale** — organizovani, čitljivi z-index brojevi
- ✅ **Performance** — custom properties su brze i dinamičke
- ✅ **Dark Mode** — implementacija + fallback-ovi

---

## 1️⃣8️⃣ References & Further Reading

### Dokumentacija

- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [MDN: CSS Cascade & Inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [CSS Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Design Systems

- [Material Design System](https://material.io/design/introduction)
- [Tailwind CSS Configuration](https://tailwindcss.com/docs/theme)
- [GitHub Primer Design System](https://primer.style/)

### Practice

- Kreiraj novi komponenta koristeći samo varijable
- Testiraj dark mode na svim komponentama
- Refaktor starog CSS-a da koristi varijable umesto hardkod vrednosti

---

## 1️⃣9️⃣ FAQ

### P: Zašto `--color-primary` umesto `--brand-blue`?

**O:** Semantic imena su fleksibilnija. Ako se branding promeni sa plave na crvenu, `--color-primary` je i dalje `--color-primary`. Ako bi se zvao `--brand-blue`, trebalo bi da ga preimenovam svuda.

### P: Mogu li da promenim varijablu za jedan komponenta?

**O:** Da! Koristi scope:

```css
.dark-section {
  --color-bg: #1a1a1a;
  /* Samo elementi u .dark-section koriste novu vrednost */
}
```

### P: Šta ako korisnik nema podrške za Custom Properties?

**O:** Svi moderni browser-i ga podržavaju. Stari IE11 ne, ali to je 2025. — ne trebalo bi da ga podržavamo.

### P: Kako da testiram dark mode lokalno?

**O:** Dva načina:

1. **DevTools:** Desni klik → Inspect → Promeniti `html` atribut sa `light` na `dark`
2. **JavaScript konzola:**

```javascript
document.documentElement.setAttribute("data-theme", "dark");
```

---

## 🏁 Zaključak

CSS Architecture je **fundament** čitljive, održavive, scalable CSS kode.

Ključne ideje:

1. **Cascade & Specificity** — razumej pravila
2. **Custom Properties** — centralizuj vrednosti
3. **Semantic naming** — imena koja imaju smisla
4. **Light/Dark mode** — jedan CSS, dve teme
5. **8px scale** — matematički čist spacing
6. **Mobile-first responsive** — počni sa mobilom, dodaj za vece
7. **Performance** — CSS varijable su brze i dinamičke

Sad — koristi ove varijable u svojem kodu i nikad se ne vraćaj hardkod brojevima! 🚀

---

**Kreirano:** 2025-12-09 | **Verzija:** 1.0.0 | **Status:** Production Ready
