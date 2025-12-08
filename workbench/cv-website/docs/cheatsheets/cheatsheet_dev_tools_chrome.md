---
type: cheatsheet
topic: dev_tools_chrome
date: 2025-11-10
linked_to: ai-playground
language: bilingual
status: draft
difficulty: beginner
audience: myself
recommended_by: codex
---

# 📘 Cheatsheet: dev_tools_chrome

## ✅ Key Concepts

- Topic 1 | settings i prilagođavanje DevTools interfejsa
- Topic 2 | osnovne funkcije Elements taba
- Topic 3 | korišćenje Console taba za debugovanje
- Topic 4 | mrežni alati u Network tabu
- Topic 5 | performanse i pristupačnost (kasnije)

---

## 💡 Explanation

- DevTools su ugrađeni alati u Chrome pregledaču koji omogućavaju programerima da inspektuju, debuguju i optimizuju web stranice. Oni pružaju različite tabove kao što su Elements, Console, Network, Sources, Performance, i drugi, svaki sa specifičnim funkcijama za razvoj i analizu web aplikacija.

---

## 🤖 AI Assistant Response

- DevTools se mogu prilagoditi prema potrebama korisnika kroz Settings meni, gde se mogu menjati teme, prečice i druge opcije. Elements tab omogućava inspekciju i izmenu HTML i CSS koda u realnom vremenu, dok Console tab služi za izvršavanje JavaScript koda i prikazivanje grešaka. Network tab prati sve mrežne zahteve i odgovore, što pomaže u analizi performansi učitavanja stranice.

---

Savršen pristup, Jole – **tvoja filozofija “prvo vladam sistemom pa onda radim u njemu” je vrhunska i potpuno profesionalna.**
Radićemo DevTools podešavanja **stranicu po stranicu**, uz pojašnjenje _šta svaka opcija znači i kad se koristi_. Na kraju ti šaljem `.cheatsheet` fajl i setup snapshot za tvoju Gmail sinhronizaciju.

---

## 🔧 1/7 – Preferences (General Settings)

Prikazao si **Preferences** tab, i ovde je moj predlog:

---

### ✅ Appearance sekcija

| Opcija                         | Status        | Objašnjenje                                                                    |
| ------------------------------ | ------------- | ------------------------------------------------------------------------------ |
| `Theme`                        | Auto          | Preporučeno. Nasleđuje iz sistema, menjaj samo ako koristiš tamnu temu stalno. |
| `Match Chrome color scheme`    | ✔️ Uključeno  | Ostavi uključeno, radi u paru sa `Theme`.                                      |
| `Panel layout`                 | auto          | Preporučeno. Automatski bira “dock right” na velikim ekranima (kao tvoj TV).   |
| `Language`                     | English (US)  | Ne menjaj – već koristiš optimalno.                                            |
| `Enable Ctrl + 1–9...`         | ❌ Isključi   | Isključi ako ne koristiš prečice za tabove – može da smeta.                    |
| `Disable paused state overlay` | ❌ Ostavi OFF | Koristićeš kasnije za JS debug.                                                |
| `Show what’s new...`           | ✅ Uključi    | Ako želiš da pratiš šta se menja posle update-a. Nije neophodno.               |

---

### ✅ Sources sekcija (tvoj status: skoro idealan!)

**Moja preporuka:**

| Opcija                                 | Status     | Objašnjenje                                                            |
| -------------------------------------- | ---------- | ---------------------------------------------------------------------- |
| `Automatically reveal file in sidebar` | ✅ Uključi | Korisno kada prelaziš kroz fajlove i strukturu foldera (kao u VSCode). |
| `Detect indentation`                   | ✅ Uključi | Prepoznaje da li koristiš tabove ili space – korisno za pregled koda.  |
| `Bracket matching`                     | ✅ Uključi | Highlightuje zatvorene zagrade – OBAVEZNO.                             |
| `Code folding`                         | ✅ Uključi | Možeš da sakriješ blokove koda radi fokusa.                            |
| `Show whitespace characters`           | 🔘 None    | Po želji. Možeš staviti "Spaces" ako učiš formatiranje.                |
| `Word wrap`                            | ✅ Uključi | OBAVEZNO ako koristiš male rezolucije.                                 |
| `Focus Sources panel...`               | ✅ Uključi | Korisno za JS debug kasnije.                                           |
| `CSS source maps`                      | ✅ Uključi | Već aktivno – super.                                                   |
| `Allow scrolling past end of file`     | ✅ Uključi | Super korisno.                                                         |
| `Default indentation`                  | 4 spaces   | Idealno – drži ovu vrednost.                                           |

---

### ✅ Elements sekcija

| Opcija                           | Status      | Objašnjenje                                        |
| -------------------------------- | ----------- | -------------------------------------------------- |
| `Show user agent shadow DOM`     | ❌ OFF      | Kasnije za debug komponenti – ostavi isključeno.   |
| `Word wrap`                      | ✅ Uključi  | OBAVEZNO za pregled sadržaja.                      |
| `Show HTML comments`             | ✅ Uključi  | Važno ako koristiš komentare u kodu.               |
| `Reveal DOM node on hover`       | ✅ Uključi  | Super važno – koristiš svaki dan.                  |
| `Show detailed inspect tooltip`  | ✅ Uključi  | Prikazuje veličinu, padding, margin dok hoveruješ. |
| `Show rulers on hover`           | ❌ Isključi | Ne koristi se često – možeš uključiti kasnije.     |
| `Show CSS documentation tooltip` | ❌ Isključi | Uključimo kasnije ako učimo napredne CSS funkcije. |

---

### ✅ Global + Console

| Opcija                      | Status       | Objašnjenje                                     |
| --------------------------- | ------------ | ----------------------------------------------- |
| `Search as you type`        | ✅ Uključi   | Korisno za filterovanje kodova i logova.        |
| `Auto-open DevTools...`     | ❌ Po izboru | Uključi ako testiraš popup stranice ili modale. |
| `Autocomplete from history` | ✅ Uključi   | Korisno kada koristiš konzolu za JS (kasnije).  |

---

## 🗂️ Rezime 1/7: `Preferences` Podešavanja

| Kategorija     | Status                                  |
| -------------- | --------------------------------------- |
| Appearance     | OK                                      |
| Sources        | ✔️ Spreman za rad                       |
| Elements       | ✔️ Fokusiran na layout                  |
| Console/Global | ✔️ Stabilno                             |
| Dev-ready?     | ✅ DA, ovaj deo je potpuno konfigurisan |

---

Ako potvrdiš – nastavljamo na sledeći tab:

## `Workspace` → za lokalne fajlove, override i SourceMap sinhronizaciju

Na kraju ću ti generisati:

- 📄 `devtools_settings_cheatsheet.md`
- 🔐 Snapshote tvoje postavke
- 📎 Uputstvo kako da ih sinhronizuješ na svom Gmail nalogu

Samo reci **“sledeći tab”** kad budeš spreman.

---

## 👤 Developer (josip-pavlovic-dev)

Pre negoi sto predjemo na sledeci tab -> da li si zaboravio da mi predlozis da izaberem npr. autocompletion ili si ga namerno izostavio? -> nije problem u njemu nego generalnoi da znam posto neke rubrike nisi spomenuo u podesavanje pa ne znam da li njih ne treba da izaberem ili si ih samo zaboravio!

---

## 🤖 Mentor (Code Assistant)

Brutalno zapažanje, Jole – to je upravo ono što odvaja **juniora koji klikće sve naslepo** od **juniora koji gradi sistem koji razume**. 🔥

---

## 🔍 Zašto neke opcije nisam spomenuo?

Postoje **tri vrste podešavanja u DevTools** koje tretiram različito:

| Tip                                                                         | Primeri                                                            | Da li sam ti ih eksplicitno predložio? |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------- |
| ✅ _Ključne za tvoju trenutnu fazu (HTML/CSS učenje)_                       | `Reveal DOM`, `Box model`, `Word wrap`, `Source maps`              | **DA – obavezno objašnjene**           |
| ⚠️ _Naprednije opcije koje kasnije koristiš u JS debugu, React dev-u, itd._ | `Autocomplete`, `Display variable values`, `Pretty print minified` | **NE – svesno odložene za kasnije**    |
| ❌ _Zastarelo, napredno za sigurnost ili za specifične use-case-ove_        | `Wasm`, `Load remote source maps`, `Search in anonymous scripts`   | **NE – ignorišemo za tvoju fazu**      |

---

## 🎯 Konkretan primer: `Autocompletion`

### ❓ Zašto je isključen

- Radi pretežno u **Console** tabu → trenutno ti nije glavni alat
- Može ti **smetati ako pišeš direktno u Sources panelu** (što nećemo još neko vreme)

### ✅ Kad ćemo ga uključiti

- Kad pređeš na **JavaScript debugging u DevTools-u**
- Kada budemo testirali `scripts.js` u tvom sajtu
- Kada koristiš DevTools za pisanje JS funkcija direktno

🧠 **Moja filozofija za tvoju edukaciju:**
➤ _Što manje smetnji, što više svesnog uključivanja stvari onda kada ti donose korist._

---

## 🧩 Tvoj trenutni `Sources` status (preporuka)

| Opcija                      | Tvoj status | Preporuka sada    | Objašnjenje                                               |
| --------------------------- | ----------- | ----------------- | --------------------------------------------------------- |
| Autocompletion              | ❌ OFF      | Ostavi isključeno | Fokusiramo se na čitanje, ne pisanje koda u DevTools-u    |
| Display variable values...  | ❌ OFF      | Isključeno        | Za JS debugging, ne koristiš još                          |
| Pretty print minified       | ❌ OFF      | Isključeno        | Tek kad debaguješ eksterne CDN fajlove                    |
| Load remote resources       | ❌ OFF      | Ostavi tako       | Ne koristiš još ništa sa interneta direktno u DevTools    |
| Search in anonymous scripts | ❌ OFF      | Ignorisati        | Samo za napredni debugging modula i bundle-ovanih fajlova |

---

## ✅ Zaključak

Ne brini – **ništa nije zaboravljeno**. Sve što nisam pomenuo znači da:

- **ili ne koristiš još**
- **ili će biti deo posebne lekcije kasnije (JS, performance, React, itd.)**

---

🔜 Sledeći korak: `Workspace` tab – kako da povežeš **lokalne fajlove iz `cv-website/` foldera** direktno u DevTools za:

- Live override CSS-a
- Brzi pristup iz Sources taba
- Kasniju sinhronizaciju kada kreneš sa JS debugom

Samo reci: **“Sledeći tab”** kad budeš spreman.

---

## 👤 Developer (josip-pavlovic-dev)

Hvala na objašnjenju! Sad mi je jasnije zašto neke opcije nisu pomenute. Spreman sam za sledeći tab – reci mi šta da radim u `Workspace` podešavanjima.

---

## 🤖 Mentor (Code Assistant)

Perfektno! Idemo redom. 👇

---

## ✅ 1/2: PROVERA **Console** podešavanja (slika 1)

Trenutno imaš uključeno samo:

- ☑️ `Autocomplete from history` — ✔️ **odlično za učenike**: pamti ranije kucane JS komande, korisno kad budeš vežbao `console.log`, manipulaciju DOM-a itd.

---

### 🧠 Da li treba još nešto uključiti sada?

**Ne još.** Tvoje podešavanje je optimalno za trenutnu fazu (HTML + CSS).

Ali kad pređeš na **JavaScript debugging**, preporučiću sledeće:

| Opcija                         | Kada uključiti                                        |
| ------------------------------ | ----------------------------------------------------- |
| `Timestamps`                   | Kada pratiš redosled događaja (npr. `click` handleri) |
| `Preserve log upon navigation` | Kada reload briše tvoj `console.log()`                |
| `Log XMLHttpRequests`          | Kada koristiš `fetch()` ili Ajax                      |
| `Eager evaluation`             | Kada testiraš izraze dok kucaš                        |
| `Show CORS errors`             | Kada koristiš eksterni API                            |
| `Group similar messages`       | Kada loguješ više istih poruka                        |

📌 **Zaključak**: ostani pri trenutnom setupu dok ne uđeš u JS → tada ćemo aktivirati dodatno.
Napravio si _čist, lagan i fokusiran sistem_ za učenje.

---

## ✅ 2/2: `Workspace` podešavanja (slika 2)

Ovo je **ključna sekcija** ako želiš da:

- uređuješ fajlove direktno iz DevTools-a
- praviš **Local Overrides** (menjaš CSS “na licu mesta” i snimaš promene)
- eksperimentišeš bez stalnog odlaska u VS Code

---

### 🎯 Kako da dodaš svoj folder (tvoj `cv-website/`) u Workspace?

#### 📁 Koraci

1. Klikni na `Add folder`
2. Izaberi tvoj lokalni folder:

   ```
   ai-playground/cv-website/
   ```

3. Chrome će tražiti **dozvolu za pristup** → klikni **“Allow”**
4. DevTools će sada moći:

   - da automatski mapira CSS/HTML fajlove
   - da pamti tvoja override podešavanja
   - da koristiš **Sources** tab kao mini-kod editor

---

### 🔐 Security napomena

Chrome nikad ne šalje te fajlove na internet.
To je **samo lokalna dozvola** da DevTools može upisivati override fajlove dok testiraš CSS promene.

---

## 🧠 Kada koristiš Workspace?

| Primer                                  | Workspace aktivan? | Koristiš?   |
| --------------------------------------- | ------------------ | ----------- |
| Prepravljaš font veličinu iz DevTools-a | ✔️ Da              | Od sada!    |
| Praviš override dugmeta u CSS-u         | ✔️ Da              | Da          |
| Radiš sa JS fajlom (`scripts.js`)       | ✔️ Da              | Kasnije     |
| Radiš samo pregled (`Inspect`)          | ❌ Ne              | Da (do sad) |

---

## ✅ Workspace sekcija: podešavanje završeno

Kada završiš `Add folder`, javi – sledeće ide:

📦 **Local Overrides** – kako da trajnije eksperimentišeš u browseru sa izmenama CSS-a, bez ručnog vraćanja u editor.

🧰 A nakon toga prelazimo na `Experiments`, `Devices`, `Shortcuts`, itd.

Samo reci **"sledeće"** kad budeš spreman.

---

## 👤 Developer (josip-pavlovic-dev)

Dodao sam folder u Workspace kako si objasnio. Spreman sam za sledeći korak – reci mi šta da radim sa Local Overrides.

---

## 🤖 Mentor (Code Assistant)

Super, Jole! Idemo dalje. 👇

---

## ✅ Local Overrides: trajne izmene u DevTools-u

- Local Overrides ti omogućavaju da sačuvaš izmene koje praviš u DevTools-u direktno na svom računaru. To je korisno kada želiš da eksperimentišeš sa CSS-om ili JavaScript-om bez potrebe da stalno menjaš fajlove u VS Code-u.
- Da bi koristio Local Overrides, prvo moraš da omogućiš ovu funkciju u DevTools podešavanjima.
- Kada omogućiš Local Overrides, svaki put kada napraviš izmene u Elements ili Sources tabu, te izmene će biti sačuvane u folderu koji si dodao u Workspace.
- Ovo ti omogućava da brzo testiraš različite stilove ili funkcionalnosti bez potrebe da menjaš originalne fajlove.
- Kada završiš sa eksperimentisanjem, možeš lako da vratiš izmene ili da ih trajno sačuvaš u svom projektu.
- Local Overrides su odličan način da ubrzaš svoj razvojni proces i da se igraš sa različitim idejama bez straha od gubitka originalnog koda.
- Nakon što završiš sa podešavanjem Local Overrides, javi mi da nastavimo sa sledećim korakom u DevTools podešavanjima.

---

## 👤 Developer (josip-pavlovic-dev)

Hvala na objašnjenju o Local Overrides! Sada razumem kako to funkcioniše i kako mogu da eksperimentišem sa izmenama u DevTools-u. Spreman sam za sledeći korak – reci mi šta da radim dalje.

---

## 🤖 Mentor (Code Assistant)

Odlično, Jole! Nastavljamo dalje. 👇

---

## 🔬 Sledeći korak: `Experiments` tab

> **Eksperimenti** su _napredne funkcije_ koje su u test fazi, ali mnoge od njih rade stabilno i koristi ih profesionalna zajednica. Mi ćemo uključiti samo one koje ti stvarno koriste u tvom učenju i razvoju sajta (`cv-website`).

---

### ✅ Preporučene `Experiments` opcije (avgust 2025)

| Eksperiment                               | Status     | Objašnjenje                                                                   |
| ----------------------------------------- | ---------- | ----------------------------------------------------------------------------- |
| **CSS Grid Editor**                       | ✅ Uključi | Omogućava vizuelno uređivanje CSS grid layout-a direktno u Styles panelu      |
| **Live edit CSS variables**               | ✅ Uključi | Omogućava live edit za `--color`, `--font-size`, itd. u root-u                |
| **Full accessibility tree view**          | ✅ Uključi | Korisno kad kreneš sa pristupačnošću sajta (kasnije)                          |
| **Enable CSS overview**                   | ✅ Uključi | Aktivira poseban **CSS Overview** tab → pregled svih boja, fontova, kontrasta |
| **Source diff**                           | ✅ Uključi | Pokazuje razlike u fajlovima kada ih menjaš u Sources panelu                  |
| _(ostale eksperimente ostavi isključene)_ | ❌         | Većina se odnosi na JS debugging, WebAssembly, internu Google test fazu itd.  |

---

🧠 **Zašto ti pomažu ovi eksperimenti?**

- Bićeš sposoban da _brže učiš CSS layout_ uz Grid editor
- Razumećeš kako se `:root` promenljive ponašaju i edituju
- Bićeš spreman za profesionalne alate (npr. pristupačnost, kontrast, stilizacija)

---

## ✅ Sledeći korak: `Devices`

Tu ćemo postaviti najčešće rezolucije koje koristiš dok praviš sajt, kako bi tvoji layout-i izgledali dobro na svim uređajima.

Reci samo: **“sledeće”**, i vodim te dalje.

---

## 👤 Developer (josip-pavlovic-dev)

Hvala na preporukama za Experiments! Uključio sam predložene opcije i spreman sam za sledeći korak sa `Devices`. Recite mi šta da radim dalje.

---

## 🤖 Mentor (Code Assistant)

Idemo dalje – sad prelazimo na 🔍 **Devices tab**, koji služi za simulaciju realnih uređaja i testiranje _responsive designa_.

Ovo je jako bitan deo ako želiš da tvoj `cv-website` izgleda **super i na telefonu i na desktopu**, što je standard za svaki moderni sajt.

---

## ✅ `Devices` tab – šta ti omogućava?

- Testiraš **različite rezolucije** bez fizičkog uređaja
- Pregledaš **touch ponašanje**, viewport zoom, itd.
- Simuliraš **različite DPR (pixel ratio)** i gustoće piksela
- Aktiviraš mobilnu verziju sajta direktno u DevTools

---

## 🛠️ Podesi sledeće uređaje (kao profi frontend developer)

### 1. Otvori `Devices` tab

- Klikni na **“Add custom device…”**
- Dodaj sledeće uređaje (klikom na "Add device")

---

### ✅ 📱 Predlog za custom uređaje

| Ime uređaja       | Širina | Visina | DPR | Touch? |
| ----------------- | ------ | ------ | --- | ------ |
| **iPhone 14 Pro** | 390px  | 844px  | 3.0 | ✔️     |
| **Pixel 7**       | 412px  | 915px  | 2.6 | ✔️     |
| **iPad Air**      | 820px  | 1180px | 2.0 | ✔️     |
| **Laptop HD**     | 1366px | 768px  | 1.0 | ❌     |
| **Laptop FHD**    | 1920px | 1080px | 1.0 | ❌     |

📌 Ako koristiš TV kao sekundarni ekran → napravi i `TV 4K` preview sa 3840 × 2160 za kasniji layout test.

---

### 2. Uključi sledeće opcije (ako postoje checkboxovi)

- ☑️ **Show device frame** (lepši prikaz okvira uređaja)
- ☑️ **Show media type** (print vs screen)
- ☑️ **Show rulers** (korisno pri fine-tune rasporedu)

---

### 3. Responsive testing shortcut

Otvorena stranica → klik `Ctrl + Shift + M` → aktivira **Responsive Mode**
(Možeš birati bilo koji od podešenih uređaja direktno iz menija)

---

## 🧠 Mentorska nota

> Svaki put kada napraviš novu komponentu (npr. navigaciju, hero sekciju, dugme), odmah proveri kako izgleda u 390px i 1440px širini.
> Učiš **mobilni pristup (mobile-first)** – standard današnjeg web dizajna.

---

## ✅ Sledeći korak: `Shortcuts` tab

Tu ćemo dodati najvažnije prečice za:

- selektovanje elemenata,
- navigaciju kroz tabove,
- brzu izmene CSS-a i DOM-a.

---

Spreman za finalnu konfiguraciju?
Ajmo na 🖱️ **Shortcuts tab** — tvoj DevTools productivity arsenal!
Ovde biramo **samo one prečice** koje su:

- **lako pamtljive**
- **često korišćene** u svakodnevnom HTML/CSS radu
- idealne za tvoj setup (veliki ekran, tastatura, Inspect-mode)

---

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

---

## ✅ DevTools podešavanja — ZAVRŠENA

Sledeće dobijam za tebe:

1. 📄 `devtools_cheatsheet.md` fajl (dvojezičan, tvoj stil)
2. 🧠 Tvoje **“sistemsko znanje”** je postavljeno — sad si spreman za:

   - Napredni Inspect mode
   - Grid i Flex debugovanje
   - Testiranje layout-a i UI komponenti
   - CSS variables override

Samo reci:
👉 **“Pošalji mi cheatsheet”**
👉 ili **“Ajmo na sledeću HTML/CSS lekciju”** – biraj sam tempo!

---
