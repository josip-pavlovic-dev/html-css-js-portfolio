# 📚 Footer Cheatsheet — Sveukupna Referenca

## 1. Anatomija Footer-a

```
┌─────────────────────────────────────────────────────────┐
│ site-footer (container)                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  site-footer-inner (max-width wrapper)                 │
│  ├─ site-footer-content (grid sa 3 kolone)             │
│  │  ├─ footer-col (Nav)    │ footer-col (Contact)      │
│  │  │  └─ footer-nav       │ └─ footer-contact         │
│  │  │                      │                           │
│  │  └─ footer-col (Socials) │ footer-col (Legal)       │
│  │     └─ footer-socials     │ └─ footer-legal         │
│  │                           │                          │
│  └─ footer-bottom (copyright line)                      │
│     ├─ site-footer-copy (copyright)                    │
│     └─ footer-legal-links (Privacy, Terms)             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 2. HTML Struktura (Semantic)

### ✅ DOBRO (Semantic)

```html
<footer class="site-footer">
  <div class="site-footer-inner">
    <!-- Kolone -->
    <div class="site-footer-content">
      <!-- Svaka kolona je <section> ili <nav> -->
      <section class="footer-col">
        <h3 class="footer-heading">Navigacija</h3>
        <nav class="footer-nav">
          <a href="/">Početna</a>
          <a href="/projects">Projekti</a>
        </nav>
      </section>

      <section class="footer-col">
        <h3 class="footer-heading">Kontakt</h3>
        <dl class="footer-contact">
          <dt>Email</dt>
          <dd><a href="mailto:...">email@example.com</a></dd>
          <dt>Telefon</dt>
          <dd><a href="tel:+381...">+381 ...</a></dd>
        </dl>
      </section>

      <section class="footer-col">
        <h3 class="footer-heading">Socials</h3>
        <ul class="footer-socials">
          <li><a href="https://github.com">GitHub</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
        </ul>
      </section>
    </div>

    <!-- Donji red -->
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

### ❌ LOŠE (Non-semantic)

```html
<footer>
  <div>
    <div>
      <span>Navigacija</span>
      <a href="/">Početna</a>
      <a href="/projects">Projekti</a>
    </div>
    <div>
      <span>Kontakt</span>
      <a href="mailto:...">Email</a>
    </div>
  </div>
  <p>© 2025</p>
</footer>
```

**Problem:** Nema jasne semantike, screen reader-i zbunjeni.

---

## 3. CSS Layout — Flexbox vs. Grid

### Desktop Layout (3+ kolone)

**Option 1: Grid (PREPORUČENO)**

```css
.site-footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 jednake kolone */
  gap: var(--space-lg); /* 1.5rem razmak */
  margin-bottom: var(--space-2xl);
}
```

**Option 2: Flexbox**

```css
.site-footer-content {
  display: flex;
  justify-content: space-between;
  gap: var(--space-lg);
}

.footer-col {
  flex: 1;
  min-width: 200px;
}
```

**Razlika:**

- Grid: Fleksibilniji za razne broj kolona
- Flexbox: Jednostavniji za početnike

---

### Tablet Layout (2 kolone)

```css
@media (width >= 768px) and (width < 1024px) {
  .site-footer-content {
    grid-template-columns: repeat(2, 1fr); /* 2 kolone */
  }
}
```

---

### Mobile Layout (1 kolona)

```css
@media (width < 768px) {
  .site-footer-content {
    grid-template-columns: 1fr; /* 1 kolona */
    gap: var(--space-md);
  }

  .footer-col {
    border-bottom: 1px solid var(--color-border);
    padding-bottom: var(--space-md);
  }

  .footer-col:last-child {
    border-bottom: none;
  }
}
```

---

## 4. Boje i Kontrast (Dark/Light Mode)

### Light Mode

```css
.site-footer {
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  color: var(--color-muted);
}

.footer-heading {
  color: var(--color-text); /* Bold, vidljivo */
  font-weight: 600;
}

.footer-nav a,
.footer-contact a {
  color: var(--color-text);
  transition: color 0.2s;
}

.footer-nav a:hover,
.footer-contact a:hover {
  color: var(--color-primary);
}
```

### Dark Mode

```css
html[data-theme="dark"] .site-footer {
  background: var(--color-surface); /* Malo svetlije nego body */
  border-top-color: var(--color-border);
}

html[data-theme="dark"] .footer-heading {
  color: var(--color-text);
}

html[data-theme="dark"] .footer-nav a:hover,
html[data-theme="dark"] .footer-contact a:hover {
  color: var(--color-primary);
}
```

### Kontrast Provera

```
Text: var(--color-text) = #1a1a1a
BG:   var(--color-bg) = #ffffff
Ratio: 21:1 ✅ AAA (odličan)

Muted: var(--color-muted) = #6b7280
Ratio: 7:1 ✅ AA (dobar)
```

---

## 5. Komponente — Što Staviti u Footer

### ✅ Obavezno

```css
/* Navigacijski linkovi */
.footer-nav {
}

/* Copyright */
.site-footer-copy {
}

/* Kontakt */
.footer-contact {
}

/* Legalni linkovi (Privacy, Terms) */
.footer-legal {
}
```

### ⚠️ Opciono (Ali Koristan)

```css
/* Socijalne mreže */
.footer-socials {
}

/* Newsletter signup */
.footer-newsletter {
}

/* Logo/branding */
.footer-logo {
}

/* Back-to-top button */
.footer-back-to-top {
}

/* Sitemap linkovi */
.footer-sitemap {
}
```

---

## 6. Specifični CSS Primeri

### Footer Navigation Links

```css
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm); /* 0.5rem razmak između linkova */
}

.footer-nav a {
  color: var(--color-muted);
  text-decoration: none;
  font-size: var(--text-sm, 0.95rem);
  transition: color 0.2s ease;
  position: relative;
}

.footer-nav a:hover {
  color: var(--color-primary);
}

.footer-nav a::before {
  content: "→";
  margin-right: var(--space-2xs);
  opacity: 0;
  transition: opacity 0.2s;
}

.footer-nav a:hover::before {
  opacity: 1;
}
```

**Rezultat:**

```
Navigacija
  → Početna    (arrow pojavljuje se na hover)
  → O meni
  → Projekti
```

---

### Contact Information (Semantic <dl>)

```css
.footer-contact {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-sm);
  font-size: var(--text-sm, 0.95rem);
}

.footer-contact dt {
  font-weight: 600;
  color: var(--color-text);
}

.footer-contact dd {
  margin: 0;
  color: var(--color-muted);
}

.footer-contact a {
  color: var(--color-primary);
  text-decoration: none;
  transition: text-decoration 0.2s;
}

.footer-contact a:hover {
  text-decoration: underline;
}
```

**Rezultat:**

```
Email:    josip@example.com
Telefon:  +381 ...
Lokacija: Beograd, Srbija
```

---

### Social Media Links

```css
.footer-socials {
  display: flex;
  gap: var(--space-md); /* 1rem razmak između ikona */
  list-style: none;
  margin: 0;
  padding: 0;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  color: var(--color-text);
  text-decoration: none;
  transition: all 0.2s;
}

.social-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

.social-link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**Rezultat:**

```
[GitHub]  [LinkedIn]  [Twitter]
  (ikone sa hover effect-om)
```

---

### Back-to-Top Button

```css
.footer-back-to-top {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.2s;
}

.footer-back-to-top:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}
```

---

## 7. Micro-interactions

### Hover Effect na Link-ovima

```css
/* Subtle underline */
.footer-nav a {
  position: relative;
  padding-bottom: 2px;
}

.footer-nav a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-primary);
  transition: width 0.2s;
}

.footer-nav a:hover::after {
  width: 100%;
}
```

---

### Animirani Odlazak Navršetka Stranice

```css
.footer-back-to-top {
  scroll-behavior: smooth;  /* Smooth scroll na HTML */
}

/* JavaScript */
document.querySelector('.footer-back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

---

## 8. Accessibility (a11y) Checklist

- [ ] Semantic HTML (`<footer>`, `<nav>`, `<dl>`)
- [ ] Heading hierarhija (`<h3>` za footer sekcije)
- [ ] Fokusable elementi (svi linkovi su focusable)
- [ ] Focus indicator vidljiv (outline ili styling)
- [ ] Kontrast minimum 4.5:1 (AA)
- [ ] Alt text za slike (ako ih ima)
- [ ] ARIA labels ako je potrebno
- [ ] Keyboard navigacija radi

---

## 9. Performance Optimizacija

### ✅ DOBRO

```css
/* Koristi CSS varijable */
gap: var(--space-lg);
color: var(--color-text);
font-size: var(--text-sm);

/* Koristi CSS za hover (ne JS) */
a:hover {
  color: var(--color-primary);
}

/* GPU-accelerated transitions */
transition: color 0.2s, transform 0.2s;
```

### ❌ LOŠE

```css
/* Hardkodovani vrednosti */
gap: 24px;
color: #1a1a1a;

/* JavaScript za hover */
element.addEventListener('mouseover', () => { ... });

/* Heavy transitions */
transition: all 0.5s;  /* Skupo! */
```

---

## 10. Responsive Breakpoints za Footer

```css
/* Mobile: 1 kolona */
@media (width < 768px) {
  .site-footer-content {
    grid-template-columns: 1fr;
  }
}

/* Tablet: 2 kolone */
@media (width >= 768px) and (width < 1024px) {
  .site-footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3+ kolone */
@media (width >= 1024px) {
  .site-footer-content {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large desktop: širi gap */
@media (width >= 1280px) {
  .site-footer-content {
    gap: var(--space-2xl);
  }
}
```

---

## 11. SEO Optimizacija u Footer-u

### ✅ DOBRO

```html
<!-- Footer linkovi su crawlable i indexable -->
<footer>
  <nav class="footer-nav">
    <a href="/blog">Blog</a>
    <!-- Internal link -->
    <a href="/about">O meni</a>
    <!-- Internal link -->
  </nav>

  <!-- Schema.org markup -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Josip Pavlović",
      "contactPoint": {
        "url": "https://example.com/contact"
      }
    }
  </script>
</footer>
```

### ❌ LOŠE

```html
<!-- Linkovi su skriveni ili ne-crawlable -->
<footer>
  <span>© 2025</span>
  <!-- Nema navigacijskih linkova! -->
</footer>
```

---

## 12. Praktični Checklist Pre Nego što je Gotovo

- [ ] HTML je semantic (`<footer>`, `<nav>`, `<dl>`)
- [ ] Ima 3+ sekcije (Nav, Kontakt, Socials)
- [ ] Responsive (1 kolona mobile → 3 desktop)
- [ ] Dark mode radi
- [ ] Hover efekti su vidljivi
- [ ] Focus state je vidljiv (Tab)
- [ ] Kontrast je OK (4.5:1 minimum)
- [ ] Linkovi su radi
- [ ] Nema "broken" linkova
- [ ] Performance je OK (nema bloat-a)

---

## 13. Šablonski kod — Copy-Paste Ready

```html
<!-- FULL FOOTER TEMPLATE -->
<footer class="site-footer">
  <div class="site-footer-inner">
    <div class="site-footer-content">
      <!-- COL 1: Navigation -->
      <section class="footer-col">
        <h3 class="footer-heading">Navigacija</h3>
        <nav class="footer-nav">
          <a href="/">Početna</a>
          <a href="/projects">Projekti</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Kontakt</a>
        </nav>
      </section>

      <!-- COL 2: Contact -->
      <section class="footer-col">
        <h3 class="footer-heading">Kontakt</h3>
        <dl class="footer-contact">
          <dt>Email</dt>
          <dd><a href="mailto:josip@example.com">josip@example.com</a></dd>
          <dt>Telefon</dt>
          <dd><a href="tel:+381">+381 ...</a></dd>
        </dl>
      </section>

      <!-- COL 3: Socials -->
      <section class="footer-col">
        <h3 class="footer-heading">Pratite Me</h3>
        <ul class="footer-socials">
          <li><a href="https://github.com" class="social-link">GitHub</a></li>
          <li>
            <a href="https://linkedin.com" class="social-link">LinkedIn</a>
          </li>
        </ul>
      </section>
    </div>

    <!-- Bottom: Copyright + Legal -->
    <div class="footer-bottom">
      <p class="site-footer-copy">© 2025 Josip Pavlović. Sva prava zadržana.</p>
      <nav class="footer-legal">
        <a href="/privacy">Privatnost</a>
        <a href="/terms">Uslovi</a>
      </nav>
    </div>
  </div>
</footer>
```

```css
/* FULL CSS TEMPLATE */
.site-footer {
  background: var(--color-bg);
  border-top: 1px solid var(--color-border);
  padding: var(--space-2xl) var(--space-lg);
  color: var(--color-muted);
  margin-top: var(--space-3xl);
}

.site-footer-inner {
  max-width: var(--content-wide, 65rem);
  margin: 0 auto;
}

.site-footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-heading {
  font-size: var(--text-sm, 0.95rem);
  font-weight: 600;
  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 0.05em;
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

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
  font-size: var(--text-xs, 0.85rem);
}

.site-footer-copy {
  margin: 0;
  color: var(--color-muted);
}

.footer-legal {
  display: flex;
  gap: var(--space-md);
}

.footer-legal a {
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-legal a:hover {
  color: var(--color-primary);
}

/* Responsive */
@media (width < 768px) {
  .site-footer-content {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--space-md);
  }
}
```

---

## Summary

**Footer se često ignorizuje, ali je to poslednja šansa da ostaviš dobru impresiju!**

Sa ovim cheatsheet-om znaš:
✅ Anatomiju footer-a
✅ HTML strukturu (semantic)
✅ CSS layout (grid/flex)
✅ Responsive dizajn
✅ Dark mode
✅ Accessibility
✅ Performance
✅ Copy-paste šablone

Sad kreni sa kickoff.md! 🚀
