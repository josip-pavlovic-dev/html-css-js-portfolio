# FAQ Accordion Accessibility (a11y) Notes | _Napomene o pristupačnosti (a11y) za FAQ Accordion_

## 🎯 Purpose of this file | _Svrha ovog fajla_

This document tracks the accessibility (a11y) implementation of the FAQ Accordion component: which ARIA attributes we use, how JavaScript updates them, and what is already done vs. what is still TODO. | _Ovaj dokument prati pristupačnost (a11y) FAQ Accordion komponente: koje ARIA atribute koristimo, kako ih JavaScript ažurira i šta je već urađeno, a šta je još uvek TODO._

---

## 1️⃣ Current HTML structure | _Trenutna HTML struktura_

Za **svaki** accordion item koristiš sledeći pattern:

```html
<div class="accordion-item is-open | is-closed">
  <h2 class="accordion-header">
    <button
      type="button"
      class="accordion-trigger"
      aria-expanded="true | false"
      aria-controls="accordion-panel-X"
      id="accordion-header-X"
    >
      Question text...
    </button>
  </h2>

  <div
    id="accordion-panel-X"
    class="accordion-panel"
    role="region"
    aria-labelledby="accordion-header-X"
    <!-- kod otvorenog panela: bez hidden -->
    <!-- kod zatvorenog panela: hidden -->
  >
    <p>Answer text...</p>
  </div>
</div>
```

---

### Šta ovo znači u praksi? | _What does this mean in practice?_

- `button.accordion-trigger` je **kontrolni element** koji otvara/zatvara panel
- `aria-expanded` kaže da li je panel otvoren (`true`) ili zatvoren (`false`)
- `aria-controls="accordion-panel-X"` povezuje dugme sa panelom koji kontroliše
- `<div id="accordion-panel-X" role="region">` je **sadržajni panel** (regija) koji je logički vezan za header
- `aria-labelledby="accordion-header-X"` kaže čitaču ekrana: “Naslov ove regije je tekst u tom `<button>` elementu”
- `hidden` na panelu fizički sakriva sadržaj i uklanja ga iz fokusa/tokova čitača ekrana

---

## 2️⃣ Current JavaScript behaviour | _Trenutno ponašanje JavaScript-a_

Koristiš skriptu ovog tipa (skraćena verzija sa fokusom na ARIA):

```js
document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach((btn) => {
    const controlsId = btn.getAttribute("aria-controls");
    const panel = document.getElementById(controlsId);

    if (!panel) return;

    // Initial sync based on aria-expanded in HTML
    const expanded = btn.getAttribute("aria-expanded") === "true";
    panel.hidden = !expanded;

    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      const newState = !isExpanded;

      // (1) Update ARIA state on control
      btn.setAttribute("aria-expanded", newState);

      // (2) Show/hide controlled panel
      panel.hidden = !newState;

      // (3) Optional visual styling via classes
      const item = btn.closest(".accordion-item");
      if (!item) return;

      if (newState) {
        item.classList.add("is-open");
        item.classList.remove("is-closed");
      } else {
        item.classList.remove("is-open");
        item.classList.add("is-closed");
      }
    });
  });
});
```

### Šta se dešava korak po korak? | _Step-by-step explanation_

1. **Na učitavanje stranice**
   JavaScript za svaki trigger:

   - čita `aria-expanded` (true/false) iz HTML-a
   - prema tome postavlja `panel.hidden = !expanded` i u skladu sa tim postavlja `panel.hidden = !expanded`
   - tako sinhronizuje početno stanje vizuelnog panela i ARIA stanja

2. **Na svaki klik (ili Enter/Space, jer je `<button>`)**

   - proverava trenutno stanje `isExpanded`
   - invertuje ga u `newState`
   - ažurira `aria-expanded` na dugmetu
   - postavlja `panel.hidden = !newState`
   - menja klase `is-open` / `is-closed` na roditeljskom `.accordion-item`

3. **Tastatura automatski radi**

   - Pošto koristiš `<button>`, browser automatski omogućava **Enter** i **Space** kao aktivacione tastere.
   - Tvoje je samo da vodiš računa da `aria-expanded` i `hidden` ostanu uvek u skladu.

---

## 3️⃣ What is already OK (DONE) | _Šta je već urađeno (DONE)_

- Semantic headings (`h2`) wrapping a real `<button>` element for each header.
- `aria-expanded` on each accordion trigger, toggled via JS on click.
- `aria-controls` on each trigger pointing to a matching panel `id`.
- Panels have `role="region"` and `aria-labelledby` pointing back to the header `id`.
- `hidden` property on panels, updated by JS to match `aria-expanded`.
- Visual classes `.is-open` / `.is-closed` always match ARIA state.

Ovo znači da je accordion već **solidno pristupačan** za: tastaturu, screen readere i vizuelne korisnike.

---

## 4️⃣ Remaining a11y improvements (TODO list) | _Preostala a11y unapređenja (TODO lista)_

Ovo su stvari koje **nisu obavezne**, ali prate pun WAI-ARIA pattern za advanced accordion:

1. **Single-open mode (optional)** | _Single-open mod (opciono)_

   - Kad se otvori jedan panel, automatski zatvori ostale (i apdejtuje `aria-expanded` poklopaca).

2. **Arrow key navigation** | _Navigacija strelicama_

   - Dodati podršku da ↑ i ↓ kreću fokus između header dugmadi bez Tab-a.

3. **Home / End shortcuts** | _Home / End prečice_

   - `Home` → fokus na prvo zaglavlje.
   - `End` → fokus na poslednje zaglavlje.

4. **Focus outline tuning** | _Doterivanje outline-a fokusa_

   - U CSS-u jasno obeležiti fokus na `.accordion-trigger:focus-visible`.

5. **Screen reader smoke test** | _Brzi test sa čitačem ekrana_

   - Proći sve item-e sa NVDA/VoiceOver, proveriti najave “collapsed/expanded, button, region…”.

---

## 5️⃣ Manual testing script for THIS accordion | _Skript za ručno testiranje ZA ovaj accordion_

Kad završimo dnevne izmene, ovako testiraš konkretno ovaj projekat:

1. **Open dev server** | _Pokreni dev server_

   - Otvori stranicu sa accordionom u browseru.

2. **Tab round** | _Krug sa Tab-om_

   - `Tab` dok fokus ne dođe do prvog accordion dugmeta. - Proveri outline (da ga jasno vidiš).

3. **Toggle test** | _Test otvaranja/zatvaranja_

   - Na prvom zaglavlju: `Space` → panel se otvara, `aria-expanded="true"`, panel više nije `hidden`.
   - Ponovni `Space` → panel se zatvara, `aria-expanded="false"`, panel dobija `hidden`.
   - Isto proveri za drugo i treće zaglavlje.

4. **Consistency check** | _Provera konzistentnosti_

   - Otvoren panel → `.accordion-item` ima klasu `is-open`.
   - Zatvoren panel → `.accordion-item` ima `is-closed`.
   - U svakom trenutku `aria-expanded` i `hidden` moraju biti u skladu sa vizuelnim stanjem.

5. **Optional screen reader pass** | _Opciono prolaz sa čitačem ekrana_

   - Aktiviraj NVDA ili VoiceOver.
   - Navigiraj po naslovima i dugmadima, slušaj da li kaže “button, collapsed / expanded”.
   - Otvori/zatvori jedan panel i proveri da li najava stanja prati vizuelnu promenu.

---

## 6️⃣ How to use this file while learning | _Kako da koristiš ovaj fajl dok učiš_

- Kada dodaš novu a11y funkcionalnost, dopiši kratku belešku ovde (EN + srpski).
- Uzmi 10–15 minuta da pratiš ovu belešku paralelno sa `response_and_arial_testing.md` kada radiš ručni testing.
- Cilj: da ti posle par projekata ovakav ARIA pattern postane “mišićna memorija”.

---
