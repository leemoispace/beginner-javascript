const butts = document.querySelector('.butts');
butts.addEventListener('click', handleClick);

const hooray = () => console.log('hooray!'); // no hoisting for anonymous functions

const coolButton = document.querySelector('.cool');
coolButton.addEventListener('click', hooray);

function handleClick() {
  console.log('clicked!');
}

const buyButtons = document.querySelectorAll('button.buy'); // <script> should be at the end of the body in html!

function handleBuyButtonClick(event) {
  // whatever u name 'event' here.
  console.log('u r buying it! ');
  console.log(parseInt(event.target.dataset.price)); // shows the target button
  const button = event.target;
  console.log(button.textContent);
  console.log(event.currentTarget);
  // stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach((buybutton) => {
  buybutton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('you clicked the window');
    console.log(event.target);
  },
  { capture: true }
); // https://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/events.html#Events-phases

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mousemove', (e) => {
  console.count(e.currentTarget);
  console.log(this); // reserved word, point to photoEl here
});
