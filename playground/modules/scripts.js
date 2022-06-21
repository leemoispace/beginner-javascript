import first, { returnHi as sayHi, last, middle } from './utils.js';
// import anyname from './wes.js';
import * as everything from './wes.js';
import { handleButtonClick } from './handlers.js';

const name = 'leroy';

console.log(sayHi(name));
console.log(first, middle, last);
console.log(everything);

everything.eat();

const button = document.querySelector('button');
button.addEventListener('click', handleButtonClick);
