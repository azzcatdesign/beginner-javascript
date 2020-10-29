console.log(`Wheee!`);

const myParagraph = document.createElement(`p`); // created an element, but it's not yet on the page/DOM, only in console.

// add content and a class to the paragraph
myParagraph.textContent = `I'm a lowly paragraph.`;
myParagraph.classList.add(`special`);
console.log(myParagraph);

// make some new elements
const myDiv = document.createElement(`div`);
myDiv.classList.add(`wrapper`);
console.log(myDiv);

const myImg = document.createElement(`img`);
myImg.src = `https://picsum.photos/300`;
myImg.alt = `surprise image`;
console.log(myImg);

// Now, add any/all of the above elements to the DOM:
document.body.appendChild(myDiv); // add the div to the body, right before closing
myDiv.appendChild(myImg); // add the image to the div
myDiv.appendChild(myParagraph); // add the paragraph to the div

// ** However ^ method causes 3 reflows and slows down page build/performance. Rearrange the calls to only call a single reflow. 1) and 2) are still only in console, not DOM. 3) is the single reflow to DOM
// 1) myDiv.appendChild(myParagraph);
// 2) myDiv.appendChild(myImg);
// 3) document.body.appendChild(myDiv);

// Another addition:
const heading = document.createElement(`h2`);
heading.textContent = `Phantom JS-generated Head`;

myDiv.insertAdjacentElement(`afterbegin`, heading);

// EXERCISE: create a list like this
// <ul>
// <li>One</li>
// <li>two</li>
// <li>three</li>
// <li>four</li>
// <li>five</li>
// </ul>

const myList = document.createElement(`ul`);
const listOne = document.createElement(`li`);
const listTwo = document.createElement(`li`);
const listThree = document.createElement(`li`);
const listFour = document.createElement(`li`);
const listFive = document.createElement(`li`);

listOne.textContent = `one`;
listTwo.textContent = `two`;
listThree.textContent = `three`;
listFour.textContent = `four`;
listFive.textContent = `five`;

myList.appendChild(listOne);
// myList.appendChild(listFive);
myList.appendChild(listTwo);
// myList.appendChild(listThree);
myList.appendChild(listFour);

listTwo.insertAdjacentElement(`afterend`, listThree);
myList.insertAdjacentElement(`beforeend`, listFive);
document.body.insertAdjacentElement(`afterbegin`, myList);
