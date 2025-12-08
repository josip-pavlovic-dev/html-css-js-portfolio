// Toggle accordion functionality
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".accordion-item");

  // 1) Na load: uvek otvori prvi panel
  if (items.length > 0) {
    const firstItem = items[0];
    const firstTrigger = firstItem.querySelector(".accordion-trigger");
    const firstPanelId = firstTrigger.getAttribute("aria-controls");
    const firstPanel = document.getElementById(firstPanelId);

    firstTrigger.setAttribute("aria-expanded", "true");
    firstPanel.hidden = false;
    firstItem.classList.add("is-open");
  }

  // 2) Klik logika: uvek je tačno jedan panel otvoren
  items.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    const panelId = trigger.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      // Ako je već otvoren, NEMOJ ga zatvarati – uvek mora bar jedan da bude otvoren
      if (isOpen) return;

      // Zatvori sve panele
      items.forEach((otherItem) => {
        const otherTrigger = otherItem.querySelector(".accordion-trigger");
        const otherPanelId = otherTrigger.getAttribute("aria-controls");
        const otherPanel = document.getElementById(otherPanelId);

        otherTrigger.setAttribute("aria-expanded", "false");
        otherPanel.hidden = true;
        otherItem.classList.remove("is-open");
      });

      // Otvori kliknuti panel
      trigger.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      item.classList.add("is-open");
    });
  });

  // Theme toggle
  const toggleBtn = document.getElementById("theme-toggle");

  if (toggleBtn) {
    const root = document.documentElement;

    const applyTheme = (theme) => {
      const isDark = theme === "dark";

      root.setAttribute("data-theme", theme);

      // ažuriramo ARIA stanje za screen readere
      toggleBtn.setAttribute("aria-pressed", String(isDark));
      toggleBtn.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
      );
    };

    // inicijalno stanje – čitamo sa <html data-theme="...">
    const initialTheme = root.getAttribute("data-theme") || "light";
    applyTheme(initialTheme);

    toggleBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }
});
