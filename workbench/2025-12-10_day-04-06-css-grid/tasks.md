# ✅ Day 04–06 Detaljne Tasks

## Dnevni Checklist

### **Dan 1: Grid Theory + Hero Problem**

#### Sati 1–2: Teorija

- [ ] Pročitaj "Grid osnove" iz cheatsheet-a (redom: template-columns, fr, gap)
- [ ] Skiciraj na papiru: Kako se 3 kolone prave sa `grid-template-columns: 1fr 1fr 1fr`?
- [ ] Zapiši: Šta je razlika između `fr` i `px`?

#### Sati 3–4: Problem Analysis

- [ ] Otvori DevTools, inspektiraj `.hero-inner` na 320px i 768px
- [ ] Primetio si li "skok" u layout-u? Gde i zašto?
- [ ] Čitaj komment u `index.css` bloku Hero—šta mu nedostaje?

#### Sati 5–8: Praktična Vežba

- [ ] Kreiraj sandbox HTML sa 3 kartice (ili koristi postojeće)
- [ ] Testiraj:

  ```css
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  ```

  Na različitim veličinama. Šta se dešava na mobilnom?

- [ ] Zameni sa `minmax()`:

  ```css
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  ```

  Bolje ili gore?

- [ ] Zapiši u `LEARNINGS.md`: "Važna otkrića od danas"

---

### **Dan 2: Responsive Grid Patterns**

#### Sati 1–2: `auto-fit` Mastery

- [ ] Prouči `repeat(auto-fit, minmax(250px, 1fr))`
- [ ] Testiraj na cards sekciji tvog sajta
- [ ] Koliko kartice staju na:
  - [ ] 320px?
  - [ ] 768px?
  - [ ] 1024px?

#### Sati 3–4: Update Hero

- [ ] Otvori `index.css`
- [ ] Zameni Hero sa:
  ```css
  .hero-inner {
    grid-template-columns: 1fr;
    @media (width >= 768px) {
      grid-template-columns: minmax(300px, 1.1fr) minmax(250px, 0.9fr);
    }
  }
  ```

#### Sati 5–6: Test All Breakpoints

- [ ] DevTools: 320, 375, 480, 768, 1024, 1280px
- [ ] Proverava: Nema "nowrap" problema? ✓
- [ ] Nema raskida gap vrednosti? ✓

#### Sati 7–8: Cards Grid

- [ ] Primeni `repeat(auto-fit, minmax(...))` na `.cards-grid`
- [ ] Testiraj responsive-nost
- [ ] Zapiši: Koja je minimalna vrednost za kartice?

---

### **Dan 3: Advanced + Completion**

#### Sati 1–2: Nested Grid (Hero-media)

- [ ] `.hero-media` je div sa floating cards unutar
- [ ] Trebalo bi biti nested grid, a trenutno je position: absolute
- [ ] Razmotrი: Da li trebalo da zamenim sa grid za floating cards?

#### Sati 3–4: Polish & Review

- [ ] Proverite svi Dark mode varijante sa Grid-om
- [ ] Testiraj Grid na najčešće korišćenim breakpoint-ima
- [ ] Dotuniraj `gap` vrednosti ako su previše/malo

#### Sati 5–6: Documentation

- [ ] Kreiraj `GRID_MASTERY.md`:
  - Šta sam nauči o Grid-u?
  - Šta bi učinio drugačije?
  - Gde ću Grid koristiti na drugim stranicama?

#### Sati 7–8: Final Project

- [ ] Primeni Grid na barem još 1 sekciju (npr. footer ili skills)
- [ ] Komit sa porukom: "feat: implement grid-responsive layout"
- [ ] Razmotrი: Sledeća sekcija za grid-ovanje?

---

## 🎯 Dnevni Output Expectations

### Dan 1

- **Fajl**: `LEARNINGS_day01.md` (šta sam razumeo)
- **GitHub Commit**: "feat: analyze hero grid problem"

### Dan 2

- **Fajl**: Ažuriran `index.css` sa novim Hero
- **GitHub Commit**: "feat: refactor hero with minmax() grid"

### Dan 3

- **Fajl**: `GRID_MASTERY.md` (dokumentacija znanja)
- **GitHub Commit**: "feat: grid mastery - polish all layouts"

---

## 🚨 Ako Zapneš...

**"Ne razumem šta je `1fr`"**
→ Čitaj cheatsheet sekciju 3. `1fr` = 1 deo dostupnog prostora. Ako `1fr 1fr` → svaka kolona dobija pola.

**"Moj Hero i dalje puca na 600px"**
→ Dodaj intermedijaran media query na 600px sa drugačijom vrednoscu.

**"Šta je razlika između `auto-fit` i `auto-fill`?"**
→ `auto-fit` šalje prazne kolone, `auto-fill` ih čuva. Za cards, koristi `auto-fit`.

**"Zašto `gap` nije isti na svim breakpoint-ima?"**
→ Gasp se može menjati u media queries! Koristi `@media` da prilagođiš `gap: 2rem` na desktop.
