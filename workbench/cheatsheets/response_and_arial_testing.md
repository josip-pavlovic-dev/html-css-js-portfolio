# response_and_arial_testing.md

## 🎯 Purpose of this file | _Svrha ovog fajla_

This file is a quick manual checklist for keyboard and ARIA testing of any web page or component (accordion, modal, menu, etc.). | _Ovaj fajl je brza ručna checklista za testiranje tastature i ARIA atributa na bilo kojoj web stranici ili komponenti (akordion, modal, meni itd.)._

---

## ✅ When to run this checklist | _Kada da koristiš ovu checklistu_

- After the page loads correctly and looks visually OK. | _Posle učitavanja stranice kada vizuelno izgleda u redu._
- Before creating a pull request or merging a feature branch. | _Pre kreiranja pull requesta ili spajanja feature grane._
- Whenever you change keyboard behaviour or ARIA attributes. | _Kad god menjaš ponašanje tastature ili ARIA atribute._

---

## 🎹 Keyboard-only testing loop | _Osnovni krug testiranja tastature_

### 1. Basic navigation | _Osnovna navigacija_

- Use **Tab** to move forward through interactive elements (links, buttons, inputs). | _Koristi **Tab** za kretanje napred kroz interaktivne elemente (linkovi, dugmad, input polja)._
- Use **Shift + Tab** to move backward. | _Koristi **Shift + Tab** za kretanje unazad._
- Confirm that focus reaches **all** interactive elements that a mouse can click. | _Proveri da fokus stiže do **svih** elemenata na koje može da se klikne mišem._
- Check that Tab order follows the **visual reading order** (left to right, top to bottom). | _Proveri da redosled Taba prati **vizuelni redosled čitanja** (levo–desno, gore–dole)._
- Make sure you can Tab **out of the component/page** (no keyboard traps). | _Uveri se da možeš da izađeš iz komponente/stranice Tab-om (nema “zamke” za tastaturu)._

### 2. Activating controls | _Aktiviranje kontrola_

- Press **Enter** or **Space** on buttons and links and verify they perform the expected action. | _Pritisni **Enter** ili **Space** na dugmadima i linkovima i proveri da rade očekivanu akciju._
- For toggle buttons (like accordion headers), check that multiple presses open/close without strange side effects. | _Za “toggle” dugmad (kao zaglavlja akordiona) proveri da više pritisaka otvara/zatvara bez čudnih efekata._
- If the component uses **arrow keys** (e.g. in advanced accordions or menus), test ↑ ↓ ← → according to the design. | _Ako komponenta koristi **strelice** (npr. napredni akordioni ili meniji), testiraj ↑ ↓ ← → u skladu sa dizajnom._

---

## 👀 Focus visibility & skip links | _Vidljivost fokusa i skip linkovi_

### 1. Visible focus | _Vidljivi fokus_

- Every focused element must have a **visible focus style** (outline, underline, highlight). | _Svaki element u fokusu mora imati **vidljiv stil fokusa** (outline, podvučeno, highlight)._
- Focus must **not** be hidden behind fixed headers, sticky navbars, or off-screen content. | _Fokus **ne sme** biti sakriven iza fiksnih hedera, sticky navigacije ili sadržaja van ekrana._
- Focus indicator should be clearly different from normal hover styles. | _Indikator fokusa treba jasno da se razlikuje od običnog hover stanja._

### 2. Skip to main content (if present) | _Skip to main content (ako postoji)_

- On page load, press **Tab** once and see if a “Skip to main content” link appears. | _Posle učitavanja stranice pritisni **Tab** i proveri da li se pojavi link “Skip to main content”._
- Activate the skip link and confirm focus moves to the main content area. | _Aktiviraj skip link i proveri da li se fokus pomera na glavni sadržaj stranice._

---

## 🧩 ARIA roles, properties and states | _ARIA uloge, svojstva i stanja_

### 1. General ARIA rules | _Opšta ARIA pravila_

- Prefer **semantic HTML** first (button, nav, header, main, form, etc.), use ARIA only when necessary. | _Prvo koristi **semantički HTML** (button, nav, header, main, form itd.), a ARIA samo kada je neophodna._
- Never add ARIA that contradicts native behaviour (for example, `role="button"` on a link without keyboard support). | _Nikad ne dodaj ARIA koja je u konfliktu sa nativnim ponašanjem (npr. `role="button"` na link bez podrške za tastaturu)._
- For custom widgets, assign an appropriate **role** (`button`, `dialog`, `tablist`, `tabpanel`, `menu`, etc.). | _Za prilagođene widgete dodeli odgovarajuću **ulogu** (`button`, `dialog`, `tablist`, `tabpanel`, `menu` itd.)._

### 2. ARIA state consistency | _Konzistentnost ARIA stanja_

- Ensure ARIA states like `aria-expanded`, `aria-pressed`, `aria-selected` **match the visual state** after every interaction. | _Proveri da stanja kao `aria-expanded`, `aria-pressed`, `aria-selected` **odgovaraju vizuelnom stanju** posle svake interakcije._
- Check that `aria-controls` and `aria-labelledby` point to **existing element IDs** (no typos, no duplicates). | _Proveri da `aria-controls` i `aria-labelledby` pokazuju na **postojeće ID-jeve elemenata** (bez grešaka i duplikata)._
- Avoid setting ARIA attributes on non-interactive elements if they are never updated or used. | _Izbegavaj postavljanje ARIA atributa na neinteraktivne elemente ako se nikad ne ažuriraju niti koriste._

---

## 📂 Accordion-specific test mini-checklist | _Mini-checklista za accordion_

### 1. Keyboard behaviour | _Ponašanje na tastaturi_

- Tab moves focus only to accordion headers (buttons), not into hidden panels. | _Tab pomera fokus samo na zaglavlja akordiona (dugmad), ne ulazi u sakrivene panele._
- **Enter** or **Space** on a closed header opens its panel. | _**Enter** ili **Space** na zatvorenom zaglavlju otvaraju njegov panel._
- **Enter** or **Space** on an open header closes its panel (if your design allows closing). | _**Enter** ili **Space** na otvorenom zaglavlju zatvaraju panel (ako dizajn to dozvoljava)._
- Focus stays on the header button when toggling; it does not jump into the panel automatically. | _Fokus ostaje na zaglavlju/dugmetu prilikom otvaranja/zatvaranja, ne skače automatski u panel._

### 2. ARIA wiring | _ARIA povezivanje_

- Each header button has `aria-expanded="true|false"` that updates correctly. | _Svako zaglavlje ima `aria-expanded="true|false"` koje se ispravno ažurira._
- Each header button has a unique `id` and `aria-controls="panel-id"`. | _Svako zaglavlje ima jedinstven `id` i `aria-controls="panel-id"`._
- Each panel has `id="panel-id"`, `role="region"` and `aria-labelledby="header-id"`. | _Svaki panel ima `id="panel-id"`, `role="region"` i `aria-labelledby="header-id"`._
- Closed panels are hidden using `hidden` or `aria-hidden="true"` consistently with `aria-expanded`. | _Zatvoreni paneli su sakriveni pomoću `hidden` ili `aria-hidden="true"` u skladu sa `aria-expanded`._

---

## 🧪 Quick screen reader smoke test | _Brzi smoke test sa čitačem ekrana_

> Note: Start with any free screen reader like NVDA (Windows) or VoiceOver (macOS). | _Napomena: Kreni od nekog besplatnog čitača ekrana kao što su NVDA (Windows) ili VoiceOver (macOS)._

- Navigate by headings (H key or rotor) and check if the structure makes sense. | _Kreći se po naslovima (taster H ili rotor) i proveri da li struktura ima smisla._
- Move through interactive elements and listen to how roles and states are announced (e.g. “button collapsed”, “button expanded”). | _Prolazi kroz interaktivne elemente i slušaj kako se čitaju uloge i stanja (npr. “button collapsed”, “button expanded”)._
- For accordions, verify that the header announces its expanded/collapsed state accurately. | _Za akordione proveri da li zaglavlja tačno najavljuju stanje otvoreno/zatvoreno._
- Make sure no important information is only visible visually (not announced at all). | _Uveri se da nijedna važna informacija nije samo vizuelna (da se uopšte ne najavljuje)._

---

## 🧰 Tools & browser panels to help you | _Alati i paneli u browseru koji pomažu_

- Use the browser’s **Accessibility / A11y panel** (DevTools) to inspect roles, names and states. | _Koristi **Accessibility / A11y** panel u DevTools-u da proveriš uloge, nazive i stanja._
- Use the **Tab order / focus debugging** features if your browser provides them. | _Koristi mogućnosti za debagovanje Tab redosleda/fokusa ako ih browser ima._
- Re-run this checklist after any major HTML, CSS or JS refactor. | _Ponovo pokreni ovu checklistu posle svake veće izmene HTML, CSS ili JS koda._

---

## 🚀 Final steps | _Završni koraci_

- Fix any issues found during testing before merging or deploying. | _Ispravi sve probleme pronađene tokom testiranja pre spajanja ili deploy-a._
- Document any ARIA decisions or keyboard behaviours in your project notes. | _Dokumentuj sve ARIA odluke ili ponašanja tastature u beleškama projekta._

---
