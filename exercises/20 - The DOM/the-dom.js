//<ul class="made-by-js">
//	<li class="one">one</li>
//	<li data-name="two">two</li>
//	<li>three</li>
//	<li>four</li>
//	<li>five</li>
//</ul>

const list = document.createElement('ul');
list.classList.add('made-by-js');
console.log(list);

const listItemOne = document.createElement('li');
listItemOne.textContent = "one";
listItemOne.classList.add('one');
console.log(listItemOne);

const listItemTwo = document.createElement('li');
listItemTwo.textContent = "two";
// add a custom 'data-*' attribute to the item
listItemTwo.setAttribute('data-name', 'two');
console.log(listItemTwo);

const listItemThree = document.createElement('li');
listItemThree.textContent = "three";
console.log(listItemThree);

const listItemFour = document.createElement('li');
listItemFour.textContent = "four";
console.log(listItemFour);

const listItemFive = document.createElement('li');
listItemFive.textContent = "five";
console.log(listItemFive);

// document.body.appendChild(list);
list.appendChild(listItemOne);
list.appendChild(listItemTwo);

// different ways to insert a third list item
//list.appendChild(listItemThree);
listItemTwo.insertAdjacentElement('afterend', listItemThree);
// list.appendChild(listItemFour);
list.appendChild(listItemFive);

// to do it this way, you first have to make a listItemFive, then insertAdjecentElement. This doesn't work BEFORE five is made!
listItemFive.insertAdjacentElement('beforebegin', listItemFour);

// Put this here so it only touches the DOM once and doesn't redraw 5x
document.body.appendChild(list);

