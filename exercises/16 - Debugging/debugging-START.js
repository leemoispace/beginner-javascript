// const { groupEnd } = require('console');

const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// Console Methods
//
// people.forEach((person, index) => {
//   console.groupCollapsed(`${person.name}`);
//   console.log(person.country);
//   console.log(person.cool);
//   console.log('done');
//   console.groupEnd(`${person.name}`);
// });

// console.table(people);

function doALotOfStuff() {
  console.group('doing some stuff');
  console.log('hey i am one');
  console.warn('watch out!');
  console.error('he');
  console.groupEnd('Doing some stuff');
}

// Callstack

function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

// Grabbing Elements
// $0 $1 $ $$ select elements and get code fast.

// Breakpoints
// people.forEach((person, index) => {
//   // debugger; or click in dev tool source code.
//   console.log(`${person.name}`);
// });

// Scope

// Network Requests
// request analyse. Network padel in dev tool

// Break On Attribute
// locate where the change took place.
// event listener

// Some Setup Code

function doctorize(name) {
  console.count(`running doctorize for ${name}`);
  return `Dr. ${name}`;
}

const button = document.querySelector('.bigger');
button.addEventListener('click', (e) => {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
