// Select h1 element
const heading = document.querySelector("h1");
console.log(heading);

// Select all elements with class 'content'
const contents = document.querySelectorAll(".content");
console.log(contents);

// The form with id 'contact-form'
const contactForm = document.getElementById("contact-form");
console.log(contactForm);

// The email input
const emailInput = document.querySelector('input[name="email"]');
console.log("Email input:", emailInput);

// All list items in the nav
const navItems = document.querySelectorAll("nav ul li");
console.log("Nav items:", navItems);

// The first .nav link
const firstNavLink = document.querySelector("nav ul li a");
console.log("First nav link:", firstNavLink);

// The last paragraph
const lastParagraph = document.querySelector("p:last-of-type");
console.log("Last paragraph:", lastParagraph);

// Select the header, navigate to the nav inside it
const header = document.querySelector("header");
const navInHeader = header.querySelector("nav");
console.log("Nav in header:", navInHeader);

// Select the first nav link, then get its parent li
const firstNavLink2 = document.querySelector("nav ul li a");
const parentLi = firstNavLink2.parentElement;
console.log("Parent li of first nav link:", parentLi);

// Select the article, then get its next sibling (section)
const article = document.querySelector("article");
//article.innerHTML = `
//<h2>Updated Article</h2>
//<p>This is new content.</p>
`;
//console.log(article.innerHTML);
const nextSibling = article.nextElementSibling;
console.log("Next sibling of article:", nextSibling);

// Select the ul, then get all its child li elements
const ul = document.querySelector("ul");
const childLis = ul.children;
console.log("All li children of ul:", childLis);

// Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const body = footer.parentElement;
console.log("Body from element:", body);

// Modifying text content
const h1 = document.querySelector("h1");
h1.textContent = "DOM Manipulation";
console.log(h1.textContent);

// // Modifying HTML content

// article.innerHTML = `;
// <h2>Updated Article</h2>
// <p>This is new content.</p>
// `;
// console.log(article.innerHTML);

const link = document.querySelector(".nav-link");

// Get attribute
console.log(link.getAttribute("href"));
// console.log(link.href);  // Property access
// Set attribute
link.setAttribute("href", "https://example.com");
// Check attribute
console.log(link.hasAttribute("Target"));
// Remove attribute
link.removeAttribute("Target");
// Data attributes
// <element data-id="123" data-category="tech">

const element = document.querySelector("[data-id]");
console.log(element.dataset.id); // "123"
console.log(element.dataset.category); // "tech"
element.dataset.newAttr = "value"; // Creates data-new-attr

const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page

article.appendChild(newParagraph); // Add at end

// Insert before another element
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph); // Add before first p

// Modern insertion methods
article.prepend(newParagraph); // First child
article.append(newParagraph); // Last child
firstParagraph.before(newParagraph); // Before sibling
firstParagraph.after(newParagraph); // After sibling

// Remove an element
//footer.remove();

// Remove child
const nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);

// Clear all children
//nav.innerHTML = ""; // Simple but rebuilds DOM
// OR
//while (article.firstChild) {
//     article.removeChild(article.firstChild);
// }

// Cloning Elements
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true); // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

const navLink = document.querySelector(".nav-link");
if (navLink) {
  const navItem = navLink.parentElement;
  const clone = navItem.cloneNode(true);
  clone.querySelector("a").textContent = "New Link";
  document.querySelector(".nav-list").appendChild(clone);
} else {
  console.error("No nav link found to clone.");
}

// Function that adds a new nav item dynamically
function addNavItem(text, href) {
  // Create li
  const li = document.createElement("li");

  // Create a link
  const link = document.createElement("a");
  link.textContent = text; // Set href attribute/ link text
  link.href = href; // Add link to li/ Set link href
  link.className = "nav-link"; // Add class for styling
  li.appendChild(link); // Add link to li
  const navList = document.querySelector(".nav-list");
  navList.append;
}
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// Exercise 1: Basic Events
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// Add a named function
function handleClick() {
  console.log("Handled");
}
// Remove named function
//button.removeEventListener("click", handleClick);

// Exercise 2: Event Types
function handler(keyboardEvent) {
  console.log("Key pressed:", keyboardEvent.key);
}
document.addEventListener("keydown", handler);

// Build: Click Counter
const countDisplay = document.createElement("p");
countDisplay.textContent = "Count: 0";
document.body.appendChild(countDisplay);

// Create buttons
const increaseBtn = document.createElement("button");
increaseBtn.textContent = "+";
document.body.appendChild(increaseBtn);

const decreaseBtn = document.createElement("button");
decreaseBtn.textContent = "-";
document.body.appendChild(decreaseBtn);

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
document.body.appendChild(resetBtn);

// Counter Variable
let count = 0;

// Event Listeners
increaseBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

console.log("event.key:");

// Exercise 1: Understanding Bubbling

document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

// Click on Child - what order do the logs appear?
// Grandparent clicked
// Parent clicked
// Child clicked

// Build: Delegated Task List Create a task list where:

const addTaskBtn = document.getElementById("add-task");
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");


// Use ONE event listener on the parent ul
taskList.addEventListener("click", (event) => {
// Clicking a task toggles "completed" class
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});

// Clicking a delete button removes the item
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});

// New tasks can be added
addTaskBtn.addEventListener("click", () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    newTaskInput.value = "";
  }
});

// Exercise: Complete Form Validation
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");

// Real-time validation
nameInput.addEventListener("input", function(event) {
    const value = event.target.value;
    
    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Stop form from submitting
    
    // Get all form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    console.log("Form data:", data);
    
    // Validate all fields
    if (isValid(data)) {
        // Submit via fetch or show success
        showSuccess("Form submitted successfully!");
        form.reset();
    }
});

function showError(input, message) {
    // Add error styling and message
    input.classList.add("error");
    // Create or update error message element
}

function clearError(input) {
    input.classList.remove("error");
    // Remove error message
}




