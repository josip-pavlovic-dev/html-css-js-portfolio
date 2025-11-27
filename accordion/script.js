document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach((btn) => {
    const controlsId = btn.getAttribute("aria-controls");
    const panel = document.getElementById(controlsId);

    // Ako markup nije ispravno uparen, ne radimo ništa za ovaj trigger
    if (!panel) return;

    // Inicijalno stanje na osnovu aria-expanded
    const expanded = btn.getAttribute("aria-expanded") === "true";
    panel.hidden = !expanded;

    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      const newState = !isExpanded;

      // 1) ažuriraj aria-expanded na dugmetu
      btn.setAttribute("aria-expanded", newState);

      // 2) prikaži/sakrij panel preko hidden atributa
      panel.hidden = !newState;

      // 3) (opciono, ali korisno) – klase za stilovanje
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
