document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".accordion-trigger");

  triggers.forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const newState = !expanded;
      btn.setAttribute("aria-expanded", newState);

      const item = btn.closest(".accordion-item");

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
