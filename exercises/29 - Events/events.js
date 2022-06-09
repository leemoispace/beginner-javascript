const butts = document.querySelector('.butts');
butts.addEventListener('click', handleClick);

const hooray = () => console.log('hooray!'); // no hoisting for anonymous functions

const coolButton = document.querySelector('.cool');
coolButton.addEventListener('click', hooray);

function handleClick() {
  console.log('clicked!');
}

// unbinding
// butts.removeEventListener('click', handleClick);

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');
console.log(buyButtons);

buyButtons.forEach((buyButton) =>
  buyButton.addEventListener('click', handleClick)
); // arrow function

// buttons.forEach((button) => button.addEventListener('click', deleteCard));
