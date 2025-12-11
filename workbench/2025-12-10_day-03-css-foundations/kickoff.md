# 🚀 Day 03 Kickoff – Responsive Nav

## Plan (3 koraka)

1. **Pregled varijabli**: Prođi `navigation.css` i shvati kako se vrednosti menjaju po breakpointu.
2. **Primena u komponenti**: U `index.css` upari nav stilove sa tokenima, dodaj tablet (768–1024) i desktop (1024+) override.
3. **Test & notes**: DevTools responsive (320, 375, 425, 768, 900, 1024, 1280). Zapiši gde si morao da dodaš overflow-x ili da smanjiš padding.

## Fokus pitanja

- Koji breakpoint želiš da nav pređe sa hamburgera na full menu? (trenutno 768px)
- Kako sprečiti wrap bez skrivanja linkova? (nowrap + smanjen padding/font-size + overflow-x auto)
- Gde držati media queries? (inline uz komponentu za čitljivost + globalni blokovi za sistemske vrednosti)
