console.log(`it works`);

// Select the elements on the page: canvas, shake button
// The canvas is the element, and the place where we'll be drawing is the `context` (ctx). We'll be working in 2D
const canvas = document.querySelector(`#etch-a-sketch`);
const ctx = canvas.getContext(`2d`);
const shakeButton = document.querySelector(`.shake`);
const MOVE_AMOUNT = 20; // This is indicative (code style) of a constant value that will NEVER change.

// Setup our canvas for drawing
// Make variables called width and height from the same properties on our canvas.
// If you are making variables from a property on the object, ie: width property as a variable, you can use the shortcut method. Note that stylelint will change what's below to a shortcut. *This is called `destructuring`.
// const width = canvas.width;
// const height = canvas.height;
const { width, height } = canvas;
// console.log(width, height);

// Question: how to generate a random starting point? You could randomly use any value between 0 and the width, and any value between 0 and the height from which to start.
// Math.random returns value between 0 and .99999...
// Math.floor returns the largest integer less than or equal to a given number.
let x = Math.floor(Math.random() * width); // generate random x axis value between 0 and canvas width.
let y = Math.floor(Math.random() * height); // generate random y value between 0 and canvas height.
let hue = 0;

// Set default methods:
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.lineJoin = `round`;
ctx.lineCap = `round`; // default is square
ctx.lineWidth = 16; // default is 1px
ctx.beginPath(); // start drawing point
// ctx.moveTo(200, 200);
// ctx.lineTo(200, 200);

// Instead of hard coding 200, 200 starting point, use the randomized variables:
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke(); // We now have an invisible `line` that begins 200px to right, and 200px down from top which appears as a 10px dot at the 200, 200 point on screen.

// Write a draw function
// function draw(options) { // We'll have a lot of options, so we don't write them all out here.
//   console.log(options);
// }

function draw({ key }) {
  // increment the hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  // Start the path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // Move our x and y values depending on what the user did
  // x -= MOVE_AMOUNT; // stylelint makes this from x = x - 10;
  // y -= MOVE_AMOUNT;

  console.log('value of y', y);
  console.log(`value of x`, x);
  switch (key) {
    case `ArrowUp`:
      y -= MOVE_AMOUNT;
      break;
    case `ArrowDown`:
      y += MOVE_AMOUNT;
      break;
    case `ArrowLeft`:
      x -= MOVE_AMOUNT;
      break;
    case `ArrowRight`:
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// Destructuring also works in functions. So we can use the option and make it into a key (top level) variable.

// Write a handler for the keys
// function handleKey(e) {
//   e.preventDefault(); // stop page from scrolling when arrow keys are used.
//   console.log(`Handling Key`);
//   console.log(e.key);
// }
function handleKey(e) {
  if (e.key.includes(`Arrow`)) {
    e.preventDefault();
    draw({ key: e.key });
    // console.log(e.key);
    // console.log(`I'm handling those Keys!!`);
  }
}

// Clear/shake function
function clearCanvas() {
  canvas.classList.add(`shake`);
  // ctx.clearRect(0, 0, 500, 300); // start at origin (top left) and clear a rectangle of 500 x 300px. Note: this shows logic. But what we really want is to clear the ENTIRE canvas so:
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    `animationend`,
    function() {
      console.log(`Done the shake!`);
      canvas.classList.remove(`shake`);
    },
    { once: true } // Another eventListener argument to only run event listener one time and not stack up multiple event listeners. It *unbinds* itself.
  );
}

// Listen for arrow keys
window.addEventListener(`keydown`, handleKey); // oops...this is for ALL the keys. Go back and make it for just the arrow keys!
shakeButton.addEventListener(`click`, clearCanvas);
