---
type: tasklist
linked_to: js-learning/day01+day02
status: in_progress
date: 2025-11-28
topic: JavaScript Basics — Day 01 & Day 02
---

# 📋 Task List — 2025-11-28 | _Lista zadataka — 2025-11-28_

## 🔢 Top Priorities | _Glavni prioriteti_

- [ ] HTML + JS wiring (index.html + script.js) | _HTML + JS povezivanje (index.html + script.js)_
- [ ] DevTools console practice (Day01) | _Vežba sa DevTools konzolom (Dan 1)_
- [ ] Node "Hello" variant (hello-node.js) | _Node "Hello" varijanta (hello-node.js)_
- [ ] Day02 progress tracker (jsDay02) | _Day02 progress tracker (jsDay02)_
- [ ] Truthy/falsy & typeof exploration | _Istraživanje truthy/falsy i typeof_

---

## 🧪 Test & Validation Tasks | _Test i validacija_

- [ ] Open `workbench/js-learning/day01/index.html` in browser (Live Server or double-click). | _Otvori `workbench/js-learning/day01/index.html` u pregledaču (Live Server ili double-click)._
- [ ] In DevTools Console, verify: | _U DevTools konzoli proveri:_
  - [ ] `JS Day 01 — script.js is loaded ✅` message appears. | _Poruka `JS Day 01 — script.js is loaded ✅` se pojavljuje._
  - [ ] Outputs from basic arithmetic and concatenation logs. | _Ispis osnovnih aritmetičkih i konkatenacionih logova._
  - [ ] In console, run Day01 helpers: | _U konzoli pokreni Day01 helpere:_
  - [ ] `window.jsDay01` shows available functions. | _`window.jsDay01` prikazuje dostupne funkcije._
  - [ ] `jsDay01.circleCircumference(3)` returns expected value. | `jsDay01.circleCircumference(3)` vraća očekivanu vrednost.
  - [ ] `jsDay01.circleCircumference(3)` returns expected value. | `jsDay01.circleCircumference(3)` vraća očekivanu vrednost.

```bash
  node workbench/js-learning/day01/js/hello-node.js
```

- [ ] Compare terminal output with browser console output. | _Uporedi izlaz u terminalu sa izlazom u browser konzoli._

- [ ] Run lint for JS files: | _Pokreni lint za JS fajlove:_

  ```bash
  npm run lint:js
  ```

- [ ] Ensure there are no ESLint errors (warnings are ok for now). | _Uveri se da nema ESLint grešaka (upozorenja su za sada u redu)._

- [ ] Test Day02 progress tracker API in console: | _Testiraj Day02 progress tracker API u konzoli:_

  - [ ] `window.jsDay02` prints available methods. | _`window.jsDay02` ispisuje dostupne metode._
  - [ ] `jsDay02.status()` logs current progress. | _`jsDay02.status()` loguje trenutno stanje napretka._
  - [ ] `jsDay02.addDay()` updates `completedDays` and logs new percentage. | _`jsDay02.addDay()` ažurira `completedDays` i loguje novi procenat._
  - [ ] `jsDay02.setCompletedFromInput("10")` correctly sets progress to 10 days. | _`jsDay02.setCompletedFromInput("10")` ispravno postavlja napredak na 10 dana._
  - [ ] `jsDay02.setCompletedFromInput("abc")` logs validation message and does not break. | _`jsDay02.setCompletedFromInput("abc")` loguje poruku o grešci i ne kvari stanje._

- [ ] Use `inspectValue` helper for key values: | _Iskoristi `inspectValue` helper za ključne vrednosti:_

  - [ ] `inspectValue("42")` | _`inspectValue("42")`_
  - [ ] `inspectValue("")` | _`inspectValue("")`_
  - [ ] `inspectValue("abc")` | _`inspectValue("abc")`_
  - [ ] `inspectValue(null)` | _`inspectValue(null)`_
  - [ ] `inspectValue(undefined)` | _`inspectValue(undefined)`_
  - [ ] `inspectValue(0)` | _`inspectValue(0)`_
  - [ ] `inspectValue(NaN)` | _`inspectValue(NaN)`_

---

## 📌 Optional / Stretch Goals | _Opcioni / napredni zadaci_

- [ ] Add simple DOM output for progress (e.g. progress text in a `<p>` element). | _Dodaj jednostavan DOM output za napredak (npr. tekst napretka u `<p>` elementu)._
- [ ] Extract Day02 progress tracker into separate JS module later (day02.js). | _Kasnije izvuci Day02 progress tracker u poseban JS modul (day02.js)._
- [ ] Document Day01/Day02 helpers in a separate `README.md` inside `day01/`. | _Dokumentuj Day01/Day02 helpere u posebnom `README.md` unutar `day01/`._

---
