const wes = document.querySelector('.wes');
console.log(wes.children);
console.log(wes.childNodes);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove(); // just remove from page, still in memory.

console.log(p);

document.body.appendChild(p);
