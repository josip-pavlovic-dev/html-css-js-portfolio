---
type: module
title: DevTools Console — Osnove i trikovi
language: Serbian/English
level: Beginner
---

# 🖥️ DevTools Console — Osnove

## Zašto konzola?

- Brzo testiranje ideja bez fajlova
- Inspekcija DOM-a i događaja
- Debugging uz `console.*` i breakpoints

## Osnovne komande

- `console.log(value)` — ispis vrednosti
- `console.table(array|object)` — tabela za pregled
- `console.dir(element)` — prikaži DOM element kao objekt
- `console.group('Label')` / `console.groupEnd()` — grupisanje logova
- `console.time('t')` / `console.timeEnd('t')` — merenje vremena

## DOM inspekcija iz konzole

- `$0` — trenutno selektovan element u Elements panelu
- `$1, $2…` — prethodno selektovani elementi
- `$$('selector')` — lista elemenata (kao `querySelectorAll`) ali kao niz
- `document.querySelector('selector')`
- `document.querySelectorAll('selector')`

### Primjeri (probaj u konzoli)

```
// Selektuj element iz Elements taba
$0.classList.add('highlight')
$0.textContent = 'Promijenjen iz konzole!'

// Brzo nađi sve linkove i ofarbaj
const links = $$('a')
links.forEach(a => a.style.color = 'hotpink')

// Pregled podataka u tabeli
console.table([
  { id: 1, label: 'Home' },
  { id: 2, label: 'About' },
])
```

## Event listening iz konzole

- `monitorEvents($0, 'click')` — loguje klik događaje (Chrome)
- `monitorEvents($0)` — svi događaji
- `unmonitorEvents($0)` — prekini

## Mini zadaci

1. Otvori `sandbox/playground/index.html`
2. Inspect `.nav-link` → koristi `$0`
3. Promeni mu stil iz konzole (`$0.style.color = 'red'`)
4. Nađi sve `.nav-link` sa `$$('.nav-link')` i dodaj klasu
5. Napravi `console.group('Nav Links')` i ispiši ih u grupi

## MDN/Docs

- [MDN: Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console)
- [Chrome DevTools: Console](https://developer.chrome.com/docs/devtools/console)
