console.log(`it works`);

const butts = document.querySelector(`.butts`); // first target the elements

console.log(butts);

// parameters: what is event you're listening to? `click`; what is the callback function? (Callback is a regular function, just means it's passed to a method to be called later in time by browser.)
// butts.addEventListener(`click`, function() { // anonymous function
//   console.log(`It got clicked!`);
// });

// Alternately & for more extensibility, DRYness: create a NAMED callback function before adding the listener
// note: `handle` is good practice for naming event`handlers`
function handleClick() {
  console.log(`It got clicked!`);
}

butts.addEventListener(`click`, handleClick); // Browser will call function on click

// butts.addEventListener(`click`, handleClick()); // This will result in event being triggered ON LOAD

// Make the handleClick event listener available to other buttons
const coolButt = document.querySelector(`.cool`);

console.log(coolButt);

coolButt.addEventListener(`click`, handleClick);

// Remove event listener (Unbinding)
// !!Will only work with named functions, not anonymous functions.
butts.removeEventListener(`click`, handleClick);

// Write as an arrow function
// Although technically this is an anonymous function, b/c it is stored in a variable and can infer the function name from variable, it can be bound and unbound just like a named function.
const hooray = () => console.log(`Hooray!`);

butts.addEventListener(`click`, hooray);

butts.removeEventListener(`click`, hooray);

// Listening for events on MULTIPLE items
// Note: can't do multiple items exactly the same. It requires LOOPING over each element.
const buyButtons = document.querySelectorAll(`button.buy`);

// console.dir(buyButtons); // Shows that `addEventListener` isn't a method for multiple elements.

// function buyItem() {
//   console.log(`Buying Item!`);
// }

// buyButtons.forEach(function(buyButton) {
//   // Now anything we put in here will run 10 times (once for each button)
//   console.log(`Binding the buy button`);
//   buyButton.addEventListener(`click`, buyItem);
// });

// Alternative
// function attachListener(buyButton) {
//   console.log(`Binding the buy button`);
//   buyButton.addEventListener(`click`, buyItem);
// }

// buyButtons.forEach(attachListener);

// Alternative, use an arrow function
// Note: this is an anonymous function and therefore CANNOT be unbound
// buyButtons.forEach(button => {
//   button.addEventListener(`click`, () => {
//     console.log(`So very clicky!`);
//   });
// });

// / More Events lesson, how to target one of many
function handleBuyButtonClick(event) {
  console.log(`Yep, you're buying it!`);
  console.log(event); // Bam! We have a MouseEvent with lots of info
  console.log(event.target); // And this will tell us exactly which button the user has clicked on.
  console.log(event.target.dataset); // Drill down for more info
  console.log(event.target.dataset.price); // And further drilling.
  console.log(parseInt(event.target.dataset.price)); // Get the price in integer. parseFloat retains decimals.

  const button = event.target;
  console.log(button.textContent); // Get the textContent

  console.log(event.currentTarget); // Note: `target` is the thing that got clicked, ie: the strong element. VS. `currentTarget` which is the thing that fires the eventListener. `currentTarget` is more specific/accurate for most use cases.
  console.log(event.target === event.currentTarget); // Test by clicking on strong tag inside button and outside strong tag within button.

  // Stop the window event below from bubbling up to the buttons.
  event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener(`click`, handleBuyButtonClick);
});

// You can add the same type of eventListener to the window. Note that it'll `propagate` the click event from strong tag -> button -> body -> window.
window.addEventListener(`click`, function(event) {
  console.log(`You clicked within the window...somewhere!`);

  // Find out specifics of your window clicks.
  console.log(event.target);
});

const photoEl = document.querySelector(`.photo`);

photoEl.addEventListener(`mousemove`, function(moveIt) {
  console.count(moveIt.currentTarget); // count the number of moves of cursor over image...woah!
  console.log(moveIt.currentTarget); // Safe, best practice

  // console.log(this); // Here's the fun special keyword: always = whatever is LEFT of the `.` before `addEventListener. **Note**This won't scope the same if using an arrow function. Therefore!! it's best practice to reference the actual element with `.currentTarget` in eventListeners rather than `this`.
});
