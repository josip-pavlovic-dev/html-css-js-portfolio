---
type: cheatsheet
topic: JavaScript Logical Operators (&&, ||, !)
date: 2025-11-28
linked_to: js-learning/day01+day02
language: bilingual
status: draft
difficulty: beginner
audience: myself
---

# 📘 Cheatsheet: Logical Operators (&&, ||, !) | _Logički operatori (&&, ||, !)_

## ✅ Key Concepts | _Ključni pojmovi_

- Logical AND (`&&`) | _Logičko I (`&&`)_
- Logical OR (`||`) | _Logičko ILI (`||`)_
- Logical NOT (`!`) | _Logičko NE (`!`)_
- Truthy / falsy values | _Truthy / falsy vrednosti_
- Short-circuit behavior | _Short-circuit ponašanje_

---

## ⚙️ Logical AND (`&&`) | _Logičko I (`&&`)_

- Returns **first falsy value**, or **last value** if all are truthy. | _Vraća **prvu falsy vrednost**, ili **poslednju vrednost** ako su sve truthy._
- Evaluates from left to right. | _Evaluira sleva nadesno._

Primeri:

```js
true && true; // true
true && false; // false
"hello" && 42; // 42   (oba su truthy, vraća drugi operand)
"" && "world"; // ""   (prazan string je falsy)
0 && "test"; // 0
```

Tipična upotreba:

```js
user && user.isAdmin;
// ako je user falsy → izraz se prekida i vraća user (npr. null)
// ako je user truthy → vraća user.isAdmin
```

---

## ⚙️ Logical OR (`||`) | _Logičko ILI (`||`)_

- Returns **first truthy value**, or **last value** if all are falsy. | _Vraća **prvu truthy vrednost**, ili **poslednju vrednost** ako su sve falsy._

Primeri:

```js
true || false; // true
false || false; // false
"" || "default"; // "default"
0 || 42; // 42
null || "fallback"; // "fallback"
```

Tipična upotreba (default vrednosti):

```js
const input = ""; // korisnik ništa nije uneo
const value = input || "default value"; // "default value"
```

---

## ⚙️ Logical NOT (`!`) | _Logičko NE (`!`)_

- Converts value to boolean and negates it. | _Pretvara vrednost u boolean i negira je._

Primeri:

```js
!true; // false
!false; // true
!0; // true
!1; // false
!"hello"; // false
!""; // true
```

Double negation (`!!`) – eksplicitna konverzija u boolean:

```js
!!"hello"; // true
!!""; // false
!!0; // false
!!7; // true
```

---

## 📌 Explanation: | _Objašnjenje:_

Logical operators work on any value, not just booleans, and return one of the original operands. | _Logički operatori rade nad bilo kojom vrednošću, ne samo nad booleanima, i vraćaju jedan od originalnih operanada._
`&&` is often used as a guard: if the first value is falsy, the second is not evaluated. | _`&&` se često koristi kao "čuvar": ako je prva vrednost falsy, druga se uopšte ne evaluira._
`||` is often used for default values, but remember it treats many values (0, "", NaN) as falsy. | _`||` se često koristi za podrazumevane vrednosti, ali mnoge vrednosti (0, "", NaN) tretira kao falsy._
`!` and `!!` are useful for explicit boolean conversion when you want to be clear in conditions. | _`!` i `!!` su korisni za eksplicitnu konverziju u boolean kada želiš jasnoću u uslovima._

---
