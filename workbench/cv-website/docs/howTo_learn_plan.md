---
type: learning-plan
date: 2025-12-07
linked_to: html-css-js-portfolio
status: active
phase: junior-to-mid-transition
audience: myself
mentor: github-copilot-claude
---

# 🎓 How To Learn Plan | Plan Učenja

## 🎯 Cilj (Overall Goal)

Razviti **profesionalni GitHub portfolio** sa mini projektima koji pokazuju:

- ✅ Semantic HTML & Accessibility (ARIA)
- ✅ Modern CSS (design tokens, responsive, animations)
- ✅ Vanilla JavaScript (DOM manipulation, events, state management)
- ✅ Clean code practices (comments, structure, readability)

[Portfolio URL: https://github.com/josip-pavlovic-dev/html-css-js-portfolio](https://github.com/josip-pavlovic-dev/html-css-js-portfolio)

---

## 📚 Učenje Pristup (Hybrid Learning Approach)

### **Faza 1: Reverse Engineering (Analiza)**

- AI Mentor mi daje **profesionalan kod** sa best practices
- Ja analiziram **svaki red koda** (HTML, CSS, JS)
- Postavljam pitanja: "Zašto je ovo ovako?" "Šta radi ovaj deo?"
- Radim **fine-tuning** (menjam boje, layout, animacije)

### **Faza 2: Guided Practice (Vođena Vežba)**

- AI Mentor mi daje **zadatak** (npr. "Napravi dropdown menu")
- Ja pokušavam **sam** (30-60 min)
- Šaljem svoj kod → dobijam **feedback**
- Učim iz razlike između mog pristupa i profesionalnog

### **Faza 3: Solo Build (Samostalni Projekat)**

- Ja pravim **kompletan projekat** sam (sa pristupom docs)
- AI Mentor samo **unblockuje** kad se zaglavim
- Na kraju radim **code review** sa Mentorom

---

## 🗓️ 3-Dnevni Plan: Accordion Finalizacija

### **Dan 1 (Danas - 2025-12-07): Hamburger Menu Dubinska Analiza**

#### **Jutro (3h)**

- [x] Pročitati kompletnu anatomiju hamburger menu-a (chatlog proširenje)
- [ ] Objasniti (svojim rečima) kako radi svaki deo:
  - HTML struktura (3 `<span>` linije)
  - CSS animacija (`transform: rotate()` za X oblik)
  - JavaScript toggle (`aria-expanded`, `data-mobile-open`)
  - Mobile sidebar (`transform: translateX(-100%)`)
- [ ] Kreirati `howTo_learn_plan.md` (ovaj fajl)

#### **Popodne (3h)**

- [ ] **Guided Practice:** Modifikovati hamburger menu
  - Zadatak: Promeniti animaciju (umesto X, napravi → strelicu)
  - Zadatak: Dodati backdrop overlay kada je menu otvoren
  - Zadatak: Implementirati "close on outside click"
- [ ] Dokumentovati sve izmene u `2025-12-07_chatlog_nav.md`

#### **Veče (2h)**

- [ ] **Accordion Review:** Uporediti svoj accordion sa CV website hamburger menu
  - Koje tehnike mogu primeniti na accordion? (toggle, ARIA, animacije)
- [ ] Napisati sažetak dana u chatlog

---

### **Dan 2 (2025-12-08): Accordion Polish + Accessibility Audit**

#### **Jutro (3h)**

- [ ] **Solo Build:** Napraviti accordion varijantu bez gledanja starog koda
  - Samo HTML skeleton od AI Mentora
  - CSS i JS potpuno sam
  - Timer: 90 min
- [ ] Poslati kod na review → dobiti feedback

#### **Popodne (3h)**

- [ ] Implementirati AI feedback u accordion kod
- [ ] **Accessibility Audit:**
  - Keyboard navigation (Tab, Enter, Space, Arrow keys)
  - Screen reader testing (NVDA ili built-in narrator)
  - Focus outline vidljivost
  - Color contrast ratio (WCAG AA)
- [ ] Dokumentovati sve A11y findings u `accordion/README.md`

#### **Veče (2h)**

- [ ] **Polish Pass:**
  - Dodati smooth scroll-to-top kada se panel otvori (ako je ispod fold-a)
  - Implementirati auto-close drugih panela (single-open accordion)
  - Dodati loading state animaciju
- [ ] Git commit: "feat: accordion accessibility audit + polish"

---

### **Dan 3 (2025-12-09): Accordion Finalization + Calculator Kickoff**

#### **Jutro (3h)**

- [ ] **Final Review:** Kompletna analiza accordion projekta
  - HTML semantika ✓
  - CSS organization ✓
  - JavaScript best practices ✓
  - Accessibility ✓
  - Responsive design ✓
- [ ] Napisati `accordion/README.md` (project documentation)
- [ ] Screenshot-ovi + demo GIF za GitHub

#### **Popodne (3h)**

- [ ] **Git & Deploy:**
  - Final commit: "feat: accordion project complete"
  - Push to GitHub
  - Update main README.md sa accordion linkom
  - Deploy na GitHub Pages (optional: Netlify/Vercel)
- [ ] **Calculator Kickoff:**
  - Kreirati `calculator/` folder strukturu
  - Napisati `calculator/kickoff.md`
  - Dobiti HTML skeleton od AI Mentora

#### **Veče (2h)**

- [ ] **Calculator Research:**
  - Analizirati 3 profesionalne calculator implementacije
  - Napraviti feature list (basic operations, memory, keyboard support)
  - Skicirati UI layout (paper sketch ili Figma)
- [ ] Napisati `calculator/tasks.md` za Dan 1

---

## 📊 Projekti u Portfolio (Roadmap)

### **✅ Kompletni Projekti**

1. ✅ **FAQ Accordion** (Semantic HTML, ARIA, CSS animations)

### **🚧 U Toku**

1. 🚧 **CV Website** (Responsive navbar, hamburger menu, theme toggle)

### **📅 Planirani (Sledećih 4 Nedelje)**

1. **Calculator** (Grid layout, JavaScript logic, keyboard support) - Dan 4-10
2. **Todo App** (localStorage, CRUD operations, drag-and-drop) - Dan 11-17
3. **Weather App** (API integration, async/await, error handling) - Dan 18-24
4. **Landing Page** (Advanced CSS, scroll animations, forms) - Dan 25-30

---

## 🎯 Učenje Fokus Po Projektima

### **Accordion (Završen)**

- [x] Semantic HTML (`<button>`, `<h2>`, `role="region"`)
- [x] ARIA attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`)
- [x] CSS transitions (`max-height`, `transform: rotate()`)
- [x] JavaScript event handling (`addEventListener`, `getAttribute`)
- [x] Design tokens sistem (`:root` variables)

### **Calculator (Sledeći)**

- [ ] CSS Grid layout (button grid, display area)
- [ ] JavaScript state management (current value, operator, memory)
- [ ] Event delegation (jedan listener za sve buttons)
- [ ] Keyboard events (`keydown`, key mapping)
- [ ] Error handling (division by zero, invalid input)
- [ ] Unit testing (optional: Vitest/Jest)

### **Todo App**

- [ ] localStorage API (persist data)
- [ ] CRUD operations (Create, Read, Update, Delete)
- [ ] Array methods (`filter`, `map`, `find`, `sort`)
- [ ] Drag & Drop API (reorder todos)
- [ ] Form validation
- [ ] Date/time handling

### **Weather App**

- [ ] Fetch API (async/await)
- [ ] Error handling (try/catch, network errors)
- [ ] Loading states (spinners, skeletons)
- [ ] API keys management (.env)
- [ ] JSON parsing
- [ ] Conditional rendering (weather icons based on data)

---

## 📝 Dokumentacija Standardi

Svaki projekat MORA imati:

### **1. README.md**

```markdown
# Project Name

## 🎯 What I Learned

- Bullet list sa ključnim konceptima

## 🛠️ Technologies

- HTML5, CSS3, Vanilla JS

## ✨ Features

- Feature 1
- Feature 2

## 🚀 Live Demo

[Link to GitHub Pages / Netlify]

## 📸 Screenshots

![Desktop view](./screenshots/desktop.png)
![Mobile view](./screenshots/mobile.png)
```

### **2. Inline Comments (Code)**

- **HTML:** ARIA attributes objašnjeni na srpskom (kao što već radiš!)
- **CSS:** Section comments + design token definitions
- **JS:** Function purpose + algorithm explanation

### **3. Git Commits (Conventional Commits)**

```
feat: add accordion toggle functionality
fix: resolve focus trap in hamburger menu
style: improve mobile responsiveness
docs: add accessibility audit notes
refactor: extract theme toggle to separate module
```

---

## 🔄 Daily Routine (Dnevna Rutina)

### **Ujutro (9:00-12:00) - 3h Deep Work**

- ☕ Kickoff review (šta radim danas?)
- 🧠 Guided Practice ili Solo Build
- 📝 Real-time notes u chatlog

### **Popodne (14:00-17:00) - 3h Implementation**

- 💻 Coding session (Pomodoro: 50 min work, 10 min break)
- 🔍 DevTools testing (responsive, accessibility)
- 🎨 Polish pass (animations, colors, spacing)

### **Veče (19:00-21:00) - 2h Review**

- 📊 Git commit + push
- 📚 Documentation update
- 🧭 Tomorrow's plan
- 💬 AI Mentor feedback session

---

## 🎓 Učenje Resursi

### **Korišćeni Dokumentacija (Po Potrebi)**

- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS referenca
- [W3C ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) - Accessibility patterns
- [CSS Tricks](https://css-tricks.com/) - CSS guides i tricks
- [JavaScript.info](https://javascript.info/) - Modern JS tutorial

### **Tools**

- **Editor:** VS Code + Extensions (Prettier, ESLint, Live Server)
- **Browser:** Firefox DevTools / Chrome DevTools
- **Git:** Conventional Commits, feature branches
- **Accessibility:** axe DevTools, NVDA screen reader
- **Design:** Figma (za sketch-ove), Coolors (paleta)

---

## ✅ Uspeh Metrici (Success Metrics)

### **Nedeljni Cilj**

- [ ] Minimum 1 mini projekat završen
- [ ] 15+ Git commits sa clear messages
- [ ] 3+ chatlog fajla sa Q&A sesijama
- [ ] 1 cheatsheet sa novim konceptima

### **Mesečni Cilj**

- [ ] 4-5 mini projekata kompletiranih
- [ ] GitHub README sa live demo linkovima
- [ ] Portfolio website deployment (GitHub Pages)
- [ ] 1 blog post o učenju (optional)

### **3-Mesečni Cilj (Junior → Mid Transition)**

- [ ] 10+ mini projekata u portfolio
- [ ] Mogu samostalno da napravim bilo koji UI component bez pomoći
- [ ] Razumem async JavaScript (Promises, async/await)
- [ ] Mogu da pročitam i razumem tuđi kod (open source projekti)
- [ ] Spreman za Junior Developer poziciju (interviewing)

---

## 🚨 Kada Tražim Pomoć?

### **AI Mentor (GitHub Copilot)**

- ✅ Kada sam **zaglavljen 30+ minuta** na istom problemu
- ✅ Za **code review** nakon što završim feature
- ✅ Za **best practices** kad ne znam šta je profesionalno
- ✅ Za **debugging** složenih bug-ova

### **Samostalno (Docs + Google)**

- ✅ Za **sintaksu** koja mi nije poznata (npr. `Array.filter()`)
- ✅ Za **CSS properties** koje nisam ranije koristio
- ✅ Za **browser compatibility** proveru (Can I Use)
- ✅ Za **error messages** koje ne razumem

---

## 🎯 Final Note

**Učenje kroz projekat je najbolji način.**

Ne čitam knjige od početka do kraja. Ne gledam 10h tutoriale.

**Radim projekte. Zaglavim se. Tražim rešenje. Učim. Ponavljam.**

To je **Hybrid Learning Approach** - kombinacija:

1. **Reverse Engineering** (analiziram profesionalan kod)
2. **Guided Practice** (vežbam sa feedback-om)
3. **Solo Build** (pravim sam, tražim pomoć samo kad zaglavim)

**Cilj nije da naučim SVE.**

**Cilj je da naučim DA UČIM - kako brzo da rešavam probleme, gde da tražim odgovore, kako da primenim novo znanje.**

---

## 📅 Tracking Progress

| Datum      | Projekat    | Status         | Link                                |
| ---------- | ----------- | -------------- | ----------------------------------- |
| 2025-12-07 | Accordion   | ✅ Complete    | [/accordion](../../../accordion/)   |
| 2025-12-09 | Calculator  | 🚧 In Progress | [/calculator](../../../calculator/) |
| TBD        | Todo App    | 📅 Planned     | -                                   |
| TBD        | Weather App | 📅 Planned     | -                                   |

---

**Ažurirano:** 2025-12-07
**Sledeći Review:** 2025-12-14 (nedeljni check-in)

---
