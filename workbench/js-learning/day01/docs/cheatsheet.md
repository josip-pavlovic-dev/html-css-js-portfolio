---
type: cheatsheet
topic: JavaScript Truthy / Falsy, typeof & Conversions
date: 2025-11-28
linked_to: js-learning/day01+day02
language: bilingual
status: draft
difficulty: beginner
audience: myself
recommended_by: mentor
---

# 📘 Cheatsheet: JavaScript Truthy / Falsy & Type Conversions | _JavaScript truthy/falsy i konverzije tipova_

## ✅ Key Concepts | _Ključni pojmovi_

- Truthy value | _Truthy vrednost_
- Falsy value | _Falsy vrednost_
- Typeof operator | _Typeof operator_
- Implicit conversion (coercion) | _Implicitna konverzija (coercion)_
- Explicit conversion | _Eksplicitna konverzija_
- NaN & Infinity | _NaN i Infinity_

---

## 🧠 Truthy vs Falsy overview | _Pregled truthy i falsy vrednosti_

### ✅ Falsy values (treat as false) | _Falsy vrednosti (ponašaju se kao false)_

- `false`
- `0`, `-0`
- `""` (prazan string)
- `null`
- `undefined`
- `NaN`

Sve ostalo u JavaScript-u je **truthy** (ponaša se kao `true` u logičkom kontekstu).

### ✅ Common truthy examples | _Česti truthy primeri_

- `"0"` (string "0")
- `"false"` (string "false")
- `" "` (string sa jednim razmakom)
- `[]` (prazan niz)
- `{}` (prazan objekat)
- `42`, `-1`, `3.14` (bilo koji nenula broj)

---

## 🔍 typeof quick reference | _Brzi vodič za typeof_

| Expression            | Result (`typeof`) | Objašnjenje           | _Objašnjenje_                                       |
| --------------------- | ----------------- | --------------------- | --------------------------------------------------- |
| `typeof 42`           | `"number"`        | number                | _broj_                                              |
| `typeof "42"`         | `"string"`        | string                | _tekst_                                             |
| `typeof true`         | `"boolean"`       | boolean               | _logička vrednost_                                  |
| `typeof undefined`    | `"undefined"`     | undefined             | _nedodeljena vrednost_                              |
| `typeof null`         | `"object"`        | historic bug          | _istorijska greška – zapravo posebna null vrednost_ |
| `typeof Symbol()`     | `"symbol"`        | symbol                | _unikatni identifikator_                            |
| `typeof 123n`         | `"bigint"`        | bigint                | _veliki celobrojni tip_                             |
| `typeof []`           | `"object"`        | array is object       | _niz je specijalan objekat_                         |
| `typeof function(){}` | `"function"`      | functions are objects | _funkcije su specijalan tip objekta_                |

---

## 🔄 Conversion table (Number / String / Boolean) | _Tabela konverzija (Number / String / Boolean)_

| Value       | `Number(v)` | `String(v)`   | `Boolean(v)` |
| ----------- | ----------- | ------------- | ------------ |
| `"42"`      | `42`        | `"42"`        | `true`       |
| `""`        | `0`         | `""`          | `false`      |
| `"3.14"`    | `3.14`      | `"3.14"`      | `true`       |
| `"abc"`     | `NaN`       | `"abc"`       | `true`       |
| `true`      | `1`         | `"true"`      | `true`       |
| `false`     | `0`         | `"false"`     | `false`      |
| `null`      | `0`         | `"null"`      | `false`      |
| `undefined` | `NaN`       | `"undefined"` | `false`      |
| `0`         | `0`         | `"0"`         | `false`      |
| `7`         | `7`         | `"7"`         | `true`       |
| `NaN`       | `NaN`       | `"NaN"`       | `false`      |

---

## 💻 Code examples | _Primeri koda_

### ✅ Basic truthy/falsy checks | _Osnovne truthy/falsy provere_

```js
// simple if checks
if ("0") {
  console.log('"0" is truthy');
}

if ("") {
  console.log("This will NOT run");
}

if (0) {
  console.log("This will NOT run");
}

if (42) {
  console.log("42 is truthy");
}
```

### ✅ Boolean conversion examples | _Primeri konverzije u boolean_

```js
// double negation to get boolean
console.log(!!"0"); // true
console.log(!!""); // false
console.log(!!0); // false
console.log(!!7); // true
console.log(!!null); // false
console.log(!!undefined); // false
```

### ✅ typeof + conversion helper | _typeof + helper za konverzije_

```js
function inspectValue(value) {
  console.log("value:", value);
  console.log("typeof:", typeof value);
  console.log("Number(value):", Number(value));
  console.log("String(value):", String(value));
  console.log("Boolean(value):", Boolean(value));
  console.log("----");
}

// usage in DevTools console:
inspectValue("42");
inspectValue("");
inspectValue("abc");
inspectValue(null);
inspectValue(undefined);
inspectValue(0);
inspectValue(NaN);
```

---

## 📌 Explanation: | _Objašnjenje:_

Truthy values are values that behave like `true` in boolean contexts (if, while, logical operators). | _Truthy vrednosti su one koje se u logičkom kontekstu ponašaju kao `true` (if, while, logički operatori)._
Falsy values are a small fixed set of values that behave like `false` when converted to boolean. | _Falsy vrednosti su mali, fiksni skup vrednosti koje se pri konverziji u boolean ponašaju kao `false`._
The `typeof` operator returns a string describing the value type, but has edge cases like `typeof null === "object"`. | _Operator `typeof` vraća string koji opisuje tip vrednosti, ali ima specifičnosti poput `typeof null === "object"`._
Implicit conversion (coercion) happens automatically in operations like `+`, comparisons and `if` checks. | _Implicitna konverzija (coercion) dešava se automatski u operacijama poput `+`, poređenjima i `if` proverama._
Explicit conversion uses helpers like `Number()`, `String()` i `Boolean()` da bi kod bio čitljiviji i predvidljiv. | _Eksplicitna konverzija koristi helpere poput `Number()`, `String()` i `Boolean()` da kod bude čitljiviji i predvidljiv._

---

## 📥 Related Topics | _Povezane teme_

- Equality operators (`==` vs `===`) | _Operatori jednakosti (`==` naspram `===`)_
- Logical operators (`&&`, `||`, `!`) | _Logički operatori (`&&`, `||`, `!`)_
- Short-circuit evaluation | _Short-circuit evaluacija_
- Nullish coalescing (`??`) | _Nullish operator (`??`)_
- Optional chaining (`?.`) | _Optional chaining (`?.`)_

---
