# 📎 Day 03 Cheatsheet – Responsive Nav

## Media Query strategija

- **Inline po komponenti**: nav, hero… držati override odmah ispod sekcije.
- **Globalni blok**: na dnu fajla za sistemske izmene (tipografija, max-width, tokens override).

## Breakpointi za ovu vežbu

- `< 768px`: hamburger, lista sakrivena.
- `768–1023px`: full nav, smanjen padding/gap/font-size, nowrap + `overflow-x: auto`.
- `>= 1024px`: komforniji padding i gap.

## Ključni tokeni (navigation.css)

- `--nav-link-padding-x` / `-tablet` / `-desktop`
- `--nav-link-font-size` / `-tablet` / `-desktop`
- `--nav-link-gap` / `-tablet` / `-desktop`
- `--header-nav-gap`, `--header-nav-padding`

## Recept: spreči pucanje nav-a

```css
.site-nav-list {
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: var(--nav-link-gap);
}

@media (width >= 768px) and (width < 1024px) {
  .site-nav-link {
    padding: var(--nav-link-padding-y) var(--nav-link-padding-x-tablet);
    font-size: var(--nav-link-font-size-tablet);
  }
}
```

## Checklista za test

- [ ] 320px: hamburger + logo + toggle staju u jedan red.
- [ ] 768px: svi linkovi vidljivi, nema wrap-a, može scroll ako je knap.
- [ ] 1024px: padding/gap deluju udobno, nema overflow-a.
- [ ] Fokus state vidljiv na svim širina.
