---
type: module
title: Funkcije — deklaracije, izrazi, arrow, scope
language: Serbian/English
level: Beginner
---

# 🔧 Funkcije

## Deklaracije vs Izrazi

```js
function add(a, b) {
  return a + b;
}
const multiply = function (a, b) {
  return a * b;
};
const divide = (a, b) => a / b;
```

## Parametri i default vrednosti

```js
function greet(name = "friend") {
  return `Hello, ${name}!`;
}
```

## Scope (blok vs funkcijski)

```js
if (true) {
  let x = 1;
  const y = 2;
}
// x, y nisu vidljivi van if-bloka
```

## Return i side-effects

- Pure function: vraća rezultat, nema side-effects
- Impure: menja globalno stanje, DOM itd.

## Mini zadaci (konzola)

```js
const inc = (x) => x + 1;
inc(5); // ?

function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
sum(1, 2, 3); // 6
```

## MDN

- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)
- [MDN: Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
