# ✅ Footer Mastery — 24 Task-a (3 Dana × 8 Sati)

## DAN 1 — Teorija + Analiza (8 sati)

### Blok 1: 2 sata (Teorija Footer-a)

- [ ] **1.1** Čitaj: Šta je footer i zašto je bitan? (15 min)

  - Očekivani rezultat: Razumem 5 razloga zašto je footer važan
  - Ključ: SEO, trust signals, pravne info, dodatna navigacija

- [ ] **1.2** Čitaj: Anatomija footer-a (20 min)

  - Skiciraj: Struktura sa kolonama, kontakt, socials
  - Svaki element ima svoju svrhu

- [ ] **1.3** Čitaj: Semantic HTML za footer (15 min)

  - Nauči: `<footer>`, `<nav>`, `<dl>`, `<section>`
  - Vežba: Ispravka loše struktuiranog footer HTML-a

- [ ] **1.4** Čitaj: Dark mode i kontrast u footer-u (10 min)
  - Proveri kontrast (min 4.5:1)
  - Testiraj: Light vs. dark mode boje

---

### Blok 2: 2 sata (Analiza Profesionalnih Footer-a)

- [ ] **1.5** Analiziraj: Stripe.com footer (20 min)

  - Screenshot footer-a
  - Prebrojaj kolone, linkove, organizaciju
  - Ključ: Minimalističan, fokus na linkove

- [ ] **1.6** Analiziraj: GitHub.com footer (20 min)

  - Screenshot footer-a
  - Kako se linkovi organizuju?
  - Dark mode podrška?

- [ ] **1.7** Analiziraj: Apple.com footer (20 min)

  - Screenshot footer-a
  - Koliko kolona? Kako je dizajn?
  - Branding, logo, lokalizacija?

- [ ] **1.8** Analiziraj: Framer.com footer (20 min)
  - Screenshot footer-a
  - Micro-interactions? Hover efekti?
  - Newsletter signup?

---

### Blok 3: 2 sata (Best Practices)

- [ ] **1.9** Nauči: 10 best practices za footer-e (30 min)

  - Semantic HTML
  - Responsive dizajn
  - Pristupačnost
  - Performance
  - SEO optimizacija

- [ ] **1.10** Nauči: Česte greške pri footer-u (30 min)

  - Nepotrebne kolone
  - Loša navigacija
  - Nečitljiv tekst
  - Nefunkcionalni linkovi

- [ ] **1.11** Nauči: Responsive footer (30 min)

  - Desktop: 3 kolone
  - Tablet: 2 kolone
  - Mobile: 1 kolona sa separatorima

- [ ] **1.12** Nauči: SEO u footer-u (20 min)
  - Linkovi su crawlable?
  - Sitemap linkovi?
  - Schema.org markup?

---

### Blok 4: 2 sata (Planiranje Tvog Footer-a)

- [ ] **1.13** Ispuni: Footer Planning Template (30 min)

  - Kolone: Navigation, Contact, Socials
  - Linkovi: Koje stranice?
  - Kontakt: Email, telefon, lokacija?
  - Socials: GitHub, LinkedIn, Twitter?

- [ ] **1.14** Ispuni: Responsive Breakpoints Plan (20 min)

  - Mobile (< 768px): 1 kolona
  - Tablet (768-1023px): 2 kolone
  - Desktop (1024px+): 3 kolone

- [ ] **1.15** Ispuni: Accessibility Checklist (20 min)

  - Semantic HTML?
  - Heading hierarhija?
  - Kontrast?
  - Focus state?

- [ ] **1.16** Ispuni: Color Palette za Footer (10 min)
  - Light mode: Koje boje?
  - Dark mode: Koje boje?
  - Hover: Koja boja?

---

## DAN 2 — Implementacija (8 sati)

### Blok 1: 2 sata (HTML Struktura)

- [ ] **2.1** Kreiraj: Osnovna HTML struktura (30 min)

  - `<footer class="site-footer">`
  - `<div class="site-footer-inner">`
  - `<div class="site-footer-content">`
  - `<section class="footer-col">` × 3

- [ ] **2.2** Dodaj: Navigation kolona (20 min)

  - `<h3 class="footer-heading">Navigacija</h3>`
  - `<nav class="footer-nav">`
  - 4-6 linkova (Početna, O meni, Projekti, Blog, Kontakt, itd.)

- [ ] **2.3** Dodaj: Contact koluna (20 min)

  - `<h3 class="footer-heading">Kontakt</h3>`
  - `<dl class="footer-contact">`
  - Email, Telefon, Lokacija (ako je javno)

- [ ] **2.4** Dodaj: Socials koluna (20 min)

  - `<h3 class="footer-heading">Pratite Me</h3>`
  - `<ul class="footer-socials">`
  - GitHub, LinkedIn, Twitter (ako je javno)

- [ ] **2.5** Dodaj: Bottom sekcija (10 min)
  - `<div class="footer-bottom">`
  - Copyright tekst
  - Privacy, Terms linkovi

---

### Blok 2: 2 sata (CSS Layout — Desktop)

- [ ] **2.6** CSS: Grid layout za site-footer-content (30 min)

  - `display: grid`
  - `grid-template-columns: repeat(3, 1fr)`
  - `gap: var(--space-lg)` (1.5rem)

- [ ] **2.7** CSS: Footer heading stilovi (20 min)

  - `font-size: var(--text-sm, 0.95rem)`
  - `font-weight: 600`
  - `text-transform: uppercase`
  - `letter-spacing: 0.05em`

- [ ] **2.8** CSS: Navigation linkovi (20 min)

  - `display: flex`
  - `flex-direction: column`
  - `gap: var(--space-sm)`
  - Hover effect sa color change

- [ ] **2.9** CSS: Footer bottom (20 min)

  - `display: flex`
  - `justify-content: space-between`
  - Border-top separacija

- [ ] **2.10** CSS: Boje — Light mode (10 min)
  - Background: `var(--color-bg)`
  - Text: `var(--color-text)`
  - Muted: `var(--color-muted)`

---

### Blok 3: 2 sata (CSS Responsive)

- [ ] **2.11** CSS: Tablet layout (768px-1023px) (20 min)

  - `grid-template-columns: repeat(2, 1fr)`
  - Manji gap: `var(--space-md)`

- [ ] **2.12** CSS: Mobile layout (< 768px) (20 min)

  - `grid-template-columns: 1fr`
  - Separatori između kolona: `border-bottom`
  - Footer bottom: `flex-direction: column`

- [ ] **2.13** CSS: Large desktop (1280px+) (20 min)

  - Veći gap: `var(--space-2xl)`
  - Extra padding

- [ ] **2.14** CSS: Hover efekti na linkovima (20 min)

  - Color: `var(--color-primary)`
  - Subtle underline ili background

- [ ] **2.15** Testiraj: Responsive na DevTools (20 min)
  - 320px (Mobile)
  - 768px (Tablet)
  - 1024px (Desktop)

---

### Blok 4: 2 sata (Dark Mode + Kontrast)

- [ ] **2.16** CSS: Dark mode sekcija (30 min)

  - `html[data-theme="dark"] .site-footer`
  - Background, border, text boje
  - Headings boja (svetlija)

- [ ] **2.17** CSS: Dark mode linkovi (20 min)

  - Hover boja
  - Kontrast provera (4.5:1)
  - Focus state

- [ ] **2.18** Testiraj: Dark mode sa DevTools (20 min)

  - Klikni moon ikonu
  - Провери čitljivost
  - Kontrast OK?

- [ ] **2.19** Proveri: Kontrast sa WebAIM (10 min)

  - <https://webaim.org/resources/contrastchecker/>
  - Sve boje imaju minimum 4.5:1?

- [ ] **2.20** Testiraj: Full footer na celoj stranici (10 min)
  - Kako izgleda sa Hero sekcijom?
  - Provegleda pažnje?

---

## DAN 3 — Poliranje + Testiranje (8 sati)

### Blok 1: 2 sata (Micro-interactions)

- [ ] **3.1** Dodaj: Hover animaciju na nav linkove (30 min)

  - `::before` pseudo-element za underline
  - `width: 0 → 100%` sa `0.2s` transition
  - Ili subtle background sa `::before`

- [ ] **3.2** Dodaj: Focus state sa outline (20 min)

  - `outline: 2px solid var(--color-primary)`
  - `outline-offset: 4px`
  - Testiranje sa Tab

- [ ] **3.3** Dodaj: Hover na social linkove (20 min)

  - `transform: translateY(-2px)`
  - Background color change
  - Scale efekt (opciono)

- [ ] **3.4** Dodaj: Back-to-top button (ako želiš) (20 min)

  - Button sa `scroll-behavior: smooth`
  - Hover effect
  - Hover na klik → scroll na vrh

- [ ] **3.5** Testiraj: Sve micro-interactions (20 min)
  - Hover efekti su vidljivi?
  - Focus je vidljiv na Tab?
  - Nema "jitter"-a?

---

### Blok 2: 2 sata (Accessibility)

- [ ] **3.6** Provera: Semantic HTML (20 min)

  - `<footer>` je tu?
  - `<nav>` ima `class="footer-nav"`?
  - `<dl>` za kontakt?
  - `<h3>` za naslove?

- [ ] **3.7** Provera: Heading hierarhija (20 min)

  - Naslovi su `<h3>` (ne `<h2>`)?
  - Logičan redosled?
  - Screen reader-i čitaju jasno?

- [ ] **3.8** Provera: Fokus navigacija (20 min)

  - Pritisni Tab → Fokus ide kroz sve linkove?
  - Focus je vidljiv?
  - Redosled je logičan?

- [ ] **3.9** Provera: Kontrast (20 min)

  - Svaka boja ima minimum 4.5:1?
  - Dark mode je čitljiv?
  - WebAIM provera

- [ ] **3.10** DevTools: Accessibility audit (20 min)
  - Chrome DevTools → Lighthouse → Accessibility
  - Trebalo bi 100% (ili 90+)
  - Ako ima problema → fiksaj

---

### Blok 3: 2 sata (Performance + SEO)

- [ ] **3.11** Provera: CSS performance (20 min)

  - Nema `transition: all` (koristi specifične properties)
  - Nema bloat-a u CSS-u
  - GPU-accelerated (transform, opacity)

- [ ] **3.12** Provera: HTML struktura za SEO (20 min)

  - Linkovi su crawlable?
  - Ima dovoljno linkova za indexiranje?
  - Rel="noopener" za eksterne linkove?

- [ ] **3.13** Provera: Loading performance (20 min)

  - Chrome DevTools → Network
  - Footer CSS je mali?
  - Nema velikih slika?

- [ ] **3.14** Provera: Mobile performance (20 min)

  - Chrome DevTools → Lighthouse
  - Mobile score (trebalo bi 90+)
  - CLS, LCP, FID OK?

- [ ] **3.15** DevTools: Full page audit (20 min)
  - Lighthouse → Run audit
  - Performance, Accessibility, Best Practices, SEO

---

### Blok 4: 2 sata (Finalna Provera + Dokumentacija)

- [ ] **3.16** Provera: Desktop (1440px) (20 min)

  - Kako izgleda footer?
  - Svi elementi su vidljivi?
  - Nema overlap-a ili problema?

- [ ] **3.17** Provera: Tablet (768px) (20 min)

  - 2 kolone su vidljive?
  - Razmak između kolona?
  - Mobile elements nisu vidljivi?

- [ ] **3.18** Provera: Mobile (320px) (20 min)

  - 1 kolona je vidljiva?
  - Separatori između kolona?
  - Footer bottom je čitljiv?

- [ ] **3.19** Provera: Cross-browser (20 min)

  - Chrome (OK?)
  - Firefox (OK?)
  - Safari (OK?)
  - Edge (OK?)

- [ ] **3.20** Kreiraj: Footer documentation (10 min)
  - Snimaj screenshot-e
  - Zabeleži što je urađeno
  - Ključne CSS vrednosti

---

## Čeklist Pre nego Što je Gotovo

- [ ] **HTML** je semantic (`<footer>`, `<nav>`, `<dl>`)
- [ ] **CSS layout** je responsive (1 → 2 → 3 kolone)
- [ ] **Dark mode** radi sa tačnim bojama
- [ ] **Hover efekti** su vidljivi (underline, color change)
- [ ] **Focus state** je vidljiv (outline, background)
- [ ] **Kontrast** je minimum 4.5:1 (AA)
- [ ] **Linkovi** su radi (nema broken linkova)
- [ ] **Performance** je OK (Lighthouse 90+)
- [ ] **A11y audit** je OK (Lighthouse 90+)
- [ ] **Mobile** je čitljiv (320px, 375px)
- [ ] **Tablet** je čitljiv (768px)
- [ ] **Desktop** je lep (1440px+)
- [ ] **Dark mode** je testiram
- [ ] **Screenshot-i** su snimljeni

---

## Summary — Dan Po Dan

### Dan 1 (Teorija)

```
Sati 1-2: Šta je footer + zašto je bitan
Sati 3-4: Analiza 4 profesionalna footer-a (Stripe, GitHub, Apple, Framer)
Sati 5-6: Best practices + responsive strategija
Sati 7-8: Planiranje tvog footer-a
```

### Dan 2 (Kodiranje)

```
Sati 1-2: HTML struktura (semantic)
Sati 3-4: CSS desktop layout (grid)
Sati 5-6: CSS responsive (tablet, mobile)
Sati 7-8: Dark mode + kontrast
```

### Dan 3 (Poliranje)

```
Sati 1-2: Micro-interactions (hover, focus)
Sati 3-4: Accessibility audit
Sati 5-6: Performance + SEO
Sati 7-8: Finalna provera + dokumentacija
```

---

## Očekivani Rezultat

Po završetku Dan 3, tvoj footer će biti:

✅ **Profesionalan** — Kao na Stripe, GitHub, Apple
✅ **Responsive** — Mobile, tablet, desktop svaki lepo
✅ **Pristupačan** — WCAG AA standard (kontrast, focus, semantic)
✅ **Brz** — Lighthouse 90+ za performance
✅ **SEO optimizovan** — Linkovi za crawler-e
✅ **Dark mode** — Obe teme su podržane
✅ **Poliran** — Micro-interactions i animacije

**Footer će biti tvoj PROFESIONALNI završetak stranice!** 🎉
