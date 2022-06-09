// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
// add three list items with the words "one, two, three" in them
const ulHtml = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;
// put that list into the above wrapper
myDiv.innerHTML = ulHtml;

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/300';

// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
// put this div before the unordered list from above
const ulElement = myDiv.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const myDiv2 = myDiv.querySelector('.myDiv');
myDiv2.children[1].classList.add('warning');
// remove the first paragraph
myDiv2.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const html = `
        <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!
        <button class="delete" type="button">&times; Delete</button>
        </p>
        </div>
    `;
  return html;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('one', 12, 120);
cardsHTML += generatePlayerCard('two', 12, 120);
cardsHTML += generatePlayerCard('three', 12, 120);
cardsHTML += generatePlayerCard('four', 12, 120);

// append those cards to the div
cards.innerHTML = cardsHTML;
myDiv.insertAdjacentElement('beforebegin', cards);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.closest('.playerCard').remove(); // closest class match element
}

// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
