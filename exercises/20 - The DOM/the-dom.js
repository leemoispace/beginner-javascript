// function init() {
//   const para = document.querySelector('p');
//   console.log(para);
// }

// document.addEventListener('DOMContentLoaded', init); // wait for loading

// const divs = document.querySelectorAll('div');
// console.log(divs);

// const classitems = document.querySelectorAll('.item');
// console.log(classitems);

// const imgs = document.querySelectorAll('div img');

// console.log(imgs);

// const item2 = document.querySelector('.item2');
// const imageinItems = item2.querySelector('img');
// console.log(imageinItems);
// // narrow down the selecting

// getElementByxxxxx

// Ep22 Element Properties and Methods

const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = document.querySelector('img');
const heading = item2.querySelector('h2');
// console.dir(heading);
// console.dir(heading.textContent); // aware of css styling
// console.log(heading.innerText);

// set property on the element
// heading.textContent = 'new content';
// console.dir(heading.textContent);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML); // including outer tags

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// node and tag
// pizzaList.insertAdjacentText('beforebegin', '🍕');

