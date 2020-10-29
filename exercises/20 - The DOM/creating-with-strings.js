console.log('This is my log');

const item = document.querySelector(`.item`);

// item.innerHTML = `<h1>I AM Phantom HTML from JS!!!</h1>`;
// console.log(item.innerHTML); // getter

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pic`;
const myHTML = `
    <div class="wrapper">
        <h2> Cute ${desc}</h2>
        <img src="${src}" alt="${desc}"/>
    </div>
`;

console.log(typeof myHTML); // Turns out our HTML is actually a string. NOT an ELEMENT. Therefore, we can't add classes, etc. to this HTML.

// The above HTML ONLY becomes an element once we set it into the DOM by this:
item.innerHTML = myHTML;
console.log(item.innerHTML);

// Now we can *do* stuff:
const itemImage = document.querySelector(`.wrapper img`);

itemImage.classList.add(`round`);

console.log(itemImage);

// Alternate way to turn into DOM element
// First, create a range (a collection of elements)
// From that range, we can immediately call another method `.createContextualFragment` into which we pass a sting.
// These aren't yet on the page, but we can now select them
const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector(`img`));
console.log(myFragment);

// Now we can add them to page and DO things to them
document.body.appendChild(myFragment);
