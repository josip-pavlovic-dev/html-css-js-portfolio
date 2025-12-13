---
type: cheatsheet
topic: MDN CSS Variables — Summarized in Serbian
date: 2025-12-13
author: AI Mentor
source: MDN Web Docs
language: sr (Serbian)
---

# 📚 MDN CSS VARIABLES — SAŽETAK NA SRPSKOM

**Kompletan pregled MDN dokumentacije o CSS Custom Properties (CSS Varijablama) prevedeno i objašnjeno na srpskom jeziku.**

---

## 📖 SADRŽAJ

1. [Uvod u CSS Custom Properties](#uvod-u-css-custom-properties)
2. [Using CSS Custom Properties](#using-css-custom-properties)
3. [var() Funkcija](#var-funkcija)
4. [:root Pseudo-Class](#root-pseudo-class)
5. [Inheritance & Cascade](#inheritance--cascade)
6. [Invalid Variables](#invalid-variables)
7. [JavaScript API](#javascript-api)
8. [Browser Compatibility](#browser-compatibility)
9. [Praktični Primeri](#praktični-primeri)
10. [FAQ](#faq)

---

## 🎯 UVOD U CSS CUSTOM PROPERTIES

### **Šta su CSS Custom Properties?**

**MDN definicija:**

> "CSS custom properties (also known as CSS variables) are entities defined by CSS authors that contain specific values to be reused throughout a document."

**Srpski prevod:**

CSS Custom Properties (poznate i kao CSS varijable) su entiteti koje definiše CSS autor i sadrže specifične vrednosti koje se ponovo koriste kroz ceo dokument.

---

### **Zašto su Važne?**

**Iz MDN-a:**

1. **Maintainability** (Održivost)

   - Lakše održavanje koda
   - Promeniš jednom, menja se svuda

2. **Readability** (Čitljivost)

   - `var(--color-primary)` je jasnije od `#3b82f6`
   - Semantički nazivi

3. **Dynamic Updates** (Dinamičke Promene)

   - Možeš ih menjati sa JavaScript-om
   - Runtime promene teme, responsive values

4. **Scoping** (Opseg)
   - Mogu biti globalne ili lokalne
   - Inheritance radi kao i obično

---

## 📖 USING CSS CUSTOM PROPERTIES

**MDN Članak:** [Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

### **1. Declaring Custom Properties (Definisanje)**

**Sintaksa:**

```css
element {
  --property-name: value;
}
```

**Ključne karakteristike:**

- Počinju sa `--` (dva crtica)
- **Case-sensitive** — `--Color` ≠ `--color`
- Mogu biti definisane u bilo kom CSS selector-u
- Podležu cascade, inheritance, specificity pravilima

**Primeri:**

```css
:root {
  --main-bg-color: brown;
  --main-text-color: white;
}

.alert {
  --alert-color: red;
}
```

---

### **2. Using Custom Properties (Korišćenje)**

**Sintaksa:**

```css
property: var(--custom-property-name);
```

**Primer:**

```css
:root {
  --main-bg-color: brown;
}

body {
  background-color: var(--main-bg-color);
}
```

**Kako radi:**

1. Browser traži `--main-bg-color` od elementa prema gore (cascade)
2. Pronađe definiciju u `:root`
3. Zameni `var(--main-bg-color)` sa `brown`

---

### **3. Fallback Values (Rezervne Vrednosti)**

**Sintaksa:**

```css
property: var(--custom-property, fallback);
```

**Primer:**

```css
.element {
  color: var(--my-color, black); /* Ako --my-color ne postoji, koristi black */
}
```

**Nested Fallback:**

```css
.element {
  color: var(--my-color, var(--theme-color, black));
}
```

**Kako radi:**

1. Prvo pokušava `--my-color`
2. Ako ne postoji, pokušava `--theme-color`
3. Ako ni to ne postoji, koristi `black`

---

### **4. Inheritance (Nasledjivanje)**

**Iz MDN-a:**

> "Custom properties are subject to the cascade and inherit their value from their parent."

**Srpski prevod:**

Custom properties podležu cascade-u i nasleđuju vrednost od svog parent-a.

**Primer:**

```css
:root {
  --main-color: blue;
}

body {
  --main-color: red; /* Override global */
}

p {
  color: var(--main-color); /* Nasleđuje od body → red */
}
```

---

### **5. Validity and Values (Validnost i Vrednosti)**

**Iz MDN-a:**

> "The custom property value is interpreted literally when it's substituted using the var() function."

**Srpski prevod:**

Vrednost custom property-ja se interpretira **doslovno** kada se zamenjuje pomoću `var()` funkcije.

**Važno:**

```css
:root {
  --padding: 10; /* BEZ jedinice */
}

.element {
  padding: var(--padding) px; /* ❌ NE radi — `10px` nije validno */
}
```

**Rešenje — Koristi `calc()`:**

```css
:root {
  --padding: 10;
}

.element {
  padding: calc(var(--padding) * 1px); /* ✅ Radi → 10px */
}
```

---

## 🔧 VAR() FUNKCIJA

**MDN Članak:** [var() function](https://developer.mozilla.org/en-US/docs/Web/CSS/var)

---

### **Sintaksa**

```css
var(--custom-property-name)
var(--custom-property-name, fallback)
```

---

### **Parametri**

1. **`--custom-property-name`** (Obavezno)

   - Ime custom property-ja koji želiš da koristiš
   - Mora početi sa `--`

2. **`fallback`** (Opciono)
   - Rezervna vrednost ako custom property ne postoji
   - Može biti druga `var()` funkcija

---

### **Primeri**

**Osnovno korišćenje:**

```css
:root {
  --primary-color: blue;
}

.button {
  background-color: var(--primary-color); /* blue */
}
```

---

**Sa fallback-om:**

```css
.button {
  background-color: var(
    --button-bg,
    blue
  ); /* blue ako --button-bg ne postoji */
}
```

---

**Nested var():**

```css
:root {
  --color-primary: blue;
  --button-bg: var(--color-primary); /* Varijabla koristi drugu varijablu */
}

.button {
  background-color: var(--button-bg); /* blue */
}
```

---

**Sa calc():**

```css
:root {
  --spacing-unit: 8px;
}

.element {
  padding: calc(var(--spacing-unit) * 2); /* 16px */
}
```

---

### **Invalid Cases (Nevalidni Slučajevi)**

**Iz MDN-a:**

> "If the custom property is invalid, var() returns the initial value or inherited value of the property."

**Srpski prevod:**

Ako je custom property nevalidan, `var()` vraća početnu (initial) ili nasledjenu (inherited) vrednost property-ja.

**Primer:**

```css
:root {
  --text-color: 16px; /* NEVAŽEĆA vrednost za color */
}

p {
  color: var(--text-color); /* Neće biti 16px, već default color (npr. black) */
}
```

---

## 🎯 :ROOT PSEUDO-CLASS

**MDN Članak:** [:root pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)

---

### **Šta je :root?**

**MDN definicija:**

> "The :root CSS pseudo-class matches the root element of a tree representing the document. In HTML, :root represents the `<html>` element and is identical to the selector `html`, except that its specificity is higher."

**Srpski prevod:**

`:root` CSS pseudo-class odgovara **root element-u** stabla koje predstavlja dokument. U HTML-u, `:root` predstavlja `<html>` element i identičan je selector-u `html`, osim što je njegov **specificity viši**.

---

### **Zašto Koristimo :root Za Varijable?**

1. **Najviši nivo u hijerarhiji**

   - Varijable definisane u `:root` su dostupne **svuda**

2. **Viši specificity od `html`**

   - `:root` ima specificity `(0, 1, 0)`
   - `html` ima specificity `(0, 0, 1)`

3. **Konvencija**
   - Standardna praksa u industriji
   - Jasno označava globalne varijable

---

### **Primeri**

**Definisanje globalnih varijabli:**

```css
:root {
  --main-color: blue;
  --accent-color: orange;
  --spacing: 1rem;
}

body {
  color: var(--main-color);
  padding: var(--spacing);
}
```

---

**:root vs html:**

```css
/* Oba selector-a targetiraju <html> element */

:root {
  --color: blue;
}

html {
  --color: red; /* Niži specificity — :root pobedjuje */
}

body {
  color: var(--color); /* blue */
}
```

---

## 🔄 INHERITANCE & CASCADE

**Iz MDN-a:**

> "Custom properties are subject to the cascade like other properties. They can be set at any level of the cascade and will inherit down."

**Srpski prevod:**

Custom properties podležu cascade-u kao i drugi properties. Mogu biti postavljeni na bilo kom nivou cascade-a i nasleđivaće se naniže.

---

### **Primer 1: Global → Element Override**

```css
:root {
  --text-color: black;
}

.dark-section {
  --text-color: white; /* Override za ovu sekciju */
}

p {
  color: var(--text-color);
}
```

**Rezultat:**

- `<p>` van `.dark-section` → black
- `<p>` unutar `.dark-section` → white

---

### **Primer 2: Cascading**

```css
:root {
  --spacing: 1rem;
}

body {
  --spacing: 1.5rem; /* Override na body */
}

.container {
  padding: var(--spacing); /* 1.5rem (od body) */
}

.special-container {
  --spacing: 2rem; /* Override za ovaj element */
  padding: var(--spacing); /* 2rem */
}
```

---

### **Kako Cascade Radi Sa Varijablama**

1. Browser traži varijablu od **element-a prema gore** (parent → grandparent → ... → :root)
2. Koristi **prvu definiciju** koju pronađe
3. Ako ne pronađe nigde → koristi fallback (ako postoji) ili **invalid**

---

## ⚠️ INVALID VARIABLES

**Iz MDN-a:**

> "When a custom property value is invalid, the property using it is considered invalid at computed-value time."

**Srpski prevod:**

Kada je vrednost custom property-ja nevažeća, property koji je koristi se smatra nevažećim u vreme računanja computed vrednosti.

---

### **Šta Se Dešava Kada Je Varijabla Invalid?**

**Primer:**

```css
:root {
  --text-color: 16px; /* Nevažeća vrednost za color property */
}

p {
  color: blue; /* Hard-coded fallback */
  color: var(
    --text-color
  ); /* Invalid → vraća se na inherited/initial vrednost */
}
```

**Rezultat:**

- `color: blue` se ignoriše (prepisuje se sa `var()`)
- `var(--text-color)` je invalid
- Browser koristi **inherited** vrednost (od parent-a) ili **initial** vrednost (`color: black`)

---

### **Razlika: Invalid vs Undefined**

**1. Undefined (Varijabla ne postoji):**

```css
.element {
  color: var(--non-existent); /* Varijabla ne postoji */
}
```

**Rezultat:**

- Koristi fallback (ako postoji)
- Ili koristi inherited/initial vrednost

---

**2. Invalid (Varijabla postoji ali je nevažeća vrednost):**

```css
:root {
  --text-color: 16px; /* Postoji, ali je nevažeća za color */
}

.element {
  color: var(--text-color); /* Invalid vrednost */
}
```

**Rezultat:**

- Fallback se **NE koristi** (varijabla postoji!)
- Koristi inherited/initial vrednost

---

### **Kako Izbeći Invalid Variables**

1. **Koristi validne vrednosti:**

```css
:root {
  --text-color: #333333; /* ✅ Validna color vrednost */
  --spacing: 1rem; /* ✅ Validna length vrednost */
}
```

2. **Testuj u DevTools:**

- Otvori DevTools
- Klikni na varijablu u Styles panelu
- Vidi da li je vrednost validna

3. **Koristi fallback:**

```css
.element {
  color: var(--text-color, black); /* Fallback ako je undefined */
}
```

---

## 💻 JAVASCRIPT API

**Iz MDN-a:**

> "Custom properties can be read and written using JavaScript with `getComputedStyle()` and `setProperty()`."

**Srpski prevod:**

Custom properties mogu biti pročitani i napisani pomoću JavaScript-a sa `getComputedStyle()` i `setProperty()` metodama.

---

### **1. Pročitaj Vrednost**

```javascript
// Pročitaj CSS varijablu
const root = document.documentElement;
const primaryColor = getComputedStyle(root).getPropertyValue("--color-primary");

console.log(primaryColor); // "#3b82f6"
```

**Važno:**

- `getComputedStyle()` vraća **computed** vrednost (konačnu vrednost posle cascade-a)
- Vrednost može imati whitespace — koristi `.trim()`

---

### **2. Postavi Vrednost**

```javascript
// Promeni CSS varijablu
document.documentElement.style.setProperty("--color-primary", "#ef4444");
```

**Rezultat:**

- Sve elements koji koriste `var(--color-primary)` će se odmah ažurirati

---

### **3. Obriši Vrednost**

```javascript
// Obriši CSS varijablu (vraća se na inherited/initial)
document.documentElement.style.removeProperty("--color-primary");
```

---

### **4. Praktičan Primer: Theme Toggle**

```html
<button id="theme-toggle">Toggle Dark Mode</button>
```

```css
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

```javascript
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root)
    .getPropertyValue("--bg-color")
    .trim();

  if (currentBg === "#ffffff") {
    // Dark mode
    root.style.setProperty("--bg-color", "#1f2937");
    root.style.setProperty("--text-color", "#f3f4f6");
  } else {
    // Light mode
    root.style.setProperty("--bg-color", "#ffffff");
    root.style.setProperty("--text-color", "#000000");
  }
});
```

---

### **5. Lista Svih Varijabli (Console)**

```javascript
// Pročitaj sve custom properties iz :root
const styles = getComputedStyle(document.documentElement);
const customProps = Array.from(styles).filter((prop) => prop.startsWith("--"));

console.table(customProps);
```

---

## 🌍 BROWSER COMPATIBILITY

**Iz MDN-a:**

| Browser          | Version | Release  | Support |
| ---------------- | ------- | -------- | ------- |
| **Chrome**       | 49+     | Mar 2016 | ✅      |
| **Firefox**      | 31+     | Jul 2014 | ✅      |
| **Safari**       | 9.1+    | Mar 2016 | ✅      |
| **Edge**         | 15+     | Apr 2017 | ✅      |
| **Opera**        | 36+     | Mar 2016 | ✅      |
| **IE 11**        | ❌      | ❌       | ❌      |
| **Mobile (iOS)** | 9.3+    | Mar 2016 | ✅      |
| **Android**      | 49+     | Mar 2016 | ✅      |

**Ključne informacije:**

- **98%+ global support** (2025)
- Internet Explorer 11 **NE podržava** CSS varijable
- Svi moderni browseri podržavaju

---

### **Fallback Strategija Za Stare Browsere**

```css
.button {
  /* IE 11 fallback (hard-coded) */
  background-color: #3b82f6;
  padding: 16px;

  /* Modern browsers (override) */
  background-color: var(--color-primary);
  padding: var(--space-md);
}
```

**Kako radi:**

1. Stari browseri (IE 11) ignorišu `var()` jer ga ne razumeju
2. Koriste hard-coded vrednosti (`#3b82f6`, `16px`)
3. Moderni browseri prepisuju sa `var()` vrednostima

---

## 🌟 PRAKTIČNI PRIMERI

### **Primer 1: Color System**

**Iz MDN dokumentacije:**

```css
:root {
  --main-color: #06c;
  --accent-color: #006;
}

#foo h1 {
  color: var(--main-color);
}
```

**Prošireni primer:**

```css
:root {
  /* Primary colors */
  --color-primary: #3b82f6;
  --color-primary-dark: #1e40af;
  --color-primary-light: #dbeafe;

  /* Semantic colors */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* Text colors */
  --color-text: #1f2937;
  --color-text-muted: #6b7280;
}

.button {
  background-color: var(--color-primary);
  color: white;
}

.button:hover {
  background-color: var(--color-primary-dark);
}

.success-message {
  color: var(--color-success);
}
```

---

### **Primer 2: Responsive Typography**

```css
:root {
  --font-size-base: 16px;
}

@media (min-width: 768px) {
  :root {
    --font-size-base: 18px;
  }
}

@media (min-width: 1024px) {
  :root {
    --font-size-base: 20px;
  }
}

body {
  font-size: var(--font-size-base);
}

h1 {
  font-size: calc(var(--font-size-base) * 2); /* 2x base size */
}
```

---

### **Primer 3: Component Theming**

```css
:root {
  --button-bg: #3b82f6;
  --button-color: white;
  --button-padding: 0.75rem 1.5rem;
}

.button {
  background-color: var(--button-bg);
  color: var(--button-color);
  padding: var(--button-padding);
}

/* Danger variant */
.button-danger {
  --button-bg: #ef4444;
}

/* Large variant */
.button-large {
  --button-padding: 1rem 2rem;
}
```

**HTML:**

```html
<button class="button">Default</button>
<button class="button button-danger">Danger</button>
<button class="button button-large">Large</button>
```

---

## ❓ FAQ (FREQUENTLY ASKED QUESTIONS)

### **1. Zašto koristiti CSS Varijable umesto Sass varijabli?**

**Odgovor:**

- **Runtime promene** — CSS varijable mogu biti promenjene sa JavaScript-om
- **Cascade & Inheritance** — CSS varijable podležu cascade-u
- **Native** — Ne treba kompajler (Sass zahteva build step)
- **DevTools** — Možeš ih videti i editovati uživo u DevTools-u

**Ali:**

- Sass varijable imaju **širi browser support** (kompajluju se u obični CSS)
- Možeš koristiti oba zajedno!

---

### **2. Mogu li da koristim CSS varijable sa `calc()`?**

**Odgovor:**

Da! `calc()` perfektno radi sa CSS varijablama.

```css
:root {
  --spacing: 1rem;
}

.element {
  padding: calc(var(--spacing) * 2); /* 2rem */
}
```

---

### **3. Da li CSS varijable rade u media queries?**

**Odgovor:**

**Ne možeš** koristiti CSS varijable **unutar** media query uslova:

```css
/* ❌ NE radi */
:root {
  --breakpoint: 768px;
}

@media (min-width: var(--breakpoint)) {
  /* NE radi! */
}
```

**Ali možeš** koristiti varijable **unutar** media query blokova:

```css
/* ✅ Radi */
:root {
  --spacing: 1rem;
}

@media (min-width: 768px) {
  :root {
    --spacing: 1.5rem; /* Override za tablet+ */
  }
}

.element {
  padding: var(--spacing); /* 1rem na mobile, 1.5rem na tablet+ */
}
```

---

### **4. Kako debugujem CSS varijable?**

**Odgovor:**

**Chrome DevTools:**

1. `F12` → Elements tab
2. Inspect element
3. U **Styles** panelu, klikni na `var(--variable-name)`
4. DevTools te vodi na definiciju u `:root`
5. U **Computed** tabu, vidi computed vrednost

**Console:**

```javascript
getComputedStyle(document.documentElement).getPropertyValue("--color-primary");
```

---

### **5. Mogu li da koristim CSS varijable za property names?**

**Odgovor:**

**Ne!** CSS varijable mogu biti vrednosti, ali **ne i nazivi properties**.

```css
/* ❌ NE radi */
:root {
  --property-name: color;
}

.element {
  var(--property-name): blue; /* NE radi! */
}

/* ✅ Radi */
:root {
  --text-color: blue;
}

.element {
  color: var(--text-color); /* Radi */
}
```

---

## 📚 DODATNI MDN RESURSI

1. **[Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)**

   - Kompletan vodič sa svim detaljima

2. **[var() function](https://developer.mozilla.org/en-US/docs/Web/CSS/var)**

   - Sintaksa, parametri, primeri

3. **[:root pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)**

   - Definicija, specificity, upotreba

4. **[calc() function](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)**

   - Kako koristiti calc() sa varijablama

5. **[CSS Cascading and Inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)**
   - Kako cascade radi sa varijablama

---

## ✅ CHECKLIST

**Pre nego što nastaviš:**

- [ ] Razumem šta su CSS Custom Properties
- [ ] Znam kako da ih definišem u `:root`
- [ ] Razumem `var()` funkciju
- [ ] Znam kako rade fallback vrednosti
- [ ] Razumem inheritance i cascade sa varijablama
- [ ] Znam šta se dešava kada je varijabla invalid
- [ ] Mogu da koristim JavaScript API (`getComputedStyle`, `setProperty`)
- [ ] Razumem browser compatibility
- [ ] Mogu da debugujem u DevTools

**Ako je sve ✅ → Završio si MDN CSS Variables! 🎉**

---

**Ovaj sažetak sadrži SVE ključne informacije iz MDN dokumentacije! 💪**
