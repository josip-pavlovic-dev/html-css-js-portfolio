# 📐 Flexbox Navigation Cheatsheet | _Flex navigacija u praksi_

> Ovaj cheatsheet prikazuje osnovne `Flexbox` tehnike kroz primer navigacije sajta `cv-website`.

---

## ✅ Key CSS Properties | _Ključne CSS osobine_

```css
nav ul {
  display: flex; /* Aktivira Flex konteks | _Aktivira fleksibilni kontejner_ */
  flex-direction: row; /* Horizontalni raspored | _Elementi se ređaju u redu_ */
  justify-content: center; /* Centriranje po širini | _Elementi idu ka centru_ */
  align-items: center; /* Centriranje po visini | _Elementi centrirani vertikalno_ */
  gap: 1.5rem; /* Razmak između stavki | _Fleksibilni razmak_ */
  list-style: none; /* Uklanja tačkice | _Bez oznaka liste_ */
  padding: 1rem 0; /* Unutrašnji razmak | _Gore/dole 1rem_ */
  margin: 0;
}
```

---

## 📌 Explanation: | _Objašnjenje:_

- `display: flex;` | _Aktivira fleksibilni raspored za `<ul>`_
- `flex-direction: row;` | _Stavlja `<li>` elemente u red_
- `justify-content: center;` | _Centrira ih horizontalno_
- `align-items: center;` | _Centrira ih vertikalno (korisno ako je visina već definisana)_
- `gap: 1.5rem;` | _Daje lep razmak između linkova_
- `list-style: none;` | _Skida tačkice sa `<li>`_

---

## 🎯 Exercise Ideas | _Predlozi za vežbanje_

- Promeni `justify-content` u `space-between`, `space-around`
- Dodaj `border` da vidiš raspored
- Prebaci `flex-direction: column` da vidiš raspad layouta
- Dodaj `.active` klasu na trenutni link:

```css
nav ul li a.active {
  font-weight: bold;
  border-bottom: 2px solid #4a90e2;
}
```

---

## ✍️ Author | Autor

[![GitHub](https://img.shields.io/badge/GitHub-josip--pavlovic--dev-blue?logo=github)](https://github.com/josip-pavlovic-dev)
_Aspiring web developer from Novi Sad, Serbia._

---
