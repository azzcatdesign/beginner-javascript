console.log(`it works`);

const wes = document.querySelector(`.wes`);

// This gives us the entire paragraph
console.log(wes);

// Gives us the children/elements (2) [em, strong]
console.log(wes.children);

// Gives us the child nodes (5) [text, em, text, strong, text]
console.log(wes.childNodes);

// Other ways to access elements
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

// Can access nodes in same manner

// Weird thing: add an element to DOM. Remove element. log element, and it'll still be in memory:

const p = document.createElement(`p`);
p.textContent = `I will be removed.`;
document.body.appendChild(p);

p.remove();

console.log(p);
