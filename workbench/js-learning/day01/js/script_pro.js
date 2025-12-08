"use strict";

// === JS Learning — Day 01 & Day 02 ===
// Ovaj fajl je tvoj lični JS sandbox za učenje u browseru.

console.log("JS Day 01 — script.js is loaded ✅");

// ============================================================================
// Day 01 — prvi program i osnovne operacije
// ============================================================================

console.log("Hello from script.js 👋");

// Osnovne aritmetičke operacije
console.log("2 + 2 =", 2 + 2);
console.log("10 / 3 =", 10 / 3);

// Konkatenacija stringova
console.log("Concatenation:", "Hello" + " " + "World");

// Čitanje naslova stranice
console.log("Current document title:", document.title);

/**
 * Izračunava obim kruga za dati poluprečnik.
 * @param {number} radius
 * @returns {number}
 */
function circleCircumference(radius) {
  const pi = 3.141592653589793;
  return 2 * pi * radius;
}

// DevTools helper za Day 01
window.jsDay01 = {
  circleCircumference,
};

console.log("DevTools helper registered: try window.jsDay01 in the console 🧪");

// ============================================================================
// Day 02 — promenljive i tipovi podataka
// ============================================================================

console.log("----- Day 02: variables & types -----");

// 1) Osnovni (primitivni) tipovi
const studentName = "Josip"; // string
const totalLessons = 30; // number
const isEnrolled = true; // boolean
const progressToday = null; // "nema vrednost još uvek"
let notes; // deklarisano, ali nije dodeljena vrednost ⇒ undefined

console.log("studentName:", studentName, "| type:", typeof studentName);
console.log("totalLessons:", totalLessons, "| type:", typeof totalLessons);
console.log("isEnrolled:", isEnrolled, "| type:", typeof isEnrolled);
console.log("progressToday:", progressToday, "| type:", typeof progressToday);
console.log("notes:", notes, "| type:", typeof notes);

// 2) Dinamičko tipiziranje (JS može da promeni tip promenljive)
let dynamicValue = 42;
console.log(
  "dynamicValue (number):",
  dynamicValue,
  "| type:",
  typeof dynamicValue
);

dynamicValue = "Now I am a string";
console.log(
  "dynamicValue (string):",
  dynamicValue,
  "| type:",
  typeof dynamicValue
);

// 3) Specijalne vrednosti: NaN i Infinity
const invalidOperation = 0 / 0;
const divisionByZero = 10 / 0;

console.log(
  "invalidOperation:",
  invalidOperation,
  "| isNaN?",
  Number.isNaN(invalidOperation)
);
console.log(
  "divisionByZero:",
  divisionByZero,
  "| isFinite?",
  Number.isFinite(divisionByZero)
);

// ============================================================================
// Day 02 — mini projekat: JS progress tracker
// ============================================================================

console.log("----- Day 02: JS Progress Tracker (refactored) -----");

// Konfiguracija koja se ne menja tokom rada
const jsDay02Config = {
  totalDays: 30,
  // Dan plana na kom si danas (1–30). Ručno menjaš po potrebi.
  planDayToday: 2,
};

// Stanje — stvari koje se menjaju dok učiš
const jsDay02State = {
  completedDays: 1,
};

/**
 * Računa napredak i vraća detalje (čista funkcija).
 */
function calculateProgress() {
  const { totalDays, planDayToday } = jsDay02Config;
  const { completedDays } = jsDay02State;

  const percentage = (completedDays / totalDays) * 100;

  // Ako planDayToday nije setovan (null/undefined), uzimamo completedDays kao "danas"
  const effectivePlanDay = planDayToday ?? completedDays;

  let statusCode;
  if (completedDays < effectivePlanDay) {
    statusCode = "behind";
  } else if (completedDays === effectivePlanDay) {
    statusCode = "on_track";
  } else {
    statusCode = "ahead";
  }

  const statusLabel =
    statusCode === "behind"
      ? "Kasniš za planom"
      : statusCode === "on_track"
      ? "Na planu si"
      : "Ispred plana si";

  const message = `JS progres: ${completedDays}/${totalDays} dana (${percentage.toFixed(
    1
  )}%) — ${statusLabel}`;

  return {
    message,
    percentage,
    statusCode,
    statusLabel,
  };
}

/**
 * Loguje trenutni progres i vraća objekat sa detaljima.
 */
function logProgress() {
  const { message, percentage, statusCode, statusLabel } = calculateProgress();

  console.log(message);
  console.log("Status code:", statusCode);
  console.log("Status label:", statusLabel);

  return {
    completedDays: jsDay02State.completedDays,
    totalDays: jsDay02Config.totalDays,
    percentage,
    statusCode,
    statusLabel,
  };
}

// DevTools "API" za Day 02
window.jsDay02 = {
  status() {
    return logProgress();
  },
  addDay() {
    jsDay02State.completedDays += 1;
    return logProgress();
  },
  setCompletedFromInput(value) {
    const asNumber = Number(value);

    if (Number.isNaN(asNumber)) {
      console.log("Cannot update progress: value is not a number:", value);
      return null;
    }

    jsDay02State.completedDays = asNumber;
    return logProgress();
  },
};

// Lokalni alias za globalni API (profesionalniji osećaj u kodu)
const jsDay02 = window.jsDay02;

console.log(
  "Day 02 progress tracker ready: try window.jsDay02.status() in the console 📊"
);

// ============================================================================
// Day 02 — type inspector helper
// ============================================================================

/**
 * Ispisuje tip i konverzije za zadatu vrednost.
 */
function inspectValue(value) {
  console.log("value:", value);
  console.log("typeof:", typeof value);
  console.log("Number(value):", Number(value));
  console.log("String(value):", String(value));
  console.log("Boolean(value):", Boolean(value));
  console.log("----");
}

window.inspectValue = inspectValue;

console.log("Type inspector ready: try inspectValue(...) in the console 🔍");

// ============================================================================
// Hoisting experiments (playground)
// ============================================================================

function hoistingWithVar() {
  console.log("var before:", a);
  var a = 10;
  console.log("var after:", a);
}

function hoistingWithLet() {
  try {
    console.log("let before:", b);
  } catch (error) {
    console.log("Error caught for let:", error.message);
  }

  let b = 20;
  console.log("let after:", b);
}

window.hoistingWithVar = hoistingWithVar;
window.hoistingWithLet = hoistingWithLet;

console.log(
  "Hoisting experiments ready: try hoistingWithVar() and hoistingWithLet() in the console ⚙️"
);

// ============================================================================
// Day 02 — UI integration for progress tracker
// ============================================================================

/**
 * Vraća element po ID-ju ili baca grešku ako ne postoji.
 */
function getElementOrThrow(id) {
  const el = document.getElementById(id);

  if (!el) {
    throw new Error(`Element with id="${id}" not found`);
  }

  return el;
}

/**
 * Osvežava tekstualni prikaz stanja u DOM-u.
 */
function updateProgressUI() {
  const progressText = getElementOrThrow("js-progress-text");
  const statusText = getElementOrThrow("js-progress-status");

  const { message, statusLabel, statusCode } = jsDay02.status();

  progressText.textContent = message;
  statusText.textContent = statusLabel;
  statusText.dataset.statusCode = statusCode;
}

/**
 * Povezuje dugmad i inpute sa jsDay02 API-jem.
 */
function setupProgressUI() {
  // Ako nema sekcije u HTML-u, preskačemo integraciju
  const section = document.getElementById("js-progress-section");

  if (!section) {
    console.warn(
      'Progress section not found, skipping jsDay02 UI setup (id="js-progress-section").'
    );
    return;
  }

  const addDayBtn = getElementOrThrow("js-add-day-btn");
  const setDaysBtn = getElementOrThrow("js-set-days-btn");
  const input = getElementOrThrow("js-days-input");
  const errorBox = getElementOrThrow("js-progress-error");

  addDayBtn.addEventListener("click", () => {
    errorBox.textContent = "";
    jsDay02.addDay();
    updateProgressUI();
  });

  setDaysBtn.addEventListener("click", () => {
    errorBox.textContent = "";
    const rawValue = input.value;

    if (rawValue === "") {
      errorBox.textContent = "Unesi broj dana pre nego što klikneš.";
      return;
    }

    const result = jsDay02.setCompletedFromInput(rawValue);

    if (result === null) {
      errorBox.textContent = `Nevažeći unos: "${rawValue}"`;
      return;
    }

    updateProgressUI();
  });

  // Inicijalni prikaz
  updateProgressUI();
}

// Pokrećemo UI setup kada se DOM učita
document.addEventListener("DOMContentLoaded", () => {
  setupProgressUI();
});

// === End of Day 01 & Day 02 JS sandbox ===
