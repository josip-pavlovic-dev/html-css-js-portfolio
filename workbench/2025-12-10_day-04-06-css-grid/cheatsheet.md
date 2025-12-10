# 📚 CSS Grid – Detaljni Cheatsheet

## 1. Grid osnove

```css
.container {
  display: grid;

  /* Definiši kolone */
  grid-template-columns: 1fr 1fr 1fr; /* 3 jednake kolone */

  /* Definiši redove */
  grid-template-rows: 100px auto 200px;

  /* Razmak između grid stavki */
  gap: 1rem; /* važi za sve smer (row i column) */
  /* ili: row-gap: 1rem; column-gap: 2rem; */

  /* Poravnanje sadržaja */
  align-items: start | center | end | stretch;
  justify-items: start | center | end | stretch;
}
```

---

## 2. Responsive Grid Patterns

### Pattern A: `repeat()` sa `auto-fit`

```css
/* SAVRŠENO ZA: Cards, gallery, flexible layout */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Šta se dešava?
   - Ako ima prostora: 4 kolone
   - Ako je knap: 2-3 kolone
   - Na mobilnom: 1 kolona
   - BEZMEDIQ-a, sve se automatic računa!
*/
```

### Pattern B: Explicit media queries (za Hero)

```css
/* Mobile: single column */
.hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* Tablet/Desktop: two columns */
@media (width >= 768px) {
  .hero-inner {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
  }
}
```

---

## 3. Grid Template Columns – Razumevanje

| Vrednost                               | Šta znači                        | Primer                       |
| -------------------------------------- | -------------------------------- | ---------------------------- |
| `1fr`                                  | 1 frakcija dostupnog prostora    | `1fr 1fr` → 2 jednake kolone |
| `200px`                                | Fiksna širina                    | `200px 1fr` → sidebar + main |
| `minmax(200px, 1fr)`                   | Min-max opseg                    | Auto ali ne manje od 200px   |
| `auto`                                 | Prilagodi sadržaju               | `auto 1fr auto`              |
| `repeat(3, 1fr)`                       | Ponovi 3x                        | = `1fr 1fr 1fr`              |
| `repeat(auto-fit, minmax(200px, 1fr))` | **RESPONSIVE bez media queries** | Cards layout                 |

---

## 4. Kao se Hero trebalo da izgleda

```css
/* LOŠE (tvoj original): Skok bez prelaza */
.hero-inner {
  grid-template-columns: 1fr; /* mobile */
}
@media (768px) {
  .hero-inner {
    grid-template-columns: 1.1fr 0.9fr; /* SKOK! */
  }
}

/* BOLJE: Glatka progresija */
.hero-inner {
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (width >= 600px) {
  .hero-inner {
    grid-template-columns: minmax(300px, 1fr) minmax(250px, 1fr);
  }
}
@media (width >= 1024px) {
  .hero-inner {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
  }
}
```

---

## 5. Česte greške

| Greška                                            | Problem                 | Rešenje                                |
| ------------------------------------------------- | ----------------------- | -------------------------------------- |
| `grid-template-columns: auto auto auto`           | Bez fleksibilnosti      | Koristi `fr` ili `minmax()`            |
| `grid-template-columns: 1fr; max-width: 100%`     | Knap jer parent je mali | Osiguraj parent ima dovoljan prostor   |
| `gap: 0; margin: 1rem`                            | Nekonzistentno          | Koristi samo `gap`                     |
| `grid-auto-flow: column` bez `grid-template-rows` | Neočekivani raspored    | Budi eksplicitan sa template-rows      |
| Više breakpoint-a nego što trebalo                | Komplikovan kod         | Pokušaj `auto-fit` ili `minmax()` prvo |

---

## 6. Razlike: Flexbox vs Grid

| Aspekt     | Flexbox                                        | Grid                                                       |
| ---------- | ---------------------------------------------- | ---------------------------------------------------------- |
| Dimenzije  | 1D (redak ili kolona)                          | 2D (redak + kolona)                                        |
| Alignment  | Jednostavno (`justify-content`, `align-items`) | Fleksibilnije (`justify-items`, `align-items`, grid areas) |
| Responsive | Media queries                                  | `auto-fit`, `minmax()` (bez media)                         |
| Use case   | Navigacija, dugmići                            | Layout stranice, cards, hero                               |

---

## 7. Grid Auto-placement

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Automatski postavi decu u redove */
  /* grid-auto-rows: minmax(100px, auto); */
  /* Ako nema dovoljno kolona, pravi novi red */
}

.item {
  /* Opciono: Eksplicitno postavi item */
  grid-column: 1 / 3; /* od kolone 1 do 3 */
  grid-row: 2; /* red 2 */
}
```

---

## 8. Named Grid Areas (Za kompleksne layout-e)

```css
.page {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main sidebar"
    "footer footer footer";
  gap: 1rem;
}

.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}
```

---

## 📌 Cheatsheet za tvoj Hero

```css
/* ✅ PREPORUKA */
.hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);

  @media (width >= 768px) {
    grid-template-columns: minmax(300px, 1.1fr) minmax(240px, 0.9fr);
    align-items: start;
  }

  @media (width >= 1024px) {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
    gap: 2rem;
  }
}
```

**Razlog:** `minmax()` omogućava fleksibilnost, gap je jasno definisan po breakpoint-u, align-items se prilagođava.
