# 🛠 DevTools Cheatsheet | _DevTools prečice i inspekcija sajta_

> Ovaj fajl sadrži najvažnije prečice, podešavanja i objašnjenja za efikasno korišćenje Chrome DevTools-a tokom razvoja HTML/CSS projekata.

---

## ✅ Panels overview | _Pregled panela_

- `Elements` | _Inspekcija i menjanje HTML/CSS u realnom vremenu_
- `Console` | _Prikaz grešaka i izvršavanje JS koda_
- `Sources` | _Pregled i debug JavaScript fajlova_
- `Network` | _Prati učitavanje resursa (slike, CSS, JS, itd.)_
- `Application` | _Pregled localStorage, cookies, manifest_
- `Lighthouse` | _Analiza performansi, dostupnosti, SEO_
- `Accessibility` | _Alati za proveru dostupnosti sajta_

---

## 🎯 Keyboard Shortcuts | _Prečice na tastaturi_

- `Ctrl + Shift + I` | _Otvori/ugasi DevTools_
- `Ctrl + Shift + C` | _Toggle element picker_
- `Ctrl + Shift + M` | _Responsive design mode_
- `Esc` | _Otvori/zatvori "Console drawer" (donji panel)_
- `F1` | _Otvara Settings za DevTools_

---

## 🧠 Elements panel | _Navigacija kroz strukturu stranice_

- Navigacija kroz `DOM` kao kroz Explorer
- Promena HTML-a direktno (dupli klik ili `Edit as HTML`)
- U `Styles` sekciji možeš:
  - Dodavati i menjati CSS pravila
  - Koristiti `+` za dodavanje novih stilova
  - Kliknuti na `checkbox` za aktivaciju/deaktivaciju

---

## 🎨 Styles – Flexbox & Grid alati

- Klik na `display: flex` ili `grid` prikazuje vizuelni UI za:
  - `justify-content`, `align-items`, `gap`, `flex-wrap`
  - `grid-template-areas`, `fr`, `auto`, `minmax`

---

## 📐 Box Model – Vizualni prikaz

- DevTools prikazuje `margin`, `border`, `padding`, `content`
- Hover prikazuje dimenzije elemenata direktno na stranici

---

## 🔄 Responsive Mode (Device Toolbar)

- `Ctrl + Shift + M` – prebacuje u "mobile" prikaz
- Možeš birati uređaje: `iPhone`, `Galaxy`, `Laptop`, itd.
- Možeš menjati `Zoom`, `Network`, `User Agent`, itd.

---

## 🔧 Settings preporuke (F1)

- `Detect indentation` ✅
- `Word wrap` ✅
- `Show whitespace: trailing`
- `Autocomplete from history` ✅
- `Enable full accessibility tree view` ✅

---

## 📁 Workspace savet

- Možeš dodati folder za direktno editovanje fajlova u `Sources`
- Omogućava Live Edit bez VS Code

---

## 🎨 SCROLLBAR DEBUGGING U DEVTOOLS | _Debagovanje Scrollbar-a_

---

### **Flow: Inspektovanje & Editing Scrollbar-a**

1. **Select Element** (`Ctrl+Shift+C`) → Klikni na element sa scrollbar-om
2. **Elements Panel → Styles tab** → Pronađi `::-webkit-scrollbar` rule
3. **Layout tab** → Pogledaj overflow i dimenzije
4. **Live Edit:**
   - Klikni na boju u `background: #...` → Color Picker se otvara
   - Promeni direktno, vidi efekt u real-time
   - Dodaj nova svojstva: `border-radius`, `transition`, itd.

---

### **Praktični Primeri**

**Primer 1: Pronađi Gde je Scrollbar Definisan**

```css
/* Elements Panel → Elements Tree */
<ul class="site-nav-list">...</ul>

/* Styles tab pokazuje: */
.site-nav-list {
  overflow: auto; /* ← Ovo omogući scrollovanje */
}

.site-nav-list::-webkit-scrollbar {
  width: 8px; /* ← Ovo je veličina scrollbar-a */
}
```

**Primer 2: Live Color Promene**

- Pronađi `.site-nav-list::-webkit-scrollbar-thumb`
- Klikni na background boju
- Promeni iz `#ddd` u `var(--color-primary)`
- Vidi efekat odmah u browser-u (bez refresh-a!)

### **Pseudo-Elements & DevTools Limitation**

⚠️ **Važna napomena:** DevTools-u je teško pokazati `::-webkit-scrollbar-*` pseudo-elemente u DOM stablu jer nisu "pravi" elementi - oni su samo za CSS rendering.

**Workaround:**

1. Ne možeš direktno "kliknuti" na scrollbar thumb u Elements panelu
2. Umesto toga, klikni na `.site-nav-list` parent element
3. U Styles panelu, idi na sekciju `.site-nav-list::-webkit-scrollbar-thumb`
4. Tamo edituj CSS svojstva

### **Tabela: Gde se Nalazi Šta u DevTools**

| Šta Trebam                  | Gde je u DevTools                                                |
| --------------------------- | ---------------------------------------------------------------- |
| Vidim li overflow           | Elements → Styles → pronađi `overflow` svojstvo                  |
| Proverim scrollbar veličinu | Elements → Styles → `::-webkit-scrollbar { width: ... }`         |
| Menja boju thumb-a          | Elements → Styles → klikni na boju u `::-webkit-scrollbar-thumb` |
| Vidim hover efekat          | Elements → Styles → pronađi `::-webkit-scrollbar-thumb:hover`    |
| Proverim track pozadinu     | Elements → Styles → `::-webkit-scrollbar-track`                  |

---

## 🔍 ADVANCED: Scrollbar Debugging Trikovi

### **Trik 1: Koristi Console da Proveriš Overflow Svojstva**

```javascript
/* DevTools Console */
$0.style.overflow; // Koja je overflow vrednost?
$0.scrollWidth; // Kolika je sadržaj širina?
$0.clientWidth; // Kolika je vidljiva širina?
$0.scrollWidth > $0.clientWidth; // True = potreban scrollbar!
```

### **Trik 2: Debuguj Scrollbar Vidljivost**

Ako scrollbar NIJE vidljiv:

1. Proveri: `Elements → .site-nav-list` → ima li `overflow: auto`? ✅
2. Proveri: Ima li dovoljno sadržaja da prouzrokuje scroll?

   ```javascript
   $0.scrollWidth > $0.clientWidth; // Ako je false, nema dovoljno sadržaja!
   ```

3. Proveri: Da li je `::-webkit-scrollbar` sakriven (`display: none`)?
4. Proveri: Firefox ili Chrome? (Different CSS!)

### **Trik 3: Testira Responsive Scrollbar**

- Otvori **Device Toolbar** (`Ctrl+Shift+M`)
- Smanji browser na mobile veličinu
- Vidiš li scrollbar na horizontalnom?
- Ako ne - možda je problem sa `flex-wrap` ili `gap`

---

## 📊 SCROLLBAR PERFORMANCE CHECK

Ako je scrollbar "spora" ili "tvrda":

1. **Record u Performance panelu** (3-5s snimak)
2. **Gledaj Main thread** - da li ima dugih taskova?
3. **Ako scrollbar ima `transition`** → Može biti skupa (animira se)
   - Rešenje: Koristi samo na `:hover`, ne na svaki frame

---

## 🎯 WORKFLOW: Od Inspektovanja do Production

1. **Inspect** - otvori DevTools, pronađi element
2. **Eksperimentuj** - live edit CSS, probaj boje/veličine
3. **Kopiraj** - kada ti se sviđa, **copy styles** (`Ctrl+C`)
4. **Commit** - dodaj u source file (day01.css)
5. **Testiraj** - refresh stranicu, proveri u svim browser-ima
6. **Iterate** - ako trebaju promene, ponovi od koraka 2

---

## 5. Konkretni Koraci za Tvoj Projekat

```markdown
### **Zadatak: Debug `.site-nav-list` Scrollbar**

1. Otvori DevTools (`F12`)
2. Select element na `.site-nav-list` (Ctrl+Shift+C)
3. U Styles panelu pronađi:

.site-nav-list { display: flex; overflow-x: auto; }
.site-nav-list::-webkit-scrollbar { height: 0.25rem; }
.site-nav-list::-webkit-scrollbar-thumb { background: var(--color-border); }

4. Klikni na boju u `background: var(--color-border)` → Color Picker
5. Promeni u `var(--color-primary)` i vidi efekt
6. Dodaj novi red: `border-radius: var(--radius-full);`
7. Svaki put kada promeniš, vidiš efekt **živo** bez refresh-a!

**Rezultat:** Scrollbar thumb se sada prikazuje u primary boji sa zaobljenim uglovima.
```

---

## ✍️ Author | Autor

[![GitHub](https://img.shields.io/badge/GitHub-josip--pavlovic--dev-blue?logo=github)](https://github.com/josip-pavlovic-dev)
_Aspiring web developer from Novi Sad, Serbia._

---
