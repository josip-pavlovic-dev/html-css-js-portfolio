---
type: cheatsheet
topic: Responsive :root tokens (Flex/Grid projekti)
date: 2025-12-06
linked_to: cv-website
language: bilingual
status: draft
difficulty: intermediate
audience: myself
recommended_by: codex
---

# 📘 Cheatsheet: Responsive :root Tokens

## ✅ Key Concepts

- Fluid tipografija + step breakpoints | _Fluid tipografija sa koracima_
- Spacing scale za layout | _Razmaci po skali_
- Container width po breakpointu | _Širine kontejnera po breakpointu_
- Focus i border-radius system | _Sistem za fokus i ivice_

---

## 📌 :root + Breakpoints (CSS)

```css
/* Base: Mobile-first */
:root {
  /* Tipografija */
  --font-family: "Inter", system-ui, sans-serif;
  --font-size-base: 16px;
  --font-size-scale: 1.125; /* modular scale */
  --line-height: 1.6;

  /* Fluid heading (clamp) */
  --h1: clamp(2rem, 3vw + 1rem, 2.6rem);
  --h2: clamp(1.6rem, 2.4vw + 1rem, 2.1rem);
  --h3: clamp(1.3rem, 1.8vw + 0.9rem, 1.6rem);
  --h4: 1.125rem;
  --h5: 1rem;
  --h6: 0.9rem;

  /* Spacing scale */
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Radius & borders */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-full: 999px;
  --border: 1px solid #d1d5db;

  /* Boje */
  --color-bg: #020617;
  --color-surface: #0b1120;
  --color-text: #e5e7eb;
  --color-muted: #9ca3af;
  --color-primary: #38bdf8;
  --color-border: #1f2937;

  /* Container widths */
  --container: 100%;
  --container-narrow: 540px;
  --container-wide: 980px;
}

/* ≥ 480px (mali telefoni landscape) */
@media (min-width: 480px) {
  :root {
    --font-size-base: 17px;
    --container: 90%;
    --container-wide: 1040px;
  }
}

/* ≥ 768px (tableti) */
@media (min-width: 768px) {
  :root {
    --font-size-base: 18px;
    --line-height: 1.65;
    --container: 88%;
    --container-wide: 1120px;
  }
}

/* ≥ 1024px (laptop) */
@media (min-width: 1024px) {
  :root {
    --font-size-base: 18.5px;
    --container: 86%;
    --container-wide: 1180px;
  }
}

/* ≥ 1280px (desktop) */
@media (min-width: 1280px) {
  :root {
    --font-size-base: 19px;
    --container: 82%;
    --container-wide: 1280px;
  }
}

/* ≥ 1440px (tvoj U55 TV u 1080p ili 1440p) */
@media (min-width: 1440px) {
  :root {
    --font-size-base: 20px;
    --container: 78%;
    --container-wide: 1360px;
  }
}

/* ≥ 1600px (U55 4K skala 1.5–2x) */
@media (min-width: 1600px) {
  :root {
    --font-size-base: 20.5px;
    --container: 75%;
    --container-wide: 1440px;
  }
}

/* ≥ 1920px (4K full HD workspace) */
@media (min-width: 1920px) {
  :root {
    --font-size-base: 21px;
    --container: 72%;
    --container-wide: 1520px;
  }
}
```

---

## 💡 Kako koristiti

- **Tipografija:** `body { font-size: var(--font-size-base); }` i headinge: `h1 { font-size: var(--h1); }`, itd.
- **Spacing:** koristi scale: `padding: var(--space-lg); margin-bottom: var(--space-xl);`
- **Container:** `max-width: var(--container-wide); margin: 0 auto; width: var(--container);`
- **Radius/Borders:** `border-radius: var(--radius-md); border: var(--border);`

---

## 📥 Related Topics

- Clamp tipografija | Fluid font size
- Breakpoint strategije | Mobile-first
- Design tokens | CSS varijable
- Layout containers | Max-width patterns

---
