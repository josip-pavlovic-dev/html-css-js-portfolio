---
type: module
title: Događaji — addEventListener, delegacija, key/mouse
language: Serbian/English
level: Beginner
---

# 🎯 Događaji

## addEventListener

```js
const btn = document.querySelector(".nav-button");
btn.addEventListener("click", () => {
  console.log("Klik!");
});
```

## Delegacija događaja

```js
// Slušaj na parentu, uhvati klik na children
const list = document.querySelector(".nav-list");
list.addEventListener("click", (e) => {
  const link = e.target.closest(".nav-link");
  if (!link) return;
  console.log("Klik na link:", link.textContent);
  e.preventDefault();
});
```

## Tipični događaji

- `click`, `dblclick`
- `input`, `change`
- `keydown`, `keyup`
- `submit`

## Mini zadaci

1. Napravi listener na `.nav-button--primary` (loguje "Login klik")
2. Uvedi delegaciju na `.nav-list` da hvata klikove na `.nav-link`
3. Napravi `keydown` listener na `document` koji loguje pritisnuti taster

## MDN

- [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN: KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [MDN: MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
