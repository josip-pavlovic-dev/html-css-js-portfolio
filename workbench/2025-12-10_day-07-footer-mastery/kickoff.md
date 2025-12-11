# 🚀 Footer Mastery — 72h Kickoff Plan

## Dan 1: Teorija + Analiza (8 sati)

### Struktura Dana

```
Sati 1-2: Šta je footer + zašto je bitan
Sati 3-4: Analiza 4 profesionalna footer-a
Sati 5-6: Best practices + responsive
Sati 7-8: Planiranje tvog footer-a
```

---

### Sati 1-2: Šta je Footer? (Teorija)

**Cilj:** Razumem ulogu footer-a u web dizajnu

**Aktivnosti:**

1. Čitaj: `cheatsheet.md` sekcija "1. Anatomija Footer-a" (15 min)
2. Skiciraj: Nacrtaj strukturu footer-a sa kolonama (10 min)
3. Razmisli: 5 razloga zašto je footer važan (15 min)

   - SEO (linkovi za crawler-e)
   - Trust signals (copyright, legal)
   - Pristupačnost (dodatne opcije)
   - UX (brza navigacija)
   - Brand (ponavljanje logotipa)

4. Čitaj: `cheatsheet.md` sekcija "3. HTML Struktura" (20 min)
5. Nauči: Semantic HTML (`<footer>`, `<nav>`, `<dl>`) (10 min)

**Očekivani rezultat:** Znam što je footer i zašto ga trebam

---

### Sati 3-4: Analiza Profesionalnih Footer-a

**Cilj:** Vidiš kako to rade Stripe, GitHub, Apple, Framer

**Aktivnosti:**

1. **Stripe.com footer** (20 min)

   - Otvori `https://stripe.com` u browser-u
   - Skroluj na dno
   - Screenshot footer-a
   - Prebrojaj: Kolone? Linkovi? Sekcije?
   - Zabilježi: Kako su linkovi organizovani?

2. **GitHub.com footer** (20 min)

   - Otvori `https://github.com` u browser-u
   - Screenshot footer-a
   - Razlike od Stripe?
   - Logo vidljiv? Socials?

3. **Apple.com footer** (20 min)
   - Otvori `https://apple.com` u browser-u
   - Screenshot footer-a
   - Broj kolona? Kako izgleda?
   - Branding prisutno?

**Tabela Poređenja:**

| Sajt   | Kolone | Linkovi | Logo | Socials |
| ------ | ------ | ------- | ---- | ------- |
| Stripe | 4-5    | Puno    | Ne   | Ne      |
| GitHub | 3-4    | ~20     | Da   | Da      |
| Apple  | 5+     | Puno    | Da   | Ne      |

**Očekivani rezultat:** Vidiš pattern kako se footer-i grade

---

### Sati 5-6: Best Practices

**Cilj:** Znam pravila za profesionalan footer

**Aktivnosti:**

1. Čitaj: `cheatsheet.md` sekcija "2. Best Practices" (30 min)
2. Nauči: 10 obaveznih praksi (10 min)

   - Semantic HTML
   - 3-4 kolone sa jasnim sekcijama
   - Responsive (1 kolona mobile)
   - Dark mode podrška
   - Focus state vidljiv
   - Kontrast 4.5:1
   - Brz loading
   - SEO linkovi
   - Legal linkovi (Privacy, Terms)
   - Copyright sa godinom

3. Nauči: Česte greške (15 min)

   - Premalo informacija
   - Loša organizacija
   - Nečitljive boje
   - Broken linkovi
   - Nema dark mode-a

4. Nauči: Responsive breakpoints (10 min)
   - Mobile (< 768px): 1 kolona
   - Tablet (768-1023px): 2 kolone
   - Desktop (1024px+): 3 kolone

**Očekivani rezultat:** Znam što je "profesionalno" za footer

---

### Sati 7-8: Planiranje Tvog Footer-a

**Cilj:** Znam tačno što trebam da napravim

**Aktivnosti:**

1. Kreiraj: Footer Planning Document (30 min)

   ```
   Kolone:
   - [ ] Navigacija: Početna, O meni, Projekti, Blog, Kontakt
   - [ ] Kontakt: Email, Telefon, Lokacija
   - [ ] Socials: GitHub, LinkedIn, Twitter

   Boje:
   - [ ] Light: Text, Muted, Primary hover
   - [ ] Dark: Adaptacija po potrebi

   Responsive:
   - [ ] Mobile: 1 kolona sa separatorima
   - [ ] Tablet: 2 kolone
   - [ ] Desktop: 3 kolone
   ```

2. Nacrtaj: Wireframe footer-a na papiru (20 min)

   ```
   ┌─────────────────────────────────┐
   │ NAV    │ KONTAKT   │ SOCIALS      │
   │ • Link │ Email     │ GitHub       │
   │ • Link │ Phone     │ LinkedIn     │
   │        │ Location  │ Twitter      │
   ├─────────────────────────────────┤
   │ © 2025 | Privacy | Terms         │
   └─────────────────────────────────┘
   ```

3. Spremi: Plan u tekstualnoj formi (20 min)

**Očekivani rezultat:** Imam konkretan plan za tvoj footer

---

## Dan 2: Kodiranje (8 sati)

### Sati 1-2: HTML — Semantic Struktura

**Cilj:** HTML je semantic i organizovan

**Kod što ćeš napisati:**

```html
<footer class="site-footer">
  <div class="site-footer-inner">
    <div class="site-footer-content">
      <!-- Kolona 1 -->
      <section class="footer-col">
        <h3 class="footer-heading">Navigacija</h3>
        <nav class="footer-nav">
          <a href="/">Početna</a>
          <a href="/projects">Projekti</a>
          <!-- ... -->
        </nav>
      </section>

      <!-- Kolona 2 -->
      <section class="footer-col">
        <h3 class="footer-heading">Kontakt</h3>
        <dl class="footer-contact">
          <dt>Email</dt>
          <dd><a href="mailto:...">email@example.com</a></dd>
        </dl>
      </section>

      <!-- Kolona 3 -->
      <section class="footer-col">
        <h3 class="footer-heading">Pratite Me</h3>
        <ul class="footer-socials">
          <li><a href="...">GitHub</a></li>
        </ul>
      </section>
    </div>

    <div class="footer-bottom">
      <p class="site-footer-copy">© 2025 ...</p>
      <nav class="footer-legal">
        <a href="/privacy">Privatnost</a>
        <a href="/terms">Uslovi</a>
      </nav>
    </div>
  </div>
</footer>
```

**Aktivnosti:**

1. Otvori: `index.html` u VS Code
2. Lokalizuj: Trenutni footer (premali, samo copyright)
3. Zameni: Sa HTML strukturom gore
4. Proverim: HTML je validan (DevTools > Elements)

**Očekivani rezultat:** Semantic HTML footer je "skeleton"

---

### Sati 3-4: CSS — Desktop Layout

**Cilj:** Desktop izgleda kao Stripe/GitHub

**Kod što ćeš napisati:**

```css
.site-footer {
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  padding: var(--space-2xl) var(--space-lg);
  margin-top: var(--space-3xl);
}

.site-footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 kolone */
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-nav a {
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-nav a:hover {
  color: var(--color-primary);
}

/* ... ostali stilovi */
```

**Aktivnosti:**

1. Otvori: `css/index.css`
2. Dodaj: CSS kod gore na kraju fajla
3. Testiraj: 1440px — kako izgleda?
4. Proverim: 3 kolone su vidljive
5. Proverim: Linkovi su vidljivi

**Očekivani rezultat:** Desktop footer izgleda kao pro!

---

### Sati 5-6: CSS — Responsive Layout

**Cilj:** Tablet i mobile su čitljivi

**Kod:**

```css
@media (width >= 768px) and (width < 1024px) {
  .site-footer-content {
    grid-template-columns: repeat(2, 1fr); /* 2 kolone */
  }
}

@media (width < 768px) {
  .site-footer-content {
    grid-template-columns: 1fr; /* 1 kolona */
  }

  .footer-col {
    padding-bottom: var(--space-md);
    border-bottom: 1px solid var(--color-border);
  }

  .footer-col:last-child {
    border-bottom: none;
  }

  .footer-bottom {
    flex-direction: column;
  }
}
```

**Aktivnosti:**

1. Dodaj: Responsive CSS kod
2. Testiraj: DevTools Responsive Mode
   - 320px (Mobile): 1 kolona OK?
   - 768px (Tablet): 2 kolone OK?
   - 1440px (Desktop): 3 kolone OK?

**Očekivani rezultat:** Responsive je flawless!

---

### Sati 7-8: CSS — Dark Mode

**Cilj:** Dark mode je čitljiv i lep

**Kod:**

```css
html[data-theme="dark"] .site-footer {
  background: var(--color-bg);
  border-top-color: var(--color-border);
}

html[data-theme="dark"] .footer-nav a {
  color: var(--color-muted);
}

html[data-theme="dark"] .footer-nav a:hover {
  color: var(--color-primary);
}

/* ... dark mode za sve boje */
```

**Aktivnosti:**

1. Dodaj: Dark mode CSS
2. Testiraj: Klikni moon ikonu
3. Proverim: Footer je čitljiv?
4. Proverim: Kontrast je OK?

**Očekivani rezultat:** Dark mode je profesionalan!

---

## Dan 3: Poliranje + Testiranje (8 sati)

### Sati 1-2: Micro-interactions

**Cilj:** Footer ima elegantne hover efekte

**Kod:**

```css
.footer-nav a::before {
  content: "→";
  margin-right: var(--space-2xs);
  opacity: 0;
  transition: opacity 0.2s;
}

.footer-nav a:hover::before {
  opacity: 1;
}

.social-link:hover {
  transform: translateY(-2px);
  background: var(--color-primary);
}
```

**Aktivnosti:**

1. Dodaj: Hover efekti
2. Testiraj: Hover preko linkova — vidim arrow?
3. Testiraj: Hover preko social linkova — ide dole?

**Očekivani rezultat:** Micro-interactions su vidljivi!

---

### Sati 3-4: Accessibility Testing

**Cilj:** Footer je pristupačan (WCAG AA)

**Aktivnosti:**

1. DevTools: Accessibility Audit
   - Chrome DevTools > Lighthouse > Accessibility
   - Trebalo bi 90+
2. Manual: Tab navigacija
   - Pritisni Tab — fokus ide kroz sve linkove?
   - Focus je vidljiv (outline)?
3. Manual: Screen Reader (ako imaš)
   - Čita footer jasno?
4. Manual: Kontrast
   - WebAIM: Sve boje imaju 4.5:1?

**Očekivani rezultat:** a11y audit je 95+!

---

### Sati 5-6: Performance Testing

**Cilj:** Footer je brz (Lighthouse 90+)

**Aktivnosti:**

1. DevTools: Lighthouse > Performance
   - Testiraj desktop
   - Testiraj mobile
2. Performance: Network tab
   - Footer CSS je mali?
3. Performance: DevTools Audits
   - Trebalo bi 90+ za performance

**Očekivani rezultat:** Performance je optimalnа!

---

### Sati 7-8: Final Testing + Documentation

**Cilj:** Footer je završen i dokumentovan

**Aktivnosti:**

1. Screenshot: Desktop (1440px) — kako izgleda?
2. Screenshot: Tablet (768px) — 2 kolone OK?
3. Screenshot: Mobile (320px) — 1 kolona OK?
4. Screenshot: Dark mode — čitljiv?
5. Testiraj: Svi linkovi su radi?
6. Testiraj: Nije broken ništa?
7. Dokumentuj: Što je urađeno, kako je izgleda

**Očekivani rezultat:** Footer je GOTOV i profesionalan! 🎉

---

## Očekivani Rezultat Po Danu

### Dan 1 (Teorija)

```
✅ Razumem što je footer i zašto je bitan
✅ Vidiš kako to rade Stripe, GitHub, Apple
✅ Znaš best practices i greške
✅ Imaš konkretan plan za tvoj footer
```

### Dan 2 (Kodiranje)

```
✅ HTML je semantic i organizovan
✅ CSS desktop (3 kolone) je lepo
✅ CSS responsive (1→2→3 kolone) je OK
✅ Dark mode je čitljiv
```

### Dan 3 (Poliranje)

```
✅ Micro-interactions su vidljivi
✅ Accessibility audit je 95+
✅ Performance je 90+
✅ Footer je PROFESIONALNO gotov!
```

---

## Napomene

- **Tempo:** Ne žuri! 8 sati po danu znači lagano + detaljno
- **Pause:** Svakih 2 sata — 15 minuta pauze
- **Helpfulne:** Čitaj cheatsheet.md ako imaš pitanja
- **DevTools:** Koristi DevTools redovno (Elements, Responsive, Audit)
- **Testiranje:** Testiraj na svim veličinama (320px, 768px, 1440px)

---

## Summary

Kroz ova 3 dana naučiš:
✅ Footer teorija + best practices
✅ Semantic HTML
✅ Responsive CSS (grid)
✅ Dark mode podrška
✅ Micro-interactions
✅ Accessibility (WCAG AA)
✅ Performance optimizacija

Na kraju: **Tvoj footer će biti koliko se može profesionalan!** 🚀

Sada — kreni sa Dan 1, Blok 1! Čitaj cheatsheet.md… 📖
