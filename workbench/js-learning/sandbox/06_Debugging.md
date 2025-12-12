---
type: module
title: Debugging — breakpoints, debugger, monitorEvents
language: Serbian/English
level: Beginner
---

# 🐞 Debugging

## Breakpoints

- Sources tab → otvorite `playground/script.js`
- Klik na broj linije → dodaje breakpoint
- Osveži stranicu → izvršavanje staje na breakpoint

## `debugger` statement

```js
function calcTotal(items) {
  debugger; // staje ovde kada se izvrši
  return items.reduce((acc, n) => acc + n, 0);
}
```

## Watches, Call Stack

- Desno u DevTools: add watch expressions (npr. `items.length`)
- Posmatraj call stack da vidiš putanju poziva

## Performance Quick Check

- `console.time('t')` / `console.timeEnd('t')`
- Performance panel (osnovno za sada)

## Mini zadaci

1. Dodaj `debugger` u handler za klik i vidi state
2. Dodaj breakpoint na dodavanje nove stavke u listi
3. Izmeri vreme izvršavanja petlje uz `console.time`

## Docs

- [Chrome DevTools: JavaScript debugging](https://developer.chrome.com/docs/devtools/javascript/)
- [MDN: Console.time](https://developer.mozilla.org/en-US/docs/Web/API/Console/time)
