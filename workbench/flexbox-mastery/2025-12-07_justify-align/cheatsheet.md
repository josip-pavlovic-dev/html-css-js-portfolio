---
type: cheatsheet
topic: CSS Flexbox - Justify-Content & Align-Items (Day 2)
date: 2025-12-07
linked_to: flexbox-mastery
language: bilingual
status: active
difficulty: intermediate
audience: myself
---

# 📘 Cheatsheet: Justify-Content & Align-Items (Dan 2)

## ✅ Key Concepts

1. **justify-content** | _Poravnavanje na Main Axis_ = Kako se stavke redaju u pravcu flex-direction-a
2. **align-items** | _Poravnavanje na Cross Axis_ = Kako se stavke poravnavaju okomito na flex-direction
3. **align-content** | _Multiline Poravnavanje_ = Za flex-wrap: wrap, kako se redovi/kolone poravnavaju

---

## 📌 justify-content (Main Axis)

Radi na **Main Axis** (pravac gde se stavke redaju).

### 6 Vrednosti

```css
.container {
  display: flex;
  justify-content: flex-start; /* Default - stavke na početak */
  justify-content: flex-end; /* Stavke na kraj */
  justify-content: center; /* Stavke u centru */
  justify-content: space-between; /* Razmak između stavki */
  justify-content: space-around; /* Razmak oko stavki */
  justify-content: space-evenly; /* Jednak razmak svuda */
}
```

### Vizuelni Pregled

```
flex-direction: row (Main = horizontal)

flex-start (Default)
[1] [2] [3]               |

flex-end
                [1] [2] [3]

center
         [1] [2] [3]

space-between
[1]                [2]    [3]

space-around
  [1]      [2]      [3]

space-evenly
   [1]     [2]     [3]
```

---

## 📌 align-items (Cross Axis)

Radi na **Cross Axis** (osa okomita na main axis).

### 5 Vrednosti

```css
.container {
  display: flex;
  align-items: stretch; /* Default - ispunjava celu Cross Axis */
  align-items: flex-start; /* Stavke na početak Cross Axis */
  align-items: flex-end; /* Stavke na kraj Cross Axis */
  align-items: center; /* Stavke u centru Cross Axis */
  align-items: baseline; /* Poravnava se po tekstu (retko) */
}
```

### Vizuelni Pregled (sa flex-direction: row)

```
Visina kontejnera = 200px, Cross Axis = vertikalno

stretch (Default)
[1 - 200px] [2 - 200px] [3 - 200px]

flex-start
[1]         [2]         [3]
            (na vrhu)

flex-end
            (na dnu)
[1]         [2]         [3]

center
            (u sredini)
[1]         [2]         [3]

baseline
[1]         [2]         [3]
(po tekstu)
```

---

## 📌 align-content (Za flex-wrap: wrap)

Kada koristiš `flex-wrap: wrap`, stavke se prebacuju u nove redove.
`align-content` kontrolira kako se ti REDOVI poravnavaju na Cross Axis.

### Vrednosti (Iste kao justify-content)

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: space-evenly;
  align-content: stretch; /* Default */
}
```

---

## 💡 Kombinovanje justify-content + align-items = SAVRŠENO CENTRIRANJE

```css
/* Centiriraj element i horizontalno i vertikalno */
.container {
  display: flex;
  width: 400px;
  height: 400px;
  border: 2px solid red;

  /* Main Axis (horizontal) */
  justify-content: center;

  /* Cross Axis (vertical) */
  align-items: center;
}

.item {
  width: 100px;
  height: 100px;
  background: blue;
}

/*
Rezultat: Plavi kvadrat je SAVRŠENO CENTRIRAN
u crvenoj 400x400px kockici
*/
```

---

## 📊 Decision Tree - Koja svojstva koristiti?

```
Trebalo bi da centram element?

├─ Samo HORIZONTALNO? (flex-direction: row)
│  └─ Koristi: justify-content: center;
│
├─ Samo VERTIKALNO? (flex-direction: row)
│  └─ Koristi: align-items: center;
│
├─ HORIZONTALNO I VERTIKALNO?
│  └─ Koristi: justify-content: center; + align-items: center;
│
├─ Trebalo bi razmak između stavki?
│  └─ Koristi: justify-content: space-between;
│
└─ Trebalo bi razmak oko stavki (marže)?
   └─ Koristi: justify-content: space-around;
```

---

## 🎯 Praktični Primeri

### Primer 1: Navbar sa Centrom Logo i Button Desno

```html
<nav class="navbar">
  <img src="logo.png" class="logo" />
  <button class="login">Login</button>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between; /* Logo levo, Button desno */
    align-items: center; /* Vertikalno centrano */
    padding: 1rem;
    background: #333;
  }

  .login {
    margin-left: auto; /* Alternativa: push na desno */
  }
</style>
```

### Primer 2: Card sa Centrom Sadržaja

```html
<div class="card">
  <h2>Hello!</h2>
  <p>Sadržaj</p>
  <button>Click Me</button>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertikalno (jer column) */
    align-items: center; /* Horizontalno (jer column) */
    width: 300px;
    height: 400px;
    text-align: center; /* Za tekst */
  }
</style>
```

### Primer 3: Grid sa Space Between

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Razmak između stavki */
    gap: 10px;
    max-width: 500px;
  }

  .item {
    width: calc(50% - 5px); /* 2 po redu */
    height: 150px;
    background: lightblue;
  }
</style>
```

---

## 🔄 Kako se Svojstva Menjaju sa flex-direction

| flex-direction | justify-content radi | align-items radi  |
| -------------- | -------------------- | ----------------- |
| `row`          | Horizontalno (←→)    | Vertikalno (↑↓)   |
| `column`       | Vertikalno (↑↓)      | Horizontalno (←→) |

**Zaključak:** Ista svojstva, ali se ponašaju drugačije jer se Main/Cross axis menja!

---

## 📥 Related Topics

- **Dan 1:** flex-direction, flex-wrap, container basics ✅
- **Dan 2:** justify-content, align-items, align-content ← TI SI OVDE
- **Dan 3:** flex-grow, flex-shrink, flex-basis
- **Grid:** CSS Grid za 2D layoute

---

## 🔗 Resources

- [MDN justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
- [MDN align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
- [CSS Tricks](https://css-tricks.com/almanac/properties/j/justify-content/)
- [Interactive Game - Flexbox Froggy](https://flexboxfroggy.com/) (nivoi 11-17)

---

**Sada pogledaj `exercises/` i počni sa Vežbom 1!** 💪
