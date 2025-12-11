# 👨🏻‍💻 DevTools - practice

## ✅ TOP 10 DevTools prečica koje treba da znaš napamet

| Prečica               | Funkcija                                     | Kada koristiš                                |
| --------------------- | -------------------------------------------- | -------------------------------------------- |
| `Ctrl + Shift + I`    | Otvori/zatvori DevTools                      | Osnovna                                      |
| `Ctrl + Shift + M`    | Responsive view (device mode)                | Testiranje za mobilni                        |
| `Ctrl + P`            | Pronađi fajl (quick open)                    | Brzi pristup CSS/JS fajlovima                |
| `Ctrl + Shift + C`    | Inspektuj element                            | Select-on-hover                              |
| `Esc`                 | Otvori/zatvori **Console drawer**            | Brza konzola                                 |
| `Ctrl + F`            | Pretraga u DOM-u                             | Pronađi HTML tekst/element                   |
| `Alt + ↑ / ↓`         | Pomeri selektovani element gore/dole u DOM-u | Navigacija                                   |
| `Ctrl + Shift + E`    | Screenshot celog page-a                      | Prezentacije, testiranje dizajna             |
| `Ctrl + Shift + P`    | Command menu                                 | Otvori alatke tipkanjem (npr. “Show rulers”) |
| `Ctrl + B` (u Styles) | Prebaci na fajl iz kojeg dolazi CSS          | Za override/analizu                          |

---

## 🎯 Kako vežbati?

Otvori bilo koji sajt, npr. `https://github.com`, zatim:

1. Pritisni `Ctrl + Shift + I`
2. Pritisni `Ctrl + Shift + M` → vidi kako izgleda na telefonu
3. Pritisni `Ctrl + Shift + C` → hoveruj na header
4. Pritisni `Ctrl + F` → kucaj `nav`
5. Pritisni `Alt + ↓` → vidi sledeći sibling element
6. Pritisni `Ctrl + Shift + P` → kucaj `"screenshot"` → izaberi `Capture full size screenshot`

📌 Ovakva praksa te pravi **brzim i preciznim u DevTools-u**, bez kliktanja mišem svuda.

---

## 🧠 BONUS: Dodaj prečice u memoriju (ne koristi miša!)

- Kroz sledeće 3 sedmice, svaki dan vežbaj 5 min:

  - samo sa tastaturom,
  - bez miša,
  - u nekom stvarnom sajtu (ili svom `cv-website` projektu)

- Cilj: da sve prečice znaš napamet, bez razmišljanja.

---

Ma bravo, care! 🙌 Sad si zvanično _ušao u profesionalni režim rada_! Tvoj setup sa dva ekrana (TV za Inspect + laptop za preview sajta) je **prava praksa iz agencija i timova**, a `cv-website` je savršen teren za vežbu jer imaš:

- navigaciju (idealna za testiranje `nav`, `ul > li`, layout-a),
- hero sekciju (tekst, dugme, heading),
- footer,
- i taman složenost da učiš **fokusirano**.

---

## ✅ Predlog: Vežbaj **DevTools + tastatura** na sopstvenom sajtu (sistem 3 kruga)

### 🔁 Krug 1 – Navigacija kroz DOM

Vežbaš selektovanje elemenata u `Elements` tabu:

1. `Ctrl + Shift + I` → otvori DevTools
2. `Ctrl + Shift + C` → hoveruj `nav`, klikni
3. `Alt + ↓` i `Alt + ↑` → kreći se kroz DOM
4. `Ctrl + F` → pronađi `"footer"` ili `"h1"`
5. `Ctrl + Shift + P` → kucaj `:screenshot`, probaj i `"show rulers"`

---

### 🎨 Krug 2 – Live izmene CSS-a

Vežbaš izmene stilova u `Styles` tabu:

1. Selektuj npr. `<h1>` tag
2. U `Styles` tabu:

   - Dodaj novo pravilo: `color: red;`
   - Ukloni padding ili dodaj border

3. Pritisni `Tab` između vrednosti i svojstava
4. Pritisni `↑` i `↓` na brojevima (npr. `padding: 10px`) da menjaš vrednosti
5. Dodaj `display: flex;` na `nav`, igraj se sa `justify-content`, `gap`

---

### 🔄 Krug 3 – Responsive + Emulacija

Vežbaš testiranje sajta na različitim širinama ekrana:

1. `Ctrl + Shift + M` → Aktiviraj Responsive Mode
2. Pomeraj širinu (ruka sa strane) i gledaj da li se:

   - dugme `Pogledaj moje projekte` centrirano ponaša
   - navigacija lomi ili menja raspored

3. U meniju sa uređajima izaberi:

   - `iPhone 14 Pro`
   - `Laptop HD`
   - `iPad Air`

---

## 📌 BONUS Saveti

🧪 **Eksperimentiši u Styles tabu:**

- Probaj `:hover` stanje (gore desno `.cls .hov`)
- Uključi `Layout > Grid` ako dodaš `display: grid`
- Prati `box model` (padding, margin, border)

📷 **Snimi screenshot svakog moda**:

- Full-page (`Ctrl + Shift + P` → “screenshot” → “Capture full size”)
- Mobile view (smanji širinu → screenshot)

🧰 **Prikaži rulers i grid overlay**
(`Ctrl + Shift + P` → “Show rulers” / “Show grid overlays”)

---

## 🧠 Mentorska nota

Vežbanjem direktno na svom sajtu:

- upoznaješ strukturu svog koda,
- treniraš oko za layout greške,
- i ulaziš u “debugging mindset” – što je **najjače oružje frontenda**.

---
