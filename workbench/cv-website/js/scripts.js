/* ====================================
   HAMBURGER MENU - Mobile Navigation
   ==================================== */

const hamburgerToggle = document.getElementById("hamburger-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
  const isOpen = hamburgerToggle.getAttribute("aria-expanded") === "true";
  const newState = !isOpen;

  hamburgerToggle.setAttribute("aria-expanded", newState);
  mobileMenu.setAttribute("data-mobile-open", newState);
}

/**
 * Close mobile menu when link is clicked
 */
function closeMobileMenu() {
  hamburgerToggle.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("data-mobile-open", "false");
}

/**
 * Close menu on Escape key
 */
function handleEscapeKey(event) {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
}

// ===== EVENT LISTENERS =====
if (hamburgerToggle) {
  hamburgerToggle.addEventListener("click", toggleMobileMenu);
}

// Close menu when any link is clicked
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Close menu on Escape key
document.addEventListener("keydown", handleEscapeKey);

/* ====================================
   THEME TOGGLE - Light/Dark Mode
   ==================================== */

/**
 * Theme Toggle Script
 *
 * Omogućava korisniku da prebacuje između svetle i tamne teme.
 * Čuva izbor u localStorage.
 * Respektuje systemsku preferencedu ako nema sačuvane teme.
 */

const themeToggle = document.querySelector(".theme-toggle");
const htmlElement = document.documentElement;

/**
 * Preuzmi inicijalne vrednosti za temu
 * 1. Prvo proveravamo localStorage (korisnikov izbor)
 * 2. Ako nema sačuvane, koristimo systemsku preferencu
 * 3. Default je 'light'
 */
function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) {
    return saved;
  }

  // Proveravamo sistemsku preferencu (OS dark mode)
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

/**
 * Primeni temu na stranicu
 * - Postavi data-theme atribut na <html>
 * - Sačuva izbor u localStorage
 * - Ažurira aria-pressed za pristupačnost
 */
function applyTheme(theme) {
  // Postavi CSS custom properties kroz data atribut
  htmlElement.setAttribute("data-theme", theme);

  // Sačuvan izbor
  localStorage.setItem("theme", theme);

  // Ažuriraj ARIA za pristupačnost
  // aria-pressed="true" = dark mode is ON
  const isDarkMode = theme === "dark";
  themeToggle.setAttribute("aria-pressed", isDarkMode);

  // Ažuriraj tooltip za brzu povratnu informaciju
  const themeLabel = isDarkMode ? "Light theme" : "Dark theme";
  themeToggle.setAttribute("title", `Switch to ${themeLabel}`);

  // Optional: Log u console za debugging
  console.log(`🎨 Theme changed to: ${theme}`);
}

/**
 * Inicijalizuj na učitavanju stranice
 * Primeni sačuvanu ili sistemsku temu
 */
function initializeTheme() {
  const currentTheme = getInitialTheme();
  applyTheme(currentTheme);
}

/**
 * Event handler za klik na toggle dugme
 * Prebaci sa light na dark (ili obrnuto)
 */
function toggleTheme() {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
}

/**
 * Sluša sistemske promene u preferencama
 * Ako korisnik promeni OS dark mode (npr. automatski noću),
 * ažurira stranicu (samo ako nema ručno sačuvane preferencije)
 */
function listenSystemThemeChanges() {
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  darkModeQuery.addEventListener("change", (e) => {
    // Primeni systemsku prefereneku SAMO ako korisnik nije ručno izabrao
    const userChoice = localStorage.getItem("theme");
    if (!userChoice) {
      const newTheme = e.matches ? "dark" : "light";
      applyTheme(newTheme);
    }
  });
}

// ===== INICIJALIZACIJA =====
if (themeToggle) {
  // 1. Primeni temu na učitavanju
  initializeTheme();

  // 2. Dodaj event listener na klik
  themeToggle.addEventListener("click", toggleTheme);

  // 3. Sluša sistemske promene
  listenSystemThemeChanges();
}

/* ====================================
   DEVTOOLS PLAYGROUND - FLEX VEŽBE
   ==================================== */

/**
 * Hint za razvoj:
 *
 * 1. Otvori DevTools (F12)
 * 2. Klikni na bilo koji element sa .theme-toggle
 * 3. Dodaj klasu iz day01.css:
 *    - .lab-flex-row, .lab-flex-column
 *    - .lab-justify-*, .lab-align-*
 *    - .lab-gap-*
 * 4. Vidi kako se layout menja u realnom vremenu
 *
 * Primeri:
 * - Dugme: dodaj .lab-flex-center = centrira ikonicu
 * - Nav: zameni display sa .lab-flex-column = stack vertikalno
 * - Hero actions: dodaj .lab-justify-around = razmak sveuda
 */

console.log(
  "%c✨ DevTools Playground Aktivan!",
  "color: #38bdf8; font-size: 16px; font-weight: bold"
);
console.log(
  "%cPokušaj sa: dodaj klase iz day01.css na HTML elemente",
  "color: #9ca3af; font-size: 12px"
);
