# 📚 Exercises - CSS Flexbox Basics (Dan 1)

## 🎯 Svrha

Praktična primena CSS Flexbox osnova kroz 4 vežbe sa rastućom težinom.

---

## 📝 Redosled Vežbi

### ✅ Vežba 1: Flex Container Basics (🟢 Easy)

**Fajl:** `01-flex-container-basics.html`

**Šta učiš:**

- Osnovno `display: flex;`
- Kako se `gap` koristi
- Razumevanje padding-a u flex kontejneru

**Vreme:** 45 min

**Kako raditi:**

1. Otvori fajl u browser-u
2. Čitaj instruction-e (modri boks)
3. Dodaj CSS pravila navedena u instruction-ima
4. Proveri rezultat u browser-u
5. Ako je greška, pročitaj info boks (žuti) za objašnjenje

---

### ✅ Vežba 2: Flex Direction (🟢 Easy)

**Fajl:** `02-flex-direction.html`

**Šta učiš:**

- `flex-direction: row` (default)
- `flex-direction: column`
- `flex-direction: row-reverse`
- `flex-direction: column-reverse`
- Real-world primena (navbar, sidebar)

**Vrijeme:** 45 min

**Bonus:** Navbar zadatak - nauči kako se navbar-i prave sa Flexbox-om

---

### ✅ Vežba 3: Flex Wrap (🟡 Medium)

**Fajl:** `03-flex-wrap.html`

**Šta učiš:**

- `flex-wrap: nowrap` (default)
- `flex-wrap: wrap`
- `flex-wrap: wrap-reverse`
- Responsive grid bez Media Queries-a

**Vrijeme:** 90 min

**Važno:** Ovo je osnova za responsive web design! Pazi na detaljima.

**Dodatni Savet:**
Kombinovanje `flex-wrap: wrap` sa fiksnom widthom stavki (npr. 200px) je osnova moderne responsive grid prakse. Naučićeš to u Dan 3 sa `flex` shorthand.

---

### ✅ Vežba 4: Main & Cross Axis Understanding (🔴 Hard - Konceptualno)

**Fajl:** `04-axis-understanding.html`

**Šta učiš:**

- Šta je Main Axis?
- Šta je Cross Axis?
- Kako se ose menjaju sa `flex-direction`?
- Zašto je razumevanje osa kritično za Dan 2

**Vrijeme:** 90 min (moguće duže - to je OK!)

**Važno:** OVO JE NAJVAŽNIJE! Ako ne razumeš ove ose, biće ti zbunjujuće:

- Zašto `justify-content: center` ponekad radi horizontalno, ponekad vertikalno?
- **Odgovor:** Jer Main Axis se menja sa `flex-direction`!

**Savet:** Interaktivna simulacija u zadatku 3 je super! Eksperimentiši sa svim vrednostima.

---

## 🔧 Kako Raditi sa Vežbama

### Korak 1: Otvori u Browser-u

```
1. Desni klik na `01-flex-container-basics.html`
2. Izaberi "Open with" → Browser
3. Ili drag-drop u browser
```

### Korak 2: Čitaj Instruction Boks (Modri)

```
📝 Tu piše TAČNO šta trebaš da uradi
Trebalo bi da dodam CSS pravilo npr:
.task1 .container { display: flex; }
```

### Korak 3: Dodaj CSS u `<style>` sekciji

```html
<style>
  .task1 .container {
    display: flex; /* ← DODAJ OVO */
    border: 2px solid blue;
    padding: 10px;
  }
</style>
```

### Korak 4: Osvežи Browser (Ctrl+R ili Cmd+R)

```
Sada bi trebalo da vidiš promenu - elementi su redani
umesto da budu jedan ispod drugoga.
```

### Korak 5: Čitaj Info Boks (Žuti) ako je Greška

```
Ako ne radi kako treba, žuti boks ima objašnjenje
Zašto se desilo ovo i šta trebalo biti.
```

---

## ✅ Čeklist - Dan 1 Završen

- [ ] Vežba 1 - Razumevam `display: flex;` i `gap`
- [ ] Vežba 2 - Znam sve 4 vrednosti `flex-direction`
- [ ] Vežba 3 - Znam šta `flex-wrap: wrap;` radi (responsive grid)
- [ ] Vežba 4 - DUBOKO razumem Main i Cross Axis
- [ ] Quiz iz Vežbe 4 - Sve 3 pitanja su tačna
- [ ] Mogu da objasnim drugome šta sam naučio

---

## 📚 Dodatni Resursi

- [MDN Flexbox Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy Game](https://flexboxfroggy.com/) - Interaktivna igra (nivoi 1-6)

---

## 💡 Tips & Tricks

### Tip 1: DevTools Inspection

1. Otvori DevTools (F12)
2. Desni klik na element
3. "Inspect" ili "Inspect Element"
4. U DevTools-ima vidiš CSS
5. Eksperimentiši sa vrednostima u DevTools-ima!

### Tip 2: Backup Pre Nego Što Eksperimentiraš

1. Ako baš eksperimentiraš, pravi kopiju `01-flex-container-basics.html`
2. Nazovi je `01-flex-container-basics-backup.html`
3. Sada možeš slobodno eksperimentirati sa originalom!

### Tip 3: Ponovi Vežbe

Kasnije (Dan 2-3) vratiće ti se ponos! Ponovi svaku vežbu.

---

## 🆘 Ako Zalutaš

1. **Elementos se ne pomeraju** → Proverio si da li je `display: flex;` dodan? (CSS mogući typo)
2. **Stavke su vertikalno, trebalo bi horizontalno** → Zaboravio `flex-direction: row;`? (ili nije dodan,
   jer je default)
3. **Nešto izgleda čudno** → Osvežи browser sa Ctrl+R (hard refresh Ctrl+Shift+R)
4. **Još uvek ne radi** → Piši u chatlog.md i pitaj AI-ja - to je svrha!

---

**Sretno! Počni sa Vežbom 1! 🚀**
""")
