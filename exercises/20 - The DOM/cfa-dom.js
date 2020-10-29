// const p = document.querySelector(`p`);
// console.log(p);
// const img = document.querySelectorAll(`.item img`);
// console.log(img);
// const item2 = document.querySelector(`.item2`);
// const item2Image = item2.querySelector(`img`);
// console.log(item2Image);
// const heading = document.querySelector(`h2`);
// // console.log(heading.innerText); // Only human-readable inner text content, NOT including <style> tags or hidden elements. Aware of styling.
// console.log(heading.outerHTML);
// console.log(heading.innerHTML);
//
// Getter (pull the data out that you need)
// console.dir(heading);
//
// Setters (change the data. Here, the textContent in the DOM)
// // heading.textContent = `I am no longer an average heading.`; // All text content, including hidden or <style> tag content.
// Getters
// console.dir(heading.textContent);

// Classes
const pic = document.querySelector(`.nice`);
// pic.classList.remove(`big`);
// pic.classList.add(`round`);
pic.classList.toggle(`round`);
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle(`round`);
}

pic.addEventListener(`click`, toggleRound);

pic.alt = `changing image`; // Setter
console.log(pic.alt); // Getter
console.log(pic.naturalWidth); // Running this from here is likely to result in 0 because the image hasn't yet loaded. Run `pic.naturalWidth` from console to see the actual width.
// --OR--
pic.addEventListener(`load`, function() {
  // or window.addEventListener
  console.log(pic.naturalWidth);
});
