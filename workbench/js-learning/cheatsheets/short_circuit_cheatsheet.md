---
type: cheatsheet
topic: JavaScript Short-Circuit Evaluation
date: 2025-11-28
linked_to: js-learning/day01+day02
language: bilingual
status: draft
difficulty: beginner
audience: myself
---

# 📘 Cheatsheet: Short-Circuit Evaluation | _Short-circuit evaluacija_

## ✅ Key Concepts | _Ključni pojmovi_

- Evaluation order | _Redosled evaluacije_
- `&&` stops on first falsy | _`&&` staje na prvoj falsy vrednosti_
- `||` stops on first truthy | _`||` staje na prvoj truthy vrednosti_
- Guard clauses | _Guard uslovi_
- Lazy evaluation | _Lena evaluacija_

---

## 🧠 How short-circuit works | _Kako short-circuit radi_

### AND (`&&`) short-circuit | _AND (`&&`) short-circuit_

- If the left operand is **falsy**, right operand is **not evaluated**. | _Ako je levi operand **falsy**, desni se **ne evaluira**._

```js
false && someHeavyFunction(); // someHeavyFunction se nikad ne pozove
null && user.profile; // vraća null, ne dira user.profile
```

### OR (`||`) short-circuit | _OR (`||`) short-circuit_

- If the left operand is **truthy**, right operand is **not evaluated**. | _Ako je levi operand **truthy**, desni se **ne evaluira**._

```js
true || someHeavyFunction(); // someHeavyFunction se nikad ne pozove
"hello" || "fallback"; // vraća "hello"
```

---

## 🛡️ Guard patterns | _Guard šabloni_

### Example: safe method call | _Bezbedno pozivanje metode_

```js
user && user.login && user.login();
```

- Ako je `user` falsy → ceo izraz staje → nema greške. | _Ako je `user` falsy → ceo izraz staje → nema greške._

(Savremeniji način za ovo je optional chaining `user?.login()`.)

### Example: default values with `||` | _Podrazumevane vrednosti sa `||`_

```js
const userInput = "";
const value = userInput || "default";
// userInput je "" (falsy) → value = "default"
```

---

## 🎯 Combining with functions | _Kombinovanje sa funkcijama_

```js
function logDebug(message) {
  console.log("DEBUG:", message);
}

const debugMode = false;

// logDebug se poziva samo ako je debugMode truthy
debugMode && logDebug("Something happened");
```

```js
function getConfigValue(value, fallback) {
  return value || fallback;
}

getConfigValue("", "default"); // "default" (prazan string je falsy)
getConfigValue(0, 100); // 100 (0 je falsy)
```

---

## 📌 Explanation: | _Objašnjenje:_

Short-circuit evaluation allows you to combine checking and acting in one expression. | _Short-circuit evaluacija dozvoljava da kombiniješ proveru i akciju u jednom izrazu._
`&&` is great for “only do this if X is truthy”; `||` is great for “use default if X is falsy”. | _`&&` je sjajan za „uradi ovo samo ako je X truthy“, `||` za „koristi podrazumevanu vrednost ako je X falsy“._
Be careful with `||` when 0, empty string or NaN are valid values, because they will trigger the fallback. | _Budi pažljiv sa `||` kada su 0, prazan string ili NaN validne vrednosti, jer će pokrenuti fallback._
For handling `null` / `undefined` specifically, prefer `??` (nullish coalescing). | _Za specifično rukovanje `null` / `undefined` vrednostima, radije koristi `??` (nullish operator)._

---
