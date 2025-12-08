---
type: kickoff
date: 2025-12-06
linked_to: grid-learning-session
status: in_progress
phase: learning
milestone: css_grid_mastery
environment: wsl2+vscode
---

# 🚀 Daily Kickoff — 2025-12-06

## 🎯 Goal of the day

> Savladati CSS Grid od osnova do naprednih koncepata kroz praktične vežbe. Fokus na **display: grid**, **grid-template-columns**, **grid-areas**, **span**, i **responsive patterns**.

---

## 🔢 Tasks

- [x] Setup HTML i CSS struktura sa 6 Grid lekcija
- [ ] Lekcija 1: Osnove Grid-a (3 kolone) + Edge Cases (button, img, input, overflow)
- [ ] Lekcija 2: Auto-fit sa repeat() - responzivan grid bez media queries
- [ ] Lekcija 3: Različite veličine kolona i redova (2fr, 1fr)
- [ ] Lekcija 4: Grid Areas - vizuelna mapa layout-a (header, sidebar, main, footer)
- [ ] Lekcija 5: Span - elementi preko više ćelija
- [ ] Lekcija 6: Grid Auto-Flow Dense - inteligentno popunjavanje

---

## 💡 AI Guidance

> **GitHub Copilot** mi pomaže kao **Senior Mentor**. Fokus na:
>
> - Praktične primere sa različitim tipovima elemenata (img, button, input)
> - Edge case-ove (overflow, prazan grid item, različite visine)
> - DevTools analizu (grid lines, gaps, fraction units)
> - Poređenje sa Flexbox (kada koristiti šta)

---

## 🧠 Notes

### Ključni Insights

- Grid lines počinju od 1, ne od 0
- Ako imam 3 kolone → 4 grid lines (početak + 3 preloma)
- `1fr` = "fraction" - uzmi ostatak prostora
- `gap` se NE dodaje na početku/kraju grid-a, samo između
- Visina reda = visina NAJ VIŠEG elementa u tom redu
- Prazna ćelija I DALJE zauzima mesto u layout-u

---

### Strategija

1. Prvo proći SVE lekcije 1-6 (pregled)
2. Zatim detaljno raditi Edge Cases
3. Na kraju napraviti finalni playground sa kombinacijama

---

## 📎 Linked Files

- `/workbench/scratch/vezba/index.html` | _Grid praktične vežbe_
- `/workbench/scratch/vezba/styles.css` | _Grid CSS sa 6 lekcija_
- `/workbench/2025-12-06_grid-basic/kickoff.md` | _Plan za dan_
- `/workbench/2025-12-06_grid-basic/tasks.md` | _Task lista_
- `/workbench/2025-12-06_grid-basic/cheatsheet.md` | _Grid referenca_
