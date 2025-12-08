---
type: cheatsheet
topic: Hamburger Menu - Mobile Navigation Pattern
date: 2025-12-07
linked_to: cv-website
language: bilingual
status: active
difficulty: intermediate
audience: myself
recommended_by: github-copilot
---

# 📘 Cheatsheet: Hamburger Menu - Complete Guide

## ✅ Key Concepts

- **Hamburger Icon** | Tri paralelne linije koje predstavljaju meni
- **Mobile Navigation Pattern** | UI pattern za navigaciju na mobilnim uređajima
- **ARIA Attributes** | Accessibility attributes za pristupačnost
- **CSS Transforms** | 2D transformacije (rotate, translateX) za animacije
- **State Management** | Upravljanje open/closed stanjem menija
- **Responsive Design** | Prikazivanje hamburger-a samo na malim ekranima

---

## 📌 HTML STRUKTURA

### **Hamburger Dugme**

```html
<!-- Dugme sa 3 linije za hamburger ikonu -->
<button
  class="hamburger-menu"
  id="hamburger-toggle"
  aria-label="Toggle navigation menu"
  aria-expanded="false"
  aria-controls="mobile-menu"
>
  <!-- 3 linije koje će se animirati -->
  <span class="hamburger-line"></span>
  <span class="hamburger-line"></span>
  <span class="hamburger-line"></span>
</button>
```

### **Mobile Menu (Sidebar)**

```html
<!-- Meni koji se klizi sa leve strane -->
<ul
  class="site-nav-list"
  id="mobile-menu"
  data-mobile-open="false"
  role="navigation"
  aria-label="Mobile navigation menu"
>
  <li class="site-nav-item">
    <a href="/" class="site-nav-link">Početna</a>
  </li>
  <li class="site-nav-item">
    <a href="/about" class="site-nav-link">O meni</a>
  </li>
  <!-- ... ostali linkovi ... -->
</ul>
```

### **ARIA Atributi Objašnjeni**

| ARIA Atribut        | Vrednost       | Šta Radi                                      |
| ------------------- | -------------- | --------------------------------------------- |
| `aria-label`        | String         | Pristupačan naziv za dugme (za screen reader) |
| `aria-expanded`     | `true`/`false` | Označava da li je meni otvoren ili zatvoren   |
| `aria-controls`     | ID element     | Povezuje dugme sa menije-om koji kontroliše   |
| `role="navigation"` | -              | Semantic role za navigacijski region          |

---

## 🎨 CSS ANIMACIJE

### **1. Hamburger Dugme Osnovna Stilizacija**

```css
.hamburger-menu {
  /* Layout - tri linije u koloni sa razmakom */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.35rem; /* Razmak između linija */

  /* Dimenzije - dovoljno za dotik (min 44x44px) */
  width: 2.5rem; /* 40px */
  height: 2.5rem;

  /* Styling */
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;

  /* Pristupačnost - fokus outline */
  transition: all 0.3s ease;
}

.hamburger-menu:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**Šta se dešava?**

- `display: flex` + `flex-direction: column` = tri linije ispod jedne druge
- `gap: 0.35rem` = mali razmak između linija
- `width: 2.5rem; height: 2.5rem;` = kvadratno dugme (44px je minimum za mobile)

---

### **2. Hamburger Linije - Transformacija**

```css
.hamburger-line {
  /* Osnovna linija */
  display: block;
  width: 1.5rem; /* 24px */
  height: 0.2rem; /* 3.2px */
  background: var(--color-text);
  border-radius: 999px; /* zaobljeni krajevi */

  /* Glatka animacija */
  transition: all 0.3s ease;
  transform-origin: center; /* Rotira oko centra */
}

/* ===== TRANSFORMACIJE ZA X OBLIK ===== */

/* Gornja linija: rotira 45° GORE-DESNO */
.hamburger-menu[aria-expanded="true"] .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translateY(0.55rem);
  /* rotate(45deg) - rotira 45 stepeni
     translateY(0.55rem) - pomera dolje da se susreti sa 3. linijom */
}

/* Srednja linija: NESTAJE */
.hamburger-menu[aria-expanded="true"] .hamburger-line:nth-child(2) {
  opacity: 0; /* Transparentna - vidljiva/nevidljiva */
  /* opacity: 0 = nevidljiva
     opacity: 1 = vidljiva (default) */
}

/* Donja linija: rotira -45° DOLE-LEVO */
.hamburger-menu[aria-expanded="true"] .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translateY(-0.55rem);
  /* rotate(-45deg) - rotira -45 stepeni (suprotno)
     translateY(-0.55rem) - pomera gore da se susreti sa 1. linijom */
}
```

**Vizuelno objašnjenje:**

```
DEFAULT (aria-expanded="false"):
━━━━━━  (linha 1)
━━━━━━  (linha 2)
━━━━━━  (linha 3)

AKTIVIRANO (aria-expanded="true"):
    ╱  (linha 1 → rotate 45°)
       (linha 2 → opacity: 0)
    ╲  (linha 3 → rotate -45°)
     ↓ rezultat: X oblik
```

---

### **3. Mobile Menu Sidebar - Slide In/Out Animacija**

```css
/* Mobile menu - za male ekrane */
@media (width < 768px) {
  /* Hamburger je vidljiv samo na mobilnom */
  .hamburger-menu {
    display: flex;
  }

  /* Menu je FIXED sidebar sa puno specifičnih osobina */
  .site-nav-list {
    /* Pozicioniranje */
    position: fixed;
    left: 0; /* Počinje od levog ruba */
    top: 3.5rem; /* Ispod headera */

    /* Dimenzije */
    width: 100%; /* Puna širina ekrana */
    height: calc(100vh - 3.5rem); /* Ostatak ekrana (cela visina - header) */

    /* Sadržaj */
    flex-direction: column; /* Linkovi u koloni */
    gap: 0; /* Bez razmaka između linkova */
    padding: var(--space-lg) var(--space-md);

    /* Pozadina i stil */
    background: var(--color-bg);
    border-top: 1px solid var(--color-border);

    /* Z-index - preko sadržaja ali ispod modala */
    z-index: 999;

    /* ===== KLJUČNA ANIMACIJA ===== */
    /* Default: menu je SKRIVENA (levo van ekrana) */
    transform: translateX(-100%);
    /* -100% = pomereni ceo meni van ekrana ulevo
       0 = meni je vidljiv na ekranu */

    /* Glatka tranzicija */
    transition: transform 0.3s ease-in-out;

    /* Scrollovanje ako ima puno linkova */
    overflow-y: auto;
  }

  /* ===== KADA JE MENI OTVOREN ===== */
  .site-nav-list[data-mobile-open="true"] {
    transform: translateX(0);
    /* Pomera sa translateX(-100%) na translateX(0)
       → Menu klizi sa leve strane na vidljivo mesto */
  }

  /* Pojedini linkovi u mobilnom meniju */
  .site-nav-link {
    display: block; /* Linkovi zauzimaju punu liniju */
    padding: var(--space-md); /* Vise padding-a za lakši tap */
    width: 100%;
    border-radius: var(--radius-md);
  }

  .site-nav-link:hover {
    background: var(--color-surface); /* Hover efekat */
  }
}

/* Desktop - hamburger nestaje, normalna menu vidljiva */
@media (width >= 768px) {
  .hamburger-menu {
    display: none; /* Hamburger se skriva */
  }

  .site-nav-list {
    transform: translateX(0); /* Menu je uvek vidljiv */
    position: static; /* Ne koristimo fixed */
    width: auto;
    height: auto;
  }
}
```

**Transformacija Objašnjena:**

```
translateX(-100%): Pomera element horizontalno
  - Pozitivna vrednost → desno
  - Negativna vrednost → levo
  - -100% → pomereni za punu sirinu elementa ulevo

Primer:
Menu je 100% ekrana širok (375px na iPhone)
translateX(-100%) = pomeri 375px ulevo → SKRIVENO

translateX(0) = pomeri 0px (na originalnom mestu) → VIDLJIVO
```

---

## 🔧 JAVASCRIPT LOGIKA

### **Event Listeners**

```javascript
// 1. Pronađi elemente
const hamburgerToggle = document.getElementById("hamburger-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");

// 2. Funkcija za toggle-ovanje menija
function toggleMobileMenu() {
  // Pročitaj trenutnu vrednost aria-expanded
  const isOpen = hamburgerToggle.getAttribute("aria-expanded") === "true";

  // Inverziraj vrednost (true → false, false → true)
  const newState = !isOpen;

  // Postavi nova vrednost na dugme
  hamburgerToggle.setAttribute("aria-expanded", newState);

  // Postavi nova vrednost na meni (koristi data atribut za CSS)
  mobileMenu.setAttribute("data-mobile-open", newState);
}

// 3. Klik na hamburger dugme
hamburgerToggle.addEventListener("click", toggleMobileMenu);

// 4. Zatvori meni kad se klikne na link
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("data-mobile-open", "false");
  });
});

// 5. Zatvori meni na Escape dugme
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hamburgerToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("data-mobile-open", "false");
  }
});
```

**Korak Po Korak:**

1. **getAttribute** → Čita trenutnu vrednost ARIA atributa
2. **!isOpen** → Inverziraj boolean (NOT operator)
3. **setAttribute** → Postavi novu vrednost
4. **CSS očitava** `data-mobile-open` atribut i primenjuje `transform: translateX(0)`
5. **Rezultat:** Meni klizi u/iz vidljivo

---

## 📊 STATE MANAGEMENT DIJAGRAM

```
┌─────────────────────────────────────┐
│  Hamburger Meni State Flow          │
└─────────────────────────────────────┘

[Početak]
  ↓
aria-expanded = "false"
data-mobile-open = "false"
Transform: translateX(-100%)
  ↓ [KLIK NA HAMBURGER]
toggleMobileMenu() pozvan
  ↓
isOpen = getAttribute("aria-expanded") === "true"
  → rezultat: false
  ↓
newState = !false
  → newState: true
  ↓
setAttribute("aria-expanded", "true")
setAttribute("data-mobile-open", "true")
  ↓
CSS primenjuje:
  .hamburger-line:nth-child(1) rotate(45deg)
  .hamburger-line:nth-child(2) opacity(0)
  .hamburger-line:nth-child(3) rotate(-45deg)

  .site-nav-list[data-mobile-open="true"]
    transform: translateX(0)
  ↓
[Meni je OTVOREN, X animacija aktivna]
  ↓ [KLIK NA LINK ili ESCAPE]
toggleMobileMenu() pozvan opet
  ↓
aria-expanded = "false"
data-mobile-open = "false"
Transform: translateX(-100%)
  ↓
[Meni je ZATVOREN]
```

---

## 🎯 CSS TRANSFORM SVOJSTVA - Detaljno

### **transform: rotate()**

```css
/* Rotacija oko Z-axis-a (u 2D ravni) */
transform: rotate(45deg); /* Rotira 45 stepeni u smislu kazaljke */
transform: rotate(-45deg); /* Rotira -45 stepeni suprotno */
transform: rotate(0deg); /* Default - nema rotacije */

/* transform-origin menja centar rotacije */
transform-origin: center; /* Rotira oko centra */
transform-origin: top left; /* Rotira oko gornjeg levog ugla */
```

### **transform: translateX() i translateY()**

```css
/* Horizontalno pomeranje */
transform: translateX(100px); /* Pomera 100px udesno */
transform: translateX(-100px); /* Pomera 100px ulevo */
transform: translateX(0); /* Nema pomeranja */

/* Vertikalno pomeranje */
transform: translateY(50px); /* Pomera 50px dole */
transform: translateY(-50px); /* Pomera 50px gore */

/* Kombinovano */
transform: translateX(50px) translateY(30px); /* Pomera koso */
```

### **Kombinovanje Transformacija**

```css
/* Rotacija + Translacija */
transform: rotate(45deg) translateY(0.55rem);
/* 1. Rotira element 45 stepeni
   2. Potom pomera (Y-osa) za 0.55rem
   Ovo je ono što kreiра X oblik hamburger-a! */
```

---

## 💡 ACCESSIBILITY (A11y) BEST PRACTICES

### **✅ Šta Je Dobro**

```html
<!-- 1. Semantic button element -->
<button class="hamburger-menu" ...>...</button>
<!-- ✓ Automatski keyboard accessible -->

<!-- 2. aria-label za screen reader korisnike -->
<button aria-label="Toggle navigation menu" ...>...</button>
<!-- ✓ Čita se kao "Toggle navigation menu" -->

<!-- 3. aria-expanded za state -->
<button aria-expanded="false" ...>...</button>
<!-- ✓ Screen reader kaže "collapsed" ili "expanded" -->

<!-- 4. aria-controls za povezanost -->
<button aria-controls="mobile-menu" ...>...</button>
<!-- ✓ Povezuje dugme sa menije-om koji kontroliše -->

<!-- 5. Focus outline vidljiv -->
.hamburger-menu:focus-visible { outline: 2px solid var(--color-primary); }
<!-- ✓ Keyboard korisnici vide gde je fokus -->
```

### **❌ Česte Greške**

```html
<!-- ❌ Span umesto button-a -->
<span class="hamburger" onclick="..."></span>
<!-- ✗ Keyboard users ne mogu pristupiti (Tab ne radi) -->

<!-- ❌ Bez aria-expanded -->
<button class="hamburger">Menu</button>
<!-- ✗ Screen readers ne znaju da li je open/closed -->

<!-- ❌ outline: none bez alternative -->
.hamburger:focus { outline: none; }
<!-- ✗ Nema vidljive fokus indicatora -->
```

---

## 📚 DOKUMENTACIJA - LINKOVI ZA ČITANJE

### **🔴 OBAVEZNO Pročitaj (Top Priority)**

1. **[MDN: ARIA: button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)**

   - Razumi semantic role-ove
   - Kako se koriste ARIA atributi sa button-ima
   - Čitaj ovu lekciju: 15-20 min

2. **[MDN: CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)**

   - Detaljno: `rotate()`, `translateX()`, `translateY()`
   - Primeri sa live demo-ima
   - Čitaj: 20-25 min

3. **[W3C ARIA: aria-expanded](https://www.w3.org/TR/wai-aria-1.2/#aria-expanded)**
   - Specifikacija za `aria-expanded` atribut
   - Korišćenje u meniji-ma i accordion-ima
   - Čitaj: 10 min

### **🟡 PREPORUČENO Pročitaj (Secondary Priority)**

4. **[CSS Tricks: CSS Transform](https://css-tricks.com/almanac/properties/t/transform/)**

   - Praktični primeri
   - Browser kompatibilnost
   - Čitaj: 15 min

5. **[MDN: Accessible Navigation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Practices/utilizing-aria-in-html)**

   - Kako da praviš accessible navigaciju
   - Keyboard navigation best practices
   - Čitaj: 20 min

6. **[WebAIM: Mobile Accessibility](https://webaim.org/techniques/mobile/)**
   - Mobile-specific accessibility considerations
   - Touch targets minimum size (44x44px - znaj ovo!)
   - Čitaj: 15 min

### **🟢 DODATNO (Nice to Know)**

7. **[A11y Project: Checklist](https://www.a11yproject.com/checklist/)**

   - Comprehensive checklist za accessibility
   - Koristi ovo kao reference
   - Prelistaj: 10 min (save za kasnije reference)

8. **[Can I Use: CSS Transform](https://caniuse.com/transforms2d)**
   - Browser support za CSS transformacije
   - Ima li fallback-a potrebno?
   - Čitaj: 5 min

---

## 🎬 VIDEO RESURSI (Optional)

- **[Kevin Powell - CSS Transforms](https://www.youtube.com/watch?v=hJiLjahWkRw)** (12 min)

  - Odličan vizuelni pregled CSS transforms
  - Preporučujem gledanje pored čitanja MDN

- **[Traversy Media - Hamburger Menu](https://www.youtube.com/watch?v=X0hfEj33Yks)** (20 min)
  - Praktična implementacija sa JS
  - Good for understanding timing

---

## 🧪 PRAKSA - ZADACI ZA TESTIRANJE

### **Zadatak 1: Razumevanje (15 min)**

- [ ] Pročitaj HTML strukturu u index.html
- [ ] Objasni (svojom rečima) šta svaki ARIA atribut radi
- [ ] Nacrtaj (na papiru) kako se linije rotiraju u X

### **Zadatak 2: CSS Analiza (20 min)**

- [ ] Pronađi u day01.css sve `transform` svojstva
- [ ] Izmeni `rotate(45deg)` na `rotate(90deg)` - šta se dešava?
- [ ] Izmeni `translateY(0.55rem)` na `translateY(1rem)` - kako se menja pozicija?
- [ ] Obrnuto: `rotate(-45deg)` na `rotate(45deg)` - šta je razlika?

### **Zadatak 3: JavaScript Logika (15 min)**

- [ ] Pronađi `toggleMobileMenu()` funkciju
- [ ] Dodaj `console.log(isOpen)` pre i posle toggle-a
- [ ] Otvori DevTools → Console → Klikni hamburger → Vidi logs
- [ ] Objasni šta se dešava u memoriji računara

### **Zadatak 4: Pristupačnost Test (20 min)**

- [ ] Testiraj: Tab dugme → Hamburger je fokusiran?
- [ ] Testiraj: Enter/Space na dugme → Menu se otvara?
- [ ] Testiraj: Escape dugme → Menu se zatvara?
- [ ] Testiraj sa screen reader-om (NVDA ili ugrađenim)

---

## 📊 ČITANJE REDOSLED (45 Minut Plan)

```
0-5 min   : Preskoči ovu strukturu (već čitaš je)
5-15 min  : HTML STRUKTURA sekcija (detaljno)
15-25 min : CSS ANIMACIJE sekcije
25-35 min : JAVASCRIPT LOGIKA sekcije
35-45 min : Pregledi ACCESSIBILITY sekcija + dokumentacijskih linkova

NAKON 45 min: Spreman za Guided Practice zadatke!
```

---

## 🎓 Što Ćeš Znati Posle

✅ Kako funkcioniše hamburger menu na mobilnom
✅ CSS transform svojstva (`rotate`, `translateX`)
✅ ARIA atributi za accessible dugme (`aria-expanded`, `aria-controls`)
✅ State management sa data atributima
✅ Event handling u JavaScript-u
✅ Responsive design sa media queries

**To je sve što Junior Developer treba da zna o hamburger meniji-ma!** 🚀

---

**Čitanje vreme: 45 minuta**
**Kompleksnost: Intermediate (3/5)**
**Važnost: ⭐⭐⭐⭐⭐ (5/5)**

---

## 📌 SUMMARY - Šta Zapamti

| Koncept    | Ključna Poenta                                              |
| ---------- | ----------------------------------------------------------- |
| **HTML**   | Semantic `<button>`, ARIA atributi za accessibility         |
| **CSS**    | `transform: rotate()` za X, `translateX(-100%)` za slide-in |
| **JS**     | Toggle state sa `getAttribute()` i `setAttribute()`         |
| **A11y**   | `aria-expanded`, `aria-controls`, keyboard support          |
| **Mobile** | Min 44x44px za touch, responsive sa media queries           |

---
