console.log(`it works`);

// This works, but ONLY on the page that has the selector. Other pages w/o .tac the JS will break.
// const terms = document.querySelector(`.terms-and-conditions`);

// terms.addEventListener(`scroll`, function(event) {
//   console.log(event);
// });

// So, do this instead:
// function scrollToAccept() {
// 	const terms = document.querySelector(`.terms-and-conditions`);
//   if (!terms) {
//     return; // quit if there are NO terms. Stops the function from running.
//   }

//   terms.addEventListener(`scroll`, function(event) {
//     // scrollTop and scrollHeight are OLD ways to do this. Note that b/c of padding & margins, the two numbers will likely NEVER be equal, thus setting us up for too much math to figure out our scrollTo number.
//     console.log(event.currentTarget.scrollTop); // How high from the top we've scrolled
//     console.log(event.currentTarget.scrollHeight); // How high the entire scrolling element is.

//     // Instead…we do this, with Intersection Observer to figure out if something is viewable on the page.
//   });
// }

// scrollToAccept();

const terms = document.querySelector(`.terms-and-conditions`);
const watchMe = document.querySelector(`.watch`);
const button = document.querySelector(`.accept`);

function obCallback(payload) {
  // console.log(payload[0].isIntersecting);
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // stop observing once we've gotten to bottom (Because it'll keep 'observing' even when we no longer need it. Save some CPU work. )
    ob.unobserve(terms.lastElementChild);
  }
}

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild); // when the <hr> is fully in view, remove `disabled` from button.
