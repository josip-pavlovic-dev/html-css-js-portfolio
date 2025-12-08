---
type: cheatsheet
topic: CSS Flexbox - Properties (Day 3 - Expert)
date: 2025-12-08
linked_to: flexbox-mastery
language: bilingual
status: active
difficulty: expert
audience: myself
---

# 📘 Cheatsheet: Flex Properties (Dan 3 - Expert Level)

## ✅ Key Concepts

1. **flex-grow** | _Rast stavke_ = Kako stavka RASTE kada ima dostupnog prostora (default: 0)
2. **flex-shrink** | _Skupljanje stavke_ = Kako stavka PADA kada nema prostora (default: 1)
3. **flex-basis** | _Bazna veličina_ = "Starting width/height" pre nego što se raste/skuplja (default: auto)
4. **flex** | _Shorthand_ = Kombinovani `flex: grow shrink basis` (npr. `flex: 1`)
5. **Proporcionalni Rast** | _Proporcionalan Rast_ = Sve stavke sa `flex-grow: 1` rastu proporcionalno

---

## 📌 flex-grow (Rast Stavke)

Koliko će stavka da RASTE kada ima dostupnog prostora.

### Osnovna Sintaksa

```css
.item {
  flex-grow: 0; /* Default - ne raste */
  flex-grow: 1; /* Raste proporcionalno */
  flex-grow: 2; /* Raste DVE PUTA više od ostalih */
}
```

### Primer - Kako Raste

```
Kontejner: 800px
3 stavke sa flex-grow: 0 (default)
[200px] [200px] [200px] + [200px prazno]
          ↑
     Prazno mesto se ignoriše

3 stavke sa flex-grow: 1 (svi rastu)
[266px] [267px] [267px]
  ↑ Rastu proporcionalno! (800/3 = ~266px svaka)

Stavka 1: flex-grow: 1
Stavka 2: flex-grow: 2
Stavka 3: flex-grow: 1
[200px] [400px] [200px]
        ↑ DVE PUTA VIŠE jer grow je 2!
```

### Praktični Primeri

```css
/* Navbar - Logo fiksno, meni raste */
.navbar {
  display: flex;
  gap: 1rem;
}

.navbar .logo {
  width: 150px;
  flex-grow: 0; /* Ostaje 150px */
}

.navbar .menu {
  flex-grow: 1; /* Raste i popunjava sve preostalo */
}

.navbar .button {
  width: 100px;
  flex-grow: 0; /* Ostaje 100px */
}

/* Rezultat: Logo [150px] | Menu [popunjava sredinu] | Button [100px] */
```

---

## 📌 flex-shrink (Skupljanje Stavke)

Koliko će stavka da PADA kada nema dovoljno prostora.

### Osnovna Sintaksa

```css
.item {
  flex-shrink: 0; /* Ne pada - zadržava veličinu */
  flex-shrink: 1; /* Default - pada proporcionalno */
  flex-shrink: 2; /* Pada DVE PUTA više od ostalih */
}
```

### Primer - Kako Pada

```
Kontejner: 300px
3 stavke po 150px (ukupno 450px)

flex-shrink: 1 (svi padaju proporcionalno)
[100px] [100px] [100px]  ← Svi se skupljaju do 100px
  ↑ Gubitak: 150px / 3 stavke = 50px po stavki

Stavka 1: flex-shrink: 0 (NE pada)
Stavka 2: flex-shrink: 1 (pada)
Stavka 3: flex-shrink: 1 (pada)
[150px] [75px] [75px]
  ↑ Ostaje 150px! Ostale dve dele gubitak
```

### Praktični Primeri

```css
/* Sidebar koji se ne smanjuje, ostalo pada */
.layout {
  display: flex;
}

.sidebar {
  width: 300px;
  flex-shrink: 0; /* Uvek ostaje 300px */
}

.main {
  flex-shrink: 1; /* Pada da napravi mesta za sidebar */
}

/* Responsivno: Na mobilnom, sidebar se skriva, main koristi sve */
```

---

## 📌 flex-basis (Bazna Veličina)

"Starting width/height" pre nego što se `flex-grow` i `flex-shrink` primene.

### Osnovna Sintaksa

```css
.item {
  flex-basis: auto; /* Default - koristi width */
  flex-basis: 200px; /* Počni sa 200px, zatim raste/pada */
  flex-basis: 25%; /* Počni sa 25% od kontejnera */
}
```

### Primer - Bazna Veličina

```
Scenario: 3 stavke u 600px kontejneru

flex-basis: auto (koristi width)
.item { width: 100px; }
[100px] [100px] [100px] + [300px prazno]
  ↑ Počinju sa 100px

flex-basis: 150px (počni sa 150px)
.item { flex-basis: 150px; flex-grow: 1; }
[200px] [200px] [200px]
  ↑ Počinju sa 150px, rastu do 200px jer flex-grow: 1

flex-basis: 0 (počni sa 0, onda raste)
.item { flex-basis: 0; flex-grow: 1; }
[200px] [200px] [200px]
  ↑ Počinju sa 0, rastu do 200px (puna podela)
```

---

## 📌 flex (Shorthand)

Kombinovani `flex-grow flex-shrink flex-basis`.

### Osnovna Sintaksa

```css
.item {
  /* Pojedinačno */
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;

  /* Shorthand (preporučeno!) */
  flex: 1 1 0;
  /* ili */
  flex: 1; /* Isto kao flex: 1 1 0 sa auto basis */
}
```

### Česte Vrednosti

```css
.item {
  flex: 0; /* flex: 0 1 0 - Ne raste, pada, bazna = 0 */
  flex: 1; /* flex: 1 1 0 - Raste, pada, bazna = 0 */
  flex: auto; /* flex: 1 1 auto - Raste, pada, bazna = auto (width) */
  flex: none; /* flex: 0 0 auto - Ne raste, ne pada */

  /* Sa baznom veličinom */
  flex: 1 1 200px; /* Raste/pada ali min 200px */
  flex: 1 0 300px; /* Raste, NE pada, bazna = 300px */
  flex: 0 1 auto; /* Ne raste, pada, koristi width */
}
```

### Praktični Primeri

```css
/* Responsive Grid - sve stavke rastu/padaju */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.item {
  flex: 1 1 300px;
  /* Raste/pada, ali MINIMALNO 300px */
  /* Na maloj ekrani: 1 stavka u redu (300px)
     Na većoj: 2-3 stavke u redu (proporcionalno rastući do više) */
}

/* Navbar sa fleksibilnim menujem */
.navbar {
  display: flex;
}

.navbar .logo {
  flex: 0 0 150px; /* Fiksno 150px */
}

.navbar .menu {
  flex: 1; /* Popunjava sve */
}

.navbar .buttons {
  flex: 0 0 auto; /* Samo onoliko koliko je potrebno */
}
```

---

## 📊 Decision Tree - Koja svojstva koristiti

```
Trebalo bi da stavka raste?

├─ DA - sve stavke isto (responsive grid)
│  └─ Koristi: flex: 1;  (ili flex: 1 1 0)
│
├─ DA - ali sa minimalnom veličinom (modern grid)
│  └─ Koristi: flex: 1 1 300px;
│
├─ NE - stavka ostaje fiksna
│  └─ Koristi: flex: 0; (ili flex: 0 0 auto)
│
├─ Trebalo bi da stavka pada (skuplja se)?
│  ├─ DA - svi padaju proporcionalno (default)
│  │  └─ flex-shrink: 1; (default - ništa ne trebaš dodati)
│  │
│  └─ NE - stavka ostaje fiksna
│     └─ Koristi: flex-shrink: 0;
│
└─ Potrebna je bazna veličina? (custom starting size)
   └─ Koristi: flex: 1 1 [bazna_velicina]
```

---

## 💡 Napredni Koncepti

### Proporcionalni Rast (Key Concept!)

```css
.container {
  width: 600px;
  display: flex;
}

.item1 {
  flex-grow: 1;
} /* Dobija 1 deo */
.item2 {
  flex-grow: 2;
} /* Dobija 2 dela */
.item3 {
  flex-grow: 1;
} /* Dobija 1 deo */

/* Ukupno: 1 + 2 + 1 = 4 dela
   600px / 4 = 150px po delu

   item1: 150px * 1 = 150px
   item2: 150px * 2 = 300px
   item3: 150px * 1 = 150px
*/
```

### Flex-basis: 0 vs Auto

```css
/* flex-basis: auto (koristi width) */
.item {
  width: 100px;
  flex-basis: auto;
  flex-grow: 1;
}
/* Počinje sa 100px, onda raste */

/* flex-basis: 0 (počni od nule) */
.item {
  width: 100px; /* Ignoriše se! */
  flex-basis: 0;
  flex-grow: 1;
}
/* Počinje sa 0, zatim raste - ČISTA podela */
```

---

## 📥 Koristi Ova Svojstva za Responsive

```css
/* Mobile First - Small devices */
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.item {
  flex: 1 1 100%; /* Full width na mobilnom */
}

/* Tablet */
@media (min-width: 768px) {
  .item {
    flex: 1 1 calc(50% - 5px); /* 2 po redu */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .item {
    flex: 1 1 calc(33.33% - 7px); /* 3 po redu */
  }
}
```

---

## ✅ Čeklist - Dan 3 Završen

- [ ] Razumevam `flex-grow` - kako stavka RASTE
- [ ] Razumevam `flex-shrink` - kako stavka PADA
- [ ] Razumevam `flex-basis` - bazna veličina pre nego što se menja
- [ ] Mogu koristiti `flex: 1` kao "make it responsive"
- [ ] Mogu koristiti `flex: 1 1 300px` za custom responsive grid
- [ ] Mogu predvideti rezultat sa bilo kojom kombinacijom flex svojstava
- [ ] EXPERT LEVEL! 🎉

---

## 📥 Related Topics

- **Dan 1:** flex-direction, flex-wrap, container basics ✅
- **Dan 2:** justify-content, align-items, align-content ✅
- **Dan 3:** flex-grow, flex-shrink, flex-basis, flex ← TI SI OVDE
- **Grid:** CSS Grid za 2D layoute (sledeća obuka)

---

## 🔗 Resources

- [MDN flex property](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
- [CSS Tricks flex guide](https://css-tricks.com/almanac/properties/f/flex/)
- [Interactive Game - Flexbox Froggy](https://flexboxfroggy.com/) (sve nivoe)
- [Flexbox Zombies Game](https://mastery.games/flexboxzombies/) (advanced)

---

**Dan 3 je NAPREDNA - Ali sada si EXPERT!** 🚀
