# JavaScript Starter Pack | _Početni paket za JavaScript_

## 🎯 Purpose | _Svrha_

Short, practical overview of core JavaScript concepts every junior needs before building real projects. | _Kratak, praktičan pregled ključnih JS koncepata koje svaki junior mora da zna pre rada na pravim projektima._

---

## 1️⃣ Mental model of JavaScript | _Mentalni model JavaScripta_

- JavaScript is single-threaded and event-driven. | _JavaScript je “single-threaded” i event-driven jezik._
- Code runs in an execution context inside a JS engine (Chrome: V8). | _Kod se izvršava u execution contextu unutar JS engine-a (npr. V8 u Chrome-u)._
- Browser environment adds Web APIs (DOM, fetch, timers) on top of the JS engine. | _Browser okruženje dodaje Web API-je (DOM, fetch, tajmeri) povrh samog JS engine-a._
- Node.js provides a server-side environment with its own APIs (fs, http, itd.). | _Node.js obezbeđuje serversko okruženje sa sopstvenim API-jima (fs, http itd.)._
- The event loop coordinates synchronous code and queued callbacks (setTimeout, DOM events, promises). | _Event loop koordinira sinhroni kod i callbackove u redu (setTimeout, DOM događaji, promises)._

---

## 2️⃣ Values and types | _Vrednosti i tipovi_

- JavaScript has primitive and reference types. | _JavaScript ima primitivne i referentne tipove._
- Primitive: string, number, boolean, null, undefined, bigint, symbol. | _Primitivi: string, number, boolean, null, undefined, bigint, symbol._
- Reference: objects, arrays, functions, Date, itd. | _Referentni tipovi: objekti, nizovi, funkcije, Date itd._
- typeof is used to inspect type, but has quirks (typeof null === "object"). | _typeof se koristi za proveru tipa, ali ima “čudne” slučajeve (typeof null === "object")._
- Values are compared with `===` for strict equality (no type coercion). | _Vrednosti se upoređuju sa `===` za strogu jednakost (bez type coercion-a)._

```js
const age = 39; // number
const name = "Jole"; // string
const isDev = true; // boolean
const nothing = null; // null
let notDefined; // undefined

console.log(typeof age); // "number"
console.log(typeof isDev); // "boolean"
console.log(typeof nothing); // "object" (quirk)
```

---

## 3️⃣ Variables and bindings | _Promenljive i vezivanje_

- Use `let` for values that change, `const` for values that should not be reassigned. | _Koristi `let` za vrednosti koje se menjaju, `const` za vrednosti koje se ne re-dodeljuju._
- Avoid `var` in modern code (function-scoped, hoisting quirks). | _Izbegavaj `var` u modernom kodu (function scope, hoisting problemi)._
- Variables are block-scoped with `let` and `const`. | _Promenljive sa `let` i `const` imaju blok domen (block scope)._
- Always declare variables before using them. | _Uvek deklarisi promenljivu pre upotrebe._

```js
const maxItems = 10;
let counter = 0;

counter += 1;
// maxItems = 20 // ❌ TypeError – const ne može da se re-dodeli
```

---

## 4️⃣ Expressions and operators | _Izrazi i operatori_

- Expressions produce a value (`1 + 2`, `user.name`, `callFunc()`). | _Izrazi proizvode vrednost (`1 + 2`, `user.name`, `callFunc()`)._
- Common operators: `+ - * / % **`, comparison (`===`, `!==`, `<`, `>`), logical (`&&`, `||`, `!`). | _Česti operatori: `+ - _ / % \*_`, poređenje (`===`, `!==`, `<`, `>`), logički (`&&`, `||`, `!`)._
- `==` performs type coercion; prefer `===` to avoid surprises. | _`==` vrši konverziju tipa; koristi `===` da izbegneš iznenađenja._
- Short-circuiting: `a && b` returns `b` only if `a` is truthy; `a || b` returns `a` if truthy. | _Short-circuit: `a && b` vraća `b` samo ako je `a` truthy; `a || b` vraća `a` ako je truthy._

```js
const a = 0;
const b = 5;

console.log(a || b); // 5
console.log(a && b); // 0
```

---

## 5️⃣ Control flow | _Kontrola toka programa_

- `if / else if / else` branches logic based on boolean conditions. | _`if / else if / else` menja tok koda na osnovu uslova._
- `switch` is useful when checking many possible values of one expression. | _`switch` je koristan kada proveravaš više vrednosti jedne promenljive._
- Loops: `for`, `while`, `do...while`, `for...of`, `for...in` (oprez sa `for...in`). | _Petlje: `for`, `while`, `do...while`, `for...of`, `for...in` (oprez sa `for...in`)._
- Use `break` to exit loops, `continue` to skip current iteration. | _`break` prekida petlju, `continue` preskače trenutnu iteraciju._

```js
for (let i = 0; i < 3; i += 1) {
  console.log(i);
}

const items = ["HTML", "CSS", "JS"];
for (const tech of items) {
  console.log(tech);
}
```

---

## 6️⃣ Functions | _Funkcije_

- Functions group reusable logic. | _Funkcije grupišu logiku koja se ponavlja._
- Declaration: `function name() {}` is hoisted (available before definition). | _Deklaracija: `function name() {}` je hoistovana (dostupna pre definicije)._
- Function expressions and arrow functions are assigned to variables. | _Functionske izraze i arrow funkcije dodeljuješ promenljivama._
- Functions can take parameters and return values. | _Funkcije mogu imati parametre i vraćati vrednosti._

```js
// Function declaration
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
```

---

## 7️⃣ Scope, closures and hoisting | _Scope, closure i hoisting_

- Scope defines where a variable is visible. | _Scope definiše gde je promenljiva vidljiva._
- Block scope: anything inside `{ ... }` (if, for, function). | _Block scope: sve unutar `{ ... }` (if, for, function)._
- Closures: inner function remembers variables from outer scope. | _Closure: unutrašnja funkcija pamti promenljive spoljnog scope-a._
- Hoisting: function declarations and `var` are moved to top of their scope during compilation. | _Hoisting: deklaracije funkcija i `var` se logički “podignu” na vrh scope-a pri kompajliranju._

```js
function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
// Closure: inner function i dalje “vidi” count
```

---

## 8️⃣ Arrays and objects | _Nizovi i objekti_

- Arrays store ordered lists of values. | _Nizovi čuvaju uređenu listu vrednosti._
- Objects store key–value pairs. | _Objekti čuvaju parove ključ–vrednost._
- Common array methods: `push`, `pop`, `map`, `filter`, `find`, `forEach`. | _Česti array metodi: `push`, `pop`, `map`, `filter`, `find`, `forEach`._
- Destructuring extracts values into variables. | _Destrukturiranje izvlači vrednosti u promenljive._
- Spread (`...`) kopira ili spaja nizove/objekte. | _Spread (`...`) kopira ili spaja nizove/objekte._

```js
const skills = ["HTML", "CSS", "JS"];
const [firstSkill, ...rest] = skills;

const user = {
  name: "Jole",
  role: "Student dev",
};

const { name, role } = user;

console.log(firstSkill); // "HTML"
console.log(rest); // ["CSS", "JS"]
console.log(name, role);
```

---

## 9️⃣ The DOM and the browser | _DOM i browser_

- DOM (Document Object Model) is a tree representation of the HTML page. | _DOM je drvo koje predstavlja HTML stranicu._
- JavaScript can read and modify the DOM (query, change text, add/remove elements). | _JavaScript može da čita i menja DOM (traži elemente, menja tekst, dodaje/uklanja elemente)._
- Query methods: `getElementById`, `querySelector`, `querySelectorAll`. | _Metodi za pronalaženje: `getElementById`, `querySelector`, `querySelectorAll`._
- Changing content: `textContent`, `innerHTML`, `classList`, `style`. | _Promena sadržaja: `textContent`, `innerHTML`, `classList`, `style`._

```js
const button = document.querySelector(".accordion-trigger");

button.addEventListener("click", () => {
  console.log("Accordion clicked");
});
```

---

## 🔟 Events | _Događaji_

- Events describe what happens in the browser (click, input, keydown, submit, load). | _Događaji opisuju šta se dešava u browseru (click, input, keydown, submit, load)._
- You listen to events with `addEventListener`. | _Na događaje reaguješ pomoću `addEventListener`._
- The callback receives an event object with details (target, key, etc.). | _Callback prima event objekat sa detaljima (target, key, itd.)._
- Always remove listeners for elements that are removed from the DOM in large apps. | _U većim aplikacijama uklanjaj listenere za elemente koji se uklanjaju iz DOM-a._

```js
document.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    console.log("User pressed Tab");
  }
});
```

---

## 1️⃣1️⃣ Modules (import / export) | _Moduli (import / export)_

- Modern JS uses ES modules (`import` / `export`). | _Moderni JS koristi ES module (`import` / `export`)._
- Each file can be treated as a module with its own scope. | _Svaki fajl može biti modul sa svojim sopstvenim scope-om._
- `export` exposes values, `import` brings them into another file. | _`export` izlaže vrednosti, `import` ih uvlači u drugi fajl._

```js
// math-utils.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from "./math-utils.js";

console.log(add(2, 3));
```

---

## 1️⃣2️⃣ Error handling and debugging | _Hvatanje grešaka i debugovanje_

- Use `console.log` for quick inspection of values. | _Koristi `console.log` za brzu proveru vrednosti._
- Use browser DevTools (Sources tab) to set breakpoints and step through code. | _Koristi DevTools (Sources tab) za breakpointe i prolazak kroz kod korak po korak._
- Use `try / catch` to handle expected runtime errors. | _Koristi `try / catch` za hvatanje očekivanih runtime grešaka._

```js
try {
  const result = JSON.parse("{ invalid json }");
  console.log(result);
} catch (error) {
  console.error("Parsing failed:", error.message);
}
```

---

## ✅ What to master first from this pack | _Šta prvo da savladaš iz ovog paketa_

- Variables (`let`, `const`), types and basic operators. | _Promenljive (`let`, `const`), tipovi i osnovni operatori._
- Functions, parameters, return values. | _Funkcije, parametri i povratne vrednosti._
- Arrays + objects + petlje nad njima (`for`, `for...of`, `map`, `filter`). | _Nizovi + objekti + petlje nad njima (`for`, `for...of`, `map`, `filter`)._
- DOM selektovanje i `addEventListener`. | _DOM selekcija i `addEventListener`._
- Osnovni mentalni model: single-threaded, event loop. | _Osnovni mentalni model: single-threaded, event loop._

Ako ovo postane “mišićna memorija”, ostatak JS-a (moduli, async/await, fetch, itd.) biće mnogo lakši za tebe. | _Ako ovo postane “mišićna memorija”, ostatak JS-a (moduli, async/await, fetch itd.) biće ti znatno lakši._

---
