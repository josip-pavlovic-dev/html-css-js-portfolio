# 👨🏻‍💻 CV sajt – 6-dnevni sprint plan

Cilj ovog sprinta:

- da **savladaš CSS Grid** kroz realan layout (hero, skills, blog, contact, projects),
- da **standardizujemo BEM imenovanje** na svim stranicama,
- da **nav + footer budu urađeni flexbox-om** kao profi komponente,
- da sajt ispadne dovoljno dobar da ga **mirno staviš u portfolio** (GitHub Pages + CV link).

---

## 🗓️ Dan 1 – Pregled projekta + BEM kostur + globalni CSS

**Fokus dana:**

- upoznavanje sa svim stranicama (`index`, `about`, `skills`, `timeline`, `blog`, `contact`)
- uvođenje **BEM klasâ** za header/nav/footer + osnovne sekcije
- priprema globalnog CSS-a (reset, varijable, tipografija)

### Blok 1 (2h) – Pregled HTML-a + plan BEM strukture

- Otvori redom: `index.html`, `about.html`, `skills.html`, `timeline.html`, `blog.html`, `contact.html`.
- Zapiši (u nekom `notes.md` ili na papiru) BEM plan:

  - `header.site-header`
  - `nav.site-header__nav`
  - `ul.site-nav__list`
  - `li.site-nav__item`
  - `a.site-nav__link site-nav__link--active`
  - `footer.site-footer` + `site-footer__inner`, `site-footer__copyright`

- Za glavne sekcije napravi BEM imena:

  - `section.hero` (index)
  - `section.page-hero` (ostale stranice – već postoji, samo ga uvežbavamo u CSS-u)
  - `section.skills-grid`, `section.blog-list`, `section.contact-grid`, `section.timeline` (već prisutne klase → koristi ih kao BEM “blocks”).

**Rezultat:** jasan spisak BEM klasâ koje ćemo koristiti svuda.

---

### Blok 2 (2h) – Preimenovanje nav + footer u BEM stilu

- U svakom HTML fajlu:

  - obmotaš nav u:

    ```html
    <header class="site-header">
      <nav class="site-header__nav">
        <ul class="site-nav__list">
          <li class="site-nav__item">
            <a href="index.html" class="site-nav__link site-nav__link--active" aria-current="page"
              >Početna</a
            >
          </li>
          ...
        </ul>
      </nav>
    </header>
    ```

  - active link dobija `site-nav__link--active` + `aria-current="page"` na svakoj stranici.

- Footer na svakoj strani standardizuješ u:

  ```html
  <footer class="site-footer">
    <div class="site-footer__inner">
      <p class="site-footer__copyright">&copy; 2025 Josip Pavlović. Sva prava zadržana.</p>
    </div>
  </footer>
  ```

**Rezultat:** svi HTML fajlovi imaju **isti, BEM-ovan** header i footer.

---

### Blok 3 (2h) – Globalni CSS: reset, varijable, tipografija

U `css/styles.css` (već postoji) sada ga tretiramo kao **glavni stil za ceo sajt**:

- Na vrhu:

  - `:root { --color-bg, --color-text, --color-primary, --color-accent, --color-muted, --max-width: 72rem; ... }`

- Globalni reset (već imaš `* { box-sizing: border-box; margin: 0; padding: 0; }` → potvrdi i prilagodi).
- `body`:

  - setuj `font-family: "Inter", sans-serif;` (već radiš to)
  - pozadinu i boju teksta iz varijabli
  - `line-height: 1.5;`

- Dodaj `.page` ili `.layout` wrapper klasu (ako želiš) sa:

  - `max-width: var(--max-width);`
  - `margin-inline: auto;`
  - `padding-inline: 1.5rem;`

**Rezultat:**

- osnova za **konzistentan look** svih stranica (jednaka širina sadržaja, jednaka tipografija).

---

### Blok 4 (2h) – Lagani refaktor + Git commit

- Prođi kroz svaku stranu i proveri:

  - da li header/body/footer struktura izgleda isto
  - da li su svi linkovi dobili nove BEM klase

- Napravi prvi ozbiljniji commit tipa:

  > `feat: add BEM structure and global layout base`

---

## 🗓️ Dan 2 – Nav bar + footer (Flexbox, sticky, focus states)

**Fokus dana:**

- učvršćivanje **Flexbox** znanja na nav i footer-u
- sticky header na vrhu stranice
- pristupačnost (focus, aria)

### Blok 1 (2h) – Desktop nav sa Flexbox-om

U `styles.css`:

- Napravi blok:

  ```css
  .site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: var(--color-nav-bg);
    border-bottom: 1px solid #ddd;
  }

  .site-header__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-width);
    margin-inline: auto;
    padding: 0.75rem 1.5rem;
  }

  .site-nav__list {
    display: flex;
    gap: 1rem;
    list-style: none;
  }

  .site-nav__link {
    text-decoration: none;
    padding: 0.4rem 0.9rem;
    border-radius: 999px;
    color: var(--color-text);
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .site-nav__link:hover,
  .site-nav__link:focus-visible {
    background-color: var(--color-hover);
    color: var(--color-primary);
  }

  .site-nav__link--active {
    font-weight: 600;
    color: var(--color-primary);
  }
  ```

- Poenta bloka: **jako uvežbavanje Flexbox-a** (justify-content, gap, sticky, itd).

---

### Blok 2 (2h) – Mobilni nav (simple version, bez JS)

Mobile-first:

- Dodaj media query npr. `@media (max-width: 640px)`:

  - nav prelazi u:

    - `flex-direction: column;`
    - lista se moža wrap-uje ili centrira

- Mobilna varijanta za sada neka bude **jednostavna** (bez hamburger menija, samo više linija).
- Fokus ti je:

  - kako nav da se lepo ponaša kad linije prelome
  - da li tekst ostaje čitljiv i klikabilan.

Ako želiš, ovde možeš da uključiš i onaj postojeći `.nav-toggle` sistem iz starog `styles.css`, ali JS za “open/close” možemo ubaciti u nekoj narednoj fazi.

---

### Blok 3 (2h) – Footer sa Flexbox-om

- U `styles.css` napravi:

  ```css
  .site-footer {
    border-top: 1px solid #ddd;
    padding: 1.5rem 1.5rem;
    background: var(--color-nav-bg);
  }

  .site-footer__inner {
    max-width: var(--max-width);
    margin-inline: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9rem;
  }
  ```

- Kasnije možeš dodati:

  - linkove ka GitHub/LinkedIn kao `site-footer__links`
  - sitne ikonice.

---

### Blok 4 (2h) – Pristupačnost za nav + footer

- Dodaj `aria-label="Glavna navigacija"` na `<nav>` ako nema teksta koji je to jasan.
- Proveri da `:focus-visible` za nav linkove radi lepo (outline ili promjena pozadine).
- Preskrolaj tasterom `Tab` kroz celu stranicu:

  - redosled fokusa
  - da li se vidi gde si

- Kratak commit:

  > `feat: implement flex-based header and footer with basic a11y`

---

## 🗓️ Dan 3 – CSS Grid osnove + hero (index + page-hero)

**Fokus dana:**

- osnovni koncepti **CSS Grid-a**
- hero sekcija na `index.html` i uniformni `page-hero` na drugim stranicama

### Blok 1 (2h) – Scrimba + mini Grid sandbox

- Scrimba Fullstack path – odradi lekcije koje se tiču **CSS Grid layout-a** (osnove: `grid-template-columns`, `grid-template-rows`, `gap`, `fr`, `minmax`, `auto-fit`, `auto-fill`).
- Napravi mali sandbox fajl tipa `grid-playground.html` sa 6 kutija u grid-u (2×3), čisto za vežbu.

---

### Blok 2 (2h) – Hero na index.html kao Grid

`index.html` sada ima hero: naslov, kratak tekst, 2 dugmeta.

- Napravi layout:

  ```css
  .hero {
    display: grid;
    gap: 2rem;
    align-items: center;
    padding: 4rem 1.5rem;
    max-width: var(--max-width);
    margin-inline: auto;
    min-height: 70vh;
  }

  @media (min-width: 768px) {
    .hero {
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    }
  }
  ```

- Leva strana (`hero__content`) – tekst.

- Desna (`hero__media`) – placeholder blok/slika.

---

### Blok 3 (2h) – `page-hero` na ostalim stranicama

Na `about`, `skills`, `blog`, `contact`, `timeline` već imaš `section.page-hero` sa naslovom i tagline-om.

- Napravi univerzalni stil:

  ```css
  .page-hero {
    padding: 3rem 1.5rem 2rem;
    max-width: var(--max-width);
    margin-inline: auto;
    text-align: left;
  }

  .page-hero .tagline {
    margin-top: 0.5rem;
    opacity: 0.9;
  }
  ```

- Opcija: na širim ekranima `page-hero` može biti mali 2-kolonski grid (naslov + mali side text).

---

### Blok 4 (2h) – Test, refaktor, commit

- Testiraj hero + page-hero na različitim širinama (Chrome DevTools → Responsive).
- Sitne korekcije gap-ova i paddinga.
- Commit:

  > `feat: implement grid-based hero layouts`

---

## 🗓️ Dan 4 – Grid za skills, blog, contact, timeline

**Fokus dana:**

- uvesti **Grid** svuda gde ima smisla: `skills-grid`, `blog-list`, `contact-grid`, `timeline`.

### Blok 1 (2h) – `skills.html` – Skills as grid

U `skills.html` imaš više `section class="skills-grid">` sa listama veština.

- Napravi:

  ```css
  .skills-grid {
    max-width: var(--max-width);
    margin: 0 auto 2rem;
    padding-inline: 1.5rem;
  }

  .skills-grid ul {
    display: grid;
    gap: 0.75rem;
  }

  @media (min-width: 768px) {
    .skills-grid ul {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
  }
  ```

- Ovo je idealna vežba za `repeat(auto-fit, minmax())`.

---

### Blok 2 (2h) – `blog.html` – Blog cards grid

`blog.html` već ima `section class="blog-list"` sa `article.blog-card`.

- Grid layout:

  ```css
  .blog-list {
    max-width: var(--max-width);
    margin: 0 auto 3rem;
    padding-inline: 1.5rem;
    display: grid;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .blog-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .blog-list {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  ```

---

### Blok 3 (2h) – `contact.html` – Dvokolonski contact-grid

`contact.html` već ima `section class="contact-grid"` sa dva `.contact-card`.

- Napravi:

  ```css
  .contact-grid {
    max-width: var(--max-width);
    margin: 0 auto 3rem;
    padding-inline: 1.5rem;
    display: grid;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .contact-grid {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
      align-items: start;
    }
  }
  ```

- Ovo ti vežba **1 kolona mobilno, 2 kolone desktop** scenario.

---

### Blok 4 (2h) – `timeline.html` – layout za iskustvo

`timeline.html` ima `section.timeline` sa `ol` i `li .timeline-item`.

- Napravi layout gde:

  - svaki `.timeline-item` ima `time` sa leve, `content` sa desne strane:

    ```css
    .timeline ol {
      list-style: none;
      padding: 0;
      max-width: var(--max-width);
      margin: 0 auto 3rem;
    }

    .timeline-item {
      display: grid;
      grid-template-columns: minmax(0, 140px) minmax(0, 1fr);
      gap: 1rem;
      padding-block: 1rem;
      border-bottom: 1px solid #ddd;
    }
    ```

- Ovo je super vežba za grid sa **fiksnijom jednom kolonom** (datum) i fluidnom drugom.

Commit na kraju dana:

> `feat: apply grid layouts to skills, blog, contact and timeline sections`

---

## 🗓️ Dan 5 – A11y (ARIA), fokus stanja, poliranje Grid-a

**Fokus dana:**

- proći kroz preporuke iz PDF-a (pristupačnost, alt tekst, aria-label…)
- doraditi grid i flex da budu stabilni i čitljivi
- fokus stanja i kontrast

### Blok 1 (2h) – ARIA & alt tekstovi

- Za svaki `<img>` (kad ih dodaš) → smisleni `alt=""`.
- Linkovi sa ikonama (GitHub, LinkedIn) → `aria-label="GitHub profil"` itd.
- Proveri da li `nav` ima logičan tekst ili `aria-label`.
- Dodaj `aria-current="page"` na aktivne linkove (već planirano).

---

### Blok 2 (2h) – Fokus & tastatura

- U `styles.css` globalno:

  ```css
  :focus-visible {
    outline: 2px dashed var(--color-primary);
    outline-offset: 3px;
  }
  ```

- Prođi tastaturom kroz:

  - nav linkove
  - `contact` formu
  - “read more” linkove u blogu

- Ispravi sve što je teško vidljivo ili zbunjujuće.

---

### Blok 3 (2h) – Grid polishing + bugfix

- Testiraj:

  - da li negde ima horizontalnog skrola (preširoke kolone)
  - da li `minmax(0, 1fr)` rešava probijanje sadržaja

- Proveri behavior na:

  - ~360px (mali telefon)
  - ~768px (tablet)
  - ≥1024px (desktop)

---

### Blok 4 (2h) – Čišćenje CSS-a + komentari

- U `styles.css` uvedi sekcije:

  - `/* Base / Reset */`
  - `/* Layout: header, footer, main */`
  - `/* Sections: hero, page-hero, skills, blog, contact, timeline */`

- Ukloni mrtav/višak kod koji više ne koristiš.
- Commit:

  > `chore: clean up styles and improve accessibility`

---

## 🗓️ Dan 6 – Projects stranica + finalni polishing + deploy

**Fokus dana:**

- dodati **projects.html** (ako još ne postoji kao sadržaj) kao glavnu Grid vežbu, jer plan iz PDF-a baš to predlaže
- finalni UX i vizuelni polishing
- GitHub Pages deploy

### Blok 1 (2h) – `projects.html` struktura

- Napravi stranicu sa:

  - `section.page-hero` (kratak opis)
  - `section.projects-grid`

- Svaki projekat kao:

  ```html
  <article class="project-card">
    <h2>Ime projekta</h2>
    <p>Kratak opis...</p>
    <ul class="project-card__tags">
      <li>HTML</li>
      <li>CSS Grid</li>
      <li>Python</li>
    </ul>
    <a href="https://github.com/..." target="_blank" rel="noopener">GitHub kod</a>
  </article>
  ```

---

### Blok 2 (2h) – Projects grid + hover efekti

- CSS za `.projects-grid`:

  ```css
  .projects-grid {
    max-width: var(--max-width);
    margin: 0 auto 3rem;
    padding-inline: 1.5rem;
    display: grid;
    gap: 1.5rem;
  }

  @media (min-width: 600px) {
    .projects-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  ```

- `.project-card` dobija “card” stil (senka, border, transition).

---

### Blok 3 (2h) – Finalno ujednačavanje sajta

- Prođi sve stranice:

  - spacing između sekcija (npr. `margin-block: 2.5rem`)
  - da su `h1/h2` veličine konzistentne
  - da nav/futer izgledaju isto svuda

- Napravi screenshot početne + neke unutrašnje strane za kasniji README.

---

### Blok 4 (2h) – GitHub Pages deploy + checklist

- Proveri da li je struktura projekta usklađena sa preporukom (root HTML fajlovi + `css/`, `assets/` itd.).
- Deploy na GitHub Pages.
- Napravi kratku listu “v2” ideja:

  - JS za hamburger meni
  - theme toggle (dark/light)
  - pravi blog postovi
  - animacije na scroll itd.

---
