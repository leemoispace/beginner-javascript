const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// const tabPanels = tabs.querySelectorAll('[role="tabPanel"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });
  // mark other tabs as unselected
  tabButtons.forEach((tab) => {
    // tab.ariaSelected = false; can't work
    tab.setAttribute('aria-selected', false);
  });
  // mark this clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  // find the associated tabPanel and show it!
  const { id } = event.currentTarget;

  //   method1
  //   const tabPanel = tabs.querySelectorAll(`[aria-labelledby="${id}"]`);
  //   tabPanel.hidden = false;

  // method2
  console.log(tabPanels);
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === id
  );

  tabPanel.hidden = false;
}

tabButtons.forEach((button) => {
  button.addEventListener('click', handleTabClick);
});
