# 🏗️ Workbench - Professional Learning & Development

> **Status:** Active Development | **Version:** 1.0.0 | **Last Updated:** 2025-12-09

## 🎯 Svrha

Ovaj workbench je **kompletna razvojna osnova** za učenje web development-a. Organizovan je za **long-term growth** - all što kreiraš sada možeš koristiti za 6+ meseci kako se usavršavaš.

---

## 📁 Folder Structure

```
workbench/
├── 📚 teoria/                    ← LEARNING PATH
│   ├── css/                      ← CSS Cheatsheet-ovi
│   │   ├── 01-specificity-cascade.md
│   │   ├── 02-custom-properties.md
│   │   ├── 03-responsive-design.md
│   │   ├── 04-flexbox-mastery.md
│   │   ├── 05-grid-fundamentals.md
│   │   ├── 06-color-theory.md
│   │   └── 07-animations-transitions.md
│   ├── javascript/               ← JavaScript (U Razvoju)
│   ├── html/                     ← HTML & Accessibility (U Razvoju)
│   └── README.md                 ← Learning Path Index
│
├── 🏛️ css-architecture/         ← REUSABLE CSS SYSTEM
│   ├── variables/
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   ├── layout.css
│   │   ├── navigation.css
│   │   ├── animations.css
│   │   └── borders.css
│   ├── README.md                 ← Quick Start
│   └── ARCHITECTURE.md           ← Technical Deep Dive
│
├── 🚀 cv-website/               ← MAIN PROJECT
│   ├── css/                      ← CSS Files
│   │   ├── variables/            ← NOVO: Separate variables
│   │   │   └── (imports from css-architecture/)
│   │   └── day01.css             ← Main stylesheet (now import-based)
│   ├── js/
│   ├── docs/
│   └── ...
│
├── 📦 projects-archive/         ← COMPLETED PROJECTS
│   ├── accordion/
│   ├── calculator/
│   ├── todo-app/
│   └── weather-app/
│
└── 📊 learning-progress/        ← TRACK YOUR JOURNEY
    ├── log.md                    ← Daily progress notes
    ├── skills-inventory.md       ← What you've learned
    └── goals.md                  ← Next 6-month goals
```

---

## 🎓 Quick Start Guide

### Za Učenje

1. **Otvori** `teoria/README.md` - svi cheatsheet-ovi su tamo
2. **Kreni sa** `teoria/css/01-specificity-cascade.md` - foundations first
3. **Primeni** na cv-website projektu - learn by doing
4. **Testiraj** u browser-u sa DevTools - vidis rezultate

### Za Projekte

1. **Koristi CSS sistem** - sve varijable su u `css-architecture/`
2. **Import varijable** - `@import` iz `css-architecture/variables/*.css`
3. **Struktuiraj folde** - organizuj po komponentama
4. **Dokumentuj** - svaka component ima README

### Za Future

1. **Archive completeds** - pomeraji završene projekte u `projects-archive/`
2. **Update progress** - čuvaj note u `learning-progress/log.md`
3. **Skaluj sistemat** - dodaj nove cheatsheet-ove kada učiš nove teme

---

## 🌳 File Organization Principles

### ✅ GOOD (Kako bi trebalo)

```
project/
├── css/
│   ├── variables/          ← Centralizovane varijable
│   ├── components/         ← Component-specific styles
│   └── main.css            ← Samo @imports
├── docs/
│   ├── cheatsheets/        ← Learning materials
│   └── guides/             ← Project-specific guides
└── README.md               ← Project overview
```

### ❌ BAD (Kako se lako desi)

```
project/
├── styles.css              ← Sve je u jednom fajlu!
├── styles-dark.css         ← Duplicirani CSS
├── styles-old.css          ← Stari CSS
├── my-notes.txt            ← Random notes
└── ...chaos/
```

---

## 🎯 Key Features

### 1. **CSS Variables System** 🎨

- ✅ Centralizovane boje, spacing, tipografija
- ✅ Light & Dark mode support
- ✅ Responsive sa media queries
- ✅ Production-ready

### 2. **Learning Path** 📚

- ✅ Organizovani cheatsheet-ovi
- ✅ Od fundamentals do advanced
- ✅ Praktični primeri
- ✅ Checklist za svaki topic

### 3. **Project Management** 📦

- ✅ Aktivni projekti u `cv-website/`
- ✅ Completed projects u `projects-archive/`
- ✅ Learning progress tracking
- ✅ Skills inventory

### 4. **Professional Standards** ⭐

- ✅ Semantic HTML
- ✅ Accessibility (ARIA)
- ✅ CSS best practices
- ✅ Git-friendly structure

---

## 🚀 Workflow - Daily Usage

### Svaki Dan

1. **Otvori workspace** u VS Code
2. **DevTools + CSS Architecture** - live development
3. **Testiraj u browser-u** - vidis promene real-time
4. **Čuvaj progress** u `learning-progress/log.md`
5. **Git commit** - "Added flexbox practice"

### Svakonedin

1. **Review ključne learnings** - koja su tri nova koncepta naučena?
2. **Update skills inventory** - šta sam naučio?
3. **Plan sledeću nedelju** - šta dalje?

### Svakog Meseca

1. **Archive completed projects**
2. **Review progress vs goals**
3. **Plan sledeći mesec**
4. **Add new cheatsheet ako si naučio nešto novo**

---

## 📊 Progress Tracking

### `learning-progress/log.md` - Daily Notes

```markdown
## December 2025

### 2025-12-09

- ✅ Naučio: CSS Cascade & Specificity
- ✅ Praktikovao: Navigation light/dark mode
- ❌ Fail: Zaboravio fallback vrednosti
- 🎯 Next: Custom Properties deep dive

### 2025-12-10

- ✅ Naučio: CSS Custom Properties
- ✅ Built: Professional color system
- 🎯 Next: Responsive design patterns
```

---

## 💡 Pro Tips

### 1. **Koristi DevTools Workspace Sync**

- DevTools automatski pravi backup CSS fajlova
- Možeš direktno editovati u DevTools → spasilac fajlova

### 2. **Branch za Učenje**

```bash
git checkout -b learning/css-specificity
# Učiš bez uticaja na main branch
```

### 3. **Reuse CSS System**

Koristi `css-architecture/` kao template za sve budućne projekte!

### 4. **Archive Regularly**

Premeštaj završene projekte u `projects-archive/` da drži workspace clean.

---

## 🎓 Learning Resources Linked

- **teoria/** - Tvoja vlastita baza znanja ✨
- **css-architecture/** - Reusable professional system 🏛️
- **cv-website/** - Live practice ground 🚀
- **projects-archive/** - Portfolio showcase 🌟

---

## ✅ First Week Checklist

- [ ] Prođi kroz `teoria/css/01-specificity-cascade.md`
- [ ] Razumej CSS Custom Properties iz `02-custom-properties.md`
- [ ] Setup `css-architecture/` varijable na cv-website
- [ ] Testiraj light/dark mode sa novim sistemom
- [ ] Kreiraj prvi entry u `learning-progress/log.md`
- [ ] Commit sve u Git

---

## 🔄 Maintenance

### Čuvaj Čistim:

- Obrisi `.css.bak` i `*.old` fajlove
- Organizuj `projects-archive/` po godinama
- Review `teoria/` svakog meseca - dodaj nove learnings

### Backup:

- Git commit svakodnevno
- Push na GitHub za cloud backup
- Ne čuvaj samo lokalno!

---

## 📞 Reference

| Resource         | Link                         |
| ---------------- | ---------------------------- |
| CSS Architecture | `css-architecture/README.md` |
| Learning Path    | `teoria/README.md`           |
| Progress Log     | `learning-progress/log.md`   |
| Main Project     | `cv-website/`                |

---

## 🎉 Long-Term Vision

Ovaj workbench je **foundation** za:

- ✅ Učenje web development-a (3-6 meseci)
- ✅ Portfolio building (projekti su tu!)
- ✅ Interview preparation (znanje je dokumentovano)
- ✅ Continuous learning (dodaj nova cheatsheet-ove)

**Za 6 meseci ćeš imati:**

- 📚 Kompletnu bazu znanja
- 🏆 Portfolio sa 5+ projekata
- 📖 Sopstvenu studiju materijal
- 🚀 Spreman za zaposlenje kao junior developer!

---

**Kreirano:** 2025-12-09 | **Status:** Production Ready | **Verzija:** 1.0.0

> 💪 **Veruj u proces! Ova struktura je stvorena da te vodi prema careers-u kao Web Developer-a!**
