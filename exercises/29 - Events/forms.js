console.log(`it works`);

const wes = document.querySelector(`.wes`);

wes.addEventListener(`click`, function(theClick) {
  // console.log(theClick); // you'll see a log for a split second, before the new page opens. Can preserve log from cog in console.

  // theClick.preventDefault(); // This will entirely prevent opening the new page.

  // Here's a way to prevent (or require a confirmation) before allowing user to go to new page. Handy, dandy:
  // theClick.preventDefault();
  // const shouldChangePage = confirm(
  //   `This may be a malicious site. Do you wish to proceed?`
  // );

  // if (shouldChangePage) {
  //   window.location = theClick.currentTarget.href;
  // }

  // Alternative way to achieve same:
  const shouldChangePage = confirm(
    `This may be a malicious site. Do you wish to proceed?`
  );
  if (!shouldChangePage) {
    // means should not do the thing
    theClick.preventDefault();
  }
});

// Grabbing elements inside of a form. Handy dandy useful
const signupForm = document.querySelector(`[name="signup"]`);

signupForm.addEventListener(`submit`, function(event) {
  console.log(event.currentTarget.name.value); // pull out the value of name
  console.log(event.currentTarget.email.value); // pull out the value of email
  console.log(event.currentTarget.agree.checked); // is checkbox checked or not (boolean)

  // Now, let's say you don't like anyone named Chad and want to prevent all the hanging Chads from submitting their vote:
  const name = event.currentTarget.name.value;

  if (name.includes(`chad`)) {
    // note: `includes` is NOT case sensitive
    alert(`Sorry, Bro!`);
    event.preventDefault(); // don't allow submission
  }
});

// Other types of eventListeners
function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener(`keyup`, logEvent);
// keyup
// keydown
// focus This is where you are ie: :focus
// blur This is when you've lost focus
