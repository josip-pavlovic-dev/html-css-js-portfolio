---
type: kickoff
date: 2025-12-13
day: 09
topic: CSS Variables + Flexbox — Kickoff Session
duration: 8 hours
---

# 🚀 DAN 09 KICKOFF — CSS Variables + Flexbox

**Pozdrav Jole!** 👋

Dobrodošao u **najintenzivniji i najkorisniji dan** tvog CSS učenja! 🔥

Danas ćeš savladati **dva najvažnija CSS koncepta** za moderni web razvoj:

1. **CSS Variables** — Kako organizovati i koristiti varijable za DRY kod
2. **Flexbox** — Kako napraviti profesionalnu horizontalnu navigaciju

---

## 🎯 Zašto Je Ovo Važno?

### **CSS Variables = Održiv Kod**

Bez varijabli:

```css
.button {
  background: #3b82f6;
}
.nav-link {
  color: #3b82f6;
}
.badge {
  border-color: #3b82f6;
}
/* ... 50 puta ista boja! */
```

**Problem:** Ako trebaš da promeniš boju → 50 promena!

Sa varijablama:

```css
:root {
  --color-primary: #3b82f6;
}

.button {
  background: var(--color-primary);
}
.nav-link {
  color: var(--color-primary);
}
.badge {
  border-color: var(--color-primary);
}
/* ... samo JEDNA promena! */
```

**Rešenje:** Promeniš `--color-primary` → SVE se automatski ažurira! ✅

---

### **Flexbox = Modern Layout**

Bez Flexbox-a (stari način):

```html
<nav>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav>
```

```css
/* Stari način: float + clearfix hack */
ul {
  overflow: hidden;
}
li {
  float: left;
  margin-right: 20px;
}
/* Komplikovan, lomljiv! */
```

Sa Flexbox-om (moderni način):

```css
ul {
  display: flex;
  gap: 20px;
}
/* Jednostavan, moćan! ✅ */
```

**Rezultat:** Horizontalna navigacija u **2 linije CSS-a**! 🎉

---

## 📅 Struktura Dana (4 Bloka)

### **BLOK 1 (09:00-11:00) — CSS Variables Osnove**

**Šta učiš:**

- `:root` pseudo-class
- `var()` funkcija
- Import varijabli iz arhitekture
- DRY princip

**Output:**

- Razumeš kako varijable funkcionišu
- Importuješ `colors.css`, `spacing.css`, `typography.css`
- Koristiš varijable u `scratch.html`

**Checkpoint:**

✅ Kad kažeš: "Razumem kako `var(--color-primary)` funkcioniše i vidim ga u DevTools!"

---

### **BLOK 2 (11:30-13:30) — CSS Variables Napredne Tehnike**

**Šta učiš:**

- Fallback vrednosti
- Scope varijabli (`:root` vs element)
- Organizacija varijabli po kategorijama
- Real-world primeri

**Output:**

- Napraviš sopstveni sistem varijabli
- Refactoring postojećeg CSS-a sa varijablama
- Razumeš kada koristiti globalne vs lokalne varijable

**Checkpoint:**

✅ Kad možeš da objasniš: "Zašto koristim `:root` umesto `body` za varijable?"

---

### **BLOK 3 (14:30-16:30) — Flexbox Fundamentals**

**Šta učiš:**

- `display: flex` aktivacija
- Flex container vs flex items
- `flex-direction`, `justify-content`, `align-items`
- `gap` property

**Output:**

- Aktiviraš Flexbox na navigaciji
- Horizontalna navigacija sa gap-om
- Razumeš main axis vs cross axis

**Checkpoint:**

✅ Kad vidiš horizontalnu navigaciju u browseru i razumeš ZAŠTO funkcioniše!

---

### **BLOK 4 (17:00-19:00) — Flexbox Napredne + Responsive**

**Šta učiš:**

- `flex-wrap` za responsive
- `flex-grow`, `flex-shrink`, `flex-basis`
- Flex shorthand
- Responsive navigation pattern

**Output:**

- Responsive navigacija koja se prilagođava
- Razumeš kako `flex-grow` i `flex-shrink` rade
- Finalna navigacija u `scratch.html`

**Checkpoint:**

✅ Kad možeš da napraviš bilo koji Flexbox layout bez pomoći!

---

## 🛠️ Alati Koje Ćeš Koristiti

### **1. VS Code**

```bash
# Otvori sve potrebne fajlove:
code ~/code/python-automation-lab/html-css-js-portfolio/workbench/learning-progress/sandbox/html/scratch.html
code ~/code/python-automation-lab/html-css-js-portfolio/workbench/learning-progress/sandbox/css/reset.css
```

**Shortcuts:**

- `Ctrl + /` — Komentarisanje
- `Shift + Alt + Down` — Dupliranje linije
- `Ctrl + Shift + L` — Multi-cursor (selektuj sve pojave)
- `Ctrl + Shift + F` — Formatiranje

---

### **2. DevTools (Chrome/Firefox)**

**Otvori:** `F12` ili `Ctrl + Shift + I`

**Šta ćeš koristiti:**

1. **Elements tab** — Inspect HTML strukture
2. **Styles panel** — Vidi CSS pravila i varijable
3. **Computed tab** — Vidi computed vrednosti
4. **Flexbox inspector** — Vizualizuj Flexbox layout (Chrome)
5. **Console** — Testiraj JavaScript (kasnije)

**Praktični primeri:**

```javascript
// U Console tab-u, testiraj:
getComputedStyle(document.documentElement).getPropertyValue("--color-primary");
// → "#3b82f6"
```

---

### **3. Cheatsheet-ovi**

**Obavezno otvori:**

1. [`cheatsheet.md`](cheatsheet.md) — Brzi pregled (ovaj folder)
2. [`/cheatsheets/cheatsheet_css_variables.md`](../cheatsheets/cheatsheet_css_variables.md)
3. [`/cheatsheets/cheatsheet_flexbox_complete.md`](../cheatsheets/cheatsheet_flexbox_complete.md)
4. [`/cheatsheets/cheatsheet_mdn_css_variables_summary.md`](../cheatsheets/cheatsheet_mdn_css_variables_summary.md)
5. [`/cheatsheets/cheatsheet_mdn_flexbox_summary.md`](../cheatsheets/cheatsheet_mdn_flexbox_summary.md)

---

## 📚 Resursi

### **Moduli (Glavna Literatura)**

- [`03_CSS_Variables_Intro.md`](../learning-progress/sandbox/03_CSS_Variables_Intro.md)
- [`04_Flexbox_Fundamentals.md`](../learning-progress/sandbox/04_Flexbox_Fundamentals.md)

### **Arhitektura (Varijable)**

```
css-architecture/variables/
├── colors.css       ← Boje
├── spacing.css      ← Razmak
├── typography.css   ← Fontovi
├── navigation.css   ← Nav specifične varijable
├── layout.css       ← Layout varijable
└── borders.css      ← Border radijusi
```

### **MDN Dokumentacija**

**CSS Variables:**

- [Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [var() function](https://developer.mozilla.org/en-US/docs/Web/CSS/var)
- [:root pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)

**Flexbox:**

- [CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [Basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Flexbox properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

---

## 🎯 Learning Goals (Šta Ćeš Znati Posle)

### **CSS Variables:**

- [x] Razumem šta su CSS varijable i zašto se koriste
- [x] Znam kako da kreiram varijable u `:root`
- [x] Mogu da koristim `var()` funkciju
- [x] Znam kako da importujem varijable iz arhitekture
- [x] Razumem fallback vrednosti u `var()`
- [x] Mogu da organizujem varijable po kategorijama
- [x] Primenjujem DRY princip u CSS-u

### **Flexbox:**

- [x] Razumem šta je Flexbox i kako funkcioniše
- [x] Znam razliku između flex container i flex items
- [x] Mogu da aktiviram Flexbox sa `display: flex`
- [x] Razumem main axis vs cross axis
- [x] Koristim `justify-content` za horizontalno poravnanje
- [x] Koristim `align-items` za vertikalno poravnanje
- [x] Koristim `gap` za razmak između items
- [x] Mogu da napravim horizontalnu navigaciju
- [x] Razumem `flex-grow`, `flex-shrink`, `flex-basis`
- [x] Mogu da debugujem Flexbox u DevTools

---

## 💡 Saveti Pre Početka

### **1. Priprema Okoline**

```bash
# Otvori terminal i proveri sve:
cd ~/code/python-automation-lab/html-css-js-portfolio/workbench/

# Proveri da postoje fajlovi:
ls -la learning-progress/sandbox/html/scratch.html
ls -la learning-progress/sandbox/css/reset.css
ls -la css-architecture/variables/

# Otvori u browseru:
firefox learning-progress/sandbox/html/scratch.html &
# ili
google-chrome learning-progress/sandbox/html/scratch.html &
```

---

### **2. Mentalni Setup**

**Ovo NIJE trka! 🐢**

- ✅ Čitaj polako i pažljivo
- ✅ Testiraj SVE primere
- ✅ Piši beleške u `summary.md`
- ✅ Pravi pauze (15 min između blokova)
- ✅ Pitaj ako nešto nije jasno

**Cilj dana:** Razumevanje, NE brzina! 🎯

---

### **3. Pravi Pauze!**

```
09:00-11:00 → BLOK 1 (2h)
11:00-11:30 → PAUZA ☕ (30 min)
11:30-13:30 → BLOK 2 (2h)
13:30-14:30 → RUČAK 🍽️ (1h)
14:30-16:30 → BLOK 3 (2h)
16:30-17:00 → PAUZA ☕ (30 min)
17:00-19:00 → BLOK 4 (2h)
19:00+      → FINALNI PREGLED ✅
```

**Važno:** Ne preskaći pauze! Mozak treba odmor! 🧠

---

## 📊 Kako Pratiti Napredak

### **Posle Svakog Bloka:**

1. ✅ Obeleži blok u `README.md` (checkbox)
2. ✅ Napiši beleške u `summary.md`
3. ✅ Testiraj kod u browseru
4. ✅ Odgovori na checkpoint pitanja

### **Checkpoint Pitanja:**

**BLOK 1:**

- Da li razumem šta je `:root` i zašto se koristi?
- Mogu li da kreiram CSS varijablu?
- Znam li kako da koristim `var(--variable-name)`?
- Vidim li varijable u DevTools Styles panelu?

**BLOK 2:**

- Razumem li fallback vrednosti u `var()`?
- Mogu li da refactoring postojeći CSS sa varijablama?
- Znam li kada koristiti globalne vs lokalne varijable?

**BLOK 3:**

- Da li razumem razliku flex container vs flex items?
- Mogu li da aktiviram Flexbox na navigaciji?
- Vidim li horizontalnu navigaciju u browseru?
- Znam li šta radi `justify-content` vs `align-items`?

**BLOK 4:**

- Razumem li `flex-wrap` i kada ga koristiti?
- Mogu li da objasnim `flex-grow` i `flex-shrink`?
- Mogu li da napravim responsive navigaciju?
- Mogu li da debugujem Flexbox u DevTools?

---

## 🎓 Finalni Projekat Dana

**Na kraju dana (19:00), imaćeš:**

### **1. Kompletnu Navigaciju**

```html
<nav class="site-nav">
  <ul class="nav-list">
    <li><a href="#home" class="nav-link">Početna</a></li>
    <li><a href="#about" class="nav-link">O meni</a></li>
    <li><a href="#skills" class="nav-link">Veštine</a></li>
    <li><a href="#contact" class="nav-link">Kontakt</a></li>
  </ul>
</nav>
```

### **2. CSS sa Varijablama**

```css
/* Import varijabli */
@import url("../../css-architecture/variables/colors.css");
@import url("../../css-architecture/variables/spacing.css");
@import url("../../css-architecture/variables/typography.css");
@import url("../../css-architecture/variables/navigation.css");

/* Flexbox navigacija */
.nav-list {
  display: flex;
  gap: var(--nav-link-gap);
  justify-content: center;
  align-items: center;
}

.nav-link {
  padding: var(--nav-link-padding-y) var(--nav-link-padding-x);
  color: var(--color-text);
  font-size: var(--nav-link-font-size);
  transition: var(--nav-link-transition);
}

.nav-link:hover {
  color: var(--color-primary);
  background-color: var(--color-primary-soft);
}
```

### **3. Razumevanje Kako Sve Funkcioniše**

- ✅ Zašto koristim varijable umesto hard-coded vrednosti
- ✅ Kako Flexbox raspoređuje elemente
- ✅ Kako debugujem CSS u DevTools
- ✅ Kako organizujem CSS kod profesionalno

---

## 🚀 Sledeći Koraci

### **Posle Dana 09:**

1. **Dan 10** — Responsive Design + Media Queries
2. **Dan 11** — CSS Grid Fundamentals
3. **Dan 12** — Typography System
4. **Dan 13** — Layout Patterns
5. **Dan 14** — Finalni Projekat (Portfolio)

---

## 🎉 Motivaciona Poruka

> **"Danas učiš superpower CSS koncepte!"** 🦸

**CSS Variables + Flexbox = 80% modernog web dizajna!**

Ovo nisu "još neke CSS properties". Ovo su **fundamentalni alati** koje ćeš koristiti u **svakom projektu** od sada pa zauvek!

**Posle današnjih 8 sati:**

- ✅ Znaćeš kako se piše profesionalan CSS
- ✅ Razumećeš kako CSS arhitektura funkcioniše
- ✅ Moći ćeš da debuguješ bilo koji CSS problem
- ✅ Bićeš spreman/na za napredne CSS koncepte

**Jesi li spreman/na? 💪**

---

## ✅ Finalni Checklist Pre Početka

Proveri da imaš:

- [x] VS Code otvoren
- [x] `scratch.html` spreman
- [x] `reset.css` povezan
- [x] Browser sa DevTools (F12)
- [x] Cheatsheet-ovi spremni
- [x] 8 sati vremena
- [x] Motivacija! 🔥

**Ako je sve ✅ → Otvori `tasks.md` za BLOK 1 i KRENI! 🚀**

---

## 📞 Pomoć

**Ako zapneš:**

1. Otvori `cheatsheet.md`
2. Čitaj MDN summarize cheatsheet
3. Testiraj u DevTools
4. Pitaj AI mentora (ja sam tu!)

**Kontakt:**

- AI Mentor: Chat (uvek dostupan)
- Summary fajl: `2025-12-13_summary.md`

---

**Srećno sa učenjem! 🎓**

**Krećemo! 💪🔥**
