---
type: module
title: DOM Osnove — selektori, manipulacija, classList
language: Serbian/English
level: Beginner
---

# 🌳 DOM Osnove

## Selektori

- `document.getElementById('id')`
- `document.querySelector('.class')`
- `document.querySelectorAll('li')`

## Manipulacija

```js
const title = document.querySelector("h1");
title.textContent = "Hello DOM";

const item = document.createElement("li");
item.textContent = "New item";
document.querySelector("ul").appendChild(item);
```

## classList

```js
const box = document.querySelector(".box");
box.classList.add("active");
box.classList.toggle("hidden");
box.classList.remove("error");
```

## Mini zadaci

1. Dodaj novi link u navigaciji iz konzole
2. Promeni tekst dugmeta sa `textContent`
3. Togle-uj klasu `.is-active` na klik (pogledaj Events modul)

## MDN

- [MDN: Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN: Document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [MDN: Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
