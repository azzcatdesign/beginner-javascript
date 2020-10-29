const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// Console Methods

// Basic Log
// people.forEach((person, index) => {
//   console.log(person.name);
// });

// Display as Error
// people.forEach((person, index) => {
//   console.error(person.name);
// });

// Display as Warning
// people.forEach((person, index) => {
//   console.log(person.name);
//   if (person.name === 'Wes') {
//     console.warn(`Dumb name!`);
//   }
// });

// Display as Table
// console.table(people);

// Count the number of times you run a function
// function doctorize(name) {
//   console.count(`running Doctorize`);
//   return `Dr. ${name}`;
// }

// function doctorize(name) {
// console.count(`running Doctorize for ${name}`);
// return `Dr. ${name}`;
// }

// Do a Lot of Stuff
// function doALotOfStuff() {
//   console.group(`Doing some stuff`);
//   console.log(`Hey, I'm thing one.`);
//   console.warn(`Oops, I'm thing two!`);
//   console.error(`OMG!`);
//   console.groupEnd(`Doing some stuff`);
// }

// Do a Lot of Stuff, Collapsed or Not
// people.forEach((person, index) => {
//   console.groupCollapsed(`${person.name}`);
//   // console.group(`${person.name}`);
//   console.log(person.country);
//   console.log(person.cool);
//   console.log(`DONE!`);
//   console.groupEnd(`${person.name}`);
// });

// Callstack
// This is about reading the error messages, and line numbers in console and tracing back to the code.

// Grabbing Elements
// This is cool:
// from Inspector Elements, select the thing to inspect
// switch to console
// type `$0` ( = last element you clicked, `$1` = second-to-last element clicked, and so on)
// console will return to you whatever you currently have selected in elements tab
// Then you can interact with element, ie: input

// ONLY IN CONSOLE
// `$` and `$$` are shorthand selectors
// `$('p')` = document.querySelector = find the first selector that matches 'p'
// `$$('p')` = document.querySelectorAll = find all the selectors that match 'p'

// Breakpoints

people.forEach((person, index) => {
  console.log(person.name);
});

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
