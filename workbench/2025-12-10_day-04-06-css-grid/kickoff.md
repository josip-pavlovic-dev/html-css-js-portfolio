# 🚀 Day 04–06 Kickoff – Grid Journey

## Orijentacija (Sati 1–2)

Prvo, razumej šta imamo:

```html
<!-- Tvoj HTML -->
<div class="hero">
  <div class="hero-inner">
    <div class="hero-content">Tekst</div>
    <div class="hero-media">Slika + floating cards</div>
  </div>
</div>
```

```css
/* Trenutni CSS */
.hero-inner {
  display: grid;
  grid-template-columns: 1fr; /* samo 1 kolona */
  gap: 1.5rem;
}

@media (width >= 768px) {
  .hero-inner {
    grid-template-columns: 1.1fr 0.9fr; /* skok na 2 kolone! */
  }
}
```

**Problem:** Nema intermediate vrednosti (600–768px zona je problematična).

---

## Učenje po danima

### **Dan 1: Grid Osnove + Problem Analysis** (8h)

#### Blok 1 (2h): Teorija

- `display: grid` – šta to znači?
- `grid-template-columns` – kako funkcioniše?
- `fr` vs `px` vs `auto`
- `gap` – razmak između stavki

#### Blok 2 (2h): Tvoj Problem

- Zašto se Hero ponašao kao "nowrap"?
- Analiza: Grid wrapping pravila
- Šta je trebalo da se desi: Smooth layout shift

#### Blok 3 (2h): Praksa

- Sandbox: Isprobaj `grid-template-columns: 1fr 1fr` sa različitim gap vrednostima
- Isprobaj: `minmax(200px, 1fr)` na kartama
- Zapiši: Koja vrednost ti se sviđa za tvoj Hero?

#### Blok 4 (2h): Rebuild

- Prepiši Hero sa `minmax()` umesto fiksnih `fr` vrednosti
- Testiraj na 320, 600, 768, 1024px
- Kompajliraj napomene šta se promenilo

---

### **Dan 2: Responsive Patterns + Application** (8h)

#### Blok 1 (2h): `auto-fit` vs `auto-fill`

- Nauči razliku (bitna za cards!)
- Praksa: Cards sa `repeat(auto-fit, minmax(250px, 1fr))`

#### Blok 2 (2h): Media Query Strategy

- Kada koristiti media query umesto `auto-fit`?
- Tvoj Hero: 3 breakpoint-a (mobile, tablet, desktop)

#### Blok 3 (2h): Primeni na tvoj projektuu

- Update Hero sa optimalnim vrednostima
- Update Cards grid (BONUS: ako imaš vremena)

#### Blok 4 (2h): Test + dokumentuj

- DevTools: Svi breakpoint-i
- Zapiši šta ti je kritično za Grid da funkcioniše

---

### **Dan 3: Advanced + Mastery** (8h)

#### Blok 1 (2h): Subgrid i Nested Grids

- Tvoj Hero je `grid` sa `grid` decom (`hero-media` može biti nested grid)
- Nauči kako to funkcioniše

#### Blok 2 (2h): Named Grid Areas (za buduće page layout-e)

- Nije za Hero, ali je super za CV sajt
- Praksa: Redefiniši page sa grid-template-areas

#### Blok 3 (2h): Polish + Edge Cases

- Šta se dešava na 1200px, 1600px?
- Fallbacks ako Grid ne radi (nije bitno, ali dobro znati)

#### Blok 4 (2h): Final Project

- Primeni Grid na najmanje 2-3 sekcije sajta
- Kompajliraj "Grid Learnings Document"

---

## 📝 Svakodnevne napomene

Zadaj si sebe svaki dan:

- "Šta sam razumeo o Grid-u?
- "Gde ću Grid koristiti u svom saitu?"
- "Koja vrednost (`fr`, `auto-fit`, `minmax()`) mi je najkorisnija?"

---

## Alati za ovu vežbu

- **CSS Grid Generator**: https://cssgrid-generator.netlify.app/ (vizuelno)
- **Browser DevTools**: Inspect `.hero-inner` → Layout tab (pokazuje grid)
- **Pen & Paper**: Skicira layout pre nego što kodiš
