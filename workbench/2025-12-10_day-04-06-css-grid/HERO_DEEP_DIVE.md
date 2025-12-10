# 🔬 Deep Dive: Tvoj Hero Element Explained

## Šta je tvoj Hero?

```html
<section class="hero">
  <div class="hero-inner">
    <!-- Leva strana: Tekst -->
    <div class="hero-content">
      <p class="hero-eyebrow">Junior Web & Python Developer</p>
      <h1 class="hero-title">Zdravo, ja sam Josip 👋</h1>
      <p class="hero-subtitle">...</p>
      <div class="hero-actions">
        <a class="btn-primary">Pogledaj moje projekte</a>
        <a class="btn-secondary">Preuzmi CV</a>
      </div>
    </div>

    <!-- Desna strana: Slika + Floating cards -->
    <div class="hero-media">
      <div class="hero-photo-placeholder">Placeholder</div>
      <div class="floating-card card-1">npm run build</div>
      <div class="floating-card card-2">fetch('/api/data')</div>
    </div>
  </div>
</section>
```

---

## Kako funkcioniše tvoj Grid

### **Trenutni CSS:**

```css
.hero-inner {
  display: grid;
  grid-template-columns: 1fr; /* ← Mobile: 1 kolona */
  gap: var(--space-xl); /* ← Razmak između kolona */

  /* Drugih svojstava (padding, background, border, box-shadow...) */
  padding: clamp(var(--space-xl), 4vw, var(--space-2xl));
  /* clamp() znači: Minimum space-xl, ideal 4vw, maksimum space-2xl */
}

@media (width >= 768px) {
  .hero-inner {
    grid-template-columns: 1.1fr 0.9fr; /* ← Tablet/Desktop: 2 kolone */
    align-items: center; /* ← Poravnaj textčito sa slikom */
  }
}
```

---

## Grid Anatomy

```
┌─────────────────────────────────────┐
│ .hero-inner (GRID CONTAINER)        │
│ display: grid                       │
│ grid-template-columns: 1fr 1fr     │
│ gap: 1.5rem                         │
│                                     │
│  ┌──────────────┐  ┌──────────────┐ │
│  │ .hero-content│  │ .hero-media  │ │
│  │ (GRID ITEM 1)│  │ (GRID ITEM 2)│ │
│  │              │  │              │ │
│  │ Tekst        │  │ Slika        │ │
│  │ Dugme        │  │ Floating     │ │
│  │              │  │ Cards        │ │
│  └──────────────┘  └──────────────┘ │
│                                     │
└─────────────────────────────────────┘
```

---

## Zašto se ponašao kao "nowrap"?

### Scenario 1: 320px (Mobile)

```
Layout: 1 kolona

.hero-inner {
  grid-template-columns: 1fr;
  /* Hero se rasprostire 100% parent width */
}

┌─────────┐
│ Tekst   │
├─────────┤
│ Slika   │
└─────────┘
```

**Šta vidim:** Tekst — slika — jedan ispod drugoga. ✓ OK.

---

### Scenario 2: 600px (Tablet, ali pre media query-ja)

```
/* Hero i dalje koristi mobile CSS! */
.hero-inner {
  grid-template-columns: 1fr; /* GLAVNI PROBLEM! */
}

┌──────────────┐
│ Tekst        │
├──────────────┤
│ Slika        │
└──────────────┘
```

**Šta vidim:** I dalje 1 kolona. Tekst zauzima 100% width. ✓ OK ali nije optimalno.

---

### Scenario 3: 768px (Tablet, sada media query!)

```
/* SKOK! */
.hero-inner {
  grid-template-columns: 1.1fr 0.9fr;
}

┌──────────────┬─────────┐
│ Tekst (55%)  │ Slika   │
│              │ (45%)   │
└──────────────┴─────────┘
```

**Šta vidim:** Naglo se menja iz 1 kolone u 2 kolone! Tekst se sužava, slika se pojavljuje pored. ✗ **PROBLEM**: Brz prelaz, nema smooth animacije.

---

## Šta su "fr" vrednosti?

`1fr` = **Jedna "frakcija"** dostupnog prostora.

```css
grid-template-columns: 1fr 1fr 1fr;
/* Tri kolone, svaka dobija po 1 deo. */
/* Ako je container 900px: svaka kolona = 300px */

grid-template-columns: 1.1fr 0.9fr;
/* Prva kolona: 1.1 deo */
/* Druga kolona: 0.9 deo */
/* Ako je container 1000px: */
/* - Prva: 1.1 / (1.1 + 0.9) * 1000 = 550px */
/* - Druga: 0.9 / (1.1 + 0.9) * 1000 = 450px */
```

**Zašto ne fiksne piksele?**

- `1fr` se automatski prilagođava veličini parent-a.
- Uvek je responsivan bez dodatnih media queries (čak).

---

## Rešenje: `minmax()`

`minmax(MIN, MAX)` znači:

- **Minimum:** Nikad manja od MIN vrednosti
- **Maximum:** Nikad veća od MAX vrednosti
- **Između:** Fleksibilna na dostupnom prostoru

```css
grid-template-columns: minmax(300px, 1.1fr) minmax(250px, 0.9fr);
```

**Šta se dešava:**

- Ako je container mali (320px): Kolone se ne mogu dostići minimuma → Grid se prelama u 1 kolonu
- Ako je container 768px+: Minimumi su dostignuti → 2 kolone sa `1.1fr` i `0.9fr`

---

## Vizuelni Prikaz: Razlika

### **STARI pristup (tvoj original):**

```
320px:  [100%]          ← Display: 1 kolona

600px:  [100%]          ← I dalje 1 kolona (nema media query)

768px:  [55%][45%]      ← SKOK! Odjednom 2 kolone ✗

1024px: [55%][45%]      ← Manja promena gap-a
```

### **NOVI pristup (sa minmax()):**

```
320px:  [100%]          ← Display: 1 kolona (minimumi nisu dostignuti)

600px:  [100%]          ← I dalje 1 kolona (minimumi nisu dostignuti)

650px:  [52%][48%]      ← Smooth skok! Minimumi su dostignuti ✓

768px:  [55%][45%]      ← Glatka progresija

1024px: [55%][45%]      ← Ista vrednost
```

---

## Praktični Kod: Prije vs Posle

### ❌ PRIJE (Problem)

```css
.hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (width >= 768px) {
  .hero-inner {
    grid-template-columns: 1.1fr 0.9fr;
  }
}
```

---

### ✅ POSLE (Rešenje)

```css
.hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* Tablet: Još uvek fleksibilan, ali sa minmax() */
@media (width >= 600px) {
  .hero-inner {
    grid-template-columns: minmax(300px, 1.1fr) minmax(250px, 0.9fr);
    gap: 2rem;
  }
}

/* Desktop: Komforniji gap */
@media (width >= 1024px) {
  .hero-inner {
    grid-template-columns: minmax(350px, 1.2fr) minmax(280px, 0.8fr);
    gap: 3rem;
    align-items: center;
  }
}
```

---

## Testiranje

Testiraj u DevTools sa sledećim veličinama:

- **320px (Mobile S):** Očekuješ 1 kolonu
- **600px (Tablet start):** Može biti 1 ili 2 kolone, ali glatko
- **768px (Tablet normal):** 2 kolone
- **1024px (Desktop):** 2 kolone sa većim gap-om

Za svaku veličinu, otvori **DevTools → Layout tab → selektuj `.hero-inner`** → Vidiš Grid vizuelno.

---

## Dodatne Tehnike

### Technique 1: Sve u `auto-fit` (ako hoćeš)

```css
.hero-inner {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* Automatski broji kolone */
  /* Na 320px: 1 kolona (jer je minimalno 300px) */
  /* Na 768px: 2-3 kolone */
}
```

### Technique 2: Grid Areas (za kompleksnije layout-e)

```css
.hero-inner {
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "content media";
}

.hero-content {
  grid-area: content;
}
.hero-media {
  grid-area: media;
}

@media (width < 768px) {
  .hero-inner {
    grid-template-columns: 1fr;
    grid-template-areas:
      "content"
      "media";
  }
}
```

---

## Ključne Lekcije

1. **Izbegavaj nagite skok između media query-ja**: Koristi `minmax()` za smooth prelaze.
2. **Testiraj sve breakpoint-e**: Ne samo 320px i 768px, i 425px, 600px, itd.
3. **Gap je važan**: Prilagođavaj gap po veličini (veće na desktopu).
4. **Align-items:** Na desktopu, `align-items: center` pravi lepši vizuelni balanc.
5. **Nested grid je moćan**: Ako `hero-media` ima floating cards, razmisli o tome da ga učiniš grid-om umesto position: absolute.

---

## Zadatak Sada

Otvori `index.css` i zameni Hero sa:

```css
.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl, 1.25rem);
  padding: clamp(var(--space-xl), 4vw, var(--space-2xl));
  box-shadow: 0 24px 60px rgb(0 0 0 / 12%);
  overflow: hidden;
}

@media (width >= 600px) {
  .hero-inner {
    grid-template-columns: minmax(280px, 1.1fr) minmax(230px, 0.9fr);
    align-items: start;
    gap: 1.75rem;
  }
}

@media (width >= 1024px) {
  .hero-inner {
    grid-template-columns: minmax(320px, 1.2fr) minmax(280px, 0.8fr);
    align-items: center;
    gap: 2rem;
  }
}
```

Testiraj na 320, 600, 768, 1024px. Šta vidiš? Je li glatko?
