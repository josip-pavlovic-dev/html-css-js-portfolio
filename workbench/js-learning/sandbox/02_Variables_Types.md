---
type: module
title: Promenljive i Tipovi — let/const i coercion
language: Serbian/English
level: Beginner
---

# 🔤 Promenljive i Tipovi

## Deklaracije

- `let` — promenljiva (može da se menja)
- `const` — konstanta (ne može reassign, ali objekti mogu mutaciju)

## Tipovi

- `string`, `number`, `boolean`, `null`, `undefined`, `object`, `symbol`, `bigint`
- `typeof value` — vraća tip

## Coercion & Equality

- Implicitna konverzija (coercion): `'5' + 1 → '6'` vs `'5' - 1 → 4`
- Strict equality: `===` (bez coercion) — koristi uvek
- Loose equality: `==` — izbegavaj za početak

## Truthy/Falsy

- Falsy: `0`, `''`, `null`, `undefined`, `NaN`, `false`
- Ostalo je truthy

## Mini zadaci (konzola)

```
let age = 25
const name = 'Jole'

typeof age // ?
Boolean('') // false
Boolean('ok') // true

'5' + 1 // '51'
'5' - 1 // 4

0 == false   // true
0 === false  // false
```

## MDN

- [MDN: Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [MDN: Data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN: Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
