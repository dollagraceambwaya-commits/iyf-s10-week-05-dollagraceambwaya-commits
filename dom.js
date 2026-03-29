// Select h1 element
const heading = document.querySelector('h1');
console.log(heading);

// Select all elements with class 'content'
const contents = document.querySelectorAll('.content');
console.log(contents);

// The form with id 'contact-form'
const contactForm = document.getElementById('contact-form');
console.log(contactForm);

// The email input
const emailInput = document.querySelector('input[name="email"]');
console.log("Email input:", emailInput);

// All list items in the nav
const navItems = document.querySelectorAll('nav ul li');
console.log("Nav items:", navItems);

// The first .nav link
const firstNavLink = document.querySelector('nav ul li a');
console.log("First nav link:", firstNavLink);

// The last paragraph
const lastParagraph = document.querySelector('p:last-of-type');
console.log("Last paragraph:", lastParagraph);

// Select the header, navigate to the nav inside it
const header = document.querySelector('header');
const navInHeader = header.querySelector('nav');
console.log("Nav in header:", navInHeader);

// Select the first nav link, then get its parent li
const firstNavLink2 = document.querySelector('nav ul li a');
const parentLi = firstNavLink2.parentElement;
console.log("Parent li of first nav link:", parentLi);

// Select the article, then get its next sibling (section)
const article = document.querySelector('article');
article.innerHTML = `
<h2>Updated Article</h2>
<p>This is new content.</p>
`;
console.log(article.innerHTML);
const nextSibling = article.nextElementSibling;
console.log("Next sibling of article:", nextSibling);


// Select the ul, then get all its child li elements
const ul = document.querySelector('ul');
const childLis = ul.children;
console.log("All li children of ul:", childLis);

// Start from the footer and navigate up to the body
const footer = document.querySelector('footer');
const body = footer.parentElement;
console.log("Body from element:", body);

// Modifying text content
const h1 = document.querySelector("h1");
h1.textContent = "DOM Manipulation";
console.log(h1.textContent);

// // Modifying HTML content
// const article = document.querySelector("article");
// article.innerHTML = `
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
console.log(element.dataset.id);        // "123"
console.log(element.dataset.category);  // "tech"
element.dataset.newAttr = "value";      // Creates data-new-attr

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
const article = document.querySelector("article");
article.appendChild(newParagraph);  // Add at end

// Insert before another element
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph);  // Add before first p

// Modern insertion methods
article.prepend(newParagraph);         // First child
article.append(newParagraph);          // Last child
firstParagraph.before(newParagraph);   // Before sibling
firstParagraph.after(newParagraph);    // After sibling

// Remove an element
const footer = document.querySelector("footer");
footer.remove();

// Remove child
const nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);

// Clear all children
nav.innerHTML = "";  // Simple but rebuilds DOM
// OR
//while (article.firstChild) {
//     article.removeChild(article.firstChild);
// }

// Cloning Elements
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);  // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);

// Function that adds a new nav item dynamically
function addNavItem(text, href) {

    
}
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");


