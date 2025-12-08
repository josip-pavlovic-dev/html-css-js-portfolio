// === JS Learning — Day 01 & Day 02 ===
// Ovaj fajl je tvoj lični JS sandbox za učenje u browseru.

console.log("JS Day 01 — script.js is loaded ✅");

// === Day 01 — prvi program i osnovne operacije ===

console.log("Hello from script.js 👋");

// osnovne aritmetičke operacije
console.log("2 + 2 =", 2 + 2);
console.log("10 / 3 =", 10 / 3);

// konkatenacija stringova
console.log("Concatenation:", "Hello" + " " + "World");

// čitanje naslova stranice
console.log("Current document title:", document.title);

// helper funkcija da vežbaš pozivanje funkcija iz konzole
function circleCircumference(radius) {
  const pi = 3.141592653589793;
  return 2 * pi * radius;
}

// izvozimo helper u globalni objekat da bi bio dostupan u DevTools
window.jsDay01 = {
  circleCircumference,
};

console.log("DevTools helper registered: try window.jsDay01 in the console 🧪");

// === Day 02 — promenljive i tipovi podataka ===

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

// === Day 02 — mini projekat: JS progress tracker (refactored) ===
console.log("----- Day 02: JS Progress Tracker (refactored) -----");
// "Konstante projekta" – konfiguracija koja se ne menja tokom rada
const jsDay02Config = {
  totalDays: 30,
  // Dan plana na kom si danas (1–30). Ručno menjaš po potrebi.
  planDayToday: 2,
};

// "Stanje" – stvari koje se menjaju dok učiš
const jsDay02State = {
  completedDays: 1, // koliko dana si završio do sada
};

// Čista funkcija koja računa progres i vraća detalje
function calculateProgress() {
  const { totalDays, planDayToday } = jsDay02Config; // destrukturiranje
  const { completedDays } = jsDay02State; // destrukturiranje

  // izračunavanje procenta završenog

  const percentage = (completedDays / totalDays) * 100;

  // Ako planDayToday nije setovan (null/undefined), uzimamo completedDays kao "danas"
  const effectivePlanDay = planDayToday ?? completedDays; // primer nullish operatora (??)
  // određivanje statusa
  // "behind", "on_track", "ahead"
  let statusCode;
  // uslovi za status
  if (completedDays < effectivePlanDay) {
    statusCode = "behind"; // kasniš
  } else if (completedDays === effectivePlanDay) {
    statusCode = "on_track"; // tačno na planu
  } else {
    statusCode = "ahead"; // ispred plana
  }

  // labela za status
  const statusLabel =
    statusCode === "behind" // uslovni (ternarni) operator
      ? "Kasniš za planom" // ako je "behind"
      : statusCode === "on_track" // ako je "on_track"
      ? "Na planu si" // ako je "on_track"
      : "Ispred plana si"; // inače (ako je "ahead")

  // formatirana poruka za ispis

  const message = `JS progres: ${completedDays}/${totalDays} dana (${percentage.toFixed(
    1
  )}%) — ${statusLabel}`; // formatirana poruka

  return {
    message, // čista funkcija vraća poruku
    percentage, // čista funkcija vraća izračunatu vrednost
    statusCode, // čista funkcija vraća izračunatu vrednost
    statusLabel, // čista funkcija vraća izračunatu vrednost
  };
}

// Funkcija koja loguje trenutni progres i vraća objekat sa detaljima
function logProgress() {
  const { message, percentage, statusCode, statusLabel } = calculateProgress(); // čista funkcija

  console.log(message); // logujemo poruku
  console.log("Status code:", statusCode); // dodatni logovi
  console.log("Status label:", statusLabel); // dodatni logovi

  return {
    completedDays: jsDay02State.completedDays, // dinamička vrednost
    totalDays: jsDay02Config.totalDays, // statička vrednost
    percentage, // izračunata vrednost
    statusCode, // izračunata vrednost
    statusLabel, // izračunata vrednost
  };
}

// DevTools "API" – ovo je ono što vidiš kao jsDay02 u konzoli
// možeš da pozoveš metode za interakciju
window.jsDay02 = {
  // prikaz trenutnog statusa
  status() {
    return logProgress(); // samo loguje trenutni progres
  },
  // dodaj jedan dan završenog učenja
  addDay() {
    jsDay02State.completedDays += 1; // povećavamo broj završenih dana za 1
    return logProgress(); // logujemo novi progres
  },
  // postavi broj završenih dana iz inputa
  setCompletedFromInput(value) {
    const asNumber = Number(value); // konvertujemo ulaz u broj
    // validacija ulaza
    if (Number.isNaN(asNumber)) {
      console.log("Cannot update progress: value is not a number:", value); // greška
      return null; // prekidamo funkciju
    }
    // ažuriramo stanje
    jsDay02State.completedDays = asNumber;
    return logProgress(); // logujemo novi progres
  },
};

console.log(
  "Day 02 progress tracker (refactored) ready: try window.jsDay02 in the console 📊"
);

// Šta smo dobili:

// 1. gore su konstante (jsDay02Config) → tu ne diraš tokom rada,

// 2. jsDay02State jasno kaže “ovo su stvari koje se menjaju”,

// 3. calculateProgress je čista funkcija (račun → rezultat),

// 4. logProgress je “spoj” računanja + console.log,

// 5. window.jsDay02 je jasan “javani API”.

// Ovo je ta “mini refaktorisana verzija” – i dalje početnički kod, ali struktura je mnogo bliža realnim projektima.
// Savet: učiš li JS za ozbiljnije projekte, uvek razmišljaj o strukturi koda i kako da ga organizuješ da bude čitljiviji i održiviji.

// === Day 02 — type inspector helper ===

function inspectValue(value) {
  console.log("value:", value);
  console.log("typeof:", typeof value);
  console.log("Number(value):", Number(value));
  console.log("String(value):", String(value));
  console.log("Boolean(value):", Boolean(value));
  console.log("----");
}

// izvozimo helper globalno, da možeš u konzoli
window.inspectValue = inspectValue;

console.log("Type inspector ready: try inspectValue(...) in the console 🔍");

// U DevTools konzoli možeš da pozoveš npr:
// 1. inspectValue("42");
// 2. inspectValue("");
// 3. inspectValue("3.14");
// 4. inspectValue("abc");
// 5. inspectValue(true);
// 6. inspectValue(false);
// 7. inspectValue(null);
// 8. inspectValue(undefined);
// 9. inspectValue(0);
// 10. inspectValue(7);
// 11. inspectValue(NaN);
// 12. inspectValue(Infinity);

// Ovo će ti pomoći da razumeš kako različite vrednosti funkcionišu u JavaScript-u i kako se konvertuju između tipova.

// === Hoisting experiments (playground) ===

// var primer
function hoistingWithVar() {
  console.log("var before:", a);
  var a = 10;
  console.log("var after:", a);
}

// let primer
function hoistingWithLet() {
  try {
    console.log("let before:", b); // ovde očekuješ ReferenceError
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

// U DevTools konzoli možeš da pozoveš:
// 1. hoistingWithVar();
// 2. hoistingWithLet();

// Ovo će ti pomoći da razumeš razlike u ponašanju između var i let prilikom hoistinga.

// === Day 02 — UI integration for progress tracker ===

function getElementOrThrow(id) {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`Element with id="${id}" not found`);
  }
  return el;
}

function updateProgressUI() {
  const progressText = getElementOrThrow("js-progress-text");
  const statusText = getElementOrThrow("js-progress-status");

  const { message, statusLabel, statusCode } = window.jsDay02.status();

  progressText.textContent = message;
  statusText.textContent = statusLabel;

  // jednostavan vizuelni status (možeš kasnije stilovati u CSS-u)
  statusText.dataset.statusCode = statusCode;
}

function setupProgressUI() {
  // ako nema sekcije u HTML-u, samo preskoči integraciju
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
    window.jsDay02.addDay();
    updateProgressUI();
  });

  setDaysBtn.addEventListener("click", () => {
    errorBox.textContent = "";
    const rawValue = input.value;

    // ako polje prazno → ne radi ništa
    if (rawValue === "") {
      errorBox.textContent = "Unesi broj dana pre nego što klikneš.";
      return;
    }

    const result = window.jsDay02.setCompletedFromInput(rawValue);

    if (result === null) {
      errorBox.textContent = `Nevažeći unos: "${rawValue}"`;
      return;
    }

    updateProgressUI();
  });

  // inicijalni prikaz
  updateProgressUI();
}

// pokrećemo UI setup kada se DOM učita
document.addEventListener("DOMContentLoaded", () => {
  setupProgressUI();
});

// === End of Day 01 & Day 02 JS sandbox ===
