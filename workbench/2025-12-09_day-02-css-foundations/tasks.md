# ✅ Day 02 Tasks

## Learning Tasks

1. **Review Day 01**:

   - Revisit cascade and specificity examples.
   - Practice using CSS variables.

2. **Learn Responsive Design**:
   - Write media queries for different breakpoints.
   - Use flexible units in layouts.

---

## Practice Tasks

1. **Responsive Navigation**:

   - Create a navigation bar that adapts to mobile and desktop views.

2. **Grid Layout**:
   - Build a responsive grid for a portfolio section.

---

### 2. **Analiza `index.css` sa fokusom na navigaciju**

Navigacija u `index.css` je detaljno stilizovana, pa ćemo analizirati ključne delove:

---

#### **1. Header i osnovni layout**

```css
.site-header {
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-sm) var(--space-lg);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background var(--duration-base) var(--ease-in-out);
}
```

- **Pozadina i border**: Koristi CSS varijable za konzistentnost.
- **Sticky pozicija**: Header ostaje vidljiv pri skrolovanju.
- **Transition**: Glatka promena boje pozadine.

---

#### **2. Navigaciona lista**

```css
.site-nav-list {
  display: none; /* sakrij na mobilnim (hamburger meni pokazuje) */
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--space-xs);
  align-items: center;
  margin-left: auto; /* gurni sve na desno */
}

@media (width >= 768px) {
  .site-nav-list {
    display: flex; /* Prikaz liste na desktopu */
  }
}
```

- **Mobilni prikaz**: Navigacija je sakrivena dok se ne aktivira hamburger meni.
- **Desktop prikaz**: Koristi `@media` za prikazivanje liste.

---

#### **3. Linkovi u navigaciji**

```css
.site-nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-xs) var(--space-sm);
  font-size: var(--text-sm, 0.875rem);
  font-weight: 500;
  color: var(--color-text);
  border-radius: var(--radius-sm);
  transition: all var(--duration-base) var(--ease-in-out);
  position: relative;
}

.site-nav-link:hover {
  background: var(--color-surface);
  color: var(--color-primary);
}
```

- **Hover efekti**: Promena boje i pozadine za bolju interakciju.
- **Border-radius**: Zaobljeni uglovi za moderan izgled.

---

#### **4. Hamburger meni (mobilni uređaji)**

```css
.hamburger-menu {
  display: flex; /* vidljiv na mobilnim */
  flex-direction: column;
  gap: var(--space-2xs);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: var(--space-xs);
  transition: all var(--duration-base) var(--ease-in-out);
}

.hamburger-line {
  display: block;
  width: 1.5rem;
  height: 2px;
  background: var(--color-text);
  border-radius: var(--radius-full);
  transition: all var(--duration-base) var(--ease-in-out);
}
```

- **Hamburger dugme**: Fleksibilan dizajn sa tranzicijama.
- **Linije**: Animacija za otvaranje/zatvaranje menija.

---
