---
type: cheatsheet
topic: DOM Selection & Manipulation
date: 2025-12-09
difficulty: beginner
status: stub-ready-for-expansion
---

# 📘 JavaScript DOM Manipulation - Fundamentals

## 🎯 Šta je DOM?

**Document Object Model** - reprezentacija HTML-a kao JavaScript objekata koje možeš menjati.

```javascript
// HTML
<div class="card">
  <h1>Title</h1>
</div>;

// JavaScript - pristupa tisom elementima
const card = document.querySelector(".card");
const title = card.querySelector("h1");

// Menja sadržaj
title.textContent = "Nova Naslov";
```

---

## 🔍 Selecting Elements

### querySelector (Modern - Preporučeno)

```javascript
// Select prvi element
const element = document.querySelector(".button");

// Select sve elementy
const allButtons = document.querySelectorAll("button");

// Loop kroz sve
allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Clicked!");
  });
});
```

### getElement\* (Stari način - Izbegavaj)

```javascript
// ❌ Stariji - ne koristi
document.getElementById("main");
document.getElementsByClassName("button");
document.getElementsByTagName("div");

// ✅ Koristi querySelector umesto
document.querySelector("#main");
document.querySelectorAll(".button");
document.querySelectorAll("div");
```

---

## ✏️ Menjanje Sadržaja

```javascript
const element = document.querySelector(".text");

// Menja tekstualni sadržaj
element.textContent = "Nova tekstualni sadržaj";

// Menja HTML sadržaj (OPASNO - XSS rizik!)
element.innerHTML = "<strong>Bold text</strong>";

// Sigurniji - dodaj elemente
const newElement = document.createElement("div");
newElement.textContent = "Safe content";
element.appendChild(newElement);
```

---

## 🎨 Menjanje Klasa & Atributa

```javascript
const btn = document.querySelector("button");

// Dodaj klasu
btn.classList.add("active");

// Ukloni klasu
btn.classList.remove("active");

// Toggle klasu (on/off)
btn.classList.toggle("active");

// Proveri da li ima klasu
if (btn.classList.contains("active")) {
  console.log("Active!");
}

// Menja atribute
btn.setAttribute("data-id", "123");
btn.getAttribute("data-id"); // '123'
btn.removeAttribute("disabled");
```

---

## 🖥️ Menjanje CSS Svojstava

```javascript
const element = document.querySelector(".card");

// Direktna CSS svojstva
element.style.backgroundColor = "blue";
element.style.padding = "20px";
element.style.borderRadius = "8px";

// ILI - koristi CSS klase (preporučeno!)
element.classList.add("blue-card");
```

---

## 🎯 Events - Slušanje Radnji Korisnika

```javascript
const button = document.querySelector("button");

// Click event
button.addEventListener("click", (event) => {
  console.log("Button clicked!");
});

// Keyboard event
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    console.log("Escape pressed");
  }
});

// Form submission
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Sprečavaj default submission
  console.log("Form submitted!");
});

// Mouse events
element.addEventListener("mouseenter", () => console.log("Mouse in"));
element.addEventListener("mouseleave", () => console.log("Mouse out"));
```

---

## ✅ Best Practices

1. **Koristi querySelector/querySelectorAll**
2. **Izbjegavaj direktnu manipulaciju HTML-a** (`innerHTML`)
3. **Koristi event delegation za dinamičke elemente**
4. **Uvek removi event listeners** kada više nisu potrebni

---

**Kreirano:** 2025-12-09 | **Status:** Stub Ready for Expansion
