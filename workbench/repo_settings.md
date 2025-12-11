---
type: repo_settings
repo: html-css-js-portfolio
owner: josip-pavlovic-dev
environment: wsl2+ubuntu-24.04+vscode
last_updated: 2025-11-21
ai_context: true
description: Overview of repo structure, tooling, WSL setup and daily workflow context.
---

# 🧭 Repo Settings & Context | _Repo podešavanja i kontekst_

_Ovaj dokument daje pregled strukture repozitorijuma, razvojnog okruženja (WSL + VS Code) i alata koje koristim. Svako novo časkanje može da počne ovim fajlom da bi AI odmah imao pravi kontekst rada._

---

## 🧩 Repository overview | _Pregled repozitorijuma_

- HTML/CSS/JS portfolio of small frontend projects (accordion, calculator, todo, weather, landing page). | _HTML/CSS/JS portfolio malih frontend projekata (accordion, kalkulator, to-do, weather, landing stranica)._
- Public GitHub repo, deployovan na GitHub Pages sa `main` grane. | _Javni GitHub repo, deployovan na GitHub Pages sa `main` grane._
- Fokus je na čistom, ručno pisanom kodu (bez frameworka), uz moderne frontend best practices i linting. | _Fokus je na čistom, ručno pisanom kodu (bez frameworka), uz moderne frontend best practices i linting._
- Repo se koristi i kao portfolio i kao trening okruženje za HTML/CSS/JS. | _Repo se koristi i kao portfolio i kao trening okruženje za HTML/CSS/JS._

---

## 💻 Development environment (WSL) | _Razvojno okruženje (WSL)_

- OS: Windows + WSL2 (Ubuntu-24.04) kao glavno razvojno okruženje. | _OS: Windows + WSL2 (Ubuntu-24.04) kao glavno razvojno okruženje._
- Editor: VS Code sa Remote WSL ekstenzijom. | _Editor: VS Code sa Remote WSL ekstenzijom._
- Repo path (WSL): `/home/jole-pavlovic-dev/code/python-automation-lab/html-css-js-portfolio`. | _Putanja repozitorijuma (WSL): `/home/jole-pavlovic-dev/code/python-automation-lab/html-css-js-portfolio`._
- Git remotes: klonirano preko SSH sa GitHub naloga `josip-pavlovic-dev`. | _Git remote: repo je kloniran preko SSH sa GitHub naloga `josip-pavlovic-dev`._
- Node + npm su instalirani u WSL i koriste se samo za dev alate (linting, skripte). | _Node + npm su instalirani u WSL i koriste se samo za dev alate (linting, skripte)._

---

## 📁 Root structure | _Osnovna struktura_

- `accordion/` – project folder for Accordion component (HTML/CSS/JS). | _Project folder za Accordion komponentu (HTML/CSS/JS)._
- `calculator/` – project folder for Calculator mini app. | _Project folder za mini aplikaciju Kalkulator._
- `todo-app/` – project folder for To-Do list app. | _Project folder za To-Do list aplikaciju._
- `weather-app/` – project folder za Weather app sa javnim API-jem (kasnije). | _Project folder za Weather aplikaciju sa javnim API-jem (kasnije)._
- `landing-page/` – project folder za responzivnu landing stranicu. | _Project folder za responzivnu landing stranicu._
- `assets/` – zajedničke slike i ostali vizuelni resursi za projekte/dokumentaciju. | _Shared folder za slike i druge vizuelne resurse._

---

## 📄 Documentation & meta files | _Dokumentacija i meta fajlovi_

- `README.md` – glavna bilingvalna dokumentacija repoa (opis, struktura, tech stack, autor). | _Glavna bilingvalna dokumentacija repoa (opis, struktura, tech stack, autor)._
- `LICENSE` – MIT licenca za projekat. | _MIT licenca za projekat._
- `repo_settings.md` – ovaj fajl; koristi se kao jutarnji kontekst za AI pri svakom novom časkanju. | _Ovaj fajl; koristi se kao jutarnji kontekst za AI pri svakom novom časkanju._
- `.github/PULL_REQUEST_TEMPLATE.md` – šablon za Pull Request-ove (summary, changes, testing, screenshots). | _Šablon za Pull Request-ove (summary, changes, testing, screenshots)._

---

## 🧰 Tooling & npm setup | _Alati i npm podešavanje_

- `package.json` – definiše devDependencies i npm skripte za linting. | _Definiše devDependencies i npm skripte za linting._
- `package-lock.json` – zaključava tačne verzije npm paketa. | _Zaključava tačne verzije npm paketa._
- `eslint.config.cjs` – ESLint 9 flat config sa `@eslint/js` (`js.configs.recommended`) i prilagođenim pravilima. | _ESLint 9 flat config sa `@eslint/js` (`js.configs.recommended`) i prilagođenim pravilima._
- `.stylelintrc.json` – Stylelint konfiguracija zasnovana na `stylelint-config-standard`. | _Stylelint konfiguracija zasnovana na `stylelint-config-standard`._
- `.htmlhintrc` – HTMLHint pravila (tag parovi, doctype first, lowercase atributi, jedinstveni ID-evi, alt za slike). | _HTMLHint pravila (parovi tagova, doctype first, lowercase atributi, jedinstveni ID-evi, alt za slike)._

### npm scripts | _npm skripte_

- `lint:js` – pokreće ESLint na svim `.js` fajlovima u projektu. | _Pokreće ESLint nad svim `.js` fajlovima u projektu._
- `lint:css` – pokreće Stylelint nad svim `.css` fajlovima (`--allow-empty-input` ako još nema CSS-a). | _Pokreće Stylelint nad svim `.css` fajlovima (`--allow-empty-input` ako još nema CSS-a)._
- `lint:html` – pokreće HTMLHint nad svim `.html` fajlovima. | _Pokreće HTMLHint nad svim `.html` fajlovima._
- `lint` – kombinovana skripta: `lint:js` → `lint:css` → `lint:html`. | _Kombinovana skripta: `lint:js` → `lint:css` → `lint:html`._

---

## 🏗️ Makefile commands | _Makefile komande_

- `make lint` – pokreće `npm run lint` nad celim projektom. | _Pokreće `npm run lint` nad celim projektom._
- `make acp` – lint → `git add .` → `git commit -m "$(m)"` → `git push` (koristi se na `main`). | _lint → `git add .` → `git commit -m "$(m)"` → `git push` (koristi se na `main`)._
- `make acp_branch` – isto kao `acp`, ali pushuje na trenutnu feature granu (`git branch --show-current`). | _Isto kao `acp`, ali pushuje na trenutnu feature granu (`git branch --show-current`)._

_Preporučeni stil commit poruka: Conventional Commits (`feat(accordion): ...`, `chore(tooling): ...`). | \_Preporučeni stil commit poruka: Conventional Commits (`feat(accordion): ...`, `chore(tooling): ...`)._

---

## 🌿 Git branches & workflow | _Git grane i workflow_

- `main` – uvek stabilna, deploy-ovana na GitHub Pages. | _Uvek stabilna grana, deploy-ovana na GitHub Pages._
- Feature grane u formatu `type/topic`, npr `feat/accordion-basic`. | _Feature grane u formatu `type/topic`, npr. `feat/accordion-basic`._
- Rad ide na feature grani → `make acp_branch` → PR ka `main` sa šablonom iz `.github`. | _Rad ide na feature grani → `make acp_branch` → PR ka `main` uz šablon iz `.github`._

---

## 🧪 Linting policy | _Pravila za linting_

- Svaki veći commit prolazi kroz `make lint` (direktno ili preko `make acp[_branch]`). | _Svaki veći commit prolazi kroz `make lint` (direktno ili preko `make acp[_branch]`)._
- HTML: fokus na validnu strukturu, `doctype-first`, jedinstvene ID-e, alt atribute. | _HTML: fokus na validnu strukturu, `doctype-first`, jedinstvene ID-e, alt atribute._
- CSS: oslanjanje na `stylelint-config-standard` + Prettier/VS Code za formatiranje. | _CSS: oslanjanje na `stylelint-config-standard` + Prettier/VS Code za formatiranje._
- JS: `@eslint/js` recommended konfiguracija + `no-unused-vars: warn`, `no-console: off` za learning fazu. | _JS: `@eslint/js` recommended konfiguracija + `no-unused-vars: warn`, `no-console: off` za learning fazu._

---

## 🗂️ workbench/ (local only) | _workbench/ (samo lokalno)_

- `workbench/` je dodat u `.gitignore` i **ne ide** na GitHub. | _`workbench/` je dodat u `.gitignore` i **ne ide** na GitHub._
- Sadrži dnevne foldere: `YYYY-MM-DD_topic/` (npr. `2025-11-21_accordion-basic/`). | _Sadrži dnevne foldere: `YYYY-MM-DD_topic/` (npr. `2025-11-21_accordion-basic/`)._
- Svaki dnevni folder ima `kickoff.md`, `tasks.md`, `cheatsheet.md`, `summary.md`, `README.md` i `chat/` podfolder. | _Svaki dnevni folder ima `kickoff.md`, `tasks.md`, `cheatsheet.md`, `summary.md`, `README.md` i `chat/` podfolder._
- `chat/chatlog.md` i `chat/full_chat.md` čuvaju sažetak/puni log razgovora sa AI. | _`chat/chatlog.md` i `chat/full_chat.md` čuvaju sažetak/puni log razgovora sa AI._
- Svrha workbench-a je lični learning log i AI kontekst, ne deo javnog portfolija. | _Svrha workbench-a je lični learning log i AI kontekst, ne deo javnog portfolija._

---

## 🧠 How to use this file daily | _Kako koristiti ovaj fajl svakog dana_

- Na početku novog časkanja, pošalji `repo_settings.md` da AI odmah dobije celokupan kontekst. | _Na početku novog časkanja, pošalji `repo_settings.md` da AI odmah dobije celokupan kontekst._
- Po potrebi dodaj novu sekciju ako uvedemo nove alate (npr. testing, bundler, CI). | _Po potrebi dodaj novu sekciju ako uvedemo nove alate (npr. testing, bundler, CI)._
- Datum `last_updated` u frontmatter-u osveži kada se struktura ili tooling značajno promene. | _Datum `last_updated` u frontmatter-u osveži kada se struktura ili tooling značajno promene._

---
