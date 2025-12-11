/**
 * PRODUCTION-READY ACCORDION COMPONENT
 * Final polished JavaScript with accessibility and error handling
 */

// Initialize accordion on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initializeAccordion();
  initializeThemeToggle();
});

/**
 * Initialize accordion functionality
 * - Opens first panel on load
 * - Ensures one panel is always open
 */
function initializeAccordion() {
  const items = document.querySelectorAll(".accordion-item");

  // Guard: exit if no accordion items found
  if (items.length === 0) {
    console.warn("No accordion items found");
    return;
  }

  // Open first panel on page load
  openPanel(items[0]);

  // Add click handlers to all accordion triggers
  items.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");

    if (!trigger) {
      console.warn("Accordion item missing trigger button", item);
      return;
    }

    trigger.addEventListener("click", () => handleAccordionClick(item, items));
  });
}

/**
 * Handle accordion trigger click
 * @param {HTMLElement} clickedItem - The clicked accordion item
 * @param {NodeList} allItems - All accordion items
 */
function handleAccordionClick(clickedItem, allItems) {
  const trigger = clickedItem.querySelector(".accordion-trigger");
  const isOpen = trigger.getAttribute("aria-expanded") === "true";

  // If already open, do nothing (keep one panel always open)
  if (isOpen) return;

  // Close all panels
  allItems.forEach((item) => closePanel(item));

  // Open clicked panel
  openPanel(clickedItem);
}

/**
 * Open an accordion panel
 * @param {HTMLElement} item - The accordion item to open
 */
function openPanel(item) {
  const trigger = item.querySelector(".accordion-trigger");
  const panelId = trigger.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);

  if (!panel) {
    console.error(`Panel not found: ${panelId}`);
    return;
  }

  trigger.setAttribute("aria-expanded", "true");
  panel.hidden = false;
  item.classList.add("is-open");
}

/**
 * Close an accordion panel
 * @param {HTMLElement} item - The accordion item to close
 */
function closePanel(item) {
  const trigger = item.querySelector(".accordion-trigger");
  const panelId = trigger.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);

  if (!panel) {
    console.error(`Panel not found: ${panelId}`);
    return;
  }

  trigger.setAttribute("aria-expanded", "false");
  panel.hidden = true;
  item.classList.remove("is-open");
}

/**
 * Initialize theme toggle functionality
 * - Reads initial theme from data-theme attribute
 * - Toggles between light and dark modes
 * - Updates ARIA attributes for accessibility
 */
function initializeThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");

  if (!toggleBtn) {
    console.warn("Theme toggle button not found");
    return;
  }

  const root = document.documentElement;

  // Read initial theme
  const initialTheme = root.getAttribute("data-theme") || "light";
  applyTheme(initialTheme);

  // Toggle theme on click
  toggleBtn.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });

  /**
   * Apply theme and update ARIA attributes
   * @param {string} theme - Theme name ("light" or "dark")
   */
  function applyTheme(theme) {
    const isDark = theme === "dark";

    root.setAttribute("data-theme", theme);
    toggleBtn.setAttribute("aria-pressed", String(isDark));
    toggleBtn.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
  }
}
