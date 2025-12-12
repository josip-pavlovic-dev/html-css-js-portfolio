// JS Sandbox Playground

// DOM references
const title = document.getElementById("title");
const box = document.getElementById("box");
const items = document.getElementById("items");
const addItemBtn = document.getElementById("addItemBtn");
const loginBtn = document.getElementById("loginBtn");

// Console examples
console.group("Init");
console.log("Title:", title.textContent);
console.dir(box);
console.table([
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Contact" },
]);
console.groupEnd();

// Events
loginBtn.addEventListener("click", () => {
  console.log("Login klik!");
});

// Delegation on nav-list
const navList = document.querySelector(".nav-list");
navList.addEventListener("click", (e) => {
  const link = e.target.closest(".nav-link");
  if (!link) return;
  console.log("Klik na nav link:", link.textContent);
  e.preventDefault();
});

// Add item button
addItemBtn.addEventListener("click", () => {
  console.time("add-item");
  const li = document.createElement("li");
  li.textContent = `Item ${items.children.length + 1}`;
  items.appendChild(li);
  console.timeEnd("add-item");
});

// Debugging demo
function calcTotal(arr) {
  debugger;
  return arr.reduce((acc, n) => acc + n, 0);
}

// Try in console:
// calcTotal([1,2,3])
