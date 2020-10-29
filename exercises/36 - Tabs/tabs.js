console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector(`.tabs`);
const tabButtons = tabs.querySelectorAll(`[role="tab"]`);
const tabPanels = tabs.querySelectorAll(`[role="tabpanel"]`);
const tabPanelsMethod2 = Array.from(tabs.querySelectorAll(`[role="tabpanel"]`));

function handleTabClick(event) {
  // console.log(event.currentTarget);
  // hide all tab panels
  // console.log(tabPanels);

  // tabPanels.forEach(function(panel) {
  //   // console.log(panel); // click on any panel and see content for each
  //   panel.hidden = true; // now click and no content will display;
  // });

  tabPanels.forEach(panel => {
    // Make it into an arrow function
    panel.hidden = true;
  });

  // mark all tabs as unselected Note: for aria attributes, you must use the `setAttribute` method to change
  tabButtons.forEach(tab => {
    tab.setAttribute(`aria-selected`, false);
  });

  // mark the clicked tab as selected
  event.currentTarget.setAttribute(`aria-selected`, true);

  // target the tab by id
  const { id } = event.currentTarget; // this is destructured automatically on save
  console.log(id);

  // find the associated tabPanel and show it. Method #1
  // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  // tabPanel.hidden = false;

  // Method #2 find in the array of tabPanels (use Array)
  console.log(tabPanelsMethod2);
  const tabPanel = tabPanelsMethod2.find(
    panel => panel.getAttribute(`aria-labelledby`) === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener(`click`, handleTabClick));
