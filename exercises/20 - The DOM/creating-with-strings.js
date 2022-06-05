const item = document.querySelector('.item');
// console.log(item.innerHTML);

const src = 'https://source.unsplash.com/random/600x300';
const desc = '<style> *{display:none;}</style>'; // XSS, cross site scripting
const myHTML = `
    <div class="wrapper"> 
        <h1>below pic is inserted by string ${desc}</h1> 
        <img src=${src}" alt=${desc}/>
    </div>
`;
item.innerHTML = myHTML;

// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment.querySelector('img'));

// security
