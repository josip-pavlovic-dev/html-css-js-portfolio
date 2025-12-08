# 📘 CSS Architecture System - Professional Grade

> **Kreiran:** 2025-12-09 | **Status:** Production Ready | **Version:** 1.0.0

## 🎯 Svrha

Ovaj CSS variables sistem je **foundation** za professionalan, scalable, i maintainable CSS kod. Koristi se **separation of concerns** - varijable su organizovane po kategorijama, a svaka kategorija ima jasnu svrhu.

## 📁 Folder Structure

```
css-architecture/
├── variables/
│   ├── colors.css          ← Sve boje (light & dark mode)
│   ├── typography.css      ← Font families, sizes, weights
│   ├── spacing.css         ← 8px-based spacing scale
│   ├── layout.css          ← Containers, max-widths, z-index
│   ├── navigation.css      ← Navigation-specific variables
│   ├── animations.css      ← Duration, easing, transitions, shadows
│   └── borders.css         ← Radius, width, styles
├── README.md               ← This file
└── ARCHITECTURE.md         ← Detailed technical guide
```

## 🚀 Quick Start

### Import u main CSS fajlu

```css
/* Prvo importuj sve varijable */
@import url("./variables/colors.css");
@import url("./variables/typography.css");
@import url("./variables/spacing.css");
@import url("./variables/layout.css");
@import url("./variables/navigation.css");
@import url("./variables/animations.css");
@import url("./variables/borders.css");

/* Zatim tvoj CSS kod */
body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-family);
}
```

## 📊 Variable Categories

### 1. **Colors** (`colors.css`)

Sve boje za light i dark mode

```css
/* Light mode */
--color-primary: #3b82f6;
--color-text: #1f2937;
--color-border: #e5e7eb;

/* Dark mode */
html[data-theme="dark"] {
  --color-primary: #38bdf8;
  --color-text: #e5e7eb;
  --color-border: #1f2937;
}
```

### 2. **Typography** (`typography.css`)

Font families, sizes, weights, line-heights

```css
--font-family: "Inter", system-ui, sans-serif;
--font-size-base: 1rem;
--h1: clamp(2rem, 3vw + 1rem, 2.6rem);
--font-weight-bold: 700;
--line-height-normal: 1.6;
```

### 3. **Spacing** (`spacing.css`)

Unified 8px-based spacing scale

```css
--space-xs: 0.5rem; /* 8px */
--space-md: 1rem; /* 16px */
--space-lg: 1.5rem; /* 24px */
--padding-normal: var(--space-md);
--gap-loose: var(--space-lg);
```

### 4. **Layout** (`layout.css`)

Containers, max-widths, z-index

```css
--max-width: 65rem;
--container-lg: 32rem;
--z-index-modal: 1040;
--z-index-tooltip: 1100;
```

### 5. **Navigation** (`navigation.css`)

Navigation-specific sizing

```css
--nav-link-padding-x: 0.75rem;
--nav-link-font-size: 0.85rem;
--nav-link-gap: 0.4rem;
--header-height: 3.5rem;
```

### 6. **Animations** (`animations.css`)

Duration, easing, transitions, shadows

```css
--duration-base: 0.3s;
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: all var(--duration-base) var(--ease-in-out);
--shadow-lg: 0 1rem 2rem rgb(0 0 0 / 20%);
```

### 7. **Borders** (`borders.css`)

Radius, width, styles

```css
--radius-md: 0.75rem;
--border-width-thin: 0.0625rem;
--border-thin: var(--border-width-thin) solid var(--color-border);
```

## 💡 Usage Examples

### Colors

```css
.btn {
  background: var(--color-primary);
  color: var(--color-white);
  border: 1px solid var(--color-border);
}

.btn:hover {
  background: var(--color-primary-dark);
}
```

### Spacing

```css
.card {
  padding: var(--space-lg);
  margin-bottom: var(--space-xl);
  gap: var(--space-md);
}
```

### Typography

```css
h1 {
  font-size: var(--h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}
```

### Layout

```css
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}
```

### Animations

```css
.element {
  background: var(--color-primary);
  transition: var(--transition-base);
  box-shadow: var(--shadow-base);
}

.element:hover {
  background: var(--color-primary-dark);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

## 🌓 Light & Dark Mode

Svaka varijabla je definisana za oba moda:

```css
/* Light mode */
:root {
  --color-bg: #fff;
  --color-text: #1f2937;
}

/* Dark mode */
html[data-theme="dark"] {
  --color-bg: #020617;
  --color-text: #e5e7eb;
}
```

Automatski se menja kada korisnik promeni temu!

## 📱 Responsive Design

Varijable se menjaju sa media queries:

```css
:root {
  --max-width: 65rem; /* Mobile/tablet */
}

@media (width >= 1024px) {
  :root {
    --max-width: 73.75rem; /* Desktop */
    --nav-link-padding-x: 0.5rem;
    --font-size-base: 1.1563rem;
  }
}
```

## ✅ Best Practices

1. **Nikad hardkod vrednosti** - Koristi varijable!

   ```css
   /* ❌ Loše */
   .btn {
     padding: 0.75rem;
   }

   /* ✅ Dobro */
   .btn {
     padding: var(--space-sm);
   }
   ```

2. **Konsistentnost boja**

   ```css
   /* ❌ Loše */
   .btn {
     background: #3b82f6;
   }
   .link {
     color: #3b82f6;
   }

   /* ✅ Dobro */
   .btn {
     background: var(--color-primary);
   }
   .link {
     color: var(--color-primary);
   }
   ```

3. **Dark mode kompatibilnost** - Uvek dodaj varijable u dark mode blok

   ```css
   :root {
     --nav-padding: 0.75rem;
   }
   html[data-theme="dark"] {
     --nav-padding: 0.75rem;
   } /* ✅ Ponovljeno */
   ```

4. **Dokumentuj zašto**

   ```css
   /* ✅ Dobro */
   /* Navigation padding se MORA ponoviti u dark modu
      jer se koristi za layout, a trebalo bi identično */
   html[data-theme="dark"] {
     --nav-padding: 0.75rem;
   }
   ```

## 🔄 Adding New Variables

Kada trebaš novu varijablu:

1. **Identifikuj kategoriju** (color, spacing, animation...)
2. **Dodaj u odgovarajući fajl** (`variables/*.css`)
3. **Koristi naming convention:** `--category-name`
4. **Dodaj u `:root`** (light mode)
5. **Dodaj u `html[data-theme="dark"]`** (dark mode)
6. **Testiraj oba moda** u browser-u

Primer:

```css
/* U variables/spacing.css */

:root {
  --space-new: 2.5rem;
}

html[data-theme="dark"] {
  --space-new: 2.5rem; /* Ista vrednost */
}
```

## 📚 Further Learning

Pročitaj `ARCHITECTURE.md` za detaljni technical guide sa:

- CSS Specificity & Cascade
- Custom Properties scope
- Media query strategy
- Dark mode implementation
- Performance considerations

## 🎓 Learning Path

**Preporučena redosled proučavanja:**

1. `colors.css` - Razumevanje color system-a
2. `spacing.css` - Unified spacing scale
3. `typography.css` - Responsive font sizing
4. `layout.css` - Container & z-index systems
5. `animations.css` - Motion & transitions
6. `navigation.css` - Specifičan primer
7. `borders.css` - Polish & finishing touches

## 💾 Version History

| Version | Date       | Changes         |
| ------- | ---------- | --------------- |
| 1.0.0   | 2025-12-09 | Initial release |

---

**Kreirano sa fokusima na:** Scalability, Maintainability, Professional Standards
