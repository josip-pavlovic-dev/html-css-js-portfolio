---
type: cheatsheet
topic: Chrome DevTools Professional Workflow
date: 2025-12-06
linked_to: grid-learning-session
language: bilingual
status: draft
difficulty: beginner
audience: myself
recommended_by: copilot
---

# 📘 Cheatsheet: Chrome DevTools Professional Workflow

## ✅ Key Concepts | Ključni pojmovi

- Panels & Drawer | _Paneli i fioka_ — Elements, Sources, Network, Performance, Application, Console
- Device Emulation | _Emulacija uređaja_ — Mobile viewport, DPR, throttling
- Live Edit & Overrides | _Izmene uživo i override_ — Stilovi, Layout, Snippets, Local Overrides
- Performance Loop | _Performans ciklus_ — Record, audit, measure, fix, re-test
- Accessibility & Layout | _Pristupačnost i layout_ — Grid/Flex overlays, ARIA, contrast

---

## 📌 Daily Flow | _Dnevni tok rada_

1. Open DevTools | _Otvori DevTools_: `F12` / `Ctrl+Shift+I`
2. Elements → Styles | _Pregledaj elemente i stilove_: brzo menjaj CSS, koristi Grid/Flex overlay
3. Console for quick checks | _Console za brze provere_: `querySelector`, `console.log`, `$0` referenca selektovanog elementa
4. Network sanity | _Network kontrola_: 200/304 statusi, cache disabled (cekiraj “Disable cache”)
5. Responsive test | _Responsive test_: Toggle device toolbar `Ctrl+Shift+M`, ručno prevuci širinu
6. Performance samples | _Performans snimak_: kratki Recording (2-5s) u Performance panelu
7. Application storage | _Storage kontrola_: LocalStorage, Cookies, Clear site data
8. Accessibility quick check | _Brza11y provera_: Contrast, Tab order, ARIA u Elements → Accessibility

---

## 🎹 Shortcuts & Tricks | _Prečice i trikovi_

- Toggle DevTools: `Ctrl+Shift+I` | _Uključi DevTools_
- Focus page (preporuka): `Esc` (zatvori drawer) pa klik u page; custom shortcut moguće, ali izbegni `Ctrl+1` jer koliduje sa tab switching u browseru.
- Device toolbar: `Ctrl+Shift+M` | _Emulacija ekrana_
- Command menu: `Ctrl+Shift+P` | _Brze komande (npr. “Show grid overlays”)_
- Toggle drawer (Console/Network): `Esc`
- Select element: `Ctrl+Shift+C`
- Copy styles: `Ctrl+Alt+C`
- New style rule: `Ctrl+Y`
- Edit as HTML: `F2`
- Step debugging: `F8` (continue), `F10` (step over), `F11` (step into)
- Clear console: `Ctrl+L`

---

## 🔍 Elements Panel | _Elements panel_

- Styles: live edit CSS; add rule; toggle properties | _Uživo menjaj CSS, dodaj pravila_
- Layout tab: enable Grid/Flex overlays, see gaps, track sizes | _Uključi Grid/Flex overlay, vidi gap i mere_
- Event Listeners tab: locate handlers | _Pronađi event listenere_
- Accessibility pane: name, role, contrast | _Ime, uloga, kontrast_

---

## 🐞 Console Power Moves | _Moćne Console fore_

- `$0` → currently selected element | _trenutno selektovani element_
- `copy($0)` → copy outerHTML | _kopira HTML_
- `monitorEvents($0, 'click')` → loguj događaje | _log događaje_
- `console.table()` za objekte/liste | _lep prikaz tabela_
- Snippets: kreiraj utility skripte u Sources → Snippets | _utility skripte_

---

## 🌐 Network & Storage | _Mreža i skladište_

- Disable cache (DevTools otvoren) | _isključi keš_
- Throttle presets: Slow 3G / Fast 3G | _testiraj spore mreže_
- Filter: `status-code:400`, `method:POST` | _brzi filteri_
- Application → Clear storage pre testova | _očisti skladište_
- Inspect cookies / localStorage / sessionStorage

---

## ⚡ Performance Loop | _Performans ciklus_

1. Record 2–5s u Performance panelu | _snimi_
2. Gledaj Main thread, FPS, long tasks (>50ms) | _analiziraj_
3. Source link do problematičnog JS/CSS | _otvori kod_
4. Optimize, ponovi snimanje | _ponovi test_

---

## 🧭 Source Debugging | _Debug izvora_

- Breakpoints: line, conditional (`x > 10`), event listener (click), XHR/Fetch
- Blackbox libs (`Right click` → Blackbox script) da fokus ostane na tvom kodu

---

## ♿ A11y Quick Pass | _Brza11y_

- Tab-only navigacija: proveri fokus redosled | _Tab redosled_
- Role/name u Accessibility panelu | _role/name_
- Color contrast quick check | _kontrast_

---

## 📥 Related Topics | Povezane teme

- Grid/Flex overlays | _Grid/Flex overlayi_
- Lighthouse basics | _osnove Lighthouse_
- Core Web Vitals (LCP/FID/CLS) | _osnovni metrički_
- Source maps & bundleri | _source mape_
