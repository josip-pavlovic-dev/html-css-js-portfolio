# Day 03 – Responsive Navigation & Media Queries

## 🎯 Fokus dana

- Razumevanje strategije gde smeštati media queries (inline po komponenti + globalni blokovi).
- Prilagođavanje navigacije za mobilne, tablet i desktop širine.
- Korišćenje dizajn tokena (nav variables) da promene budu sistemske, ne ad-hoc.

## 🧩 Šta radiš danas

- Ažuriraš nav varijable u `css-architecture/variables/navigation.css` (padding, font-size, gap per breakpoint).
- Podešavaš `index.css` da koristi te varijable i dodaje tablet/desktop override blokove.
- Testiraš u DevTools: 320px, 480px, 768px, 1024px, 1280px.

## ✅ Rezultat

- Navigacija se ne raspada između 768–1024px (smaller padding/gap/font-size, nowrap + horizontal scroll fallback).
- Konzistentna upotreba varijabli: nav veličine se menjaju na jednom mestu.
- Jasna organizacija media query-ja (lokalni inline + završni responsive blokovi).
