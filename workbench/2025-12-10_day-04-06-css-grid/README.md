# 🎓 Day 04–06: CSS Grid Mastery & Hero Responsive

## 🎯 72h Cilj

Razumeti **CSS Grid** kroz tvoj Hero element, savladati responsive pristupe, i biti u stanju da dizajniraš skalabilne layout-e bez problema sa "nowrap" ili rastezanjem.

---

## 📊 3-dnevni plan

### **Dan 1 (8h): Grid Theory + Hero Analysis**

- Teorija: Grid osnove (template-columns, template-rows, gap, auto-fit, minmax)
- Analiza: Zašto se tvoj Hero ponašao kao nowrap? (pitfalls i rešenja)
- Praksa: Rebuild Hero sa razumevanjem

### **Dan 2 (8h): Responsive Grid Patterns**

- Pattern 1: Single-column (mobile) → Multi-column (desktop)
- Pattern 2: Content-first layout sa `auto-fit` i `minmax()`
- Pattern 3: Named grid areas za kompleksne layout-e
- Praksa: Primeni na tvoj Hero + cards sekciju

### **Dan 3 (8h): Advanced Grid + Polish**

- Subgrid (ako je potrebno za nested komponente)
- Grid automation i fallbacks
- Fine-tuning za svih 6 breakpoint-a
- Finalna vežba: Build kompletan page sa grid

---

## 🔍 Problem Analiza: Zašto se Hero "ponašao kao nowrap"?

Evo šta se desilo:

```
Hero na 320px:          Hero na 768px:          Hero na 1024px:
┌─────────────┐        ┌──────────────────┐   ┌────────────────────┐
│ naslov      │        │ naslov │ slika    │   │ naslov  │  slika   │
│ tekst       │        │ dugme  │ floating │   │ dugme   │ floating │
│ dugme       │        │        │ cards    │   │         │ cards    │
└─────────────┘        └──────────────────┘   └────────────────────┘
```

**Problem:** `grid-template-columns: 1fr` → `1.1fr 0.9fr` bez intermedijarne vrednosti.
**Rezultat:** Skok sa stiska na razmah, bez glatkog prelaza.

---

## ✅ Rešenja koja ćeš naučiti

1. **Fluid Grid sa `minmax()`**: Samo jedna linija, sve se prilagođava.
2. **Media Query Grid**: Precizno kontrolisanje na 3-4 breakpoint-a.
3. **Auto-fit vs Auto-fill**: Kad koja se koristi?
4. **Nested Grids**: Hero je zapravo "grid container sa grid childrenima"—važno!
