const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

// append child get all elements done then add to page together
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const myHeading = document.createElement('H2');
myHeading.textContent = 'I am a heading';

// insertAdjacentElement
myDiv.insertAdjacentElement('afterbegin', myHeading);

// ul
const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'One';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);


document.body.insertAdjacentElement('afterbegin', list);
