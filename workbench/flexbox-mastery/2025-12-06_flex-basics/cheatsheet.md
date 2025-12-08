---
type: cheatsheet
topic: CSS Flexbox - Fundamentals (Day 1)
date: 2025-12-06
linked_to: flexbox-mastery
language: bilingual
status: active
difficulty: intermediate
audience: myself
recommended_by: myself
---

# 📘 Cheatsheet: CSS Flexbox Basics (Dan 1)

---

## ✅ Key Concepts

1. **Flex Container** | _Flex kontejner_ = Parent element sa `display: flex`
2. **Flex Items** | _Flex stavke_ = Child elementi unutar flex kontejnera
3. **Main Axis** | _Glavna osa_ = Pravac u kojem se flex items poredaju (x-osa kod row, y-osa kod column)
4. **Cross Axis** | _Poprečna osa_ = Osa okomita na main axis
5. **Flex Direction** | _Flex pravac_ = Određuje main axis (`row`, `column`, `row-reverse`, `column-reverse`)
6. **1D Layout** | _1D Layout_ = Flexbox raspoređuje elemente u jednoj dimenziji (red ILI kolona, ne oba)

---

## 📌 Blok 1: Flex Container Basics

### Osnovna Sintaksa

```css
/* Pretvori element u flex kontejner */
.container {
  display: flex;
}

/* Svi direktni children (.container > *) postaju flex items */
```

### Šta se dešava automatski?

- ✅ Svi child elementi postaju **flex items**
- ✅ Postavljaju se u red (horizontalno) po defaultu
- ✅ Svi flex items se mogu fleksibilno promeniti veličinu
- ✅ Vertikalno se poravnavaju na `stretch` (ispunjavaju visinu)

### Vizuelno | _Vizuelno_

```
PRE (bez display: flex):
[Item 1 - full width]
[Item 2 - full width]
[Item 3 - full width]

POSLE (sa display: flex):
[Item 1] [Item 2] [Item 3]  <- Svi u jednom redu!
```

---

## 📌 Blok 2: Flex Direction

Određuje **pravac** u kojem se flex items poredaju.

### 4 Vrednosti

```css
.container {
  display: flex;
  flex-direction: row; /* Default - items u redu (LEVO-DESNO) */
  flex-direction: row-reverse; /* Items u redu (DESNO-LEVO) */
  flex-direction: column; /* Items u koloni (GORE-DOLE) */
  flex-direction: column-reverse; /* Items u koloni (DOLE-GORE) */
}
```

### Vizuelno - Main Axis se menja

```
flex-direction: row (Default)
Main Axis ------>
[Item 1] [Item 2] [Item 3]

flex-direction: column
Main Axis
|
v
[Item 1]
[Item 2]
[Item 3]

flex-direction: row-reverse
Main Axis <------
[Item 3] [Item 2] [Item 1]

flex-direction: column-reverse
Main Axis
^
|
[Item 3]
[Item 2]
[Item 1]
```

### Praktični primeri | _Praktični primeri_

```html
<!-- Navigation bar horizontalno -->
<nav class="navbar">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>

<style>
  .navbar {
    display: flex;
    flex-direction: row; /* Items u redu - STANDARD za navbar */
  }
</style>

<!-- Vertikalni menu -->
<aside class="sidebar">
  <button>Profile</button>
  <button>Settings</button>
  <button>Logout</button>
</aside>

<style>
  .sidebar {
    display: flex;
    flex-direction: column; /* Items u koloni - STANDARD za sidebar */
  }
</style>
```

---

## 📌 Blok 3: Flex Wrap

Kontroliše šta se dešava kada flex items ne stanu u jedan red/kolonu.

### Tri vrednosti

```css
.container {
  display: flex;
  flex-wrap: nowrap; /* Default - items ostaju u liniji, kompresuju se */
  flex-wrap: wrap; /* Items se prebacuju u novi red/kolonu */
  flex-wrap: wrap-reverse; /* Items se prebacuju, ali obrnuto */
}
```

### Vizuelno | _Vizuelno_

```
Scenario: 5 items u kontejneru koji može da drži samo 3

flex-wrap: nowrap (Default - "Stisni ih!")
[Item 1 - mali] [Item 2 - mali] [Item 3 - mali] [Item 4 - mali] [Item 5 - mali]
                          ↑
                    (items se skupljaju)

flex-wrap: wrap (Novi red)
[Item 1] [Item 2] [Item 3]
[Item 4] [Item 5]

flex-wrap: wrap-reverse (Novi red, obrnuto)
[Item 4] [Item 5]
[Item 1] [Item 2] [Item 3]
```

### Kombinovanja | _Kombinovanja_

```css
/* Horizontalni responsive grid bez media queries */
.container {
  display: flex;
  flex-direction: row; /* Redovi */
  flex-wrap: wrap; /* Prelom kada treba */
}

.item {
  width: 25%; /* 4 items po redu */
  /* Ili koristi flex-basis - naučićeš u Dan 3 */
}

/* Vertikalni scroll - items koji ne stanu idu dolje */
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 400px; /* Ograničena visina */
}
```

---

## 📌 Blok 4: Main Axis & Cross Axis (VAŽNO!)

Ovo je **koncept** koji razlikuje Flexbox od ostalih. MORA da bude jasan!

### Šta je Main Axis?

- **Main Axis** = Pravac u kojem se Flexbox items poredaju
- Određen je sa `flex-direction`
- **Ako `flex-direction: row`** → Main Axis = Horizontalno (levo-desno)
- **Ako `flex-direction: column`** → Main Axis = Vertikalno (gore-dole)

### Šta je Cross Axis?

- **Cross Axis** = Osa okomita na Main Axis
- **Ako je Main Axis horizontalno** → Cross Axis = Vertikalno
- **Ako je Main Axis vertikalno** → Cross Axis = Horizontalno

### Tabelarno Objašnjenje

| `flex-direction` | Main Axis        | Cross Axis       | Grafički          |
| ---------------- | ---------------- | ---------------- | ----------------- |
| `row`            | ← → (horizontal) | ↑ ↓ (vertical)   | `[1] [2] [3]`     |
| `column`         | ↑ ↓ (vertical)   | ← → (horizontal) | `[1]` `[2]` `[3]` |
| `row-reverse`    | ← → (horizontal) | ↑ ↓ (vertical)   | `[3] [2] [1]`     |
| `column-reverse` | ↑ ↓ (vertical)   | ← → (horizontal) | `[3]` `[2]` `[1]` |

### Vizuelno - Ose sa `flex-direction: row`

```
                     Cross Axis (↑ ↓)
                           |
                           v
Main Axis (→) --> [Item 1] [Item 2] [Item 3]
```

### Vizuelno - Ose sa `flex-direction: column`

```
Main Axis
(↓)
|
v
[Item 1]
[Item 2]
[Item 3]
←──────→
Cross Axis (horizontal)
```

### Zašto je ovo važno?

**U sledećem danu (Dan 2):**

- `justify-content` radi na **Main Axis** (poravnavanje u pravcu flex-direction-a)
- `align-items` radi na **Cross Axis** (poravnavanje okomito na flex-direction)

Ako ne razumeš ove ose, biće ti zbunjujuće zašto `justify-content: center` ponekad radi horizonzalno a ponekad vertikalno. **Odgovor: jer se Main Axis menja sa flex-direction!**

---

## 💡 Explanation & Examples

### Primer 1: Flex Container sa `display: flex`

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<style>
  .container {
    display: flex; /* Pretvori u flex kontejner */
    border: 2px solid blue;
    padding: 10px;
  }

  .item {
    width: 100px;
    height: 100px;
    background: lightcoral;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

OUTPUT: ┌─────────────────────────────────────┐ │ [ 1 ] [ 2 ] [ 3 ] │
└─────────────────────────────────────┘
```

### Primer 2: Flex Direction - Row vs Column

```html
<!-- Ista HTML, drugačiji CSS -->

<!-- flex-direction: row (default) -->
<div class="container row">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>

<!-- flex-direction: column -->
<div class="container column">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>

<style>
  .container {
    display: flex;
    width: 300px;
    gap: 10px; /* Razmak između items */
  }

  .container.row {
    flex-direction: row;
  }

  .container.column {
    flex-direction: column;
    margin-top: 20px;
  }

  .container div {
    background: lightblue;
    padding: 20px;
    text-align: center;
  }
</style>

OUTPUT (row): ┌──────────────────────────────────────┐ │ [A] [B] [C] │
└──────────────────────────────────────┘ OUTPUT (column):
┌──────────────────────────────────────┐ │ [A] │ │ [B] │ │ [C] │
└──────────────────────────────────────┘
```

### Primer 3: Flex Wrap za Responsive Grid

```html
<div class="container">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
  <div class="card">4</div>
  <div class="card">5</div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 500px;
  }

  .card {
    width: 150px; /* 3 kartice po redu (150 * 3 = 450px) */
    height: 150px;
    background: lightgreen;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
</style>

OUTPUT: ┌──────────────────────────────────┐ │ [1] [2] [3] │ │ [4] [5] │
└──────────────────────────────────┘ (Card 4 i 5 se prebacuju u novi red jer ne
staju)
```

---

## 🎯 Quick Reference Table

| Svojstvo         | Vrednosti                                        | Gde se primenjuje | Šta radi             |
| ---------------- | ------------------------------------------------ | ----------------- | -------------------- |
| `display`        | `flex`                                           | Container         | Aktivira Flexbox     |
| `flex-direction` | `row`, `row-reverse`, `column`, `column-reverse` | Container         | Određuje Main Axis   |
| `flex-wrap`      | `nowrap`, `wrap`, `wrap-reverse`                 | Container         | Prelom stavki        |
| `gap`            | `10px`, `10px 20px`                              | Container         | Razmak između stavki |

---

## 📥 Related Topics (Za kasnije)

- **Dan 2:** `justify-content`, `align-items`, `align-content` (poravnavanje)
- **Dan 3:** `flex-grow`, `flex-shrink`, `flex-basis`, `flex` (veličina stavki)
- **Dan 4:** `order` (preured zatvorenost)
- **Grid:** CSS Grid za 2D layoute

---

## 🔗 Resources

- [MDN Flexbox Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Interactive Flexbox Game](https://flexboxfroggy.com/)

---

**Sada pogledaj `exercises/` fajlove i počni sa vežbanjem!** 💪
