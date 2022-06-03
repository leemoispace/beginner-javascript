// // function init() {
// //   const para = document.querySelector('p');
// //   console.log(para);
// // }

// // document.addEventListener('DOMContentLoaded', init); // wait for loading

// // const divs = document.querySelectorAll('div');
// // console.log(divs);

// // const classitems = document.querySelectorAll('.item');
// // console.log(classitems);

// // const imgs = document.querySelectorAll('div img');

// // console.log(imgs);

// // const item2 = document.querySelector('.item2');
// // const imageinItems = item2.querySelector('img');
// // console.log(imageinItems);
// // // narrow down the selecting

// // getElementByxxxxx

// // Ep22 Element Properties and Methods

// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = document.querySelector('img');
// const heading = item2.querySelector('h2');
// // console.dir(heading);
// // console.dir(heading.textContent); // aware of css styling
// // console.log(heading.innerText);

// // set property on the element
// // heading.textContent = 'new content';
// // console.dir(heading.textContent);

// // console.log(heading.innerHTML);
// // console.log(heading.outerHTML); // including outer tags

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// // node and tag
// // pizzaList.insertAdjacentText('beforebegin', '🍕');

// Ep23 classes!
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.add('round');
pic.classList.toggle('round');

console.log(pic.classList);
function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);
// by adding and remove class, u can control many elements style and attributes.
// pic.className

// Ep24 Build in and Custom Data Attributes
pic.alt = 'xxxx'; // set attribute
console.log(pic.naturalWidth); // getter
pic.addEventListener('load', () => {
  console.log(pic.naturalWidth);
});

pic.width = 200;

// not recommend to add own attributes.
// pic.setAttribute('alt', 'xxxx');
// console.log(pic.getAttribute('alt'));

// data-set
const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', () => {
  alert(`welcome ${custom.dataset.name} ${custom.dataset.first}`);
});
