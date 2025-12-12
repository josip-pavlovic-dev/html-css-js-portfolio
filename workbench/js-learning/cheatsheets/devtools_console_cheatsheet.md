---
type: cheatsheet
title: DevTools Console Cheatsheet — $0, $$, monitorEvents, console.*, breakpoints
language: Serbian/English
---

# 🧰 DevTools Console Cheatsheet

## 🎯 Core naredbe

- **`console.log(value)`**: Ispis vrednosti
- **`console.table(array|object)`**: Pregled u tabeli
- **`console.dir(element)`**: DOM element kao JS objekat
- **`console.group('Label')` / `console.groupEnd()`**: Grupisanje logova
- **`console.time('t')` / `console.timeEnd('t')`**: Merenje vremena

## 🔎 DOM inspekcija iz konzole

- **`$0`**: Trenutno selektovan element iz Elements panela
- **`$1`, `$2`...**: Prethodno selektovani elementi
- **`$$('selector')`**: Niz elemenata (kao `querySelectorAll`, ali array)
- **`document.querySelector('selector')`**, **`document.querySelectorAll('selector')`**

## 🎧 Praćenje događaja

- **`monitorEvents($0, 'click')`**: Loguje samo click evente (Chrome)
- **`monitorEvents($0)`**: Loguje sve evente
- **`unmonitorEvents($0)`**: Prekida monitoring

## 🐞 Breakpoints & `debugger`

- Elements → Event Listeners: pregled aktivnih listenera
- Sources → Klik na broj linije: dodaj breakpoint
- `debugger` u kodu: pauzira izvršavanje kada se linija izvrši

## 🧪 Brzi primjeri

```js
// Selektovan element u Elements tabu
$0.classList.add("highlight");
$0.textContent = "Promijenjen iz konzole!";

// Brzo ofarbaj sve .nav-link
$$(".nav-link").forEach((a) => (a.style.color = "hotpink"));

// Merenje vremena dodavanja itema
console.time("add-item");
const li = document.createElement("li");
li.textContent = "New item";
document.getElementById("items").appendChild(li);
console.timeEnd("add-item");

// Breakpoint kroz debugger
function calcTotal(arr) {
  debugger;
  return arr.reduce((acc, n) => acc + n, 0);
}
```

## 📚 Dokumentacija

- [MDN: Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console)
- [Chrome DevTools: Console](https://developer.chrome.com/docs/devtools/console)
- [Chrome DevTools: JavaScript debugging](https://developer.chrome.com/docs/devtools/javascript/)
