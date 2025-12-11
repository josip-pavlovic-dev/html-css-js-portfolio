---
type: cheatsheet
topic: JavaScript Nullish Coalescing (??)
date: 2025-11-28
linked_to: js-learning/day02
language: bilingual
status: draft
difficulty: beginner
audience: myself
---

# 📘 Cheatsheet: Nullish Coalescing (??) | _Nullish operator (??)_

## ✅ Key Concepts | _Ključni pojmovi_

- Nullish values (`null`, `undefined`) | _Nullish vrednosti (`null`, `undefined`)_
- `??` operator | _`??` operator_
- Difference from `||` | _Razlika u odnosu na `||`_

---

## 🔄 Basic behavior | _Osnovno ponašanje_

`a ?? b`:

- Returns `a` if `a` is **not null and not undefined**. | _Vraća `a` ako `a` **nije null i nije undefined**._
- Otherwise returns `b`. | _U suprotnom vraća `b`._

Primeri:

```js
null ?? "fallback"; // "fallback"
undefined ?? "fallback"; // "fallback"
0 ?? 42; // 0   (0 NIJE nullish)
"" ?? "default"; // ""  (prazan string NIJE nullish)
false ?? true; // false
```

---

## ⚖️ `??` vs `||` | _`??` naspram `||`_

```js
const count = 0;

const withOr = count || 10; // 10 (0 je falsy)
const withNullish = count ?? 10; // 0  (0 NIJE nullish)
```

```js
const title = "";

const titleOr = title || "Untitled"; // "Untitled"
const titleNullish = title ?? "Untitled"; // "" (prazan string se zadržava)
```

👉 `||` tretira **mnogo vrednosti kao “prazne”** (0, "", NaN),
dok `??` reaguje samo na `null` i `undefined`.

---

## 🛠️ Practical usage | _Praktična upotreba_

```js
function getUserName(user) {
  // ako user.name nije definisano → koristi "Anonymous"
  return user.name ?? "Anonymous";
}

const userA = { name: "Josip" };
const userB = { name: null };
const userC = {};

console.log(getUserName(userA)); // "Josip"
console.log(getUserName(userB)); // "Anonymous"
console.log(getUserName(userC)); // "Anonymous"
```

---

## ⚠️ Operator precedence note | _Napomena o prioritetu operatora_

Kombinovanje sa `||` ili `&&` traži zagrade:

```js
// preporučeno:
const result = (a ?? b) || "fallback";
```

---

## 📌 Explanation: | _Objašnjenje:_

Use `??` when you want a fallback only for missing values (`null` or `undefined`). | _Koristi `??` kada želiš fallback samo za vrednosti koje nedostaju (`null` ili `undefined`)._
Unlike `||`, the `??` operator keeps valid falsy values like 0, empty string or false. | _Za razliku od `||`, operator `??` zadržava validne falsy vrednosti kao što su 0, prazan string ili false._
This is ideal for numeric counters, empty text fields and boolean flags where 0 / "" / false are meaningful. | _Ovo je idealno za brojače, prazna tekstualna polja i boolean zastavice gde su 0 / "" / false smislene vrednosti._
When combining with other logical operators, use parentheses to ensure correct evaluation order. | _Kada kombinuješ sa drugim logičkim operatorima, koristi zagrade da osiguraš ispravan redosled evaluacije._

---
