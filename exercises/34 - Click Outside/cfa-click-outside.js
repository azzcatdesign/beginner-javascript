console.log(`it works`);
const cardButtons = document.querySelectorAll(`.card button`);
const modalInner = document.querySelector(`.modal-inner`);
const modalOuter = document.querySelector(`.modal-outer`);

function handleCardButtonClick(event) {
  // console.log(`Clickety click click`);
  const button = event.currentTarget;
  const card = button.closest(`.card`); // pick the closest card going up the DOM tree
  // console.log(card);
  // grab the image src
  const imgSrc = card.querySelector(`img`).src;
  const desc = card.dataset.description;
  // console.log(desc);
  // Populate modal with the new info, help it load faster by coding size
  modalInner.innerHTML = `
		<img width="600" height="600" src="${imgSrc.replace(
      `200`,
      `600`
    )} alt="${name}"/>
		<p>${desc}</p>
	`;
  // Show the modal
  modalOuter.classList.add(`open`);
}

cardButtons.forEach(button =>
  button.addEventListener(`click`, handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove(`open`); // This works in console
}

modalOuter.addEventListener(`click`, function(event) {
  // console.log(event.target); // see where we're clicking
  // console.log(event.currentTarget); // see where we're clicki

  // We want to determine when user is clicking OUTSIDE the modal-inner (in the yellow area), add a boolean (`!` aka `bang`) and then condition...remove `.open` class when clicked outside
  const isOutside = !event.target.closest(`.modal-inner`);
  if (isOutside) {
    closeModal();
  }
  console.log(isOutside); // display the boolean
});

// Hook up the Escape key
window.addEventListener(`keydown`, event => {
  if (event.key === `Escape`) {
    closeModal();
  }
});
