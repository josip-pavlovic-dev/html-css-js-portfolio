# ❓ FAQ Accordion Component | _FAQ Accordion Komponenta_

[![Accessibility Tested](https://img.shields.io/badge/accessibility-checked-brightgreen)](https://www.w3.org/WAI/test-evaluate/) [![Responsive](https://img.shields.io/badge/responsive-yes-blue)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) [![Vanilla JS](https://img.shields.io/badge/JS-vanilla-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Theme Support](https://img.shields.io/badge/theme-light%2Fdark-orange)](https://developer.mozilla.org/docs/Web/CSS/@media/prefers-color-scheme)

Small, accessible FAQ accordion built with semantic HTML, modern CSS and a tiny bit of vanilla JavaScript. | _Mali, pristupačan FAQ accordion napravljen semantičkim HTML-om, modernim CSS-om i malo čistog JavaScript-a._

---

## 🔧 Features | _Karakteristike_

- Semantic markup and ARIA support
- Responsive layout (mobile → desktop)
- Accessible via keyboard
- Toggle Light / Dark theme
- Modern font (Inter), flexbox layout, smooth transitions

---

## 🚀 Usage | _Kako koristiti_

```bash
git clone ...
open accordion.html
```

---

## 🎯 Project goals | _Ciljevi projekta_

- Build a reusable FAQ accordion component with clean, semantic markup. | _Napraviti višekratno upotrebljivu FAQ accordion komponentu sa čistim, semantičkim HTML-om._
- Practice modern CSS layout (flexbox, responsive design, focus styles). | _Vežbati moderan CSS layout (flexbox, responzivni dizajn, stilove fokusa)._
- Implement basic JS state toggling with ARIA attributes (`aria-expanded`, `aria-controls`, `hidden`). | _Implementirati osnovno upravljanje stanjem u JS-u uz ARIA atribute (`aria-expanded`, `aria-controls`, `hidden`)._
- Follow WAI-ARIA accordion pattern so the component is usable with keyboard and screen readers. | _Pratiti WAI-ARIA accordion pattern kako bi komponenta bila upotrebljiva tastaturom i čitačima ekrana._

---

## 🔍 Overview | _Opis projekta_

- Component type: FAQ accordion with three questions. | _Tip komponente: FAQ accordion sa tri pitanja._
- Content: learning-focused copy that objašnjava HTML → CSS → JS faze. | _Sadržaj: tekst fokusiran na učenje koji objašnjava HTML → CSS → JS faze._
- Layout: two-column desktop (intro left, accordion right), stacked layout on mobile. | _Raspored: dva stuba na desktopu (uvod levo, accordion desno), “stacked” raspored na mobilnim uređajima._
- Behavior: one or more panels can be open at the same time. | _Ponašanje: jedan ili više panela mogu biti otvoreni u isto vreme._

---

## 🧠 What I learned | _Šta sam naučio_

- How to structure an accessible accordion using `<button>`, `aria-expanded`, `aria-controls` and `role="region"`. | _Kako da strukturišem pristupačan accordion koristeći `<button>`, `aria-expanded`, `aria-controls` i `role="region"`._
- How to connect headings and panels with `id` + `aria-labelledby`. | _Kako da povežem naslove i panele pomoću `id` + `aria-labelledby`._
- How to use `hidden` to completely remove closed panels from the accessibility tree. | _Kako da koristim `hidden` da potpuno uklonim zatvorene panele iz stabla pristupačnosti._
- How to write focus styles with `:focus-visible` that are clearly noticeable but elegant. | _Kako da napišem focus stilove sa `:focus-visible` koji su jasno uočljivi, a i dalje elegantni._
- How to toggle CSS classes from JS (`is-open` / `is-closed`) umesto direktne manipulacije inline stilovima. | _Kako da iz JS-a menjam CSS klase (`is-open` / `is-closed`) umesto da direktno menjam inline stilove._

---

## 🏗 Project structure | _Struktura projekta_

```txt
accordion/
├── index.html   # semantic HTML + ARIA attributes
├── styles.css   # layout, visual design, focus states
└── script.js    # JS za toggling stanja i ARIA atributa
```

- `index.html` | _Sadrži semantičku strukturu stranice (header, main, sekcija sa accordionom) i ARIA atribute._
- `styles.css` | _Definiše layout (flexbox), tipografiju, vizuelni stil i tastaturne focus stilove._
- `script.js` | _Dodaje interaktivnost: otvaranje/zatvaranje panela, ažuriranje `aria-expanded` i `hidden`._

---

## 🧩 Key HTML & ARIA decisions | _Ključne HTML & ARIA odluke_

- Each question is a `<button>` inside a heading (`<h2>`), not a plain `<div>`. | _Svako pitanje je `<button>` unutar heading-a (`<h2>`), a ne običan `<div>`._
- `aria-expanded="true/false"` on the button tells assistive tech da li je panel otvoren. | _`aria-expanded="true/false"` na dugmetu govori pomoćnim tehnologijama da li je panel otvoren._
- `aria-controls="accordion-panel-X"` povezuje svako dugme sa odgovarajućim panelom. | _`aria-controls="accordion-panel-X"` povezuje svako dugme sa odgovarajućim panelom._
- Panel ima `role="region"` + `aria-labelledby="accordion-header-X"` za jasan naslov regiona. | _Panel ima `role="region"` + `aria-labelledby="accordion-header-X"` za jasan naslov regiona._
- Zatvoreni paneli dobijaju `hidden` tako da nisu fokusabilni i ne zbunjuju čitače ekrana. | _Zatvoreni paneli dobijaju `hidden` da ne bi bili fokusabilni i da ne zbunjuju čitače ekrana._

---

## 🎨 CSS highlights | _CSS naglasci_

- _Raspored: `.page-layout` koristi `display: flex` i `flex-flow: row wrap` za dva stuba na širim ekranima i “stack” na manjim._
- _Design tokens: boje, razmaci i veličine fonta definisane u `:root` kao CSS promenljive._
- _Kartice: svaka accordion stavka izgleda kao kartica sa blagim senkama i zaobljenim uglovima._
- _Focus stilovi: `.accordion-trigger:focus-visible` ima outline + box-shadow koji jasno pokazuje fokus._
- _Animacija: otvaranje/zatvaranje panela koristi tranziciju preko `max-height` i `padding-block`._

---

## ⚙️ JavaScript behavior | _JavaScript ponašanje_

- On `click` (ili Space/Enter preko tastature) script: | _Na `click` (ili Space/Enter preko tastature) skripta:_

  - _Menja(tagluje) `aria-expanded` na kliknutom dugmetu._
  - _Dodaje/uklanja `hidden` na panelu da bi sadržaj bio vidljiv ili sakriven._
  - _Menja klase `is-open` / `is-closed` radi vizuelnih efekata._
  - _Nema ograničenja – više panela može biti otvoreno istovremeno._
  - _Sve manipulacije su preko atributa i klasa, bez inline stilova._

---

## 🚀 How to run | _Kako pokrenuti projekat_

- Open `accordion/index.html` directly in the browser, or via your DevTools/VS Code setup. | _Otvori `accordion/index.html` direktno u pregledaču ili preko DevTools/VS Code podešavanja._
- Lint commands (from repo root): | _Lint komande (iz root direktorijuma):_

  - `npm run lint` – run HTML, CSS and JS linters for all projects. | _`npm run lint` – pokreće HTML, CSS i JS lintere za sve projekte._

---

## ♿ Accessibility checklist | _Pristupačnost – checklista_

- [x] Buttons with `aria-expanded` and `aria-controls`. | _Dugmad sa `aria-expanded` i `aria-controls`._
- [x] Panels with `role="region"` + `aria-labelledby`. | _Paneli sa `role="region"` + `aria-labelledby`._
- [x] `hidden` na zatvorenim panelima. | _`hidden` na zatvorenim panelima._
- [x] Keyboar focus styles using `:focus-visible`. | _Tastaturni focus stilovi koristeći `:focus-visible`._
- [x] Proper tab order through accordion buttons. | _Ispravan redosled Tab kroz accordion dugmad._
- [x] Redosled fokusa prati vizuelni raspored. | _Redosled fokusa prati vizuelni raspored._

---

## 👤 Author | _Autor_

- Josip Pavlović – aspiring full-stack / front-end developer. | _Josip Pavlović – budući full-stack / front-end developer._
- GitHub: [josip-pavlovic-dev](https://github.com/josip-pavlovic-dev)
- LinkedIn: [Josip Pavlović](https://www.linkedin.com/in/josip-p-151951338/)

---

```

```
