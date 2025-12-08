---
type: cheatsheet
topic: JavaScript Equality Operators (== vs ===)
date: 2025-11-28
linked_to: js-learning/day01+day02
language: bilingual
status: draft
difficulty: beginner
audience: myself
---

# 📘 Cheatsheet: Equality Operators (== vs ===) | _Operatori jednakosti (== naspram ===)_

## ✅ Key Concepts | _Ključni pojmovi_

- Equality operator (`==`) | _Operator jednakosti (`==`)_
- Strict equality operator (`===`) | _Operator striktne jednakosti (`===`)_
- Type coercion | _Konverzija tipova (coercion)_
- Reference equality | _Poređenje po referenci_

---

## ⚖️ Equality vs Strict Equality | _Jednakost vs striktna jednakost_

### ✅ `==` (loose equality) | _`==` (labava jednakost)_

- Compares values **after automatic type conversion**. | _Poredi vrednosti **posle automatske konverzije tipova**._
- Može dovesti do neočekivanih rezultata. | _Može dovesti do neočekivanih rezultata._

Primeri:

```js
"42" == 42; // true
true == 1; // true
false == 0; // true
"" == 0; // true
null == undefined; // true
```

### ✅ `===` (strict equality) | _`===` (striktna jednakost)_

- Compares **value AND type**. | _Poredi **i vrednost i tip**._
- Ne radi automatsku konverziju. | _Ne radi automatsku konverziju tipova._
- Preporučeni operator u modernom JS. | _Preporučeni operator u modernom JS-u._

Primeri:

```js
"42" === 42; // false
42 === 42; // true
true === 1; // false
false === 0; // false
null === undefined; // false
```

---

## 🧪 Practical examples | _Praktični primeri_

```js
const age = "18";

// bad: loose equality
if (age == 18) {
  console.log("You are 18 (with coercion).");
}

// good: strict equality + explicit conversion
if (Number(age) === 18) {
  console.log("You are 18 (strict + explicit conversion).");
}
```

```js
// comparing objects (reference equality)
const a = { value: 10 };
const b = { value: 10 };
const c = a;

console.log(a === b); // false (različiti objekti u memoriji)
console.log(a === c); // true  (ista referenca)
```

---

## 🚩 Common pitfalls | _Česte zamke_

```js
0 == false; // true
"" == false; // true
"0" == false; // true (!)
null == undefined; // true
```

```js
0 === false; // false
"" === false; // false
"0" === false; // false
null === undefined; // false
```

---

## 📌 Explanation: | _Objašnjenje:_

Use `===` for almost all comparisons to avoid unexpected type coercion. | _Koristi `===` za gotovo sva poređenja da izbegneš neočekivanu konverziju tipova._
Reserve `==` only when you **very clearly** want JS coercion (and znaš tačno šta radi). | _Koristi `==` samo kada **vrlo jasno** želiš JS konverziju tipova (i tačno znaš šta radi)._
Objects and arrays are compared by reference, not by contents. | _Objekti i nizovi se porede po referenci, a ne po sadržaju._
Always combine equality checks with explicit conversions (`Number()`, `String()`, `Boolean()`) for readability. | _Uvek kombinuј poređenja sa eksplicitnim konverzijama (`Number()`, `String()`, `Boolean()`) radi čitljivosti._

---
