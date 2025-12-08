---
type: cheatsheet
topic: Theme Toggle Button - Positioning & Flexbox
date: 2025-12-07
linked_to: cv-website, day01.css, scripts.js
language: bilingual
status: active
difficulty: intermediate
audience: myself
recommended_by: codex
---

# 🌙☀️ Cheatsheet: Theme Toggle Button (Light/Dark) - Positioning & Flexbox

## ✅ Key Concepts

### HTML struktura

- `<button class="theme-toggle">` | _Osnovna dugme za promenu teme_
- `data-theme` atribut | _Čuva trenutnu temu (light/dark)_
- `aria-label` i `aria-pressed` | _Pristupačnost za screen readere_

### CSS pozicioniranje (responsive)

- `position: absolute` → fiksna pozicija u containeru | _Najčešće u headeru_
- `position: fixed` → fiksna pozicija na ekranu | _Ostaje vidljivo pri scroll-u_
- `position: sticky` → kombinacija static i fixed | _Ide sa scrollom ali se "lepi"_
- `position: relative` → relativno u bloku | _Za flex/grid parent_

### Flexbox pozicije (sa flex parent)

- Flex parent + `justify-content: space-between` → dugme daleko desno | _Trik: `margin-left: auto`_
- Flex parent + `gap` → razmak između brandam i dugmeta | _Automatski razmak_
- `flex-shrink: 0` → sprečava da dugme bude skupljeno | _Čini ga fleksibilnim_

### CSS custom properties (variables)

- `--color-bg-light` / `--color-bg-dark` | _Boje za svaku temu_
- `--color-text-light` / `--color-text-dark` | _Tekst u svetloj/tamnoj temi_
- `html[data-theme="dark"]` → selector za dark mode | _CSS koji se primenjuje_
- `prefers-color-scheme: dark` → systemska tema korisnika | _Fallback ako nema JS_

### Animacija pri promeni

- `transition: all 0.3s ease` | _Glatka promena boja_
- `transform: rotate(180deg)` | _Rotacija ikone_
- `opacity` fade in/out | _Transparency efekt_

---

## 📌 HTML Struktura

```html
<!-- OPCIJA 1: Dugme sa margin-left: auto (flex parent) -->
<nav class="site-header-nav">
  <a href="#" class="site-header-brand">Brand</a>
  <ul class="site-nav-list">
    ...
  </ul>

  <!-- Dugme desno, bez margin -->
  <button class="theme-toggle" aria-label="Promeni temu" aria-pressed="false">
    <svg class="theme-toggle-icon" width="24" height="24" viewBox="0 0 24 24">
      <!-- Moon ikona za light mode -->
      <circle cx="12" cy="12" r="5" fill="currentColor" />
    </svg>
  </button>
</nav>

<!-- OPCIJA 2: Dugme sa position: absolute (fiksna pozicija u headeru) -->
<header class="site-header" style="position: relative;">
  <nav class="site-header-nav">
    <a href="#" class="site-header-brand">Brand</a>
    <ul class="site-nav-list">
      ...
    </ul>
  </nav>

  <!-- Dugme apsolutno pozicionirano u headeru -->
  <button
    class="theme-toggle theme-toggle-absolute"
    aria-label="Promeni temu"
    aria-pressed="false"
  >
    ☀️
  </button>
</header>

<!-- OPCIJA 3: Dugme sa position: fixed (uvek vidljivo) -->
<button
  class="theme-toggle theme-toggle-fixed"
  aria-label="Promeni temu"
  aria-pressed="false"
>
  🌙
</button>
```

---

## 🎨 CSS: Osnovne boje + Custom Properties

```css
/* ===== LIGHT THEME (DEFAULT) ===== */
:root,
html[data-theme="light"] {
  /* Boje za svetlu temu */
  --color-bg: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #1f2937;
  --color-border: #e5e7eb;
  --color-accent: #3b82f6;

  /* Toggle dugme */
  --toggle-bg: #f3f4f6;
  --toggle-text: #fbbf24; /* Žuta boja za sun ikonu */
}

/* ===== DARK THEME ===== */
html[data-theme="dark"] {
  --color-bg: #0f172a;
  --color-surface: #0b1120;
  --color-text: #e5e7eb;
  --color-border: #1f2937;
  --color-accent: #38bdf8;

  --toggle-bg: #1f2937;
  --toggle-text: #fbbf24; /* Ista boja, ali drugačiji kontekst */
}

/* Primeni boje na body */
body {
  background: var(--color-bg);
  color: var(--color-text);
  transition: background 0.3s ease, color 0.3s ease;
}
```

---

## 🎯 CSS: Pozicioniranje Dugmeta (3 variante)

### Varijanta 1: Flex sa `margin-left: auto` (PREPORUČENO)

```css
/* Flex nav sa gap i brandos */
.site-header-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0.75rem 1.5rem;
}

.site-header-brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0; /* Ne skuplja se ako nema prostora */
}

.site-nav-list {
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: auto; /* 🔑 TRIK: gura sve desno! */
}

/* Dugme ide direktno u nav kao poslednji element */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: var(--toggle-bg);
  border: 1px solid var(--color-border);
  color: var(--toggle-text);
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0; /* Čini se da ne skuplja nikad */
}

.theme-toggle:hover,
.theme-toggle:focus-visible {
  background: var(--color-accent);
  transform: scale(1.05);
}
```

---

### Varijanta 2: Position Absolute (za fixed poziciju u headeru)

```css
/* Header kao reference point */
.site-header {
  position: relative;
  border-bottom: 1px solid var(--color-border);
  padding: 0.75rem 1.5rem;
}

/* Nav normalno */
.site-header-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: var(--max-width);
  margin: 0 auto;
}

/* Dugme apsolutno pozicionirano */
.theme-toggle-absolute {
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%); /* Centra vertikalno */

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: var(--toggle-bg);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Responsive: na mobilnim pomeriti malo */
@media (width < 640px) {
  .theme-toggle-absolute {
    right: 0.75rem;
    width: 2.2rem;
    height: 2.2rem;
  }
}
```

---

### Varijanta 3: Position Fixed (uvek vidljivo, šutira se sa scrollom)

```css
/* Dugme FIKSNO na ekranu */
.theme-toggle-fixed {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--color-accent);
  border: none;
  color: var(--color-bg);
  cursor: pointer;
  font-size: 1.5rem;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle-fixed:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

/* Mobilna verzija - manji, drugačija pozicija */
@media (width < 640px) {
  .theme-toggle-fixed {
    bottom: 1rem;
    right: 1rem;
    width: 2.8rem;
    height: 2.8rem;
  }
}
```

---

## 📱 Responsive Varijacije

```css
/* DESKTOP: Dugme u headeru sa flex */
@media (width >= 768px) {
  .site-header-nav {
    gap: 2rem; /* Veći gap na desktopu */
  }

  .theme-toggle {
    width: 2.5rem;
    height: 2.5rem;
  }
}

/* TABLET: Malo manja, ali vidljiva */
@media (480px <= width < 768px) {
  .theme-toggle {
    width: 2.3rem;
    height: 2.3rem;
    font-size: 0.95rem;
  }
}

/* MOBILE: Kompaktno, sa većim touch area */
@media (width < 480px) {
  .site-header-nav {
    gap: 0.75rem;
    flex-wrap: wrap; /* Smanji se ako nema prostora */
  }

  .theme-toggle {
    width: 2.2rem;
    height: 2.2rem;
    padding: 0; /* Bez unutrašnjeg paddinga */
  }
}
```

---

## 💡 JavaScript: Toggle Logika

```javascript
// ============== THEME TOGGLE LOGIC ==============

const themeToggle = document.querySelector(".theme-toggle");
const htmlElement = document.documentElement;

// Preuzmi sačuvanu temu ili koristi systemsku
function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved;

  // Ako nema sačuvane, koristi systemsku
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Primeni temu
function applyTheme(theme) {
  htmlElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Ažuriraj aria-pressed za pristupačnost
  const isPressed = theme === "dark";
  themeToggle.setAttribute("aria-pressed", isPressed);
}

// Inicijalizuj
const currentTheme = getInitialTheme();
applyTheme(currentTheme);

// Toggle na klik
themeToggle.addEventListener("click", () => {
  const newTheme =
    htmlElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(newTheme);
});

// Sluša sistemsku promenu
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    applyTheme(e.matches ? "dark" : "light");
  });
```

---

## 🎓 Učne tačke (Za vežbu u DevTools)

1. **Flex playground**: Ukloni `margin-left: auto` iz `.site-nav-list` i vidi kako se dugme pomera
2. **Position experiment**: Zameni `flex` sa `absolute` i prosledi `top`, `right` vrednosti
3. **Responsive test**: Otvori DevTools → Device toggle → promeni na mobile i vidi kako se pozicija menja
4. **Animation frame**: Dodaj `animation: spin 0.5s` umesto `transform: scale()` i vidi rotaciju
5. **Accessibility check**: Koristi Accessibility inspector da proveraš `aria-pressed` state

---

## 📥 Related Topics

- _Flexbox positioning_ - `justify-content`, `align-items`, `gap`
- _CSS custom properties_ - `:root`, `data-*` atributi
- _CSS Selectors_ - `html[data-theme="dark"]`
- _localStorage API_ - čuvanje preference korisnika
- _matchMedia API_ - detektovanje systemske teme
- _Accessibility (a11y)_ - `aria-label`, `aria-pressed`
