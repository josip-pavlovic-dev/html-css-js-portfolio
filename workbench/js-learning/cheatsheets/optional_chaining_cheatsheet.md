---
type: cheatsheet
topic: JavaScript Optional Chaining (?.)
date: 2025-11-28
linked_to: js-learning/day02
language: bilingual
status: draft
difficulty: beginner
audience: myself
---

# 📘 Cheatsheet: Optional Chaining (?.) | _Optional chaining (?.)_

## ✅ Key Concepts | _Ključni pojmovi_

- Safe property access | _Bezbedan pristup svojstvima_
- `?.` operator | _`?.` operator_
- Optional method call | _Opciono pozivanje metoda_
- Combining with `??` | _Kombinovanje sa `??`_

---

## 🧱 Basic property access | _Osnovni pristup svojstvima_

Bez optional chaining-a:

```js
// može baciti grešku ako user ili address nisu definisani
const city = user.address.city;
```

Sa optional chaining-om:

```js
const city = user?.address?.city;
// ako je user ili address null/undefined → city = undefined (bez greške)
```

---

## 📞 Optional method call | _Opciono pozivanje metoda_

```js
user?.login?.(); // poziva login samo ako user i login postoje
```

Ako je `user` `null` ili `undefined`, izraz vraća `undefined` umesto da baci grešku.

---

## 📚 Optional array access | _Opcioni pristup nizu_

```js
const firstLessonTitle = course.lessons?.[0]?.title;
```

Ako `lessons` ne postoji ili je `null/undefined`, rezultat je `undefined`.

---

## 🤝 Combining with `??` | _Kombinovanje sa `??`_

```js
const city = user?.address?.city ?? "Unknown city";
```

- Ako postoji `user.address.city` → koristi se ta vrednost. | _Ako postoji `user.address.city` → koristi se ta vrednost._
- Ako bilo šta u lancu nedostaje → rezultat `?.` je `undefined`, pa `??` daje `"Unknown city"`. | _Ako bilo šta u lancu nedostaje → rezultat `?.` je `undefined`, pa `??` daje `"Unknown city"`._

---

## ⚠️ Restrictions | _Ograničenja_

- Optional chaining se ne koristi na **levoj strani** dodele: | _Optional chaining se ne koristi na **levoj strani** dodele:_

  ```js
  // ❌ nevažeće:
  user?.name = "Test";
  ```

---

## 📌 Explanation: | _Objašnjenje:_

Optional chaining allows you to safely access deep properties without a lot of `if (obj && obj.prop)` checks. | _Optional chaining ti omogućava bezbedan pristup dubokim svojstvima bez gomile `if (obj && obj.prop)` provera._
When any part of the chain is `null` or `undefined`, the whole expression becomes `undefined` instead of throwing an error. | _Kada bilo koji deo lanca bude `null` ili `undefined`, ceo izraz postaje `undefined` umesto da baci grešku._
Combining `?.` with `??` gives you a clean pattern: try to read a nested value, and fall back to a safe default. | _Kombinovanjem `?.` sa `??` dobijaš čist šablon: pokušaj čitanje ugnježdene vrednosti, pa pređi na podrazumevanu._
This pattern is heavily used in modern frontend codebases and in React components. | _Ovaj šablon se intenzivno koristi u modernim frontend kod bazama i u React komponentama._

---
