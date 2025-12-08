---
type: cheatsheet
title: ARIA Accessibility Cheatsheet
date: 2025-11-21
topic: aria-basics
repo: html-css-js-portfolio
stack: [html, accessibility, javascript]
status: draft
language: bilingual-en-sr
ai_context: true
---

# 🧩 ARIA Accessibility Cheatsheet | _ARIA pristupačnost – prečica_

_Ovaj fajl je brza referenca za WAI-ARIA: kada koristiti ARIA, osnovne uloge (roles), stanja/propertije i najčešće atribute koje ćeš koristiti u svojim komponentama (accordion, modali, navigacija)._

---

## ✅ What is ARIA? | _Šta je ARIA?_

- ARIA = **Accessible Rich Internet Applications**, skup atributa koji dodaju dodatne semantičke informacije elementima (`role`, `aria-atributi`).
- ARIA opisuje **šta** je element (role) i njegova **stanja/propertije**, ali ne menja funkcionalnost ili stil – behavior i dalje moraš sam da implementiraš.
- ARIA info čitaju pre svega čitači ekrana i drugi asistivni alati, kroz tzv. accessibility tree.

---

## ✅ Golden rules for ARIA | _Zlatna pravila za ARIA_

- **Koristi nativni HTML prvo** – `<button>`, `<nav>`, `<main>`, `<header>`, `<form>` itd. već imaju ugrađene role i ponašanje; koristi ARIA tek kada ti HTML ne daje traženu semantiku.
- **“No ARIA is better than bad ARIA.”** – loše postavljeni role/atributi često prave više problema nego da ih nema uopšte.
- **Role = obećanje** – ako elementu staviš `role="button"`, ti obećavaš da će se ponašati kao dugme (focus, Enter/Space, vizuelni feedback).
- **ARIA ne dodaje keyboard behavior** – moraju da postoje JS handleri za tastaturu; ARIA samo opisuje stanje i ulogu.

---

## ✅ Roles vs states & properties | _Role naspram stanja i propertija_

- **Role** (npr. `role="button"`, `role="navigation"`, `role="tablist"`) – kažu “koja je ovo vrsta UI elementa”.
- **States & properties** (npr. `aria-expanded`, `aria-disabled`, `aria-checked`) – kažu “u kom je stanju ovaj element”.
- Neki role **automatski očekuju** određena stanja/propertije – npr. accordion header button uvek koristi `aria-expanded` i `aria-controls`.

---

## ✅ Landmark roles | _Landmark role-ovi_

- Landmark role-ovi (`banner`, `navigation`, `main`, `contentinfo`, `search`) pomažu korisnicima čitača ekrana da brzo skaču po delovima stranice.
- HTML5 elementi (`<header>`, `<nav>`, `<main>`, `<footer>`) već imaju implicitne role, pa ti često **nije potreban** `role="..."` dodatno.
- Koristi eksplicitni `role` uglavnom kada radiš custom widget u `<div>` / `<span>` ili kada moraš da premostiš manjak semantike u starijem HTML-u.

---

## ✅ Naming elements: aria-label / aria-labelledby / aria-describedby | _Imenovanje elemenata_

- `aria-labelledby` referencira **drugi element** (ID) čiji tekst postaje “accessible name” – preferirani metod kada labela postoji u DOM-u.
- `aria-label` sadrži **plain string** kao naziv; koristi se kad nema vidljive labele na ekranu (ikonice, skrivena dugmad).
- `aria-describedby` referencira element koji daje **duži opis** (hint, help text) – dopuna, ne primarna labela.
- Ako imaš i `aria-labelledby` i `aria-label`, screen reader koristi `aria-labelledby` – ona ima prioritet.

---

## ✅ Expand / collapse: aria-expanded & aria-controls | _Otvaranje/zatvaranje: aria-expanded & aria-controls_

- `aria-expanded="true|false"` kaže da li je kontrola proširena ili sklopljena i da li je povezani sadržaj trenutno vidljiv ili skriven.
- Tipična upotreba: dugme koje otvara/zatvara neki panel, meni, detalje, accordion stavku.
- `aria-controls="panel-id"` povezuje kontrolu (dugme) sa elementom koji se prikazuje/sakriva (`id="panel-id"`).

---

## ✅ Example: Accordion header button | _Primer: Accordion dugme za header_

```html
<h2 class="accordion__header">
  <button
    type="button"
    class="accordion__trigger"
    aria-expanded="true"
    aria-controls="accordion-panel-1"
    id="accordion-header-1"
  >
    What is this project about?
  </button>
</h2>

<div
  id="accordion-panel-1"
  class="accordion__panel"
  role="region"
  aria-labelledby="accordion-header-1"
>
  <p>...</p>
</div>
```

📌 **Explanation: | _Objašnjenje:_**

- Header koristi `<button>` u `<h2>` tako da heading postoji, a dugme je pristupačno (fokus, Enter/Space, role).
- `aria-expanded="true"` označava da je panel trenutno otvoren; JS kasnije menja vrednost na `"false"` kad se panel zatvori.
- `aria-controls="accordion-panel-1"` povezuje dugme sa panelom koji kontroliše (`id="accordion-panel-1"`).
- Panel ima `role="region"` i `aria-labelledby="accordion-header-1"` pa čitač ekrana zna da je ovo region čiji je naslov tekst dugmeta.

---

## ✅ Native vs ARIA button | _Nativno dugme naspram ARIA button role-a_

- **Prednost daj `<button>` elementu** – ima ugrađen fokus, tipke (Enter/Space), ulogu i ponašanje; nema potrebe za `role="button"` na `<div>`.
- Ako ipak koristiš `role="button"` na `<div>`, moraš ručno da dodaš `tabindex="0"` + keyboard handler (Enter/Space) + vizuelni fokus – u suprotnom kršiš obećanje role-a.

---

## ✅ Common ARIA mistakes to avoid | _Česte greške koje treba izbegavati_

- Dodavanje role/atributa tamo gde već postoji odgovarajući HTML element (npr. `role="navigation"` na `<nav>` bez potrebe).
- Nekonzistentna stanja: `aria-expanded="true"` dok je panel vizuelno sakriven ili obrnuto.
- Korišćenje ARIA da “zakrpi” loš UX (npr. skrivene label-e umesto jasnih, vidljivih naziva).
- Dodavanje mnogo nepotrebnih `aria-*` atributa umesto da se koristi jednostavniji, nativni pattern (npr. `<details><summary>` za jednostavne accordione).

---

## ✅ Quick mental checklist when you add ARIA | _Brza mentalna checklista kad dodaješ ARIA_

- Mogu li ovo da uradim čistim HTML-om?
- Ako dodam ovaj role, da li sam implementirao očekivano ponašanje tastature?
- Da li su `aria-_` stanja uvek usklađena sa onim što korisnik vidi (expanded vs collapsed, hidden vs visible)?
- Ako čitač ekrana ignoriše svu ARIA, da li je osnovni sadržaj i dalje razumljiv i upotrebljiv?

---

## ✅ Useful links | _Korisni linkovi_

- [WAI-ARIA Overview](https://www.w3.org/WAI/standards-guidelines/aria/)
- [MDN ARIA documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [ARIA Authoring Practices Guide](https://www.w3.org/TR/wai-aria-practices/)
- [WebAIM ARIA Basics](https://webaim.org/techniques/aria/)
- [Accessible Accordion Pattern](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html)

---
