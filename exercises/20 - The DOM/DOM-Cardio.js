// Make a div

// add a class of wrapper to it

// put it into the body

// make an unordered list

// add three list items with the words "one, two three" in them
// put that list into the above wrapper

// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

console.log(`I'm working`);

// Make a div
const div = document.createElement(`div`);

// add a class of wrapper to it
div.classList.add(`wrapper`);
console.log(div);

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = document.createElement(`ul`);
const li = document.createElement(`li`);
const li1 = document.createElement(`li`);
const li3 = document.createElement(`li`);

ul.appendChild(li);
li.insertAdjacentElement(`beforebegin`, li1);
li.insertAdjacentElement(`afterend`, li3);

// put that list into the above wrapper
div.insertAdjacentElement(`afterbegin`, ul);

// add three list items with the words "one, two three" in them
li.textContent = `two`;
li1.textContent = `one`;
li3.textContent = `three`;

// Alternate ul creation
// const ul = `
// <ul>
// <li>one</li>
// <li>two</li>
// <li>three</li>
// </ul>
// `;
//
// div.innerHTML = ul;

console.log(ul);

// create an image
const img = document.createElement(`img`);

// set the source to an image
img.src = `https://picsum.photos/200`;

// set the width to 250
img.width = 250;

// add a class of cute
img.classList.add(`cute`);

// add an alt of Cute Puppy
img.alt = `Cute Puppy`;

console.log(img);

// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
	<div class="myDiv">
		<p>First paragraph.</p>
		<p>Second paragraph.</p>
	</div>
`;

console.log(typeof myHTML);

// put this div before the unordered list from above
const myUl = document.querySelector(`ul`);

console.log(myUl);

myUl.insertAdjacentHTML(`beforebegin`, myHTML);
// document.body.insertAdjacentHTML(`afterbegin`, myHTML); // this works, too

console.log(typeof myHTML); // Still a string

const myDiv = div.querySelector(`.myDiv`); // assigning a variable and grabbing it via `querySelector` now makes the string an element or object.
// const myDiv = div.firstElementChild; // This works, too.

console.log(typeof myDiv); // now it's an object, not a string

// add a class to the second paragraph called warning
myDiv.children[1].classList.add(`warning`);
myDiv.lastElementChild.classList.add(`extra-warning`);

// remove the first paragraph
// myDiv.children[0].remove(); // This works, too.
myDiv.firstElementChild.remove();

const fragmentHTML = `
  <div class="fragment">
    <p>I am a ContextualFragment within a Range.</p>
  </div>
`;

console.log(typeof fragmentHTML);

// turn a string into a DOM element BEFORE you dump into body
const myFragment = document
  .createRange()
  .createContextualFragment(fragmentHTML);

console.log(myFragment);
console.log(typeof myFragment); // Bam! an object!
console.log(myFragment.querySelector(`p`)); // And you can target a child in the object/element.

document.body.appendChild(myFragment); // Add it to the DOM.

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const html = `
		<div class="playerCard">
			<h2>${name} – ${age}</h2>
			<p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age *
    7} in Dog Years. That would be a tall dog!</p>
		<button class="delete" type="button">Delete</button>
		</div>
	`;
  return html;
}

// console.log(generatePlayerCard);

// make a new div with a class of cards
const cards = document.createElement(`div`);

cards.classList.add(`cards`);
console.log(cards);

// Have that function make 4 cards
let cardsHTML = generatePlayerCard(`cath`, 62, 5.5);
cardsHTML += generatePlayerCard(`jim`, 63, 5.11);
cardsHTML += generatePlayerCard(`mad`, 26, 5.9);
cardsHTML += generatePlayerCard(`jor`, 28, 5.8);
cardsHTML += generatePlayerCard(`zach`, 30, 5.11);

// console.log(cardsHTML);

// append those cards to the div
cards.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement(`beforebegin`, cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// const buttons = document.querySelectorAll('.delete'); // this works, too
const buttons = document.querySelectorAll(`button`);
console.log(buttons);

// make our delete function

function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // console.log(event.currentTarget); // test to make sure we're targeting button
  // console.log(`Delete Card TODO`);
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest(`.playerCard`).remove(); // this works, too and is less fragile, b/c it moves up DOM tree to remove .playerCard
}

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener(`click`, deleteCard)); // Testing the deleteCard function above.
